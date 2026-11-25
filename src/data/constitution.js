export const constitution = {
  title: "The Constitution of the United States",
  date: "Signed September 17, 1787. Ratified June 21, 1788.",
  summary: "The operating manual for the American government. It creates the three branches (Congress, President, Courts), defines what each can and cannot do, and sets the rules for how states relate to each other and how the document itself can be changed.",
  preamble: {
    id: "preamble",
    title: "Preamble",
    original: "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.",
    translation: "We, the American people, are creating this government to: hold the country together, establish justice, keep the peace, defend the nation, promote the well-being of citizens, and protect freedom for ourselves and future generations.",
    rights: "The government exists to serve these six purposes. Any action that undermines justice, peace, defense, welfare, or liberty is contrary to the government's stated mission.",
    examples: [
      "'We the People' was challenged from the start. At Virginia's ratifying convention in 1788, Patrick Henry asked what right the delegates had to speak for 'We, the people' instead of 'We, the States.'",
      "In 1787, the people who could vote were mostly white men, and many states also required them to own property. Enslaved people, women, and most Native Americans were left out, and it took later amendments and laws to widen who takes part.",
      "Courts treat the Preamble as a statement of purpose, not a source of power. Jacobson v. Massachusetts (1905) said it has never been regarded as the source of any substantive power of the government, so a lawsuit cannot rest on the Preamble alone."
    ],
    references: [
      { text: "An August 1787 draft began 'We the people of the States of New Hampshire, Massachusetts...' and named all thirteen states. The final wording, prepared by the Committee of Style, says 'We the People of the United States,' partly because no one knew which states would ratify.", source: "Records of the Federal Convention of 1787" }
    ]
  },
  articles: [
    {
      number: 1,
      title: "The Legislature (Congress)",
      summary: "Creates Congress (Senate + House), defines who can serve and how they are elected, sets out how a bill becomes law, lists what laws Congress can make, and spells out what Congress and the states are forbidden from doing.",
      sections: [
        {
          id: "a1s1",
          title: "Section 1: Legislative Power",
          original: "All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.",
          translation: "Only Congress can make federal laws. Congress has two chambers: the Senate and the House of Representatives.",
          rights: "Only your elected representatives in Congress can make federal law. Agencies may write regulations only within the authority Congress gives them, and an executive order cannot take the place of a law. When either goes beyond that authority, courts can strike it down.",
          examples: [
            "Congress often passes broad laws and leaves the details to federal agencies. The Supreme Court has struck down a law for handing away too much lawmaking power (the 'nondelegation doctrine') only twice, both in 1935. In FCC v. Consumers' Research (2025), it reaffirmed 6-3 that such a delegation is valid when Congress gives the agency an 'intelligible principle' to follow.",
            "Biden v. Nebraska (2023) struck down a plan to cancel roughly $400 billion in student loan debt, holding 6-3 that the law the administration relied on did not clearly authorize it.",
            "Executive orders can direct how agencies carry out existing law, but they cannot create new law. Courts strike them down when they go beyond what Congress authorized, as in Youngstown Sheet & Tube Co. v. Sawyer (1952)."
          ],
          references: [
            { text: "West Virginia v. EPA (2022). When an agency claims power over a question of vast economic and political importance, it needs clear authorization from Congress (the 'major questions doctrine'). Vote: 6-3.", source: "597 U.S. 697" },
            { text: "FCC v. Consumers' Research (2025). Congress may give an agency discretion as long as the law supplies an 'intelligible principle' to guide it. The Court upheld how the FCC sets the contributions telecommunications carriers pay into the Universal Service Fund, and it rejected a stricter rule for laws that raise revenue. Vote: 6-3.", source: "606 U.S. 656" },
            { text: "Loper Bright Enterprises v. Raimondo (2024). Overruled 'Chevron deference.' Courts must now decide for themselves what an unclear law means instead of deferring to an agency's reasonable reading.", source: "144 S. Ct. 2244" }
          ]
        },
        {
          id: "a1s2",
          title: "Section 2: The House of Representatives",
          original: "The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature. No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State in which he shall be chosen. Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, three fifths of all other Persons. The actual Enumeration shall be made within three Years after the first Meeting of the Congress of the United States, and within every subsequent Term of ten Years, in such Manner as they shall by Law direct. The Number of Representatives shall not exceed one for every thirty Thousand, but each State shall have at Least one Representative; and until such enumeration shall be made, the State of New Hampshire shall be entitled to chuse three, Massachusetts eight, Rhode-Island and Providence Plantations one, Connecticut five, New-York six, New Jersey four, Pennsylvania eight, Delaware one, Maryland six, Virginia ten, North Carolina five, South Carolina five, and Georgia three. When vacancies happen in the Representation from any State, the Executive Authority thereof shall issue Writs of Election to fill such Vacancies. The House of Representatives shall chuse their Speaker and other Officers; and shall have the sole Power of Impeachment.",
          note: "Changed by the 14th Amendment, Section 2 (1868): the three-fifths rule was replaced, and House seats are now divided by counting the whole number of persons in each state.",
          translation: "House members serve two-year terms and are elected directly by the people. A member must be at least 25, a citizen for at least 7 years, and, when elected, a resident of the state they represent. House seats are divided among the states by population, counted in a census every ten years, and every state gets at least one seat. When a seat becomes vacant, the governor calls a special election. The House chooses its own Speaker and has the sole power of impeachment (formally charging officials).",
          rights: "The House is the 'people's chamber,' closest to voters with the shortest terms. Bills to raise taxes must start in the House (Article I, Section 7), and by tradition spending bills do too. Only the House can impeach.",
          examples: [
            "Before Wesberry v. Sanders (1964), some states drew congressional districts with very unequal populations. One Georgia district had about three times as many people as another, so each vote in the larger district counted for less.",
            "A 1929 law capped the House at 435 members. As the population grows, each member now represents about 760,000 people on average, compared with the Constitution's original minimum of 30,000 people per representative.",
            "Because House seats follow the census, how people are counted matters. In 2019 the Supreme Court blocked a citizenship question from the 2020 census, finding that the government's stated reason for adding it appeared to be contrived."
          ],
          references: [
            { text: "The original text counted enslaved people as 3/5 of a person for apportionment. This was superseded by the 14th Amendment.", source: "Historical, Art. I, Sec. 2, Cl. 3" },
            { text: "Wesberry v. Sanders (1964). Because House members are chosen 'by the People,' congressional districts within a state must have roughly equal populations ('one person, one vote').", source: "376 U.S. 1" },
            { text: "U.S. Term Limits v. Thornton (1995). States cannot add term limits or other qualifications for members of Congress beyond those the Constitution lists. Vote: 5-4.", source: "514 U.S. 779" }
          ]
        },
        {
          id: "a1s3",
          title: "Section 3: The Senate",
          original: "The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote. Immediately after they shall be assembled in Consequence of the first Election, they shall be divided as equally as may be into three Classes. The Seats of the Senators of the first Class shall be vacated at the Expiration of the second Year, of the second Class at the Expiration of the fourth Year, and of the third Class at the Expiration of the sixth Year, so that one third may be chosen every second Year; and if Vacancies happen by Resignation, or otherwise, during the Recess of the Legislature of any State, the Executive thereof may make temporary Appointments until the next Meeting of the Legislature, which shall then fill such Vacancies. No Person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State for which he shall be chosen. The Vice President of the United States shall be President of the Senate, but shall have no Vote, unless they be equally divided. The Senate shall chuse their other Officers, and also a President pro tempore, in the Absence of the Vice President, or when he shall exercise the Office of President of the United States. The Senate shall have the sole Power to try all Impeachments. When sitting for that Purpose, they shall be on Oath or Affirmation. When the President of the United States is tried, the Chief Justice shall preside: And no Person shall be convicted without the Concurrence of two thirds of the Members present. Judgment in Cases of Impeachment shall not extend further than to removal from Office, and disqualification to hold and enjoy any Office of honor, Trust or Profit under the United States: but the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law.",
          note: "Changed by the 17th Amendment (1913): senators are now elected directly by the voters of each state. Vacancies are filled by special election, and a state legislature may let the governor appoint a temporary senator until then.",
          translation: "Each state has two senators, who serve six-year terms. State legislatures originally chose them; since the 17th Amendment, voters elect them. Terms are staggered so that about one third of the seats are up for election every two years. A senator must be at least 30, a citizen for at least 9 years, and a resident of the state when elected. The Vice President presides over the Senate but votes only to break a tie. The Senate holds impeachment trials. When the President is tried, the Chief Justice presides, and conviction takes a two-thirds vote of the senators present. The penalty is limited to removal from office and a possible ban on future federal office, but the person can still be prosecuted in court.",
          rights: "The Senate gives every state equal voice regardless of population. Wyoming (580k people) has the same Senate power as California (39 million). This was a deliberate compromise to protect smaller states.",
          examples: [
            "Before the 17th Amendment, deadlocked state legislatures could leave Senate seats empty for years. Delaware had no senators at all from 1901 to 1903.",
            "In a closely divided Senate, the Vice President's tie-breaking vote can decide major legislation. Kamala Harris cast 33 tie-breaking votes, the most of any Vice President.",
            "Appointments to fill Senate vacancies can be abused. In 2008, Illinois Governor Rod Blagojevich was arrested for trying to sell the appointment to the seat Barack Obama left after being elected President."
          ],
          references: [
            { text: "Nixon v. United States (1993). Because this section gives the Senate the 'sole Power to try all Impeachments,' courts will not second-guess how the Senate runs an impeachment trial.", source: "506 U.S. 224" }
          ]
        },
        {
          id: "a1s4",
          title: "Section 4: Elections and Meetings of Congress",
          original: "The Times, Places and Manner of holding Elections for Senators and Representatives, shall be prescribed in each State by the Legislature thereof; but the Congress may at any time by Law make or alter such Regulations, except as to the Places of chusing Senators. The Congress shall assemble at least once in every Year, and such Meeting shall be on the first Monday in December, unless they shall by Law appoint a different Day.",
          note: "Changed by the 20th Amendment, Section 2 (1933): Congress now begins its yearly session at noon on January 3, unless it sets a different day by law.",
          translation: "Each state legislature decides the times, places, and manner of holding elections for senators and representatives. Congress can pass laws that change or replace those state rules at any time, except for where senators are chosen. Congress must meet at least once a year, originally starting on the first Monday in December unless it set a different day by law.",
          rights: "This clause splits control of federal elections between the states and Congress. It is why voting rules like registration deadlines and early voting differ from state to state, and why Congress can set national standards, such as a single Election Day.",
          examples: [
            "Congress used this power to set a single national Election Day for congressional races (the Tuesday after the first Monday in November) and, since 1967, to require that states with more than one House seat elect members from single-member districts.",
            "Rucho v. Common Cause (2019) held that federal courts cannot decide claims of partisan gerrymandering, but noted that Congress could address it using its power under this clause.",
            "States have clashed with Congress over voter registration. When Arizona demanded documentary proof of citizenship, the Supreme Court held that the state still had to accept the federal registration form, which requires applicants to swear under penalty of perjury that they are citizens.",
            "Federal law sets a single Election Day, but Watson v. Republican National Committee (2026) held 5-4 that it does not require mailed ballots to arrive by that day, so states may count ballots cast by Election Day that arrive within their own deadlines. The ruling interpreted the federal statutes and did not address the reach of Congress's power under this clause."
          ],
          references: [
            { text: "Moore v. Harper (2023). The Elections Clause does not free state legislatures from ordinary review by state courts. The Court rejected the 'independent state legislature' theory 6-3.", source: "600 U.S. 1" },
            { text: "Arizona v. Inter Tribal Council of Arizona (2013). When Congress sets election rules under this clause, they override conflicting state rules. Arizona had to accept the federal voter registration form.", source: "570 U.S. 1" }
          ]
        },
        {
          id: "a1s5",
          title: "Section 5: Rules and Records of Each House",
          original: "Each House shall be the Judge of the Elections, Returns and Qualifications of its own Members, and a Majority of each shall constitute a Quorum to do Business; but a smaller Number may adjourn from day to day, and may be authorized to compel the Attendance of absent Members, in such Manner, and under such Penalties as each House may provide. Each House may determine the Rules of its Proceedings, punish its Members for disorderly Behaviour, and, with the Concurrence of two thirds, expel a Member. Each House shall keep a Journal of its Proceedings, and from time to time publish the same, excepting such Parts as may in their Judgment require Secrecy; and the Yeas and Nays of the Members of either House on any question shall, at the Desire of one fifth of those Present, be entered on the Journal. Neither House, during the Session of Congress, shall, without the Consent of the other, adjourn for more than three days, nor to any other Place than that in which the two Houses shall be sitting.",
          translation: "Each chamber judges the elections and qualifications of its own members. A majority of members must be present to do business (a quorum), but a smaller group can adjourn day to day and force absent members to attend. Each chamber writes its own rules, can punish members for disorderly behavior, and can expel a member by a two-thirds vote. Each must keep and publish a journal of its proceedings, except parts it decides must stay secret, and must record how each member voted if one fifth of those present ask. During a session, neither chamber can adjourn for more than three days, or meet somewhere else, without the other's consent.",
          rights: "Each chamber largely governs itself: it sets its own rules and disciplines its own members. The journal and recorded-vote rules let you see how your representatives voted, and the high bar for expulsion protects the voters' choice of representative.",
          examples: [
            "The Senate filibuster, which in practice requires 60 votes to end debate on most bills, is not in the Constitution. It exists because each chamber 'may determine the Rules of its Proceedings,' and the Senate can change it by changing its rules.",
            "Expulsion is rare. The House has expelled only six members in its history, most recently George Santos in 2023.",
            "In 1967 the House refused to seat Adam Clayton Powell Jr., who had just been reelected, over misconduct allegations. Powell v. McCormack (1969) held this was unconstitutional because he met the age, citizenship, and residency requirements.",
            "To block recess appointments, the Senate holds brief 'pro forma' sessions every few days during breaks, sometimes lasting less than a minute. NLRB v. Noel Canning (2014) held that these count as real sessions."
          ],
          references: [
            { text: "Powell v. McCormack (1969). The House cannot exclude an elected member who meets the Constitution's age, citizenship, and residency requirements. It may still expel a sitting member by a two-thirds vote.", source: "395 U.S. 486" },
            { text: "NLRB v. Noel Canning (2014). The Senate is in session when it says it is, as long as it can conduct business under its own rules. Appointments made during a short break between pro forma sessions were invalid.", source: "573 U.S. 513" }
          ]
        },
        {
          id: "a1s6",
          title: "Section 6: Pay, Privileges, and Restrictions",
          original: "The Senators and Representatives shall receive a Compensation for their Services, to be ascertained by Law, and paid out of the Treasury of the United States. They shall in all Cases, except Treason, Felony and Breach of the Peace, be privileged from Arrest during their Attendance at the Session of their respective Houses, and in going to and returning from the same; and for any Speech or Debate in either House, they shall not be questioned in any other Place. No Senator or Representative shall, during the Time for which he was elected, be appointed to any civil Office under the Authority of the United States, which shall have been created, or the Emoluments whereof shall have been encreased during such time; and no Person holding any Office under the United States, shall be a Member of either House during his Continuance in Office.",
          translation: "Members of Congress are paid by the federal Treasury in an amount set by law. While attending sessions, or traveling to and from them, they cannot be arrested except for treason, felonies, and breach of the peace. They cannot be sued or prosecuted anywhere else for what they say in congressional debate (the Speech or Debate Clause). A member cannot be appointed to a federal office that was created, or whose pay was increased, during the member's current term. And no one holding a federal office can serve in Congress at the same time. (The 27th Amendment, ratified in 1992, adds that a change in congressional pay cannot take effect until after the next House election.)",
          rights: "The Speech or Debate Clause lets your representatives speak and vote freely without fear that the President or prosecutors will punish them for it. The arrest privilege has been read to cover only civil arrests, so members can still be arrested for crimes. The ban on holding two offices at once keeps the branches separate.",
          examples: [
            "In 1971, Senator Mike Gravel read parts of the classified Pentagon Papers into the record of a Senate subcommittee hearing. Gravel v. United States (1972) held the clause protected that legislative act, but not his later arrangement to have the papers published privately.",
            "In 2006 the FBI searched the Capitol Hill office of Representative William Jefferson during a bribery investigation. A federal appeals court later ruled that the search violated this clause because agents reviewed legislative records, and ordered privileged materials returned.",
            "Because members cannot take an office whose pay rose during their term, Congress has sometimes rolled a Cabinet salary back down (the 'Saxbe fix') so a sitting member could serve. It did so in 2008 so Senator Hillary Clinton could become Secretary of State."
          ],
          references: [
            { text: "Gravel v. United States (1972). The Speech or Debate Clause protects members of Congress and their aides for legislative acts, but not for conduct outside the legislative process, such as arranging private publication of documents.", source: "408 U.S. 606" }
          ]
        },
        {
          id: "a1s7",
          title: "Section 7: How a Bill Becomes Law",
          original: "All Bills for raising Revenue shall originate in the House of Representatives; but the Senate may propose or concur with Amendments as on other Bills. Every Bill which shall have passed the House of Representatives and the Senate, shall, before it become a Law, be presented to the President of the United States; If he approve he shall sign it, but if not he shall return it, with his Objections to that House in which it shall have originated, who shall enter the Objections at large on their Journal, and proceed to reconsider it. If after such Reconsideration two thirds of that House shall agree to pass the Bill, it shall be sent, together with the Objections, to the other House, by which it shall likewise be reconsidered, and if approved by two thirds of that House, it shall become a Law. But in all such Cases the Votes of both Houses shall be determined by yeas and Nays, and the Names of the Persons voting for and against the Bill shall be entered on the Journal of each House respectively. If any Bill shall not be returned by the President within ten Days (Sundays excepted) after it shall have been presented to him, the Same shall be a Law, in like Manner as if he had signed it, unless the Congress by their Adjournment prevent its Return, in which Case it shall not be a Law. Every Order, Resolution, or Vote to which the Concurrence of the Senate and House of Representatives may be necessary (except on a question of Adjournment) shall be presented to the President of the United States; and before the Same shall take Effect, shall be approved by him, or being disapproved by him, shall be repassed by two thirds of the Senate and House of Representatives, according to the Rules and Limitations prescribed in the Case of a Bill.",
          translation: "Bills that raise taxes must start in the House, though the Senate can amend them. Every bill passed by both chambers goes to the President. If the President signs it, it becomes law. If the President vetoes it, it goes back to the chamber where it started, along with the President's objections. Two thirds of both chambers can override the veto, and each member's vote on the override is recorded. If the President does nothing for ten days (not counting Sundays), the bill becomes law without a signature, unless Congress has adjourned and prevented its return, in which case the bill dies (a 'pocket veto'). Orders and resolutions that need both chambers' approval also go to the President, except votes to adjourn.",
          rights: "This is the only way to make a federal law: both chambers must pass the same text, and the President must sign it or be overridden. No single chamber, committee, or President can make or cancel a law alone, and recorded override votes let you see where your representatives stood.",
          examples: [
            "For decades, Congress wrote laws letting one chamber cancel executive decisions by a simple vote (the 'legislative veto'). INS v. Chadha (1983) struck this down because it skipped passage by both chambers and presentment to the President.",
            "The Line Item Veto Act of 1996 let the President cancel individual spending items after signing a bill. Clinton v. City of New York (1998) struck it down 6-3, holding that the President cannot amend or repeal parts of a law alone.",
            "To meet the rule that tax bills start in the House, the Senate sometimes takes an unrelated House bill and replaces its entire text. The Affordable Care Act (2010) passed this way, and a federal appeals court rejected a challenge claiming it violated this Origination Clause."
          ],
          references: [
            { text: "INS v. Chadha (1983). One chamber of Congress cannot overturn an executive decision on its own. Any action with the force of law must pass both chambers and be presented to the President.", source: "462 U.S. 919" },
            { text: "Clinton v. City of New York (1998). The line-item veto is unconstitutional. The President must sign or veto a bill as a whole.", source: "524 U.S. 417" }
          ]
        },
        {
          id: "a1s8",
          title: "Section 8: Powers of Congress",
          original: "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States; but all Duties, Imposts and Excises shall be uniform throughout the United States; To borrow Money on the credit of the United States; To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes; To establish an uniform Rule of Naturalization, and uniform Laws on the subject of Bankruptcies throughout the United States; To coin Money, regulate the Value thereof, and of foreign Coin, and fix the Standard of Weights and Measures; To provide for the Punishment of counterfeiting the Securities and current Coin of the United States; To establish Post Offices and post Roads; To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective Writings and Discoveries; To constitute Tribunals inferior to the supreme Court; To define and punish Piracies and Felonies committed on the high Seas, and Offences against the Law of Nations; To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water; To raise and support Armies, but no Appropriation of Money to that Use shall be for a longer Term than two Years; To provide and maintain a Navy; To make Rules for the Government and Regulation of the land and naval Forces; To provide for calling forth the Militia to execute the Laws of the Union, suppress Insurrections and repel Invasions; To provide for organizing, arming, and disciplining, the Militia, and for governing such Part of them as may be employed in the Service of the United States, reserving to the States respectively, the Appointment of the Officers, and the Authority of training the Militia according to the discipline prescribed by Congress; To exercise exclusive Legislation in all Cases whatsoever, over such District (not exceeding ten Miles square) as may, by Cession of particular States, and the Acceptance of Congress, become the Seat of the Government of the United States, and to exercise like Authority over all Places purchased by the Consent of the Legislature of the State in which the Same shall be, for the Erection of Forts, Magazines, Arsenals, dock-Yards, and other needful Buildings;--And To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof.",
          translation: "Congress can: tax and spend to pay debts and provide for the common defense and general welfare (with federal duties the same everywhere); borrow money; regulate trade with foreign nations, among the states, and with Native American tribes; set uniform rules for becoming a citizen and for bankruptcy; coin money and set standard weights and measures; punish counterfeiting; set up post offices and postal roads; grant copyrights and patents for limited times; create federal courts below the Supreme Court; punish piracy and crimes against international law; declare war; raise and fund an army (with funding limited to two years at a time) and maintain a navy; make rules for the armed forces; call up, organize, and arm state militias; govern the national capital and federal sites such as military bases; and make all laws 'necessary and proper' to carry out these powers.",
          rights: "Only Congress can declare war, but Presidents have often sent troops into combat without a declaration, relying on congressional authorizations or their own power as Commander in Chief. The 'Commerce Clause' and 'Necessary and Proper Clause' have been read broadly to support a large federal government. Supporters say broad readings fit a national economy. Critics say they go far beyond what was originally intended.",
          examples: [
            "The United States last formally declared war in 1942. Since then, wars in Vietnam, the Persian Gulf, Afghanistan, and Iraq were fought under congressional authorizations, and the Korean War was fought without any vote of Congress.",
            "The Commerce Clause has been used to justify everything from civil rights laws to penalizing a farmer for growing more wheat than his quota allowed, even for use on his own farm, as in Wickard v. Filburn (1942).",
            "National Federation of Independent Business v. Sebelius (2012) held that the Affordable Care Act's requirement to buy health insurance was not a valid regulation of commerce, but upheld it 5-4 as a tax under Congress's taxing power.",
            "In 2025, the President declared national emergencies and imposed tariffs on imports from all trading partners under the International Emergency Economic Powers Act (IEEPA), a 1977 law that lets the President 'regulate . . . importation' during an emergency. Learning Resources v. Trump (2026) held 6-3 that the law does not authorize tariffs, because the Constitution gives the power to tax, including tariffs, to Congress. The ruling covered only IEEPA."
          ],
          references: [
            { text: "McCulloch v. Maryland (1819). Congress could create a national bank under the Necessary and Proper Clause even though the Constitution never mentions banks, and states cannot tax federal institutions.", source: "17 U.S. 316" },
            { text: "Gibbons v. Ogden (1824). The power to regulate commerce among the states includes navigation, so a federal license overrode New York's steamboat monopoly.", source: "22 U.S. 1" },
            { text: "Wickard v. Filburn (1942). Wheat grown for use on one's own farm, added up across many farmers, affects interstate commerce, so Congress can regulate it. It remains one of the broadest readings of the Commerce Clause. United States v. Lopez (1995) later set some outer limits on that power.", source: "317 U.S. 111" },
            { text: "War Powers Resolution (1973). Passed over President Nixon's veto, it requires the President to report to Congress when sending troops into hostilities and limits how long they can stay without congressional approval. Presidents have often disputed or worked around it.", source: "50 U.S.C. ch. 33" },
            { text: "Learning Resources v. Trump (2026). The International Emergency Economic Powers Act does not let the President impose tariffs. The Constitution gives the power to tax, including tariffs, to Congress, and the power to 'regulate' importation does not include the power to tax. Vote: 6-3.", source: "607 U.S. 229" }
          ]
        },
        {
          id: "a1s9",
          title: "Section 9: Limits on Congress",
          original: "The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight, but a Tax or duty may be imposed on such Importation, not exceeding ten dollars for each Person. The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it. No Bill of Attainder or ex post facto Law shall be passed. No Capitation, or other direct, Tax shall be laid, unless in Proportion to the Census or enumeration herein before directed to be taken. No Tax or Duty shall be laid on Articles exported from any State. No Preference shall be given by any Regulation of Commerce or Revenue to the Ports of one State over those of another: nor shall Vessels bound to, or from, one State, be obliged to enter, clear, or pay Duties in another. No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law; and a regular Statement and Account of the Receipts and Expenditures of all public Money shall be published from time to time. No Title of Nobility shall be granted by the United States: And no Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince, or foreign State.",
          note: "Changed by the 16th Amendment (1913): Congress may tax incomes without dividing the tax among the states by population.",
          translation: "Congress could not ban the importation of enslaved people before 1808, though it could tax each person brought in up to $10. (Congress banned the trade starting January 1, 1808.) The right of habeas corpus (to have a judge decide whether the government is holding you lawfully) cannot be suspended unless public safety requires it during a rebellion or invasion. Congress cannot pass a bill of attainder (a law that declares a specific person or group guilty and punishes them without a trial) or an ex post facto law (a law that makes past conduct a crime or increases its punishment after the fact). Direct taxes must be divided among the states by population. Congress cannot tax goods exported from any state or favor one state's ports over another's. No money can be spent from the Treasury unless a law provides for it, and the government must publish regular accounts of what it takes in and spends. The United States cannot grant titles of nobility, and federal officials cannot accept gifts, payments, offices, or titles from foreign governments without the consent of Congress.",
          rights: "Habeas corpus lets anyone held by the government ask a judge to decide whether the detention is legal. The bans on bills of attainder and ex post facto laws mean that only courts can find a person guilty, and only under laws that existed when the person acted. The rule on appropriations gives Congress, not the President, control over federal spending.",
          examples: [
            "The Military Commissions Act (2006) took away federal courts' power to hear habeas petitions from detainees held at Guantanamo Bay. In Boumediene v. Bush (2008), the Supreme Court held 5-4 that this was unconstitutional.",
            "The Ex Post Facto Clause covers only criminal punishment. In Smith v. Doe (2003), the Court ruled 6-3 that Alaska could apply its sex offender registration law to people convicted before the law passed, because registration is a civil measure, not a punishment. By contrast, Ellingburg v. United States (2026) held 9-0 that restitution ordered under a 1996 federal law is criminal punishment for this purpose, so the clause can apply to it.",
            "Because no money can be spent without an appropriation, parts of the federal government shut down when Congress and the President fail to agree on funding."
          ],
          references: [
            { text: "Boumediene v. Bush (2008). Detainees held at Guantanamo Bay have a constitutional right to habeas corpus. Unless Congress validly suspends the writ, it cannot take away the courts' power to hear their cases without an adequate substitute. Vote: 5-4.", source: "553 U.S. 723" },
            { text: "Ex parte Merryman (1861). After President Lincoln authorized military officers to suspend habeas corpus early in the Civil War, Chief Justice Taney, acting as a circuit judge, ruled that only Congress could suspend it. The administration did not comply. Congress authorized suspension in 1863.", source: "17 F. Cas. 144" },
            { text: "Ellingburg v. United States (2026). Restitution under the Mandatory Victims Restitution Act of 1996 is criminal punishment for purposes of the Ex Post Facto Clause. The Court decided only that question and sent the case back. Vote: 9-0.", source: "607 U.S. 163" }
          ]
        },
        {
          id: "a1s10",
          title: "Section 10: Limits on States",
          original: "No State shall enter into any Treaty, Alliance, or Confederation; grant Letters of Marque and Reprisal; coin Money; emit Bills of Credit; make any Thing but gold and silver Coin a Tender in Payment of Debts; pass any Bill of Attainder, ex post facto Law, or Law impairing the Obligation of Contracts, or grant any Title of Nobility. No State shall, without the Consent of the Congress, lay any Imposts or Duties on Imports or Exports, except what may be absolutely necessary for executing it's inspection Laws: and the net Produce of all Duties and Imposts, laid by any State on Imports or Exports, shall be for the Use of the Treasury of the United States; and all such Laws shall be subject to the Revision and Controul of the Congress. No State shall, without the Consent of Congress, lay any Duty of Tonnage, keep Troops, or Ships of War in time of Peace, enter into any Agreement or Compact with another State, or with a foreign Power, or engage in War, unless actually invaded, or in such imminent Danger as will not admit of delay.",
          translation: "States cannot make treaties or alliances, authorize private ships to attack enemy shipping (letters of marque), coin money or issue paper money, or make anything but gold and silver coin legal payment for debts. Like Congress, they cannot pass bills of attainder or ex post facto laws or grant titles of nobility, and they cannot pass laws that weaken existing contracts. Without the consent of Congress, states also cannot tax imports or exports beyond what their inspection laws require (and any such taxes go to the U.S. Treasury), tax ships by their size, keep troops or warships in peacetime, make agreements with other states or foreign countries, or go to war unless invaded or in immediate danger.",
          rights: "This keeps states from acting like independent countries or from arbitrarily destroying people's contractual rights.",
          examples: [
            "Agreements between states, such as the 1921 compact that created the Port Authority of New York and New Jersey, need the consent of Congress when they could affect federal power.",
            "During the Great Depression, Minnesota temporarily stopped lenders from foreclosing on homes. Home Building & Loan Assn. v. Blaisdell (1934) upheld the moratorium, and since then courts have rarely used the Contract Clause to strike down state laws.",
            "Some states, such as Utah in 2011, have passed laws treating gold and silver coins as legal tender, relying on this section's mention of 'gold and silver Coin.'"
          ],
          references: [
            { text: "Home Building & Loan Assn. v. Blaisdell (1934). States may temporarily adjust contract obligations during an emergency. The Court upheld Minnesota's Great Depression mortgage moratorium. Vote: 5-4.", source: "290 U.S. 398" }
          ]
        }
      ]
    },
    {
      number: 2,
      title: "The Executive (President)",
      summary: "Creates the presidency, defines presidential powers and duties, and sets the terms for election, removal, and succession.",
      sections: [
        {
          id: "a2s1",
          title: "Section 1: Executive Power and Election",
          original: "The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years, and, together with the Vice President, chosen for the same Term, be elected, as follows\n\nEach State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors, equal to the whole Number of Senators and Representatives to which the State may be entitled in the Congress: but no Senator or Representative, or Person holding an Office of Trust or Profit under the United States, shall be appointed an Elector. The Electors shall meet in their respective States, and vote by Ballot for two Persons, of whom one at least shall not be an Inhabitant of the same State with themselves. And they shall make a List of all the Persons voted for, and of the Number of Votes for each; which List they shall sign and certify, and transmit sealed to the Seat of the Government of the United States, directed to the President of the Senate. The President of the Senate shall, in the Presence of the Senate and House of Representatives, open all the Certificates, and the Votes shall then be counted. The Person having the greatest Number of Votes shall be the President, if such Number be a Majority of the whole Number of Electors appointed; and if there be more than one who have such Majority, and have an equal Number of Votes, then the House of Representatives shall immediately chuse by Ballot one of them for President; and if no Person have a Majority, then from the five highest on the List the said House shall in like Manner chuse the President. But in chusing the President, the Votes shall be taken by States, the Representation from each State having one Vote; A quorum for this Purpose shall consist of a Member or Members from two thirds of the States, and a Majority of all the States shall be necessary to a Choice. In every Case, after the Choice of the President, the Person having the greatest Number of Votes of the Electors shall be the Vice President. But if there should remain two or more who have equal Votes, the Senate shall chuse from them by Ballot the Vice President. The Congress may determine the Time of chusing the Electors, and the Day on which they shall give their Votes; which Day shall be the same throughout the United States. No Person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption of this Constitution, shall be eligible to the Office of President; neither shall any Person be eligible to that Office who shall not have attained to the Age of thirty five Years, and been fourteen Years a Resident within the United States. In Case of the Removal of the President from Office, or of his Death, Resignation, or Inability to discharge the Powers and Duties of the said Office, the Same shall devolve on the Vice President, and the Congress may by Law provide for the Case of Removal, Death, Resignation or Inability, both of the President and Vice President, declaring what Officer shall then act as President, and such Officer shall act accordingly, until the Disability be removed, or a President shall be elected. The President shall, at stated Times, receive for his Services, a Compensation, which shall neither be encreased nor diminished during the Period for which he shall have been elected, and he shall not receive within that Period any other Emolument from the United States, or any of them. Before he enter on the Execution of his Office, he shall take the following Oath or Affirmation:--\"I do solemnly swear (or affirm) that I will faithfully execute the Office of President of the United States, and will to the best of my Ability, preserve, protect and defend the Constitution of the United States.\"",
          note: "Changed by later amendments: the 12th (1804) replaced the original procedure in which each elector cast two votes for President; the 20th (1933) set presidential terms to begin on January 20; and the 25th (1967) governs succession and presidential disability.",
          translation: "The executive power belongs to the President, who serves a four-year term along with a Vice President. Each state appoints electors, in whatever way its legislature chooses, equal to its number of senators and representatives. (Today every state lets its voters choose its electors.) Members of Congress and federal officials cannot be electors. The electors vote in their own states and send the results to Congress, where the votes are counted. (The original method of choosing the winner was replaced by the 12th Amendment.) Congress sets the day electors are chosen and the day they vote, which must be the same nationwide. To be President, a person must be a natural born citizen (or have been a citizen when the Constitution was adopted), at least 35 years old, and a resident of the United States for 14 years. If the President dies, resigns, is removed, or is unable to serve, the Vice President takes over, and Congress decides by law who acts as President if both offices are empty. The President's pay cannot be raised or cut during the term, and the President cannot receive other payments from the federal or state governments. Before taking office, the President must swear (or affirm) to faithfully execute the office and to 'preserve, protect and defend the Constitution.'",
          rights: "The President carries out the laws but does not make them. The Electoral College gives every state a say based on its seats in Congress, and the oath binds the President to the Constitution itself.",
          examples: [
            "Presidents of both parties have used executive orders to make major policy changes without new legislation, which critics call 'legislating by pen.' Courts strike down orders that go beyond the President's legal authority.",
            "Because every state gets two electors for its senators, small states have extra weight. Based on the 2020 census, each Wyoming elector represents about 190,000 people, while each California elector represents about 730,000.",
            "Federal law protects the leaders of some agencies, such as the Federal Trade Commission (FTC) and the Federal Reserve, from being fired except for cause. Trump v. Slaughter (2026) held 6-3 that the President may remove FTC members at will, because officers who exercise executive power must answer to him. The same day, in an interim ruling in Trump v. Cook (2026), the Court let a Federal Reserve governor stay in office while her case continues and said the Fed's protection from removal is consistent with the Constitution."
          ],
          references: [
            { text: "Youngstown Sheet & Tube Co. v. Sawyer (1952). President Truman could not seize the nation's steel mills during the Korean War without authorization from Congress. Vote: 6-3.", source: "343 U.S. 579" },
            { text: "Chiafalo v. Washington (2020). States may require presidential electors to vote for the candidate who won the state's popular vote, and may penalize 'faithless electors' who do not. The decision was unanimous.", source: "591 U.S. 578" },
            { text: "Trump v. Slaughter (2026). Officers who exercise executive power must be removable by the President at will, so Congress could not protect FTC commissioners from being fired except for cause. The Court overruled Humphrey's Executor v. United States (1935) except for its observation that an agency exercising no executive power need not be removable at will, and it left open the status of the Federal Reserve. Vote: 6-3.", source: "609 U.S. 422" }
          ]
        },
        {
          id: "a2s2",
          title: "Section 2: Presidential Powers",
          original: "The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States; he may require the Opinion, in writing, of the principal Officer in each of the executive Departments, upon any Subject relating to the Duties of their respective Offices, and he shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment. He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two thirds of the Senators present concur; and he shall nominate, and by and with the Advice and Consent of the Senate, shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court, and all other Officers of the United States, whose Appointments are not herein otherwise provided for, and which shall be established by Law: but the Congress may by Law vest the Appointment of such inferior Officers, as they think proper, in the President alone, in the Courts of Law, or in the Heads of Departments. The President shall have Power to fill up all Vacancies that may happen during the Recess of the Senate, by granting Commissions which shall expire at the End of their next Session.",
          translation: "The President commands the armed forces, including state militias (today the National Guard) when they are called into federal service. The President can require written opinions from the heads of executive departments, and can grant reprieves and pardons for federal crimes, except in impeachment cases. With the advice and consent of the Senate, the President makes treaties (two thirds of the senators present must agree) and appoints ambassadors, Supreme Court justices, and other federal officers. Congress can let the President alone, the courts, or department heads appoint lower-level officers. While the Senate is in recess, the President can fill vacancies with temporary appointments that last until the end of the Senate's next session.",
          rights: "Key checks: treaties need two-thirds Senate approval, and major appointments need Senate confirmation. The pardon power covers only federal crimes, not state crimes, and cannot undo an impeachment. The President commands the military, but only Congress can declare war.",
          examples: [
            "The pardon power covers only federal crimes and has few formal limits. Presidents have pardoned political allies and family members. Whether a President can pardon himself has never been tested in court.",
            "Recess appointments let a President fill posts without Senate confirmation while the Senate is in recess. Both parties have used them, and the Senate now often holds brief pro forma sessions to block them."
          ],
          references: [
            { text: "Trump v. United States (2024). A former President has absolute immunity from criminal prosecution for acts within his core constitutional powers, at least presumptive immunity for his other official acts, and no immunity for unofficial acts. Vote: 6-3.", source: "144 S. Ct. 2312" },
            { text: "NLRB v. Noel Canning (2014). A Senate break of fewer than 10 days is presumed too short for recess appointments, and the Senate is in session when it says it is, as long as it can conduct business.", source: "573 U.S. 513" },
            { text: "Kennedy v. Braidwood Management (2025). Members of the U.S. Preventive Services Task Force are 'inferior officers' whom Congress may let a department head appoint, because the Secretary of Health and Human Services can remove them at will and review and block their recommendations. Vote: 6-3.", source: "606 U.S. 748" }
          ]
        },
        {
          id: "a2s3",
          title: "Section 3: Duties of the President",
          original: "He shall from time to time give to the Congress Information of the State of the Union, and recommend to their Consideration such Measures as he shall judge necessary and expedient; he may, on extraordinary Occasions, convene both Houses, or either of them, and in Case of Disagreement between them, with Respect to the Time of Adjournment, he may adjourn them to such Time as he shall think proper; he shall receive Ambassadors and other public Ministers; he shall take Care that the Laws be faithfully executed, and shall Commission all the Officers of the United States.",
          translation: "From time to time, the President must report to Congress on the State of the Union and recommend laws the President considers necessary. On extraordinary occasions, the President can call one or both chambers into session, and if the chambers cannot agree on when to adjourn, the President can adjourn them. The President receives ambassadors (which the Supreme Court has read to include the power to recognize foreign governments), must 'take Care that the Laws be faithfully executed,' and commissions all officers of the United States.",
          rights: "The Take Care Clause makes carrying out the law a duty, not a choice. The President must execute the laws Congress passes, even ones the President opposes, and cannot use this clause to make new law.",
          examples: [
            "Presidents of both parties have been accused of violating the Take Care Clause by setting broad enforcement priorities or declining to enforce certain laws. Supporters call this normal enforcement discretion. Critics call it a refusal to execute the law.",
            "After President Nixon refused to spend billions of dollars Congress had appropriated, Congress passed the Impoundment Control Act of 1974, which limits a President's power to withhold approved funds.",
            "Presidents have called Congress into special session, such as Harry Truman's 1948 'Turnip Day' session. No President has ever used the power to adjourn Congress."
          ],
          references: [
            { text: "Kendall v. United States ex rel. Stokes (1838). The duty to see that the laws are faithfully executed does not give the President power to forbid their execution. A court could order the Postmaster General to make a payment Congress required.", source: "37 U.S. 524" },
            { text: "Youngstown Sheet & Tube Co. v. Sawyer (1952). The duty to execute the laws does not make the President a lawmaker. Truman's seizure of the steel mills without authorization from Congress was struck down.", source: "343 U.S. 579" }
          ]
        },
        {
          id: "a2s4",
          title: "Section 4: Impeachment",
          original: "The President, Vice President and all civil Officers of the United States, shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors.",
          translation: "The President, VP, and all federal officials can be removed from office if impeached (charged by the House) and convicted (by the Senate) of treason, bribery, or other serious offenses.",
          rights: "No one is above the law. Even the President can be removed by the people's representatives for serious misconduct. 'High crimes and misdemeanors' is not limited to crimes in the criminal code. Alexander Hamilton described impeachable offenses as abuses or violations of the public trust, and in practice the House and Senate decide what qualifies.",
          examples: [
            "Three presidents have been impeached by the House: Andrew Johnson, Bill Clinton, and Donald Trump (twice). None was convicted by the Senate. Richard Nixon resigned in 1974 before the full House voted on impeachment.",
            "Most impeachments have involved federal judges. The House has impeached 15 judges, and the Senate has removed 8 of them. Only two Cabinet secretaries have been impeached, William Belknap in 1876 and Alejandro Mayorkas in 2024, and neither was convicted."
          ],
          references: [
            { text: "Nixon v. United States (1993). Courts cannot review how the Senate conducts impeachment trials. A federal judge's challenge to the Senate's use of a committee to hear evidence was a 'political question' for the Senate alone.", source: "506 U.S. 224" }
          ]
        }
      ]
    },
    {
      number: 3,
      title: "The Judiciary (Courts)",
      summary: "Creates the Supreme Court and federal court system, defines what cases they can hear, protects judges from political pressure, and defines treason narrowly.",
      sections: [
        {
          id: "a3s1",
          title: "Section 1: Judicial Power",
          original: "The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish. The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour, and shall, at stated Times, receive for their Services, a Compensation, which shall not be diminished during their Continuance in Office.",
          translation: "There is one Supreme Court, and Congress can create lower federal courts. Federal judges hold office 'during good Behaviour,' which in practice means for life unless they resign, retire, or are impeached and removed. Their pay cannot be cut while they serve.",
          rights: "Life tenure and pay protection exist so judges can make unpopular decisions without fear of retaliation. They answer to the law, not to politicians or public opinion.",
          examples: [
            "Life tenure means a single president can shape the Court for decades. Most other major democracies set term limits or a mandatory retirement age for judges on their highest courts.",
            "Congress sets the number of Supreme Court justices. It has changed several times, from 6 in 1789 to 9 in 1869. In 1937, Congress rejected President Franklin Roosevelt's plan to add up to six justices, and proposals to expand the Court still come up.",
            "The Constitution doesn't mention judicial review (courts striking down laws as unconstitutional). The Supreme Court first used that power against a federal law in 1803."
          ],
          references: [
            { text: "Marbury v. Madison (1803). The Court asserted the power of judicial review: courts decide what the Constitution means and can strike down laws that violate it.", source: "5 U.S. 137" }
          ]
        },
        {
          id: "a3s2",
          title: "Section 2: Jurisdiction",
          original: "The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made, or which shall be made, under their Authority;--to all Cases affecting Ambassadors, other public Ministers and Consuls;--to all Cases of admiralty and maritime Jurisdiction;--to Controversies to which the United States shall be a Party;--to Controversies between two or more States;-- between a State and Citizens of another State,--between Citizens of different States,--between Citizens of the same State claiming Lands under Grants of different States, and between a State, or the Citizens thereof, and foreign States, Citizens or Subjects. In all Cases affecting Ambassadors, other public Ministers and Consuls, and those in which a State shall be Party, the supreme Court shall have original Jurisdiction. In all the other Cases before mentioned, the supreme Court shall have appellate Jurisdiction, both as to Law and Fact, with such Exceptions, and under such Regulations as the Congress shall make. The Trial of all Crimes, except in Cases of Impeachment, shall be by Jury; and such Trial shall be held in the State where the said Crimes shall have been committed; but when not committed within any State, the Trial shall be at such Place or Places as the Congress may by Law have directed.",
          note: "Changed by the 11th Amendment (1795): federal courts cannot hear suits against a state brought by citizens of another state or of a foreign country.",
          translation: "Federal courts can hear cases arising under the Constitution, federal laws, and treaties; cases involving ambassadors and other diplomats; cases at sea (admiralty); cases in which the United States is a party; and disputes between states, between citizens of different states, and between a state or its citizens and foreign countries or their citizens. The Supreme Court hears cases involving diplomats or a state first-hand (original jurisdiction). In all other cases it hears appeals, subject to exceptions and rules that Congress makes. All crimes, except impeachments, must be tried by a jury in the state where the crime was committed. Crimes committed outside any state are tried where Congress directs.",
          rights: "Federal courts provide a neutral forum for disputes involving federal law, other states, and foreign countries, and the Supreme Court has the final word on what federal law means. The jury guarantee means a person accused of a serious crime can be convicted only by a jury unless they give up that right, and the trial must be held where the crime happened.",
          examples: [
            "In Chisholm v. Georgia (1793), the Court let a South Carolina citizen sue the state of Georgia in federal court over a Revolutionary War debt. States were alarmed, and the 11th Amendment was ratified in 1795 to reverse the decision.",
            "Congress can make 'Exceptions' to the Supreme Court's appeals power. After the Civil War, Congress took away the Court's power to hear a pending appeal from a Mississippi newspaper editor held by the military, and Ex parte McCardle (1869) accepted that.",
            "This section promises a jury in criminal cases, but more than 90 percent of federal convictions come from guilty pleas, which give up that right, often in exchange for lesser charges or sentences."
          ],
          references: [
            { text: "Marbury v. Madison (1803). Congress cannot add to the short list of cases that start in the Supreme Court (its 'original jurisdiction') set out in this section.", source: "5 U.S. 137" },
            { text: "Trump v. CASA (2025). In an interim ruling, the Court held that 'universal injunctions' blocking a federal policy for everyone likely exceed the power Congress gave federal courts in the Judiciary Act of 1789. Relief may go no further than needed to give complete relief to each plaintiff with standing, though class actions remain possible. Vote: 6-3.", source: "606 U.S. 831" },
            { text: "Bost v. Illinois State Board of Elections (2026). A candidate has standing, the Article III requirement of a personal stake in the case, to challenge the rules for counting votes in his own election. Five justices held that he need not show the rules would cost him the election. Vote: 7-2.", source: "607 U.S. 71" }
          ]
        },
        {
          id: "a3s3",
          title: "Section 3: Treason",
          original: "Treason against the United States, shall consist only in levying War against them, or in adhering to their Enemies, giving them Aid and Comfort. No Person shall be convicted of Treason unless on the Testimony of two Witnesses to the same overt Act, or on Confession in open Court. The Congress shall have Power to declare the Punishment of Treason, but no Attainder of Treason shall work Corruption of Blood, or Forfeiture except during the Life of the Person attainted.",
          translation: "Treason means ONLY: waging war against the US or helping its enemies. Conviction requires two witnesses to the same act, or a confession in open court. Congress sets the punishment for treason, but the punishment cannot reach the traitor's family: their heirs cannot be barred from inheriting ('Corruption of Blood'), and any forfeiture of property ends with the traitor's own life.",
          rights: "The Founders defined treason extremely narrowly ON PURPOSE. In England, 'treason' was used to execute political opponents. Here, the government cannot label dissent or criticism as treason. Protesting, criticizing, even hating the government is NOT treason.",
          examples: [
            "Politicians sometimes casually accuse opponents of 'treason,' but the Constitution says that word means something very specific and very narrow.",
            "Federal treason prosecutions are rare: fewer than 40 in the nation's history. Many acts against the country, such as spying, are charged under other laws instead.",
            "During the Civil War, the Second Confiscation Act (1862) allowed seizure of property from supporters of the Confederacy. At President Lincoln's urging, Congress limited the forfeiture of land to the owner's lifetime to respect this clause."
          ],
          references: [
            { text: "Cramer v. United States (1945). The two-witness rule is strict: two witnesses must testify to the same overt act, and that act must show the defendant actually giving aid and comfort to the enemy. Vote: 5-4.", source: "325 U.S. 1" },
            { text: "Corruption of Blood was an English legal penalty under which a traitor's descendants could not inherit property from or through the traitor. The Constitution forbids it.", source: "Historical, Art. III, Sec. 3, Cl. 2" }
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Relations Between States",
      summary: "How states must treat each other's laws, records, and citizens, including returning people charged with crimes. How new states join, how federal territory is governed, and how the federal government protects states.",
      sections: [
        {
          id: "a4s1",
          title: "Section 1: Full Faith and Credit",
          original: "Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State. And the Congress may by general Laws prescribe the Manner in which such Acts, Records and Proceedings shall be proved, and the Effect thereof.",
          translation: "Every state must honor the laws, records, and court decisions of every other state. Congress can pass general laws setting how those records are proven in other states and what effect they have.",
          rights: "Court judgments from one state can be enforced in every other state, and official records like birth certificates and marriage licenses are generally honored nationwide. You do not lose your legal status just by crossing a state line.",
          examples: [
            "Court judgments must be honored across state lines. A person who wins a lawsuit in Texas can enforce that judgment against the other party's property in Ohio.",
            "Congress used the second sentence in the Defense of Marriage Act (1996) to say states did not have to recognize same-sex marriages from other states. After Obergefell v. Hodges (2015), Congress repealed that law in the Respect for Marriage Act (2022).",
            "The Violence Against Women Act (1994) uses this power to require every state to enforce protection orders issued by courts in other states."
          ],
          references: [
            { text: "Obergefell v. Hodges (2015). States must license same-sex marriages and recognize those performed in other states. The ruling rested on the 14th Amendment, not on this clause. Vote: 5-4.", source: "576 U.S. 644" }
          ]
        },
        {
          id: "a4s2",
          title: "Section 2: Privileges, Immunities, and Extradition",
          original: "The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several States. A Person charged in any State with Treason, Felony, or other Crime, who shall flee from Justice, and be found in another State, shall on Demand of the executive Authority of the State from which he fled, be delivered up, to be removed to the State having Jurisdiction of the Crime. No Person held to Service or Labour in one State, under the Laws thereof, escaping into another, shall, in Consequence of any Law or Regulation therein, be discharged from such Service or Labour, but shall be delivered up on Claim of the Party to whom such Service or Labour may be due.",
          note: "The third clause (the Fugitive Slave Clause) was made void by the 13th Amendment (1865), which abolished slavery.",
          translation: "States cannot discriminate against citizens from other states. If you visit or move to another state, you get the same basic rights as people who live there. A person charged with a crime who flees to another state must be returned when the governor of the state where the charges were filed demands it (extradition). The third clause required that people 'held to Service or Labour' who escaped to another state, meaning enslaved people, be returned to those who claimed them.",
          rights: "A state cannot treat you as a second-class citizen because you're from somewhere else. There are exceptions (like residency requirements for in-state tuition), but the core rights are portable. Extradition means no one can escape criminal charges simply by crossing a state line.",
          examples: [
            "States can charge nonresidents more for things like hunting licenses or state university tuition, but the Supreme Court has struck down laws that barred out-of-state residents from practicing law or charged them far more to work as commercial fishermen.",
            "In 1981 an Iowa man was charged with killing a pregnant woman with his car in Puerto Rico, then fled home. Iowa's governor refused to return him, and Puerto Rico v. Branstad (1987) held that federal courts can order a governor to comply with extradition.",
            "Some states have passed 'shield laws' that refuse extradition for charges related to abortion or gender-affirming care when the person was never in the charging state. Supporters say the Constitution only requires returning people who actually fled. Critics say these laws undermine cooperation between states.",
            "Before the Civil War, Northern states passed 'personal liberty laws' to protect people from being seized as fugitives from slavery. Prigg v. Pennsylvania (1842) struck down one such law, and the harsher Fugitive Slave Act of 1850 required Northern officials and citizens to help with captures, deepening the national divide."
          ],
          references: [
            { text: "Saenz v. Roe (1999). The right to travel protects visitors from other states (under this clause) and new residents, who must receive the same welfare benefits as long-time residents (under the 14th Amendment). Vote: 7-2.", source: "526 U.S. 489" },
            { text: "Puerto Rico v. Branstad (1987). A governor has no discretion to refuse a valid extradition request, and federal courts can order compliance. This overruled Kentucky v. Dennison (1861).", source: "483 U.S. 219" },
            { text: "Prigg v. Pennsylvania (1842). The Fugitive Slave Clause and federal law overrode a Pennsylvania law protecting Black residents from kidnapping. The Court called enforcement a federal matter, so states could refuse to help.", source: "41 U.S. 539" }
          ]
        },
        {
          id: "a4s3",
          title: "Section 3: New States and Federal Territory",
          original: "New States may be admitted by the Congress into this Union; but no new State shall be formed or erected within the Jurisdiction of any other State; nor any State be formed by the Junction of two or more States, or Parts of States, without the Consent of the Legislatures of the States concerned as well as of the Congress. The Congress shall have Power to dispose of and make all needful Rules and Regulations respecting the Territory or other Property belonging to the United States; and nothing in this Constitution shall be so construed as to Prejudice any Claims of the United States, or of any particular State.",
          translation: "Congress can admit new states into the Union. But no new state can be created inside an existing state, or by combining states or parts of states, without the consent of both Congress and the state legislatures involved. Congress also has power to make all needed rules for land and property belonging to the United States, including federal territories. Nothing in the Constitution should be read to undercut the land claims of the United States or of any state.",
          rights: "This is how the country grew from 13 states to 50, with each new state joining as an equal. It is also why people in U.S. territories like Puerto Rico and Guam live under rules Congress sets: most are U.S. citizens, but territories have no voting members of Congress and no electoral votes for President.",
          examples: [
            "West Virginia broke away from Virginia during the Civil War. Congress accepted consent from a pro-Union government that claimed to speak for Virginia, and West Virginia became a state in 1863.",
            "In Dred Scott v. Sandford (1857), the Court held that Congress could not ban slavery in federal territories, striking down the Missouri Compromise and pushing the nation closer to civil war.",
            "Puerto Rico has held several votes on whether to seek statehood, but only Congress can admit a new state. In United States v. Vaello Madero (2022), the Court held 8-1 that Congress may exclude Puerto Rico residents from a federal disability benefit (SSI) available in the states."
          ],
          references: [
            { text: "Dred Scott v. Sandford (1857). The Court ruled 7-2 that Black Americans could not be citizens and that Congress had no power to ban slavery in the territories. The 13th and 14th Amendments overturned it.", source: "60 U.S. 393" },
            { text: "Downes v. Bidwell (1901). One of the Insular Cases. The Court held 5-4 that Puerto Rico was not fully part of the United States for tax purposes, so Congress could tax its goods differently. It led to the view that the Constitution applies only in part to 'unincorporated' territories.", source: "182 U.S. 244" }
          ]
        },
        {
          id: "a4s4",
          title: "Section 4: The Guarantee Clause",
          original: "The United States shall guarantee to every State in this Union a Republican Form of Government, and shall protect each of them against Invasion; and on Application of the Legislature, or of the Executive (when the Legislature cannot be convened) against domestic Violence.",
          translation: "The federal government promises every state a republican form of government, meaning one run by representatives the people elect. It must protect each state from invasion and, when the state legislature asks (or the governor, if the legislature cannot meet), from violence within the state.",
          rights: "This promise means no state can become a monarchy or dictatorship. In practice, courts almost never enforce it themselves, leaving Congress and the President to decide whether a state government is legitimate.",
          examples: [
            "During Rhode Island's Dorr Rebellion (1841-1842), two rival governments each claimed to be the lawful one. Luther v. Borden (1849) held that choosing between them was a job for Congress and the President, not the courts.",
            "After the Civil War, Congress relied in part on this clause to require former Confederate states to adopt new constitutions before regaining representation. Texas v. White (1869) recognized this power.",
            "Federal troops have been sent into states at a governor's request to stop riots, as in Detroit in 1967 and Los Angeles in 1992."
          ],
          references: [
            { text: "Luther v. Borden (1849). Whether a state has a 'republican' government is a political question for Congress and the President to decide, not the courts.", source: "48 U.S. 1" },
            { text: "Texas v. White (1869). Congress has power under this clause to reestablish lawful state governments after a rebellion. The Court also described the Union as 'indestructible.'", source: "74 U.S. 700" }
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Amending the Constitution",
      summary: "How to change the Constitution. It's intentionally difficult, requiring supermajorities at every step.",
      sections: [
        {
          id: "a5",
          title: "The Amendment Process",
          original: "The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as Part of this Constitution, when ratified by the Legislatures of three fourths of the several States, or by Conventions in three fourths thereof, as the one or the other Mode of Ratification may be proposed by the Congress; Provided that no Amendment which may be made prior to the Year One thousand eight hundred and eight shall in any Manner affect the first and fourth Clauses in the Ninth Section of the first Article; and that no State, without its Consent, shall be deprived of its equal Suffrage in the Senate.",
          translation: "There are two ways to propose an amendment: two thirds of both the House and the Senate can propose one, or, if two thirds of the state legislatures apply, Congress must call a convention to propose amendments. Either way, an amendment takes effect only when three fourths of the states ratify it, through their legislatures or through state conventions, whichever Congress chooses. Two limits were written in: no amendment before 1808 could change the protection for the slave trade or the rule on direct taxes in Article I, Section 9, and no state can lose its equal vote in the Senate without its consent.",
          rights: "The Constitution is meant to be hard to change. This protects your rights from being eliminated by a temporary majority. It takes broad, sustained consensus to alter the nation's fundamental law.",
          examples: [
            "More than 11,000 amendments have been proposed in Congress. Only 33 were sent to the states, and 27 have been ratified.",
            "No convention for proposing amendments has ever been called. In the early 1900s, a state campaign for a convention on electing senators directly came close and helped push Congress to propose the 17th Amendment itself."
          ],
          references: [
            { text: "The Equal Rights Amendment. Congress sent it to the states in 1972 with a deadline, later extended to 1982. Only 35 of the needed 38 states had ratified by then. Three more ratified from 2017 to 2020, but the National Archives has not certified it because the deadline had passed, and courts have declined to order it to.", source: "Historical" },
            { text: "Dillon v. Gloss (1921). Congress may set a reasonable deadline for ratifying an amendment. The Court upheld the seven-year limit attached to the 18th Amendment.", source: "256 U.S. 368" }
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Supremacy of the Constitution",
      summary: "The Constitution is the highest law. Federal law beats state law. All officials swear an oath to it. No religious test for office.",
      sections: [
        {
          id: "a6",
          title: "The Supremacy Clause",
          original: "All Debts contracted and Engagements entered into, before the Adoption of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation. This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the Contrary notwithstanding. The Senators and Representatives before mentioned, and the Members of the several State Legislatures, and all executive and judicial Officers, both of the United States and of the several States, shall be bound by Oath or Affirmation, to support this Constitution; but no religious Test shall ever be required as a Qualification to any Office or public Trust under the United States.",
          translation: "Debts the nation took on before the Constitution remain valid. The Constitution, federal laws made under it, and treaties are the supreme law of the land, and state judges must follow them even if a state's own constitution or laws say otherwise. All federal and state lawmakers, executive officials, and judges must swear or affirm to support the Constitution. No religious test can ever be required to hold a federal office.",
          rights: "No state can enforce a law that conflicts with the Constitution or a valid federal law. And no one can be required to hold, or give up, a religious belief to serve in federal office. Courts have applied the same principle to state offices through the First and 14th Amendments.",
          examples: [
            "When state laws conflict with federal law, federal wins, but the federal law must itself be constitutional. Unconstitutional federal laws can be struck down.",
            "Several state constitutions still contain religious tests for office, such as provisions barring atheists, but Torcaso v. Watkins (1961) made them unenforceable.",
            "The oath binds state officials too. In Cooper v. Aaron (1958), after Arkansas leaders tried to block school desegregation in Little Rock, the Court said officials who swear to support the Constitution cannot defy it."
          ],
          references: [
            { text: "Cooper v. Aaron (1958). State officials are bound by the Supreme Court's reading of the Constitution and cannot nullify its decisions. Arkansas could not delay the school desegregation required by Brown v. Board of Education (1954). All nine justices signed the opinion.", source: "358 U.S. 1" },
            { text: "Torcaso v. Watkins (1961). Maryland could not require a notary public to declare a belief in God. The Court relied on the First and 14th Amendments, since this clause by its terms covers only federal offices.", source: "367 U.S. 488" }
          ]
        }
      ]
    },
    {
      number: 7,
      title: "Ratification",
      summary: "How the Constitution itself was approved, requiring 9 of the original 13 states, followed by the closing attestation and the signatures of the delegates.",
      sections: [
        {
          id: "a7",
          title: "Ratification Process",
          original: "The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.\n\nThe Word, \"the,\" being interlined between the seventh and eighth Lines of the first Page, The Word \"Thirty\" being partly written on an Erazure in the fifteenth Line of the first Page, The Words \"is tried\" being interlined between the thirty second and thirty third Lines of the first Page and the Word \"the\" being interlined between the forty third and forty fourth Lines of the second Page.\n\nAttest William Jackson Secretary\n\ndone in Convention by the Unanimous Consent of the States present the Seventeenth Day of September in the Year of our Lord one thousand seven hundred and Eighty seven and of the Independance of the United States of America the Twelfth In witness whereof We have hereunto subscribed our Names,",
          translation: "Nine of the thirteen states had to approve this Constitution for it to take effect among the states that ratified it. The note that follows lists small corrections made to the handwritten parchment (words added between lines and one word written over an erasure), so no one could later claim the text had been altered. William Jackson, the Convention's secretary, signed to attest (confirm) the document. The final paragraph says the Constitution was approved by the unanimous consent of the states present on September 17, 1787, in the twelfth year of American independence, and introduces the delegates' signatures.",
          rights: "The Constitution was ratified by the people through state conventions, not by state legislatures or the existing government. It drew its authority directly from citizens.",
          examples: [
            "The Articles of Confederation required all 13 states to approve any change. The Convention instead set a threshold of nine state conventions, which critics at the time said went beyond its authority to revise the Articles.",
            "Rhode Island sent no delegates to the Convention and did not ratify until May 1790, more than a year after the new government began, under the threat of being treated like a foreign country in trade.",
            "Three delegates who stayed to the end (Edmund Randolph, George Mason, and Elbridge Gerry) refused to sign, partly because there was no bill of rights. Describing the result as the 'Unanimous Consent of the States present' let the Convention present a united front despite their objections."
          ],
          references: [
            { text: "Delaware was first to ratify (Dec 7, 1787). New Hampshire was the 9th, making it official (June 21, 1788). Rhode Island was last (May 29, 1790).", source: "Historical" },
            { text: "Thirty-nine delegates from 12 states signed. Rhode Island sent no delegates, and Alexander Hamilton signed alone for New York after its other two delegates left the Convention.", source: "National Archives" }
          ]
        }
      ]
    }
  ],
  signers: {
    president: "G°. Washington, Presidt and deputy from Virginia",
    states: [
      { state: "Delaware", names: ["Geo: Read", "Gunning Bedford jun", "John Dickinson", "Richard Bassett", "Jaco: Broom"] },
      { state: "Maryland", names: ["James McHenry", "Dan of St Thos. Jenifer", "Danl. Carroll"] },
      { state: "Virginia", names: ["John Blair", "James Madison Jr."] },
      { state: "North Carolina", names: ["Wm. Blount", "Richd. Dobbs Spaight", "Hu Williamson"] },
      { state: "South Carolina", names: ["J. Rutledge", "Charles Cotesworth Pinckney", "Charles Pinckney", "Pierce Butler"] },
      { state: "Georgia", names: ["William Few", "Abr Baldwin"] },
      { state: "New Hampshire", names: ["John Langdon", "Nicholas Gilman"] },
      { state: "Massachusetts", names: ["Nathaniel Gorham", "Rufus King"] },
      { state: "Connecticut", names: ["Wm. Saml. Johnson", "Roger Sherman"] },
      { state: "New York", names: ["Alexander Hamilton"] },
      { state: "New Jersey", names: ["Wil: Livingston", "David Brearley", "Wm. Paterson", "Jona: Dayton"] },
      { state: "Pennsylvania", names: ["B Franklin", "Thomas Mifflin", "Robt. Morris", "Geo. Clymer", "Thos. FitzSimons", "Jared Ingersoll", "James Wilson", "Gouv Morris"] }
    ]
  }
};
