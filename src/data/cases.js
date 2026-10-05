// Landmark court cases and legal documents referenced throughout the app.
// Each entry has a summary, key facts, and a link to official records.
// type: "case" (default), "statute", "report", "book"

export const cases = {
  // ============================================================
  // STATUTES, ACTS & LEGAL DOCUMENTS
  // ============================================================

  "National Emergencies Act (1976)": {
    name: "National Emergencies Act",
    year: 1976,
    citation: "50 U.S.C. ch. 34",
    amendment: "Art. I",
    type: "statute",
    summary: "A federal law that sets the rules for presidential declarations of national emergency. Congress passed it after a Senate committee found that emergencies declared decades earlier were still in effect, giving presidents access to hundreds of special statutory powers. The law requires the President to declare an emergency publicly and to specify which statutory powers are being activated, and it gives Congress the ability to review and end emergency declarations.",
    outcome: "Established procedural requirements for national emergencies: declarations must be published, Congress must be notified, and each house of Congress is supposed to meet every six months to consider ending the emergency. An emergency lapses after one year unless the President renews it. Congress can end an emergency by joint resolution, which the President can veto.",
    significance: "Critics argue the Act has done little to limit emergency powers. Dozens of national emergencies remain in effect, some for decades, and Congress rarely holds the six-month votes the law calls for. Because a resolution ending an emergency can be vetoed, Congress in practice needs a two-thirds vote in both chambers to override a President who disagrees. Presidents have used the Act for purposes ranging from economic sanctions to redirecting funds for a border wall in 2019.",
    url: "https://www.law.cornell.edu/uscode/text/50/chapter-34"
  },
  "Posse Comitatus Act (1878)": {
    name: "Posse Comitatus Act",
    year: 1878,
    citation: "18 U.S.C. § 1385",
    amendment: "Art. I",
    type: "statute",
    summary: "A federal law that prohibits the use of the United States military to enforce domestic civil laws. Enacted after Reconstruction, when federal troops were used extensively in the South to enforce laws and oversee elections, the Act was designed to prevent the military from becoming a tool of domestic law enforcement and political control.",
    outcome: "Makes it a federal crime, punishable by fines and up to two years in prison, to willfully use the military to execute civilian laws unless the Constitution or an Act of Congress expressly allows it. The law originally covered only the Army; the Air Force was added in 1956, and the Navy, Marine Corps and Space Force in 2021. It does not apply to the National Guard when serving under a governor's control.",
    significance: "The Act separates military and civilian authority, but Congress has created exceptions. The Insurrection Act allows the President to deploy troops domestically in certain circumstances, and other laws allow the military to support civilian police with equipment, training and surveillance, for example in drug interdiction and border security. How far those exceptions reach is often debated when troops are deployed at home.",
    url: "https://www.law.cornell.edu/uscode/text/18/1385"
  },
  "War Powers Resolution (1973)": {
    name: "War Powers Resolution",
    year: 1973,
    citation: "50 U.S.C. ch. 33",
    amendment: "Art. I",
    type: "statute",
    summary: "A federal law passed over President Nixon's veto to reassert Congress's constitutional authority to declare war. After Presidents Truman, Johnson, and Nixon committed troops to extended conflicts without Congressional declarations of war, Congress enacted this resolution to require presidential consultation with and reporting to Congress before and during military operations.",
    outcome: "Requires the President to notify Congress within 48 hours of committing armed forces to military action and prohibits forces from remaining deployed for more than 60 days (with a 30-day withdrawal period) without Congressional authorization or a formal declaration of war.",
    significance: "Its effectiveness is debated. Presidents of both parties have questioned whether parts of it are constitutional, and they usually file reports 'consistent with' the resolution rather than 'pursuant to' it, which avoids formally starting the 60-day clock. Operations such as the air campaigns in Kosovo (1999) and Libya (2011) continued past 60 days without specific authorization from Congress.",
    url: "https://www.law.cornell.edu/uscode/text/50/chapter-33"
  },
  "Immigration and Nationality Act § 287 (1952)": {
    name: "Immigration and Nationality Act § 287: Powers of Immigration Officers",
    year: 1952,
    citation: "8 U.S.C. § 1357",
    amendment: "4th",
    type: "statute",
    summary: "The federal statute that defines what immigration officers can and cannot legally do. It allows officers to question people they believe to be noncitizens about their right to be in the country. It allows arrests without a warrant only in limited situations, such as when an officer has reason to believe a noncitizen is in the country unlawfully and is likely to escape before a warrant can be obtained. The 'warrants' ICE typically carries (Form I-200, Warrant for Arrest of Alien, and Form I-205, Warrant of Removal) are administrative documents signed by immigration officers or supervisors, not by judges.",
    outcome: "Nothing in the statute authorizes officers to enter a home without consent. It permits warrantless access to private lands within 25 miles of a border for patrol purposes, but it expressly excludes dwellings. Under the 4th Amendment, entering a home without consent generally requires a warrant signed by a judge or a genuine emergency, and an administrative form signed by an immigration officer is not a judicial warrant.",
    significance: "This is the legal basis for the 'red card' advice: an ICE administrative warrant is not a judicial warrant. If agents cannot show a warrant signed by a judge, with the correct name and address, residents may lawfully keep the door closed and remain silent. Knowing the difference between Form I-200/I-205 and a judicial warrant is one of the most useful things to understand during a home encounter with immigration enforcement.",
    url: "https://www.law.cornell.edu/uscode/text/8/1357"
  },
  "DOJ Ferguson Report (2015)": {
    name: "DOJ Investigation of the Ferguson Police Department",
    year: 2015,
    citation: "U.S. Department of Justice, Civil Rights Division",
    amendment: "8th",
    type: "report",
    summary: "After the 2014 shooting of Michael Brown by a Ferguson police officer, the Department of Justice investigated the police department and municipal court system of Ferguson, Missouri. The report concluded that the city's law enforcement practices were shaped by a focus on raising revenue rather than by public safety needs, and that fines and fees fell especially hard on Black residents.",
    outcome: "The investigation found a pattern of conduct that violated the Constitution and federal law, including stops and arrests without legal justification, excessive force, and court practices such as issuing arrest warrants for missed payments and imposing large fines for minor offenses. It also found significant racial disparities at nearly every stage of the system. In 2016 the city entered into a court-approved consent decree requiring reforms.",
    significance: "The report drew national attention to the practice of funding local government through fines and fees, and to how unpaid fines can lead to arrest warrants and jail. It is often cited in debates over court debt and the Excessive Fines Clause of the 8th Amendment, as well as equal protection under the 14th Amendment.",
    url: "https://www.justice.gov/sites/default/files/opa/press-releases/attachments/2015/03/04/ferguson_police_department_report.pdf"
  },
  "ACLU Report: War Comes Home (2014)": {
    name: "War Comes Home: The Excessive Militarization of American Policing",
    year: 2014,
    citation: "American Civil Liberties Union",
    amendment: "4th",
    type: "report",
    summary: "An ACLU study of the militarization of American policing. The report analyzed more than 800 SWAT deployments by law enforcement agencies in 2011 and 2012 and concluded that most were used for routine police work, especially serving search warrants in drug cases, rather than the emergencies SWAT teams were created for. It also described how the Department of Defense's 1033 Program had transferred billions of dollars' worth of military equipment to local police.",
    outcome: "According to the report, 79 percent of the deployments it studied were to execute search warrants, most often in drug investigations, and only a small share involved hostage, barricade or active-shooter situations. It reported that people affected by SWAT deployments were disproportionately people of color and that military equipment and tactics were being used with little oversight or accountability.",
    significance: "The report contributed to a national debate about police use of military equipment that intensified after the 2014 protests in Ferguson, Missouri. In 2015, President Obama's Executive Order 13688 led to limits on transferring certain military equipment to police, and later administrations have loosened or restored such limits. The issue echoes the Declaration of Independence's complaint that the King had 'affected to render the Military independent of and superior to the Civil power.'",
    url: "https://www.aclu.org/publications/war-comes-home-excessive-militarization-american-police"
  },
  "John Locke, Second Treatise of Government (1689)": {
    name: "Second Treatise of Government",
    year: 1689,
    citation: "John Locke",
    amendment: "Preamble",
    type: "book",
    summary: "One of the most influential political philosophy texts in history, written by English philosopher John Locke. The treatise argues that all people possess natural rights to life, liberty, and property, that government exists only by the consent of the governed, and that when government fails to protect these rights, the people have the right to overthrow it. Thomas Jefferson drew heavily from Locke when drafting the Declaration of Independence.",
    outcome: "Set out ideas that became central to liberal democracy: natural rights, government by consent, limits on government power, and a right to resist a government that abuses its trust. These ideas strongly influenced the American Revolution and, later, the French Revolution.",
    significance: "The Declaration's phrase 'Life, Liberty and the pursuit of Happiness' is widely seen as adapting Locke's trio of 'life, liberty and estate,' which he grouped together as 'property.' The Declaration's ideas of consent of the governed and the right to alter or abolish government also reflect Locke's arguments. It remains one of the most important philosophical sources for understanding American constitutional principles.",
    url: "https://www.gutenberg.org/ebooks/7370"
  },
  "Military Commissions Act (2006)": {
    name: "Military Commissions Act",
    year: 2006,
    citation: "Pub.L. 109-366, 120 Stat. 2600",
    amendment: "Art. I",
    type: "statute",
    summary: "A federal law enacted in response to the Supreme Court's decision in Hamdan v. Rumsfeld, which struck down the original military commission system at Guantanamo Bay. The Act authorized military commissions to try 'unlawful enemy combatants' and attempted to strip federal courts of habeas corpus jurisdiction over detainees held at Guantanamo.",
    outcome: "Established military commissions with modified procedures for trying terrorism suspects. Stripped federal courts of jurisdiction to hear habeas corpus petitions from enemy combatants. However, the Supreme Court struck down the habeas-stripping provisions in Boumediene v. Bush (2008).",
    significance: "The Supreme Court's rejection of its habeas-stripping provisions reaffirmed that Congress cannot eliminate the constitutional right to challenge detention without providing an adequate substitute, even during the war on terror. Congress later revised the military commission rules in the Military Commissions Act of 2009.",
    url: "https://www.congress.gov/109/plaws/publ366/PLAW-109publ366.htm"
  },
  "Ex parte Merryman (1861)": {
    name: "Ex parte Merryman",
    year: 1861,
    citation: "17 F. Cas. 144",
    amendment: "Art. I",
    type: "case",
    summary: "Early in the Civil War, President Lincoln authorized military commanders to suspend habeas corpus along the rail lines near Washington and to detain people suspected of aiding the Confederacy. John Merryman, a Maryland farmer and militia officer accused of helping destroy bridges and telegraph lines to block Union troops, was arrested by the army and held at Fort McHenry. Chief Justice Roger Taney, acting as a federal circuit judge, ruled that only Congress, not the President, has the power to suspend habeas corpus.",
    outcome: "Taney ordered Merryman brought before the court, but the commander of Fort McHenry refused, and Lincoln did not comply with Taney's ruling. In a July 1861 message to Congress, Lincoln argued that the emergency justified his actions and that the Constitution's suspension clause does not say which branch may invoke it. Merryman was released several weeks later and was never tried.",
    significance: "A major test of constitutional limits in wartime and of the relationship between the President and the courts. In 1863 Congress passed the Habeas Corpus Suspension Act, which authorized the President to suspend the writ for the rest of the war. The question Taney raised, which branch may suspend habeas corpus, has never been definitively settled by the Supreme Court.",
    url: "https://static.case.law/f-cas/17/html/0144-02.html"
  },

  // ============================================================
  // COURT CASES
  // ============================================================


  "Miranda v. Arizona (1966)": {
    name: "Miranda v. Arizona",
    year: 1966,
    citation: "384 U.S. 436",
    amendment: "5th",
    summary: "The Supreme Court ruled that police must inform suspects of their rights before custodial interrogation. Ernesto Miranda confessed to kidnapping and rape without being told he could remain silent or have an attorney. The Court held that the 5th Amendment's protection against self-incrimination requires what we now call 'Miranda warnings' before any questioning in custody.",
    outcome: "The Court ruled 5-4, in an opinion by Chief Justice Warren, that Miranda's confession could not be used because he had not been warned of his rights. Arizona retried him without the confession, and he was convicted again on other evidence.",
    significance: "Created the Miranda warnings that police must give before questioning anyone in custody: the right to remain silent, that anything said can be used against them, the right to an attorney, and the right to a court-appointed attorney if they cannot afford one. Statements taken in custodial questioning without these warnings generally cannot be used to prove guilt at trial. The Court reaffirmed the rule in Dickerson v. United States (2000).",
    url: "https://supreme.justia.com/cases/federal/us/384/436/"
  },
  "Riley v. California (2014)": {
    name: "Riley v. California",
    year: 2014,
    citation: "573 U.S. 373",
    amendment: "4th",
    summary: "The Supreme Court unanimously held that police must obtain a warrant before searching the digital contents of a cell phone seized during an arrest. David Riley was pulled over for expired tags and police searched his smartphone without a warrant, finding evidence linking him to a shooting. The Court recognized that cell phones contain vast amounts of personal data far beyond what could be found in a physical search.",
    outcome: "The Court ruled 9-0, in an opinion by Chief Justice Roberts, that the rule allowing police to search people they arrest does not extend to the data on their cell phones. Officers may seize a phone during an arrest, but they generally need a warrant to search it unless an emergency requires immediate action. The decision against Riley was reversed and sent back to the California courts.",
    significance: "Established that digital privacy is constitutionally protected. The Court noted that modern cell phones are 'such a pervasive and insistent part of daily life that the proverbial visitor from Mars might conclude they were an important feature of human anatomy.'",
    url: "https://supreme.justia.com/cases/federal/us/573/373/"
  },
  "Rodriguez v. United States (2015)": {
    name: "Rodriguez v. United States",
    year: 2015,
    citation: "575 U.S. 348",
    amendment: "4th",
    summary: "The Supreme Court ruled that police cannot extend a completed traffic stop even briefly to conduct a dog sniff without reasonable suspicion of criminal activity. Dennys Rodriguez was stopped for driving on a highway shoulder. After the officer completed the traffic stop, he detained Rodriguez for 7-8 additional minutes to wait for a drug-sniffing dog, which found methamphetamine.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Ginsburg, that extending a completed traffic stop for a dog sniff, without separate reasonable suspicion, violates the 4th Amendment. It sent the case back to decide whether the officer had reasonable suspicion. On remand, the appeals court let the evidence stand because the officer had relied in good faith on the court precedent in effect at the time of the stop.",
    significance: "Set a firm rule: a traffic stop that is 'prolonged beyond the time reasonably required' to handle the traffic violation violates the 4th Amendment unless the officer has independent reasonable suspicion.",
    url: "https://supreme.justia.com/cases/federal/us/575/348/"
  },
  "Glik v. Cunniffe (2011)": {
    name: "Glik v. Cunniffe",
    year: 2011,
    citation: "655 F.3d 78 (1st Cir.)",
    amendment: "1st",
    summary: "Simon Glik used his cell phone to record Boston police officers arresting a man on the Boston Common. Officers arrested Glik for illegal wiretapping. The First Circuit Court of Appeals ruled that the First Amendment protects the right of private citizens to record police officers performing their duties in public spaces.",
    outcome: "The First Circuit held that the officers were not entitled to qualified immunity, because Glik's right to openly film them in a public place was clearly established. The criminal charges against Glik had already been dismissed, and in 2012 the City of Boston settled his civil lawsuit for $170,000.",
    significance: "A leading case on the right to record police in public. The court called that right 'a basic, vital, and well-established liberty safeguarded by the First Amendment,' while noting it is subject to reasonable limits. Several other federal appeals courts have since reached the same conclusion, but the Supreme Court has not ruled on the question.",
    url: "https://static.case.law/f3d/655/html/0078-01.html"
  },
  "Gideon v. Wainwright (1963)": {
    name: "Gideon v. Wainwright",
    year: 1963,
    citation: "372 U.S. 335",
    amendment: "6th",
    summary: "Clarence Earl Gideon was charged with breaking and entering a pool hall in Florida. Too poor to afford a lawyer, he asked the court to appoint one. The judge refused, as Florida law only provided free counsel in capital cases. Gideon represented himself and was convicted. He handwrote a petition to the Supreme Court from prison, and the Court unanimously ruled that states must provide attorneys to defendants who cannot afford them.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Black, that the 6th Amendment right to counsel applies to the states, overruling Betts v. Brady (1942). At his retrial, with a lawyer, Gideon was acquitted.",
    significance: "Established that states must provide a lawyer to defendants in felony cases who cannot afford one, and later cases extended the right to any case in which the defendant is sentenced to jail time. The Court declared that 'any person haled into court, who is too poor to hire a lawyer, cannot be assured a fair trial unless counsel is provided for him.'",
    url: "https://supreme.justia.com/cases/federal/us/372/335/"
  },
  "Chimel v. California (1969)": {
    name: "Chimel v. California",
    year: 1969,
    citation: "395 U.S. 752",
    amendment: "4th",
    summary: "Police arrested Ted Chimel at his home for burglary and then conducted a warrantless search of his entire house, finding stolen coins. The Supreme Court ruled that a search 'incident to arrest' is limited to the person and the area within their immediate control, not their entire home.",
    outcome: "The Court ruled 6-2, in an opinion by Justice Stewart, that the search of Chimel's entire house went beyond what a search incident to arrest allows, and it reversed his conviction. Police may search the arrested person and the area within his immediate control, but searching other rooms requires a warrant or another recognized exception.",
    significance: "Defined the scope of searches during arrest: police can search the person and the area within 'arm's reach' for weapons or evidence that might be destroyed, but anything beyond that requires a warrant.",
    url: "https://supreme.justia.com/cases/federal/us/395/752/"
  },
  "Stack v. Boyle (1951)": {
    name: "Stack v. Boyle",
    year: 1951,
    citation: "342 U.S. 1",
    amendment: "8th",
    summary: "Twelve Communist Party leaders were arrested under the Smith Act and bail was set at $50,000 each (equivalent to roughly $600,000 today). The Supreme Court ruled that bail set higher than what is reasonably necessary to ensure the defendant appears at trial is 'excessive' under the 8th Amendment.",
    outcome: "The Court ruled 8-0, in an opinion by Chief Justice Vinson, that bail had been set without the required showing that such high amounts were needed to ensure each defendant would appear for trial. Because the defendants had used the wrong procedure, the Court sent the case back so they could ask the trial court to reduce bail, with a right to appeal.",
    significance: "Established the standard for bail: it must be set at an amount reasonably calculated to ensure the defendant's presence at trial, not as a form of punishment. The right to bail before trial is fundamental to the presumption of innocence.",
    url: "https://supreme.justia.com/cases/federal/us/342/1/"
  },
  "Barker v. Wingo (1972)": {
    name: "Barker v. Wingo",
    year: 1972,
    citation: "407 U.S. 514",
    amendment: "6th",
    summary: "Willie Barker's trial was delayed over 5 years through 16 continuances by the prosecution. The Supreme Court created a four-part balancing test to determine if the right to a speedy trial has been violated: length of delay, reason for delay, whether the defendant asserted the right, and prejudice to the defendant.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Powell, that Barker's right to a speedy trial was not violated. Although the delay of more than five years was long, Barker did not object to the continuances for years, apparently hoping his co-defendant would be acquitted, and the prejudice to him was minimal.",
    significance: "Created the framework courts still use today to evaluate speedy trial claims. Made clear that the right to a speedy trial is fundamental but must be evaluated case by case.",
    url: "https://supreme.justia.com/cases/federal/us/407/514/"
  },
  "Brown v. Mississippi (1936)": {
    name: "Brown v. Mississippi",
    year: 1936,
    citation: "297 U.S. 278",
    amendment: "5th",
    summary: "Three Black men were tortured by sheriff's deputies until they confessed to murder. One was hung from a tree and whipped; the others were beaten severely. The Supreme Court reversed their convictions, ruling that confessions obtained through torture and physical brutality violate due process.",
    outcome: "The Court ruled 9-0, in an opinion by Chief Justice Hughes, that convictions resting on confessions extracted by torture violate the Due Process Clause of the 14th Amendment. The convictions were reversed.",
    significance: "The first case where the Supreme Court applied the Due Process Clause to bar coerced confessions in state courts. Established that the Constitution forbids convictions based on confessions extracted by violence.",
    url: "https://supreme.justia.com/cases/federal/us/297/278/"
  },
  "Hague v. CIO (1939)": {
    name: "Hague v. CIO",
    year: 1939,
    citation: "307 U.S. 496",
    amendment: "1st",
    summary: "Jersey City Mayor Frank Hague's administration used city ordinances to deny permits for meetings of the Committee for Industrial Organization (CIO), a labor group, and police removed union organizers from the city. The Supreme Court ruled against the city, and the lead opinion declared that public streets and parks have long been held in trust for the public to use for assembly and discussion.",
    outcome: "The Court upheld, with some changes, an order barring the city's practices, although the justices in the majority did not agree on a single opinion. Justice Roberts' lead opinion held that the permit ordinance was invalid because it let a city official refuse permits based on his own opinion that a meeting might cause disorder.",
    significance: "The lead opinion's statement that streets and parks 'have immemorially been held in trust for the use of the public' became the foundation of the 'public forum doctrine': government-owned spaces like streets, parks and sidewalks are places where people have a strong constitutional right to gather and speak.",
    url: "https://supreme.justia.com/cases/federal/us/307/496/"
  },
  "Police Dept. of Chicago v. Mosley (1972)": {
    name: "Police Dept. of Chicago v. Mosley",
    year: 1972,
    citation: "408 U.S. 92",
    amendment: "14th",
    summary: "Chicago banned all picketing near schools except for labor picketing. Earl Mosley, who had been peacefully protesting racial discrimination at a school, was prohibited from continuing. The Supreme Court ruled that the government cannot discriminate between types of speech based on content.",
    outcome: "The Court unanimously struck down the ordinance, in an opinion by Justice Marshall. Because it allowed peaceful labor picketing while banning all other peaceful picketing near schools, it treated speakers differently based on the subject of their message, which violated the Equal Protection Clause.",
    significance: "Established the principle of content neutrality in free speech law: the government cannot favor certain messages over others. As the Court stated, 'above all else, the First Amendment means that government has no power to restrict expression because of its message, its ideas, its subject matter, or its content.'",
    url: "https://supreme.justia.com/cases/federal/us/408/92/"
  },
  "Forsyth County v. Nationalist Movement (1992)": {
    name: "Forsyth County v. Nationalist Movement",
    year: 1992,
    citation: "505 U.S. 123",
    amendment: "1st",
    summary: "Forsyth County, Georgia charged variable permit fees for demonstrations based on the anticipated cost of maintaining public order. Groups expected to attract hostile counter-protesters were charged more. The Supreme Court ruled that the government cannot charge more for permits based on the content of the speech or the anticipated hostile reaction of the audience.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Blackmun, that the ordinance was unconstitutional on its face. It gave the county administrator unchecked discretion to set fees, and it let fees rise with the expected hostility of the audience, which made the cost of a permit depend on the content of the speech.",
    significance: "Reinforced the rule against a 'heckler's veto': the government cannot burden or silence a speaker because of how a hostile audience may react. The cost of keeping order around unpopular speech cannot be shifted to the speaker on that basis.",
    url: "https://supreme.justia.com/cases/federal/us/505/123/"
  },
  "Carpenter v. United States (2018)": {
    name: "Carpenter v. United States",
    year: 2018,
    citation: "585 U.S. 296",
    amendment: "4th",
    summary: "The FBI obtained 127 days of historical cell-site location information from Timothy Carpenter's wireless carrier without a warrant, tracking his movements in connection with a series of robberies. The Supreme Court ruled 5-4 that obtaining this type of detailed location data constitutes a search under the 4th Amendment and requires a warrant.",
    outcome: "The Court ruled 5-4, in an opinion by Chief Justice Roberts, that the government generally needs a warrant to obtain historical cell-site location records, at least when they cover seven days or more. The Court called its decision narrow and did not address real-time tracking or shorter periods. On remand, Carpenter's convictions were upheld because agents had relied in good faith on the law in effect at the time.",
    significance: "Extended 4th Amendment protections into the digital age. The Court recognized that cell phone location data provides an 'intimate window into a person's life' and that people do not voluntarily give up their privacy simply by using a cell phone. Chatrie v. United States (2026) extended the ruling to the detailed location history that services like Google's record, even over a short period.",
    url: "https://supreme.justia.com/cases/federal/us/585/16-402/"
  },
  "Packingham v. North Carolina (2017)": {
    name: "Packingham v. North Carolina",
    year: 2017,
    citation: "582 U.S. 98",
    amendment: "1st",
    summary: "North Carolina made it a felony for registered sex offenders to access social media sites that allow minors to join. Lester Packingham was convicted under the law for posting on Facebook about a dismissed traffic ticket. The Supreme Court struck down the law, holding that it barred access to far more speech than necessary.",
    outcome: "The Court ruled 8-0, in an opinion by Justice Kennedy, that the law violated the First Amendment. States may pass narrower laws, such as bans on contacting minors online, but cannot bar sex offenders from social media altogether.",
    significance: "The Court described cyberspace, and social media in particular, as one of the most important places today for people to exchange views, comparing it to streets and parks. The case is often cited for the principle that access to social media is protected by the First Amendment.",
    url: "https://supreme.justia.com/cases/federal/us/582/15-1194/"
  },
  "United States v. Warshak (2010)": {
    name: "United States v. Warshak",
    year: 2010,
    citation: "631 F.3d 266 (6th Cir.)",
    amendment: "4th",
    summary: "The government obtained tens of thousands of Steven Warshak's emails from his ISP without a warrant, using only a subpoena under the Stored Communications Act. The Sixth Circuit ruled that email users have a reasonable expectation of privacy in the contents of their emails, and the government needs a warrant to compel an ISP to turn them over.",
    outcome: "The Sixth Circuit held that the government violated the 4th Amendment by obtaining the emails without a warrant, and that the Stored Communications Act is unconstitutional to the extent it allows this. The emails were still admissible because agents had relied in good faith on that statute, and Warshak's fraud convictions were largely upheld.",
    significance: "Extended 4th Amendment protection to the contents of email, treating it like traditional mail. Although the ruling binds only courts in the Sixth Circuit, major email providers now generally require a warrant before disclosing the contents of messages.",
    url: "https://static.case.law/f3d/631/html/0266-01.html"
  },
  "McIntyre v. Ohio Elections Commission (1995)": {
    name: "McIntyre v. Ohio Elections Commission",
    year: 1995,
    citation: "514 U.S. 334",
    amendment: "1st",
    summary: "Margaret McIntyre distributed anonymous leaflets opposing a proposed school tax levy. Ohio law required all campaign literature to include the name and address of the person issuing it. The Supreme Court struck down the law, holding that anonymous political speech is protected by the First Amendment.",
    outcome: "The Court ruled 7-2, in an opinion by Justice Stevens, that Ohio's ban on anonymous campaign literature violated the First Amendment, and it reversed the decision upholding the $100 fine imposed on McIntyre.",
    significance: "Protected the right to speak anonymously, a tradition dating to the Founding Fathers who wrote the Federalist Papers under pseudonyms. The Court stated: 'Anonymity is a shield from the tyranny of the majority.'",
    url: "https://supreme.justia.com/cases/federal/us/514/334/"
  },
  "Brandenburg v. Ohio (1969)": {
    name: "Brandenburg v. Ohio",
    year: 1969,
    citation: "395 U.S. 444",
    amendment: "1st",
    summary: "Clarence Brandenburg, a Ku Klux Klan leader in Ohio, was convicted under a state law for advocating violence at a KKK rally. The Supreme Court reversed his conviction and established the modern standard for when the government can punish speech advocating illegal action: only when the speech is 'directed to inciting or producing imminent lawless action and is likely to incite or produce such action.'",
    outcome: "In an unsigned (per curiam) opinion, the Court unanimously reversed the conviction. It held that Ohio's law was unconstitutional because it punished mere advocacy of violence, without requiring incitement to imminent lawless action, and it overruled Whitney v. California (1927).",
    significance: "Created the 'imminent lawless action' test that remains the standard today. Mere advocacy of illegal action is protected speech; only speech intended and likely to cause immediate illegal action can be punished.",
    url: "https://supreme.justia.com/cases/federal/us/395/444/"
  },
  "Texas v. Johnson (1989)": {
    name: "Texas v. Johnson",
    year: 1989,
    citation: "491 U.S. 397",
    amendment: "1st",
    summary: "Gregory Lee Johnson burned an American flag outside the 1984 Republican National Convention in Dallas to protest Reagan administration policies. He was convicted under Texas law for desecrating a venerated object. The Supreme Court ruled 5-4 that flag burning is protected symbolic speech under the First Amendment.",
    outcome: "By a 5-4 vote, the Court affirmed the Texas Court of Criminal Appeals, which had overturned Johnson's conviction. Justice Brennan wrote that burning the flag as part of a political protest is expressive conduct, and that the state's interest in preserving the flag as a symbol of national unity did not justify punishing him. When Congress responded with the Flag Protection Act of 1989, the Court struck that law down the next year in United States v. Eichman (1990).",
    significance: "Established that the government cannot prohibit expression simply because it finds the message disagreeable. Justice Brennan wrote: 'If there is a bedrock principle underlying the First Amendment, it is that the government may not prohibit the expression of an idea simply because society finds the idea itself offensive or disagreeable.'",
    url: "https://supreme.justia.com/cases/federal/us/491/397/"
  },
  "Central Hudson Gas v. Public Service Commission (1980)": {
    name: "Central Hudson Gas v. Public Service Commission",
    year: 1980,
    citation: "447 U.S. 557",
    amendment: "1st",
    summary: "During the 1973 energy crisis, New York banned promotional advertising by electric utilities. Central Hudson Gas challenged the ban. The Supreme Court created a four-part test for commercial speech: the speech must concern lawful activity and not be misleading; the government interest must be substantial; the regulation must directly advance that interest; and it must be no more extensive than necessary.",
    outcome: "The Court ruled 8-1, in an opinion by Justice Powell, that the ban violated the First Amendment. The state's interest in conserving energy was substantial, but a complete ban on promotional advertising was more extensive than necessary to serve it.",
    significance: "Established the framework for commercial speech protection. While commercial speech gets less protection than political speech, the government still needs a good reason and a narrow approach to restrict it.",
    url: "https://supreme.justia.com/cases/federal/us/447/557/"
  },
  "New York Times Co. v. United States (1971)": {
    name: "New York Times Co. v. United States",
    year: 1971,
    citation: "403 U.S. 713",
    amendment: "1st",
    summary: "The Nixon administration sought to stop the New York Times and the Washington Post from publishing the Pentagon Papers, a classified Defense Department history of U.S. decision-making in the Vietnam War. The Supreme Court ruled 6-3 that the government had not met the heavy burden required to justify a 'prior restraint' on publication, even of classified material.",
    outcome: "In a short unsigned opinion, the Court lifted the orders blocking publication, and each of the nine justices also wrote separately. The newspapers resumed publishing stories based on the Pentagon Papers.",
    significance: "A cornerstone of press freedom in America. It confirmed that the government faces an extremely high bar when it tries to stop publication in advance, although several justices left open whether anyone could be prosecuted after publication.",
    url: "https://supreme.justia.com/cases/federal/us/403/713/"
  },
  "Kelo v. City of New London (2005)": {
    name: "Kelo v. City of New London",
    year: 2005,
    citation: "545 U.S. 469",
    amendment: "5th",
    summary: "The city of New London, Connecticut used eminent domain to take Susette Kelo's home as part of an economic development plan meant to complement a new Pfizer research facility nearby. Much of the land would go to private developers. The Supreme Court ruled 5-4 that 'public use' in the 5th Amendment includes economic development, even when the property is transferred to private parties.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Stevens, that the takings were permitted because they served a carefully considered city development plan. Kelo's house was later moved to another site in New London, and the planned development on the land was never built.",
    significance: "The decision drew criticism from across the political spectrum, and more than 40 states later passed laws limiting the use of eminent domain for private development. Supporters argue cities need this tool to revitalize struggling areas; critics argue it lets governments take homes for the benefit of private developers.",
    url: "https://supreme.justia.com/cases/federal/us/545/469/"
  },
  "Timbs v. Indiana (2019)": {
    name: "Timbs v. Indiana",
    year: 2019,
    citation: "586 U.S. 146",
    amendment: "8th",
    summary: "Tyson Timbs pleaded guilty to dealing heroin and was sentenced to one year of home detention and five years of probation. Indiana also used civil forfeiture to seize his $42,000 Land Rover, which he had bought with life insurance money he received after his father's death. The Supreme Court unanimously ruled that the 8th Amendment's Excessive Fines Clause applies to state and local governments, not just the federal government.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Ginsburg, that the Excessive Fines Clause applies to the states through the 14th Amendment. It sent the case back to the Indiana courts to decide whether taking the Land Rover was excessive.",
    significance: "Applied the Excessive Fines Clause to the states for the first time. People can now challenge state and local fines and forfeitures that are grossly disproportionate to the offense, a significant issue in debates over civil asset forfeiture.",
    url: "https://supreme.justia.com/cases/federal/us/586/17-1091/"
  },
  "Engblom v. Carey (1982)": {
    name: "Engblom v. Carey",
    year: 1982,
    citation: "677 F.2d 957 (2d Cir.)",
    amendment: "3rd",
    summary: "During a corrections officers' strike in New York, the National Guard was housed in the striking officers' residential quarters at the prison complex. The officers sued, claiming this violated their Third Amendment right against quartering soldiers. The Second Circuit ruled that the Third Amendment applies to state governments and protects tenants, not just property owners.",
    outcome: "The Second Circuit reversed the lower court's ruling against the officers on their Third Amendment claim and sent the case back. The state officials were then granted qualified immunity because the law had not been clearly established at the time, a result the appeals court later affirmed.",
    significance: "One of very few court decisions interpreting the Third Amendment. Within the Second Circuit, it established that the amendment applies to the states and that National Guard members count as 'soldiers.' The Supreme Court has never decided a Third Amendment case.",
    url: "https://static.case.law/f2d/677/html/0957-01.html"
  },
  "Harper v. Virginia Board of Elections (1966)": {
    name: "Harper v. Virginia Board of Elections",
    year: 1966,
    citation: "383 U.S. 663",
    amendment: "24th",
    summary: "Virginia required a $1.50 annual poll tax to vote in state and local elections. Annie Harper challenged the tax. The Supreme Court ruled that conditioning the right to vote on payment of a fee or tax violates the Equal Protection Clause of the 14th Amendment, regardless of how small the amount.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Douglas, that a state violates the Equal Protection Clause when it makes paying a fee or tax a condition of voting. It overruled Breedlove v. Suttles (1937), which had upheld a poll tax, and declared that 'voter qualifications have no relation to wealth.'",
    significance: "Ended poll taxes in state and local elections, which had been used to keep poor voters, particularly Black citizens in the South, from voting. Together with the 24th Amendment, which banned poll taxes in federal elections, this case means no state may charge a fee to vote.",
    url: "https://supreme.justia.com/cases/federal/us/383/663/"
  },
  "Bush v. Gore (2000)": {
    name: "Bush v. Gore",
    year: 2000,
    citation: "531 U.S. 98",
    amendment: "14th",
    summary: "During the 2000 presidential election, the outcome hinged on Florida's 25 electoral votes. The Florida Supreme Court had ordered a statewide manual recount, but counties were using different standards to judge the same kinds of ballots. In an unsigned opinion, the Supreme Court held that the recount violated the Equal Protection Clause because identical ballots could be treated differently depending on the county; seven justices saw constitutional problems with the recount.",
    outcome: "By a 5-4 vote, the Court ended the recount, reasoning that no recount meeting constitutional standards could be finished by December 12, the federal 'safe harbor' deadline for settling disputes over electors. Florida's certified result, a 537-vote margin for George W. Bush, stood, giving him Florida's electoral votes and the presidency.",
    significance: "The Court said its consideration was 'limited to the present circumstances.' The decision showed that equal protection can apply to how votes are counted, and it remains one of the most debated rulings in Supreme Court history.",
    url: "https://supreme.justia.com/cases/federal/us/531/98/"
  },
  "Engel v. Vitale (1962)": {
    name: "Engel v. Vitale",
    year: 1962,
    citation: "370 U.S. 421",
    amendment: "1st",
    summary: "New York's Board of Regents composed a 'nondenominational' prayer and recommended it be recited in public schools each morning. Several parents sued, arguing that any government-composed prayer in schools violates the Establishment Clause. The Supreme Court agreed 6-1.",
    outcome: "The Court ruled 6-1, in an opinion by Justice Black, that state officials may not compose an official prayer and have it recited in public schools. It made no difference that the prayer was nondenominational or that students could remain silent or leave the room.",
    significance: "Established that the government cannot compose or sponsor prayers, even 'nondenominational' ones, in public schools. Students retain the right to pray privately, but the school cannot organize, lead, or endorse prayer.",
    url: "https://supreme.justia.com/cases/federal/us/370/421/"
  },
  "Church of Lukumi Babalu Aye v. Hialeah (1993)": {
    name: "Church of Lukumi Babalu Aye v. Hialeah",
    year: 1993,
    citation: "508 U.S. 520",
    amendment: "1st",
    summary: "When a Santeria church announced plans to open a house of worship in Hialeah, Florida, the city passed ordinances banning ritual animal sacrifice while allowing many other kinds of animal killing, such as hunting, pest control and kosher slaughter. The Supreme Court unanimously struck down the laws as targeting a specific religion.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Kennedy, that the ordinances violated the Free Exercise Clause. They were not neutral or generally applicable, because they were written to suppress the church's practices while leaving similar conduct unregulated, and they could not survive strict scrutiny.",
    significance: "Established that laws targeting a specific religion are subject to the strictest scrutiny. If a law is designed to suppress a particular religious practice while allowing similar secular conduct, it violates the Free Exercise Clause.",
    url: "https://supreme.justia.com/cases/federal/us/508/520/"
  },
  "Torcaso v. Watkins (1961)": {
    name: "Torcaso v. Watkins",
    year: 1961,
    citation: "367 U.S. 488",
    amendment: "Art. VI",
    summary: "Roy Torcaso was appointed as a notary public in Maryland but refused to declare a belief in God, as the state constitution required, so he was denied his commission. The Supreme Court unanimously ruled that requiring a declaration of religious belief for public office violates the freedom of religion protected by the First and Fourteenth Amendments.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Black, that Maryland could not enforce its religious test. Because it decided the case on First Amendment grounds, the Court did not decide whether Article VI's ban on religious tests, which applies to federal offices, also applies to the states.",
    significance: "Together with Article VI, which bars religious tests for federal office, the ruling means no government in the United States can require a religious test for public office. Some state constitutions still contain such language, but it cannot be enforced. In a footnote, the Court listed Buddhism, Taoism, Ethical Culture and Secular Humanism among religions that do not teach belief in God.",
    url: "https://supreme.justia.com/cases/federal/us/367/488/"
  },
  "Cantwell v. Connecticut (1940)": {
    name: "Cantwell v. Connecticut",
    year: 1940,
    citation: "310 U.S. 296",
    amendment: "1st",
    summary: "Newton Cantwell and his sons, Jehovah's Witnesses, went door-to-door in a heavily Catholic neighborhood in New Haven, playing a recording that attacked the Catholic Church and soliciting donations. They were convicted of soliciting without a permit, and one son, Jesse, was also convicted of breach of the peace. The Supreme Court reversed the convictions and held that the 14th Amendment makes the First Amendment's guarantee of free exercise of religion binding on the states.",
    outcome: "The Court unanimously reversed the convictions. It held that the permit law, which let a state official decide whether a cause was truly religious before allowing people to solicit for it, was an unconstitutional restraint on religious freedom. It also held that Jesse Cantwell's peaceful, if offensive, message was not a breach of the peace, because it posed no clear and present danger of violence or disorder.",
    significance: "The first case to 'incorporate' the Free Exercise Clause to the states through the 14th Amendment, meaning that state and local governments, not just the federal government, must respect religious freedom.",
    url: "https://supreme.justia.com/cases/federal/us/310/296/"
  },
  "Bailey v. Alabama (1911)": {
    name: "Bailey v. Alabama",
    year: 1911,
    citation: "219 U.S. 219",
    amendment: "13th",
    summary: "Alonzo Bailey, a Black farm laborer in Alabama, signed a contract to work for a year and received a $15 advance. He left after about a month without repaying it and was prosecuted under a state law that treated quitting after taking an advance as evidence of intent to defraud, while court rules barred him from testifying about his intent. The Supreme Court struck down the law, ruling that it used the threat of prosecution to force people to work off debts.",
    outcome: "The Court ruled 7-2, in an opinion by Justice Hughes, that the law violated the 13th Amendment and the federal Peonage Act of 1867, and it reversed Bailey's conviction.",
    significance: "Established that states cannot use criminal penalties to enforce labor contracts, as this amounts to forced labor. A key case in dismantling the post-Civil War system of debt peonage that trapped many Black workers in the South.",
    url: "https://supreme.justia.com/cases/federal/us/219/219/"
  },
  "Cleveland Board of Education v. Loudermill (1985)": {
    name: "Cleveland Board of Education v. Loudermill",
    year: 1985,
    citation: "470 U.S. 532",
    amendment: "14th",
    summary: "James Loudermill was hired as a security guard by the Cleveland Board of Education. He was fired after it was discovered he lied on his application about a felony conviction. Under Ohio law, he was a 'classified civil servant' who could only be fired for cause, but he was terminated without any hearing. The Supreme Court ruled that due process requires a pre-termination hearing for public employees who have a property interest in continued employment.",
    outcome: "In an opinion by Justice White, the Court held that a public employee who can be fired only for cause has a property interest in the job. Before being fired, the employee is entitled to notice of the charges, an explanation of the evidence, and a chance to respond, with a fuller hearing available afterward.",
    significance: "Established that government employees with legitimate expectation of continued employment (through tenure, contracts, or civil service rules) have a due process right to notice and a hearing before being terminated.",
    url: "https://supreme.justia.com/cases/federal/us/470/532/"
  },
  "Pickering v. Board of Education (1968)": {
    name: "Pickering v. Board of Education",
    year: 1968,
    citation: "391 U.S. 563",
    amendment: "1st",
    summary: "Marvin Pickering, a public school teacher in Illinois, wrote a letter to the local newspaper criticizing how the school board allocated funds between academics and athletics. He was fired for this criticism. The Supreme Court ruled that public employees do not forfeit their First Amendment rights and created a balancing test weighing the employee's speech rights against the government employer's interest in efficient operations.",
    outcome: "The Court reversed the Illinois Supreme Court, which had upheld the firing. Writing for the Court, Justice Thurgood Marshall found that the letter addressed a matter of public concern and did not interfere with Pickering's teaching or the operation of the schools. Although a few of his statements were inaccurate, there was no evidence he made them knowingly or recklessly, so they could not justify his dismissal.",
    significance: "Created the 'Pickering balancing test' that courts still use today. Public employees can speak on matters of public concern without retaliation, as long as the speech doesn't disrupt workplace operations.",
    url: "https://supreme.justia.com/cases/federal/us/391/563/"
  },
  "O'Connor v. Ortega (1987)": {
    name: "O'Connor v. Ortega",
    year: 1987,
    citation: "480 U.S. 709",
    amendment: "4th",
    summary: "Dr. Magno Ortega, a state hospital employee, had his office searched by supervisors who seized personal items and files. The Supreme Court ruled that government employees have reasonable expectations of privacy in their workspaces, but that workplace searches by government employers need only meet a 'reasonableness' standard, not the stricter warrant requirement.",
    outcome: "No opinion won a majority. Justice O'Connor's plurality opinion, joined by three other justices, held that work-related searches by public employers need neither a warrant nor probable cause, only reasonableness under all the circumstances; Justice Scalia agreed with the result on different reasoning. The case was sent back to decide whether this particular search was reasonable.",
    significance: "Established that the Fourth Amendment applies in government workplaces but with a lower standard than in criminal searches. Both the inception and the scope of the search must be reasonable under the circumstances.",
    url: "https://supreme.justia.com/cases/federal/us/480/709/"
  },
  "Garrity v. New Jersey (1967)": {
    name: "Garrity v. New Jersey",
    year: 1967,
    citation: "385 U.S. 493",
    amendment: "5th",
    summary: "New Jersey police officers were investigated for fixing traffic tickets. They were told they would be fired if they refused to answer questions, but their answers could be used against them in criminal proceedings. The Supreme Court ruled that statements obtained under threat of termination are coerced and cannot be used in criminal proceedings.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Douglas, that statements obtained under threat of losing one's job are coerced, and that using them in a criminal prosecution violates the 14th Amendment. The officers' convictions were reversed.",
    significance: "Created 'Garrity rights' for public employees: the government can require you to answer questions as a condition of employment, but those compelled answers cannot be used against you criminally.",
    url: "https://supreme.justia.com/cases/federal/us/385/493/"
  },
  "Tinker v. Des Moines (1969)": {
    name: "Tinker v. Des Moines",
    year: 1969,
    citation: "393 U.S. 503",
    amendment: "1st",
    summary: "Mary Beth Tinker and other students wore black armbands to school to protest the Vietnam War. The school suspended them. The Supreme Court ruled 7-2 that students do not 'shed their constitutional rights to freedom of speech or expression at the schoolhouse gate.' Student speech is protected unless it substantially disrupts the educational environment.",
    outcome: "The Court ruled 7-2, in an opinion by Justice Fortas, that the armband ban violated the First Amendment, because there was no evidence the armbands caused or threatened substantial disruption. It reversed the lower courts, which had upheld the school's policy.",
    significance: "The landmark student speech case. Established that students have First Amendment rights in public schools, though the school can restrict speech that causes 'substantial disruption' or interferes with the rights of others.",
    url: "https://supreme.justia.com/cases/federal/us/393/503/"
  },
  "New Jersey v. T.L.O. (1985)": {
    name: "New Jersey v. T.L.O.",
    year: 1985,
    citation: "469 U.S. 325",
    amendment: "4th",
    summary: "A high school student (T.L.O.) was caught smoking in the bathroom. A vice principal searched her purse, finding cigarettes, rolling papers, marijuana, and evidence of drug dealing. The Supreme Court ruled that school officials can search students with 'reasonable suspicion' rather than the higher 'probable cause' standard required of police.",
    outcome: "In an opinion by Justice White, the Court held that the 4th Amendment applies to searches by public school officials, but that they need only reasonable grounds for suspicion, not a warrant or probable cause. By a 6-3 vote, it found the search of T.L.O.'s purse reasonable.",
    significance: "Established the framework for student searches in public schools. School officials need less justification than police, but a search must be reasonable both at its start and in its scope. Later cases have held that more intrusive searches, such as strip searches, need stronger justification.",
    url: "https://supreme.justia.com/cases/federal/us/469/325/"
  },
  "Goss v. Lopez (1975)": {
    name: "Goss v. Lopez",
    year: 1975,
    citation: "419 U.S. 565",
    amendment: "14th",
    summary: "Several Ohio high school students were suspended for up to 10 days without any hearing. The Supreme Court ruled that students facing suspension have a property interest in their education and a liberty interest in their reputation. Due process requires at least minimal protections before suspension.",
    outcome: "The Court ruled 5-4, in an opinion by Justice White, that suspending the students without any hearing violated the Due Process Clause of the 14th Amendment.",
    significance: "For suspensions of 10 days or less, students must receive oral or written notice of the charges, an explanation of the evidence if they deny them, and a chance to tell their side of the story. Longer suspensions or expulsions may require more formal procedures.",
    url: "https://supreme.justia.com/cases/federal/us/419/565/"
  },
  "West Virginia v. Barnette (1943)": {
    name: "West Virginia v. Barnette",
    year: 1943,
    citation: "319 U.S. 624",
    amendment: "1st",
    summary: "West Virginia required all students to salute the American flag and recite the Pledge of Allegiance. Jehovah's Witness families refused on religious grounds and their children were expelled. The Supreme Court ruled 6-3 that compelling students to salute the flag or recite the Pledge violates the First Amendment.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Jackson, that the state could not force students to salute the flag or recite the Pledge. It overruled Minersville School District v. Gobitis (1940), decided just three years earlier.",
    significance: "Established the principle that the government cannot compel speech or belief. Justice Jackson wrote one of the most famous lines in constitutional law: 'If there is any fixed star in our constitutional constellation, it is that no official, high or petty, can prescribe what shall be orthodox in politics, nationalism, religion, or other matters of opinion or force citizens to confess by word or act their faith therein.'",
    url: "https://supreme.justia.com/cases/federal/us/319/624/"
  },
  "Healy v. James (1972)": {
    name: "Healy v. James",
    year: 1972,
    citation: "408 U.S. 169",
    amendment: "1st",
    summary: "Central Connecticut State College denied recognition to a local chapter of Students for a Democratic Society (SDS) because of disagreement with the national organization's philosophy. The Supreme Court ruled that public universities cannot deny recognition to student organizations based on the group's viewpoints.",
    outcome: "The Court unanimously held, in an opinion by Justice Powell, that the college could not deny recognition because of the group's philosophy, its ties to the national SDS, or an unsupported fear of disruption. It sent the case back to determine whether the group was willing to follow reasonable campus rules, which a college may require of all student groups.",
    significance: "Confirmed that the First Amendment applies with full force on public college campuses. Students have the right to organize, associate, and express unpopular viewpoints. Universities cannot suppress ideas they find distasteful.",
    url: "https://supreme.justia.com/cases/federal/us/408/169/"
  },
  "Payton v. New York (1980)": {
    name: "Payton v. New York",
    year: 1980,
    citation: "445 U.S. 573",
    amendment: "4th",
    summary: "Police entered Theodore Payton's home without a warrant to arrest him for murder. They found evidence in plain view. The Supreme Court ruled that the Fourth Amendment prohibits police from making a warrantless, nonconsensual entry into a suspect's home to make a routine arrest.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Stevens, that absent consent or an emergency, police need a warrant to enter a home to make an arrest. It reversed the New York decisions that had upheld the warrantless entries in Payton's case and a companion case.",
    significance: "Firmly established that the home has special 4th Amendment protection. Even with probable cause, police generally need a warrant to enter a home to arrest someone; an arrest warrant allows entry into the suspect's own home when there is reason to believe the suspect is inside. The 4th Amendment applies to all government agents, including immigration officers.",
    url: "https://supreme.justia.com/cases/federal/us/445/573/"
  },
  "Yick Wo v. Hopkins (1886)": {
    name: "Yick Wo v. Hopkins",
    year: 1886,
    citation: "118 U.S. 356",
    amendment: "14th",
    summary: "San Francisco passed an ordinance requiring permits to operate laundries in wooden buildings. Nearly all Chinese applicants were denied permits while almost all non-Chinese applicants were approved. The Supreme Court ruled that the law, while neutral on its face, was administered in a discriminatory manner and violated the Equal Protection Clause.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Matthews, that the ordinance was applied 'with an evil eye and an unequal hand' against Chinese laundry owners, in violation of the Equal Protection Clause. It ordered Yick Wo and another laundry owner, Wo Lee, released from custody.",
    significance: "Established two principles: (1) equal protection applies to all persons within U.S. jurisdiction, including noncitizens, and (2) a law that is fair on its face but applied in a discriminatory way violates the Constitution.",
    url: "https://supreme.justia.com/cases/federal/us/118/356/"
  },
  "Zadvydas v. Davis (2001)": {
    name: "Zadvydas v. Davis",
    year: 2001,
    citation: "533 U.S. 678",
    amendment: "5th",
    summary: "Kestutis Zadvydas, a stateless person born in a displaced persons camp in Germany, was ordered deported but no country would accept him. The government detained him indefinitely. The Supreme Court ruled that the government cannot hold deportable immigrants indefinitely when there is no realistic chance of deportation.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Breyer, that the immigration detention statute, read in light of the Due Process Clause, does not allow indefinite detention. Six months is presumptively reasonable; after that, if the person shows there is no significant likelihood of removal in the reasonably foreseeable future, the government must justify continued detention or release the person, usually under supervision.",
    significance: "The Court interpreted the law this way to avoid a serious constitutional problem, reasoning that the Due Process Clause protects all persons in the United States, including noncitizens with final orders of removal. Detained people still rely on the ruling to challenge prolonged detention when their removal is not reasonably foreseeable.",
    url: "https://supreme.justia.com/cases/federal/us/533/678/"
  },
  "Steagald v. United States (1981)": {
    name: "Steagald v. United States",
    year: 1981,
    citation: "451 U.S. 204",
    amendment: "4th",
    summary: "DEA agents had an arrest warrant for a fugitive named Ricky Lyons. Acting on a tip, they entered the home of Gary Steagald, a third party, to search for Lyons. They never found Lyons, but they found cocaine and prosecuted Steagald. The Supreme Court ruled that an arrest warrant for one person does not authorize agents to enter and search a different person's home. To do that, they need a search warrant for the home itself.",
    outcome: "The Court ruled 7-2, in an opinion by Justice Marshall, that the search violated Steagald's 4th Amendment rights, and it reversed the decision upholding his conviction. Absent consent or an emergency, an arrest warrant for one person does not justify entering a third party's home.",
    significance: "This matters in immigration enforcement too: even when agents hold a valid judicial arrest warrant for someone, that warrant does not let them enter another person's home to look for that person. Absent consent or an emergency, a resident may lawfully refuse entry unless agents produce a search warrant for the address, signed by a judge.",
    url: "https://supreme.justia.com/cases/federal/us/451/204/"
  },
  "Kentucky v. King (2011)": {
    name: "Kentucky v. King",
    year: 2011,
    citation: "563 U.S. 452",
    amendment: "4th",
    summary: "Police in Lexington, Kentucky, following a drug suspect, smelled marijuana at an apartment door, knocked loudly, announced themselves, and after hearing movement inside, kicked in the door, saying they believed evidence was being destroyed. In deciding when such 'exigent circumstances' justify entering without a warrant, the Court also stated that officers without a warrant who knock on a door do no more than any private citizen might do, and that occupants have no obligation to open the door or to speak.",
    outcome: "The Court ruled 8-1, in an opinion by Justice Alito, that the exigent circumstances exception applies as long as police do not create the emergency by violating or threatening to violate the 4th Amendment. It sent the case back to the Kentucky courts. Its often-quoted line: 'the occupant has no obligation to open the door or to speak.'",
    significance: "The opinion's language is widely cited for the point that you do not have to open your door to officers who lack a warrant, and that declining to open the door or to speak is a lawful exercise of your rights. The ruling itself also expanded police power: if officers knock lawfully and then hear what sounds like evidence being destroyed, they may enter without a warrant.",
    url: "https://supreme.justia.com/cases/federal/us/563/452/"
  },
  "Florida v. Jardines (2013)": {
    name: "Florida v. Jardines",
    year: 2013,
    citation: "569 U.S. 1",
    amendment: "4th",
    summary: "Police brought a drug-sniffing dog onto Joelis Jardines' front porch to sniff at his door, then used the alert to get a search warrant. The Supreme Court ruled the dog sniff was itself a search. The area immediately around a home (the 'curtilage') is protected, and the implied license that lets anyone approach a front door is narrow: approach, knock, wait briefly, and leave. Using that approach to gather evidence exceeds the license.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Scalia, that bringing a drug-sniffing dog onto the porch to investigate was a search requiring a warrant. It upheld the Florida Supreme Court's decision to suppress the evidence.",
    significance: "Your porch and doorstep are constitutionally protected space. Officers standing at your door have only the same permission a delivery driver or neighbor would have. They cannot lawfully use the doorstep to conduct an investigation without a warrant, and you may end the encounter by simply not answering.",
    url: "https://supreme.justia.com/cases/federal/us/569/1/"
  },
  "INS v. Lopez-Mendoza (1984)": {
    name: "INS v. Lopez-Mendoza",
    year: 1984,
    citation: "468 U.S. 1032",
    amendment: "4th",
    summary: "Two men arrested by immigration agents argued that evidence of their status should be suppressed because their arrests violated the 4th Amendment. The Supreme Court held that deportation proceedings are civil, not criminal, so the exclusionary rule (which throws out illegally obtained evidence in criminal trials) generally does not apply in immigration court. The Court left open an exception for 'egregious violations' of the 4th Amendment.",
    outcome: "The Court ruled 5-4, in an opinion by Justice O'Connor, that evidence obtained during the challenged arrests remained admissible in the deportation proceedings. Part of the opinion, joined by four justices, suggested suppression might still be available for egregious violations or if violations became widespread, and lower courts have since disagreed about what counts as egregious.",
    significance: "Because the usual remedy for an illegal search is largely unavailable in removal proceedings, know-your-rights guidance stresses asserting rights during the encounter itself: keeping the door closed, staying silent, and not consenting to a search.",
    url: "https://supreme.justia.com/cases/federal/us/468/1032/"
  },
  "Wong Wing v. United States (1896)": {
    name: "Wong Wing v. United States",
    year: 1896,
    citation: "163 U.S. 228",
    amendment: "5th",
    summary: "A federal law allowed Chinese nationals found unlawfully present to be sentenced to up to a year of hard labor without a jury trial before deportation. The Supreme Court unanimously struck it down, holding that all 'persons' within the territory of the United States, citizens and noncitizens alike, are entitled to 5th and 6th Amendment protections. The government cannot impose criminal punishment on anyone without a judicial trial.",
    outcome: "The Court, in an opinion by Justice Shiras, struck down the hard-labor provision. Congress may detain and deport noncitizens through civil procedures, but it may not impose criminal punishment such as hard labor without a judicial trial, including indictment by a grand jury.",
    significance: "One of the oldest and clearest holdings that constitutional rights are not reserved for citizens. It is a key precedent behind the statement on 'red cards' that these rights belong to citizens and noncitizens alike. Because the 5th Amendment protects every 'person,' anyone in the United States may invoke its privilege against self-incrimination.",
    url: "https://supreme.justia.com/cases/federal/us/163/228/"
  },
  "District of Columbia v. Heller (2008)": {
    name: "District of Columbia v. Heller",
    year: 2008,
    citation: "554 U.S. 570",
    amendment: "2nd",
    summary: "Washington D.C. effectively banned handgun possession and required all firearms in the home to be kept unloaded and disassembled or trigger-locked. Dick Heller, a security guard authorized to carry a handgun at work, applied to register a handgun to keep at home and was turned down. The Supreme Court ruled 5-4 that the Second Amendment protects an individual right to possess firearms, independent of service in a militia.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Scalia, that the handgun ban and the requirement that guns at home be kept inoperable violated the Second Amendment. The Court said the right is not unlimited and that longstanding measures, such as bans on gun possession by felons and laws forbidding guns in sensitive places like schools and government buildings, remain presumptively lawful.",
    significance: "The first Supreme Court case to definitively hold that the Second Amendment protects an individual right to keep and bear arms for self-defense in the home, not just a collective right tied to militia service.",
    url: "https://supreme.justia.com/cases/federal/us/554/570/"
  },
  "McDonald v. City of Chicago (2010)": {
    name: "McDonald v. City of Chicago",
    year: 2010,
    citation: "561 U.S. 742",
    amendment: "2nd",
    summary: "Chicago had one of the nation's strictest handgun bans. Otis McDonald, a retired maintenance engineer in a high-crime neighborhood, challenged the ban because he wanted a handgun for self-defense. The Supreme Court ruled 5-4 that the individual right to bear arms recognized in Heller also applies to state and local governments through the 14th Amendment.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Alito, that the Second Amendment right recognized in Heller applies to state and local governments. Four justices relied on the Due Process Clause, while Justice Thomas, the fifth vote, relied on the Privileges or Immunities Clause. The case was sent back to the lower courts, and Chicago soon replaced its ban with new restrictions.",
    significance: "Extended the individual right to bear arms to apply against state and local governments, not just the federal government. Cities and states cannot impose total bans on handgun ownership for self-defense.",
    url: "https://supreme.justia.com/cases/federal/us/561/742/"
  },
  "New York State Rifle & Pistol Assn. v. Bruen (2022)": {
    name: "New York State Rifle & Pistol Assn. v. Bruen",
    year: 2022,
    citation: "597 U.S. 1",
    amendment: "2nd",
    summary: "New York's concealed carry permit law required applicants to demonstrate 'proper cause' (essentially a special need beyond ordinary self-defense) to carry a handgun in public. The Supreme Court ruled 6-3 that the right to bear arms includes the right to carry in public for self-defense and that New York's 'proper cause' requirement was unconstitutional.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Thomas, that New York's 'proper cause' requirement violated the Second Amendment. It also replaced the test most lower courts had used with a new one: a gun law is valid only if it is consistent with the nation's historical tradition of firearm regulation. In United States v. Rahimi (2024), the Court clarified that modern laws need only be analogous to historical ones, not identical.",
    significance: "States can still require permits, background checks and training, but they cannot require people to show a special need beyond self-defense to carry a gun in public. Wolford v. Lopez (2026) later struck down a Hawaii law, passed after Bruen, that barred permit holders from carrying on private property open to the public unless the owner gave express permission. Supporters argue the ruling protects a right written into the Constitution; critics argue its history-based test makes it harder for states to address gun violence.",
    url: "https://supreme.justia.com/cases/federal/us/597/20-843/"
  },
  "Camara v. Municipal Court (1967)": {
    name: "Camara v. Municipal Court",
    year: 1967,
    citation: "387 U.S. 523",
    amendment: "4th",
    summary: "Roland Camara refused to allow a housing inspector to enter his apartment without a warrant to conduct a routine code inspection. He was charged criminally for refusing entry. The Supreme Court ruled that administrative searches of homes require either consent or a warrant, even for routine code enforcement.",
    outcome: "The Court ruled 6-3, in an opinion by Justice White, that Camara had a right to insist on a warrant and could not be prosecuted for refusing a warrantless inspection, overruling Frank v. Maryland (1959). But the Court also held that inspection warrants can be issued based on reasonable area-wide standards, without evidence of a violation in a particular home.",
    significance: "Extended Fourth Amendment warrant protections to administrative inspections. Even routine government inspections of private homes require consent or a warrant, though the standard for obtaining the warrant is lower than for criminal searches.",
    url: "https://supreme.justia.com/cases/federal/us/387/523/"
  },
  "Taylor v. Louisiana (1975)": {
    name: "Taylor v. Louisiana",
    year: 1975,
    citation: "419 U.S. 522",
    amendment: "6th",
    summary: "Billy Taylor was convicted of aggravated kidnapping by a jury drawn from a pool that systematically excluded women (Louisiana exempted women from jury service unless they volunteered). The Supreme Court ruled that the Sixth Amendment requires juries to be drawn from a fair cross-section of the community.",
    outcome: "The Court ruled 8-1, in an opinion by Justice White, that excluding women from jury pools unless they volunteered violated Taylor's 6th Amendment right to a jury drawn from a fair cross-section of the community, and it reversed his conviction.",
    significance: "Established the 'fair cross-section' requirement for jury selection. Systematic exclusion of any distinctive group (by race, gender, etc.) from jury pools violates the right to an impartial jury, although the requirement applies to the pool, not to the makeup of each individual jury.",
    url: "https://supreme.justia.com/cases/federal/us/419/522/"
  },
  "Batson v. Kentucky (1986)": {
    name: "Batson v. Kentucky",
    year: 1986,
    citation: "476 U.S. 79",
    amendment: "14th",
    summary: "James Batson, a Black man, was tried for burglary. The prosecutor used peremptory challenges to strike all four Black jurors from the panel, resulting in an all-white jury. The Supreme Court ruled that using peremptory challenges to remove jurors based on race violates the Equal Protection Clause.",
    outcome: "The Court ruled 7-2, in an opinion by Justice Powell, easing the heavy burden of proof set in Swain v. Alabama (1965). It sent the case back so the trial court could decide whether the prosecutor had race-neutral reasons for the strikes; if not, Batson's conviction would have to be reversed.",
    significance: "Created the 'Batson challenge' procedure: if a pattern of race-based strikes is shown, the striking party must provide a race-neutral explanation. This protection has since been extended to gender-based strikes as well.",
    url: "https://supreme.justia.com/cases/federal/us/476/79/"
  },
  "Cruzan v. Director, Missouri Dept. of Health (1990)": {
    name: "Cruzan v. Director, Missouri Dept. of Health",
    year: 1990,
    citation: "497 U.S. 261",
    amendment: "14th",
    summary: "Nancy Cruzan was left in a persistent vegetative state after a car accident. Her parents sought to remove her feeding tube, but Missouri required 'clear and convincing evidence' of her own wishes. The Supreme Court assumed that a competent person has a constitutional right to refuse unwanted medical treatment, including artificial nutrition, but upheld Missouri's evidence standard.",
    outcome: "The Court ruled 5-4, in an opinion by Chief Justice Rehnquist, that the Constitution allows a state to require clear and convincing evidence of an incompetent patient's wishes before life support is withdrawn. After new witnesses came forward, a Missouri court later in 1990 allowed the feeding tube to be removed.",
    significance: "The Court's first case on the so-called 'right to die.' It drew national attention to living wills and other advance directives, and Congress passed the Patient Self-Determination Act later in 1990, requiring many hospitals to inform patients of their right to make such directives.",
    url: "https://supreme.justia.com/cases/federal/us/497/261/"
  },
  "Missouri v. McNeely (2013)": {
    name: "Missouri v. McNeely",
    year: 2013,
    citation: "569 U.S. 141",
    amendment: "4th",
    summary: "Tyler McNeely was pulled over for speeding and swerving. He failed field sobriety tests and refused a breathalyzer. The officer took him to a hospital and ordered a blood draw without a warrant. The Supreme Court ruled that the natural dissipation of alcohol in the blood does not automatically create an exigent circumstance justifying a warrantless blood test.",
    outcome: "The Court upheld the Missouri courts' decision to suppress the blood test results. In an opinion by Justice Sotomayor, it held that whether an emergency justifies a warrantless blood test must be decided case by case, based on all the circumstances.",
    significance: "Police generally need a warrant or consent before drawing blood in drunk-driving cases; the fact that alcohol leaves the body over time does not by itself excuse the warrant requirement. In Birchfield v. North Dakota (2016), the Court added that police may require a breath test after a drunk-driving arrest without a warrant, but not a blood test.",
    url: "https://supreme.justia.com/cases/federal/us/569/141/"
  },
  "Salinas v. Texas (2013)": {
    name: "Salinas v. Texas",
    year: 2013,
    citation: "570 U.S. 178",
    amendment: "5th",
    summary: "Genovevo Salinas voluntarily answered police questions but went silent when asked whether his shotgun would match shells found at a murder scene. At trial, prosecutors used his silence as evidence of guilt. The Supreme Court upheld his conviction. The lead opinion said that simply remaining silent is not enough to invoke the Fifth Amendment; a person must expressly claim the privilege.",
    outcome: "The Court ruled 5-4 to uphold the conviction, but without a majority opinion. Three justices said his silence could be used because he never expressly invoked the privilege; two others said prosecutors could comment on his silence even if he had invoked it.",
    significance: "The practical lesson many lawyers draw: in a voluntary interview when you are not in custody, staying quiet may not be enough. If you want the protection of the Fifth Amendment, say clearly that you are invoking your right to remain silent.",
    url: "https://supreme.justia.com/cases/federal/us/570/178/"
  },
  "Murthy v. Missouri (2024)": {
    name: "Murthy v. Missouri",
    year: 2024,
    citation: "603 U.S. 43",
    amendment: "1st",
    summary: "Missouri and Louisiana, along with individual social media users, sued the Biden administration alleging that federal officials coerced social media platforms into censoring content about COVID-19 and elections. The question was when government communication with private platforms crosses the line from permissible persuasion into unconstitutional coercion.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Barrett, that the plaintiffs lacked standing to sue. They could not show that their own posts were restricted because of government pressure, or that a court order against the officials would prevent future harm. The Court did not decide whether the officials violated the First Amendment.",
    significance: "The ruling left the central question open. A month earlier, in National Rifle Association v. Vullo (2024), a unanimous Court held that government officials may not coerce private companies into punishing or suppressing speech the government dislikes. Persuading is allowed; threatening is not.",
    url: "https://supreme.justia.com/cases/federal/us/603/23-411/"
  },
  "Gamble v. United States (2019)": {
    name: "Gamble v. United States",
    year: 2019,
    citation: "587 U.S. 678",
    amendment: "5th",
    summary: "Terence Gamble was convicted of second-degree robbery in Alabama. Years later, he was pulled over and found with a firearm. He was prosecuted in both state and federal court for being a felon in possession of a firearm. He argued this was double jeopardy. The Supreme Court upheld the 'dual sovereignty' doctrine: state and federal governments are separate sovereigns, so each can prosecute for the same conduct.",
    outcome: "The Court ruled 7-2, in an opinion by Justice Alito, declining to overrule the dual-sovereignty doctrine. Both of Gamble's prosecutions were allowed to stand.",
    significance: "Confirmed that double jeopardy does not prevent separate state and federal prosecutions for the same act. The doctrine has been used in civil rights cases, for example when federal prosecutors bring charges after a state prosecution ends in acquittal.",
    url: "https://supreme.justia.com/cases/federal/us/587/17-646/"
  },
  "Texas v. White (1869)": {
    name: "Texas v. White",
    year: 1869,
    citation: "74 U.S. 700",
    amendment: "Art. IV",
    summary: "After the Civil War, the Reconstruction government of Texas sued to recover U.S. bonds that the Confederate state legislature had sold to finance the rebellion. The Supreme Court had to decide whether Texas was even a state at that point. Chief Justice Chase ruled that the Constitution created 'an indestructible Union, composed of indestructible States,' meaning secession was never legally valid.",
    outcome: "The Court ruled 5-3, in an opinion by Chief Justice Chase, that Texas had never legally left the Union, so it remained a state entitled to sue in the Supreme Court. The Confederate legislature's sale of the bonds was void, and Texas could recover them.",
    significance: "Established that states cannot unilaterally secede from the Union. The Constitution creates a permanent union. However, the Court acknowledged that revolution or consent of the states could alter this relationship.",
    url: "https://supreme.justia.com/cases/federal/us/74/700/"
  },
  "Griswold v. Connecticut (1965)": {
    name: "Griswold v. Connecticut",
    year: 1965,
    citation: "381 U.S. 479",
    amendment: "9th",
    summary: "Connecticut law made it a crime to use contraceptives or to counsel others in their use. Estelle Griswold, director of a Planned Parenthood clinic, was convicted for providing contraceptive advice to married couples. The Supreme Court struck down the law, holding that the Bill of Rights contains implicit guarantees that create 'zones of privacy.'",
    outcome: "The Court ruled 7-2, in an opinion by Justice Douglas, that the law violated a constitutional right of privacy in marriage, and it reversed the convictions of Griswold and Dr. C. Lee Buxton.",
    significance: "First recognized a constitutional right to privacy. Justice Douglas wrote that specific Bill of Rights guarantees have 'penumbras' that protect privacy beyond their literal text. The reasoning later supported Roe v. Wade (1973); when Dobbs v. Jackson Women's Health Organization (2022) overruled Roe, the majority said its decision should not be understood to cast doubt on other precedents such as Griswold.",
    url: "https://supreme.justia.com/cases/federal/us/381/479/"
  },
  "Obergefell v. Hodges (2015)": {
    name: "Obergefell v. Hodges",
    year: 2015,
    citation: "576 U.S. 644",
    amendment: "14th",
    summary: "James Obergefell married John Arthur in Maryland, but their home state of Ohio refused to recognize the marriage. Arthur was terminally ill and Obergefell wanted to be listed as the surviving spouse on the death certificate. The Supreme Court ruled 5-4 that the fundamental right to marry is guaranteed to same-sex couples under the Due Process and Equal Protection Clauses of the 14th Amendment.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Kennedy, that the 14th Amendment requires states to license marriages between two people of the same sex and to recognize such marriages lawfully performed in other states.",
    significance: "Extended the fundamental right to marry to same-sex couples. The Court said the couples 'ask for equal dignity in the eyes of the law.' In 2022 Congress passed the Respect for Marriage Act, which requires federal and interstate recognition of valid marriages, including same-sex marriages.",
    url: "https://supreme.justia.com/cases/federal/us/576/644/"
  },
  "Youngstown Sheet & Tube Co. v. Sawyer (1952)": {
    name: "Youngstown Sheet & Tube Co. v. Sawyer",
    year: 1952,
    citation: "343 U.S. 579",
    amendment: "Art. II",
    summary: "During the Korean War, President Truman ordered the seizure of steel mills to prevent a nationwide strike that he said would jeopardize national defense. The Supreme Court ruled 6-3 that the President lacked authority to seize private property without Congressional authorization, even during wartime.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Black, that the President had no power to seize the mills, because no statute authorized it and the Constitution gives lawmaking power to Congress. The mills were returned to their owners, and the strike went forward.",
    significance: "One of the most important cases on presidential power. Justice Jackson's concurrence created the three-category framework courts still use: presidential power is at its strongest when backed by Congress, uncertain in a 'zone of twilight' when Congress is silent, and at its 'lowest ebb' when the President acts against Congress's will.",
    url: "https://supreme.justia.com/cases/federal/us/343/579/"
  },
  "West Virginia v. EPA (2022)": {
    name: "West Virginia v. EPA",
    year: 2022,
    citation: "597 U.S. 697",
    amendment: "Art. I",
    summary: "In 2015 the EPA issued the Clean Power Plan, which would have set emissions limits for power plants based on shifting electricity generation from coal to natural gas and renewable sources. The plan never took effect and was later repealed, but a lower court decision could have revived the EPA's approach. West Virginia and other states challenged it.",
    outcome: "The Court ruled 6-3, in an opinion by Chief Justice Roberts, that the Clean Air Act did not give the EPA authority to set emissions caps based on that kind of generation shifting. Under what the Court called the 'major questions doctrine,' an agency claiming power over decisions of vast economic and political significance must point to clear authorization from Congress.",
    significance: "It was the first time a majority opinion of the Court used the name 'major questions doctrine.' Supporters argue it keeps major policy choices with Congress; critics argue it limits agencies' ability to address problems such as climate change.",
    url: "https://supreme.justia.com/cases/federal/us/597/20-1530/"
  },
  "U.S. Term Limits v. Thornton (1995)": {
    name: "U.S. Term Limits v. Thornton",
    year: 1995,
    citation: "514 U.S. 779",
    amendment: "Art. I",
    summary: "Arkansas amended its state constitution to keep members of Congress who had served three House terms or two Senate terms off the ballot, although they could still run as write-in candidates. The Supreme Court ruled 5-4 that states cannot add qualifications for Congress beyond those in the Constitution (age, citizenship and residency).",
    outcome: "The Court ruled 5-4, in an opinion by Justice Stevens, that the Arkansas amendment was unconstitutional because it was an indirect attempt to add a qualification for office. The decision invalidated similar term limits for Congress that more than 20 states had adopted.",
    significance: "Only a constitutional amendment can change who is eligible to serve in Congress. States cannot unilaterally add requirements like term limits, wealth thresholds, or other qualifications beyond what the Constitution specifies.",
    url: "https://supreme.justia.com/cases/federal/us/514/779/"
  },
  "Wickard v. Filburn (1942)": {
    name: "Wickard v. Filburn",
    year: 1942,
    citation: "317 U.S. 111",
    amendment: "Art. I",
    summary: "Roscoe Filburn, an Ohio farmer, grew more wheat than his federal quota allowed under the Agricultural Adjustment Act, intending much of it for use on his own farm. The Supreme Court unanimously ruled that even wheat grown for use at home affects interstate commerce, because when added up across many farmers it reduces demand for wheat on the open market.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Jackson, that Congress could penalize Filburn's excess wheat. Activity that is local and not itself commerce can be regulated if, taken together with similar activity by others, it has a substantial effect on interstate commerce.",
    significance: "Wickard is the leading example of this 'aggregation' principle and a foundation for broad federal regulation of the economy. The Court relied on it in Gonzales v. Raich (2005) to uphold federal power over marijuana grown at home for personal medical use. Supporters see it as recognizing how national markets work; critics argue it leaves few limits on federal power.",
    url: "https://supreme.justia.com/cases/federal/us/317/111/"
  },
  "Loper Bright Enterprises v. Raimondo (2024)": {
    name: "Loper Bright Enterprises v. Raimondo",
    year: 2024,
    citation: "603 U.S. 369",
    amendment: "Art. III",
    summary: "Fishing companies challenged a federal rule requiring them to pay for on-board monitors. The case became the vehicle for overturning Chevron deference, the 40-year-old doctrine that courts should defer to an agency's reasonable interpretation of an ambiguous statute. The Supreme Court ruled that courts must exercise independent judgment in interpreting statutes rather than defer to agencies (6-2 in this case, in which Justice Jackson did not take part, and 6-3 in a companion case).",
    outcome: "In an opinion by Chief Justice Roberts, the Court overruled Chevron U.S.A. v. Natural Resources Defense Council (1984). Courts must now decide for themselves the best reading of a statute, though they may consider an agency's views. The Court said past cases decided under Chevron remain valid precedent.",
    significance: "One of the most significant administrative law decisions in decades, shifting interpretive power from federal agencies to courts. Supporters argue it restores the judiciary's duty to say what the law is; critics argue it moves technical policy decisions from expert agencies to judges.",
    url: "https://supreme.justia.com/cases/federal/us/603/22-451/"
  },
  "Boumediene v. Bush (2008)": {
    name: "Boumediene v. Bush",
    year: 2008,
    citation: "553 U.S. 723",
    amendment: "Art. I",
    summary: "Lakhdar Boumediene, a Bosnian citizen detained at Guantanamo Bay, challenged his imprisonment. Congress had passed the Military Commissions Act stripping federal courts of jurisdiction to hear habeas corpus petitions from Guantanamo detainees. The Supreme Court ruled 5-4 that detainees at Guantanamo have a constitutional right to habeas corpus.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Kennedy, that the Constitution's habeas corpus protections reach Guantanamo and that the limited review Congress had provided was not an adequate substitute, so the provision of the Military Commissions Act stripping courts of habeas jurisdiction was unconstitutional. A federal judge later ordered Boumediene released, and he was transferred to France in 2009.",
    significance: "Established that the constitutional right to habeas corpus extends to Guantanamo Bay and cannot be suspended by Congress without providing an adequate substitute. Even in the war on terror, the government cannot hold people indefinitely without judicial review.",
    url: "https://supreme.justia.com/cases/federal/us/553/723/"
  },
  "Home Building & Loan Assn. v. Blaisdell (1934)": {
    name: "Home Building & Loan Assn. v. Blaisdell",
    year: 1934,
    citation: "290 U.S. 398",
    amendment: "Art. I",
    summary: "During the Great Depression, Minnesota passed a mortgage moratorium law allowing courts to extend the period homeowners had to redeem foreclosed properties. The Home Building & Loan Association challenged it as impairing the obligation of contracts. The Supreme Court upheld the law 5-4, ruling that states can exercise emergency powers to modify contract obligations temporarily during genuine crises.",
    outcome: "The Court ruled 5-4, in an opinion by Chief Justice Hughes, that the moratorium did not violate the Contract Clause. The law was a reasonable, temporary response to an economic emergency, and borrowers still had to pay the reasonable rental value of their homes during the extension.",
    significance: "Established that the Contract Clause is not absolute. States can temporarily modify private contracts during genuine emergencies to protect the public welfare. However, the modification must be temporary, reasonable, and proportional to the emergency.",
    url: "https://supreme.justia.com/cases/federal/us/290/398/"
  },
  "Trump v. United States (2024)": {
    name: "Trump v. United States",
    year: 2024,
    citation: "603 U.S. 593",
    amendment: "Art. II",
    summary: "Former President Trump was indicted on federal charges related to alleged efforts to overturn the results of the 2020 election. He claimed presidential immunity. The Supreme Court ruled 6-3 that presidents have absolute immunity from criminal prosecution for actions within their core constitutional powers, at least presumptive immunity for other official acts, and no immunity for unofficial acts.",
    outcome: "In an opinion by Chief Justice Roberts, the Court held that Trump's alleged discussions with Justice Department officials were absolutely immune and sent the rest of the case back to the trial court to sort out which acts were official. After Trump won the 2024 election, the special counsel moved to dismiss the case, citing Justice Department policy against prosecuting a sitting president, and the trial court dismissed it in November 2024.",
    significance: "The first time the Supreme Court decided whether a former president can be criminally prosecuted for actions taken in office. It created a framework that separates official acts (immune or presumptively immune) from unofficial acts (not immune). Critics argue it places the president above the law; supporters say it protects the presidency from politically motivated prosecution.",
    url: "https://supreme.justia.com/cases/federal/us/603/23-939/"
  },
  "NLRB v. Noel Canning (2014)": {
    name: "NLRB v. Noel Canning",
    year: 2014,
    citation: "573 U.S. 513",
    amendment: "Art. II",
    summary: "In January 2012, President Obama made recess appointments to the National Labor Relations Board during a break in which the Senate was holding brief pro forma sessions every three days. The Supreme Court unanimously ruled the appointments invalid, because the pro forma sessions counted as sessions, leaving breaks of only three days, too short to count as a recess.",
    outcome: "The board's decision against Noel Canning, a soft drink bottler, was invalid because the board lacked a lawful quorum. The justices split 5-4 on reasoning: the majority held that presidents may make recess appointments during breaks within a session, but that a recess of fewer than 10 days is presumptively too short.",
    significance: "Limited the recess appointment power. The Senate is in session when it says it is, as long as it can conduct business under its own rules, so presidents cannot bypass Senate confirmation by treating short breaks as recesses.",
    url: "https://supreme.justia.com/cases/federal/us/573/513/"
  },
  "Nixon v. United States (1993)": {
    name: "Nixon v. United States",
    year: 1993,
    citation: "506 U.S. 224",
    amendment: "Art. I",
    summary: "Federal Judge Walter Nixon was impeached by the House and convicted by the Senate using a committee procedure rather than a trial before the full Senate. Nixon (no relation to President Nixon) argued the Senate had to conduct a full trial. The Supreme Court ruled that the question of how the Senate conducts impeachment trials is a 'political question' not reviewable by courts.",
    outcome: "The Court unanimously rejected Nixon's challenge. In an opinion by Chief Justice Rehnquist, it held that the Constitution's grant to the Senate of the 'sole Power to try all Impeachments' leaves the choice of trial procedures to the Senate, so the question was not one for the courts.",
    significance: "Confirmed that the Senate controls how it conducts impeachment trials and that courts will not second-guess those procedures. Some justices suggested courts might step in if the Senate did something extreme, such as deciding a case by coin toss.",
    url: "https://supreme.justia.com/cases/federal/us/506/224/"
  },
  "Marbury v. Madison (1803)": {
    name: "Marbury v. Madison",
    year: 1803,
    citation: "5 U.S. 137",
    amendment: "Art. III",
    summary: "William Marbury was appointed as a justice of the peace by outgoing President Adams, but incoming Secretary of State James Madison refused to deliver his commission. Marbury sued. Chief Justice Marshall ruled that while Marbury had a right to his commission, the Court lacked jurisdiction to order its delivery. More importantly, the Judiciary Act provision Marbury relied on was unconstitutional.",
    outcome: "The Court unanimously, in an opinion by Chief Justice Marshall, dismissed the case for lack of jurisdiction, so Marbury never received his commission. In doing so, it held that courts may refuse to enforce a law that conflicts with the Constitution.",
    significance: "Widely regarded as one of the most important cases in American constitutional law. It established judicial review, the power of courts to declare laws unconstitutional. The Constitution does not expressly mention this power, though the idea had been discussed during ratification, for example in Federalist No. 78.",
    url: "https://supreme.justia.com/cases/federal/us/5/137/"
  },
  "Saenz v. Roe (1999)": {
    name: "Saenz v. Roe",
    year: 1999,
    citation: "526 U.S. 489",
    amendment: "14th",
    summary: "California limited new residents to the welfare benefits they would have received in their prior state of residence for their first year. The Supreme Court struck down the law, ruling that the right to travel includes the right of newly arrived citizens to be treated the same as longer-term residents.",
    outcome: "The Court ruled 7-2, in an opinion by Justice Stevens, that the law violated the right of newly arrived citizens to the same privileges and immunities enjoyed by other citizens of the state, a right protected by the 14th Amendment's Privileges or Immunities Clause.",
    significance: "Confirmed three components of the right to travel: the right to enter and leave any state, the right to be treated as a welcome visitor when temporarily present, and the right to be treated like all other citizens upon establishing residency.",
    url: "https://supreme.justia.com/cases/federal/us/526/489/"
  },
  "Cooper v. Aaron (1958)": {
    name: "Cooper v. Aaron",
    year: 1958,
    citation: "358 U.S. 1",
    amendment: "Art. VI",
    summary: "After Brown v. Board of Education ordered school desegregation, the Little Rock, Arkansas school board asked to postpone its integration plan, citing public hostility and violence. In 1957 Governor Orval Faubus had used the National Guard to block Black students from entering Central High School. The Supreme Court unanimously rejected the delay, in an opinion signed individually by all nine justices.",
    outcome: "The Court refused to suspend the desegregation plan. It held that the constitutional rights of Black students could not be sacrificed to the violence and disorder that followed state officials' resistance, and that state officials are bound by the Court's interpretation of the Constitution in Brown.",
    significance: "The Court declared that Brown is the supreme law of the land and that no state official, whether a governor, a legislature or a school board, may nullify it. The case is a leading statement of the principle that federal court rulings on the Constitution bind state officials.",
    url: "https://supreme.justia.com/cases/federal/us/358/1/"
  },
  "Cramer v. United States (1945)": {
    name: "Cramer v. United States",
    year: 1945,
    citation: "325 U.S. 1",
    amendment: "Art. III",
    summary: "Anthony Cramer, a German-born naturalized U.S. citizen, met with two Nazi saboteurs who had landed by submarine during World War II. He was convicted of treason. The Supreme Court reversed, ruling that the overt act proved by two witnesses must itself show that the defendant actually gave aid and comfort to the enemy.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Jackson, that testimony that Cramer met and talked with the saboteurs did not show any act that aided the enemy, and it reversed his conviction.",
    significance: "Set an extremely high bar for treason convictions. Meeting with enemy agents, without more, is not enough. The Founders deliberately made treason very hard to prove because governments historically used treason charges to silence political opponents.",
    url: "https://supreme.justia.com/cases/federal/us/325/1/"
  },
  "New York Times v. Sullivan (1964)": {
    name: "New York Times v. Sullivan",
    year: 1964,
    citation: "376 U.S. 254",
    amendment: "1st",
    summary: "L.B. Sullivan, an elected city commissioner who oversaw the police in Montgomery, Alabama, sued the New York Times over a civil rights advertisement that contained some factual errors about police actions during protests. An Alabama jury awarded him $500,000 in damages. The Supreme Court reversed, holding that public officials cannot recover for defamation about their official conduct unless they prove 'actual malice,' meaning knowledge that a statement was false or reckless disregard for whether it was true.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Brennan, that the First Amendment requires the 'actual malice' standard in defamation suits by public officials, and it found the evidence against the Times insufficient under that standard. It described a 'profound national commitment' to debate on public issues that is 'uninhibited, robust, and wide-open.'",
    significance: "One of the most important press freedom cases in American history. It made it much harder for officials to use defamation suits to punish criticism, and later cases extended the rule to public figures. Some justices, including Justices Thomas and Gorsuch, have suggested the Court reconsider the standard.",
    url: "https://supreme.justia.com/cases/federal/us/376/254/"
  },
  "Katz v. United States (1967)": {
    name: "Katz v. United States",
    year: 1967,
    citation: "389 U.S. 347",
    amendment: "4th",
    summary: "FBI agents attached a listening device to the outside of a public phone booth used by Charles Katz to transmit illegal gambling wagers. The government argued no search occurred because they didn't physically enter the booth. The Supreme Court rejected this, ruling that the 4th Amendment 'protects people, not places' and that Katz had a reasonable expectation of privacy in his phone conversation.",
    outcome: "The Court ruled 7-1, in an opinion by Justice Stewart, that the warrantless recording of Katz's calls was an unconstitutional search, and it reversed his conviction. The Court rejected the older rule, from Olmstead v. United States (1928), that wiretapping is a search only if officers physically intrude.",
    significance: "Revolutionized Fourth Amendment law by shifting from a property-based analysis to a privacy-based one. Justice Harlan's concurrence created the 'reasonable expectation of privacy' test that courts still use today: you must have a subjective expectation of privacy that society recognizes as reasonable.",
    url: "https://supreme.justia.com/cases/federal/us/389/347/"
  },
  "Crawford v. Washington (2004)": {
    name: "Crawford v. Washington",
    year: 2004,
    citation: "541 U.S. 36",
    amendment: "6th",
    summary: "Michael Crawford was convicted of assault. At trial, the prosecution played a tape-recorded statement from his wife to police, but she didn't testify because of spousal privilege. Crawford argued he had no opportunity to cross-examine her. The Supreme Court ruled that 'testimonial' out-of-court statements cannot be used against a defendant unless the witness is unavailable and the defendant had a prior opportunity to cross-examine.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Scalia, that playing the recorded statement violated the Confrontation Clause, and it reversed Crawford's conviction. For testimonial statements, the decision replaced the reliability test of Ohio v. Roberts (1980).",
    significance: "Strengthened the right to confront your accusers. Testimonial statements, such as statements made to police during an investigation, affidavits and prior testimony, cannot be used against a defendant unless the defendant has had a chance to cross-examine the witness. It changed how prosecutors can use witness statements at trial.",
    url: "https://supreme.justia.com/cases/federal/us/541/36/"
  },
  "Epic Systems Corp. v. Lewis (2018)": {
    name: "Epic Systems Corp. v. Lewis",
    year: 2018,
    citation: "584 U.S. 497",
    amendment: "7th",
    summary: "Employees at several companies challenged mandatory arbitration agreements that required them to resolve disputes individually, waiving their right to pursue class or collective actions. The Supreme Court ruled 5-4 that the Federal Arbitration Act requires enforcement of these agreements as written, even when they prohibit class actions.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Gorsuch, that the Federal Arbitration Act requires courts to enforce agreements requiring individual arbitration, and that the National Labor Relations Act does not override them.",
    significance: "Employers can require workers to give up class and collective lawsuits and resolve disputes one by one in private arbitration. Critics argue this makes it impractical for individual workers to challenge widespread workplace violations; supporters argue arbitration is faster and cheaper and that any change should come from Congress. In 2022 Congress exempted sexual assault and sexual harassment claims from mandatory arbitration.",
    url: "https://supreme.justia.com/cases/federal/us/584/16-285/"
  },
  "AT&T Mobility v. Concepcion (2011)": {
    name: "AT&T Mobility v. Concepcion",
    year: 2011,
    citation: "563 U.S. 333",
    amendment: "7th",
    summary: "Vincent and Liza Concepcion signed a cell phone contract with AT&T that included an arbitration clause banning class actions. They sued AT&T for charging sales tax on phones advertised as free. The Supreme Court ruled 5-4 that the Federal Arbitration Act preempts state laws that would invalidate class-action waivers in arbitration agreements.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Scalia, that the Federal Arbitration Act preempts a California rule that had treated many class-action waivers in consumer contracts as unenforceable. AT&T could require the Concepcions to arbitrate individually.",
    significance: "Made it much easier for companies to require individual arbitration of consumer disputes. Critics argue that when individual claims are small, few people pursue them alone, so companies avoid accountability for widespread small overcharges; supporters argue arbitration lowers costs and that AT&T's clause gave consumers incentives to bring claims.",
    url: "https://supreme.justia.com/cases/federal/us/563/333/"
  },
  "Graham v. Florida (2010)": {
    name: "Graham v. Florida",
    year: 2010,
    citation: "560 U.S. 48",
    amendment: "8th",
    summary: "Terrance Graham was 16 when he took part in an armed burglary and an attempted robbery. After he was arrested again at 17 for a home-invasion robbery while on probation, a judge sentenced him to life in prison; because Florida had abolished parole, he had no chance of release. The Supreme Court ruled that the 8th Amendment prohibits sentencing a juvenile to life without parole for a non-homicide offense.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Kennedy, that Graham's sentence was unconstitutional. States need not guarantee release, but juveniles convicted of non-homicide offenses must have a meaningful opportunity to obtain release based on demonstrated maturity and rehabilitation.",
    significance: "Building on Roper v. Simmons (2005), which barred the death penalty for juvenile offenders, the Court recognized that young people have less culpability and a greater capacity for change than adults. Two years later, Miller v. Alabama (2012) barred mandatory life-without-parole sentences for juveniles convicted of murder.",
    url: "https://supreme.justia.com/cases/federal/us/560/48/"
  },
  "Richmond Newspapers v. Virginia (1980)": {
    name: "Richmond Newspapers v. Virginia",
    year: 1980,
    citation: "448 U.S. 555",
    amendment: "1st",
    summary: "A Virginia judge closed a murder trial to the public and press at the defendant's request. It was the defendant's fourth trial: his first conviction had been reversed on appeal, and two later trials had ended in mistrials. Richmond Newspapers challenged the closure. The Supreme Court ruled 7-1 that the First Amendment guarantees a right of public access to criminal trials.",
    outcome: "There was no majority opinion, but Chief Justice Burger's lead opinion held that the right to attend criminal trials is implicit in the First Amendment and that a trial may be closed only if a judge finds an overriding interest that requires it. The judge in this case had made no such findings, so the closure was unconstitutional.",
    significance: "Established a First Amendment right of public access to criminal trials. Open trials help ensure fairness, maintain public confidence in the justice system and serve as a check on judicial power.",
    url: "https://supreme.justia.com/cases/federal/us/448/555/"
  },
  "United States v. Lopez (1995)": {
    name: "United States v. Lopez",
    year: 1995,
    citation: "514 U.S. 549",
    amendment: "Art. I",
    summary: "Alfonso Lopez, a 12th-grade student, carried a concealed handgun to school. He was charged under the federal Gun-Free School Zones Act. The Supreme Court ruled 5-4 that Congress exceeded its Commerce Clause power because possessing a gun in a school zone was not economic activity that substantially affected interstate commerce.",
    outcome: "The Court ruled 5-4, in an opinion by Chief Justice Rehnquist, that the Gun-Free School Zones Act exceeded Congress's commerce power. In 1996 Congress passed a revised version that applies only to guns that have moved in or otherwise affect interstate commerce.",
    significance: "The first case in nearly 60 years to strike down a federal law as exceeding the Commerce Clause. It signaled that there are outer limits to federal power under the Commerce Clause, even after Wickard v. Filburn's broad reading.",
    url: "https://supreme.justia.com/cases/federal/us/514/549/"
  },
  "National Federation of Independent Business v. Sebelius (2012)": {
    name: "National Federation of Independent Business v. Sebelius",
    year: 2012,
    citation: "567 U.S. 519",
    amendment: "Art. I",
    summary: "26 states challenged the Affordable Care Act's individual mandate and Medicaid expansion. The Supreme Court upheld the individual mandate as a valid exercise of the taxing power (not the Commerce Clause) but struck down the Medicaid expansion's enforcement mechanism, ruling that threatening to revoke all existing Medicaid funding from non-complying states was unconstitutionally coercive.",
    outcome: "By a 5-4 vote, in an opinion by Chief Justice Roberts, the Court upheld the individual mandate as a tax. By a 7-2 vote, it held that threatening states with the loss of all existing Medicaid funding was coercive, which made the Medicaid expansion optional for states.",
    significance: "Five justices concluded that the Commerce Clause does not let Congress compel people to buy a product, and the Court held for the first time that a funding condition was so coercive it violated the Constitution. In 2017 Congress reduced the mandate's penalty to zero, and in California v. Texas (2021) the Court dismissed a later challenge for lack of standing.",
    url: "https://supreme.justia.com/cases/federal/us/567/519/"
  },
  "Printz v. United States (1997)": {
    name: "Printz v. United States",
    year: 1997,
    citation: "521 U.S. 898",
    amendment: "10th",
    summary: "The Brady Handgun Violence Prevention Act required local law enforcement to conduct background checks on handgun purchasers. Jay Printz, a Montana sheriff, challenged this requirement. The Supreme Court ruled 5-4 that the federal government cannot 'commandeer' state and local officials to enforce federal regulatory programs.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Scalia, that the federal government cannot command state or local officers to administer a federal program. The requirement that local officers run the checks was struck down, but background checks continued, and since 1998 they have been run through the federal National Instant Criminal Background Check System.",
    significance: "Established the anti-commandeering doctrine: the federal government cannot compel state or local officials to administer federal law. States can choose to cooperate, but cannot be forced to. This principle has been invoked in immigration enforcement and marijuana legalization contexts.",
    url: "https://supreme.justia.com/cases/federal/us/521/898/"
  },
  "Ex parte Young (1908)": {
    name: "Ex parte Young",
    year: 1908,
    citation: "209 U.S. 123",
    amendment: "11th",
    summary: "Shareholders of railroad companies sought to enjoin Minnesota's Attorney General Edward Young from enforcing allegedly unconstitutional railroad rate regulations. Young claimed sovereign immunity under the 11th Amendment. The Supreme Court created a fiction: when a state official acts unconstitutionally, they are 'stripped of their official character' and can be sued as an individual, not as the state.",
    outcome: "The Court ruled 8-1, in an opinion by Justice Peckham, that the 11th Amendment did not bar the federal suit, and it upheld the order holding Young in contempt for enforcing the law despite the federal court's injunction.",
    significance: "Created the main route around state sovereign immunity: you generally cannot sue a state itself, but you can sue the responsible state official to stop an ongoing violation of federal law. The doctrine allows orders that halt future violations, not money damages from the state treasury, and it remains one of the most important tools for enforcing constitutional rights.",
    url: "https://supreme.justia.com/cases/federal/us/209/123/"
  },
  "Alden v. Maine (1999)": {
    name: "Alden v. Maine",
    year: 1999,
    citation: "527 U.S. 706",
    amendment: "11th",
    summary: "Probation officers sued Maine in state court for violating the Fair Labor Standards Act's overtime provisions. The Supreme Court ruled 5-4 that states have sovereign immunity from private suits in their own state courts as well as federal courts, absent consent.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Kennedy, that Congress cannot authorize private lawsuits for damages against nonconsenting states in their own courts, so the officers' suit was barred.",
    significance: "Extended state sovereign immunity beyond the text of the 11th Amendment, which mentions only federal courts. The federal government can still sue states to enforce federal law, and individuals can still seek orders against state officials under Ex parte Young. Critics argue the ruling makes it harder to hold states accountable; supporters argue it respects the states' standing as sovereigns.",
    url: "https://supreme.justia.com/cases/federal/us/527/706/"
  },
  "Chiafalo v. Washington (2020)": {
    name: "Chiafalo v. Washington",
    year: 2020,
    citation: "591 U.S. 578",
    amendment: "12th",
    summary: "Three Washington state presidential electors in 2016 voted for Colin Powell instead of Hillary Clinton, who won Washington's popular vote. They were fined $1,000 each under state law. The Supreme Court unanimously upheld the fines, ruling that states can enforce pledges that require electors to vote for their party's candidate.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Kagan, that a state's power under Article II to appoint electors includes the power to require them to vote for their party's nominee, the winner of the state's popular vote, and to penalize them if they do not. In a companion case from Colorado, the Court also allowed a state to remove and replace an elector who broke his pledge.",
    significance: "Resolved a long-standing question about the Electoral College: in states with such laws, electors are not free agents. States may ensure that electors vote in line with the state's popular vote.",
    url: "https://supreme.justia.com/cases/federal/us/591/19-465/"
  },
  "Jones v. Alfred H. Mayer Co. (1968)": {
    name: "Jones v. Alfred H. Mayer Co.",
    year: 1968,
    citation: "392 U.S. 409",
    amendment: "13th",
    summary: "Joseph Lee Jones, a Black man, alleged that the Alfred H. Mayer Company refused to sell him a home in a St. Louis County development because of his race. The Supreme Court ruled that a Reconstruction-era law, the Civil Rights Act of 1866, bars all racial discrimination, private and public, in the sale or rental of property, and that the 13th Amendment gives Congress the power to pass such a law.",
    outcome: "The Court ruled 7-2, in an opinion by Justice Stewart, that Jones could sue under the 1866 law. The decision came two months after Congress passed the Fair Housing Act of 1968, which also bans housing discrimination.",
    significance: "Established that the 13th Amendment is not limited to literal slavery. It empowers Congress to eliminate the 'badges and incidents of slavery,' including private racial discrimination, because unlike the 14th Amendment it is not limited to action by the government.",
    url: "https://supreme.justia.com/cases/federal/us/392/409/"
  },
  "Brown v. Board of Education (1954)": {
    name: "Brown v. Board of Education",
    year: 1954,
    citation: "347 U.S. 483",
    amendment: "14th",
    summary: "Linda Brown, a Black third-grader in Topeka, Kansas, had to travel across town to a segregated school even though a school for white children was much closer to her home. Her father joined other parents in suing, and the Supreme Court heard the case together with similar challenges from South Carolina, Virginia and Delaware. The Court unanimously ruled that racial segregation in public schools violates the Equal Protection Clause, rejecting the 'separate but equal' doctrine of Plessy v. Ferguson (1896) in public education.",
    outcome: "The Court ruled 9-0, in an opinion by Chief Justice Warren, that 'separate educational facilities are inherently unequal.' A year later, in a second decision known as Brown II, it ordered desegregation to proceed 'with all deliberate speed.'",
    significance: "One of the most important civil rights decisions in American history. It helped spur the modern civil rights movement and the legal dismantling of Jim Crow segregation laws.",
    url: "https://supreme.justia.com/cases/federal/us/347/483/"
  },
  "Loving v. Virginia (1967)": {
    name: "Loving v. Virginia",
    year: 1967,
    citation: "388 U.S. 1",
    amendment: "14th",
    summary: "Richard Loving, a white man, and Mildred Jeter, a Black woman, married in Washington D.C. and returned to their home in Virginia, where interracial marriage was a felony. They were convicted and sentenced to a year in jail, suspended on condition they leave Virginia for 25 years. The Supreme Court unanimously struck down Virginia's anti-miscegenation law.",
    outcome: "The Court ruled 9-0, in an opinion by Chief Justice Warren, that Virginia's ban violated both the Equal Protection and Due Process Clauses. The ruling ended bans on interracial marriage in Virginia and the 15 other states that still had them.",
    significance: "Established that the freedom to marry is a fundamental right protected by the Due Process and Equal Protection Clauses. The Court declared: 'The freedom to marry has long been recognized as one of the vital personal rights essential to the orderly pursuit of happiness by free men.'",
    url: "https://supreme.justia.com/cases/federal/us/388/1/"
  },
  "Harlow v. Fitzgerald (1982)": {
    name: "Harlow v. Fitzgerald",
    year: 1982,
    citation: "457 U.S. 800",
    amendment: "14th",
    summary: "A. Ernest Fitzgerald, a civilian Air Force management analyst, lost his job after testifying before Congress about $2 billion in cost overruns on a military cargo plane. He sued White House aides, including Bryce Harlow, claiming they took part in a conspiracy to have him fired. The Supreme Court reshaped qualified immunity: government officials are shielded from liability unless their conduct violates 'clearly established' statutory or constitutional rights that a reasonable person would have known.",
    outcome: "The Court ruled 8-1, in an opinion by Justice Powell, that presidential aides generally have qualified rather than absolute immunity. It replaced the earlier test, which looked at an official's subjective good faith, with an objective test focused on whether the law was clearly established.",
    significance: "Shapes the qualified immunity doctrine courts apply today in lawsuits against government officials, including police. Critics argue it creates a nearly insurmountable barrier for people whose rights were violated, since courts often require a closely similar prior case; supporters argue it protects officials from the burdens of litigation and allows them to make difficult decisions without fear of personal liability.",
    url: "https://supreme.justia.com/cases/federal/us/457/800/"
  },
  "Shelby County v. Holder (2013)": {
    name: "Shelby County v. Holder",
    year: 2013,
    citation: "570 U.S. 529",
    amendment: "15th",
    summary: "Shelby County, Alabama challenged the Voting Rights Act's preclearance requirement, which required jurisdictions with histories of voting discrimination to get federal approval before changing voting rules. The Supreme Court ruled 5-4 that the coverage formula used to determine which jurisdictions needed preclearance was outdated and unconstitutional.",
    outcome: "The Court ruled 5-4, in an opinion by Chief Justice Roberts, that the formula in Section 4(b) used to decide which jurisdictions needed preclearance was based on outdated data and was unconstitutional. The Court did not strike down preclearance itself, but without a formula no jurisdiction is currently covered.",
    significance: "Ended the system that had required certain states and localities to get federal approval before changing voting rules. Within hours, Texas announced it would enforce a voter ID law that had been blocked under preclearance. Supporters argue the ruling ended unequal treatment of states based on decades-old data; critics, including Justice Ginsburg in dissent, compared it to 'throwing away your umbrella in a rainstorm because you are not getting wet.' Section 2 of the Act still applies nationwide, as Allen v. Milligan (2023) confirmed. Louisiana v. Callais (2026) later held that, for district maps, Section 2 imposes liability only when the evidence supports a strong inference that the state intentionally discriminated because of race.",
    url: "https://supreme.justia.com/cases/federal/us/570/529/"
  },
  "Brnovich v. Democratic National Committee (2021)": {
    name: "Brnovich v. Democratic National Committee",
    year: 2021,
    citation: "594 U.S. 647",
    amendment: "15th",
    summary: "Arizona enacted two voting provisions: one discarding ballots cast in the wrong precinct and another criminalizing ballot collection by third parties ('ballot harvesting'). The Democratic National Committee challenged both as violating Section 2 of the Voting Rights Act because they disproportionately affected minority voters.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Alito, that neither provision violated Section 2 of the Voting Rights Act, and that the ballot-collection law was not adopted with discriminatory intent. It listed 'guideposts' for Section 2 cases, including the size of the burden, the 'usual burdens of voting,' and the state's interests, such as preventing fraud.",
    significance: "Critics argue the guideposts make it significantly harder to challenge voting restrictions under the Voting Rights Act; supporters argue they give states clearer rules and respect their authority to run elections. Under the ruling, a rule that imposes only the usual burdens of voting does not violate Section 2 merely because it affects some groups more than others.",
    url: "https://supreme.justia.com/cases/federal/us/594/19-1257/"
  },
  "Pollock v. Farmers' Loan & Trust Co. (1895)": {
    name: "Pollock v. Farmers' Loan & Trust Co.",
    year: 1895,
    citation: "157 U.S. 429",
    amendment: "Art. I",
    summary: "Charles Pollock challenged the federal income tax enacted in 1894. The Supreme Court ruled that taxes on income from property (rents, dividends, interest) were 'direct taxes' that had to be apportioned among states by population, effectively striking down the income tax as unconstitutional.",
    outcome: "In two decisions in 1895, the second on rehearing by a 5-4 vote, the Court held that the income tax provisions of the 1894 law were unconstitutional because they imposed direct taxes without apportionment.",
    significance: "Because apportioning an income tax by population would force residents of poorer states to pay higher rates, the decision made a general federal income tax impractical. It led to the 16th Amendment (1913), which gave Congress the power to tax incomes without apportionment.",
    url: "https://supreme.justia.com/cases/federal/us/157/429/"
  },
  "Minor v. Happersett (1875)": {
    name: "Minor v. Happersett",
    year: 1875,
    citation: "88 U.S. 162",
    amendment: "14th",
    summary: "Virginia Minor attempted to register to vote in Missouri and was turned away because she was a woman. She argued the 14th Amendment's citizenship and privileges or immunities clauses guaranteed her right to vote. The Supreme Court unanimously ruled that while women were citizens, citizenship alone did not confer the right to vote.",
    outcome: "The Court ruled 9-0, in an opinion by Chief Justice Waite, that the Constitution does not confer the right to vote on anyone, and that a state could limit voting to men without violating the 14th Amendment.",
    significance: "The ruling that citizenship didn't include suffrage made clear that a constitutional amendment was needed to guarantee women's right to vote. It fueled the suffrage movement that ultimately led to the 19th Amendment in 1920.",
    url: "https://supreme.justia.com/cases/federal/us/88/162/"
  },
  "Oregon v. Mitchell (1970)": {
    name: "Oregon v. Mitchell",
    year: 1970,
    citation: "400 U.S. 112",
    amendment: "14th",
    summary: "Congress lowered the voting age to 18 for all elections through the Voting Rights Act Amendments of 1970. Oregon and other states challenged this. The Supreme Court ruled that Congress could set the voting age for federal elections but not state elections.",
    outcome: "In a fractured 5-4 decision with no majority opinion on the age issue, the Court upheld the 18-year-old voting age for federal elections but struck it down for state and local elections. All nine justices agreed that Congress could ban literacy tests nationwide.",
    significance: "Most states would have had to keep separate voter rolls and ballots for 18- to 20-year-olds. Congress and the states responded quickly with the 26th Amendment, ratified in about 100 days in 1971, the fastest of any amendment, which set 18 as the voting age for all elections.",
    url: "https://supreme.justia.com/cases/federal/us/400/112/"
  },
  "Adams v. Clinton (2000)": {
    name: "Adams v. Clinton",
    year: 2000,
    citation: "90 F. Supp. 2d 35 (D.D.C.)",
    amendment: "23rd",
    summary: "D.C. residents sued for voting representation in Congress, arguing that the lack of representation violated their constitutional rights. A special three-judge federal court ruled that D.C. residents have no constitutional right to voting representation in Congress, because the Constitution gives House representation only to 'the People of the several States,' and D.C. is not a state.",
    outcome: "The court rejected the claims, with one judge dissenting in part, and said any remedy must come through the political process. The Supreme Court affirmed the decision later in 2000 without issuing an opinion.",
    significance: "Highlighted the unique constitutional status of D.C. residents: they can vote for President under the 23rd Amendment and elect a non-voting delegate to the House, but they have no voting representation in Congress. About 700,000 Americans live in the District.",
    url: "https://static.case.law/f-supp-2d/90/html/0035-01.html"
  },
  "Jones v. Governor of Florida (2020)": {
    name: "Jones v. Governor of Florida",
    year: 2020,
    citation: "975 F.3d 1016 (11th Cir.)",
    amendment: "24th",
    summary: "In 2018 Florida voters approved Amendment 4, restoring voting rights to most people with felony convictions once they complete 'all terms of sentence.' The legislature then defined that phrase to include paying all fines, fees and restitution ordered as part of the sentence, and the Florida Supreme Court agreed with that reading. People who could not afford to pay challenged the requirement as unconstitutional, including as a modern poll tax.",
    outcome: "Sitting as a full court, the 11th Circuit ruled 6-4 that the requirement does not violate the Equal Protection Clause or the 24th Amendment, reversing a trial court ruling. The majority reasoned that fines and fees imposed as part of a criminal sentence are not a 'tax.'",
    significance: "The case raised sharp debate about whether conditioning restored voting rights on payment functions as a modern poll tax. The dissenting judges argued that conditioning the vote on ability to pay is unconstitutional wealth discrimination; the majority held that states may require people to complete their full sentences, including financial terms, before voting again.",
    url: "https://law.justia.com/cases/federal/appellate-courts/ca11/20-12003/20-12003-2020-09-11.html"
  },
  "Mitchell v. City of Henderson (2015)": {
    name: "Mitchell v. City of Henderson",
    year: 2015,
    citation: "No. 2:13-cv-01154 (D. Nev.)",
    amendment: "3rd",
    summary: "Anthony Mitchell alleged that in 2011 police in Henderson, Nevada, responding to a domestic violence call at a neighbor's home, wanted to use his house as a lookout. According to his lawsuit, when he refused, officers broke down his door, shot him with pepper-ball rounds, arrested him and occupied his home. He sued, claiming among other things a violation of the Third Amendment.",
    outcome: "In February 2015 the federal district court dismissed the Third Amendment claim, ruling that municipal police officers are not 'soldiers' within the meaning of the amendment. The ruling addressed only that claim, not the other claims in Mitchell's lawsuit.",
    significance: "A rare modern attempt to invoke the Third Amendment. The ruling suggests the amendment's protection against quartering applies to the military, not to civilian police, even when police use a home for tactical purposes.",
    url: "https://www.courtlistener.com/docket/4317315/mitchell-v-city-of-henderson-nevada/"
  },

  // ============================================================
  // CONSTITUTIONAL STRUCTURE, CITIZENSHIP & LATER AMENDMENTS
  // ============================================================

  "Wesberry v. Sanders (1964)": {
    name: "Wesberry v. Sanders",
    year: 1964,
    citation: "376 U.S. 1",
    amendment: "Art. I",
    summary: "Georgia's congressional districts had been drawn under a 1931 state law and had grown badly unequal. The Atlanta-area district had roughly three times as many residents as the smallest district, yet each elected one member of the House. James Wesberry and other Atlanta-area voters sued Governor Carl Sanders, arguing that their votes counted for far less than votes elsewhere in the state. The question was whether the Constitution requires congressional districts within a state to have roughly equal populations.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Black, that Article I, Section 2, which says House members are chosen 'by the People of the several States,' requires that one person's vote in a congressional election be worth as much as another's, as nearly as is practicable. Georgia's unequal districts were unconstitutional.",
    significance: "Wesberry requires every state to draw congressional districts with nearly equal populations, which is a major reason districts are redrawn after each census. Together with Reynolds v. Sims (1964), which applied the same idea to state legislatures, it established the principle of 'one person, one vote.'",
    url: "https://supreme.justia.com/cases/federal/us/376/1/"
  },
  "Moore v. Harper (2023)": {
    name: "Moore v. Harper",
    year: 2023,
    citation: "600 U.S. 1",
    amendment: "Art. I",
    summary: "After the 2020 census, North Carolina's legislature drew a new congressional map. The North Carolina Supreme Court struck it down as a partisan gerrymander that violated the state constitution. Legislative leaders, including House Speaker Timothy Moore, argued that the Elections Clause of Article I, which assigns the rules for federal elections to each state's 'Legislature,' gives legislatures power over those rules that state courts cannot review under state constitutions. This argument is known as the 'independent state legislature' theory.",
    outcome: "The Court rejected the theory 6-3, in an opinion by Chief Justice Roberts. The Elections Clause does not shield state legislatures from ordinary review by state courts applying state constitutions. The Court added that state courts may not go so far beyond the ordinary bounds of judicial review that they take over the legislature's role, and that federal courts can check whether they have done so.",
    significance: "State courts can continue to apply their own constitutions to congressional maps and other rules for federal elections, while the U.S. Supreme Court keeps the power to review state court rulings that stray too far from state law. Separately, the North Carolina Supreme Court had reheard the case earlier in 2023 and reversed its own gerrymandering ruling.",
    url: "https://supreme.justia.com/cases/federal/us/600/21-1271/"
  },
  "Arizona v. Inter Tribal Council of Arizona (2013)": {
    name: "Arizona v. Inter Tribal Council of Arizona",
    year: 2013,
    citation: "570 U.S. 1",
    amendment: "Art. I",
    summary: "The National Voter Registration Act of 1993 requires states to 'accept and use' a standard federal voter registration form. That form asks applicants to swear, under penalty of perjury, that they are citizens. In 2004 Arizona voters approved Proposition 200, which required election officials to reject any registration not accompanied by documentary proof of citizenship, such as a birth certificate or passport. Voters, tribal groups and civic organizations sued, arguing that the federal law overrode the state requirement for people using the federal form.",
    outcome: "The Court ruled 7-2, in an opinion by Justice Scalia, that the federal law preempted Arizona's requirement for applicants using the federal form. Under the Elections Clause, Congress can override state rules on the 'Times, Places and Manner' of federal elections, and voter registration falls within that power. The Court noted that Arizona could ask the federal Election Assistance Commission to add its proof requirement to the form's state instructions and could go to court if refused.",
    significance: "The case confirms that Congress has broad power over how federal elections are run. The Court also stressed that the Constitution leaves voter qualifications, meaning who may vote, to the states. Arizona responded by creating a separate category of voters who are registered only for federal elections.",
    url: "https://supreme.justia.com/cases/federal/us/570/1/"
  },
  "Powell v. McCormack (1969)": {
    name: "Powell v. McCormack",
    year: 1969,
    citation: "395 U.S. 486",
    amendment: "Art. I",
    summary: "Adam Clayton Powell Jr., a longtime congressman from Harlem in New York City, was re-elected in 1966. Following charges that he had misused House funds, the House voted in 1967 to exclude him and refused to give him his seat. Powell sued Speaker John McCormack and House officers, arguing that the House could refuse to seat a member-elect only if he failed to meet the Constitution's requirements of age, citizenship and residency.",
    outcome: "The Court ruled 7-1, in an opinion by Chief Justice Warren, that the House had acted unconstitutionally. Its power under Article I, Section 5 to judge the 'Qualifications of its own Members' covers only the qualifications listed in the Constitution, and Powell met them all. The Court also held that the dispute was not a political question beyond the reach of the courts.",
    significance: "Voters, not the House, decide who represents them, as long as the winner meets the constitutional requirements. Either chamber may still expel a sitting member, but that takes a two-thirds vote. The ruling laid the groundwork for U.S. Term Limits v. Thornton (1995), which barred states from adding their own qualifications for Congress.",
    url: "https://supreme.justia.com/cases/federal/us/395/486/"
  },
  "Gravel v. United States (1972)": {
    name: "Gravel v. United States",
    year: 1972,
    citation: "408 U.S. 606",
    amendment: "Art. I",
    summary: "In June 1971, Senator Mike Gravel of Alaska called a special meeting of a Senate subcommittee he chaired and read parts of the Pentagon Papers, a classified study of the Vietnam War, into the public record. He then arranged for a private publisher, Beacon Press, to publish the papers as a book. A federal grand jury investigating the release subpoenaed one of his aides. Gravel argued that the Speech or Debate Clause of Article I, Section 6 protected both him and his aide from questioning.",
    outcome: "The Court ruled 5-4, in an opinion by Justice White, that the Clause protects a legislator's aides when they do work that would be protected if the legislator did it, and that reading the papers at the subcommittee meeting was protected. Arranging private publication, however, was not part of the legislative process. The grand jury could ask about that arrangement and about possible crimes by others, as long as it did not question protected legislative acts.",
    significance: "Gravel sets the reach of legislative immunity. Members of Congress and their staff cannot be prosecuted or sued over legislative work such as speeches, votes and committee activity, but the protection does not cover everything a member does, such as distributing materials outside Congress.",
    url: "https://supreme.justia.com/cases/federal/us/408/606/"
  },
  "INS v. Chadha (1983)": {
    name: "INS v. Chadha",
    year: 1983,
    citation: "462 U.S. 919",
    amendment: "Art. I",
    summary: "Jagdish Chadha, a man of Indian descent born in Kenya, stayed in the United States after his student visa expired. An immigration judge suspended his deportation on hardship grounds, as federal law allowed. The same law let either house of Congress veto such a decision by resolution, and in 1975 the House of Representatives voted to overturn Chadha's suspension without involving the Senate or the President. Chadha challenged this 'legislative veto.'",
    outcome: "The Court ruled 7-2, in an opinion by Chief Justice Burger, that the one-house veto was unconstitutional. When Congress acts to change people's legal rights and duties, it must follow Article I's lawmaking process: passage by both the House and the Senate, and presentment to the President for signature or veto.",
    significance: "The decision effectively struck down legislative veto provisions in nearly 200 federal laws, as Justice White noted in dissent. Congress now relies on other tools to check executive agencies, such as the Congressional Review Act of 1996, which lets Congress overturn agency rules through a joint resolution that the President can sign or veto.",
    url: "https://supreme.justia.com/cases/federal/us/462/919/"
  },
  "Clinton v. City of New York (1998)": {
    name: "Clinton v. City of New York",
    year: 1998,
    citation: "524 U.S. 417",
    amendment: "Art. I",
    summary: "The Line Item Veto Act of 1996 let the President, after signing a bill into law, 'cancel' individual spending items and certain narrow tax benefits within it. In 1997 President Clinton used this power to cancel a provision that helped New York's Medicaid funding and a tax provision that helped food processors selling to farmer-owned cooperatives. New York City, health care groups and a farmers' cooperative sued, arguing that the Act was unconstitutional.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Stevens, that the Act violated the Presentment Clause of Article I, Section 7. The Constitution lets the President sign or veto a bill as a whole, but not change a law by cancelling parts of it after it is enacted.",
    significance: "A presidential line-item veto would require a constitutional amendment. Most state governors have line-item veto power under their state constitutions, but the President must accept or reject each bill in full.",
    url: "https://supreme.justia.com/cases/federal/us/524/417/"
  },
  "McCulloch v. Maryland (1819)": {
    name: "McCulloch v. Maryland",
    year: 1819,
    citation: "17 U.S. 316",
    amendment: "Art. I",
    summary: "In 1816 Congress chartered the Second Bank of the United States, which opened a branch in Baltimore. Maryland imposed a tax on banks not chartered by the state, and James McCulloch, the branch's cashier, refused to pay it. The case raised two questions: whether Congress had the power to create a bank at all, since the Constitution does not mention one, and whether a state could tax a federal institution.",
    outcome: "In a unanimous opinion by Chief Justice John Marshall, the Court upheld the bank and struck down Maryland's tax. The Necessary and Proper Clause lets Congress choose reasonable means to carry out its listed powers, such as taxing, borrowing and regulating commerce. And because 'the power to tax involves the power to destroy,' states may not tax the operations of the federal government.",
    significance: "McCulloch is the foundation of implied federal powers. Congress is not limited to the specific tasks listed in Article I but may pass laws reasonably related to carrying them out, a principle behind much of modern federal law. The case also established that, under the Supremacy Clause, states cannot interfere with valid federal activity.",
    url: "https://supreme.justia.com/cases/federal/us/17/316/"
  },
  "Gibbons v. Ogden (1824)": {
    name: "Gibbons v. Ogden",
    year: 1824,
    citation: "22 U.S. 1",
    amendment: "Art. I",
    summary: "New York gave Robert Livingston and Robert Fulton the exclusive right to run steamboats in New York waters, and Aaron Ogden operated under a license from them. Thomas Gibbons ran competing steamboats between New Jersey and New York City under a federal coasting license. Ogden won an order from the New York courts shutting Gibbons down, and Gibbons appealed, arguing that federal law overrode the state monopoly.",
    outcome: "The Court, in an opinion by Chief Justice John Marshall, ruled for Gibbons. Commerce includes navigation, and Congress's power to regulate commerce among the states reaches activity inside a state's borders when it is part of interstate trade. Under the Supremacy Clause, the federal license prevailed over New York's monopoly.",
    significance: "Gibbons gave the Commerce Clause a broad reading that still anchors federal power over the national economy. It opened the steamboat trade to competition and set the starting point for later cases on the scope of that power, such as Wickard v. Filburn (1942) and United States v. Lopez (1995).",
    url: "https://supreme.justia.com/cases/federal/us/22/1/"
  },
  "Kendall v. United States ex rel. Stokes (1838)": {
    name: "Kendall v. United States ex rel. Stokes",
    year: 1838,
    citation: "37 U.S. 524",
    amendment: "Art. II",
    summary: "William Stokes and his partners held contracts to carry the mail. After a dispute over money owed to them, Congress passed a law directing the Solicitor of the Treasury to settle their claim and ordering the Postmaster General to credit them with whatever amount the Solicitor found. Postmaster General Amos Kendall paid only part of the award. The contractors asked a federal court in Washington, D.C. for a writ of mandamus, an order directing an official to perform a duty, and Kendall argued that as an executive officer he answered only to the President.",
    outcome: "The Court upheld the order requiring Kendall to pay. When Congress assigns a specific legal duty to an executive officer, the duty is governed by law rather than by the President's direction, and courts may order the officer to carry it out. The Court called the idea that the President's duty to see the laws faithfully executed includes a power to forbid their execution 'entirely inadmissible.'",
    significance: "Kendall establishes that executive officials must perform duties that Congress sets by law, even if the President prefers otherwise. It is often cited in debates over how far a President can direct or override executive officials, including disputes over withholding funds that Congress has required to be spent.",
    url: "https://supreme.justia.com/cases/federal/us/37/524/"
  },
  "Puerto Rico v. Branstad (1987)": {
    name: "Puerto Rico v. Branstad",
    year: 1987,
    citation: "483 U.S. 219",
    amendment: "Art. IV",
    summary: "In 1981 Ronald Calder, an Iowa resident working in Puerto Rico as a federal air traffic controller, struck a married couple with his car, killing the wife. Charged with murder in Puerto Rico, he returned to Iowa. Puerto Rico asked Iowa to send him back under the Extradition Clause of Article IV and the federal Extradition Act, but Iowa's governor refused. Puerto Rico sued in federal court to require the governor to act.",
    outcome: "The Court ruled unanimously, in an opinion by Justice Marshall, that federal courts can order a governor to return a fugitive. The duty to extradite is mandatory, and a governor has no discretion to refuse a proper request. The Court overruled Kentucky v. Dennison (1861), which had held that federal courts could not enforce that duty.",
    significance: "Extradition between states and territories is a legal obligation, not a favor. A governor who receives a valid request must return the person, and questions of guilt or innocence are left to the courts where the crime was charged.",
    url: "https://supreme.justia.com/cases/federal/us/483/219/"
  },
  "Prigg v. Pennsylvania (1842)": {
    name: "Prigg v. Pennsylvania",
    year: 1842,
    citation: "41 U.S. 539",
    amendment: "Art. IV",
    summary: "Margaret Morgan, a Black woman claimed as property by a Maryland slaveholder, had moved to Pennsylvania with her family. In 1837 Edward Prigg, acting for the Maryland woman who claimed to own her, seized Morgan and her children and took them to Maryland without obtaining the certificate from a Pennsylvania official that state law required. Pennsylvania convicted Prigg of kidnapping. The question was whether a state could regulate the capture of people claimed as fugitives under the Fugitive Slave Clause of Article IV.",
    outcome: "In an opinion by Justice Joseph Story, the Court reversed Prigg's conviction. It held that the Constitution and the federal Fugitive Slave Act of 1793 overrode state laws that interfered with recapture, and that a slaveholder could seize an alleged fugitive without going through state courts. The opinion also said the federal government could not require state officials to enforce the federal law.",
    significance: "Prigg struck down Northern laws meant to protect free Black residents from kidnapping. Several Northern states responded by barring their officials from helping with recaptures, which led Congress to pass the harsher Fugitive Slave Act of 1850. The 13th Amendment made the Fugitive Slave Clause obsolete, but the idea that the federal government cannot commandeer state officials survives in modern cases such as Printz v. United States (1997).",
    url: "https://supreme.justia.com/cases/federal/us/41/539/"
  },
  "Dred Scott v. Sandford (1857)": {
    name: "Dred Scott v. Sandford",
    year: 1857,
    citation: "60 U.S. 393",
    amendment: "Art. IV",
    summary: "Dred Scott was an enslaved man whose owner, an Army surgeon, took him to live for years in the free state of Illinois and in federal territory where the Missouri Compromise banned slavery. After returning to Missouri, Scott sued for his freedom, arguing that living on free soil had made him free. The case reached the Supreme Court as a suit against John Sanford of New York (misspelled 'Sandford' in the official report), who claimed to own Scott and his family.",
    outcome: "The Court ruled 7-2, in an opinion by Chief Justice Roger Taney, that Black Americans, whether enslaved or free, were not and could not become citizens of the United States, so Scott could not sue in federal court. It also held that Congress had no power to ban slavery in the territories, striking down the Missouri Compromise. Justices McLean and Curtis dissented.",
    significance: "Dred Scott is widely regarded as one of the worst decisions in the Court's history, and it deepened the national divide over slavery before the Civil War. The 13th Amendment (1865) abolished slavery, and the 14th Amendment (1868) overturned the ruling's central holding by making all persons born or naturalized in the United States citizens.",
    url: "https://supreme.justia.com/cases/federal/us/60/393/"
  },
  "Downes v. Bidwell (1901)": {
    name: "Downes v. Bidwell",
    year: 1901,
    citation: "182 U.S. 244",
    amendment: "Art. IV",
    summary: "After the Spanish-American War, Spain ceded Puerto Rico to the United States. In 1900 Congress passed the Foraker Act, which set up a civil government for the island and placed a duty on goods shipped from Puerto Rico to the mainland. Downes, a New York importer, paid duties on oranges from Puerto Rico and sued George Bidwell, the customs collector for the port of New York. He argued that Puerto Rico was part of the United States, so the duty violated the Constitution's rule that duties be 'uniform throughout the United States.'",
    outcome: "The Court upheld the duty 5-4, but no single opinion spoke for a majority. Justice White's concurrence, which proved the most influential, said Puerto Rico was an 'unincorporated' territory that belonged to the United States but was not part of it, so the Constitution did not apply there in full. Under this approach, only fundamental constitutional rights apply automatically in unincorporated territories.",
    significance: "Downes is one of the Insular Cases, a group of rulings that still shape the constitutional status of Puerto Rico, Guam, the U.S. Virgin Islands, American Samoa and the Northern Mariana Islands. The cases have long been criticized, in part for the racial views expressed in the opinions, and in 2022 Justice Gorsuch wrote that they should be overruled. The Court has not overruled them.",
    url: "https://supreme.justia.com/cases/federal/us/182/244/"
  },
  "Luther v. Borden (1849)": {
    name: "Luther v. Borden",
    year: 1849,
    citation: "48 U.S. 1",
    amendment: "Art. IV",
    summary: "In the early 1840s Rhode Island was still governed under its 1663 colonial charter, and voting was limited mainly to landowners. Reformers led by Thomas Dorr wrote a new constitution, held their own elections and declared Dorr governor in 1842, while the charter government declared martial law. Militia members, including Luther Borden, broke into the home of Martin Luther, a Dorr supporter, to arrest him. Luther sued for trespass, arguing that the charter government was not legitimate, so the militia had no authority.",
    outcome: "In an opinion by Chief Justice Roger Taney, the Court ruled against Luther. Deciding which of two rival state governments was lawful was a political question for Congress and the President, not the courts. The Guarantee Clause of Article IV, which promises every state 'a Republican Form of Government,' is enforced by the political branches.",
    significance: "Luther v. Borden is a foundation of the political question doctrine, under which courts decline to decide certain issues the Constitution leaves to Congress and the President. Courts still generally refuse to hear claims under the Guarantee Clause, and the political question doctrine was central to Rucho v. Common Cause (2019), which held that federal courts cannot decide partisan gerrymandering claims.",
    url: "https://supreme.justia.com/cases/federal/us/48/1/"
  },
  "United States v. Wong Kim Ark (1898)": {
    name: "United States v. Wong Kim Ark",
    year: 1898,
    citation: "169 U.S. 649",
    amendment: "14th",
    summary: "Wong Kim Ark was born in San Francisco to Chinese parents who lived there lawfully but, under the Chinese Exclusion laws of the time, could not become U.S. citizens. In 1895, returning from a visit to China, he was refused entry on the ground that he was not a citizen. He challenged his detention, arguing that the 14th Amendment made him a citizen because he was born in the United States.",
    outcome: "The Court ruled 6-2, in an opinion by Justice Horace Gray, that Wong Kim Ark was a citizen by birth. A child born in the United States to foreign parents who have a permanent home here, and who are not foreign diplomats, is a citizen at birth. The phrase 'subject to the jurisdiction thereof' excludes only narrow groups, such as children of diplomats and of enemy forces occupying U.S. territory.",
    significance: "Wong Kim Ark is the leading Supreme Court precedent on birthright citizenship. It confirmed that citizenship under the 14th Amendment depends on birth on U.S. soil, not on the race or nationality of a person's parents. Trump v. Barbara (2026) reaffirmed it, holding that children born in the United States to parents who are here unlawfully or only temporarily are citizens at birth.",
    url: "https://supreme.justia.com/cases/federal/us/169/649/"
  },
  "Trump v. Anderson (2024)": {
    name: "Trump v. Anderson",
    year: 2024,
    citation: "601 U.S. 100",
    amendment: "14th",
    summary: "Section 3 of the 14th Amendment bars from office anyone who swore an oath to support the Constitution as an official and then 'engaged in insurrection or rebellion.' A group of Colorado voters sued to keep former President Donald Trump off the state's 2024 Republican primary ballot, arguing that his conduct related to the January 6, 2021 attack on the Capitol disqualified him. The Colorado Supreme Court agreed and ordered him removed from the ballot. Trump appealed.",
    outcome: "The Court unanimously reversed in an unsigned (per curiam) opinion. It held that states may not enforce Section 3 against federal officeholders or candidates, especially for the Presidency, and that this responsibility belongs to Congress, acting through legislation under Section 5. The Court did not decide whether Trump had engaged in insurrection.",
    significance: "Trump remained on the ballot in every state, and states may still apply Section 3 to state offices. All nine justices agreed on the result, but the per curiam opinion, joined in full by five justices, went further and said Section 3 is enforced through laws Congress passes under Section 5. Justice Barrett, and Justices Sotomayor, Kagan and Jackson in a joint opinion, wrote that the Court did not need to decide that broader question.",
    url: "https://supreme.justia.com/cases/federal/us/601/23-719/"
  },
  "Richardson v. Ramirez (1974)": {
    name: "Richardson v. Ramirez",
    year: 1974,
    citation: "418 U.S. 24",
    amendment: "14th",
    summary: "Three men in California who had been convicted of felonies and had fully completed their sentences and parole were turned away when they tried to register to vote. California's constitution barred people convicted of certain serious crimes from voting. They argued that permanently denying them the vote violated the Equal Protection Clause of the 14th Amendment, and the California Supreme Court agreed.",
    outcome: "The Court reversed 6-3, in an opinion by Justice Rehnquist. Section 2 of the 14th Amendment, which reduces a state's representation in Congress when it denies the vote to adult male citizens, makes an exception for 'participation in rebellion, or other crime.' The Court read that language as showing the amendment's authors accepted laws barring people with criminal convictions from voting, so the Equal Protection Clause does not forbid them.",
    significance: "States may deny the vote to people convicted of felonies, and the rules vary widely. Maine, Vermont and the District of Columbia let people vote even while in prison, while other states restore voting rights at release, after parole or probation, or only through a special process. Current disputes often focus on the conditions for restoring rights, as in Jones v. Governor of Florida (2020).",
    url: "https://supreme.justia.com/cases/federal/us/418/24/"
  },
  "City of Boerne v. Flores (1997)": {
    name: "City of Boerne v. Flores",
    year: 1997,
    citation: "521 U.S. 507",
    amendment: "14th",
    summary: "After Employment Division v. Smith (1990) held that neutral, generally applicable laws usually do not violate the Free Exercise Clause, Congress passed the Religious Freedom Restoration Act of 1993 (RFRA). RFRA required governments to show a compelling interest, pursued by the least restrictive means, before substantially burdening a person's religious exercise. When the city of Boerne, Texas denied a Catholic parish a permit to enlarge its church under a historic preservation ordinance, the Archbishop of San Antonio sued under RFRA. The city argued that Congress lacked the power to impose RFRA on the states.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Kennedy, that RFRA exceeded Congress's power under Section 5 of the 14th Amendment as applied to state and local governments. Section 5 lets Congress enforce constitutional rights, not redefine them, and enforcement laws must show 'congruence and proportionality' between the harm addressed and the remedy chosen.",
    significance: "Boerne created the 'congruence and proportionality' test that courts still use to judge laws Congress passes under Section 5. RFRA continues to apply to the federal government, and many states have passed their own religious freedom laws. In 2000 Congress passed a narrower law protecting religious land use and the religious exercise of people in prisons.",
    url: "https://supreme.justia.com/cases/federal/us/521/507/"
  },
  "South Carolina v. Katzenbach (1966)": {
    name: "South Carolina v. Katzenbach",
    year: 1966,
    citation: "383 U.S. 301",
    amendment: "15th",
    summary: "The Voting Rights Act of 1965 targeted states and counties that had used literacy tests and had low voter registration or turnout. In those areas it suspended literacy tests, authorized federal examiners to register voters, and required 'preclearance,' meaning federal approval before any change to voting rules could take effect. South Carolina sued Attorney General Nicholas Katzenbach directly in the Supreme Court, arguing that these provisions exceeded Congress's power and intruded on the states.",
    outcome: "The Court upheld the challenged provisions 8-1, in an opinion by Chief Justice Warren. Section 2 of the 15th Amendment lets Congress use any rational means to enforce the ban on racial discrimination in voting, and the long record of discrimination justified strong remedies. Justice Black dissented in part, objecting to the preclearance requirement.",
    significance: "The decision allowed the Voting Rights Act to take full effect, and Black voter registration in the South rose sharply in the following years. The coverage formula it upheld was later struck down as outdated in Shelby County v. Holder (2013).",
    url: "https://supreme.justia.com/cases/federal/us/383/301/"
  },
  "Granholm v. Heald (2005)": {
    name: "Granholm v. Heald",
    year: 2005,
    citation: "544 U.S. 460",
    amendment: "21st",
    summary: "Michigan and New York let wineries in their own states ship wine directly to consumers but barred or restricted direct shipping by out-of-state wineries, which generally had to sell through in-state wholesalers. Small wineries and wine buyers sued, arguing that the laws discriminated against out-of-state businesses. The states defended the laws under Section 2 of the 21st Amendment, which gives states broad power over alcohol brought within their borders.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Kennedy, that the laws unconstitutionally discriminated against interstate commerce. The 21st Amendment lets states regulate alcohol, but it does not let them favor in-state producers over out-of-state ones. States may ban direct shipping entirely or allow it on equal terms.",
    significance: "Granholm opened the way for direct-to-consumer wine shipping across much of the country as many states rewrote their laws. It confirmed that the 21st Amendment's grant of power over alcohol is limited by the Constitution's ban on economic protectionism, a principle the Court applied again to alcohol retailers in 2019.",
    url: "https://supreme.justia.com/cases/federal/us/544/460/"
  },
  "Dillon v. Gloss (1921)": {
    name: "Dillon v. Gloss",
    year: 1921,
    citation: "256 U.S. 368",
    amendment: "18th",
    summary: "The 18th Amendment, which established Prohibition, was the first amendment to include a deadline: it would fail unless the states ratified it within seven years. J. J. Dillon was arrested for transporting liquor in violation of the National Prohibition Act and challenged his detention. He argued, among other things, that the amendment was invalid because Congress had no power to set a time limit on ratification.",
    outcome: "The Court unanimously rejected his challenge, in an opinion by Justice Van Devanter. Article V implies that ratification should reflect the will of the people at roughly the same time, so Congress may set a reasonable deadline, and seven years was reasonable. The Court also held that an amendment is ratified on the date the last needed state approves it, which for the 18th Amendment was January 16, 1919.",
    significance: "Dillon v. Gloss is the main precedent on ratification deadlines. Congress has set seven-year limits for most later amendments, sometimes in the amendment's text and sometimes in the resolution proposing it, as with the Equal Rights Amendment. The question resurfaced when the 27th Amendment, proposed in 1789 without a deadline, was ratified in 1992.",
    url: "https://supreme.justia.com/cases/federal/us/256/368/"
  },

  // ============================================================
  // POLICING, SEARCHES & ENCOUNTERS WITH OFFICERS
  // ============================================================

  "Mapp v. Ohio (1961)": {
    name: "Mapp v. Ohio",
    year: 1961,
    citation: "367 U.S. 643",
    amendment: "4th",
    summary: "Cleveland police came to Dollree Mapp's home in 1957 looking for a bombing suspect, and she refused to let them in without a warrant. Officers later forced their way in, waved a paper they claimed was a warrant (none was ever produced in court), and searched the entire house. They found obscene materials, and she was convicted under Ohio law. The question was whether evidence from an illegal search could be used in a state criminal trial.",
    outcome: "In a 6-3 decision, the Court reversed Mapp's conviction and held that the exclusionary rule applies to the states through the 14th Amendment. Evidence obtained in violation of the 4th Amendment cannot be used in state courts, just as in federal courts.",
    significance: "This is why illegally obtained evidence can be thrown out in any criminal case in the country, not just federal ones. The rule gives police a strong reason to follow constitutional limits on searches. Later decisions created exceptions, such as when officers rely in good faith on a warrant that turns out to be invalid.",
    url: "https://supreme.justia.com/cases/federal/us/367/643/"
  },
  "Terry v. Ohio (1968)": {
    name: "Terry v. Ohio",
    year: 1968,
    citation: "392 U.S. 1",
    amendment: "4th",
    summary: "A Cleveland detective watched John Terry and another man repeatedly walk past and peer into the same store window, then confer with a third man. Suspecting they were planning a robbery, the officer approached, asked their names, and patted down their outer clothing, finding pistols on Terry and one companion. The question was whether police may stop and frisk someone without probable cause to arrest.",
    outcome: "In an 8-1 decision, the Court upheld the stop and frisk. Police may briefly detain a person when they have reasonable suspicion, based on specific facts, that criminal activity is afoot, and may pat down outer clothing for weapons if they reasonably believe the person is armed and dangerous.",
    significance: "Created the 'Terry stop,' which requires less than probable cause but more than a hunch. A frisk is limited to a pat-down for weapons, not a full search for evidence. Officers must be able to point to specific facts that justified the stop.",
    url: "https://supreme.justia.com/cases/federal/us/392/1/"
  },
  "Whren v. United States (1996)": {
    name: "Whren v. United States",
    year: 1996,
    citation: "517 U.S. 806",
    amendment: "4th",
    summary: "Plainclothes officers in an unmarked car in Washington, D.C. saw a truck wait at a stop sign for an unusually long time, then turn without signaling and speed away. They stopped it for traffic violations and saw bags of crack cocaine in the hands of the passenger, Michael Whren. The defendants argued that the traffic stop was only an excuse to investigate drugs without any real suspicion.",
    outcome: "The Court ruled unanimously that a traffic stop is reasonable under the 4th Amendment whenever police have probable cause to believe a traffic violation occurred, regardless of the officers' actual motives.",
    significance: "Police may use any traffic violation, however minor, as a lawful reason to pull a car over, even if they are really interested in something else. These are often called 'pretextual stops.' The Court said claims of racially selective enforcement must be raised under the Equal Protection Clause, not the 4th Amendment.",
    url: "https://supreme.justia.com/cases/federal/us/517/806/"
  },
  "Pennsylvania v. Mimms (1977)": {
    name: "Pennsylvania v. Mimms",
    year: 1977,
    citation: "434 U.S. 106",
    amendment: "4th",
    summary: "Philadelphia police stopped Harry Mimms for driving with an expired license plate. An officer asked him to step out of the car and show his license and registration. When Mimms got out, the officer saw a large bulge under his jacket, frisked him, and found a loaded revolver. The question was whether police may order a driver out of a lawfully stopped car without any particular reason to suspect danger.",
    outcome: "In an unsigned 6-3 opinion, the Court held that officers may order the driver out of a lawfully stopped vehicle as a routine safety measure. The frisk was also justified because the bulge suggested Mimms was armed.",
    significance: "During a lawful traffic stop, an officer can order the driver to step out of the car without giving a reason or having any suspicion. A pat-down is a separate step and still requires a reasonable belief that the person is armed and dangerous.",
    url: "https://supreme.justia.com/cases/federal/us/434/106/"
  },
  "Maryland v. Wilson (1997)": {
    name: "Maryland v. Wilson",
    year: 1997,
    citation: "519 U.S. 408",
    amendment: "4th",
    summary: "A Maryland state trooper stopped a speeding car that had a torn rental-car tag in place of a regular license plate. The passengers seemed nervous, and the trooper ordered passenger Jerry Lee Wilson out of the car. As Wilson stepped out, crack cocaine fell to the ground. The question was whether the rule allowing officers to order drivers out of stopped cars also applies to passengers.",
    outcome: "In a 7-2 decision, the Court held that an officer making a lawful traffic stop may order passengers to get out of the car while the stop is completed, for the sake of officer safety.",
    significance: "If you are a passenger in a car that is pulled over, the officer may lawfully order you to step out, even if you are not suspected of anything. This extends the rule of Pennsylvania v. Mimms (1977) from drivers to everyone in the car.",
    url: "https://supreme.justia.com/cases/federal/us/519/408/"
  },
  "Brendlin v. California (2007)": {
    name: "Brendlin v. California",
    year: 2007,
    citation: "551 U.S. 249",
    amendment: "4th",
    summary: "Officers in Yuba City, California stopped a car to check its registration even though they had no good reason to think anything was wrong, and the State later conceded the stop was unjustified. An officer recognized passenger Bruce Brendlin, confirmed he had an outstanding warrant, and arrested him. A search turned up materials used to make methamphetamine. The question was whether a passenger is 'seized' during a traffic stop and can therefore challenge whether the stop was legal.",
    outcome: "The Court ruled unanimously that when police stop a car, every passenger is seized under the 4th Amendment, just like the driver. Brendlin was entitled to challenge the legality of the stop.",
    significance: "Passengers are not mere bystanders during a traffic stop. If the stop itself was illegal, a passenger can ask the court to exclude evidence that came from it. The Court reasoned that a reasonable passenger would not feel free to walk away when police pull a car over.",
    url: "https://supreme.justia.com/cases/federal/us/551/249/"
  },
  "Arizona v. Gant (2009)": {
    name: "Arizona v. Gant",
    year: 2009,
    citation: "556 U.S. 332",
    amendment: "4th",
    summary: "Tucson police arrested Rodney Gant for driving with a suspended license, handcuffed him, and locked him in the back of a patrol car. Officers then searched his car and found cocaine in a jacket pocket on the back seat. At the time, many courts read earlier precedent to allow a car search after any arrest of a recent occupant. The question was whether the search was lawful when Gant could no longer reach the car.",
    outcome: "In a 5-4 decision, the Court held the search unconstitutional. After an arrest, police may search a vehicle only if the arrested person is unsecured and within reaching distance of the passenger compartment, or if it is reasonable to believe the car contains evidence of the crime of arrest.",
    significance: "An arrest for a traffic offense, such as driving on a suspended license, usually does not by itself allow police to search the car. Officers may still search with your consent, with probable cause that the car contains evidence of a crime, or under other recognized exceptions.",
    url: "https://supreme.justia.com/cases/federal/us/556/332/"
  },
  "Florida v. Bostick (1991)": {
    name: "Florida v. Bostick",
    year: 1991,
    citation: "501 U.S. 429",
    amendment: "4th",
    summary: "Sheriff's deputies boarded a bus during a stopover in Fort Lauderdale as part of a routine drug sweep. Without any suspicion, they approached Terrance Bostick, asked to see his ticket and identification, and asked permission to search his luggage, telling him he could refuse. They found cocaine. The Florida Supreme Court ruled that such bus sweeps are always seizures, and the question was whether that rule was correct.",
    outcome: "In a 6-3 decision, the Court rejected Florida's automatic rule. The test is whether a reasonable person would feel free to decline the officers' requests or otherwise end the encounter, considering all the circumstances. The case was sent back for the state courts to apply that test.",
    significance: "Police may approach people on buses, trains, and in other public places to ask questions and request consent to search, even without suspicion. You may decline those requests. Whether an encounter is voluntary depends on all the circumstances, such as whether officers blocked the exit or displayed weapons.",
    url: "https://supreme.justia.com/cases/federal/us/501/429/"
  },
  "Illinois v. Wardlow (2000)": {
    name: "Illinois v. Wardlow",
    year: 2000,
    citation: "528 U.S. 119",
    amendment: "4th",
    summary: "Chicago police officers driving in a four-car caravan into an area known for heavy drug trafficking saw Sam Wardlow standing by a building holding an opaque bag. Wardlow looked toward the officers and ran. Officers caught him, frisked him, and found a loaded handgun in the bag. The question was whether his flight gave police reasonable suspicion to stop him.",
    outcome: "In a 5-4 decision, the Court held that the stop was lawful. Being in a high-crime area is not enough on its own, but unprovoked, headlong flight upon noticing police in such an area can create reasonable suspicion.",
    significance: "Running from police can be used to justify a stop. At the same time, the Court repeated that when officers approach without reasonable suspicion, a person may ignore them and go about their business, and a refusal to cooperate, without more, is not grounds for a detention.",
    url: "https://supreme.justia.com/cases/federal/us/528/119/"
  },
  "Hiibel v. Sixth Judicial District Court (2004)": {
    name: "Hiibel v. Sixth Judicial District Court of Nevada, Humboldt County",
    year: 2004,
    citation: "542 U.S. 177",
    amendment: "4th",
    summary: "A caller reported seeing a man assault a woman in a truck in Humboldt County, Nevada. A deputy found the truck with Larry Hiibel standing beside it and asked him for identification 11 times; Hiibel refused each time. He was convicted of obstructing an officer, based on a Nevada law that requires a person detained on reasonable suspicion to identify himself. The question was whether such 'stop and identify' laws violate the 4th or 5th Amendment.",
    outcome: "In a 5-4 decision, the Court upheld the conviction. Requiring a person to state their name during a valid stop based on reasonable suspicion did not violate the 4th Amendment, and Hiibel had not shown that giving his name would incriminate him under the 5th Amendment.",
    significance: "In states with 'stop and identify' laws, you may be required to give your name if police lawfully stop you based on reasonable suspicion. Not every state has such a law, and the Nevada law, as interpreted by its courts, required only stating a name, not producing a document. The ruling applies only when the stop itself is lawful.",
    url: "https://supreme.justia.com/cases/federal/us/542/177/"
  },
  "Berghuis v. Thompkins (2010)": {
    name: "Berghuis v. Thompkins",
    year: 2010,
    citation: "560 U.S. 370",
    amendment: "5th",
    summary: "Van Chester Thompkins, a suspect in a Michigan shooting, was read his Miranda rights and then stayed almost completely silent through nearly three hours of police questioning. He never said he wanted to remain silent or wanted a lawyer. Near the end, a detective asked whether he prayed to God to forgive him for 'shooting that boy down,' and Thompkins answered 'Yes.' The question was whether his long silence had invoked his right to remain silent.",
    outcome: "In a 5-4 decision, the Court held that a suspect must invoke the right to remain silent clearly and unambiguously. Staying silent is not enough, and by answering a question after understanding his rights, Thompkins waived them.",
    significance: "Silence alone does not stop police questioning. To use your rights, say them out loud and clearly, for example: 'I am using my right to remain silent' and 'I want a lawyer.' Once you clearly invoke those rights, questioning must stop.",
    url: "https://supreme.justia.com/cases/federal/us/560/370/"
  },
  "Georgia v. Randolph (2006)": {
    name: "Georgia v. Randolph",
    year: 2006,
    citation: "547 U.S. 103",
    amendment: "4th",
    summary: "During a domestic dispute in Americus, Georgia, Janet Randolph told police that her husband, Scott, used cocaine and gave them permission to search the house. Scott, who was standing there, clearly refused. Officers searched anyway, relying on her consent, and found a straw with cocaine residue in his bedroom. The question was whether one resident's consent allows a search when another resident who is present objects.",
    outcome: "In a 5-3 decision, the Court held that a physically present resident's express refusal overrides a co-occupant's consent. The warrantless search was unreasonable as to Scott Randolph.",
    significance: "If police ask to search a shared home and you are there and say no, they cannot rely on a roommate's or spouse's consent to search over your objection. The protection is narrow: the Court later held, in 2014, that it does not apply once the objecting resident has been lawfully removed, such as by arrest.",
    url: "https://supreme.justia.com/cases/federal/us/547/103/"
  },
  "Lange v. California (2021)": {
    name: "Lange v. California",
    year: 2021,
    citation: "594 U.S. 295",
    amendment: "4th",
    summary: "Arthur Lange was driving in California, playing loud music and honking his horn, when a highway patrol officer began following him. The officer turned on his lights when Lange was about 100 feet from home, but Lange pulled into his attached garage. The officer followed him into the garage, saw signs of intoxication, and Lange was charged with misdemeanor drunk driving. The question was whether pursuing a person suspected of a misdemeanor always allows police to enter a home without a warrant.",
    outcome: "Without dissent, the Court vacated the ruling below. The majority held that pursuing a fleeing misdemeanor suspect does not always justify a warrantless home entry. Officers must look at the full circumstances and may enter when there is a genuine emergency, such as a risk of violence, imminent destruction of evidence, or the suspect's escape.",
    significance: "Your home, including an attached garage, keeps strong protection even when police are pursuing you for a minor offense. Failing to pull over can still lead to separate charges, but it does not automatically give officers the right to follow you inside without a warrant.",
    url: "https://supreme.justia.com/cases/federal/us/594/20-18/"
  },
  "Caniglia v. Strom (2021)": {
    name: "Caniglia v. Strom",
    year: 2021,
    citation: "593 U.S. 194",
    amendment: "4th",
    summary: "During an argument, Edward Caniglia put a handgun on the table and asked his wife to shoot him. She spent the night at a hotel and asked police to check on him the next morning. He agreed to go to a hospital for a psychiatric evaluation, and after he left, officers entered his Rhode Island home without a warrant and seized his two handguns. Lower courts upheld the seizure under a 'community caretaking' exception that the Supreme Court had once recognized for an impounded car.",
    outcome: "The Court ruled unanimously that there is no general 'community caretaking' exception that allows police to enter and search a home without a warrant. The reasoning used for vehicles does not extend to the home.",
    significance: "Police cannot enter your home without a warrant just because they believe it would be helpful or for your own good. They may still enter without a warrant with consent or in a genuine emergency, such as to help someone who is seriously injured or in immediate danger. Case v. Montana (2026) confirmed that an emergency entry requires an objectively reasonable basis to believe someone inside needs immediate help, not probable cause.",
    url: "https://supreme.justia.com/cases/federal/us/593/20-157/"
  },
  "Bivens v. Six Unknown Named Agents (1971)": {
    name: "Bivens v. Six Unknown Named Agents of Federal Bureau of Narcotics",
    year: 1971,
    citation: "403 U.S. 388",
    amendment: "4th",
    summary: "Federal narcotics agents entered Webster Bivens's Brooklyn apartment without a warrant, handcuffed him in front of his wife and children, threatened to arrest the whole family, and searched the apartment from top to bottom. Bivens sued the agents for money damages, claiming they violated his 4th Amendment rights. No federal law expressly allowed people to sue federal officers for such violations, unlike the law that allows suits against state and local officials.",
    outcome: "In a 6-3 decision, the Court held that a person whose 4th Amendment rights are violated by federal agents may sue those agents for damages directly under the Constitution.",
    significance: "Created what lawyers call a 'Bivens claim,' the main way to seek damages from individual federal officers for constitutional violations. The Court later recognized such claims in only two other situations and has since refused to extend them to new contexts, most notably in Egbert v. Boule (2022). Goldey v. Fields (2025) continued that pattern, holding that Bivens does not extend to 8th Amendment excessive-force claims against federal prison officials.",
    url: "https://supreme.justia.com/cases/federal/us/403/388/"
  },
  "Egbert v. Boule (2022)": {
    name: "Egbert v. Boule",
    year: 2022,
    citation: "596 U.S. 482",
    amendment: "4th",
    summary: "Robert Boule ran a bed-and-breakfast in Blaine, Washington, right on the Canadian border. When Border Patrol Agent Erik Egbert came onto the property to question an arriving guest, Boule asked him to leave. Boule alleged that the agent threw him to the ground and later retaliated against him for complaining by reporting him to the IRS and other agencies. He sued under Bivens for excessive force and for First Amendment retaliation.",
    outcome: "The Court held that neither claim could go forward. The vote was 6-3 on the excessive force claim, and all nine justices agreed on the retaliation claim. The majority said courts should not create a damages remedy if there is any reason to think Congress is better suited to decide, especially in matters of border security.",
    significance: "It is now extremely difficult to sue federal officers, including immigration and border agents, for money damages over constitutional violations. People who are harmed may be limited to agency complaint processes or claims under federal statutes such as the Federal Tort Claims Act, which have their own limits. Goldey v. Fields (2025) applied the same approach to federal prisoners, who cannot sue prison staff for money damages for excessive force under the 8th Amendment unless Congress authorizes such suits.",
    url: "https://supreme.justia.com/cases/federal/us/596/21-147/"
  },
  "United States v. Flores-Montano (2004)": {
    name: "United States v. Flores-Montano",
    year: 2004,
    citation: "541 U.S. 149",
    amendment: "4th",
    summary: "Manuel Flores-Montano tried to drive into the United States at the Otay Mesa port of entry in Southern California. A customs inspector had his car's gas tank removed and taken apart and found bricks of marijuana hidden inside. Under Ninth Circuit precedent requiring reasonable suspicion to remove a gas tank at the border, the evidence was suppressed. The question was whether such a search needs any suspicion at all.",
    outcome: "The Court ruled unanimously that the government's power to conduct suspicionless searches at the border includes removing, taking apart, and reassembling a vehicle's fuel tank.",
    significance: "At the border, including airports receiving international flights, officers may search vehicles and belongings without a warrant or any suspicion. The Court left open whether an especially destructive search might require more justification. Highly intrusive searches of a person's body are treated differently and require at least reasonable suspicion.",
    url: "https://supreme.justia.com/cases/federal/us/541/149/"
  },
  "United States v. Cotterman (2013)": {
    name: "United States v. Cotterman",
    year: 2013,
    citation: "709 F.3d 952 (9th Cir.) (en banc)",
    amendment: "4th",
    summary: "Howard Cotterman was driving home from Mexico when a database alert at the Lukeville, Arizona port of entry flagged him because of a 1992 child molestation conviction. Agents looked through his laptops and cameras at the border and found nothing illegal, but they saw password-protected files. They kept the laptops and sent them almost 170 miles away for a forensic examination, which uncovered child pornography. The question was whether such an in-depth forensic search of a device at the border requires any suspicion.",
    outcome: "Sitting en banc, the Ninth Circuit held that a quick manual look through a device at the border needs no suspicion, but a comprehensive forensic examination requires reasonable suspicion. Because the agents had reasonable suspicion in this case, the court reversed the order that had suppressed the evidence.",
    significance: "This ruling is binding only in the Ninth Circuit, which covers Alaska, Arizona, California, Hawaii, Idaho, Montana, Nevada, Oregon, Washington, Guam, and the Northern Mariana Islands. Other federal appeals courts have taken different approaches, so the rules for searching phones and laptops at the border vary by region.",
    url: "https://static.case.law/f3d/709/html/0952-01.html"
  },
  "Fields v. City of Philadelphia (2017)": {
    name: "Fields v. City of Philadelphia",
    year: 2017,
    citation: "862 F.3d 353 (3d Cir.)",
    amendment: "1st",
    summary: "In two separate incidents, Philadelphia police interfered with people recording them in public. Amanda Geraci, a legal observer at a 2012 protest, was pinned against a pillar by an officer while trying to record an arrest. Richard Fields, a Temple University student, was arrested in 2013 after photographing officers breaking up a party from a public sidewalk; his phone was searched, and the citation against him was later withdrawn. A federal trial court ruled that their recording was not protected because they did not intend to express a message or criticize police.",
    outcome: "The Third Circuit held that the First Amendment protects photographing, filming, or otherwise recording police officers carrying out their duties in public, subject to reasonable time, place, and manner limits. Because the right had not yet been clearly established in that circuit, the individual officers received qualified immunity, and the claims against the City were sent back for further proceedings.",
    significance: "The right to record police in public is now clearly established in Pennsylvania, New Jersey, Delaware, and the U.S. Virgin Islands, which the Third Circuit covers. You do not need to be making a statement or criticizing officers for your recording to be protected, but you may not physically interfere with police work.",
    url: "https://static.case.law/f3d/862/html/0353-01.html"
  },
  "Parham v. J.R. (1979)": {
    name: "Parham v. J.R.",
    year: 1979,
    citation: "442 U.S. 584",
    amendment: "14th",
    summary: "Georgia law allowed parents, or the state when a child was in its custody, to admit a minor to a state mental hospital if hospital staff agreed the child needed treatment. J.R., a child in state custody, and J.L., who was admitted by his mother at age 6, brought a class action. They argued that due process required a formal hearing, like a court proceeding, before a child could be committed.",
    outcome: "The Court held that a formal adversarial hearing is not required. Due process is satisfied if a neutral factfinder, who can be a staff physician, independently reviews whether the child meets the standards for admission, and the need for continued hospitalization is reviewed periodically.",
    significance: "Recognized that parents have broad authority to make medical decisions for their children and are presumed to act in their children's best interests. At the same time, children have their own liberty interest, so a parent's request alone is not enough: an independent professional must agree that hospitalization is needed.",
    url: "https://supreme.justia.com/cases/federal/us/442/584/"
  },
  "Schmerber v. California (1966)": {
    name: "Schmerber v. California",
    year: 1966,
    citation: "384 U.S. 757",
    amendment: "4th",
    summary: "Armando Schmerber was taken to a hospital after a car crash, and police arrested him there for drunk driving. At an officer's direction and over Schmerber's objection, a doctor drew a sample of his blood, which showed he was intoxicated. The test result was used to convict him. He argued that the blood draw violated his rights against unreasonable searches and against self-incrimination.",
    outcome: "In a 5-4 decision, the Court upheld the conviction. The privilege against self-incrimination covers only testimonial or communicative evidence, not physical evidence like blood. The warrantless blood draw was reasonable because the officer faced an emergency in which the alcohol in the blood was disappearing, and the test was performed by a doctor in a hospital.",
    significance: "Established that drawing blood is a search governed by the 4th Amendment, but that the 5th Amendment does not protect physical evidence such as blood samples or fingerprints. Later, Missouri v. McNeely (2013) made clear that the natural fading of alcohol does not automatically excuse the warrant requirement in every drunk driving case.",
    url: "https://supreme.justia.com/cases/federal/us/384/757/"
  },

  // ============================================================
  // EQUAL PROTECTION, SPEECH, RELIGION, TRIALS & PUNISHMENT
  // ============================================================

  "Plessy v. Ferguson (1896)": {
    name: "Plessy v. Ferguson",
    year: 1896,
    citation: "163 U.S. 537",
    amendment: "14th",
    summary: "In 1892, Homer Plessy, a man of mixed race, sat in a whites-only railroad car in New Orleans and was arrested under Louisiana's Separate Car Act, which required railroads to provide 'equal but separate' cars for white and Black passengers. His arrest was a planned test case organized by a New Orleans civil rights group. Plessy argued that the law violated the 13th and 14th Amendments. The question was whether a state could require the races to be separated in public accommodations.",
    outcome: "The Court ruled 7-1 that state-mandated segregation did not violate the Equal Protection Clause as long as the separate facilities were equal. Justice John Marshall Harlan dissented alone, writing: 'Our Constitution is color-blind, and neither knows nor tolerates classes among citizens.'",
    significance: "Gave constitutional approval to the 'separate but equal' doctrine and to decades of Jim Crow segregation laws in schools, transportation, and public places. In practice, facilities for Black Americans were rarely equal. Brown v. Board of Education (1954) rejected the doctrine in public education, and Harlan's lone dissent is now among the most quoted in the Court's history.",
    url: "https://supreme.justia.com/cases/federal/us/163/537/"
  },
  "Reynolds v. Sims (1964)": {
    name: "Reynolds v. Sims",
    year: 1964,
    citation: "377 U.S. 533",
    amendment: "14th",
    summary: "Alabama had not redrawn its state legislative districts since 1901, even though its population had grown and shifted heavily toward cities. As a result, some rural districts with small populations had the same number of legislators as urban districts with many times more people. Voters from Jefferson County, home to Birmingham, sued, arguing that their votes counted for far less than the votes of rural residents. The question was whether the Equal Protection Clause requires state legislative districts to have roughly equal populations.",
    outcome: "The Court ruled 8-1 that the seats in both houses of a state legislature must be apportioned by population, so that each district contains roughly the same number of people. Chief Justice Earl Warren wrote: 'Legislators represent people, not trees or acres.'",
    significance: "Established the principle of 'one person, one vote' for state legislatures, a few months after Wesberry v. Sanders (1964) applied it to congressional districts. Most states had to redraw their maps, shifting political power toward growing cities and suburbs. States must still redraw their districts after every census to keep populations balanced.",
    url: "https://supreme.justia.com/cases/federal/us/377/533/"
  },
  "Students for Fair Admissions v. Harvard (2023)": {
    name: "Students for Fair Admissions v. Harvard",
    year: 2023,
    citation: "600 U.S. 181",
    amendment: "14th",
    summary: "Students for Fair Admissions, a nonprofit membership group, sued Harvard College and the University of North Carolina, arguing that their admissions programs, which considered an applicant's race as one factor among many, discriminated against Asian American applicants, among others. UNC is a public university bound by the Equal Protection Clause, and Harvard is a private college bound by Title VI of the Civil Rights Act, which bars race discrimination by schools that receive federal funds. The Court decided the two cases together. The question was whether colleges may continue to consider race in admissions, as earlier decisions such as Grutter v. Bollinger (2003) had allowed.",
    outcome: "The Court ruled 6-3 in the UNC case and 6-2 in the Harvard case (Justice Jackson did not take part) that both admissions programs were unlawful. Chief Justice Roberts wrote that the programs lacked measurable goals, used race as a negative and as a stereotype, and had no logical end point. Applicants may still write about how race has affected their lives, as long as the school evaluates them on their experiences as individuals.",
    significance: "The decision effectively ended race-conscious admissions at colleges and universities across the country. The Court noted that it was not deciding how the ruling applies to the military academies. Supporters argue the ruling requires schools to treat every applicant as an individual without regard to race. Critics argue it will reduce racial diversity on campuses and overlooks the lasting effects of discrimination.",
    url: "https://supreme.justia.com/cases/federal/us/600/20-1199/"
  },
  "Roe v. Wade (1973)": {
    name: "Roe v. Wade",
    year: 1973,
    citation: "410 U.S. 113",
    amendment: "14th",
    summary: "Norma McCorvey, using the pseudonym 'Jane Roe,' challenged a Texas law that made it a crime to perform an abortion except to save the mother's life. Henry Wade was the Dallas County district attorney responsible for enforcing the law. The question was whether the Constitution protects a woman's decision to end a pregnancy.",
    outcome: "The Court ruled 7-2 that the right of privacy, rooted in the 14th Amendment's protection of personal liberty, covers the decision whether to have an abortion. It set up a trimester framework: in the first trimester the decision was left to the woman and her doctor, in the second the state could regulate to protect the woman's health, and after viability the state could ban abortion except when needed to preserve the woman's life or health.",
    significance: "Roe made abortion legal nationwide and became one of the most debated decisions in American history. Planned Parenthood v. Casey (1992) replaced the trimester framework with an 'undue burden' standard but kept Roe's core holding. In Dobbs v. Jackson Women's Health Organization (2022), the Court overruled both Roe and Casey and returned the authority to regulate abortion to the states.",
    url: "https://supreme.justia.com/cases/federal/us/410/113/"
  },
  "Dobbs v. Jackson Women's Health Organization (2022)": {
    name: "Dobbs v. Jackson Women's Health Organization",
    year: 2022,
    citation: "597 U.S. 215",
    amendment: "14th",
    summary: "In 2018, Mississippi passed a law banning most abortions after 15 weeks of pregnancy, well before the point of fetal viability that Roe v. Wade (1973) and Planned Parenthood v. Casey (1992) had protected. Jackson Women's Health Organization, the state's only licensed abortion clinic, sued Thomas Dobbs, the state health officer. Mississippi asked the Court to uphold the law and to overrule Roe and Casey.",
    outcome: "The Court upheld the Mississippi law 6-3 and, by a 5-4 vote, overruled Roe and Casey. Justice Alito wrote that the Constitution makes no reference to abortion and that a right to abortion is not 'deeply rooted in this Nation's history and tradition.' Chief Justice Roberts agreed that the law should be upheld but would not have overruled Roe.",
    significance: "The authority to regulate abortion returned to the states and their voters, and abortion laws now vary widely, from near-total bans to broad legal protection. Supporters argue the decision returned a contested moral question to the democratic process. Critics argue it took away a constitutional right that people had relied on for nearly 50 years.",
    url: "https://supreme.justia.com/cases/federal/us/597/19-1392/"
  },
  "Korematsu v. United States (1944)": {
    name: "Korematsu v. United States",
    year: 1944,
    citation: "323 U.S. 214",
    amendment: "5th",
    summary: "After the attack on Pearl Harbor, President Franklin Roosevelt signed Executive Order 9066 in 1942, which led to the forced removal and incarceration of about 120,000 people of Japanese ancestry from the West Coast, most of them U.S. citizens. Fred Korematsu, an American citizen born in Oakland, California, refused to leave his home and was convicted of violating a military exclusion order. The question was whether the government could single out people for removal based on their ancestry.",
    outcome: "The Court ruled 6-3 to uphold Korematsu's conviction, accepting the government's claim that military necessity justified the exclusion. Justice Murphy, in dissent, called the order a 'legalization of racism.' In 1983, a federal court vacated Korematsu's conviction after evidence emerged that the government had withheld intelligence reports that undercut its claims.",
    significance: "Korematsu is widely regarded as one of the worst decisions in the Court's history. In 1988, Congress formally apologized and paid $20,000 to each surviving person who had been incarcerated. In Trump v. Hawaii (2018), the Court stated that Korematsu 'was gravely wrong the day it was decided' and 'has no place in law under the Constitution.'",
    url: "https://supreme.justia.com/cases/federal/us/323/214/"
  },
  "Brady v. Maryland (1963)": {
    name: "Brady v. Maryland",
    year: 1963,
    citation: "373 U.S. 83",
    amendment: "14th",
    summary: "John Brady and a companion, Charles Boblit, were charged with a 1958 murder committed during a robbery in Maryland. Brady admitted taking part in the crime but said Boblit did the actual killing. Before trial, Brady's lawyer asked to see Boblit's statements, but prosecutors withheld one in which Boblit confessed to the killing himself. Brady was convicted and sentenced to death, and learned of the statement only afterward.",
    outcome: "The Court held that when the prosecution suppresses evidence favorable to the accused that is material to guilt or punishment, it violates due process, whether the prosecutor acted in good faith or bad faith. Because the withheld confession related to punishment rather than guilt, Brady received a new sentencing hearing, not a new trial.",
    significance: "Created the 'Brady rule,' which requires prosecutors to turn over evidence that could help the defense. Later cases extended it to evidence that undermines the credibility of prosecution witnesses and made clear the duty applies even if the defense does not ask. Withheld evidence remains a recurring issue in appeals and in wrongful-conviction cases.",
    url: "https://supreme.justia.com/cases/federal/us/373/83/"
  },
  "Strickland v. Washington (1984)": {
    name: "Strickland v. Washington",
    year: 1984,
    citation: "466 U.S. 668",
    amendment: "6th",
    summary: "David Washington pleaded guilty to three murders in Florida and was sentenced to death. He later argued that his lawyer had failed him at sentencing by doing little to prepare, such as not seeking character witnesses or requesting a psychiatric examination. The question was what a defendant must show to prove that a lawyer's poor performance violated the 6th Amendment right to the assistance of counsel.",
    outcome: "The Court rejected Washington's claim and set a two-part test. A defendant must show that the lawyer's performance fell below an objective standard of reasonableness, and that there is a reasonable probability the result would have been different without the lawyer's errors.",
    significance: "The Strickland test still governs nearly every claim of ineffective assistance of counsel in American courts. Because judges must strongly presume that a lawyer's choices were reasonable, these claims are difficult to win. The Court later applied the test to plea bargaining, including a lawyer's failure to warn a noncitizen client that a guilty plea could lead to deportation.",
    url: "https://supreme.justia.com/cases/federal/us/466/668/"
  },
  "Ramos v. Louisiana (2020)": {
    name: "Ramos v. Louisiana",
    year: 2020,
    citation: "590 U.S. 83",
    amendment: "6th",
    summary: "Evangelisto Ramos was convicted of second-degree murder in Louisiana and sentenced to life in prison without parole, even though two of the twelve jurors voted to acquit. At the time, Louisiana and Oregon were the only states that allowed people to be convicted of serious crimes by a non-unanimous jury. The question was whether the 6th Amendment's right to a jury trial requires a unanimous verdict in state courts.",
    outcome: "The Court ruled 6-3 that the 6th Amendment requires a unanimous jury to convict a defendant of a serious offense, and that this rule applies to the states through the 14th Amendment. The decision overruled Apodaca v. Oregon (1972), which had allowed non-unanimous verdicts in state courts.",
    significance: "A unanimous jury is now required for a conviction of a serious crime in every state. Justice Gorsuch's opinion noted that Louisiana's rule traced back to the Jim Crow era and was adopted in part to weaken the influence of Black jurors. In Edwards v. Vannoy (2021), the Court held that the rule does not apply retroactively to convictions that were already final.",
    url: "https://supreme.justia.com/cases/federal/us/590/18-5924/"
  },
  "Roper v. Simmons (2005)": {
    name: "Roper v. Simmons",
    year: 2005,
    citation: "543 U.S. 551",
    amendment: "8th",
    summary: "At 17, Christopher Simmons planned and committed a murder in Missouri and was sentenced to death. After the Supreme Court barred the execution of people with intellectual disabilities in 2002, the Missouri Supreme Court set aside his death sentence, reasoning that national standards had also turned against executing juveniles. The question was whether the 8th Amendment's ban on cruel and unusual punishments forbids the death penalty for crimes committed before age 18.",
    outcome: "The Court ruled 5-4 that executing someone for a crime committed before age 18 is unconstitutional. Justice Kennedy pointed to a national consensus against the practice and to differences between juveniles and adults, including immaturity, vulnerability to peer pressure, and a still-developing character.",
    significance: "Roper overruled Stanford v. Kentucky (1989), which had allowed executions for crimes committed at 16 or 17. It also began a line of cases treating juveniles differently at sentencing, including Graham v. Florida (2010), which barred life without parole for juveniles who did not commit homicide.",
    url: "https://supreme.justia.com/cases/federal/us/543/551/"
  },
  "City of Grants Pass v. Johnson (2024)": {
    name: "City of Grants Pass v. Johnson",
    year: 2024,
    citation: "603 U.S. 520",
    amendment: "8th",
    summary: "Grants Pass, Oregon, enforced city ordinances that banned camping on public property, including sleeping outside with blankets or other bedding, and imposed fines and possible jail time for repeat violations. Homeless residents sued, and the lower courts, relying on an earlier Ninth Circuit ruling, held that the 8th Amendment forbids punishing people for sleeping outside when no shelter beds are available. The question was whether enforcing such camping bans is cruel and unusual punishment.",
    outcome: "The Court ruled 6-3 that enforcing generally applicable laws against camping on public property does not violate the 8th Amendment. Justice Gorsuch wrote that the Cruel and Unusual Punishments Clause limits the kinds of punishment the government may impose after a conviction, not what conduct it may make a crime.",
    significance: "Cities and states may enforce public camping bans even when local shelters are full, leaving homelessness policy largely to legislatures and other legal limits. Supporters argue the ruling gives local governments needed tools to manage public spaces. Critics, including the dissent, argue it allows cities to punish people simply for being homeless when they have nowhere else to sleep.",
    url: "https://supreme.justia.com/cases/federal/us/603/23-175/"
  },
  "Schenck v. United States (1919)": {
    name: "Schenck v. United States",
    year: 1919,
    citation: "249 U.S. 47",
    amendment: "1st",
    summary: "During World War I, Charles Schenck, general secretary of the Socialist Party in Philadelphia, mailed thousands of leaflets urging men to resist the military draft, which the leaflets described as a form of involuntary servitude. He was convicted under the Espionage Act of 1917 of conspiring to obstruct military recruitment. The question was whether the First Amendment protected his antiwar leaflets.",
    outcome: "The Court unanimously upheld Schenck's conviction. Justice Oliver Wendell Holmes wrote that the question is whether words create 'a clear and present danger' of bringing about harms that Congress has a right to prevent, and that free speech would not protect a man 'falsely shouting fire in a theatre and causing a panic.'",
    significance: "Introduced the 'clear and present danger' test, an early attempt to define the limits of free speech. The test was later replaced by the more protective standard of Brandenburg v. Ohio (1969), which protects advocacy unless it is directed to inciting imminent lawless action and is likely to produce it. Holmes's 'fire in a theatre' line is still widely quoted, but it is not the legal test today.",
    url: "https://supreme.justia.com/cases/federal/us/249/47/"
  },
  "Gitlow v. New York (1925)": {
    name: "Gitlow v. New York",
    year: 1925,
    citation: "268 U.S. 652",
    amendment: "1st",
    summary: "Benjamin Gitlow, a socialist activist, published and distributed the 'Left Wing Manifesto,' which called for overthrowing the government through mass strikes and revolutionary action. He was convicted under New York's criminal anarchy law, which made it a crime to advocate the violent overthrow of government. Gitlow argued that the law violated his freedom of speech, which he said the 14th Amendment's Due Process Clause protects against state governments.",
    outcome: "The Court ruled 7-2 to uphold Gitlow's conviction, holding that a state may punish speech that advocates overthrowing the government by force. At the same time, the Court assumed that freedom of speech and of the press are among the fundamental liberties protected by the 14th Amendment from interference by the states. Justices Holmes and Brandeis dissented.",
    significance: "Although Gitlow lost, the case began the process of 'incorporation,' through which the Bill of Rights has been applied to state and local governments one right at a time. Today, every freedom in the First Amendment applies to state and local governments. The Court's approval of punishing abstract advocacy was later abandoned in Brandenburg v. Ohio (1969).",
    url: "https://supreme.justia.com/cases/federal/us/268/652/"
  },
  "Citizens United v. FEC (2010)": {
    name: "Citizens United v. FEC",
    year: 2010,
    citation: "558 U.S. 310",
    amendment: "1st",
    summary: "Citizens United, a nonprofit corporation, produced 'Hillary: The Movie,' a documentary critical of then-Senator Hillary Clinton, and wanted to distribute and advertise it during the 2008 presidential primaries. Federal campaign finance law barred corporations and unions from using their general funds for 'electioneering communications' that mentioned a candidate shortly before an election, or for ads expressly supporting or opposing a candidate. The question was whether these limits on independent political spending violated the First Amendment.",
    outcome: "The Court ruled 5-4 that the government may not ban independent political spending by corporations, and by extension unions, because political speech does not lose First Amendment protection based on the identity of the speaker. The decision overruled Austin v. Michigan Chamber of Commerce (1990) and part of McConnell v. FEC (2003). By an 8-1 vote, the Court upheld rules requiring such ads to disclose who paid for them.",
    significance: "Corporations and unions may spend unlimited amounts on independent ads and other political messages, though they still may not give money directly to federal candidates. A federal appeals court later relied on the decision to allow 'super PACs' that raise and spend unlimited sums. Supporters argue the ruling protects political speech from government restriction. Critics argue it gives wealthy interests outsized influence over elections.",
    url: "https://supreme.justia.com/cases/federal/us/558/310/"
  },
  "Snyder v. Phelps (2011)": {
    name: "Snyder v. Phelps",
    year: 2011,
    citation: "562 U.S. 443",
    amendment: "1st",
    summary: "Members of the Westboro Baptist Church picketed near the 2006 funeral of Marine Lance Corporal Matthew Snyder, who was killed in Iraq, carrying signs with messages such as 'Thank God for Dead Soldiers.' The protesters stood on public land about 1,000 feet from the church and followed police instructions. Snyder's father sued for intentional infliction of emotional distress, and a jury awarded him millions of dollars. The question was whether the First Amendment protects such speech from liability.",
    outcome: "The Court ruled 8-1 that the First Amendment shields the church members from liability, because their speech addressed matters of public concern, took place on public land, and was peaceful. Chief Justice Roberts wrote that speech can 'inflict great pain,' but 'we cannot react to that pain by punishing the speaker.' Justice Alito dissented.",
    significance: "Confirmed that speech on public issues is protected even when it is hurtful and offensive. Governments may still set content-neutral limits on the time, place, and manner of protests near funerals, and many states and Congress have passed such buffer-zone laws.",
    url: "https://supreme.justia.com/cases/federal/us/562/443/"
  },
  "Kennedy v. Bremerton School District (2022)": {
    name: "Kennedy v. Bremerton School District",
    year: 2022,
    citation: "597 U.S. 507",
    amendment: "1st",
    summary: "Joseph Kennedy, an assistant football coach at a public high school in Bremerton, Washington, made a practice of kneeling at midfield after games to pray, and over time some players joined him. The school district, concerned that allowing the prayers would look like the school endorsing religion, told him to stop. When he continued, the district placed him on paid leave, and he did not coach the following season. The question was whether the district violated his rights to free exercise of religion and free speech.",
    outcome: "The Court ruled 6-3 that the district violated the First Amendment. Justice Gorsuch wrote that Kennedy's short, personal prayer was private religious expression, and that the Establishment Clause did not require the district to suppress it. The Court also said it had abandoned the 'Lemon test' and that Establishment Clause cases should be decided by looking to historical practices and understandings.",
    significance: "The decision changed how courts decide Establishment Clause cases, replacing the Lemon test with a focus on history and tradition. Public schools still may not coerce students to pray. Supporters argue the ruling protects the personal religious expression of public employees. Critics, including the dissent, argue it blurs the separation of church and state and overlooks the pressure students may feel to join.",
    url: "https://supreme.justia.com/cases/federal/us/597/21-418/"
  },
  "Employment Division v. Smith (1990)": {
    name: "Employment Division v. Smith",
    year: 1990,
    citation: "494 U.S. 872",
    amendment: "1st",
    summary: "Alfred Smith and Galen Black, members of the Native American Church, were fired from their jobs as drug rehabilitation counselors after using peyote, a hallucinogen, during a religious ceremony. Oregon law made possessing peyote a crime, and the state denied them unemployment benefits because they had been fired for misconduct. They argued that the denial violated their right to the free exercise of religion. The question was whether the state could apply a general drug law to a religious practice.",
    outcome: "By a 6-3 vote, the Court upheld the denial of benefits. Justice Scalia wrote that the Free Exercise Clause does not excuse people from obeying a neutral law that applies to everyone, even if it burdens a religious practice, and that the government does not need a compelling reason to enforce such a law.",
    significance: "The decision led Congress to pass the Religious Freedom Restoration Act of 1993, which requires the government to justify substantial burdens on religion. City of Boerne v. Flores (1997) held that the act cannot be applied to state governments, though it still applies to the federal government. Laws that target religion, as in Church of Lukumi Babalu Aye v. Hialeah (1993), still face strict scrutiny. Mahmoud v. Taylor (2025), relying on Wisconsin v. Yoder (1972), held that a policy that substantially interferes with children's religious development faces strict scrutiny even if it is neutral and generally applicable.",
    url: "https://supreme.justia.com/cases/federal/us/494/872/"
  },
  "Mahanoy Area School District v. B.L. (2021)": {
    name: "Mahanoy Area School District v. B.L.",
    year: 2021,
    citation: "594 U.S. 180",
    amendment: "1st",
    summary: "Brandi Levy, a 14-year-old high school student in Pennsylvania, was upset that she had not made the varsity cheerleading squad. On a Saturday, at a local convenience store, she posted a Snapchat image with profanity criticizing the school, softball, and cheerleading. The school suspended her from the junior varsity squad for a year. The question was whether a public school can discipline students for speech made off campus.",
    outcome: "The Court ruled 8-1 that the suspension violated the First Amendment. Justice Breyer wrote that schools may sometimes regulate off-campus speech, such as serious bullying or threats, but their interest is weaker when students speak outside school, and Levy's post did not cause substantial disruption. Justice Thomas dissented.",
    significance: "The first Supreme Court case to address student speech on social media and outside school. It confirms that students have strong free speech rights off campus, while leaving schools some room to respond to threats, harassment, and other serious disruption.",
    url: "https://supreme.justia.com/cases/federal/us/594/20-255/"
  },
  "Moody v. NetChoice (2024)": {
    name: "Moody v. NetChoice",
    year: 2024,
    citation: "603 U.S. 707",
    amendment: "1st",
    summary: "In 2021, Florida and Texas passed laws restricting how large social media platforms such as Facebook and YouTube moderate content, limiting their ability to remove or demote users' posts and requiring them to explain those decisions. Trade groups representing the platforms challenged both laws under the First Amendment. Federal appeals courts reached opposite conclusions, largely blocking Florida's law but upholding Texas's.",
    outcome: "All nine justices agreed to send both cases back to the lower courts, because neither court had properly analyzed the full range of ways the laws apply. Writing for the majority, Justice Kagan explained that when platforms curate their main feeds by choosing what content to show and how, they engage in expression protected by the First Amendment, and a state may not interfere with those choices simply to change the balance of viewpoints.",
    significance: "Although it did not decide the laws' final fate, the decision signals that content moderation by platforms receives First Amendment protection similar to the editorial choices of newspapers. On remand, the lower courts were directed to examine how the laws apply to different platforms and features.",
    url: "https://supreme.justia.com/cases/federal/us/603/22-277/"
  },
  "Lindke v. Freed (2024)": {
    name: "Lindke v. Freed",
    year: 2024,
    citation: "601 U.S. 187",
    amendment: "1st",
    summary: "James Freed, the city manager of Port Huron, Michigan, used a public Facebook page to post about his family and personal life as well as his job, including the city's response to COVID-19. When resident Kevin Lindke posted critical comments, Freed deleted them and eventually blocked him. Lindke sued, arguing that Freed had violated his First Amendment rights. The question was when a public official's social media activity counts as government action.",
    outcome: "The Court unanimously held that an official's social media posts count as state action only if the official had actual authority to speak for the government on the matter and was using that authority in the specific posts at issue. The Court sent the case back for the lower courts to apply this test.",
    significance: "Set the test for when people can sue officials who block them or delete their comments online. An official who uses an account to conduct government business may be bound by the First Amendment, while purely personal posts are not. The Court noted that clearly labeling an account as personal or official can help show which kind of posts it contains.",
    url: "https://supreme.justia.com/cases/federal/us/601/22-611/"
  },
  "United States v. Rahimi (2024)": {
    name: "United States v. Rahimi",
    year: 2024,
    citation: "602 U.S. 680",
    amendment: "2nd",
    summary: "Zackey Rahimi was placed under a Texas civil restraining order after assaulting his girlfriend, and the court found that he posed a credible threat to her safety. Federal law prohibits people subject to such domestic violence restraining orders from possessing firearms. After police found guns in his home following his involvement in a series of shootings, he was charged under that law. A federal appeals court struck the law down under the history-based test of New York State Rifle & Pistol Assn. v. Bruen (2022).",
    outcome: "The Court ruled 8-1 that the law is constitutional as applied to Rahimi. Chief Justice Roberts wrote that a person found by a court to pose a credible threat to another's physical safety may be temporarily disarmed, and that modern gun laws need not have a 'historical twin' as long as they fit the principles behind the nation's tradition of firearm regulation. Justice Thomas dissented.",
    significance: "Clarified how courts should apply Bruen, emphasizing that the Second Amendment allows more than laws identical to those of the founding era. It confirmed that people found to be dangerous to others can be barred from having guns, while leaving many other challenges to federal gun laws for future cases.",
    url: "https://supreme.justia.com/cases/federal/us/602/22-915/"
  },
  "Rucho v. Common Cause (2019)": {
    name: "Rucho v. Common Cause",
    year: 2019,
    citation: "588 U.S. 684",
    amendment: "Art. III",
    summary: "Voters challenged two congressional maps as unconstitutional partisan gerrymanders: North Carolina's map, drawn by Republican legislators to favor their party, and a Maryland district redrawn by Democrats to favor theirs. Lower federal courts struck down both maps. The question was whether federal courts can decide claims that a districting map unfairly favors one political party.",
    outcome: "The Court ruled 5-4 that partisan gerrymandering claims present political questions beyond the reach of federal courts, because there is no clear, manageable legal standard for deciding how much partisanship is too much. Chief Justice Roberts wrote that the Constitution does not give federal judges authority to reallocate political power between the parties. Justice Kagan dissented.",
    significance: "Federal courts no longer hear challenges to maps drawn for partisan advantage, though claims of racial gerrymandering and unequal district populations remain available. The Court pointed to other remedies, including state courts applying state constitutions, independent redistricting commissions, and Congress. Supporters argue the decision keeps judges out of inherently political disputes. Critics argue it leaves voters without a federal remedy against extreme gerrymanders.",
    url: "https://supreme.justia.com/cases/federal/us/588/18-422/"
  },
  "Allen v. Milligan (2023)": {
    name: "Allen v. Milligan",
    year: 2023,
    citation: "599 U.S. 1",
    amendment: "15th",
    summary: "After the 2020 census, Alabama drew a congressional map with one majority-Black district out of seven, even though more than a quarter of the state's residents are Black. Black voters sued under Section 2 of the Voting Rights Act, which prohibits voting rules that give minority voters less opportunity to elect representatives of their choice. A three-judge federal court found that the map likely violated Section 2 and ordered a new one. Alabama asked the Supreme Court to adopt a new test that would compare its plan to maps drawn without any consideration of race.",
    outcome: "The Court ruled 5-4 that Alabama's map likely violated Section 2, affirming the lower court. Chief Justice Roberts applied the framework the Court had used since Thornburg v. Gingles (1986) and rejected Alabama's proposed test.",
    significance: "The decision reaffirmed that Section 2 of the Voting Rights Act can require states to draw districts that give minority voters a fair opportunity to elect candidates of their choice. After Alabama's next map again included only one majority-Black district, a federal court imposed its own map with a second district in which Black voters have that opportunity. Louisiana v. Callais (2026) later changed how courts apply Section 2 to district maps, holding that it imposes liability only when the evidence supports a strong inference that a state intentionally drew districts to give minority voters less opportunity because of their race.",
    url: "https://supreme.justia.com/cases/federal/us/599/21-1086/"
  },

  // ============================================================
  // CASES CITED ELSEWHERE IN THE APP
  // ============================================================

  "Trump v. Hawaii (2018)": {
    name: "Trump v. Hawaii",
    year: 2018,
    citation: "585 U.S. 667",
    amendment: "1st",
    summary: "In September 2017, President Donald Trump issued Proclamation 9645, the third version of his travel restrictions, which limited entry into the United States by many nationals of eight countries, most of them majority-Muslim. The administration said those countries did not share enough information for travelers to be properly vetted. The State of Hawaii, the Muslim Association of Hawaii, and three people with relatives abroad sued, arguing that the policy exceeded the President's power under immigration law and was driven by hostility toward Muslims, in violation of the Establishment Clause. They pointed to statements the President had made as a candidate and in office.",
    outcome: "The Court ruled 5-4, in an opinion by Chief Justice Roberts, that the challengers were unlikely to succeed, and it reversed the order blocking the policy. The proclamation fell within the broad power immigration law gives the President to suspend the entry of foreign nationals, and under deferential 'rational basis' review it was plausibly related to the government's stated national security goals. Justices Breyer and Sotomayor wrote dissents, each joined by one other justice.",
    significance: "The decision confirmed that courts give presidents wide deference on the entry of foreign nationals, even when challengers point to evidence of an improper motive. Responding to Justice Sotomayor's dissent, which compared the ruling to Korematsu v. United States (1944), the majority stated that Korematsu 'was gravely wrong the day it was decided' and 'has no place in law under the Constitution.' President Biden revoked the proclamation in January 2021.",
    url: "https://supreme.justia.com/cases/federal/us/585/17-965/"
  },
  "Apodaca v. Oregon (1972)": {
    name: "Apodaca v. Oregon",
    year: 1972,
    citation: "406 U.S. 404",
    amendment: "6th",
    summary: "Robert Apodaca and two other men were convicted of serious crimes in separate Oregon trials, by jury votes of 11-1 and 10-2. Oregon law allowed a conviction as long as at least 10 of the 12 jurors agreed, while federal courts had long required unanimous verdicts. The question was whether the 6th Amendment right to a jury trial, which applies to the states through the 14th Amendment, also requires a unanimous verdict in state courts.",
    outcome: "The Court upheld the convictions 5-4. Four justices, in an opinion by Justice White, concluded that the 6th Amendment does not require unanimity at all. Justice Powell cast the deciding vote: he believed the 6th Amendment requires unanimous verdicts in federal trials, but that this part of the right does not apply to the states.",
    significance: "Apodaca allowed Oregon and Louisiana to keep convicting people by non-unanimous juries for nearly 50 years. Louisiana voters ended the practice for future crimes in 2018, and in Ramos v. Louisiana (2020) the Court overruled Apodaca and required unanimous verdicts for serious crimes in every state. In Edwards v. Vannoy (2021), the Court held that Ramos does not apply retroactively to convictions that were already final.",
    url: "https://supreme.justia.com/cases/federal/us/406/404/"
  },
  "Austin v. Michigan Chamber of Commerce (1990)": {
    name: "Austin v. Michigan Chamber of Commerce",
    year: 1990,
    citation: "494 U.S. 652",
    amendment: "1st",
    summary: "Michigan law barred corporations from using money from their general treasuries to support or oppose candidates for state office, although they could spend through a separate political fund paid for by voluntary contributions. In 1985, the Michigan State Chamber of Commerce, a nonprofit corporation whose members were mostly businesses, wanted to use its general funds to buy a newspaper ad supporting a candidate in a special election for the state House of Representatives. It sued, arguing that the ban violated its First Amendment right to free speech.",
    outcome: "The Court upheld the law 6-3, in an opinion by Justice Marshall. It found that the state had a compelling interest in preventing 'the corrosive and distorting effects of immense aggregations of wealth' gathered through the corporate form that have little connection to public support for the corporation's political ideas. Justices Scalia, Kennedy and O'Connor dissented.",
    significance: "Austin accepted a different reason for limiting corporate political spending, focused on the distorting influence of corporate wealth rather than on the exchange of money for political favors. The Court relied on it in McConnell v. FEC (2003), but overruled it in Citizens United v. FEC (2010), holding that the government may not ban independent political spending by corporations.",
    url: "https://supreme.justia.com/cases/federal/us/494/652/"
  },
  "Biden v. Nebraska (2023)": {
    name: "Biden v. Nebraska",
    year: 2023,
    citation: "600 U.S. 477",
    amendment: "Art. I",
    summary: "In 2022, the Secretary of Education announced a plan to cancel up to $10,000 in federal student loan debt for borrowers earning less than $125,000 a year, and up to $20,000 for borrowers who had received Pell Grants, a form of federal aid for students with financial need. The Secretary relied on the HEROES Act of 2003, which allows the Secretary to 'waive or modify' student aid rules in connection with a war or national emergency, in this case the COVID-19 pandemic. Six states sued, arguing that the plan, which would cancel about $430 billion in debt, went far beyond what Congress had authorized.",
    outcome: "The Court ruled 6-3, in an opinion by Chief Justice Roberts, that at least one state, Missouri, had standing to sue because the plan would cost MOHELA, a loan servicer the state created and controls, millions of dollars in fees. On the merits, the Court held that the power to 'waive or modify' allows modest adjustments, not the creation of a new and sweeping loan forgiveness program. Justice Kagan, joined by Justices Sotomayor and Jackson, dissented, arguing that the states lacked standing and that the law's broad language covered the plan.",
    significance: "The ruling blocked the plan before any debt was canceled. The Court also relied on the major questions doctrine, which requires clear authorization from Congress before an agency takes an action of vast economic and political significance. Supporters argue the decision protects Congress's control over major spending decisions. Critics argue the Court overrode a law Congress wrote to give the Secretary flexibility in emergencies.",
    url: "https://supreme.justia.com/cases/federal/us/600/22-506/"
  },
  "Chisholm v. Georgia (1793)": {
    name: "Chisholm v. Georgia",
    year: 1793,
    citation: "2 U.S. 419",
    amendment: "11th",
    summary: "During the Revolutionary War, Georgia bought supplies from Robert Farquhar, a South Carolina merchant, but Farquhar was never paid. After Farquhar died, Alexander Chisholm, the executor of his estate, sued Georgia directly in the Supreme Court to collect the debt. Georgia refused to appear, arguing that as a sovereign state it could not be sued without its consent. The question was whether Article III, which extends federal judicial power to controversies 'between a State and Citizens of another State,' allows a private citizen to sue a state.",
    outcome: "The Court ruled 4-1 for Chisholm. As was the custom at the time, each justice wrote separately. The majority, including Chief Justice John Jay, read Article III to allow such suits, while Justice James Iredell dissented, arguing that no law authorized a private suit against a state.",
    significance: "The decision alarmed many states, which feared lawsuits over their unpaid Revolutionary War debts. Congress proposed the 11th Amendment in 1794, and it was ratified in 1795, barring federal courts from hearing suits against a state by citizens of another state or of a foreign country. Chisholm is one of the few Supreme Court decisions overturned by a constitutional amendment.",
    url: "https://supreme.justia.com/cases/federal/us/2/419/"
  },
  "Edwards v. Vannoy (2021)": {
    name: "Edwards v. Vannoy",
    year: 2021,
    citation: "593 U.S. 255",
    amendment: "6th",
    summary: "In 2007, a Louisiana jury convicted Thedrick Edwards of armed robbery, kidnapping and rape, and he was sentenced to life in prison without parole. Some of the guilty verdicts were 11-1 and others were 10-2, which Louisiana law allowed at the time. After his conviction became final, Edwards challenged it in federal court, and while his case was pending the Court decided Ramos v. Louisiana (2020), which requires unanimous juries in state trials for serious crimes. The question was whether Ramos applies retroactively to convictions that were already final.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Kavanaugh, that the Ramos rule does not apply retroactively on federal collateral review, meaning in federal challenges brought after the normal appeals are over. The Court also declared that no new rule of criminal procedure can qualify for the 'watershed' exception that earlier cases had left open. Justice Kagan, joined by Justices Breyer and Sotomayor, dissented.",
    significance: "People whose convictions by non-unanimous juries became final before Ramos cannot use that decision to win new trials in federal court. States remain free to give relief under their own laws, and Oregon's Supreme Court did so in 2022. The decision also means that future rulings on criminal procedure are very unlikely to reopen old convictions.",
    url: "https://supreme.justia.com/cases/federal/us/593/19-5807/"
  },
  "Ex parte McCardle (1869)": {
    name: "Ex parte McCardle",
    year: 1869,
    citation: "74 U.S. 506",
    amendment: "Art. III",
    summary: "After the Civil War, Congress placed most of the former Confederate states under military rule through the Reconstruction Acts. William McCardle, a Mississippi newspaper editor, was arrested by the Army and held for trial before a military commission for publishing articles attacking Reconstruction. He sought release through habeas corpus under an 1867 law, and when a lower federal court refused, he appealed to the Supreme Court. After the case was argued, Congress repealed the part of the 1867 law that allowed such appeals, overriding President Andrew Johnson's veto. The repeal was widely understood as aimed at this case.",
    outcome: "The Court unanimously dismissed the appeal for lack of jurisdiction, in an opinion by Chief Justice Salmon Chase. Article III gives the Court appellate jurisdiction 'with such Exceptions, and under such Regulations as the Congress shall make,' and the Court said it could not inquire into Congress's motives. The Court noted that other routes to its review, under older laws, remained open.",
    significance: "McCardle is the leading example of Congress's power to limit the Supreme Court's appellate jurisdiction, sometimes called 'jurisdiction stripping.' Later that year, in Ex parte Yerger (1869), the Court confirmed that it could still hear habeas cases through the older route. Scholars still debate how far this power goes, for example whether Congress could close every path to the Court for an entire category of constitutional claims.",
    url: "https://supreme.justia.com/cases/federal/us/74/506/"
  },
  "Grutter v. Bollinger (2003)": {
    name: "Grutter v. Bollinger",
    year: 2003,
    citation: "539 U.S. 306",
    amendment: "14th",
    summary: "Barbara Grutter, a white Michigan resident, applied to the University of Michigan Law School in 1996 with a 3.8 grade point average and an LSAT score of 161, and she was rejected. The law school considered race as one factor among many in an effort to enroll a 'critical mass' of students from underrepresented minority groups. Grutter sued, arguing that the policy discriminated against her because of her race, in violation of the Equal Protection Clause of the 14th Amendment and federal civil rights law.",
    outcome: "The Court upheld the policy 5-4, in an opinion by Justice O'Connor. It held that a university has a compelling interest in the educational benefits of a diverse student body and may consider race as part of a highly individualized review of each applicant, but may not use quotas. O'Connor wrote that the Court expected that '25 years from now, the use of racial preferences will no longer be necessary.' In a companion case, Gratz v. Bollinger (2003), the Court struck down the university's undergraduate admissions system, which automatically awarded points for race.",
    significance: "For two decades, Grutter allowed public and private colleges to consider an applicant's race as one factor among many. In Students for Fair Admissions v. Harvard (2023), the Court held the race-conscious programs at Harvard and the University of North Carolina unlawful. It did not formally overrule Grutter, but the decision effectively ended race-conscious admissions.",
    url: "https://supreme.justia.com/cases/federal/us/539/306/"
  },
  "Jacobson v. Massachusetts (1905)": {
    name: "Jacobson v. Massachusetts",
    year: 1905,
    citation: "197 U.S. 11",
    amendment: "14th",
    summary: "In 1902, during a smallpox outbreak, the board of health of Cambridge, Massachusetts, ordered every resident who had not been vaccinated since 1897 to be vaccinated, as state law allowed. Henning Jacobson refused, saying he had suffered greatly from a vaccination as a child, and he was fined $5. He argued that the compulsory vaccination law violated the personal liberty protected by the 14th Amendment.",
    outcome: "The Court upheld the law 7-2, in an opinion by Justice Harlan. It held that a state's police power includes reasonable regulations to protect public health and safety, and that individual liberty is subject to restraints needed for the common good. The Court added that courts could step in if such a law were applied in an arbitrary or oppressive way, for example to a person whose health would be seriously harmed by vaccination.",
    significance: "Jacobson became the foundation for state public health powers, including school vaccination requirements, and courts relied on it heavily during the COVID-19 pandemic. The penalty it upheld was a fine, not forced vaccination. Supporters see the decision as a sensible balance between individual rights and community safety, while critics argue it gives governments too much deference during emergencies, and some justices have questioned how far it should reach.",
    url: "https://supreme.justia.com/cases/federal/us/197/11/"
  },
  "Kentucky v. Dennison (1861)": {
    name: "Kentucky v. Dennison",
    year: 1861,
    citation: "65 U.S. 66",
    amendment: "Art. IV",
    summary: "In 1859, a Kentucky grand jury indicted Willis Lago, a free Black man, for helping an enslaved woman named Charlotte try to escape. Lago was in Ohio, and Kentucky's governor asked Ohio to return him under the Constitution's Extradition Clause. Ohio's governor, William Dennison, refused, on the ground that helping someone escape slavery was not a crime under Ohio law or the common law. Kentucky asked the Supreme Court to order him to comply.",
    outcome: "In an opinion by Chief Justice Roger Taney, the Court held that the Extradition Clause covers any act that is a crime under the law of the state making the request, so Ohio's governor had a duty to return Lago. But the Court also held that the federal government had no power to force a state governor to carry out that duty, which it described as a moral obligation, and it refused to issue the order.",
    significance: "Decided on the eve of the Civil War, Dennison meant that a governor could refuse an extradition request with no legal consequence, and it remained the law for more than a century. In Puerto Rico v. Branstad (1987), the Court overruled Dennison and held that federal courts can order a governor to return a fugitive.",
    url: "https://supreme.justia.com/cases/federal/us/65/66/"
  },
  "McConnell v. FEC (2003)": {
    name: "McConnell v. FEC",
    year: 2003,
    citation: "540 U.S. 93",
    amendment: "1st",
    summary: "In 2002, Congress passed the Bipartisan Campaign Reform Act, often called McCain-Feingold after its Senate sponsors. The law banned 'soft money,' the large, unregulated donations that national political parties had raised from corporations, unions and wealthy individuals. It also barred corporations and unions from using their general funds to pay for broadcast ads that mentioned a federal candidate within 30 days of a primary or 60 days of a general election. Senator Mitch McConnell and many other plaintiffs challenged the law as a violation of the First Amendment.",
    outcome: "In a 5-4 decision written jointly by Justices Stevens and O'Connor, the Court upheld the soft money ban and the limits on corporate and union election ads. It reasoned that the rules were justified by the government's interest in preventing corruption and the appearance of corruption, and in stopping efforts to get around contribution limits. The Court struck down a few smaller provisions, including a ban on political contributions by minors.",
    significance: "McConnell kept in place the main parts of the most significant campaign finance law in decades. Seven years later, Citizens United v. FEC (2010) overruled the part of McConnell that upheld limits on corporate and union spending for election ads. The ban on soft money donations to political parties remains in effect.",
    url: "https://supreme.justia.com/cases/federal/us/540/93/"
  },
  "National Rifle Association v. Vullo (2024)": {
    name: "National Rifle Association v. Vullo",
    year: 2024,
    citation: "602 U.S. 175",
    amendment: "1st",
    summary: "Maria Vullo, then head of New York's Department of Financial Services, which regulates insurance companies and banks, investigated insurance programs the National Rifle Association offered its members and found that some violated state law. According to the NRA's complaint, in 2018 she told executives at the insurer Lloyd's that her agency would be less interested in pursuing unrelated violations if Lloyd's stopped insuring gun groups, especially the NRA. She also issued guidance urging banks and insurers to weigh the 'reputational risks' of doing business with the NRA and similar groups. The NRA sued, arguing that she used her regulatory power to punish its political advocacy.",
    outcome: "The Court ruled unanimously, in an opinion by Justice Sotomayor, that the NRA had plausibly claimed a First Amendment violation. Officials are free to criticize groups and express their own views, but they 'cannot attempt to coerce private parties in order to punish or suppress views that the government disfavors.' The Court sent the case back to the lower courts, which had dismissed it.",
    significance: "The ruling confirms that officials may not do indirectly, by pressuring the businesses they regulate, what the First Amendment forbids them to do directly. The principle protects speakers of every viewpoint, and the NRA was represented before the Court by the American Civil Liberties Union, which often disagrees with it on policy. The Court decided only that the NRA's claim could go forward, not that Vullo was liable.",
    url: "https://supreme.justia.com/cases/federal/us/602/22-842/"
  },
  "Planned Parenthood v. Casey (1992)": {
    name: "Planned Parenthood v. Casey",
    year: 1992,
    citation: "505 U.S. 833",
    amendment: "14th",
    summary: "Pennsylvania's Abortion Control Act required a woman seeking an abortion to receive certain information and then wait 24 hours, required a minor to get the consent of one parent or a judge's approval, required a married woman to state that she had notified her husband, and imposed reporting rules on clinics. Abortion clinics and doctors sued Robert Casey, the governor. The questions were whether these rules were constitutional and whether the Court should overrule Roe v. Wade (1973).",
    outcome: "By a 5-4 vote, the Court reaffirmed what it called Roe's 'essential holding,' that a woman has a right to choose abortion before fetal viability. A joint opinion by Justices O'Connor, Kennedy and Souter replaced Roe's trimester framework with an 'undue burden' test: a law is invalid if its purpose or effect is to place a substantial obstacle in the path of a woman seeking an abortion before viability. Applying that test, the Court upheld the waiting period, informed consent, parental consent and reporting rules, but struck down the spousal notice requirement.",
    significance: "For 30 years, the undue burden test governed abortion laws, allowing more state regulation than Roe had permitted while protecting the core right. In Dobbs v. Jackson Women's Health Organization (2022), the Court overruled both Casey and Roe and returned the authority to regulate abortion to the states. Casey's defenders praised its respect for precedent, while its critics, including the Dobbs majority, argued that the undue burden standard was unclear and hard to apply.",
    url: "https://supreme.justia.com/cases/federal/us/505/833/"
  },
  "Minneapolis & St. Louis R. Co. v. Bombolis (1916)": {
    name: "Minneapolis & St. Louis Railroad Co. v. Bombolis",
    year: 1916,
    citation: "241 U.S. 211",
    amendment: "7th",
    summary: "Constantine Nanos died while working for the Minneapolis & St. Louis Railroad, and George Bombolis, the administrator of his estate, sued the railroad in a Minnesota state court under the Federal Employers' Liability Act, a federal law covering injuries to railroad workers. Minnesota law allowed a civil jury to return a verdict if five-sixths of the jurors agreed after 12 hours of deliberation. When the trial judge told the jury it could do so, the railroad objected, arguing that because the claim arose under federal law, the 7th Amendment entitled it to a unanimous jury. The jury found for the estate.",
    outcome: "The Court affirmed the judgment for the estate, in an opinion by Chief Justice Edward White. It held that the 7th Amendment applies only to proceedings in federal courts and does not govern civil jury trials in state courts, even when a state court is enforcing a right created by federal law.",
    significance: "Bombolis is still the law. The 7th Amendment is one of the few Bill of Rights guarantees the Supreme Court has never applied to the states, so the right to a jury in a state civil case, and rules such as how many jurors must agree, depend on each state's own constitution and laws.",
    url: "https://supreme.justia.com/cases/federal/us/241/211/"
  },
  "Stanford v. Kentucky (1989)": {
    name: "Stanford v. Kentucky",
    year: 1989,
    citation: "492 U.S. 361",
    amendment: "8th",
    summary: "In 1981, when he was about 17, Kevin Stanford and an accomplice robbed a gas station in Jefferson County, Kentucky, and raped and murdered the 20-year-old attendant, Barbel Poore. He was tried as an adult and sentenced to death. His case was decided together with that of Heath Wilkins, who was about 16 when he committed a murder in Missouri. The question was whether the 8th Amendment's ban on cruel and unusual punishments forbids the death penalty for crimes committed at 16 or 17.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Scalia, that executing people for crimes committed at 16 or 17 does not violate the 8th Amendment. The majority found no national consensus against the practice among the states. Justice Brennan, joined by Justices Marshall, Blackmun and Stevens, dissented.",
    significance: "A year earlier, in Thompson v. Oklahoma (1988), the Court had barred the execution of a person who was 15 at the time of the crime. In Roper v. Simmons (2005), the Court overruled Stanford and held that the death penalty is unconstitutional for any crime committed before age 18. Stanford himself was not executed: Kentucky's governor commuted his sentence to life in prison in 2003.",
    url: "https://supreme.justia.com/cases/federal/us/492/361/"
  },
  "Thornburg v. Gingles (1986)": {
    name: "Thornburg v. Gingles",
    year: 1986,
    citation: "478 U.S. 30",
    amendment: "15th",
    summary: "In 1982, North Carolina redrew its state legislative districts and used several large multimember districts, in which voters choose more than one representative at large. Ralph Gingles and other Black voters sued, arguing that the plan diluted Black voting strength in violation of Section 2 of the Voting Rights Act, which Congress had just amended to prohibit voting practices that have a discriminatory result, even without proof of discriminatory intent. A lower court agreed as to several districts, and Lacy Thornburg, the state's attorney general, appealed.",
    outcome: "In an opinion by Justice Brennan, the Court set out what are now called the 'Gingles preconditions.' Challengers must show that the minority group is large and geographically compact enough to form a majority in a district, that it is politically cohesive, and that the white majority usually votes as a bloc to defeat the minority's preferred candidates. The Court upheld the lower court's findings for most of the challenged districts, but reversed as to one where Black candidates had won consistently.",
    significance: "The Gingles framework remains the starting point for vote dilution claims under Section 2, and it led to many more single-member districts in which minority voters can elect candidates of their choice. In Allen v. Milligan (2023), the Court reaffirmed the framework and applied it to Alabama's congressional map. Louisiana v. Callais (2026) updated the framework, requiring challengers to offer alternative maps drawn without using race that meet the state's legitimate goals and to show racial bloc voting that party preference cannot explain. Supporters say the approach is needed to give minority voters an equal opportunity, while critics argue it encourages drawing districts by race.",
    url: "https://supreme.justia.com/cases/federal/us/478/30/"
  },
  "United States v. Eichman (1990)": {
    name: "United States v. Eichman",
    year: 1990,
    citation: "496 U.S. 310",
    amendment: "1st",
    summary: "After the Court ruled in Texas v. Johnson (1989) that burning the flag in political protest is protected expression, Congress passed the Flag Protection Act of 1989. It made it a crime to knowingly burn, mutilate, trample or otherwise damage any U.S. flag, while allowing the disposal of worn or soiled flags. Protesters burned flags on the steps of the U.S. Capitol and in Seattle, in part to protest the new law, and were prosecuted. Federal district courts dismissed the charges, and the government appealed directly to the Supreme Court.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Brennan, that the law violated the First Amendment. Although the law did not mention any message, the Court found that the government's interest in protecting the flag as a symbol was related to suppressing expression. 'Punishing desecration of the flag dilutes the very freedom that makes this emblem so revered, and worth revering,' Brennan wrote. Justice Stevens, joined by Chief Justice Rehnquist and Justices White and O'Connor, dissented.",
    significance: "Together with Texas v. Johnson (1989), Eichman means that neither the states nor Congress may make it a crime to burn or damage a flag as a form of protest. Since then, a constitutional amendment to allow flag protection laws has passed the House several times but never the Senate, where the closest vote, in 2006, fell one vote short.",
    url: "https://supreme.justia.com/cases/federal/us/496/310/"
  },
  "United States v. Vaello Madero (2022)": {
    name: "United States v. Vaello Madero",
    year: 2022,
    citation: "596 U.S. 159",
    amendment: "Art. IV",
    summary: "José Luis Vaello Madero received Supplemental Security Income (SSI), a federal benefit for low-income people who are elderly, blind or disabled, while he lived in New York. He later moved to Puerto Rico, where residents are not eligible for SSI, but the payments continued. The federal government sued him to recover more than $28,000. He argued that excluding residents of Puerto Rico, who are U.S. citizens, from SSI violated the equal protection guarantee in the 5th Amendment's Due Process Clause.",
    outcome: "The Court ruled 8-1, in an opinion by Justice Kavanaugh, that the Constitution does not require Congress to extend SSI to residents of Puerto Rico. The Territory Clause of Article IV gives Congress broad power to make rules for the territories, and because residents of Puerto Rico are generally exempt from most federal income taxes, Congress has a rational basis for treating them differently in benefit programs. Justice Sotomayor dissented.",
    significance: "Congress may set different rules for the territories in both taxes and benefits, so whether to extend programs like SSI to Puerto Rico is up to Congress, not the courts. Justice Gorsuch wrote separately to urge the Court to overrule the Insular Cases, such as Downes v. Bidwell (1901), which he said 'rest on a rotten foundation.' Justice Sotomayor, in dissent, agreed with that criticism.",
    url: "https://supreme.justia.com/cases/federal/us/596/20-303/"
  },
  "SEC v. Jarkesy (2024)": {
    name: "SEC v. Jarkesy",
    year: 2024,
    citation: "603 U.S. 109",
    amendment: "7th",
    summary: "The Securities and Exchange Commission can enforce the securities laws by suing in federal court, where a jury decides the facts, or by bringing the case before its own in-house administrative judges, with no jury. A 2010 law, the Dodd-Frank Act, expanded the SEC's ability to seek civil penalties in these in-house proceedings. The SEC used one to find that investment adviser George Jarkesy Jr. and his firm, Patriot28, had committed securities fraud, and it imposed a $300,000 civil penalty. Jarkesy argued that he had a 7th Amendment right to a jury trial.",
    outcome: "The Court ruled 6-3, in an opinion by Chief Justice Roberts, that when the SEC seeks civil penalties for securities fraud, the defendant is entitled to a jury trial. The Court reasoned that the fraud claims closely resemble traditional common law fraud suits, and that the 'public rights' exception, which allows some matters to be decided by agencies without a jury, did not apply. Justice Sotomayor, joined by Justices Kagan and Jackson, dissented.",
    significance: "The SEC must now bring fraud cases seeking civil penalties in federal court before a jury, and the ruling may affect other agencies that impose penalties through in-house proceedings. Supporters argue it restores a basic protection against government power. Critics, including the dissent, argue it undermines Congress's ability to assign enforcement to expert agencies.",
    url: "https://supreme.justia.com/cases/federal/us/603/22-859/"
  },
  "Hans v. Louisiana (1890)": {
    name: "Hans v. Louisiana",
    year: 1890,
    citation: "134 U.S. 1",
    amendment: "11th",
    summary: "Bernard Hans, a citizen of Louisiana, held state bonds issued in 1874, which the state constitution had promised to honor. Louisiana's new constitution of 1879 canceled the interest payment due on the bonds in January 1880, and Hans sued the state in federal court, arguing that this impaired a contract in violation of the Constitution's Contract Clause. The 11th Amendment's text bars federal suits against a state by citizens of another state or of a foreign country, but says nothing about suits by a state's own citizens.",
    outcome: "The Court unanimously ruled against Hans, in an opinion by Justice Joseph Bradley. It held that a state cannot be sued in federal court by its own citizens without its consent. The Court reasoned that the 11th Amendment reflects a broader principle of state sovereign immunity that existed before the Constitution, and that Chisholm v. Georgia (1793), the decision the amendment overturned, had been wrong. Justice Harlan agreed with the result but not with the criticism of Chisholm.",
    significance: "Hans is the foundation of modern state sovereign immunity, which reaches well beyond the 11th Amendment's text. The Court built on it in Alden v. Maine (1999), which barred private suits against states in their own courts without consent. Important exceptions remain: under Ex parte Young (1908), people may sue state officials to stop ongoing violations of federal law, and Congress may allow some suits when it enforces the 14th Amendment.",
    url: "https://supreme.justia.com/cases/federal/us/134/1/"
  },
  "Moore v. United States (2024)": {
    name: "Moore v. United States",
    year: 2024,
    citation: "602 U.S. 572",
    amendment: "16th",
    summary: "In 2005, Charles and Kathleen Moore invested in KisanKraft, a company in India that supplies tools to small farmers. The 2017 Tax Cuts and Jobs Act imposed a one-time Mandatory Repatriation Tax on Americans who owned shares of American-controlled foreign corporations, based on earnings those companies had kept rather than paid out. The Moores owed about $15,000, although they had never received any money from the company. They argued that the 16th Amendment allows taxes only on income that a taxpayer has 'realized,' or actually received, so this tax was unconstitutional.",
    outcome: "The Court upheld the tax 7-2, in an opinion by Justice Kavanaugh. It held that Congress may attribute a business's realized but undistributed income to its shareholders or partners and tax them on their shares, as it has long done for partnerships and certain corporations. The Court expressly did not decide whether income must be realized before it can be taxed. Justice Barrett, joined by Justice Alito, agreed with the result for narrower reasons, and Justice Thomas, joined by Justice Gorsuch, dissented.",
    significance: "The decision kept in place the tax, along with many similar parts of the tax code that tax owners on income earned by their businesses. Because the Court left the realization question open, it did not settle whether Congress could tax unrealized gains, such as the rising value of stocks a person still owns, a question at the center of debates over proposed wealth taxes.",
    url: "https://supreme.justia.com/cases/federal/us/602/22-800/"
  },

  // ============================================================
  // RECENT RULINGS (2025-2026): GOVERNMENT STRUCTURE, ELECTIONS & IMMIGRATION
  // ============================================================

  "Trump v. Slaughter (2026)": {
    name: "Trump v. Slaughter",
    year: 2026,
    citation: "609 U.S. 422",
    amendment: "Art. II",
    summary: "The Federal Trade Commission (FTC) is led by five commissioners who serve seven-year terms, and a federal law allows the President to remove them only for 'inefficiency, neglect of duty, or malfeasance in office.' In March 2025, President Trump fired the commission's two Democratic members, Rebecca Slaughter and Alvaro Bedoya, without citing any of those causes, telling them their continued service was inconsistent with his administration's priorities. Slaughter sued to get her job back, and a federal district court ruled for her, relying on Humphrey's Executor v. United States (1935), in which the Court had ruled against President Franklin Roosevelt for firing an FTC commissioner in violation of the same protection. The question was whether that protection is consistent with the executive power that Article II gives the President.",
    outcome: "The Court ruled 6-3, in an opinion by Chief Justice Roberts, that the FTC's for-cause removal protection violates the separation of powers, because the FTC exercises executive power and officers who exercise the President's power must be removable by him at will. The Court said that all that remains of Humphrey's Executor is its observation that an agency exercising no part of the executive power need not be removable at will, and that if anything more is left of that decision, the Court overrules it. Justice Sotomayor, joined by Justices Kagan and Jackson, dissented.",
    significance: "The President may now remove FTC commissioners at will, and the same rule applies to other officials who exercise executive power, including the leaders of similar independent agencies. The Court expressly left open the status of the Federal Reserve, which it addressed the same day in Trump v. Cook (2026), and of judges on non-Article III courts such as the Tax Court. Supporters argue the decision makes officials who enforce federal law accountable to the elected President. Critics, including the dissent, argue it discards more than 90 years of precedent that Congresses and Presidents relied on to keep some government functions at a distance from partisan politics.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us2r62_g314.pdf"
  },
  "Learning Resources v. Trump (2026)": {
    name: "Learning Resources, Inc. v. Trump",
    year: 2026,
    citation: "607 U.S. 229",
    amendment: "Art. I",
    summary: "In 2025, President Trump declared national emergencies over the flow of illegal drugs into the country and over large trade deficits. Relying on the International Emergency Economic Powers Act (IEEPA), a 1977 law that lets the President 'regulate . . . importation' during a declared emergency, he imposed tariffs, including a duty of at least 10% on imports from all trading partners. Small businesses and 12 states sued, arguing that IEEPA, which never mentions tariffs or duties, does not allow them. The question was whether IEEPA gives the President the power to impose tariffs.",
    outcome: "The Court ruled 6-3, in an opinion by Chief Justice Roberts, that IEEPA does not authorize the President to impose tariffs. The Court reasoned that the Constitution gives the power to tax, including tariffs, to Congress, and that the power to 'regulate' importation does not include the power to tax; three justices in the majority also relied on the major questions doctrine, which the other three found unnecessary. Justice Kavanaugh, joined by Justices Thomas and Alito, dissented, and Justice Thomas also wrote a separate dissent.",
    significance: "The President cannot use IEEPA to impose tariffs, a power the Court noted no President had found in the law during its half century of existence. The ruling addressed only IEEPA; the Court observed that when Congress has delegated its tariff power in other laws, it has done so expressly and with strict limits. Supporters argue the decision protects Congress's control over taxes under Article I. Critics, including the dissent, argue that tariffs, like quotas and embargoes, are a traditional and common way to regulate imports.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us2r12_8nj9.pdf"
  },
  "Watson v. Republican National Committee (2026)": {
    name: "Watson v. Republican National Committee",
    year: 2026,
    citation: "609 U.S. 672",
    amendment: "Art. I",
    summary: "Federal law sets a Tuesday in November as the day for electing members of Congress and choosing presidential electors. Mississippi, like roughly 30 states, counts some absentee ballots that are mailed by election day but arrive afterward; its law counts ballots postmarked by election day and received within five business days. The Republican National Committee and others sued, arguing that the federal election-day statutes require ballots to be received by election day, and the Fifth Circuit agreed. The question was whether those statutes override Mississippi's law.",
    outcome: "The Court ruled 5-4, in an opinion by Justice Barrett, that nothing in the federal election-day statutes requires ballots to be received by election day, so Mississippi may count ballots postmarked by election day that arrive within its deadline. The Court reasoned that an 'election' is the voters' choice, which is made when voting is complete, and that a federal law on military and overseas voting assumes that states set their own deadlines for receiving ballots. Justice Alito, joined by Justices Thomas and Gorsuch, and in part by Justice Kavanaugh, dissented.",
    significance: "Under federal law, states may keep counting mailed ballots that arrive after election day, as long as the ballots are cast by election day. The Court did not consider the scope of Congress's power to regulate federal elections. Supporters argue the ruling follows the ordinary meaning of the statutes and leaves receipt deadlines to the states. Critics, including the dissent, argue that counting ballots that arrive late effectively postpones the electorate's choice past the day Congress set.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us2r65_g314.pdf"
  },
  "Mullin v. Al Otro Lado (2026)": {
    name: "Mullin v. Al Otro Lado",
    year: 2026,
    citation: "609 U.S. 258",
    amendment: "Art. I",
    summary: "Starting in 2016, during surges at ports of entry on the U.S.-Mexico border, U.S. Customs and Border Protection used a policy called 'metering': officers on the U.S. side limited how many people could cross each day to be inspected and apply for asylum. The advocacy group Al Otro Lado and asylum seekers sued, arguing that people who reach the border 'arrive in the United States' under the Immigration and Nationality Act and so must be inspected and allowed to apply for asylum. The policy was rescinded in 2021, but the lower courts declared it unlawful, and the Ninth Circuit held that a person standing in Mexico who meets a U.S. official at the border has arrived in the United States. The question was when a person seeking to enter from Mexico 'arrives in the United States.'",
    outcome: "The Court ruled 6-3, in an opinion by Justice Alito, that a person arrives in the United States only when he crosses the border, so the law neither entitles someone standing in Mexico to apply for asylum nor requires officers to inspect him. The Court relied on the ordinary meaning of 'arrives in' and on the presumption that federal laws do not apply outside the country. Justice Sotomayor, joined by Justices Kagan and Jackson, dissented, and Justice Jackson also wrote a separate dissent.",
    significance: "The ruling reverses a judgment that had barred the government from using metering within the Ninth Circuit; the government had told the Court it wants to resume metering when border conditions warrant. The Court noted that metering delays entry but does not permanently bar anyone from arriving and applying for asylum, and the law still allows people who are physically present in the United States to apply.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us1r59_kjfl.pdf"
  },
  "Mullin v. Doe (2026)": {
    name: "Mullin v. Doe",
    year: 2026,
    citation: "609 U.S. 324",
    amendment: "5th",
    summary: "Congress created Temporary Protected Status (TPS) in 1990 to give short-term humanitarian relief to people who cannot safely return to their home countries. Haiti was designated in 2010 after an earthquake and Syria in 2012, and in September and November 2025 the Secretary of Homeland Security announced that Syria's and Haiti's designations would end. TPS holders from both countries sued, arguing among other things that the terminations did not follow required procedures and, in Haiti's case, that the decision was motivated by race in violation of equal protection. Lower courts postponed the terminations while the cases continued, and the question was whether that interim relief was proper.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Alito, that the TPS law bars courts from reviewing non-constitutional challenges to the government's decisions to designate, extend or end a country's TPS. It also held that the Haitian plaintiffs' equal protection claim was unlikely to succeed, because a race-neutral explanation exists: the administration opposes the program as it has been run in the past and has ended every TPS designation that has come up for renewal. Justice Kagan, joined by Justices Sotomayor and Jackson, dissented.",
    significance: "Because the orders postponing the terminations were reversed, the end of TPS for Haiti and Syria could take effect while the lawsuits continue, and courts can no longer hear non-constitutional challenges, such as claims that the government skipped required steps, to these decisions. Supporters argue the ruling respects Congress's choice to keep these decisions out of the courts. Critics, including the dissent, argue the law still allows courts to check whether required procedures were followed, and that the President's statements showed race played a role in the Haiti decision.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us1r60_7mip.pdf"
  },
  "Blanche v. Lau (2026)": {
    name: "Blanche v. Lau",
    year: 2026,
    citation: "609 U.S. 1",
    amendment: "Art. I",
    summary: "Muk Choi Lau, a citizen of China, became a lawful permanent resident of the United States in 2007. In 2012, while facing a New Jersey trademark-counterfeiting charge, he took a trip to China; permanent residents returning from travel abroad are usually treated as already admitted, but the law makes an exception for one who 'has committed' certain offenses, including a crime involving moral turpitude. Because of the pending charge, the border officer paroled Lau into the country instead of treating him as admitted, and after he pleaded guilty in 2013 the government sought to remove him as an inadmissible applicant for admission. The Second Circuit ruled for Lau, holding that the officer needed clear and convincing evidence at the border that Lau had committed the crime.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Thomas, that the immigration law does not require a border officer to have clear and convincing evidence that a permanent resident committed such a crime before treating him as an applicant for admission. The law requires only that the resident have committed the crime before returning, and Lau's later guilty plea showed that he had. Justice Jackson, joined by Justices Sotomayor and Kagan, dissented.",
    significance: "A permanent resident returning from abroad can be treated as seeking admission if he committed a listed crime before returning, even if he has not yet been convicted; to remove him as inadmissible, the government must later show a conviction or an admission of the crime. The Court did not decide whether Lau's offense was a crime involving moral turpitude and sent the case back to the Second Circuit.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us1r53_i4dk.pdf"
  },
  "Pung v. Isabella County (2026)": {
    name: "Pung v. Isabella County",
    year: 2026,
    citation: "609 U.S. 30",
    amendment: "5th",
    summary: "The Pung family owed $2,241.93 in property taxes, so Isabella County, Michigan, foreclosed on their home, which was assessed at $194,400 for tax purposes, and sold it at public auction for $76,008. In Tyler v. Hennepin County (2023), the Court had held that the Takings Clause of the 5th Amendment requires the government to return the surplus from a tax sale, meaning the difference between the sale price and the tax debt. Michael Pung, acting for the homeowner's estate, argued that the county owed the home's fair market value instead, and that keeping the difference was also an excessive fine under the 8th Amendment. The question was how 'just compensation' is measured after a tax sale.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Alito, that just compensation after a fairly conducted tax sale is measured by the auction price, not the property's hypothetical fair market value, so the owner is owed the surplus proceeds. It also held that the county did not violate the Excessive Fines Clause. The Court sent the case back so the lower court could consider Pung's claims that the sale procedure was unfair, if he had properly raised them there.",
    significance: "Governments that sell property for unpaid taxes must return the surplus from the sale but do not have to make up the difference between the sale price and market value, at least when the sale is fairly conducted in light of the country's history of tax sales. The Court reasoned that a fair-market-value rule would often turn tax sales into a money-losing tool and could end a centuries-old practice. The Court did not define what makes a tax sale fair, leaving that question open.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us1r54_d18e.pdf"
  },
  "Ellingburg v. United States (2026)": {
    name: "Ellingburg v. United States",
    year: 2026,
    citation: "607 U.S. 163",
    amendment: "Art. I",
    summary: "The Mandatory Victims Restitution Act of 1996 (MVRA) requires people convicted of certain federal crimes to pay restitution to their victims. Holsey Ellingburg Jr. committed his crime before the law took effect but was sentenced later in 1996 and ordered to pay $7,567.25 in restitution, which he had not finished paying. He argued that his continued restitution obligation violated the Ex Post Facto Clause of Article I, which bars laws that retroactively impose or increase criminal punishment. The Eighth Circuit ruled that MVRA restitution is not criminal punishment, so the clause did not apply.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Kavanaugh, that restitution under the MVRA is criminal punishment for purposes of the Ex Post Facto Clause. The Court pointed to the law's text and structure: it calls restitution a 'penalty' for an 'offense,' imposes it at sentencing after a criminal conviction, and places it in the federal criminal code. Because the federal government agreed with Ellingburg on this point, the Court appointed an outside lawyer to defend the lower court's ruling.",
    significance: "Because MVRA restitution counts as criminal punishment, challenges like Ellingburg's can be judged under the Ex Post Facto Clause. The Court decided only that threshold question and sent the case back, where the lower court may consider the government's separate arguments for upholding the restitution order. The Court added that its ruling does not mean a restitution law can never be civil.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us1r09_4fb4.pdf"
  },
  "Galette v. New Jersey Transit Corp. (2026)": {
    name: "Galette v. New Jersey Transit Corp.",
    year: 2026,
    citation: "607 U.S. 509",
    amendment: "11th",
    summary: "New Jersey created the New Jersey Transit Corporation (NJ Transit) in 1979 as a 'body corporate and politic' with the power to sue and be sued, and state law says its debts are not debts of the state. After NJ Transit buses injured Jeffrey Colt in Manhattan and Cedric Galette in Philadelphia, each sued NJ Transit for negligence in the courts of his home state. NJ Transit argued that it is an arm of New Jersey and shares the state's sovereign immunity from suits in other states' courts. New York's highest court rejected that argument, while the Pennsylvania Supreme Court accepted it.",
    outcome: "The Court ruled 9-0, in an opinion by Justice Sotomayor, that NJ Transit is not an arm of New Jersey and so does not share the state's interstate sovereign immunity. The Court said the main questions are whether the state structured the entity as legally separate, as with a corporation that can sue and be sued, and whether the state is formally liable for its judgments; the state's control over the entity carries less weight.",
    significance: "The two injured men's lawsuits can move forward, and the ruling sets a test for when state-created entities share a state's immunity. A corporation that is legally separate and responsible for its own judgments generally will not be treated as part of the state, even if the state controls or funds it. States remain free to change their laws if they want such entities to be part of the state and to take on their liabilities.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us2r18_d18f.pdf"
  },
  "Bost v. Illinois State Board of Elections (2026)": {
    name: "Bost v. Illinois State Board of Elections",
    year: 2026,
    citation: "607 U.S. 71",
    amendment: "Art. III",
    summary: "Illinois counts mail-in ballots that are postmarked or certified by election day and received within two weeks afterward. Congressman Michael Bost and two other candidates sued, arguing that counting ballots received after election day violates the federal laws that set the date of federal elections. The Seventh Circuit held that they lacked standing, the Article III requirement that a plaintiff have a personal stake in the case. The question was whether a candidate can challenge the rules for counting votes in his own election without showing that those rules are likely to cost him the election or otherwise harm his campaign.",
    outcome: "The Court ruled 7-2 that Bost has standing. Writing for five justices, Chief Justice Roberts held that candidates have a concrete and particularized interest in the rules that govern the counting of votes in their elections, whether or not those rules hurt their chances or raise their costs. Justice Barrett, joined by Justice Kagan, agreed with the result but reasoned that Bost had standing because the rule cost him money, and Justice Jackson, joined by Justice Sotomayor, dissented.",
    significance: "Candidates can challenge vote-counting rules without proving the rules will change the outcome; the Court reasoned that a stricter test would push election disputes to the eve of the election or after the votes are counted. The decision addressed only standing, not whether Illinois's deadline is lawful. The Court took up that kind of question later in the term in Watson v. Republican National Committee (2026), holding that the federal election-day statutes do not require ballots to be received by election day.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us1r05_e2q3.pdf"
  },
  "Trump v. Cook (2026)": {
    name: "Trump v. Cook",
    year: 2026,
    citation: "609 U.S. 528",
    amendment: "Art. II",
    summary: "Members of the Federal Reserve's Board of Governors serve 14-year terms and, under federal law, may be removed only 'for cause.' In August 2025, after a federal housing official publicly accused Governor Lisa Cook of mortgage fraud, President Trump sent her a letter firing her for cause, saying he had 'reason to believe' she 'may have made false statements' on mortgage agreements. Cook sued, arguing that the firing was not for cause and that she had been denied the process required before removal, and a district court issued a preliminary injunction to prevent her removal while the case proceeds. The government asked the Supreme Court to put that order on hold.",
    outcome: "In an interim ruling on its emergency docket, after hearing oral argument, the Court denied the government's request 5-4, in an opinion by Chief Justice Roberts. The Court held that the government was unlikely to win on appeal because the statute entitled Cook to notice and some opportunity to respond before removal, and it said that 'cause' sets a substantial threshold that reflects the Federal Reserve's tradition of independence. Justice Thomas, Justice Alito (joined by Justice Gorsuch) and Justice Barrett each dissented.",
    significance: "This is not a final ruling: Cook remains in office while the litigation continues, and the Court said a final decision on her removal may be made only after she has had a chance to respond to the charges. The Court also stated that the Federal Reserve governors' protection from removal is consistent with the Constitution because the Fed follows the tradition of the First and Second Banks of the United States, setting it apart from the FTC in Trump v. Slaughter (2026), decided the same day. Justices Alito and Barrett argued in dissent that the Court decided difficult questions too early on an interim application, including a constitutional question the government had expressly not raised, while Justice Thomas argued that apparent mortgage fraud was cause for removal.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us2r63_e2pg.pdf"
  },
  "Landor v. Louisiana Department of Corrections (2026)": {
    name: "Landor v. Louisiana Department of Corrections and Public Safety",
    year: 2026,
    citation: "609 U.S. 59",
    amendment: "Art. I",
    summary: "Damon Landor, a Rastafarian whose faith requires him to leave his hair uncut, says that Louisiana prison officers shaved his head in 2020, even after he showed them a court decision holding that the Religious Land Use and Institutionalized Persons Act (RLUIPA) generally bars prisons from cutting Rastafarians' hair. RLUIPA, passed under Congress's spending power, attaches conditions to federal funds that state prison systems accept, including protections for prisoners' religious exercise. Landor sued the officers in their personal capacities for money damages. The question was whether RLUIPA allows such suits against individual state employees who never agreed to its conditions themselves.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Gorsuch, that individuals cannot be held personally liable under a law passed under the Spending Clause unless they voluntarily and knowingly agreed to answer such suits. Because the officers never made any such agreement with the federal government, Landor's case against them could not proceed. Justice Jackson, joined by Justices Sotomayor and Kagan, dissented.",
    significance: "Prisoners cannot sue individual state prison employees for damages in their personal capacities under RLUIPA, although prison systems that accept federal funds remain bound by its conditions. The Court did not decide whether RLUIPA ever allows money damages. Supporters argue the ruling keeps Congress within the limits of its spending power. Critics, including the dissent, argue it separates prisoners' religious rights from any remedy against the officials who violate them.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us1r55_h315.pdf"
  },

  // ============================================================
  // RECENT RULINGS (2025)
  // ============================================================

  "Trump v. CASA (2025)": {
    name: "Trump v. CASA",
    year: 2025,
    citation: "606 U.S. 831",
    amendment: "Art. III",
    summary: "In January 2025, President Trump issued Executive Order No. 14160, which said that some children born in the United States, depending on their parents' immigration status, would not be recognized as citizens. Individuals, organizations and states filed three lawsuits claiming the order violates the 14th Amendment's Citizenship Clause and federal law, and in each case a federal district court issued a 'universal injunction' barring officials from applying the order to anyone, not just the plaintiffs. The government asked the Supreme Court to narrow those injunctions. It did not ask the Court to decide whether the order itself is lawful, only whether federal courts have the power to issue universal injunctions.",
    outcome: "Ruling 6-3 on the government's emergency applications, in an opinion by Justice Barrett, the Court partially stayed the injunctions, holding that universal injunctions likely exceed the equitable power Congress gave federal courts in the Judiciary Act of 1789. Relief may go no further than necessary to give complete relief to each plaintiff with standing to sue. The Court did not decide whether the executive order is constitutional.",
    significance: "The ruling sharply limits 'universal' or 'nationwide' injunctions, which single district judges had used to block federal policies for everyone. Relief for large groups is still possible through class actions that meet the requirements of Federal Rule of Civil Procedure 23, as the majority and Justice Kavanaugh's concurrence noted. The Court later ruled on the order itself in Trump v. Barbara (2026), holding that children born in the United States to parents unlawfully or temporarily present are citizens at birth.",
    url: "https://www.supremecourt.gov/opinions/24pdf/606us2r66_j426.pdf"
  },
  "Mahmoud v. Taylor (2025)": {
    name: "Mahmoud v. Taylor",
    year: 2025,
    citation: "606 U.S. 522",
    amendment: "1st",
    summary: "During the 2022-2023 school year, the Montgomery County Board of Education in Maryland added several 'LGBTQ+-inclusive' storybooks to its curriculum for kindergarten through fifth grade. The board at first notified parents and let them have their children excused from those lessons, but less than a year later it ended the opt-outs and the advance notice. Parents from several religious backgrounds sued, arguing that the policy burdened their free exercise of religion by interfering with the religious upbringing of their children.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Alito, that the parents are entitled to a preliminary injunction. Relying on Wisconsin v. Yoder (1972), it held that the books, combined with the denial of notice and opt-outs, substantially interfere with the children's religious development. A burden of that kind triggers strict scrutiny even when a policy is neutral and generally applicable, an exception to the usual rule of Employment Division v. Smith (1990), and the board's policy failed that test.",
    significance: "While the case continues, the board must notify the parents in advance whenever these or similar books will be used and let them excuse their children. The decision treats Yoder as a broad principle rather than a narrow exception, giving religious parents a basis to seek opt-outs from instruction that conflicts with their faith. Supporters argue it protects parents' right to direct their children's religious upbringing. Critics, including the three dissenting justices, argue it lets parents shield children from ideas that conflict with their beliefs and has no clear limiting principle.",
    url: "https://www.supremecourt.gov/opinions/24pdf/606us2r63_n648.pdf"
  },
  "Free Speech Coalition v. Paxton (2025)": {
    name: "Free Speech Coalition v. Paxton",
    year: 2025,
    citation: "606 U.S. 461",
    amendment: "1st",
    summary: "In 2023, Texas passed H.B. 1181, which requires commercial websites whose content is more than one-third sexual material harmful to minors to verify that visitors are 18 or older, using government-issued ID or commercial transaction data. Knowing violations can lead to injunctions and civil penalties. A pornography industry trade association and others sued the Texas attorney general, arguing that the law burdens adults' First Amendment right to view material that is obscene only for minors. The question was which level of First Amendment review applies.",
    outcome: "The Court upheld the law 6-3, in an opinion by Justice Thomas. Because states may prevent minors from accessing such material, they may require proof of age, so the law only incidentally burdens adults' protected speech; it is subject to intermediate scrutiny, not strict scrutiny, and it passes that test. Justice Kagan, joined by Justices Sotomayor and Jackson, dissented, arguing that strict scrutiny should apply.",
    significance: "States may require age verification for websites with large amounts of sexually explicit content, and the opinion noted that at least 21 other states had passed materially similar laws. Supporters argue the ruling simply applies long-accepted in-person ID checks to the internet. Critics argue that states should have to use the least restrictive means available before burdening adults' access to speech that is protected for them.",
    url: "https://www.supremecourt.gov/opinions/24pdf/606us2r62_986b.pdf"
  },
  "United States v. Skrmetti (2025)": {
    name: "United States v. Skrmetti",
    year: 2025,
    citation: "605 U.S. 495",
    amendment: "14th",
    summary: "In 2023, Tennessee passed a law (SB1) that bars health care providers from giving puberty blockers or hormones to minors to treat gender dysphoria, gender identity disorder or gender incongruence, while still allowing those drugs for other conditions, such as early puberty or a congenital defect. Three transgender minors, their parents and a doctor sued, and the United States joined the case, arguing that the law discriminates based on sex and transgender status in violation of the Equal Protection Clause of the 14th Amendment. The question was whether the law must face heightened scrutiny.",
    outcome: "The Court upheld the law 6-3, in an opinion by Chief Justice Roberts. It held that the law classifies by age and medical use, not by sex or transgender status, so it receives only rational basis review, which it satisfies given the state's findings about risks and medical uncertainty. The Court declined to decide whether the reasoning of Bostock v. Clayton County (2020), a federal employment law case, reaches beyond that context.",
    significance: "Tennessee may enforce its law, and the ruling supports the similar restrictions that a growing number of states have adopted. Supporters argue the decision properly leaves a debated medical question to voters and their elected representatives. Critics, including the three dissenting justices, argue that the law classifies by sex and should have faced heightened scrutiny.",
    url: "https://www.supremecourt.gov/opinions/24pdf/605us2r48_m648.pdf"
  },
  "Barnes v. Felix (2025)": {
    name: "Barnes v. Felix",
    year: 2025,
    citation: "605 U.S. 73",
    amendment: "4th",
    summary: "In 2016, Officer Roberto Felix Jr. pulled over Ashtian Barnes on a highway outside Houston because the car had outstanding toll violations. When Barnes started to drive away, Felix jumped onto the car's doorsill and fired two shots inside, killing him; about two seconds passed between the jump and the first shot. Barnes's mother sued for excessive force under the 4th Amendment, but the lower courts ruled for the officer under the Fifth Circuit's 'moment-of-threat' rule, which looked only at whether he was in danger during those final two seconds.",
    outcome: "The Court unanimously vacated the decision, in an opinion by Justice Kagan. Excessive-force claims are judged on the 'totality of the circumstances,' which has no time limit, so courts must consider events leading up to the use of force and not only the final moment. The Court did not decide whether an officer's own creation of a dangerous situation affects the analysis.",
    significance: "Courts reviewing police shootings and other uses of force must look at the whole encounter, including the reason for the stop and earlier interactions, and the case went back to the lower courts to apply that standard. In a concurrence joined by three other justices, Justice Kavanaugh stressed that a driver fleeing a traffic stop can pose serious dangers that are also part of the circumstances.",
    url: "https://www.supremecourt.gov/opinions/24pdf/605us1r30_h315.pdf"
  },
  "TikTok Inc. v. Garland (2025)": {
    name: "TikTok Inc. v. Garland",
    year: 2025,
    citation: "604 U.S. 56",
    amendment: "1st",
    summary: "In 2024, Congress passed the Protecting Americans from Foreign Adversary Controlled Applications Act with strong bipartisan support. It made it unlawful, starting January 19, 2025, for companies to distribute, maintain or update TikTok in the United States unless a qualifying sale by its parent company, ByteDance, severed the app's U.S. operations from Chinese control. TikTok and a group of U.S. users who create content on the platform argued that the law violated their First Amendment rights.",
    outcome: "In an unsigned (per curiam) opinion issued one week after oral argument, all nine justices agreed that the law is constitutional as applied to TikTok and its users. Assuming the First Amendment applies, the Court held that the law is content neutral and passes intermediate scrutiny because it serves the government's important interest in keeping a foreign adversary from collecting the personal data of about 170 million U.S. users.",
    significance: "The ruling left the law and its January 19, 2025 deadline in place. The Court stressed that its holding was narrow, based on TikTok's scale and susceptibility to foreign control, and that a law targeting any other speaker would require a separate analysis. It decided the case on the public record, without relying on classified evidence the government had filed.",
    url: "https://www.supremecourt.gov/opinions/24pdf/604us1r07_k536.pdf"
  },
  "A.A.R.P. v. Trump (2025)": {
    name: "A.A.R.P. v. Trump",
    year: 2025,
    citation: "605 U.S. 91",
    amendment: "5th",
    summary: "In March 2025, President Trump invoked the Alien Enemies Act of 1798 to detain and remove Venezuelan nationals identified as members of Tren de Aragua, a designated foreign terrorist organization. In Trump v. J. G. G. (April 2025), the Court ruled 5-4 that challenges to removal under the Act must be brought as habeas corpus petitions in the district where a person is held, and all nine justices agreed that detainees must get notice and a real chance to seek habeas relief before removal. Later that month, detainees held in northern Texas said they had been given removal notices and told they would be removed 'tonight or tomorrow.' When the district court did not rule on their emergency request, they asked the Supreme Court for protection.",
    outcome: "In an unsigned (per curiam) opinion, the Court ruled 7-2 that notice roughly 24 hours before removal, without information about how to contest it, 'surely does not pass muster' under the 5th Amendment's guarantee of due process. It barred the government from removing the detainees under the Act while the case continued and sent it back to the Fifth Circuit to decide what notice is required. Justice Alito, joined by Justice Thomas, dissented.",
    significance: "A.A.R.P. and J. G. G. were both interim rulings on the Court's emergency docket, not final decisions on whether removals under the Alien Enemies Act are lawful. Together they confirm that people the government seeks to remove under the Act are entitled to due process, including notice with enough time to contact a lawyer and go to court before removal. The government remained free to remove the detainees under other lawful authorities.",
    url: "https://www.supremecourt.gov/opinions/24pdf/605us1r31_7k47.pdf"
  },
  "Glossip v. Oklahoma (2025)": {
    name: "Glossip v. Oklahoma",
    year: 2025,
    citation: "604 U.S. 226",
    amendment: "14th",
    summary: "Richard Glossip was sentenced to death for the 1997 murder of Barry Van Treese, the owner of the Oklahoma hotel that Glossip managed. The only direct evidence against him came from Justin Sneed, who admitted to the killing and testified that Glossip had directed it, in exchange for avoiding the death penalty. Years later, newly disclosed records showed that Sneed had been diagnosed with bipolar disorder and prescribed lithium by a psychiatrist, contradicting his trial testimony, and Oklahoma's attorney general concluded that the prosecutor knowingly let that false testimony stand. Oklahoma's highest criminal court still denied Glossip relief, even though the attorney general supported a new trial.",
    outcome: "The Court ruled 5-3, in an opinion by Justice Sotomayor, that the prosecution violated the Due Process Clause of the 14th Amendment, as explained in Napue v. Illinois (1959), by failing to correct testimony it knew was false, and that Glossip is entitled to a new trial. Justice Barrett agreed there was a constitutional error but would have sent the case back for further proceedings instead of ordering a new trial. Justices Thomas and Alito dissented, and Justice Gorsuch did not take part.",
    significance: "The ruling requires Glossip's conviction to be set aside and entitles him to a new trial. It reaffirms that prosecutors must correct false testimony from their own witnesses, and that a new trial is required when the false testimony could in any reasonable likelihood have affected the jury's judgment.",
    url: "https://www.supremecourt.gov/opinions/24pdf/604us1r13_c0n2.pdf"
  },
  "Catholic Charities Bureau v. Wisconsin (2025)": {
    name: "Catholic Charities Bureau v. Wisconsin",
    year: 2025,
    citation: "605 U.S. 238",
    amendment: "1st",
    summary: "Wisconsin exempts some religious nonprofits from paying unemployment compensation taxes if they are controlled by a church and 'operated primarily for religious purposes.' Catholic Charities Bureau and four of the entities it operates, all controlled by the Roman Catholic Diocese of Superior, Wisconsin, sought the exemption. The Wisconsin Supreme Court denied it, reasoning that they were not operated primarily for religious purposes because they did not proselytize and did not limit their charitable services to Catholics.",
    outcome: "The Court unanimously reversed, in an opinion by Justice Sotomayor. The First Amendment requires government neutrality among religions, and the state court's reading created a preference based on theological choices, such as whether to proselytize, which triggers strict scrutiny. The law as applied failed that test, in part because the organizations already run their own unemployment benefits system.",
    significance: "Governments may not decide who qualifies for a religious exemption based on how a faith group chooses to carry out its religious work, such as whether it evangelizes or serves only its own members. The ruling reaches beyond Wisconsin, because federal unemployment tax law has a parallel religious-employer exemption and more than 40 states have adopted similar ones.",
    url: "https://www.supremecourt.gov/opinions/24pdf/605us1r37_986b.pdf"
  },
  "Goldey v. Fields (2025)": {
    name: "Goldey v. Fields",
    year: 2025,
    citation: "606 U.S. 942",
    amendment: "8th",
    summary: "Andrew Fields, a prisoner at the federal penitentiary in Lee County, Virginia, alleged that prison officials physically abused him during periodic checks while he was held in solitary confinement. He sued the officials for money damages, claiming excessive force in violation of the 8th Amendment. Congress has not created a damages claim of that kind, so he relied on Bivens v. Six Unknown Named Agents (1971), and a divided Fourth Circuit allowed his claim to go forward.",
    outcome: "In an unsigned (per curiam) opinion with no noted dissents, the Court reversed without hearing oral argument. It held that Bivens does not extend to 8th Amendment excessive-force claims against federal prison officials, because the case presents a new context and special factors counsel against creating a remedy, including Congress's decision not to create one and the other remedies available to federal prisoners.",
    significance: "Federal prisoners cannot sue prison staff for money damages for excessive force directly under the 8th Amendment unless Congress authorizes such suits. The ruling continues a 45-year pattern in which the Court has declined to extend Bivens to new situations, as in Egbert v. Boule (2022).",
    url: "https://www.supremecourt.gov/opinions/24pdf/606us2r67_8nka.pdf"
  },
  "FCC v. Consumers' Research (2025)": {
    name: "FCC v. Consumers' Research",
    year: 2025,
    citation: "606 U.S. 656",
    amendment: "Art. I",
    summary: "A 1996 amendment to the Communications Act requires telecommunications carriers to pay into the Universal Service Fund, which subsidizes communications services for low-income consumers, rural areas, schools, libraries and rural hospitals. The FCC sets the contribution rate each quarter, using projections from a private nonprofit administrator, the Universal Service Administrative Company. Consumers' Research challenged the 25.2% rate set for early 2022, arguing that Congress had unconstitutionally handed its taxing power to the FCC, which in turn relied on a private company. The full Fifth Circuit agreed that the combination violated the Constitution.",
    outcome: "The Court reversed 6-3, in an opinion by Justice Kagan. Congress gave the FCC an 'intelligible principle' by requiring contributions 'sufficient' to fund programs whose beneficiaries and services the statute defines, and the FCC kept final decision-making authority, using the administrator only for non-binding advice. Justice Gorsuch, joined by Justices Thomas and Alito, dissented.",
    significance: "The Universal Service Fund and the programs it pays for continue to operate. The decision reaffirmed the long-standing 'intelligible principle' test for laws that give agencies discretion, and it rejected a stricter rule for laws that raise revenue.",
    url: "https://www.supremecourt.gov/opinions/24pdf/606us2r64_8nj9.pdf"
  },
  "Kennedy v. Braidwood Management (2025)": {
    name: "Kennedy v. Braidwood Management",
    year: 2025,
    citation: "606 U.S. 748",
    amendment: "Art. II",
    summary: "The Affordable Care Act requires most health insurers and group health plans to cover, with no cost sharing, preventive services that receive an 'A' or 'B' rating from the U.S. Preventive Services Task Force, a panel of 16 volunteer experts within the Department of Health and Human Services. Braidwood Management, which provides insurance to about 70 employees through a self-insured plan, and other individuals and small businesses who object to that requirement sued. They argued that Task Force members are principal officers who must be appointed by the President with the Senate's consent under the Appointments Clause of Article II, not by the HHS Secretary.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Kavanaugh, that Task Force members are inferior officers, because the Secretary of Health and Human Services can remove them at will and can review and block their recommendations before they take effect. Congress had validly given the Secretary the power to appoint them. Justice Thomas, joined by Justices Alito and Gorsuch, dissented.",
    significance: "The constitutional challenge to the Task Force failed, so the Affordable Care Act's no-cost coverage requirement for its top-rated recommendations remains in place. The decision also confirms that the HHS Secretary, who answers to the President, can remove Task Force members and block recommendations before they become binding.",
    url: "https://www.supremecourt.gov/opinions/24pdf/606us2r65_3314.pdf"
  },

  // ============================================================
  // RECENT RULINGS (2025-2026): INDIVIDUAL RIGHTS
  // ============================================================

  "Trump v. Barbara (2026)": {
    name: "Trump v. Barbara",
    year: 2026,
    citation: "609 U.S. ___",
    amendment: "14th",
    summary: "On January 20, 2025, President Trump issued Executive Order 14160, which declared that children born in the United States to parents who are here unlawfully or only temporarily are not 'subject to the jurisdiction' of the United States, and so are not citizens at birth under the 14th Amendment or the federal immigration law that uses the same words. Several parents sued, some on behalf of their children. A federal district court in New Hampshire agreed that the order was unlawful, provisionally certified a nationwide class of children who would be denied citizenship, and blocked the order. The Supreme Court took the case before the court of appeals ruled, to decide whether the Constitution guarantees citizenship to these children.",
    outcome: "The Court ruled 6-3 against the order. Chief Justice Roberts, writing for five justices, held that children born in the United States to parents who are unlawfully or temporarily present are 'subject to the jurisdiction' of the United States and are citizens at birth under the Citizenship Clause, as the Court had confirmed in United States v. Wong Kim Ark (1898). Justice Kavanaugh agreed with the result only on the narrower ground that the order violates a federal citizenship statute, and Justices Thomas, Alito and Gorsuch dissented, with Justices Thomas and Gorsuch arguing that the Clause covers only children whose parents have made the United States their permanent home.",
    significance: "Children born on U.S. soil are citizens at birth regardless of their parents' immigration status, subject only to narrow traditional exceptions such as the children of foreign diplomats. Because the majority rested its ruling on the 14th Amendment itself, not just on a statute, the rule cannot be changed by an executive order or an ordinary act of Congress. The decision reaffirmed United States v. Wong Kim Ark (1898) and rejected the view, taken by the dissent in that case, that citizenship depends on whether the parents are domiciled here.",
    url: "https://www.supremecourt.gov/opinions/25pdf/25-365_new_5if6.pdf"
  },
  "Louisiana v. Callais (2026)": {
    name: "Louisiana v. Callais",
    year: 2026,
    citation: "608 U.S. 85",
    amendment: "15th",
    summary: "In 2022, a federal judge ruled that Louisiana's new congressional map likely violated Section 2 of the Voting Rights Act because it did not include a second majority-Black district. Louisiana then drew a new map, known as SB8, with a second district drawn to have a Black voting-age majority. SB8 was then challenged as a racial gerrymander, and a three-judge federal court agreed that it violated the Equal Protection Clause of the 14th Amendment. After hearing the case twice, the Supreme Court took up whether complying with the Voting Rights Act can justify drawing districts based on race.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Alito, that SB8 is an unconstitutional racial gerrymander. It held that complying with Section 2, properly read, can justify the use of race, but that Section 2 imposes liability only when the evidence supports a strong inference that a state intentionally drew districts to give minority voters less opportunity because of their race, and that it did not require Louisiana to create the additional district. Justice Kagan, joined by Justices Sotomayor and Jackson, dissented.",
    significance: "The decision updates the framework from Thornburg v. Gingles (1986) that courts use to judge Section 2 challenges to district maps. People challenging a map must now offer alternative maps drawn without using race that meet all of the state's legitimate goals, including political ones, show racial bloc voting that cannot be explained by party preference, and focus on present-day intentional discrimination. Supporters argue the ruling ends race-based districting the Constitution forbids; critics, including the dissent, argue it allows states to dilute minority voting power without legal consequence.",
    url: "https://www.supremecourt.gov/opinions/25pdf/608us1r29_n648.pdf"
  },
  "Chatrie v. United States (2026)": {
    name: "Chatrie v. United States",
    year: 2026,
    citation: "609 U.S. 605",
    amendment: "4th",
    summary: "After a 2019 credit union robbery in Midlothian, Virginia, police obtained a 'geofence' warrant ordering Google to turn over location data for cell phones within 150 meters of the credit union around the time of the crime. The data came from Google's Location History feature, which recorded a phone's location about every two minutes. Through a multistep process, Google identified three users, including Okello Chatrie, who was charged with the robbery. Chatrie argued that police had searched his data in violation of the 4th Amendment, and the lower courts divided over whether obtaining it was a search at all.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Kagan, that obtaining Chatrie's location data from Google was a 4th Amendment search, because people have a reasonable expectation of privacy in their cell-phone location information, even over a short period. The Court sent the case back for the lower court to decide whether the unusual warrant satisfied the requirements of probable cause and particularity at each step. Justices Alito, Thomas and Barrett dissented.",
    significance: "The ruling extends Carpenter v. United States (2018) to the detailed location history that services like Google's record, so police generally need a valid warrant to obtain it. The Court rejected the argument that people give up this privacy by turning on a location feature or by letting a company store their data. It left open whether geofence warrants, which sweep in data about everyone in an area, can satisfy the 4th Amendment.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us2r64_7mio.pdf"
  },
  "Wolford v. Lopez (2026)": {
    name: "Wolford v. Lopez",
    year: 2026,
    citation: "609 U.S. 185",
    amendment: "2nd",
    summary: "After New York State Rifle & Pistol Assn. v. Bruen (2022) held that the Constitution protects the right to carry a handgun outside the home for self-defense, Hawaii passed new gun laws. One barred people with concealed-carry permits from bringing guns onto private property open to the public, such as stores, restaurants and gas stations, unless the owner gave express permission. Under the traditional rule, people may enter property open to the public unless the owner says otherwise. Three Maui County permit holders and an organization whose members hold permits sued, and the Ninth Circuit reversed an order blocking the law.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Alito, that the law violates the 2nd and 14th Amendments. It found that the law burdens the right to carry in daily life and that Hawaii's historical examples, mostly colonial laws against hunting on other people's land, were not similar enough to justify it. Justice Kagan dissented, as did Justice Jackson, joined by Justice Sotomayor.",
    significance: "A state may not reverse the default rule so that permit holders are barred from businesses open to the public unless the owner gives express permission. Business owners can still choose to exclude people who are carrying guns. The Court also stressed that the 2nd Amendment means the same thing in every state, regardless of local customs or attitudes.",
    url: "https://www.supremecourt.gov/opinions/25pdf/609us1r58_a8cf.pdf"
  },
  "United States v. Hemani (2026)": {
    name: "United States v. Hemani",
    year: 2026,
    citation: "608 U.S. 772",
    amendment: "2nd",
    summary: "Federal law makes it a crime for an 'unlawful user' of a controlled substance to possess a gun. Ali Hemani, a Texas-born dual citizen of the United States and Pakistan, told federal agents during a 2022 search of his family's home that he used marijuana about every other day, and he surrendered a gun he kept in the house. Relying only on that admitted marijuana use, the government charged him under the law. The trial court dismissed the charge as a violation of the 2nd Amendment, and the Fifth Circuit upheld the dismissal.",
    outcome: "The Court unanimously affirmed, in an opinion by Justice Gorsuch, holding that prosecuting Hemani under this law was inconsistent with the 2nd Amendment. The government compared the law to old laws on 'habitual drunkards,' but those laws targeted people so incapacitated they could not manage their own affairs and usually required some legal process first, while the federal law disarms any regular drug user automatically. Justice Alito, joined by Justice Kagan, agreed with the result on narrower grounds.",
    significance: "The government cannot prosecute someone under this law based only on regular marijuana use, as it tried to do with Hemani. The Court called its decision narrow: it did not address bans on gun possession by addicts or by people who are presently intoxicated, laws aimed at particular dangerous drugs, the ban on gun possession by people convicted of felonies, or prosecutions backed by proof that a person's drug use makes him dangerous.",
    url: "https://www.supremecourt.gov/opinions/25pdf/608us2r51_k4lo.pdf"
  },
  "West Virginia v. B.P.J. (2026)": {
    name: "West Virginia v. B.P.J.",
    year: 2026,
    citation: "609 U.S. ___",
    amendment: "14th",
    summary: "West Virginia's 2021 Save Women's Sports Act limits girls' and women's school sports teams to students who are female based on biological sex. B.P.J., a transgender student who identifies as female, wanted to join the girls' cross-country and track teams and sued, arguing that the law violates Title IX, the federal law against sex discrimination in schools, and the Equal Protection Clause. The Court heard the case together with Little v. Hecox, a challenge to a similar Idaho law. In recent years, 27 states have passed laws like these.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Kavanaugh, that Title IX allows schools to provide separate teams defined by biological sex and that the West Virginia and Idaho laws do not violate the Equal Protection Clause. It held that the laws classify by sex, not by transgender status, and are substantially related to the important interests of safety and competitive fairness. Justices Sotomayor, Kagan and Jackson agreed that B.P.J.'s Title IX claim failed but dissented on equal protection, arguing that unresolved factual questions should first have been decided by the trial court.",
    significance: "States and schools may limit girls' and women's teams to students who are biologically female, and they are not required to make individual exceptions for transgender athletes who have taken puberty blockers or hormones. The ruling permits such rules but does not require them. Supporters argue it protects fairness and safety in female sports; critics argue it excludes transgender girls from girls' sports without letting them show that they lack an athletic advantage.",
    url: "https://www.supremecourt.gov/opinions/25pdf/24-43_2b35.pdf"
  },
  "NRSC v. FEC (2026)": {
    name: "National Republican Senatorial Committee v. FEC",
    year: 2026,
    citation: "609 U.S. ___",
    amendment: "1st",
    summary: "Federal campaign finance law limits how much a political party may spend on campaign activities, such as advertising, in coordination with its own candidates. The Supreme Court had upheld these limits in 2001, in a case known as Colorado II. The National Republican Senatorial Committee and other party committees and candidates, including JD Vance when he was a Senate candidate, argued that later decisions had undermined that ruling and that the limits violate the 1st Amendment. A federal appeals court, bound by Colorado II, rejected the challenge.",
    outcome: "The Court ruled 6-3, in an opinion by Justice Kavanaugh, that the limits on parties' coordinated spending violate the 1st Amendment. Applying the more rigorous review its recent cases require, the Court found the limits unnecessary to prevent quid pro quo corruption, because earmarking rules and disclosure laws already keep donors from using parties to get around contribution limits, and it overruled Colorado II to the extent it still had force. Justice Kagan, joined by Justices Sotomayor and Jackson, dissented.",
    significance: "Political parties may now spend without limit on campaign activities coordinated with their candidates. Limits on how much donors may give to candidates and parties, rules against earmarking party donations for a particular candidate, and disclosure requirements remain in place. Supporters argue the ruling frees parties to speak for their candidates as they traditionally have; critics, including the dissent, argue it lets large donors route money to candidates through parties and revives opportunities for corruption.",
    url: "https://www.supremecourt.gov/opinions/25pdf/24-621_h315.pdf"
  },
  "Chiles v. Salazar (2026)": {
    name: "Chiles v. Salazar",
    year: 2026,
    citation: "607 U.S. 627",
    amendment: "1st",
    summary: "A 2019 Colorado law bars licensed counselors from practicing 'conversion therapy' with minors, defined to include any effort to change a person's sexual orientation or gender identity, while allowing counselors to support a minor's identity exploration or gender transition. Kaley Chiles, a licensed counselor who uses only talk therapy, said some young clients come to her seeking to reduce unwanted attractions or to feel in harmony with their bodies, and she sued, arguing that the law violated her free speech rights. The lower courts treated the law as a regulation of professional conduct that only incidentally affected speech, and they refused to block it.",
    outcome: "The Court ruled 8-1, in an opinion by Justice Gorsuch, that as applied to Chiles's talk therapy, the law regulates speech based on viewpoint, because it allows counselors to express one view about sexual orientation and gender identity but not the other. The lower courts erred by not applying sufficiently rigorous 1st Amendment scrutiny, and the case was sent back. Justice Jackson dissented, arguing that states may regulate medical treatment provided by licensed professionals.",
    significance: "Talk therapy is speech, and a state cannot permit one side of the debate over sexual orientation and gender identity while banning the other simply because the speaker is a licensed professional. Justices Kagan and Sotomayor noted that a law limiting a subject without favoring a viewpoint would raise a different question. Supporters argue the ruling protects counselors and clients from a government-imposed orthodoxy; critics argue it limits states' power to protect minors from a practice that many medical professionals consider ineffective and harmful.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us2r24_4315.pdf"
  },
  "First Choice Women's Resource Centers v. Davenport (2026)": {
    name: "First Choice Women's Resource Centers v. Davenport",
    year: 2026,
    citation: "608 U.S. 174",
    amendment: "1st",
    summary: "First Choice Women's Resource Centers is a religious nonprofit that has counseled pregnant women in New Jersey since 1985 and does not provide abortions or refer clients for them. In 2022, New Jersey's Attorney General served it with a subpoena demanding 28 categories of documents, including the names, addresses and employers of donors who gave by any means other than one specific webpage, and warned of contempt penalties for not complying. First Choice sued in federal court, arguing that the demand for donor information violated its 1st Amendment right of association. The lower courts dismissed the case, holding that First Choice had suffered no injury, and so lacked standing, until a state court ordered it to comply.",
    outcome: "The Court unanimously reversed, in an opinion by Justice Gorsuch. It held that a government demand for a group's private donor information injures the group's 1st Amendment associational rights as soon as it is made and for as long as it is outstanding, because it discourages people from supporting the group, so First Choice has standing to sue now.",
    significance: "Groups that receive official demands for their donor lists can challenge them in federal court right away, without waiting for a court to enforce the demand. The Court decided only that First Choice may bring its case; it did not decide whether the subpoena itself is unconstitutional.",
    url: "https://www.supremecourt.gov/opinions/25pdf/608us1r30_3f14.pdf"
  },
  "Case v. Montana (2026)": {
    name: "Case v. Montana",
    year: 2026,
    citation: "607 U.S. 107",
    amendment: "4th",
    summary: "William Case's ex-girlfriend called 911 to report that he was threatening suicide and may have shot himself. Officers who went to his home got no answer, saw an empty holster and what looked like a suicide note, and entered without a warrant to help him. When Case threw open a closet curtain holding what looked like a gun, an officer shot and wounded him, and Case was later convicted of assaulting an officer. He argued that the evidence from the entry should have been suppressed because police need probable cause to believe that someone inside needs emergency aid.",
    outcome: "The Court unanimously affirmed, in an opinion by Justice Kagan. Under Brigham City v. Stuart (2006), police may enter a home without a warrant when they have an 'objectively reasonable basis for believing' that someone inside is seriously injured or imminently threatened with such injury, and that standard, which does not require probable cause, was met here.",
    significance: "Police responding to an emergency, such as a reported suicide attempt, may enter a home without a warrant if the facts give them an objectively reasonable basis to believe someone needs immediate help. The Court declined to add a probable cause requirement, and it also said that Montana's own 'caretaker' test strayed from the rule because it resembled the lower 'reasonable suspicion' standard used for brief street stops.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us1r06_19m1.pdf"
  },
  "District of Columbia v. R.W. (2026)": {
    name: "District of Columbia v. R.W.",
    year: 2026,
    citation: "608 U.S. 22",
    amendment: "4th",
    summary: "Around 2 a.m., a Washington, D.C. police officer responded to a dispatch call about a suspicious vehicle. As his marked car pulled into the parking lot, two people ran from the car, leaving a door open, and the driver, R.W., began backing out with the rear door still open. The officer drew his weapon and ordered R.W. to put his hands up, and evidence found afterward led to juvenile charges including unauthorized use of a vehicle. The D.C. Court of Appeals ruled that the evidence should have been suppressed, finding no reasonable suspicion after it set aside the dispatch call and the companions' flight.",
    outcome: "In an unsigned (per curiam) opinion issued without oral argument, the Court reversed, holding that the officer clearly had reasonable suspicion. Courts must weigh the totality of the circumstances together rather than discarding facts one at a time, and the companions' unprovoked flight combined with R.W.'s own conduct strongly suggested wrongdoing. Justice Jackson dissented, and Justice Sotomayor would have declined to hear the case.",
    significance: "Under Terry v. Ohio (1968), police may briefly stop a person based on reasonable suspicion, and this ruling confirms that courts must judge that suspicion by looking at all the facts together. Unprovoked flight from police, which the Court called suggestive of wrongdoing in Illinois v. Wardlow (2000), can count toward suspicion of a companion who stays behind, and reasonable suspicion does not have to rule out an innocent explanation.",
    url: "https://www.supremecourt.gov/opinions/25pdf/608us1r26_ppl4.pdf"
  },
  "Zorn v. Linton (2026)": {
    name: "Zorn v. Linton",
    year: 2026,
    citation: "607 U.S. 568",
    amendment: "4th",
    summary: "On the day of the Vermont governor's inauguration in 2015, protesters held a sit-in at the state capitol and refused to leave when it closed. When Shela Linton would not stand, Sergeant Jacob Zorn put her arm behind her back in a 'rear wristlock,' a pain-compliance hold, warned that he would use more force if she did not get up, and lifted her to her feet. Linton sued him for excessive force, citing arm injuries and psychological harm. The Second Circuit held that Zorn was not entitled to qualified immunity, relying on an earlier circuit decision involving force used against protesters.",
    outcome: "In an unsigned (per curiam) opinion issued without oral argument, the Court reversed 6-3 and held that Zorn was entitled to qualified immunity. No earlier case had held that an officer violated the Constitution by using a routine wristlock on a protester after a verbal warning, so the law was not clearly established. Justice Sotomayor, joined by Justices Kagan and Jackson, dissented.",
    significance: "Qualified immunity, which traces to Harlow v. Fitzgerald (1982), shields officers from personal liability unless an earlier case with similar facts made clear that their specific conduct was unlawful. The ruling shows that general principles, such as a ban on 'gratuitous' force against passive protesters, are usually not enough to overcome that defense. The dissent argued that the Court was effectively demanding a factually identical case, which its precedents do not require.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us2r21_2bo2.pdf"
  },
  "Olivier v. City of Brandon (2026)": {
    name: "Olivier v. City of Brandon",
    year: 2026,
    citation: "607 U.S. 552",
    amendment: "1st",
    summary: "Gabriel Olivier, a street preacher, shared his faith on sidewalks near an amphitheater in Brandon, Mississippi. A 2019 city ordinance required anyone holding a 'protest' or 'demonstration' near the amphitheater around event times to stay in a designated protest area, and in 2021 Olivier was arrested and, after pleading no contest, convicted under it. He then sued in federal court, asking only for a declaration that the ordinance violates the 1st Amendment and an order barring its future enforcement. The lower courts dismissed the suit under Heck v. Humphrey (1994), which limits civil rights lawsuits that challenge the validity of a prior conviction.",
    outcome: "The Court unanimously ruled, in an opinion by Justice Kagan, that Olivier's suit may proceed. Heck does not bar a lawsuit that seeks only to stop future enforcement of a law, even if the plaintiff was previously convicted of violating it.",
    significance: "People convicted of breaking a law can still go to federal court to challenge the law's constitutionality going forward, instead of having to choose between violating it again and giving up activity they believe is protected. The Court did not decide whether Brandon's ordinance violates the 1st Amendment.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us2r20_h315.pdf"
  },
  "Pitts v. Mississippi (2025)": {
    name: "Pitts v. Mississippi",
    year: 2025,
    citation: "607 U.S. 1",
    amendment: "6th",
    summary: "Jeffrey Pitts was tried in Mississippi for sexually abusing his daughter, who was four years old at the time of trial. Relying on a state law that gives child witnesses a right to testify behind a screen blocking their view of the defendant, the trial judge allowed a screen without hearing evidence that one was needed in this case. Pitts was convicted, and the Mississippi Supreme Court upheld the conviction, ruling that the mandatory state law provided enough authority for the screen.",
    outcome: "In an unsigned (per curiam) opinion issued without oral argument, and with no noted dissent, the Court reversed. A defendant's 6th Amendment right to meet his accusers face to face may be limited only after a court hears evidence and makes a case-specific finding that it is necessary, and a state law requiring screens is not enough. On remand, the state may still argue that the error was harmless.",
    significance: "Courts may use screens or similar measures to protect child witnesses from trauma, but only after deciding in each case that the measure is necessary. The ruling follows the Court's earlier decisions in Coy v. Iowa (1988) and Maryland v. Craig (1990), and a conviction can still stand if the state shows beyond a reasonable doubt that the error did not contribute to the verdict.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us1r01_kjfm.pdf"
  },
  "Villarreal v. Texas (2026)": {
    name: "Villarreal v. Texas",
    year: 2026,
    citation: "607 U.S. 465",
    amendment: "6th",
    summary: "David Villarreal testified at his own murder trial in Texas, and his testimony was interrupted by a 24-hour overnight recess. The judge told his lawyers not to 'manage his testimony' during the break, but made clear that they could still talk with him about other matters, such as possible sentencing issues. Villarreal was convicted and argued that the order violated his 6th Amendment right to the assistance of counsel.",
    outcome: "The Court unanimously affirmed, in an opinion by Justice Jackson. A judge may bar a testifying defendant's lawyers from discussing the testimony itself during an overnight recess, as long as the defendant can still consult them about protected topics such as trial strategy and whether to consider a guilty plea. Justice Thomas, joined by Justice Gorsuch, agreed with the result for different reasons.",
    significance: "Defendants who take the stand keep their right to consult their lawyers during overnight breaks, but courts may prevent lawyers from rehearsing or shaping the ongoing testimony. A judge still cannot cut off all communication overnight or forbid advice about a guilty plea, even when that advice takes into account how the testimony is going.",
    url: "https://www.supremecourt.gov/opinions/25pdf/607us2r16_869c.pdf"
  }
};
