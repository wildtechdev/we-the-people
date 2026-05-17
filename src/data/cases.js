// Landmark court cases referenced throughout the app.
// Each case has a summary, key facts, and a link to official records.

export const cases = {
  "Miranda v. Arizona (1966)": {
    name: "Miranda v. Arizona",
    year: 1966,
    citation: "384 U.S. 436",
    amendment: "5th",
    summary: "The Supreme Court ruled that police must inform suspects of their rights before custodial interrogation. Ernesto Miranda confessed to kidnapping and rape without being told he could remain silent or have an attorney. The Court held that the 5th Amendment's protection against self-incrimination requires what we now call 'Miranda warnings' before any questioning in custody.",
    outcome: "Confession thrown out. Miranda was retried without the confession and convicted on other evidence.",
    significance: "Created the Miranda warnings that police must read to anyone they arrest: the right to remain silent, that anything said can be used against them, the right to an attorney, and the right to a court-appointed attorney if they cannot afford one.",
    url: "https://supreme.justia.com/cases/federal/us/384/436/"
  },
  "Riley v. California (2014)": {
    name: "Riley v. California",
    year: 2014,
    citation: "573 U.S. 373",
    amendment: "4th",
    summary: "The Supreme Court unanimously held that police must obtain a warrant before searching the digital contents of a cell phone seized during an arrest. David Riley was pulled over for expired tags and police searched his smartphone without a warrant, finding evidence linking him to a shooting. The Court recognized that cell phones contain vast amounts of personal data far beyond what could be found in a physical search.",
    outcome: "Evidence from the warrantless phone search was suppressed.",
    significance: "Established that digital privacy is constitutionally protected. The Court noted that modern cell phones are 'such a pervasive and insistent part of daily life that the proverbial visitor from Mars might conclude they were an important feature of human anatomy.'",
    url: "https://supreme.justia.com/cases/federal/us/573/373/"
  },
  "Rodriguez v. United States (2015)": {
    name: "Rodriguez v. United States",
    year: 2015,
    citation: "575 U.S. 348",
    amendment: "4th",
    summary: "The Supreme Court ruled that police cannot extend a completed traffic stop even briefly to conduct a dog sniff without reasonable suspicion of criminal activity. Dennys Rodriguez was stopped for driving on a highway shoulder. After the officer completed the traffic stop, he detained Rodriguez for 7-8 additional minutes to wait for a drug-sniffing dog, which found methamphetamine.",
    outcome: "The extended detention was ruled unconstitutional. Evidence suppressed.",
    significance: "Set a firm rule: a traffic stop that is 'prolonged beyond the time reasonably required' to handle the traffic violation violates the 4th Amendment unless the officer has independent reasonable suspicion.",
    url: "https://supreme.justia.com/cases/federal/us/575/348/"
  },
  "Glik v. Cunniffe (2011)": {
    name: "Glik v. Cunniffe",
    year: 2011,
    citation: "655 F.3d 78 (1st Cir.)",
    amendment: "1st",
    summary: "Simon Glik used his cell phone to record Boston police officers arresting a man on the Boston Common. Officers arrested Glik for illegal wiretapping. The First Circuit Court of Appeals ruled that the First Amendment protects the right of private citizens to record police officers performing their duties in public spaces.",
    outcome: "Glik's arrest was ruled unconstitutional. The court awarded him damages.",
    significance: "Firmly established the constitutional right to record police in public. The court stated this right is 'clearly established' and that citizens have 'the right to film government officials, including law enforcement officers, in the discharge of their duties in a public space.'",
    url: "https://law.justia.com/cases/federal/appellate-courts/ca1/10-1764/10-1764-2011-08-26.html"
  },
  "Gideon v. Wainwright (1963)": {
    name: "Gideon v. Wainwright",
    year: 1963,
    citation: "372 U.S. 335",
    amendment: "6th",
    summary: "Clarence Earl Gideon was charged with breaking and entering a pool hall in Florida. Too poor to afford a lawyer, he asked the court to appoint one. The judge refused, as Florida law only provided free counsel in capital cases. Gideon represented himself and was convicted. He handwrote a petition to the Supreme Court from prison, and the Court unanimously ruled that states must provide attorneys to defendants who cannot afford them.",
    outcome: "Gideon was retried with a lawyer and acquitted.",
    significance: "Established the absolute right to counsel in criminal cases. The Court declared that 'any person hauled into court, who is too poor to hire a lawyer, cannot be assured a fair trial unless counsel is provided for him.'",
    url: "https://supreme.justia.com/cases/federal/us/372/335/"
  },
  "Chimel v. California (1969)": {
    name: "Chimel v. California",
    year: 1969,
    citation: "395 U.S. 752",
    amendment: "4th",
    summary: "Police arrested Ted Chimel at his home for burglary and then conducted a warrantless search of his entire house, finding stolen coins. The Supreme Court ruled that a search 'incident to arrest' is limited to the person and the area within their immediate control -- not their entire home.",
    outcome: "The evidence from the broader home search was suppressed.",
    significance: "Defined the scope of searches during arrest: police can search the person and the area within 'arm's reach' for weapons or evidence that might be destroyed, but anything beyond that requires a warrant.",
    url: "https://supreme.justia.com/cases/federal/us/395/752/"
  },
  "Stack v. Boyle (1951)": {
    name: "Stack v. Boyle",
    year: 1951,
    citation: "342 U.S. 1",
    amendment: "8th",
    summary: "Twelve Communist Party leaders were arrested under the Smith Act and bail was set at $50,000 each (equivalent to roughly $600,000 today). The Supreme Court ruled that bail set higher than what is reasonably necessary to ensure the defendant appears at trial is 'excessive' under the 8th Amendment.",
    outcome: "The excessive bail amounts were struck down.",
    significance: "Established the standard for bail: it must be set at an amount reasonably calculated to ensure the defendant's presence at trial, not as a form of punishment. The right to bail before trial is fundamental to the presumption of innocence.",
    url: "https://supreme.justia.com/cases/federal/us/342/1/"
  },
  "Barker v. Wingo (1972)": {
    name: "Barker v. Wingo",
    year: 1972,
    citation: "407 U.S. 514",
    amendment: "6th",
    summary: "Willie Barker's trial was delayed over 5 years through 16 continuances by the prosecution. The Supreme Court created a four-part balancing test to determine if the right to a speedy trial has been violated: length of delay, reason for delay, whether the defendant asserted the right, and prejudice to the defendant.",
    outcome: "Despite the extreme delay, the Court found no violation because Barker had not objected to most continuances.",
    significance: "Created the framework courts still use today to evaluate speedy trial claims. Made clear that the right to a speedy trial is fundamental but must be evaluated case by case.",
    url: "https://supreme.justia.com/cases/federal/us/407/514/"
  },
  "Brown v. Mississippi (1936)": {
    name: "Brown v. Mississippi",
    year: 1936,
    citation: "297 U.S. 278",
    amendment: "5th",
    summary: "Three Black men were tortured by sheriff's deputies until they confessed to murder. One was hung from a tree and whipped; the others were beaten severely. The Supreme Court reversed their convictions, ruling that confessions obtained through torture and physical brutality violate due process.",
    outcome: "Convictions reversed. The confessions were deemed involuntary and inadmissible.",
    significance: "The first case where the Supreme Court applied the Due Process Clause to bar coerced confessions in state courts. Established that the Constitution forbids convictions based on confessions extracted by violence.",
    url: "https://supreme.justia.com/cases/federal/us/297/278/"
  },
  "Hague v. CIO (1939)": {
    name: "Hague v. CIO",
    year: 1939,
    citation: "307 U.S. 496",
    amendment: "1st",
    summary: "Mayor Frank Hague of Jersey City banned labor union meetings and expelled union organizers from the city. The Supreme Court struck down the ban, establishing that public streets, sidewalks, and parks are traditional public forums where citizens have a right to assemble and speak.",
    outcome: "The city's restrictions on assembly were struck down as unconstitutional.",
    significance: "Created the 'public forum doctrine' -- the principle that government-owned public spaces like streets, parks, and sidewalks are places where people have a constitutional right to gather and express themselves.",
    url: "https://supreme.justia.com/cases/federal/us/307/496/"
  },
  "Police Dept. of Chicago v. Mosley (1972)": {
    name: "Police Dept. of Chicago v. Mosley",
    year: 1972,
    citation: "408 U.S. 92",
    amendment: "14th",
    summary: "Chicago banned all picketing near schools except for labor picketing. Earl Mosley, who had been peacefully protesting racial discrimination at a school, was prohibited from continuing. The Supreme Court ruled that the government cannot discriminate between types of speech based on content.",
    outcome: "The discriminatory ordinance was struck down.",
    significance: "Established the principle of content neutrality in free speech law. The government cannot favor certain messages over others. As the Court stated: 'above all else, the First Amendment means that government has no power to restrict expression because of its message.'",
    url: "https://supreme.justia.com/cases/federal/us/408/92/"
  },
  "Forsyth County v. Nationalist Movement (1992)": {
    name: "Forsyth County v. Nationalist Movement",
    year: 1992,
    citation: "505 U.S. 123",
    amendment: "1st",
    summary: "Forsyth County, Georgia charged variable permit fees for demonstrations based on the anticipated cost of maintaining public order. Groups expected to attract hostile counter-protesters were charged more. The Supreme Court ruled that the government cannot charge more for permits based on the content of the speech or the anticipated hostile reaction of the audience.",
    outcome: "The variable fee system was struck down as unconstitutional.",
    significance: "Reinforced the 'heckler's veto' principle: the government cannot silence a speaker because the audience disagrees with the message. The cost of protecting unpopular speech falls on the government, not the speaker.",
    url: "https://supreme.justia.com/cases/federal/us/505/123/"
  },
  "Carpenter v. United States (2018)": {
    name: "Carpenter v. United States",
    year: 2018,
    citation: "585 U.S. 296",
    amendment: "4th",
    summary: "The FBI obtained 127 days of historical cell-site location information from Timothy Carpenter's wireless carrier without a warrant, tracking his movements in connection with a series of robberies. The Supreme Court ruled 5-4 that obtaining this type of detailed location data constitutes a search under the 4th Amendment and requires a warrant.",
    outcome: "The warrantless collection of cell-site location data was ruled unconstitutional.",
    significance: "Extended 4th Amendment protections into the digital age. The Court recognized that cell phone location data provides an 'intimate window into a person's life' and that people do not voluntarily give up their privacy simply by using a cell phone.",
    url: "https://supreme.justia.com/cases/federal/us/585/296/"
  },
  "Packingham v. North Carolina (2017)": {
    name: "Packingham v. North Carolina",
    year: 2017,
    citation: "582 U.S. 98",
    amendment: "1st",
    summary: "North Carolina made it a felony for registered sex offenders to access social media sites. Lester Packingham was convicted under the law for posting on Facebook about a dismissed traffic ticket. The Supreme Court unanimously struck down the law, declaring social media to be a protected space for free speech.",
    outcome: "The social media ban was struck down as unconstitutional.",
    significance: "The Court called the internet and social media 'the most important places for the exchange of views' and compared them to public streets and parks. Even for convicted sex offenders, a blanket ban on social media is too broad.",
    url: "https://supreme.justia.com/cases/federal/us/582/98/"
  },
  "United States v. Warshak (2010)": {
    name: "United States v. Warshak",
    year: 2010,
    citation: "631 F.3d 266 (6th Cir.)",
    amendment: "4th",
    summary: "The government obtained tens of thousands of Steven Warshak's emails from his ISP without a warrant, using only a subpoena under the Stored Communications Act. The Sixth Circuit ruled that email users have a reasonable expectation of privacy in the contents of their emails, and the government needs a warrant to compel an ISP to turn them over.",
    outcome: "The warrantless email seizure was ruled unconstitutional, though the conviction was upheld on other grounds.",
    significance: "Extended 4th Amendment protections to email. The court recognized that email is the modern equivalent of traditional mail and deserves the same constitutional protection.",
    url: "https://law.justia.com/cases/federal/appellate-courts/ca6/08-3997/08-3997-2010-12-14.html"
  },
  "McIntyre v. Ohio Elections Commission (1995)": {
    name: "McIntyre v. Ohio Elections Commission",
    year: 1995,
    citation: "514 U.S. 334",
    amendment: "1st",
    summary: "Margaret McIntyre distributed anonymous leaflets opposing a proposed school tax levy. Ohio law required all campaign literature to include the name and address of the person issuing it. The Supreme Court struck down the law, holding that anonymous political speech is protected by the First Amendment.",
    outcome: "The identification requirement was struck down as unconstitutional.",
    significance: "Protected the right to speak anonymously, a tradition dating to the Founding Fathers who wrote the Federalist Papers under pseudonyms. The Court stated: 'Anonymity is a shield from the tyranny of the majority.'",
    url: "https://supreme.justia.com/cases/federal/us/514/334/"
  },
  "Brandenburg v. Ohio (1969)": {
    name: "Brandenburg v. Ohio",
    year: 1969,
    citation: "395 U.S. 444",
    amendment: "1st",
    summary: "Clarence Brandenburg, a Ku Klux Klan leader in Ohio, was convicted under a state law for advocating violence at a KKK rally. The Supreme Court reversed his conviction and established the modern standard for when the government can punish speech advocating illegal action: only when the speech is 'directed to inciting or producing imminent lawless action and is likely to incite or produce such action.'",
    outcome: "Conviction reversed. The Ohio criminal syndicalism law was struck down.",
    significance: "Created the 'imminent lawless action' test that remains the standard today. Mere advocacy of illegal action is protected speech; only speech intended and likely to cause immediate illegal action can be punished.",
    url: "https://supreme.justia.com/cases/federal/us/395/444/"
  },
  "Texas v. Johnson (1989)": {
    name: "Texas v. Johnson",
    year: 1989,
    citation: "491 U.S. 397",
    amendment: "1st",
    summary: "Gregory Lee Johnson burned an American flag outside the 1984 Republican National Convention in Dallas to protest Reagan administration policies. He was convicted under Texas law for desecrating a venerated object. The Supreme Court ruled 5-4 that flag burning is protected symbolic speech under the First Amendment.",
    outcome: "Johnson's conviction was overturned.",
    significance: "Established that the government cannot prohibit expression simply because it finds the message disagreeable. Justice Brennan wrote: 'If there is a bedrock principle underlying the First Amendment, it is that the government may not prohibit the expression of an idea simply because society finds the idea itself offensive or disagreeable.'",
    url: "https://supreme.justia.com/cases/federal/us/491/397/"
  },
  "Central Hudson Gas v. Public Service Commission (1980)": {
    name: "Central Hudson Gas v. Public Service Commission",
    year: 1980,
    citation: "447 U.S. 557",
    amendment: "1st",
    summary: "During the 1973 energy crisis, New York banned promotional advertising by electric utilities. Central Hudson Gas challenged the ban. The Supreme Court created a four-part test for commercial speech: the speech must concern lawful activity and not be misleading; the government interest must be substantial; the regulation must directly advance that interest; and it must be no more extensive than necessary.",
    outcome: "The advertising ban was struck down as unconstitutional.",
    significance: "Established the framework for commercial speech protection. While commercial speech gets less protection than political speech, the government still needs a good reason and a narrow approach to restrict it.",
    url: "https://supreme.justia.com/cases/federal/us/447/557/"
  },
  "New York Times Co. v. United States (1971)": {
    name: "New York Times Co. v. United States",
    year: 1971,
    citation: "403 U.S. 713",
    amendment: "1st",
    summary: "The Nixon administration sought to prevent the New York Times and Washington Post from publishing the Pentagon Papers, a classified study of the Vietnam War that revealed the government had misled the public. The Supreme Court ruled 6-3 that the government could not impose 'prior restraint' on publication, even of classified material, without meeting an extremely heavy burden.",
    outcome: "The newspapers were allowed to publish the Pentagon Papers.",
    significance: "Established an extremely high bar for government censorship before publication. The case is the cornerstone of press freedom in America and confirmed that the press serves as a check on government power.",
    url: "https://supreme.justia.com/cases/federal/us/403/713/"
  },
  "Kelo v. City of New London (2005)": {
    name: "Kelo v. City of New London",
    year: 2005,
    citation: "545 U.S. 469",
    amendment: "5th",
    summary: "The city of New London, Connecticut used eminent domain to take Susette Kelo's home to make way for a private economic development project, including a Pfizer research facility. The Supreme Court controversially ruled 5-4 that 'public use' in the 5th Amendment includes economic development, even when property is transferred to private developers.",
    outcome: "The taking was upheld. Kelo lost her home. (Ironically, the development project was never built.)",
    significance: "One of the most controversial property rights decisions in history. It sparked a nationwide backlash: over 40 states passed laws restricting the use of eminent domain for private development in response.",
    url: "https://supreme.justia.com/cases/federal/us/545/469/"
  },
  "Timbs v. Indiana (2019)": {
    name: "Timbs v. Indiana",
    year: 2019,
    citation: "586 U.S. 146",
    amendment: "8th",
    summary: "Tyson Timbs pleaded guilty to dealing heroin and was sentenced to one year of home detention and probation. Indiana then used civil asset forfeiture to seize his $42,000 Land Rover, which he had purchased with life insurance proceeds. The Supreme Court unanimously ruled that the 8th Amendment's Excessive Fines Clause applies to state and local governments, not just the federal government.",
    outcome: "The forfeiture of the Land Rover was ruled potentially excessive and sent back for review.",
    significance: "Applied the Excessive Fines Clause to the states for the first time. A major check on civil asset forfeiture abuse, where police and prosecutors seize property worth far more than is proportional to the offense.",
    url: "https://supreme.justia.com/cases/federal/us/586/146/"
  },
  "Engblom v. Carey (1982)": {
    name: "Engblom v. Carey",
    year: 1982,
    citation: "677 F.2d 957 (2d Cir.)",
    amendment: "3rd",
    summary: "During a corrections officers' strike in New York, the National Guard was housed in the striking officers' residential quarters at the prison complex. The officers sued, claiming this violated their Third Amendment right against quartering soldiers. The Second Circuit ruled that the Third Amendment applies to state governments and protects tenants, not just property owners.",
    outcome: "The court recognized the Third Amendment claim but ultimately ruled for the state on qualified immunity grounds.",
    significance: "One of the extremely rare cases interpreting the Third Amendment. Established that it applies to the states and that National Guard members count as 'soldiers' under the amendment.",
    url: "https://law.justia.com/cases/federal/appellate-courts/F2/677/957/20702/"
  },
  "Harper v. Virginia Board of Elections (1966)": {
    name: "Harper v. Virginia Board of Elections",
    year: 1966,
    citation: "383 U.S. 663",
    amendment: "24th",
    summary: "Virginia required a $1.50 annual poll tax to vote in state and local elections. Annie Harper challenged the tax. The Supreme Court ruled that conditioning the right to vote on payment of a fee or tax violates the Equal Protection Clause of the 14th Amendment, regardless of how small the amount.",
    outcome: "Poll taxes in state and local elections were struck down as unconstitutional.",
    significance: "Eliminated the last vestiges of poll taxes that had been used to disenfranchise poor voters, particularly Black citizens in the South. Combined with the 24th Amendment (which banned poll taxes in federal elections), this case ensured no American must pay to vote.",
    url: "https://supreme.justia.com/cases/federal/us/383/663/"
  },
  "Bush v. Gore (2000)": {
    name: "Bush v. Gore",
    year: 2000,
    citation: "531 U.S. 98",
    amendment: "14th",
    summary: "During the 2000 presidential election, the outcome hinged on Florida's 25 electoral votes. A manual recount was underway using different counting standards in different counties. The Supreme Court ruled 5-4 that the lack of uniform recount standards violated the Equal Protection Clause because identical ballots were being evaluated differently depending on which county they were in.",
    outcome: "The recount was halted. George W. Bush won Florida by 537 votes and became president.",
    significance: "Demonstrated that equal protection applies to how votes are counted, not just who can vote. The decision remains one of the most debated in Supreme Court history.",
    url: "https://supreme.justia.com/cases/federal/us/531/98/"
  },
  "Engel v. Vitale (1962)": {
    name: "Engel v. Vitale",
    year: 1962,
    citation: "370 U.S. 421",
    amendment: "1st",
    summary: "New York's Board of Regents composed a 'nondenominational' prayer and recommended it be recited in public schools each morning. Several parents sued, arguing that any government-composed prayer in schools violates the Establishment Clause. The Supreme Court agreed 6-1.",
    outcome: "School-sponsored prayer in public schools was ruled unconstitutional.",
    significance: "Established that the government cannot compose or sponsor prayers, even 'nondenominational' ones, in public schools. Students retain the right to pray privately, but the school cannot organize, lead, or endorse prayer.",
    url: "https://supreme.justia.com/cases/federal/us/370/421/"
  },
  "Church of Lukumi Babalu Aye v. Hialeah (1993)": {
    name: "Church of Lukumi Babalu Aye v. Hialeah",
    year: 1993,
    citation: "508 U.S. 520",
    amendment: "1st",
    summary: "When a Santeria church announced plans to establish a house of worship in Hialeah, Florida, the city passed ordinances banning ritual animal sacrifice while allowing virtually identical killings for secular purposes (hunting, pest control, kosher slaughter). The Supreme Court unanimously struck down the laws as targeting a specific religion.",
    outcome: "All of Hialeah's anti-sacrifice ordinances were struck down.",
    significance: "Established that laws targeting a specific religion are subject to the strictest scrutiny. If a law is designed to suppress a particular religious practice while allowing similar secular conduct, it violates the Free Exercise Clause.",
    url: "https://supreme.justia.com/cases/federal/us/508/520/"
  },
  "Torcaso v. Watkins (1961)": {
    name: "Torcaso v. Watkins",
    year: 1961,
    citation: "367 U.S. 488",
    amendment: "Art. VI",
    summary: "Roy Torcaso was appointed as a notary public in Maryland but refused to declare a belief in God, as required by the state constitution. The Supreme Court unanimously ruled that requiring a religious oath or declaration of belief for public office violates both the First Amendment and Article VI of the Constitution.",
    outcome: "The Maryland requirement was struck down. Torcaso received his commission.",
    significance: "Confirmed that neither the federal nor state governments can require any religious test for public office. Also recognized that non-theistic beliefs (such as secular humanism and Buddhism) are protected alongside traditional religions.",
    url: "https://supreme.justia.com/cases/federal/us/367/488/"
  },
  "Cantwell v. Connecticut (1940)": {
    name: "Cantwell v. Connecticut",
    year: 1940,
    citation: "310 U.S. 296",
    amendment: "1st",
    summary: "Newton Cantwell and his sons, Jehovah's Witnesses, went door-to-door in a Catholic neighborhood in New Haven, playing anti-Catholic recordings and soliciting donations. They were arrested for breach of peace and soliciting without a permit. The Supreme Court reversed all convictions, ruling that both the Free Exercise Clause and the Establishment Clause apply to state governments.",
    outcome: "All convictions were reversed.",
    significance: "The first case to 'incorporate' the Free Exercise Clause to the states through the 14th Amendment, meaning that state and local governments -- not just the federal government -- must respect religious freedom.",
    url: "https://supreme.justia.com/cases/federal/us/310/296/"
  },
  "Bailey v. Alabama (1911)": {
    name: "Bailey v. Alabama",
    year: 1911,
    citation: "219 U.S. 219",
    amendment: "13th",
    summary: "Alonzo Bailey, a Black laborer in Alabama, signed a contract to work for a year. He left after a month and was prosecuted under a state peonage law that made it a crime to breach a labor contract. The Supreme Court struck down the law, ruling that it created a form of involuntary servitude prohibited by the 13th Amendment.",
    outcome: "The Alabama peonage law was struck down as unconstitutional.",
    significance: "Established that states cannot use criminal penalties to enforce labor contracts, as this amounts to forced labor. A key case in dismantling the post-Civil War system of debt peonage targeting Black workers in the South.",
    url: "https://supreme.justia.com/cases/federal/us/219/219/"
  },
  "Cleveland Board of Education v. Loudermill (1985)": {
    name: "Cleveland Board of Education v. Loudermill",
    year: 1985,
    citation: "470 U.S. 532",
    amendment: "14th",
    summary: "James Loudermill was hired as a security guard by the Cleveland Board of Education. He was fired after it was discovered he lied on his application about a felony conviction. Under Ohio law, he was a 'classified civil servant' who could only be fired for cause, but he was terminated without any hearing. The Supreme Court ruled that due process requires a pre-termination hearing for public employees who have a property interest in continued employment.",
    outcome: "Loudermill was entitled to a hearing before being fired.",
    significance: "Established that government employees with legitimate expectation of continued employment (through tenure, contracts, or civil service rules) have a due process right to notice and a hearing before being terminated.",
    url: "https://supreme.justia.com/cases/federal/us/470/532/"
  },
  "Pickering v. Board of Education (1968)": {
    name: "Pickering v. Board of Education",
    year: 1968,
    citation: "391 U.S. 563",
    amendment: "1st",
    summary: "Marvin Pickering, a public school teacher in Illinois, wrote a letter to the local newspaper criticizing how the school board allocated funds between academics and athletics. He was fired for this criticism. The Supreme Court ruled that public employees do not forfeit their First Amendment rights and created a balancing test weighing the employee's speech rights against the government employer's interest in efficient operations.",
    outcome: "Pickering's dismissal was overturned.",
    significance: "Created the 'Pickering balancing test' that courts still use today. Public employees can speak on matters of public concern without retaliation, as long as the speech doesn't disrupt workplace operations.",
    url: "https://supreme.justia.com/cases/federal/us/391/563/"
  },
  "O'Connor v. Ortega (1987)": {
    name: "O'Connor v. Ortega",
    year: 1987,
    citation: "480 U.S. 709",
    amendment: "4th",
    summary: "Dr. Magno Ortega, a state hospital employee, had his office searched by supervisors who seized personal items and files. The Supreme Court ruled that government employees have reasonable expectations of privacy in their workspaces, but that workplace searches by government employers need only meet a 'reasonableness' standard, not the stricter warrant requirement.",
    outcome: "The case was sent back for determination of whether the specific search was reasonable.",
    significance: "Established that the Fourth Amendment applies in government workplaces but with a lower standard than in criminal searches. Both the inception and the scope of the search must be reasonable under the circumstances.",
    url: "https://supreme.justia.com/cases/federal/us/480/709/"
  },
  "Garrity v. New Jersey (1967)": {
    name: "Garrity v. New Jersey",
    year: 1967,
    citation: "385 U.S. 493",
    amendment: "5th",
    summary: "New Jersey police officers were investigated for fixing traffic tickets. They were told they would be fired if they refused to answer questions, but their answers could be used against them in criminal proceedings. The Supreme Court ruled that statements obtained under threat of termination are coerced and cannot be used in criminal proceedings.",
    outcome: "The officers' compelled statements were inadmissible in criminal cases.",
    significance: "Created 'Garrity rights' for public employees: the government can require you to answer questions as a condition of employment, but those compelled answers cannot be used against you criminally.",
    url: "https://supreme.justia.com/cases/federal/us/385/493/"
  },
  "Tinker v. Des Moines (1969)": {
    name: "Tinker v. Des Moines",
    year: 1969,
    citation: "393 U.S. 503",
    amendment: "1st",
    summary: "Mary Beth Tinker and other students wore black armbands to school to protest the Vietnam War. The school suspended them. The Supreme Court ruled 7-2 that students do not 'shed their constitutional rights to freedom of speech or expression at the schoolhouse gate.' Student speech is protected unless it substantially disrupts the educational environment.",
    outcome: "The suspensions were overturned. Students have free speech rights in school.",
    significance: "The landmark student speech case. Established that students have First Amendment rights in public schools, though the school can restrict speech that causes 'substantial disruption' or interferes with the rights of others.",
    url: "https://supreme.justia.com/cases/federal/us/393/503/"
  },
  "New Jersey v. T.L.O. (1985)": {
    name: "New Jersey v. T.L.O.",
    year: 1985,
    citation: "469 U.S. 325",
    amendment: "4th",
    summary: "A high school student (T.L.O.) was caught smoking in the bathroom. A vice principal searched her purse, finding cigarettes, rolling papers, marijuana, and evidence of drug dealing. The Supreme Court ruled that school officials can search students with 'reasonable suspicion' rather than the higher 'probable cause' standard required of police.",
    outcome: "The search was ruled constitutional under the lower 'reasonable suspicion' standard.",
    significance: "Established the framework for student searches in public schools. School officials need less justification than police, but searches must still be reasonable in inception and scope. Strip searches require much stronger justification.",
    url: "https://supreme.justia.com/cases/federal/us/469/325/"
  },
  "Goss v. Lopez (1975)": {
    name: "Goss v. Lopez",
    year: 1975,
    citation: "419 U.S. 565",
    amendment: "14th",
    summary: "Several Ohio high school students were suspended for up to 10 days without any hearing. The Supreme Court ruled that students facing suspension have a property interest in their education and a liberty interest in their reputation. Due process requires at least minimal protections before suspension.",
    outcome: "The suspensions without hearings were ruled unconstitutional.",
    significance: "Students facing suspension of more than a trivial period must receive oral or written notice of the charges, an explanation of the evidence, and an opportunity to present their side of the story.",
    url: "https://supreme.justia.com/cases/federal/us/419/565/"
  },
  "West Virginia v. Barnette (1943)": {
    name: "West Virginia v. Barnette",
    year: 1943,
    citation: "319 U.S. 624",
    amendment: "1st",
    summary: "West Virginia required all students to salute the American flag and recite the Pledge of Allegiance. Jehovah's Witness families refused on religious grounds and their children were expelled. The Supreme Court ruled 6-3 that compelling students to salute the flag or recite the Pledge violates the First Amendment.",
    outcome: "The mandatory flag salute was struck down as unconstitutional.",
    significance: "Established the principle that the government cannot compel speech or belief. Justice Jackson wrote one of the most famous lines in constitutional law: 'If there is any fixed star in our constitutional constellation, it is that no official, high or petty, can prescribe what shall be orthodox in matters of opinion.'",
    url: "https://supreme.justia.com/cases/federal/us/319/624/"
  },
  "Healy v. James (1972)": {
    name: "Healy v. James",
    year: 1972,
    citation: "408 U.S. 169",
    amendment: "1st",
    summary: "Central Connecticut State College denied recognition to a local chapter of Students for a Democratic Society (SDS) because of disagreement with the national organization's philosophy. The Supreme Court ruled that public universities cannot deny recognition to student organizations based on the group's viewpoints.",
    outcome: "The denial of recognition was reversed.",
    significance: "Confirmed that the First Amendment applies with full force on public college campuses. Students have the right to organize, associate, and express unpopular viewpoints. Universities cannot suppress ideas they find distasteful.",
    url: "https://supreme.justia.com/cases/federal/us/408/169/"
  },
  "Payton v. New York (1980)": {
    name: "Payton v. New York",
    year: 1980,
    citation: "445 U.S. 573",
    amendment: "4th",
    summary: "Police entered Theodore Payton's home without a warrant to arrest him for murder. They found evidence in plain view. The Supreme Court ruled that the Fourth Amendment prohibits police from making a warrantless, nonconsensual entry into a suspect's home to make a routine arrest.",
    outcome: "The evidence found during the warrantless entry was suppressed.",
    significance: "Firmly established that a home has special Fourth Amendment protection. Even with probable cause to arrest, police generally need an arrest warrant to enter a suspect's home. This applies to all law enforcement, including immigration agents.",
    url: "https://supreme.justia.com/cases/federal/us/445/573/"
  },
  "Yick Wo v. Hopkins (1886)": {
    name: "Yick Wo v. Hopkins",
    year: 1886,
    citation: "118 U.S. 356",
    amendment: "14th",
    summary: "San Francisco passed an ordinance requiring permits to operate laundries in wooden buildings. Nearly all Chinese applicants were denied permits while almost all non-Chinese applicants were approved. The Supreme Court ruled that the law, while neutral on its face, was administered in a discriminatory manner and violated the Equal Protection Clause.",
    outcome: "Yick Wo's conviction was overturned. The discriminatory enforcement was struck down.",
    significance: "Established two crucial principles: (1) equal protection applies to ALL persons within U.S. jurisdiction, not just citizens, and (2) a law that is fair on its face but applied discriminatorily violates the Constitution.",
    url: "https://supreme.justia.com/cases/federal/us/118/356/"
  },
  "Zadvydas v. Davis (2001)": {
    name: "Zadvydas v. Davis",
    year: 2001,
    citation: "533 U.S. 678",
    amendment: "5th",
    summary: "Kestutis Zadvydas, a stateless person born in a displaced persons camp in Germany, was ordered deported but no country would accept him. The government detained him indefinitely. The Supreme Court ruled that the government cannot hold deportable immigrants indefinitely when there is no realistic chance of deportation.",
    outcome: "Indefinite detention was ruled unconstitutional. Six months is a presumptively reasonable detention period.",
    significance: "Applied due process protections to immigration detention. Even non-citizens ordered deported have a constitutional right against indefinite detention by the government.",
    url: "https://supreme.justia.com/cases/federal/us/533/678/"
  },
  "District of Columbia v. Heller (2008)": {
    name: "District of Columbia v. Heller",
    year: 2008,
    citation: "554 U.S. 570",
    amendment: "2nd",
    summary: "Washington D.C. effectively banned handgun possession by requiring all firearms to be kept unloaded and disassembled or trigger-locked. Dick Heller, a security guard authorized to carry a handgun at work, applied for a permit to keep one at home and was denied. The Supreme Court ruled 5-4 that the Second Amendment protects an individual right to possess firearms, independent of service in a militia.",
    outcome: "D.C.'s handgun ban was struck down as unconstitutional.",
    significance: "The first Supreme Court case to definitively hold that the Second Amendment protects an individual right to keep and bear arms for self-defense in the home, not just a collective right tied to militia service.",
    url: "https://supreme.justia.com/cases/federal/us/554/570/"
  },
  "McDonald v. City of Chicago (2010)": {
    name: "McDonald v. City of Chicago",
    year: 2010,
    citation: "561 U.S. 742",
    amendment: "2nd",
    summary: "Chicago had one of the nation's strictest handgun bans. Otis McDonald, a retired maintenance engineer in a high-crime neighborhood, challenged the ban because he wanted a handgun for self-defense. The Supreme Court ruled 5-4 that the individual right to bear arms recognized in Heller also applies to state and local governments through the 14th Amendment.",
    outcome: "Chicago's handgun ban was struck down.",
    significance: "Extended the individual right to bear arms to apply against state and local governments, not just the federal government. Cities and states cannot impose total bans on handgun ownership for self-defense.",
    url: "https://supreme.justia.com/cases/federal/us/561/742/"
  },
  "New York State Rifle & Pistol Assn. v. Bruen (2022)": {
    name: "New York State Rifle & Pistol Assn. v. Bruen",
    year: 2022,
    citation: "597 U.S. 1",
    amendment: "2nd",
    summary: "New York's concealed carry permit law required applicants to demonstrate 'proper cause' -- essentially a special need beyond ordinary self-defense -- to carry a handgun in public. The Supreme Court ruled 6-3 that the right to bear arms includes the right to carry in public for self-defense and that New York's 'proper cause' requirement was unconstitutional.",
    outcome: "New York's may-issue concealed carry regime was struck down.",
    significance: "Established that gun regulations must be consistent with the historical tradition of firearm regulation. States cannot require people to demonstrate a special need beyond self-defense to exercise their right to carry firearms in public.",
    url: "https://supreme.justia.com/cases/federal/us/597/1/"
  },
  "Camara v. Municipal Court (1967)": {
    name: "Camara v. Municipal Court",
    year: 1967,
    citation: "387 U.S. 523",
    amendment: "4th",
    summary: "Roland Camara refused to allow a housing inspector to enter his apartment without a warrant to conduct a routine code inspection. He was charged criminally for refusing entry. The Supreme Court ruled that administrative searches of homes require either consent or a warrant, even for routine code enforcement.",
    outcome: "The criminal charge was overturned. Warrantless administrative searches of homes are unconstitutional.",
    significance: "Extended Fourth Amendment warrant protections to administrative inspections. Even routine government inspections of private homes require consent or a warrant, though the standard for obtaining the warrant is lower than for criminal searches.",
    url: "https://supreme.justia.com/cases/federal/us/387/523/"
  },
  "Taylor v. Louisiana (1975)": {
    name: "Taylor v. Louisiana",
    year: 1975,
    citation: "419 U.S. 522",
    amendment: "6th",
    summary: "Billy Taylor was convicted of aggravated kidnapping by a jury drawn from a pool that systematically excluded women (Louisiana exempted women from jury service unless they volunteered). The Supreme Court ruled that the Sixth Amendment requires juries to be drawn from a fair cross-section of the community.",
    outcome: "Taylor's conviction was reversed due to the systematic exclusion of women from the jury pool.",
    significance: "Established the 'fair cross-section' requirement for jury selection. Juries must be drawn from representative pools. Systematic exclusion of any distinctive group (by race, gender, etc.) violates the right to an impartial jury.",
    url: "https://supreme.justia.com/cases/federal/us/419/522/"
  },
  "Batson v. Kentucky (1986)": {
    name: "Batson v. Kentucky",
    year: 1986,
    citation: "476 U.S. 79",
    amendment: "14th",
    summary: "James Batson, a Black man, was tried for burglary. The prosecutor used peremptory challenges to strike all four Black jurors from the panel, resulting in an all-white jury. The Supreme Court ruled that using peremptory challenges to remove jurors based on race violates the Equal Protection Clause.",
    outcome: "Batson's conviction was reversed. Race-based jury strikes were ruled unconstitutional.",
    significance: "Created the 'Batson challenge' procedure: if a pattern of race-based strikes is shown, the striking party must provide a race-neutral explanation. This protection has since been extended to gender-based strikes as well.",
    url: "https://supreme.justia.com/cases/federal/us/476/79/"
  },
  "Cruzan v. Director, Missouri Dept. of Health (1990)": {
    name: "Cruzan v. Director, Missouri Dept. of Health",
    year: 1990,
    citation: "497 U.S. 261",
    amendment: "14th",
    summary: "Nancy Cruzan was left in a persistent vegetative state after a car accident. Her parents sought to remove her feeding tube, but Missouri required 'clear and convincing evidence' of her wishes. The Supreme Court recognized a constitutional liberty interest in refusing unwanted medical treatment but upheld Missouri's evidentiary standard.",
    outcome: "The state's requirement of clear evidence of the patient's wishes was upheld, but the right to refuse treatment was recognized.",
    significance: "The first Supreme Court case to recognize a constitutional right to die -- or more precisely, a liberty interest in refusing unwanted medical treatment. Spurred the nationwide adoption of living wills and healthcare directives.",
    url: "https://supreme.justia.com/cases/federal/us/497/261/"
  },
  "Missouri v. McNeely (2013)": {
    name: "Missouri v. McNeely",
    year: 2013,
    citation: "569 U.S. 141",
    amendment: "4th",
    summary: "Tyler McNeely was pulled over for speeding and swerving. He failed field sobriety tests and refused a breathalyzer. The officer took him to a hospital and ordered a blood draw without a warrant. The Supreme Court ruled that the natural dissipation of alcohol in the blood does not automatically create an exigent circumstance justifying a warrantless blood test.",
    outcome: "The warrantless blood draw was ruled unconstitutional.",
    significance: "Police generally need a warrant or consent before drawing blood in DUI cases. The mere fact that alcohol metabolizes over time does not excuse the warrant requirement. Your body is protected by the Fourth Amendment.",
    url: "https://supreme.justia.com/cases/federal/us/569/141/"
  },
  "Salinas v. Texas (2013)": {
    name: "Salinas v. Texas",
    year: 2013,
    citation: "570 U.S. 178",
    amendment: "5th",
    summary: "Genovevo Salinas voluntarily answered police questions but went silent when asked whether his shotgun would match shells found at a murder scene. At trial, prosecutors used his silence as evidence of guilt. The Supreme Court ruled that simply remaining silent is not enough to invoke the Fifth Amendment -- you must explicitly assert the privilege.",
    outcome: "Salinas's conviction was upheld. His silence was admissible because he didn't explicitly invoke the Fifth Amendment.",
    significance: "Critically important: you must clearly say you are invoking your Fifth Amendment right to remain silent. Simply staying quiet, without being in custody and without explicitly invoking the right, may not protect you.",
    url: "https://supreme.justia.com/cases/federal/us/570/178/"
  },
  "Murthy v. Missouri (2024)": {
    name: "Murthy v. Missouri",
    year: 2024,
    citation: "144 S. Ct. 1972",
    amendment: "1st",
    summary: "Missouri and Louisiana, along with individual social media users, sued the Biden administration alleging that federal officials coerced social media platforms into censoring content about COVID-19 and elections. The Supreme Court examined when government communication with private platforms crosses the line from permissible persuasion into unconstitutional coercion.",
    outcome: "The Court ruled the plaintiffs lacked standing, but the case established important boundaries around government-platform interactions.",
    significance: "Highlighted the tension between government officials communicating with platforms and the First Amendment. While the government can share information and express concerns, using threats of regulatory consequences to pressure content removal may constitute unconstitutional censorship.",
    url: "https://supreme.justia.com/cases/federal/us/602/144/"
  },
  "Gamble v. United States (2019)": {
    name: "Gamble v. United States",
    year: 2019,
    citation: "587 U.S. 678",
    amendment: "5th",
    summary: "Terence Gamble was convicted of second-degree robbery in Alabama. Years later, he was pulled over and found with a firearm. He was prosecuted in both state and federal court for being a felon in possession of a firearm. He argued this was double jeopardy. The Supreme Court upheld the 'dual sovereignty' doctrine: state and federal governments are separate sovereigns, so each can prosecute for the same conduct.",
    outcome: "Both prosecutions were allowed to stand. The dual sovereignty doctrine was upheld 7-2.",
    significance: "Confirmed that double jeopardy does not prevent successive state and federal prosecutions for the same act. This is often used in civil rights cases where state courts fail to convict -- the federal government can bring separate charges.",
    url: "https://supreme.justia.com/cases/federal/us/587/678/"
  }
};
