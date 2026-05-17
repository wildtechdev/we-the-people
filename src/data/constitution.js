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
      { text: "'We the People' -- not 'We the States' or 'We the Government.' The authority comes from citizens.", source: "Constitutional Convention debates, 1787" }
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
          rights: "Laws must come from your elected representatives -- not the President, not agencies, not courts. When regulations are created by unelected bureaucrats or executive orders bypass Congress, this principle is strained.",
          references: [
            { text: "West Virginia v. EPA (2022) -- Major policy decisions must come from Congress, not agencies (the 'major questions doctrine').", source: "597 U.S. 697" }
          ]
        },
        {
          id: "a1s2",
          title: "Section 2: The House of Representatives",
          original: "The House of Representatives shall be composed of Members chosen every second Year by the People of the several States... No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States... Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers...",
          translation: "House members serve 2-year terms, elected directly by the people. You must be 25+, a citizen for 7+ years, and live in the state you represent. Seats are divided among states by population. The House has the sole power to impeach (charge) officials.",
          rights: "The House is the 'people's chamber' -- closest to voters with the shortest terms. They control the power of the purse (spending bills start here) and the power to impeach.",
          references: [
            { text: "The original text counted enslaved people as 3/5 of a person for apportionment -- superseded by the 14th Amendment.", source: "Historical, Art. I, Sec. 2, Cl. 3" },
            { text: "U.S. Term Limits v. Thornton (1995) -- States cannot impose term limits on Congress beyond what the Constitution requires.", source: "514 U.S. 779" }
          ]
        },
        {
          id: "a1s3",
          title: "Section 3: The Senate",
          original: "The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote... No Person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States... The Senate shall have the sole Power to try all Impeachments...",
          translation: "Each state gets exactly 2 senators (now elected by voters per the 17th Amendment). Senators serve 6-year terms. Must be 30+, citizen for 9+ years. The Senate conducts impeachment trials. The VP is the tiebreaker.",
          rights: "The Senate gives every state equal voice regardless of population. Wyoming (580k people) has the same Senate power as California (39 million). This was a deliberate compromise to protect smaller states.",
          references: [
            { text: "The 17th Amendment (1913) changed senator selection from state legislatures to direct popular vote.", source: "Constitutional" }
          ]
        },
        {
          id: "a1s8",
          title: "Section 8: Powers of Congress (Key Clauses)",
          original: "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States... To borrow Money on the credit of the United States... To regulate Commerce with foreign Nations, and among the several States... To coin Money... To establish Post Offices... To declare War... To raise and support Armies... To provide and maintain a Navy... To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers...",
          translation: "Congress can: tax, borrow money, regulate interstate and international trade, coin money, run the post office, declare war, fund the military, and make any law 'necessary and proper' to carry out these powers.",
          rights: "Only CONGRESS can declare war (Presidents have gone around this). The 'Commerce Clause' and 'Necessary and Proper Clause' have been stretched to justify almost unlimited federal power -- far beyond what was originally intended.",
          examples: [
            "The US hasn't formally declared war since 1942, yet has been in continuous military conflicts. Presidents use 'authorizations' instead of declarations, bypassing this requirement.",
            "The Commerce Clause was used to justify everything from civil rights laws (good) to criminalizing growing wheat on your own farm for your own use (Wickard v. Filburn).",
            "Congress delegated enormous lawmaking power to executive agencies -- the regulations those agencies write have the force of law but weren't voted on by anyone you elected."
          ],
          references: [
            { text: "Wickard v. Filburn (1942) -- Growing wheat for personal use affects interstate commerce, therefore Congress can regulate it. Maximum Commerce Clause expansion.", source: "317 U.S. 111" },
            { text: "War Powers Resolution (1973) -- Congress's attempt to reclaim war-declaration power. Presidents routinely ignore or work around it.", source: "50 U.S.C. ch. 33" },
            { text: "Loper Bright Enterprises v. Raimondo (2024) -- Overturned Chevron deference, reducing agencies' power to interpret ambiguous statutes.", source: "144 S. Ct. 2244" }
          ]
        },
        {
          id: "a1s9",
          title: "Section 9: Limits on Congress",
          original: "The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it. No Bill of Attainder or ex post facto Law shall be passed. No Tax or Duty shall be laid on Articles exported from any State. No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law...",
          translation: "Congress CANNOT: suspend habeas corpus (your right to challenge imprisonment) except during rebellion or invasion. Cannot pass laws that punish specific people without trial. Cannot make something illegal and then punish you for doing it before it was illegal. Cannot spend money without authorizing it by law.",
          rights: "Habeas corpus is your most fundamental protection against tyranny -- the right to go before a judge and say 'prove you have a legal reason to hold me.' Suspending it means the government can lock you up and throw away the key.",
          examples: [
            "The Military Commissions Act (2006) attempted to strip habeas corpus from 'enemy combatants' held at Guantanamo Bay. The Supreme Court struck this down.",
            "Ex post facto: If a new law bans something today, you cannot be punished for doing that thing yesterday. Some sex offender registration laws have been challenged on these grounds."
          ],
          references: [
            { text: "Boumediene v. Bush (2008) -- Guantanamo detainees have habeas corpus rights. Congress cannot strip courts of this jurisdiction.", source: "553 U.S. 723" },
            { text: "Ex parte Merryman (1861) -- Lincoln suspended habeas corpus during the Civil War. Chief Justice Taney ruled only Congress could do so, but Lincoln ignored the court.", source: "17 F. Cas. 144" }
          ]
        },
        {
          id: "a1s10",
          title: "Section 10: Limits on States",
          original: "No State shall enter into any Treaty, Alliance, or Confederation; grant Letters of Marque and Reprisal; coin Money; emit Bills of Credit; make any Thing but gold and silver Coin a Tender in Payment of Debts; pass any Bill of Attainder, ex post facto Law, or Law impairing the Obligation of Contracts...",
          translation: "States CANNOT: make treaties with foreign nations, print their own money, or pass laws that punish people without trial, make things retroactively illegal, or break existing contracts.",
          rights: "This keeps states from acting like independent countries or from arbitrarily destroying people's contractual rights.",
          references: [
            { text: "Home Building & Loan Assn. v. Blaisdell (1934) -- States can temporarily modify contract obligations during emergencies (Great Depression mortgage moratorium).", source: "290 U.S. 398" }
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
          original: "The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years... Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors...",
          translation: "The President holds executive power. Serves a 4-year term. Is chosen by the Electoral College (electors from each state), not by direct popular vote.",
          rights: "The President executes laws -- does not make them. Executive power is meant to be limited to carrying out what Congress decides.",
          examples: [
            "Executive orders have expanded far beyond administrative directives into what critics call 'legislating by pen.' Major policy changes enacted without Congress.",
            "The Electoral College means your vote's weight depends on where you live. A vote in Wyoming counts roughly 3.6 times more than a vote in California for presidential elections."
          ],
          references: [
            { text: "Youngstown Sheet & Tube Co. v. Sawyer (1952) -- President cannot seize private property by executive order even during wartime without Congressional authorization.", source: "343 U.S. 579" }
          ]
        },
        {
          id: "a2s2",
          title: "Section 2: Presidential Powers",
          original: "The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States; he may require the Opinion, in writing, of the principal Officer in each of the executive Departments... and he shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment. He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties... shall nominate, and by and with the Advice and Consent of the Senate, shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court...",
          translation: "The President is the military commander-in-chief, can pardon federal crimes (except impeachment), makes treaties (with Senate approval), and appoints judges, ambassadors, and cabinet officials (with Senate confirmation).",
          rights: "Key checks: treaties need 2/3 Senate approval, appointments need Senate confirmation. The pardon power is nearly unlimited for federal crimes but cannot undo impeachment. The President commands the military but cannot declare war.",
          examples: [
            "The pardon power has no check except impeachment. Presidents can pardon allies, family, or themselves (debated but untested).",
            "Recess appointments let presidents bypass Senate confirmation when Congress isn't in session -- both parties have used and been frustrated by this."
          ],
          references: [
            { text: "Trump v. United States (2024) -- Court ruled presidents have broad immunity for official acts, sparking debate about accountability.", source: "144 S. Ct. 2312" },
            { text: "NLRB v. Noel Canning (2014) -- Limited presidential power to make recess appointments when the Senate claims to be in session.", source: "573 U.S. 513" }
          ]
        },
        {
          id: "a2s4",
          title: "Section 4: Impeachment",
          original: "The President, Vice President and all civil Officers of the United States, shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors.",
          translation: "The President, VP, and all federal officials can be removed from office if impeached (charged by the House) and convicted (by the Senate) of treason, bribery, or other serious offenses.",
          rights: "No one is above the law. Even the President can be fired by the people's representatives for serious misconduct. 'High crimes and misdemeanors' is intentionally broad -- it means whatever Congress decides constitutes an abuse of power.",
          examples: [
            "Three presidents have been impeached by the House (Andrew Johnson, Bill Clinton, Donald Trump twice). None were convicted by the Senate. The 2/3 Senate threshold makes conviction extremely difficult in a partisan environment.",
            "The political nature of impeachment means it functions only when both parties agree misconduct occurred -- which in polarized times may mean it never functions."
          ],
          references: [
            { text: "Nixon v. United States (1993) -- Courts cannot review Senate impeachment trial procedures. Impeachment is purely a political process.", source: "506 U.S. 224" }
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
            "The Constitution doesn't mention judicial review (courts striking down laws as unconstitutional) -- the Supreme Court claimed that power for itself in 1803."
          ],
          references: [
            { text: "Marbury v. Madison (1803) -- The Court asserted the power of judicial review: courts decide what the Constitution means and can strike down laws that violate it.", source: "5 U.S. 137" }
          ]
        },
        {
          id: "a3s2",
          title: "Section 2: Jurisdiction",
          original: "The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made... to Controversies between two or more States;--between a State and Citizens of another State;--between Citizens of different States...",
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
            "Politicians sometimes casually accuse opponents of 'treason' -- the Constitution says that word means something very specific and very narrow.",
            "Only about 30 people have been charged with treason in US history. The narrow definition is a feature, not a bug."
          ],
          references: [
            { text: "Cramer v. United States (1945) -- The 'two witness' requirement is strict. Both witnesses must testify to the same overt act of treason.", source: "325 U.S. 1" }
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
            { text: "Obergefell v. Hodges (2015) -- All states must recognize same-sex marriages performed in any state.", source: "576 U.S. 644" }
          ]
        },
        {
          id: "a4s2",
          title: "Section 2: Privileges and Immunities",
          original: "The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several States.",
          translation: "States cannot discriminate against citizens from other states. If you visit or move to another state, you get the same basic rights as people who live there.",
          rights: "A state cannot treat you as a second-class citizen because you're from somewhere else. There are exceptions (like residency requirements for in-state tuition), but the core rights are portable.",
          references: [
            { text: "Saenz v. Roe (1999) -- New residents of a state get the same welfare benefits as long-term residents.", source: "526 U.S. 489" }
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Amending the Constitution",
      summary: "How to change the Constitution. It's intentionally difficult -- requiring supermajorities at every step.",
      sections: [
        {
          id: "a5",
          title: "The Amendment Process",
          original: "The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as Part of this Constitution, when ratified by the Legislatures of three fourths of the several States, or by Conventions in three fourths thereof...",
          translation: "To change the Constitution: Either 2/3 of Congress proposes an amendment, OR 2/3 of state legislatures call a convention. Then 3/4 of states must ratify it. That's it -- two paths to propose, one threshold to approve.",
          rights: "The Constitution is meant to be hard to change. This protects your rights from being eliminated by a temporary majority. It takes broad, sustained consensus to alter the nation's fundamental law.",
          examples: [
            "Over 11,000 amendments have been proposed in Congress. Only 27 have been ratified. The system works as designed -- fleeting political movements can't easily rewrite fundamental rights.",
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
          original: "This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the Contrary notwithstanding... no religious Test shall ever be required as a Qualification to any Office or public Trust under the United States.",
          translation: "The Constitution is the supreme law. Federal law overrides state law when they conflict. Every official must swear to uphold the Constitution. You cannot be required to follow any religion (or be non-religious) to hold office.",
          rights: "No state can pass a law that contradicts the Constitution or valid federal law. And your religious beliefs (or lack thereof) cannot be used to bar you from public office.",
          examples: [
            "When state laws conflict with federal law, federal wins -- but the federal law must itself be constitutional. Unconstitutional federal laws can be struck down.",
            "Several state constitutions still technically have religious tests for office (barring atheists, for example), but these are unenforceable under the Supremacy Clause.",
            "The oath requirement means officials who undermine the Constitution are violating their sworn duty -- regardless of party."
          ],
          references: [
            { text: "Cooper v. Aaron (1958) -- States cannot nullify Supreme Court decisions or ignore the Constitution.", source: "358 U.S. 1" },
            { text: "Torcaso v. Watkins (1961) -- Religious requirements for public office are unconstitutional.", source: "367 U.S. 488" }
          ]
        }
      ]
    },
    {
      number: 7,
      title: "Ratification",
      summary: "How the Constitution itself was approved -- requiring 9 of the original 13 states.",
      sections: [
        {
          id: "a7",
          title: "Ratification Process",
          original: "The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.",
          translation: "Nine of the thirteen states had to approve this Constitution for it to take effect.",
          rights: "The Constitution was ratified by the people through state conventions -- not by state legislatures or the existing government. It drew its authority directly from citizens.",
          references: [
            { text: "Delaware was first to ratify (Dec 7, 1787). New Hampshire was the 9th, making it official (June 21, 1788). Rhode Island was last (May 29, 1790).", source: "Historical" }
          ]
        }
      ]
    }
  ]
};
