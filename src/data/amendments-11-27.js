export const laterAmendments = {
  title: "Amendments 11-27",
  summary: "The remaining amendments, ratified from 1795 to 1992. These expanded rights, fixed problems, and adapted the Constitution to a changing nation.",
  amendments: [
    {
      number: 11,
      title: "State Sovereign Immunity",
      year: 1795,
      original: "The Judicial power of the United States shall not be construed to extend to any suit in law or equity, commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens or Subjects of any Foreign State.",
      translation: "You can't sue a state in federal court if you're from a different state or a foreign country.",
      rights: "This limits your ability to hold state governments accountable in federal court. States have immunity from many lawsuits unless they consent to be sued.",
      examples: [
        "If a state violates your rights, you often can't sue the state directly -- you have to sue the specific official responsible (a workaround established by later case law).",
        "State universities, agencies, and entities can sometimes avoid lawsuits by claiming sovereign immunity."
      ],
      references: [
        { text: "Ex parte Young (1908) -- You can sue state officials (not the state) for ongoing constitutional violations.", source: "209 U.S. 123" },
        { text: "Alden v. Maine (1999) -- States are immune from private suits in their own courts too, unless they consent.", source: "527 U.S. 706" }
      ]
    },
    {
      number: 12,
      title: "Electoral College Revision",
      year: 1804,
      original: "The Electors shall meet in their respective states and vote by ballot for President and Vice-President, one of whom, at least, shall not be an inhabitant of the same state with themselves; they shall name in their ballots the person voted for as President, and in distinct ballots the person voted for as Vice-President...",
      translation: "The President and Vice President are voted on separately (previously, the runner-up became VP). Electors cast one vote for President and a separate vote for VP.",
      rights: "This fixed a design flaw from the original Constitution that caused chaos in the 1800 election. It established the ticket system we have today.",
      examples: [
        "The Electoral College itself remains controversial -- a candidate can win the popular vote and lose the election, as happened in 2000 and 2016.",
        "Some states are joining the National Popular Vote Interstate Compact to effectively bypass the Electoral College without amending the Constitution."
      ],
      references: [
        { text: "The 1800 election between Jefferson and Burr deadlocked because the old system didn't distinguish between presidential and VP votes.", source: "Historical" },
        { text: "Chiafalo v. Washington (2020) -- States can punish or replace 'faithless electors' who don't vote as pledged.", source: "591 U.S. 578" }
      ]
    },
    {
      number: 13,
      title: "Abolition of Slavery",
      year: 1865,
      original: "Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction. Congress shall have power to enforce this article by appropriate legislation.",
      translation: "Slavery is illegal. Forced labor is illegal. The one exception: people convicted of crimes can be required to work as part of their punishment.",
      rights: "You cannot be owned, and you cannot be forced to work against your will. However, the exception for convicted criminals has significant modern implications.",
      examples: [
        "Prison labor programs pay inmates pennies per hour (sometimes $0.12-0.40/hour) for work that benefits private companies and government operations -- the 'punishment' exception in practice.",
        "Human trafficking remains a form of modern slavery. Despite this amendment, an estimated hundreds of thousands of people are trafficked in the US annually.",
        "Debt bondage and exploitative labor contracts that effectively trap workers (especially undocumented immigrants) echo involuntary servitude."
      ],
      references: [
        { text: "Jones v. Alfred H. Mayer Co. (1968) -- Congress can prohibit private racial discrimination under the 13th Amendment's enforcement power.", source: "392 U.S. 409" },
        { text: "The 13th Amendment exception clause directly enabled convict leasing systems after the Civil War, which some historians consider 'slavery by another name.'", source: "Historical analysis, Douglas Blackmon (2008)" }
      ]
    },
    {
      number: 14,
      title: "Equal Protection and Due Process",
      year: 1868,
      original: "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.",
      translation: "If you're born here or naturalized, you're a citizen. Period. No state can make laws that take away your rights as a citizen. No state can take your life, freedom, or property without fair legal process. No state can deny anyone equal protection under the law.",
      rights: "This is arguably the most important amendment after the Bill of Rights. It (1) defines citizenship, (2) applies the Bill of Rights to STATE governments (not just federal), and (3) requires every person be treated equally under law. Most civil rights protections flow from this amendment.",
      examples: [
        "Before this amendment, states could violate your rights freely because the Bill of Rights only limited the federal government. The 14th changed that.",
        "Qualified immunity allows government officials to violate your rights without personal liability unless the exact violation was 'clearly established' by prior case law -- critics argue this undermines equal protection.",
        "Racial profiling, discriminatory sentencing, and unequal school funding all raise equal protection challenges.",
        "The due process clause has been used to protect rights not explicitly mentioned in the Constitution (substantive due process)."
      ],
      references: [
        { text: "Brown v. Board of Education (1954) -- Racial segregation in public schools violates equal protection.", source: "347 U.S. 483" },
        { text: "Loving v. Virginia (1967) -- Bans on interracial marriage violate equal protection.", source: "388 U.S. 1" },
        { text: "Harlow v. Fitzgerald (1982) -- Established modern qualified immunity doctrine.", source: "457 U.S. 800" }
      ]
    },
    {
      number: 15,
      title: "Right to Vote Regardless of Race",
      year: 1870,
      original: "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.",
      translation: "The government cannot deny your right to vote because of your race or because you or your ancestors were enslaved.",
      rights: "You cannot be turned away from voting because of your race. This seems obvious now, but it took a century of further struggle (poll taxes, literacy tests, intimidation) before it was actually enforced by the Voting Rights Act of 1965.",
      examples: [
        "After this amendment passed, states used poll taxes, literacy tests, grandfather clauses, and outright violence to prevent Black citizens from voting for another 95 years.",
        "Modern voter ID laws, polling place closures in minority neighborhoods, and purges of voter rolls disproportionately affecting minority voters raise questions about new forms of the same old suppression.",
        "Felony disenfranchisement removes voting rights from millions, disproportionately affecting Black Americans due to disparities in the criminal justice system."
      ],
      references: [
        { text: "Shelby County v. Holder (2013) -- Struck down the preclearance formula of the Voting Rights Act, removing federal oversight from states with histories of discrimination.", source: "570 U.S. 529" },
        { text: "Brnovich v. Democratic National Committee (2021) -- Made it harder to challenge voting restrictions under the Voting Rights Act.", source: "594 U.S. 647" }
      ]
    },
    {
      number: 16,
      title: "Income Tax",
      year: 1913,
      original: "The Congress shall have power to lay and collect taxes on incomes, from whatever source derived, without apportionment among the several States, and without regard to any census or enumeration.",
      translation: "Congress can tax your income directly. They don't have to divide the tax equally among states based on population.",
      rights: "This gave the federal government the power to tax individual income. Before this, the federal government relied mainly on tariffs and excise taxes.",
      examples: [
        "The income tax code has grown to over 6,000 pages. Its complexity benefits those who can afford accountants and lawyers to find loopholes.",
        "Wage earners have taxes automatically withheld, while investment income (capital gains) is taxed at lower rates -- the 'income' that gets taxed most aggressively is money from working."
      ],
      references: [
        { text: "Pollock v. Farmers' Loan & Trust Co. (1895) -- The case that struck down a previous income tax and made this amendment necessary.", source: "157 U.S. 429" }
      ]
    },
    {
      number: 17,
      title: "Direct Election of Senators",
      year: 1913,
      original: "The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof, for six years; and each Senator shall have one vote.",
      translation: "Senators are elected directly by the people of their state. Previously, state legislatures chose senators.",
      rights: "You get to vote for your senators directly. This made the Senate accountable to citizens instead of to state politicians.",
      examples: [
        "Some argue this weakened federalism by removing states' direct voice in Congress, while others say it made senators accountable to actual voters.",
        "The massive cost of Senate campaigns means senators often depend heavily on large donors, raising questions about whether direct election truly made them more accountable to regular citizens."
      ],
      references: [
        { text: "Corruption in state legislatures 'buying' Senate seats was a primary motivator. Between 1857 and 1900, three Senate elections were voided due to bribery.", source: "Historical, U.S. Senate records" }
      ]
    },
    {
      number: 18,
      title: "Prohibition of Alcohol",
      year: 1919,
      original: "After one year from the ratification of this article the manufacture, sale, or transportation of intoxicating liquors within, the importation thereof into, or the exportation thereof from the United States and all territory subject to the jurisdiction thereof for beverage purposes is hereby prohibited.",
      translation: "Making, selling, or transporting alcohol is illegal.",
      rights: "This TOOK AWAY a right -- the right to drink. It's the only amendment that restricted personal liberty rather than protecting it. It was repealed 14 years later by the 21st Amendment because it was a disaster.",
      examples: [
        "Prohibition created organized crime, filled prisons, and was selectively enforced (the wealthy still drank). It's a case study in what happens when government tries to regulate personal behavior.",
        "The parallels to the War on Drugs are direct: prohibition of a substance people want creates black markets, violence, mass incarceration, and selective enforcement."
      ],
      references: [
        { text: "Repealed by the 21st Amendment in 1933 after 13 years of widespread lawbreaking, organized crime growth, and enforcement failure.", source: "Historical" }
      ]
    },
    {
      number: 19,
      title: "Women's Right to Vote",
      year: 1920,
      original: "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.",
      translation: "Women can vote. The government cannot deny anyone's vote because of their sex.",
      rights: "Half the population gained full political participation. It took 144 years from the Declaration of Independence for women to get the vote.",
      examples: [
        "Women's suffrage took 72 years of organized activism from Seneca Falls (1848) to ratification. Rights aren't given -- they're won through persistent demand.",
        "Despite the vote, women remain underrepresented in elected office, making up roughly 29% of Congress as of recent years."
      ],
      references: [
        { text: "Minor v. Happersett (1875) -- The shameful case that said citizenship alone didn't guarantee women the right to vote, making this amendment necessary.", source: "88 U.S. 162" }
      ]
    },
    {
      number: 20,
      title: "Presidential Term Dates",
      year: 1933,
      original: "The terms of the President and the Vice President shall end at noon on the 20th day of January, and the terms of Senators and Representatives at noon on the 3d day of January...",
      translation: "The President's term starts and ends on January 20th. Congress starts January 3rd. This eliminated the long 'lame duck' period between election and taking office.",
      rights: "Reduces the time a defeated politician holds power. Gets newly elected officials into office faster so the people's choice takes effect sooner.",
      examples: [
        "The transition period between election (November) and inauguration (January 20) is still over two months -- a period where the outgoing administration can make last-minute policy changes, appointments, and executive orders."
      ],
      references: [
        { text: "Previously, inaugurations were in March -- four months after the election. The 'lame duck' Congress could pass unpopular laws with no electoral accountability.", source: "Historical" }
      ]
    },
    {
      number: 21,
      title: "Repeal of Prohibition",
      year: 1933,
      original: "The eighteenth article of amendment to the Constitution of the United States is hereby repealed.",
      translation: "The 18th Amendment (Prohibition) is canceled. Alcohol is legal again. States can set their own alcohol laws.",
      rights: "This is the only amendment that repeals another amendment. It restored personal liberty and proved that bad amendments CAN be undone. It also delegated alcohol regulation to states.",
      examples: [
        "The existence of this amendment proves the Constitution can correct its own mistakes. If Prohibition could be repealed, any amendment can be -- the Constitution is a living document.",
        "Some argue this precedent should apply to modern drug prohibition, which creates similar problems (black markets, mass incarceration, selective enforcement)."
      ],
      references: [
        { text: "The only amendment ratified by state conventions rather than state legislatures, because the temperance lobby controlled many legislatures.", source: "Historical" }
      ]
    },
    {
      number: 22,
      title: "Presidential Term Limits",
      year: 1951,
      original: "No person shall be elected to the office of the President more than twice, and no person who has held the office of President, or acted as President, for more than two years of a term to which some other person was elected President shall be elected to the office of President more than once.",
      translation: "No one can be President for more than two terms (8 years). If you served more than 2 years of someone else's term, you can only be elected once yourself.",
      rights: "This prevents any one person from holding presidential power indefinitely. It's a structural protection against authoritarianism.",
      examples: [
        "FDR won four terms before this amendment passed. The country decided that no matter how popular a president is, concentrated power for too long is dangerous.",
        "There is no equivalent term limit for Congress, where some members serve 30-40+ years, accumulating enormous power with little accountability."
      ],
      references: [
        { text: "George Washington voluntarily stepped down after two terms, setting a precedent that lasted 150 years until FDR broke it.", source: "Historical" }
      ]
    },
    {
      number: 23,
      title: "D.C. Electoral Votes",
      year: 1961,
      original: "The District constituting the seat of Government of the United States shall appoint in such manner as the Congress may direct: A number of electors of President and Vice President equal to the whole number of Senators and Representatives in Congress to which the District would be entitled if it were a State, but in no event more than the least populous State...",
      translation: "Washington D.C. residents get electoral votes for President (3 votes). Before this, D.C. residents had no voice in presidential elections at all.",
      rights: "Over 700,000 American citizens living in D.C. can now vote for President. However, they still have no voting representation in Congress.",
      examples: [
        "D.C. residents pay federal taxes, serve in the military, and follow federal laws -- but have no voting senators or representatives. Their license plates read 'Taxation Without Representation.'",
        "D.C. statehood has been proposed repeatedly to give these citizens full representation, but remains politically contentious."
      ],
      references: [
        { text: "Adams v. Clinton (2000) -- Court ruled D.C. residents have no constitutional right to voting representation in Congress.", source: "90 F. Supp. 2d 35" }
      ]
    },
    {
      number: 24,
      title: "Abolition of Poll Taxes",
      year: 1964,
      original: "The right of citizens of the United States to vote in any primary or other election for President or Vice President, for electors for President or Vice President, or for Senator or Representative in Congress, shall not be denied or abridged by the United States or any State by reason of failure to pay any poll tax or other tax.",
      translation: "You cannot be charged money to vote. No poll taxes, period.",
      rights: "Voting is free. The government cannot put a price tag on your right to participate in democracy. This eliminated a tool used primarily to prevent poor people and Black citizens from voting.",
      examples: [
        "Modern equivalents: requiring paid ID documents to vote, closing DMV offices in minority areas, making it expensive or time-consuming to obtain required identification.",
        "Court fees, fines, and restitution requirements that must be paid before voting rights are restored for former felons function as modern poll taxes."
      ],
      references: [
        { text: "Harper v. Virginia Board of Elections (1966) -- Extended the poll tax ban to state and local elections under the Equal Protection Clause.", source: "383 U.S. 663" },
        { text: "Jones v. Governor of Florida (2020) -- Court upheld requiring payment of all fines/fees before felons can vote, which critics called a modern poll tax.", source: "975 F.3d 1016" }
      ]
    },
    {
      number: 25,
      title: "Presidential Succession",
      year: 1967,
      original: "In case of the removal of the President from office or of his death or resignation, the Vice President shall become President. Whenever there is a vacancy in the office of the Vice President, the President shall nominate a Vice President who shall take office upon confirmation by a majority vote of both Houses of Congress...",
      translation: "If the President dies, resigns, or is removed: the VP becomes President. If the VP slot is empty, the President picks a new one (confirmed by Congress). If the President is temporarily unable to serve, the VP takes over until they can.",
      rights: "This ensures there's always a clear line of succession and a process for handling an incapacitated president. It prevents power vacuums and ambiguity.",
      examples: [
        "Section 4 (involuntary removal of an incapacitated president) has never been successfully invoked. The threshold -- VP plus a majority of the cabinet -- makes it nearly impossible in practice.",
        "Gerald Ford became VP (then President) without ever being elected to either office, using Section 2 of this amendment."
      ],
      references: [
        { text: "Used when Nixon resigned (1974): Ford became President, then nominated Rockefeller as VP.", source: "Historical" },
        { text: "Section 3 has been invoked for presidential medical procedures (colonoscopies, surgeries) -- temporary transfers to VP.", source: "Historical" }
      ]
    },
    {
      number: 26,
      title: "Voting Age Lowered to 18",
      year: 1971,
      original: "The right of citizens of the United States, who are eighteen years of age or older, to vote shall not be denied or abridged by the United States or by any State on account of age.",
      translation: "If you're 18 or older, you can vote. No government can deny your vote because of your age.",
      rights: "If you're old enough to be drafted and sent to war, you're old enough to vote on whether there should be a war. This was a direct response to the Vietnam War draft.",
      examples: [
        "The argument 'old enough to fight, old enough to vote' is straightforward. Yet 18-year-olds can vote and be sent to war but can't buy alcohol (21) or rent a car (25) in most places.",
        "Youth voter turnout remains significantly lower than older demographics, meaning this right is underutilized by the people who fought to get it."
      ],
      references: [
        { text: "Oregon v. Mitchell (1970) -- Court ruled Congress could set voting age for federal elections but not state elections, forcing this amendment.", source: "400 U.S. 112" }
      ]
    },
    {
      number: 27,
      title: "Congressional Pay",
      year: 1992,
      original: "No law, varying the compensation for the services of the Senators and Representatives, shall take effect, until an election of Representatives shall have intervened.",
      translation: "Congress can't give itself a raise that takes effect immediately. Any pay change doesn't kick in until after the next election, so voters can weigh in first.",
      rights: "You get a say before your representatives get a pay raise. They can't vote themselves more money and pocket it before you can vote them out.",
      examples: [
        "This was originally proposed in 1789 and not ratified until 1992 -- 203 years later. A college student (Gregory Watson) noticed it had no expiration date and campaigned for ratification.",
        "Congress has found workarounds: automatic cost-of-living adjustments (COLAs) that increase pay without a formal 'vote' on a raise, though Congress has blocked these in many recent years."
      ],
      references: [
        { text: "Originally proposed by James Madison in 1789 as part of the original Bill of Rights. It was one of the two amendments not ratified at the time (the other, about Congressional apportionment, still isn't).", source: "Historical" }
      ]
    }
  ]
};
