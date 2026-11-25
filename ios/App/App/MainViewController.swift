import UIKit
import WebKit
import Capacitor

/// The app's bridge view controller.
///
/// The page lays itself out from CSS variables this controller sets on <html>,
/// because WebKit does not tell it everything it needs:
///
/// - iPhone Duo moves the status bar and Dynamic Island into a column down the
///   side of the screen. The system reports the clock and camera there as
///   occlusion regions; --ios-status-bottom is where they end, so the page's
///   side rail can sit in that same column just below them (globals.css).
/// - The fold is a division region. --ios-fold-start / --ios-fold-end are its
///   edges along the axis it divides (--ios-fold-axis: x for a fold running top
///   to bottom, y for one running side to side), and --ios-fold-active is 1
///   while the device is partly folded. Two-pane screens put the gap between
///   their panes on it (page.js, useFoldColumns).
///
/// Each variable is removed on screens without that feature, so the page keeps
/// its normal layout everywhere else. The same values go to window.__wtpGeometry
/// with a 'wtp-geometry' event, for layout code that runs in JavaScript.
///
/// The status bar text also follows the page's background, because the app
/// has its own dark mode switch that can differ from the system's.
class MainViewController: CAPBridgeViewController {
    private var loadingObservation: NSKeyValueObservation?
    private var pageColorObservation: NSKeyValueObservation?
    /// The script last sent to the page, so layout passes only send changes.
    private var publishedScript = ""
    /// Chosen from the page's background once it loads; the Info.plist style until then.
    private var pageStatusBarStyle: UIStatusBarStyle?

    override func capacitorDidLoad() {
        super.capacitorDidLoad()
        // A full page load starts a fresh document: send the geometry again.
        loadingObservation = webView?.observe(\.isLoading) { [weak self] webView, _ in
            guard !webView.isLoading else { return }
            DispatchQueue.main.async {
                self?.publishedScript = ""
                self?.publishGeometry()
                #if DEBUG
                // Test hook for simulator screenshots, never in release builds:
                // SIMCTL_CHILD_WTP_DEBUG_SCRIPT='...' xcrun simctl launch <device> <bundle id>
                if let script = ProcessInfo.processInfo.environment["WTP_DEBUG_SCRIPT"] {
                    webView.evaluateJavaScript(script, completionHandler: nil)
                }
                #endif
            }
        }
        // WebKit derives underPageBackgroundColor from the page's background and
        // updates it when the page switches between light and dark.
        pageColorObservation = webView?.observe(\.underPageBackgroundColor) { [weak self] _, _ in
            DispatchQueue.main.async { self?.updateStatusBarStyle() }
        }
    }

    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        publishGeometry()
    }

    override var preferredStatusBarStyle: UIStatusBarStyle { pageStatusBarStyle ?? super.preferredStatusBarStyle }

    private func updateStatusBarStyle() {
        guard let color = webView?.underPageBackgroundColor else { return }
        let style: UIStatusBarStyle = color.isLight ? .darkContent : .lightContent
        guard style != pageStatusBarStyle else { return }
        pageStatusBarStyle = style
        setNeedsStatusBarAppearanceUpdate()
    }

    private func publishGeometry() {
        guard let webView = webView, let window = view.window else { return }
        var values: [String: String] = [:]

        if #available(iOS 27.1, *) {
            // System controls in a column along a side inset (iPhone Duo).
            let bounds = webView.bounds
            let insets = window.safeAreaInsets
            let inColumn = { (frame: CGRect) -> Bool in
                (insets.right > 0 && frame.minX >= bounds.maxX - insets.right - 0.5)
                    || (insets.left > 0 && frame.maxX <= bounds.minX + insets.left + 0.5)
            }
            let columnBottom = webView.reservedRegions(kind: .occlusion)
                .filter { inColumn($0.frame) }
                .map(\.frame.maxY)
                .max()
            if let bottom = columnBottom {
                values["--ios-status-bottom"] = "\(Int(bottom.rounded(.up)))px"
            }

            // The fold. While the device lies flat the region is inactive but
            // still marks where the crease is.
            if let fold = webView.reservedRegions(kind: .division, options: .includeInactive).first {
                let frame = fold.frame
                let runsTopToBottom = frame.height >= frame.width
                let start = runsTopToBottom ? frame.minX : frame.minY
                let end = runsTopToBottom ? frame.maxX : frame.maxY
                values["--ios-fold-axis"] = runsTopToBottom ? "x" : "y"
                values["--ios-fold-start"] = "\(Int(start.rounded(.down)))px"
                values["--ios-fold-end"] = "\(Int(end.rounded(.up)))px"
                values["--ios-fold-active"] = fold.isActive ? "1" : "0"
            }
        }

        let names = ["--ios-status-bottom", "--ios-fold-axis", "--ios-fold-start", "--ios-fold-end", "--ios-fold-active"]
        let assignments = names.map { name in
            values[name].map { "s.setProperty('\(name)','\($0)');" } ?? "s.removeProperty('\(name)');"
        }.joined()
        let detail = names.map { name in "'\(name)':\(values[name].map { "'\($0)'" } ?? "null")" }.joined(separator: ",")
        let script = "(function(){var s=document.documentElement.style;\(assignments)"
            + "window.__wtpGeometry={\(detail)};"
            + "window.dispatchEvent(new CustomEvent('wtp-geometry'));})()"
        guard script != publishedScript else { return }
        publishedScript = script
        webView.evaluateJavaScript(script, completionHandler: nil)
        #if DEBUG
        NSLog("WTP geometry %@ window %@ safe %@", values.description, NSCoder.string(for: window.bounds.size), NSCoder.string(for: window.safeAreaInsets))
        #endif
    }
}

private extension UIColor {
    /// True when dark status bar text reads better on this colour.
    var isLight: Bool {
        var red: CGFloat = 0, green: CGFloat = 0, blue: CGFloat = 0, alpha: CGFloat = 0
        guard getRed(&red, green: &green, blue: &blue, alpha: &alpha) else { return true }
        return 0.299 * red + 0.587 * green + 0.114 * blue > 0.6
    }
}
