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
    references: [
      { text: "The phrase is 'We the People,' not 'We the States' or 'We the Government.' The authority comes from citizens.", source: "Constitutional Convention debates, 1787" }
    ]
  },
  articles: [
    {
      number: 1,
      title: "The Legislature (Congress)",
      summary: "Creates Congress (Senate + House), defines who can serve, what laws they can make, and what they're forbidden from doing.",
      sections: [
        {
          id: "a1s1",
          title: "Section 1: Legislative Power",
          original: "All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.",
          translation: "Only Congress can make federal laws. Congress has two chambers: the Senate and the House of Representatives.",
          rights: "Laws must come from your elected representatives, not the President, not agencies, not courts. When regulations are created by unelected bureaucrats or executive orders bypass Congress, this principle is strained.",
          references: [
            { text: "West Virginia v. EPA (2022) held that major policy decisions must come from Congress, not agencies (the 'major questions doctrine').", source: "597 U.S. 697" }
          ]
        },
        {
          id: "a1s2",
          title: "Section 2: The House of Representatives",
          original: "The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature. No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State in which he shall be chosen. Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, three fifths of all other Persons. The actual Enumeration shall be made within three Years after the first Meeting of the Congress of the United States, and within every subsequent Term of ten Years, in such Manner as they shall by Law direct. The Number of Representatives shall not exceed one for every thirty Thousand, but each State shall have at Least one Representative; and until such enumeration shall be made, the State of New Hampshire shall be entitled to chuse three, Massachusetts eight, Rhode-Island and Providence Plantations one, Connecticut five, New-York six, New Jersey four, Pennsylvania eight, Delaware one, Maryland six, Virginia ten, North Carolina five, South Carolina five, and Georgia three. When vacancies happen in the Representation from any State, the Executive Authority thereof shall issue Writs of Election to fill such Vacancies. The House of Representatives shall chuse their Speaker and other Officers; and shall have the sole Power of Impeachment.",
          translation: "House members serve 2-year terms, elected directly by the people. You must be 25+, a citizen for 7+ years, and live in the state you represent. Seats are divided among states by population. The House has the sole power to impeach (charge) officials.",
          rights: "The House is the 'people's chamber,' closest to voters with the shortest terms. They control the power of the purse (spending bills start here) and the power to impeach.",
          references: [
            { text: "The original text counted enslaved people as 3/5 of a person for apportionment. This was superseded by the 14th Amendment.", source: "Historical, Art. I, Sec. 2, Cl. 3" },
            { text: "U.S. Term Limits v. Thornton (1995) established that states cannot impose term limits on Congress beyond what the Constitution requires.", source: "514 U.S. 779" }
          ]
        },
        {
          id: "a1s3",
          title: "Section 3: The Senate",
          original: "The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote. Immediately after they shall be assembled in Consequence of the first Election, they shall be divided as equally as may be into three Classes. The Seats of the Senators of the first Class shall be vacated at the Expiration of the second Year, of the second Class at the Expiration of the fourth Year, and of the third Class at the Expiration of the sixth Year, so that one third may be chosen every second Year; and if Vacancies happen by Resignation, or otherwise, during the Recess of the Legislature of any State, the Executive thereof may make temporary Appointments until the next Meeting of the Legislature, which shall then fill such Vacancies. No Person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State for which he shall be chosen. The Vice President of the United States shall be President of the Senate, but shall have no Vote, unless they be equally divided. The Senate shall chuse their other Officers, and also a President pro tempore, in the Absence of the Vice President, or when he shall exercise the Office of President of the United States. The Senate shall have the sole Power to try all Impeachments. When sitting for that Purpose, they shall be on Oath or Affirmation. When the President of the United States is tried, the Chief Justice shall preside: And no Person shall be convicted without the Concurrence of two thirds of the Members present. Judgment in Cases of Impeachment shall not extend further than to removal from Office, and disqualification to hold and enjoy any Office of honor, Trust or Profit under the United States: but the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law.",
          translation: "Each state gets exactly 2 senators (now elected by voters per the 17th Amendment). Senators serve 6-year terms. Must be 30+, citizen for 9+ years. The Senate conducts impeachment trials. The VP is the tiebreaker.",
          rights: "The Senate gives every state equal voice regardless of population. Wyoming (580k people) has the same Senate power as California (39 million). This was a deliberate compromise to protect smaller states.",
          references: [
            { text: "The 17th Amendment (1913) changed senator selection from state legislatures to direct popular vote.", source: "Constitutional" }
          ]
        },
        {
          id: "a1s8",
          title: "Section 8: Powers of Congress (Key Clauses)",
          original: "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States; but all Duties, Imposts and Excises shall be uniform throughout the United States; To borrow Money on the credit of the United States; To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes; To establish an uniform Rule of Naturalization, and uniform Laws on the subject of Bankruptcies throughout the United States; To coin Money, regulate the Value thereof, and of foreign Coin, and fix the Standard of Weights and Measures; To provide for the Punishment of counterfeiting the Securities and current Coin of the United States; To establish Post Offices and post Roads; To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective Writings and Discoveries; To constitute Tribunals inferior to the supreme Court; To define and punish Piracies and Felonies committed on the high Seas, and Offences against the Law of Nations; To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water; To raise and support Armies, but no Appropriation of Money to that Use shall be for a longer Term than two Years; To provide and maintain a Navy; To make Rules for the Government and Regulation of the land and naval Forces; To provide for calling forth the Militia to execute the Laws of the Union, suppress Insurrections and repel Invasions; To provide for organizing, arming, and disciplining, the Militia, and for governing such Part of them as may be employed in the Service of the United States, reserving to the States respectively, the Appointment of the Officers, and the Authority of training the Militia according to the discipline prescribed by Congress; To exercise exclusive Legislation in all Cases whatsoever, over such District (not exceeding ten Miles square) as may, by Cession of particular States, and the Acceptance of Congress, become the Seat of the Government of the United States, and to exercise like Authority over all Places purchased by the Consent of the Legislature of the State in which the Same shall be, for the Erection of Forts, Magazines, Arsenals, dock-Yards, and other needful Buildings;--And To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof.",
          translation: "Congress can: tax, borrow money, regulate interstate and international trade, coin money, run the post office, declare war, fund the military, and make any law 'necessary and proper' to carry out these powers.",
          rights: "Only CONGRESS can declare war, though Presidents have often gone around this. The 'Commerce Clause' and 'Necessary and Proper Clause' have been stretched to justify almost unlimited federal power, far beyond what was originally intended.",
          examples: [
            "The US hasn't formally declared war since 1942, yet has been in continuous military conflicts. Presidents use 'authorizations' instead of declarations, bypassing this requirement.",
            "The Commerce Clause was used to justify everything from civil rights laws (good) to criminalizing growing wheat on your own farm for your own use (Wickard v. Filburn).",
            "Congress delegated enormous lawmaking power to executive agencies, and the regulations those agencies write have the force of law but weren't voted on by anyone you elected."
          ],
          references: [
            { text: "Wickard v. Filburn (1942) held that growing wheat for personal use affects interstate commerce, and therefore Congress can regulate it. This represents the maximum Commerce Clause expansion.", source: "317 U.S. 111" },
            { text: "The War Powers Resolution (1973) was Congress's attempt to reclaim war-declaration power. Presidents routinely ignore or work around it.", source: "50 U.S.C. ch. 33" },
            { text: "Loper Bright Enterprises v. Raimondo (2024) overturned Chevron deference, reducing agencies' power to interpret ambiguous statutes.", source: "144 S. Ct. 2244" }
          ]
        },
        {
          id: "a1s9",
          title: "Section 9: Limits on Congress",
          original: "The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight, but a Tax or duty may be imposed on such Importation, not exceeding ten dollars for each Person. The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it. No Bill of Attainder or ex post facto Law shall be passed. No Capitation, or other direct, Tax shall be laid, unless in Proportion to the Census or enumeration herein before directed to be taken. No Tax or Duty shall be laid on Articles exported from any State. No Preference shall be given by any Regulation of Commerce or Revenue to the Ports of one State over those of another: nor shall Vessels bound to, or from, one State, be obliged to enter, clear, or pay Duties in another. No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law; and a regular Statement and Account of the Receipts and Expenditures of all public Money shall be published from time to time. No Title of Nobility shall be granted by the United States: And no Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince, or foreign State.",
          translation: "Congress CANNOT: suspend habeas corpus (your right to challenge imprisonment) except during rebellion or invasion. Cannot pass laws that punish specific people without trial. Cannot make something illegal and then punish you for doing it before it was illegal. Cannot spend money without authorizing it by law.",
          rights: "Habeas corpus is your most fundamental protection against tyranny, specifically the right to go before a judge and say 'prove you have a legal reason to hold me.' Suspending it means the government can lock you up and throw away the key.",
          examples: [
            "The Military Commissions Act (2006) attempted to strip habeas corpus from 'enemy combatants' held at Guantanamo Bay. The Supreme Court struck this down.",
            "Ex post facto: If a new law bans something today, you cannot be punished for doing that thing yesterday. Some sex offender registration laws have been challenged on these grounds."
          ],
          references: [
            { text: "Boumediene v. Bush (2008) ruled that Guantanamo detainees have habeas corpus rights. Congress cannot strip courts of this jurisdiction.", source: "553 U.S. 723" },
            { text: "In Ex parte Merryman (1861), Lincoln suspended habeas corpus during the Civil War. Chief Justice Taney ruled only Congress could do so, but Lincoln ignored the court.", source: "17 F. Cas. 144" }
          ]
        },
        {
          id: "a1s10",
          title: "Section 10: Limits on States",
          original: "No State shall enter into any Treaty, Alliance, or Confederation; grant Letters of Marque and Reprisal; coin Money; emit Bills of Credit; make any Thing but gold and silver Coin a Tender in Payment of Debts; pass any Bill of Attainder, ex post facto Law, or Law impairing the Obligation of Contracts, or grant any Title of Nobility. No State shall, without the Consent of the Congress, lay any Imposts or Duties on Imports or Exports, except what may be absolutely necessary for executing it's inspection Laws: and the net Produce of all Duties and Imposts, laid by any State on Imports or Exports, shall be for the Use of the Treasury of the United States; and all such Laws shall be subject to the Revision and Controul of the Congress. No State shall, without the Consent of Congress, lay any Duty of Tonnage, keep Troops, or Ships of War in time of Peace, enter into any Agreement or Compact with another State, or with a foreign Power, or engage in War, unless actually invaded, or in such imminent Danger as will not admit of delay.",
          translation: "States CANNOT: make treaties with foreign nations, print their own money, or pass laws that punish people without trial, make things retroactively illegal, or break existing contracts.",
          rights: "This keeps states from acting like independent countries or from arbitrarily destroying people's contractual rights.",
          references: [
            { text: "Home Building & Loan Assn. v. Blaisdell (1934) held that states can temporarily modify contract obligations during emergencies (Great Depression mortgage moratorium).", source: "290 U.S. 398" }
          ]
        }
      ]
    },
    {
      number: 2,
      title: "The Executive (President)",
      summary: "Creates the presidency, defines presidential powers, and sets the terms for election, removal, and succession.",
      sections: [
        {
          id: "a2s1",
          title: "Section 1: Executive Power and Election",
          original: "The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years, and, together with the Vice President, chosen for the same Term, be elected, as follows: Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors, equal to the whole Number of Senators and Representatives to which the State may be entitled in the Congress: but no Senator or Representative, or Person holding an Office of Trust or Profit under the United States, shall be appointed an Elector. The Electors shall meet in their respective States, and vote by Ballot for two Persons, of whom one at least shall not be an Inhabitant of the same State with themselves. And they shall make a List of all the Persons voted for, and of the Number of Votes for each; which List they shall sign and certify, and transmit sealed to the Seat of the Government of the United States, directed to the President of the Senate. The President of the Senate shall, in the Presence of the Senate and House of Representatives, open all the Certificates, and the Votes shall then be counted. The Person having the greatest Number of Votes shall be the President, if such Number be a Majority of the whole Number of Electors appointed; and if there be more than one who have such Majority, and have an equal Number of Votes, then the House of Representatives shall immediately chuse by Ballot one of them for President; and if no Person have a Majority, then from the five highest on the List the said House shall in like Manner chuse the President. But in chusing the President, the Votes shall be taken by States, the Representation from each State having one Vote; A quorum for this Purpose shall consist of a Member or Members from two thirds of the States, and a Majority of all the States shall be necessary to a Choice. In every Case, after the Choice of the President, the Person having the greatest Number of Votes of the Electors shall be the Vice President. But if there should remain two or more who have equal Votes, the Senate shall chuse from them by Ballot the Vice President. The Congress may determine the Time of chusing the Electors, and the Day on which they shall give their Votes; which Day shall be the same throughout the United States. No Person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption of this Constitution, shall be eligible to the Office of President; neither shall any Person be eligible to that Office who shall not have attained to the Age of thirty five Years, and been fourteen Years a Resident within the United States. In Case of the Removal of the President from Office, or of his Death, Resignation, or Inability to discharge the Powers and Duties of the said Office, the Same shall devolve on the Vice President, and the Congress may by Law provide for the Case of Removal, Death, Resignation or Inability, both of the President and Vice President, declaring what Officer shall then act as President, and such Officer shall act accordingly, until the Disability be removed, or a President shall be elected. The President shall, at stated Times, receive for his Services, a Compensation, which shall neither be increased nor diminished during the Period for which he shall have been elected, and he shall not receive within that Period any other Emolument from the United States, or any of them. Before he enter on the Execution of his Office, he shall take the following Oath or Affirmation:--'I do solemnly swear (or affirm) that I will faithfully execute the Office of President of the United States, and will to the best of my Ability, preserve, protect and defend the Constitution of the United States.'",
          translation: "The President holds executive power. Serves a 4-year term. Is chosen by the Electoral College (electors from each state), not by direct popular vote.",
          rights: "The President executes laws and does not make them. Executive power is meant to be limited to carrying out what Congress decides.",
          examples: [
            "Executive orders have expanded far beyond administrative directives into what critics call 'legislating by pen.' Major policy changes enacted without Congress.",
            "The Electoral College means your vote's weight depends on where you live. A vote in Wyoming counts roughly 3.6 times more than a vote in California for presidential elections."
          ],
          references: [
            { text: "Youngstown Sheet & Tube Co. v. Sawyer (1952) ruled that the President cannot seize private property by executive order even during wartime without Congressional authorization.", source: "343 U.S. 579" }
          ]
        },
        {
          id: "a2s2",
          title: "Section 2: Presidential Powers",
          original: "The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States; he may require the Opinion, in writing, of the principal Officer in each of the executive Departments, upon any Subject relating to the Duties of their respective Offices, and he shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment. He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two thirds of the Senators present concur; and he shall nominate, and by and with the Advice and Consent of the Senate, shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court, and all other Officers of the United States, whose Appointments are not herein otherwise provided for, and which shall be established by Law: but the Congress may by Law vest the Appointment of such inferior Officers, as they think proper, in the President alone, in the Courts of Law, or in the Heads of Departments. The President shall have Power to fill up all Vacancies that may happen during the Recess of the Senate, by granting Commissions which shall expire at the End of their next Session.",
          translation: "The President is the military commander-in-chief, can pardon federal crimes (except impeachment), makes treaties (with Senate approval), and appoints judges, ambassadors, and cabinet officials (with Senate confirmation).",
          rights: "Key checks: treaties need 2/3 Senate approval, appointments need Senate confirmation. The pardon power is nearly unlimited for federal crimes but cannot undo impeachment. The President commands the military but cannot declare war.",
          examples: [
            "The pardon power has no check except impeachment. Presidents can pardon allies, family, or themselves (debated but untested).",
            "Recess appointments let presidents bypass Senate confirmation when Congress isn't in session, and both parties have used and been frustrated by this."
          ],
          references: [
            { text: "In Trump v. United States (2024), the Court ruled presidents have broad immunity for official acts, sparking debate about accountability.", source: "144 S. Ct. 2312" },
            { text: "NLRB v. Noel Canning (2014) limited presidential power to make recess appointments when the Senate claims to be in session.", source: "573 U.S. 513" }
          ]
        },
        {
          id: "a2s4",
          title: "Section 4: Impeachment",
          original: "The President, Vice President and all civil Officers of the United States, shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors.",
          translation: "The President, VP, and all federal officials can be removed from office if impeached (charged by the House) and convicted (by the Senate) of treason, bribery, or other serious offenses.",
          rights: "No one is above the law. Even the President can be fired by the people's representatives for serious misconduct. 'High crimes and misdemeanors' is intentionally broad, meaning whatever Congress decides constitutes an abuse of power.",
          examples: [
            "Three presidents have been impeached by the House (Andrew Johnson, Bill Clinton, Donald Trump twice). None were convicted by the Senate. The 2/3 Senate threshold makes conviction extremely difficult in a partisan environment.",
            "The political nature of impeachment means it functions only when both parties agree misconduct occurred, which in polarized times may mean it never functions."
          ],
          references: [
            { text: "Nixon v. United States (1993) held that courts cannot review Senate impeachment trial procedures. Impeachment is purely a political process.", source: "506 U.S. 224" }
          ]
        }
      ]
    },
    {
      number: 3,
      title: "The Judiciary (Courts)",
      summary: "Creates the Supreme Court and federal court system, defines what cases they can hear, and protects judges from political pressure.",
      sections: [
        {
          id: "a3s1",
          title: "Section 1: Judicial Power",
          original: "The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish. The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour, and shall, at stated Times, receive for their Services, a Compensation, which shall not be diminished during their Continuance in Office.",
          translation: "There is one Supreme Court. Congress can create lower courts. All federal judges serve for life (unless they commit misconduct) and their pay cannot be cut while they serve.",
          rights: "Life tenure and pay protection exist so judges can make unpopular decisions without fear of retaliation. They answer to the law, not to politicians or public opinion.",
          examples: [
            "Life tenure means a single president can shape the court for decades. No other democracy gives judges unlimited terms.",
            "Congress controls how many Supreme Court justices there are (currently 9, but not fixed by the Constitution). 'Court packing' proposals would add justices to change the balance.",
            "The Constitution doesn't mention judicial review (courts striking down laws as unconstitutional). The Supreme Court claimed that power for itself in 1803."
          ],
          references: [
            { text: "In Marbury v. Madison (1803), the Court asserted the power of judicial review: courts decide what the Constitution means and can strike down laws that violate it.", source: "5 U.S. 137" }
          ]
        },
        {
          id: "a3s2",
          title: "Section 2: Jurisdiction",
          original: "The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made, or which shall be made, under their Authority;--to all Cases affecting Ambassadors, other public Ministers and Consuls;--to all Cases of admiralty and maritime Jurisdiction;--to Controversies to which the United States shall be a Party;--to Controversies between two or more States;--between a State and Citizens of another State;--between Citizens of different States;--between Citizens of the same State claiming Lands under Grants of different States, and between a State, or the Citizens thereof, and foreign States, Citizens or Subjects. In all Cases affecting Ambassadors, other public Ministers and Consuls, and those in which a State shall be Party, the supreme Court shall have original Jurisdiction. In all the other Cases before mentioned, the supreme Court shall have appellate Jurisdiction, both as to Law and Fact, with such Exceptions, and under such Regulations as the Congress shall make. The Trial of all Crimes, except in Cases of Impeachment, shall be by Jury; and such Trial shall be held in the State where the said Crimes shall have been committed; but when not committed within any State, the Trial shall be at such Place or Places as the Congress may by Law have directed.",
          translation: "Federal courts handle cases about: the Constitution, federal laws, treaties, disputes between states, disputes between citizens of different states, and cases involving foreign diplomats.",
          rights: "This ensures constitutional questions are decided by federal courts, not state courts that might be pressured by local politics.",
          references: [
            { text: "The 11th Amendment later limited citizens' ability to sue states in federal court.", source: "Constitutional" }
          ]
        },
        {
          id: "a3s3",
          title: "Section 3: Treason",
          original: "Treason against the United States, shall consist only in levying War against them, or in adhering to their Enemies, giving them Aid and Comfort. No Person shall be convicted of Treason unless on the Testimony of two Witnesses to the same overt Act, or on Confession in open Court.",
          translation: "Treason means ONLY: waging war against the US or helping its enemies. Conviction requires two witnesses to the same act, or a confession in open court. Treason charges cannot be used against someone's family.",
          rights: "The Founders defined treason extremely narrowly ON PURPOSE. In England, 'treason' was used to execute political opponents. Here, the government cannot label dissent or criticism as treason. Protesting, criticizing, even hating the government is NOT treason.",
          examples: [
            "Politicians sometimes casually accuse opponents of 'treason,' but the Constitution says that word means something very specific and very narrow.",
            "Only about 30 people have been charged with treason in US history. The narrow definition is a feature, not a bug."
          ],
          references: [
            { text: "Cramer v. United States (1945) confirmed that the 'two witness' requirement is strict. Both witnesses must testify to the same overt act of treason.", source: "325 U.S. 1" }
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Relations Between States",
      summary: "How states must treat each other's laws, citizens, and records. How new states join and how the federal government protects states.",
      sections: [
        {
          id: "a4s1",
          title: "Section 1: Full Faith and Credit",
          original: "Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State.",
          translation: "Every state must honor the laws, records, and court decisions of every other state.",
          rights: "Your marriage, contracts, court judgments, and legal records from one state are valid in all states. You don't lose legal status by crossing a state line.",
          examples: [
            "Driver's licenses, marriages, court orders, and corporate registrations must be recognized across state lines.",
            "This clause has been central to debates about whether states must recognize same-sex marriages performed in other states (resolved by Obergefell in 2015)."
          ],
          references: [
            { text: "Obergefell v. Hodges (2015) ruled that all states must recognize same-sex marriages performed in any state.", source: "576 U.S. 644" }
          ]
        },
        {
          id: "a4s2",
          title: "Section 2: Privileges and Immunities",
          original: "The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several States.",
          translation: "States cannot discriminate against citizens from other states. If you visit or move to another state, you get the same basic rights as people who live there.",
          rights: "A state cannot treat you as a second-class citizen because you're from somewhere else. There are exceptions (like residency requirements for in-state tuition), but the core rights are portable.",
          references: [
            { text: "Saenz v. Roe (1999) held that new residents of a state get the same welfare benefits as long-term residents.", source: "526 U.S. 489" }
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
          translation: "To change the Constitution: Either 2/3 of Congress proposes an amendment, OR 2/3 of state legislatures call a convention. Then 3/4 of states must ratify it. That's it: two paths to propose, one threshold to approve.",
          rights: "The Constitution is meant to be hard to change. This protects your rights from being eliminated by a temporary majority. It takes broad, sustained consensus to alter the nation's fundamental law.",
          examples: [
            "Over 11,000 amendments have been proposed in Congress. Only 27 have been ratified. The system works as designed, because fleeting political movements can't easily rewrite fundamental rights.",
            "No constitutional convention has been called since 1787. Several state-driven efforts have come close (balanced budget amendment, term limits) but none have reached the 2/3 threshold."
          ],
          references: [
            { text: "The ERA (Equal Rights Amendment) was proposed in 1972 and passed Congress but failed to get 3/4 of states to ratify before its deadline (debated).", source: "Historical" }
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
          translation: "The Constitution is the supreme law. Federal law overrides state law when they conflict. Every official must swear to uphold the Constitution. You cannot be required to follow any religion (or be non-religious) to hold office.",
          rights: "No state can pass a law that contradicts the Constitution or valid federal law. And your religious beliefs (or lack thereof) cannot be used to bar you from public office.",
          examples: [
            "When state laws conflict with federal law, federal wins, but the federal law must itself be constitutional. Unconstitutional federal laws can be struck down.",
            "Several state constitutions still technically have religious tests for office (barring atheists, for example), but these are unenforceable under the Supremacy Clause.",
            "The oath requirement means officials who undermine the Constitution are violating their sworn duty, regardless of party."
          ],
          references: [
            { text: "Cooper v. Aaron (1958) established that states cannot nullify Supreme Court decisions or ignore the Constitution.", source: "358 U.S. 1" },
            { text: "Torcaso v. Watkins (1961) ruled that religious requirements for public office are unconstitutional.", source: "367 U.S. 488" }
          ]
        }
      ]
    },
    {
      number: 7,
      title: "Ratification",
      summary: "How the Constitution itself was approved, requiring 9 of the original 13 states.",
      sections: [
        {
          id: "a7",
          title: "Ratification Process",
          original: "The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.",
          translation: "Nine of the thirteen states had to approve this Constitution for it to take effect.",
          rights: "The Constitution was ratified by the people through state conventions, not by state legislatures or the existing government. It drew its authority directly from citizens.",
          references: [
            { text: "Delaware was first to ratify (Dec 7, 1787). New Hampshire was the 9th, making it official (June 21, 1788). Rhode Island was last (May 29, 1790).", source: "Historical" }
          ]
        }
      ]
    }
  ]
};
