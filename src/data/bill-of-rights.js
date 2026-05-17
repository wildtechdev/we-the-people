export const billOfRights = {
  title: "The Bill of Rights",
  date: "Ratified December 15, 1791",
  summary: "The first 10 amendments. These are your core personal rights, specifically the things the government is forbidden from doing to you.",
  amendments: [
    {
      number: 1,
      title: "Freedom of Religion, Speech, Press, Assembly, and Petition",
      original: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
      translation: "The government cannot: create an official religion, stop you from practicing yours, silence your speech, censor the press, prevent you from gathering peacefully, or punish you for demanding they fix problems.",
      rights: "This is five rights in one amendment. You can believe what you want, say what you want, publish what you want, gather with whoever you want, and complain to the government, and they cannot stop you.",
      examples: [
        "Free speech zones that push protesters miles from events they're protesting effectively neutralize the right to assemble where it matters.",
        "When government pressures social media companies to remove content, that can be state action restricting speech even though a private company does the actual censoring.",
        "Requiring permits and fees to protest is legal in limited cases, but when the process is slow, expensive, or selectively enforced, it becomes a barrier to the right itself.",
        "Journalist shield laws vary by state. Some states offer no protection for reporters to keep sources confidential, chilling press freedom."
      ],
      references: [
        { text: "Tinker v. Des Moines (1969). Students don't lose free speech rights at the school door.", source: "393 U.S. 503" },
        { text: "New York Times v. Sullivan (1964). Press can criticize public officials without fear of lawsuits unless there's 'actual malice.'", source: "376 U.S. 254" },
        { text: "Engel v. Vitale (1962). Government-sponsored prayer in public schools violates the Establishment Clause.", source: "370 U.S. 421" },
        { text: "Murthy v. Missouri (2024). Court examined when government communication with platforms becomes unconstitutional coercion.", source: "144 S. Ct. 1972" }
      ]
    },
    {
      number: 2,
      title: "Right to Bear Arms",
      original: "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
      translation: "Because a trained armed citizenry is necessary for a free country to stay free, the people's right to own and carry weapons cannot be violated.",
      rights: "Individual citizens have the right to own firearms. This exists so the people always retain the physical ability to defend themselves, whether against criminals, invaders, or a tyrannical government.",
      examples: [
        "Red flag laws allow courts to temporarily seize firearms without a criminal conviction, raising due process concerns.",
        "May-issue permit systems where officials have discretion to deny carry permits can result in unequal application. Connected people get permits, and regular citizens don't.",
        "The Hughes Amendment (1986) banned civilian ownership of new machine guns, effectively making existing ones cost tens of thousands of dollars and pricing out regular citizens from a class of arms.",
        "Some jurisdictions require registration, waiting periods, or special licenses that create barriers especially for low-income individuals in high-crime areas who need protection most."
      ],
      references: [
        { text: "District of Columbia v. Heller (2008). The Second Amendment protects an individual right to own firearms unconnected to militia service.", source: "554 U.S. 570" },
        { text: "McDonald v. City of Chicago (2010). This individual right applies to state and local governments too, not just federal.", source: "561 U.S. 742" },
        { text: "New York State Rifle & Pistol Assn. v. Bruen (2022). Carry permits cannot require showing 'special need.' The right extends outside the home.", source: "597 U.S. 1" }
      ]
    },
    {
      number: 3,
      title: "Quartering of Soldiers",
      original: "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.",
      translation: "The government cannot force you to house soldiers in your home during peacetime. Even during war, they can only do it if a law specifically allows it.",
      rights: "Your home is yours. The military cannot commandeer it. This also establishes the broader principle that your private property and domestic privacy are protected from government intrusion.",
      examples: [
        "While literally quartering soldiers is rare today, courts have applied this principle's spirit to cases where police commandeered private homes as tactical positions during operations.",
        "The broader privacy-of-the-home principle from this amendment reinforces the 4th Amendment's protections."
      ],
      references: [
        { text: "Mitchell v. City of Henderson (2015). Court considered whether police taking over a home for a stakeout violated the Third Amendment.", source: "No. 2:13-cv-01154 (D. Nev.)" },
        { text: "Engblom v. Carey (1982). Third Amendment applies to state governments and protects tenants, not just homeowners.", source: "677 F.2d 957" }
      ]
    },
    {
      number: 4,
      title: "Search and Seizure",
      original: "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.",
      translation: "You have the right to be left alone. The government cannot search you, your home, your belongings, or your documents without a good reason. To get a warrant, they must swear under oath that they have probable cause AND specifically describe what they're looking for and where.",
      rights: "This means: police need a warrant (with rare exceptions). That warrant must be specific, with no fishing expeditions. And the standard is probable cause, meaning actual evidence suggesting a crime, not just a hunch.",
      examples: [
        "Mass surveillance programs that collect everyone's phone records, emails, and internet activity without individual warrants violate the spirit of this amendment because they're the definition of a general search.",
        "Police using cell-site location data to track your movements without a warrant was ruled unconstitutional in Carpenter v. United States.",
        "Drug-sniffing dogs at traffic stops, if they extend the stop beyond its original purpose without reasonable suspicion, violate the 4th Amendment.",
        "Civil asset forfeiture seizes property without a criminal conviction. The government takes first, and you have to prove your innocence to get it back."
      ],
      references: [
        { text: "Carpenter v. United States (2018). Police need a warrant to access cell phone location records.", source: "585 U.S. 296" },
        { text: "Riley v. California (2014). Police need a warrant to search your cell phone, even during an arrest.", source: "573 U.S. 373" },
        { text: "Katz v. United States (1967). The 4th Amendment protects people, not places. Wiretapping is a search.", source: "389 U.S. 347" },
        { text: "Rodriguez v. United States (2015). Police cannot extend a traffic stop to wait for a drug-sniffing dog without reasonable suspicion.", source: "575 U.S. 348" }
      ]
    },
    {
      number: 5,
      title: "Rights of the Accused",
      original: "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.",
      translation: "For serious crimes, a grand jury must indict you first. You can't be tried twice for the same crime. You can't be forced to testify against yourself. You can't lose your life, freedom, or property without fair legal proceedings. If the government takes your property for public use, they must pay you fairly for it.",
      rights: "Five protections in one: (1) Grand jury requirement, (2) No double jeopardy, (3) Right to remain silent, (4) Due process, (5) Fair payment if government takes your property. These exist because without them, government can destroy your life through legal process alone.",
      examples: [
        "Eminent domain abuse: governments seize private homes and give the land to private developers for 'economic development,' paying below market value.",
        "Civil asset forfeiture bypasses due process because your property is 'charged' (not you), so criminal protections don't apply. The case is literally 'United States v. $35,000 in Currency.'",
        "Plea bargaining pressures innocent people to plead guilty. When facing decades in prison at trial vs. months with a plea, even innocent people take the deal, which undermines the grand jury protection.",
        "The 'right to remain silent' is undermined when prosecutors tell juries to draw negative inferences from a defendant choosing not to testify."
      ],
      references: [
        { text: "Miranda v. Arizona (1966). You must be told of your right to remain silent before custodial interrogation.", source: "384 U.S. 436" },
        { text: "Kelo v. City of New London (2005). Court controversially allowed eminent domain for private economic development.", source: "545 U.S. 469" },
        { text: "Gamble v. United States (2019). Separate sovereigns (state + federal) can both prosecute for the same act without violating double jeopardy.", source: "587 U.S. 678" }
      ]
    },
    {
      number: 6,
      title: "Right to a Fair Trial",
      original: "In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.",
      translation: "If you're charged with a crime, you get: a fast trial (no rotting in jail waiting), a public trial (no secret courts), a local jury of regular people, to know exactly what you're charged with, to face your accusers directly, to force witnesses to testify for you, and a lawyer, even if you can't afford one.",
      rights: "The government cannot lock you in a cage and forget about you. They must charge you, try you quickly, let you defend yourself, and do it all in the open where the public can watch.",
      examples: [
        "People sit in jail for months or years awaiting trial because they can't afford bail, violating 'speedy trial' in practice even if not technically in law.",
        "Public defenders often carry 500+ cases at once, making meaningful defense nearly impossible for poor defendants. Having a lawyer on paper isn't the same as having effective counsel.",
        "Secret evidence and classified proceedings (especially in national security cases) can prevent defendants from confronting their accusers or even knowing the full case against them.",
        "Venue changes for high-profile cases can move trials far from the community, weakening the 'local jury' protection."
      ],
      references: [
        { text: "Gideon v. Wainwright (1963). If you can't afford a lawyer, the state must provide one for any charge that could result in jail time.", source: "372 U.S. 335" },
        { text: "Barker v. Wingo (1972). Established a balancing test for speedy trial violations.", source: "407 U.S. 514" },
        { text: "Crawford v. Washington (2004). Testimonial statements of witnesses absent from trial are inadmissible unless the defendant had a prior opportunity to cross-examine.", source: "541 U.S. 36" }
      ]
    },
    {
      number: 7,
      title: "Right to Jury Trial in Civil Cases",
      original: "In Suits at common law, where the value in controversy shall exceed twenty dollars, no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.",
      translation: "In civil lawsuits over $20 (any meaningful amount), you have the right to a jury trial. Once a jury decides the facts, no judge can just overturn their findings.",
      rights: "This means regular citizens, not just judges, decide disputes. It keeps powerful parties (corporations, government) from having cases decided solely by officials who might favor them.",
      examples: [
        "Mandatory arbitration clauses in employment contracts, credit cards, and terms of service force you to give up your jury trial right before a dispute even happens.",
        "When you click 'I agree' on most apps and services, you're often waiving your 7th Amendment right without realizing it.",
        "Class action waivers combined with arbitration clauses can make it economically impossible to pursue valid claims because you can't join together, and individual arbitration costs more than the claim is worth."
      ],
      references: [
        { text: "Epic Systems Corp. v. Lewis (2018). Upheld mandatory arbitration clauses that waive class action rights in employment agreements.", source: "584 U.S. 497" },
        { text: "AT&T Mobility v. Concepcion (2011). Companies can enforce arbitration clauses that prohibit class actions.", source: "563 U.S. 333" }
      ]
    },
    {
      number: 8,
      title: "Cruel and Unusual Punishment",
      original: "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.",
      translation: "Bail can't be set impossibly high. Fines can't be excessive. Punishments can't be cruel or unusual.",
      rights: "Three protections: (1) Bail must be affordable enough to actually function, (2) Fines must be proportional to the offense, (3) Punishment cannot be barbaric or grossly disproportionate to the crime.",
      examples: [
        "Cash bail systems that keep poor people in jail for minor offenses while wealthy people charged with the same crime go free. That's excessive bail applied by economic class.",
        "Municipalities that fund their budgets through aggressive fines and fees on residents (traffic tickets, court costs, late fees on fines) are effectively using the justice system as a revenue source.",
        "Life without parole for non-violent drug offenses raises proportionality questions.",
        "Solitary confinement for extended periods has been recognized internationally as torture, yet remains common in American prisons."
      ],
      references: [
        { text: "Timbs v. Indiana (2019). The Excessive Fines Clause applies to states. A $42,000 vehicle seizure for a $10,000 drug offense was potentially excessive.", source: "586 U.S. 146" },
        { text: "DOJ Ferguson Report (2015). Documented how Ferguson, MO used police and courts as revenue generators, imposing crushing fines on poor residents.", source: "U.S. Department of Justice, Civil Rights Division" },
        { text: "Graham v. Florida (2010). Life without parole for juveniles in non-homicide cases is cruel and unusual.", source: "560 U.S. 48" }
      ]
    },
    {
      number: 9,
      title: "Rights Retained by the People",
      original: "The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.",
      translation: "Just because a right isn't specifically listed here doesn't mean you don't have it. This list isn't complete, and you have more rights than what's written down.",
      rights: "This is huge. The government cannot say 'well, the Constitution doesn't specifically mention X, so you don't have that right.' Your rights are not limited to what's in this document.",
      examples: [
        "The right to privacy isn't explicitly in the Constitution, but the 9th Amendment (along with others) supports its existence.",
        "The right to travel between states, the right to vote (originally), the right to raise your children as you see fit: none are explicitly listed, yet all are protected.",
        "When government claims a new technology means you have 'no expectation of privacy,' the 9th Amendment pushes back: new technology doesn't erase old rights."
      ],
      references: [
        { text: "Griswold v. Connecticut (1965). Justice Goldberg's concurrence used the 9th Amendment to support the right to marital privacy.", source: "381 U.S. 479" },
        { text: "Richmond Newspapers v. Virginia (1980). The right of public access to criminal trials, though unlisted, is protected.", source: "448 U.S. 555" }
      ]
    },
    {
      number: 10,
      title: "Powers Reserved to the States and People",
      original: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.",
      translation: "If the Constitution doesn't specifically give a power to the federal government, that power belongs to the states or to the people. The federal government only has the powers listed here and nothing more.",
      rights: "The federal government has LIMITED, DEFINED powers. Everything else stays with states or individuals. This is supposed to prevent federal overreach into areas the Constitution never authorized.",
      examples: [
        "The federal government uses the Commerce Clause to regulate far beyond what 'commerce among the states' originally meant, effectively bypassing the 10th Amendment's limits.",
        "Federal funding conditions (such as 'do what we say or lose highway money') pressure states into compliance with federal wishes on matters reserved to the states.",
        "Education, healthcare, housing, and many other areas were historically state matters. Federal involvement in these areas is constitutionally justified through broad readings of the Commerce and Spending clauses."
      ],
      references: [
        { text: "United States v. Lopez (1995). Court struck down a federal gun law because it wasn't truly about interstate commerce. Rare modern limit on Commerce Clause expansion.", source: "514 U.S. 549" },
        { text: "National Federation of Independent Business v. Sebelius (2012). States cannot be coerced into expanding Medicaid by threatening existing funding.", source: "567 U.S. 519" },
        { text: "Printz v. United States (1997). Federal government cannot commandeer state officials to enforce federal law.", source: "521 U.S. 898" }
      ]
    }
  ]
};
