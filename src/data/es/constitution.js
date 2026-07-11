// Spanish edition. The "original" field intentionally stays in English:
// it is the authoritative legal text. Everything else is translated.
export const constitution = {
  title: "La Constitución de los Estados Unidos",
  date: "Firmada el 17 de septiembre de 1787. Ratificada el 21 de junio de 1788.",
  summary: "El manual de operación del gobierno estadounidense. Crea las tres ramas (Congreso, Presidente, Tribunales), define qué puede y no puede hacer cada una, y fija las reglas de la relación entre los estados y de cómo cambiar el propio documento.",
  preamble: {
    id: "preamble",
    title: "Preámbulo",
    original: "We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America.",
    translation: "Nosotros, el pueblo estadounidense, creamos este gobierno para: mantener unido al país, establecer la justicia, conservar la paz, defender la nación, promover el bienestar de los ciudadanos y proteger la libertad para nosotros y las generaciones futuras.",
    rights: "El gobierno existe para servir a estos seis propósitos. Cualquier acción que socave la justicia, la paz, la defensa, el bienestar o la libertad es contraria a la misión declarada del gobierno.",
    references: [
      { text: "La frase es 'Nosotros el Pueblo', no 'Nosotros los Estados' ni 'Nosotros el Gobierno.' La autoridad proviene de los ciudadanos.", source: "Debates de la Convención Constitucional, 1787" }
    ]
  },
  articles: [
    {
      number: 1,
      title: "El Poder Legislativo (Congreso)",
      summary: "Crea el Congreso (Senado + Cámara), define quién puede servir, qué leyes pueden aprobar y qué tienen prohibido hacer.",
      sections: [
        {
          id: "a1s1",
          title: "Sección 1: El poder legislativo",
          original: "All legislative Powers herein granted shall be vested in a Congress of the United States, which shall consist of a Senate and House of Representatives.",
          translation: "Solo el Congreso puede aprobar leyes federales. El Congreso tiene dos cámaras: el Senado y la Cámara de Representantes.",
          rights: "Las leyes deben venir de sus representantes electos, no del Presidente, ni de las agencias, ni de los tribunales. Cuando burócratas no electos crean regulaciones o las órdenes ejecutivas esquivan al Congreso, este principio se tensa.",
          references: [
            { text: "West Virginia v. EPA (2022) sostuvo que las decisiones políticas importantes deben venir del Congreso, no de las agencias (la 'doctrina de las cuestiones mayores').", source: "597 U.S. 697" }
          ]
        },
        {
          id: "a1s2",
          title: "Sección 2: La Cámara de Representantes",
          original: "The House of Representatives shall be composed of Members chosen every second Year by the People of the several States, and the Electors in each State shall have the Qualifications requisite for Electors of the most numerous Branch of the State Legislature. No Person shall be a Representative who shall not have attained to the Age of twenty five Years, and been seven Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State in which he shall be chosen. Representatives and direct Taxes shall be apportioned among the several States which may be included within this Union, according to their respective Numbers, which shall be determined by adding to the whole Number of free Persons, including those bound to Service for a Term of Years, and excluding Indians not taxed, three fifths of all other Persons. The actual Enumeration shall be made within three Years after the first Meeting of the Congress of the United States, and within every subsequent Term of ten Years, in such Manner as they shall by Law direct. The Number of Representatives shall not exceed one for every thirty Thousand, but each State shall have at Least one Representative; and until such enumeration shall be made, the State of New Hampshire shall be entitled to chuse three, Massachusetts eight, Rhode-Island and Providence Plantations one, Connecticut five, New-York six, New Jersey four, Pennsylvania eight, Delaware one, Maryland six, Virginia ten, North Carolina five, South Carolina five, and Georgia three. When vacancies happen in the Representation from any State, the Executive Authority thereof shall issue Writs of Election to fill such Vacancies. The House of Representatives shall chuse their Speaker and other Officers; and shall have the sole Power of Impeachment.",
          translation: "Los miembros de la Cámara sirven términos de 2 años, elegidos directamente por el pueblo. Debe tener 25+ años, ser ciudadano por 7+ años y vivir en el estado que representa. Los escaños se reparten entre los estados según su población. La Cámara tiene el poder exclusivo de iniciar el juicio político (impeachment).",
          rights: "La Cámara es la 'cámara del pueblo', la más cercana a los votantes y con los términos más cortos. Controla el poder del gasto (los proyectos de gasto nacen aquí) y el poder de acusar a funcionarios.",
          references: [
            { text: "El texto original contaba a las personas esclavizadas como 3/5 de una persona para el reparto de escaños. Esto fue superado por la 14.ª Enmienda.", source: "Histórico, Art. I, Sec. 2, Cl. 3" },
            { text: "U.S. Term Limits v. Thornton (1995) estableció que los estados no pueden imponer al Congreso límites de mandato más allá de lo que exige la Constitución.", source: "514 U.S. 779" }
          ]
        },
        {
          id: "a1s3",
          title: "Sección 3: El Senado",
          original: "The Senate of the United States shall be composed of two Senators from each State, chosen by the Legislature thereof, for six Years; and each Senator shall have one Vote. Immediately after they shall be assembled in Consequence of the first Election, they shall be divided as equally as may be into three Classes. The Seats of the Senators of the first Class shall be vacated at the Expiration of the second Year, of the second Class at the Expiration of the fourth Year, and of the third Class at the Expiration of the sixth Year, so that one third may be chosen every second Year; and if Vacancies happen by Resignation, or otherwise, during the Recess of the Legislature of any State, the Executive thereof may make temporary Appointments until the next Meeting of the Legislature, which shall then fill such Vacancies. No Person shall be a Senator who shall not have attained to the Age of thirty Years, and been nine Years a Citizen of the United States, and who shall not, when elected, be an Inhabitant of that State for which he shall be chosen. The Vice President of the United States shall be President of the Senate, but shall have no Vote, unless they be equally divided. The Senate shall chuse their other Officers, and also a President pro tempore, in the Absence of the Vice President, or when he shall exercise the Office of President of the United States. The Senate shall have the sole Power to try all Impeachments. When sitting for that Purpose, they shall be on Oath or Affirmation. When the President of the United States is tried, the Chief Justice shall preside: And no Person shall be convicted without the Concurrence of two thirds of the Members present. Judgment in Cases of Impeachment shall not extend further than to removal from Office, and disqualification to hold and enjoy any Office of honor, Trust or Profit under the United States: but the Party convicted shall nevertheless be liable and subject to Indictment, Trial, Judgment and Punishment, according to Law.",
          translation: "Cada estado tiene exactamente 2 senadores (hoy elegidos por los votantes según la 17.ª Enmienda). Los senadores sirven términos de 6 años. Deben tener 30+ años y ser ciudadanos por 9+ años. El Senado celebra los juicios políticos. El Vicepresidente desempata.",
          rights: "El Senado da a cada estado la misma voz sin importar su población. Wyoming (580 mil habitantes) tiene el mismo poder senatorial que California (39 millones). Fue un compromiso deliberado para proteger a los estados pequeños.",
          references: [
            { text: "La 17.ª Enmienda (1913) cambió la selección de senadores: de las legislaturas estatales al voto popular directo.", source: "Constitucional" }
          ]
        },
        {
          id: "a1s8",
          title: "Sección 8: Poderes del Congreso (cláusulas clave)",
          original: "The Congress shall have Power To lay and collect Taxes, Duties, Imposts and Excises, to pay the Debts and provide for the common Defence and general Welfare of the United States; but all Duties, Imposts and Excises shall be uniform throughout the United States; To borrow Money on the credit of the United States; To regulate Commerce with foreign Nations, and among the several States, and with the Indian Tribes; To establish an uniform Rule of Naturalization, and uniform Laws on the subject of Bankruptcies throughout the United States; To coin Money, regulate the Value thereof, and of foreign Coin, and fix the Standard of Weights and Measures; To provide for the Punishment of counterfeiting the Securities and current Coin of the United States; To establish Post Offices and post Roads; To promote the Progress of Science and useful Arts, by securing for limited Times to Authors and Inventors the exclusive Right to their respective Writings and Discoveries; To constitute Tribunals inferior to the supreme Court; To define and punish Piracies and Felonies committed on the high Seas, and Offences against the Law of Nations; To declare War, grant Letters of Marque and Reprisal, and make Rules concerning Captures on Land and Water; To raise and support Armies, but no Appropriation of Money to that Use shall be for a longer Term than two Years; To provide and maintain a Navy; To make Rules for the Government and Regulation of the land and naval Forces; To provide for calling forth the Militia to execute the Laws of the Union, suppress Insurrections and repel Invasions; To provide for organizing, arming, and disciplining, the Militia, and for governing such Part of them as may be employed in the Service of the United States, reserving to the States respectively, the Appointment of the Officers, and the Authority of training the Militia according to the discipline prescribed by Congress; To exercise exclusive Legislation in all Cases whatsoever, over such District (not exceeding ten Miles square) as may, by Cession of particular States, and the Acceptance of Congress, become the Seat of the Government of the United States, and to exercise like Authority over all Places purchased by the Consent of the Legislature of the State in which the Same shall be, for the Erection of Forts, Magazines, Arsenals, dock-Yards, and other needful Buildings;--And To make all Laws which shall be necessary and proper for carrying into Execution the foregoing Powers, and all other Powers vested by this Constitution in the Government of the United States, or in any Department or Officer thereof.",
          translation: "El Congreso puede: cobrar impuestos, pedir dinero prestado, regular el comercio interestatal e internacional, acuñar moneda, administrar el correo, declarar la guerra, financiar al ejército y aprobar cualquier ley 'necesaria y adecuada' para ejercer estos poderes.",
          rights: "Solo el CONGRESO puede declarar la guerra, aunque los presidentes a menudo lo han esquivado. La 'Cláusula de Comercio' y la 'Cláusula Necesaria y Adecuada' se han estirado para justificar un poder federal casi ilimitado, mucho más allá de la intención original.",
          examples: [
            "EE. UU. no declara formalmente una guerra desde 1942, y sin embargo ha estado en conflictos militares continuos. Los presidentes usan 'autorizaciones' en lugar de declaraciones, esquivando este requisito.",
            "La Cláusula de Comercio se usó para justificar desde leyes de derechos civiles (bueno) hasta criminalizar cultivar trigo en su propia granja para consumo propio (Wickard v. Filburn).",
            "El Congreso delegó un enorme poder legislativo a las agencias ejecutivas, y las regulaciones que esas agencias escriben tienen fuerza de ley, pero nadie que usted eligió las votó."
          ],
          references: [
            { text: "Wickard v. Filburn (1942) sostuvo que cultivar trigo para consumo propio afecta el comercio interestatal y por lo tanto el Congreso puede regularlo. Representa la máxima expansión de la Cláusula de Comercio.", source: "317 U.S. 111" },
            { text: "La War Powers Resolution (1973) fue el intento del Congreso de recuperar el poder de declarar la guerra. Los presidentes la ignoran o la esquivan rutinariamente.", source: "50 U.S.C. ch. 33" },
            { text: "Loper Bright Enterprises v. Raimondo (2024) anuló la deferencia Chevron, reduciendo el poder de las agencias para interpretar leyes ambiguas.", source: "144 S. Ct. 2244" }
          ]
        },
        {
          id: "a1s9",
          title: "Sección 9: Límites al Congreso",
          original: "The Migration or Importation of such Persons as any of the States now existing shall think proper to admit, shall not be prohibited by the Congress prior to the Year one thousand eight hundred and eight, but a Tax or duty may be imposed on such Importation, not exceeding ten dollars for each Person. The Privilege of the Writ of Habeas Corpus shall not be suspended, unless when in Cases of Rebellion or Invasion the public Safety may require it. No Bill of Attainder or ex post facto Law shall be passed. No Capitation, or other direct, Tax shall be laid, unless in Proportion to the Census or enumeration herein before directed to be taken. No Tax or Duty shall be laid on Articles exported from any State. No Preference shall be given by any Regulation of Commerce or Revenue to the Ports of one State over those of another: nor shall Vessels bound to, or from, one State, be obliged to enter, clear, or pay Duties in another. No Money shall be drawn from the Treasury, but in Consequence of Appropriations made by Law; and a regular Statement and Account of the Receipts and Expenditures of all public Money shall be published from time to time. No Title of Nobility shall be granted by the United States: And no Person holding any Office of Profit or Trust under them, shall, without the Consent of the Congress, accept of any present, Emolument, Office, or Title, of any kind whatever, from any King, Prince, or foreign State.",
          translation: "El Congreso NO PUEDE: suspender el habeas corpus (su derecho a impugnar un encarcelamiento) salvo durante rebelión o invasión. No puede aprobar leyes que castiguen a personas específicas sin juicio. No puede ilegalizar algo y luego castigarle por haberlo hecho antes de que fuera ilegal. No puede gastar dinero sin autorizarlo por ley.",
          rights: "El habeas corpus es su protección más fundamental contra la tiranía: el derecho a comparecer ante un juez y decir 'demuestren que tienen una razón legal para retenerme.' Suspenderlo significa que el gobierno puede encerrarle y tirar la llave.",
          examples: [
            "La Military Commissions Act (2006) intentó despojar del habeas corpus a los 'combatientes enemigos' retenidos en Guantánamo. La Corte Suprema la anuló.",
            "Ex post facto: si una nueva ley prohíbe algo hoy, no pueden castigarle por haberlo hecho ayer. Algunas leyes de registro de delincuentes sexuales han sido impugnadas por este motivo."
          ],
          references: [
            { text: "Boumediene v. Bush (2008) dictaminó que los detenidos de Guantánamo tienen derecho al habeas corpus. El Congreso no puede quitarle esta jurisdicción a los tribunales.", source: "553 U.S. 723" },
            { text: "En Ex parte Merryman (1861), Lincoln suspendió el habeas corpus durante la Guerra Civil. El presidente de la Corte, Taney, dictaminó que solo el Congreso podía hacerlo, pero Lincoln ignoró al tribunal.", source: "17 F. Cas. 144" }
          ]
        },
        {
          id: "a1s10",
          title: "Sección 10: Límites a los estados",
          original: "No State shall enter into any Treaty, Alliance, or Confederation; grant Letters of Marque and Reprisal; coin Money; emit Bills of Credit; make any Thing but gold and silver Coin a Tender in Payment of Debts; pass any Bill of Attainder, ex post facto Law, or Law impairing the Obligation of Contracts, or grant any Title of Nobility. No State shall, without the Consent of the Congress, lay any Imposts or Duties on Imports or Exports, except what may be absolutely necessary for executing it's inspection Laws: and the net Produce of all Duties and Imposts, laid by any State on Imports or Exports, shall be for the Use of the Treasury of the United States; and all such Laws shall be subject to the Revision and Controul of the Congress. No State shall, without the Consent of Congress, lay any Duty of Tonnage, keep Troops, or Ships of War in time of Peace, enter into any Agreement or Compact with another State, or with a foreign Power, or engage in War, unless actually invaded, or in such imminent Danger as will not admit of delay.",
          translation: "Los estados NO PUEDEN: hacer tratados con naciones extranjeras, imprimir su propia moneda, aprobar leyes que castiguen a personas sin juicio, ilegalizar cosas retroactivamente ni romper contratos existentes.",
          rights: "Esto impide que los estados actúen como países independientes o que destruyan arbitrariamente los derechos contractuales de las personas.",
          references: [
            { text: "Home Building & Loan Assn. v. Blaisdell (1934) sostuvo que los estados pueden modificar temporalmente obligaciones contractuales durante emergencias (moratoria hipotecaria de la Gran Depresión).", source: "290 U.S. 398" }
          ]
        }
      ]
    },
    {
      number: 2,
      title: "El Poder Ejecutivo (Presidente)",
      summary: "Crea la presidencia, define los poderes presidenciales y fija los términos de elección, destitución y sucesión.",
      sections: [
        {
          id: "a2s1",
          title: "Sección 1: Poder ejecutivo y elección",
          original: "The executive Power shall be vested in a President of the United States of America. He shall hold his Office during the Term of four Years, and, together with the Vice President, chosen for the same Term, be elected, as follows: Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors, equal to the whole Number of Senators and Representatives to which the State may be entitled in the Congress: but no Senator or Representative, or Person holding an Office of Trust or Profit under the United States, shall be appointed an Elector. The Electors shall meet in their respective States, and vote by Ballot for two Persons, of whom one at least shall not be an Inhabitant of the same State with themselves. And they shall make a List of all the Persons voted for, and of the Number of Votes for each; which List they shall sign and certify, and transmit sealed to the Seat of the Government of the United States, directed to the President of the Senate. The President of the Senate shall, in the Presence of the Senate and House of Representatives, open all the Certificates, and the Votes shall then be counted. The Person having the greatest Number of Votes shall be the President, if such Number be a Majority of the whole Number of Electors appointed; and if there be more than one who have such Majority, and have an equal Number of Votes, then the House of Representatives shall immediately chuse by Ballot one of them for President; and if no Person have a Majority, then from the five highest on the List the said House shall in like Manner chuse the President. But in chusing the President, the Votes shall be taken by States, the Representation from each State having one Vote; A quorum for this Purpose shall consist of a Member or Members from two thirds of the States, and a Majority of all the States shall be necessary to a Choice. In every Case, after the Choice of the President, the Person having the greatest Number of Votes of the Electors shall be the Vice President. But if there should remain two or more who have equal Votes, the Senate shall chuse from them by Ballot the Vice President. The Congress may determine the Time of chusing the Electors, and the Day on which they shall give their Votes; which Day shall be the same throughout the United States. No Person except a natural born Citizen, or a Citizen of the United States, at the time of the Adoption of this Constitution, shall be eligible to the Office of President; neither shall any Person be eligible to that Office who shall not have attained to the Age of thirty five Years, and been fourteen Years a Resident within the United States. In Case of the Removal of the President from Office, or of his Death, Resignation, or Inability to discharge the Powers and Duties of the said Office, the Same shall devolve on the Vice President, and the Congress may by Law provide for the Case of Removal, Death, Resignation or Inability, both of the President and Vice President, declaring what Officer shall then act as President, and such Officer shall act accordingly, until the Disability be removed, or a President shall be elected. The President shall, at stated Times, receive for his Services, a Compensation, which shall neither be increased nor diminished during the Period for which he shall have been elected, and he shall not receive within that Period any other Emolument from the United States, or any of them. Before he enter on the Execution of his Office, he shall take the following Oath or Affirmation:--'I do solemnly swear (or affirm) that I will faithfully execute the Office of President of the United States, and will to the best of my Ability, preserve, protect and defend the Constitution of the United States.'",
          translation: "El Presidente ostenta el poder ejecutivo. Sirve un término de 4 años. Lo elige el Colegio Electoral (electores de cada estado), no el voto popular directo.",
          rights: "El Presidente ejecuta las leyes, no las crea. El poder ejecutivo debe limitarse a llevar a cabo lo que el Congreso decide.",
          examples: [
            "Las órdenes ejecutivas se han expandido mucho más allá de directivas administrativas hacia lo que los críticos llaman 'legislar con la pluma.' Cambios políticos mayores aprobados sin el Congreso.",
            "El Colegio Electoral significa que el peso de su voto depende de dónde vive. Un voto en Wyoming cuenta aproximadamente 3.6 veces más que un voto en California en las elecciones presidenciales."
          ],
          references: [
            { text: "Youngstown Sheet & Tube Co. v. Sawyer (1952) dictaminó que el Presidente no puede confiscar propiedad privada por orden ejecutiva, ni siquiera en guerra, sin autorización del Congreso.", source: "343 U.S. 579" }
          ]
        },
        {
          id: "a2s2",
          title: "Sección 2: Poderes presidenciales",
          original: "The President shall be Commander in Chief of the Army and Navy of the United States, and of the Militia of the several States, when called into the actual Service of the United States; he may require the Opinion, in writing, of the principal Officer in each of the executive Departments, upon any Subject relating to the Duties of their respective Offices, and he shall have Power to grant Reprieves and Pardons for Offences against the United States, except in Cases of Impeachment. He shall have Power, by and with the Advice and Consent of the Senate, to make Treaties, provided two thirds of the Senators present concur; and he shall nominate, and by and with the Advice and Consent of the Senate, shall appoint Ambassadors, other public Ministers and Consuls, Judges of the supreme Court, and all other Officers of the United States, whose Appointments are not herein otherwise provided for, and which shall be established by Law: but the Congress may by Law vest the Appointment of such inferior Officers, as they think proper, in the President alone, in the Courts of Law, or in the Heads of Departments. The President shall have Power to fill up all Vacancies that may happen during the Recess of the Senate, by granting Commissions which shall expire at the End of their next Session.",
          translation: "El Presidente es el comandante en jefe del ejército, puede indultar delitos federales (excepto el juicio político), firma tratados (con aprobación del Senado) y nombra jueces, embajadores y funcionarios del gabinete (con confirmación del Senado).",
          rights: "Controles clave: los tratados requieren 2/3 del Senado, los nombramientos requieren confirmación del Senado. El poder de indulto es casi ilimitado para delitos federales, pero no puede deshacer un juicio político. El Presidente comanda al ejército pero no puede declarar la guerra.",
          examples: [
            "El poder de indulto no tiene más control que el juicio político. Los presidentes pueden indultar a aliados, familiares o a sí mismos (debatido pero no probado).",
            "Los nombramientos en receso permiten a los presidentes esquivar la confirmación del Senado cuando el Congreso no sesiona, y ambos partidos los han usado y sufrido."
          ],
          references: [
            { text: "En Trump v. United States (2024), la Corte dictaminó que los presidentes tienen amplia inmunidad por actos oficiales, generando debate sobre la rendición de cuentas.", source: "144 S. Ct. 2312" },
            { text: "NLRB v. Noel Canning (2014) limitó el poder presidencial de hacer nombramientos en receso cuando el Senado afirma estar en sesión.", source: "573 U.S. 513" }
          ]
        },
        {
          id: "a2s4",
          title: "Sección 4: Juicio político",
          original: "The President, Vice President and all civil Officers of the United States, shall be removed from Office on Impeachment for, and Conviction of, Treason, Bribery, or other high Crimes and Misdemeanors.",
          translation: "El Presidente, el Vicepresidente y todos los funcionarios federales pueden ser destituidos si son acusados (por la Cámara) y condenados (por el Senado) por traición, soborno u otras ofensas graves.",
          rights: "Nadie está por encima de la ley. Hasta el Presidente puede ser despedido por los representantes del pueblo por mala conducta grave. 'Delitos graves y faltas' es intencionalmente amplio: lo que el Congreso decida que constituye un abuso de poder.",
          examples: [
            "Tres presidentes han sido acusados por la Cámara (Andrew Johnson, Bill Clinton, Donald Trump dos veces). Ninguno fue condenado por el Senado. El umbral de 2/3 hace la condena extremadamente difícil en un ambiente partidista.",
            "La naturaleza política del juicio político significa que solo funciona cuando ambos partidos coinciden en que hubo mala conducta, lo que en tiempos polarizados puede significar que nunca funcione."
          ],
          references: [
            { text: "Nixon v. United States (1993) sostuvo que los tribunales no pueden revisar los procedimientos del juicio político en el Senado. El juicio político es un proceso puramente político.", source: "506 U.S. 224" }
          ]
        }
      ]
    },
    {
      number: 3,
      title: "El Poder Judicial (Tribunales)",
      summary: "Crea la Corte Suprema y el sistema de tribunales federales, define qué casos pueden atender y protege a los jueces de la presión política.",
      sections: [
        {
          id: "a3s1",
          title: "Sección 1: El poder judicial",
          original: "The judicial Power of the United States, shall be vested in one supreme Court, and in such inferior Courts as the Congress may from time to time ordain and establish. The Judges, both of the supreme and inferior Courts, shall hold their Offices during good Behaviour, and shall, at stated Times, receive for their Services, a Compensation, which shall not be diminished during their Continuance in Office.",
          translation: "Hay una Corte Suprema. El Congreso puede crear tribunales inferiores. Todos los jueces federales sirven de por vida (salvo mala conducta) y su salario no puede reducirse mientras sirven.",
          rights: "El cargo vitalicio y la protección salarial existen para que los jueces puedan tomar decisiones impopulares sin temor a represalias. Responden a la ley, no a los políticos ni a la opinión pública.",
          examples: [
            "El cargo vitalicio significa que un solo presidente puede moldear la corte durante décadas. Ninguna otra democracia da a sus jueces términos ilimitados.",
            "El Congreso controla cuántos jueces tiene la Corte Suprema (actualmente 9, pero la Constitución no lo fija). Las propuestas de 'empacar la corte' añadirían jueces para cambiar el equilibrio.",
            "La Constitución no menciona la revisión judicial (que los tribunales anulen leyes por inconstitucionales). La Corte Suprema reclamó ese poder para sí misma en 1803."
          ],
          references: [
            { text: "En Marbury v. Madison (1803), la Corte afirmó el poder de revisión judicial: los tribunales deciden qué significa la Constitución y pueden anular leyes que la violen.", source: "5 U.S. 137" }
          ]
        },
        {
          id: "a3s2",
          title: "Sección 2: Jurisdicción",
          original: "The judicial Power shall extend to all Cases, in Law and Equity, arising under this Constitution, the Laws of the United States, and Treaties made, or which shall be made, under their Authority;--to all Cases affecting Ambassadors, other public Ministers and Consuls;--to all Cases of admiralty and maritime Jurisdiction;--to Controversies to which the United States shall be a Party;--to Controversies between two or more States;--between a State and Citizens of another State;--between Citizens of different States;--between Citizens of the same State claiming Lands under Grants of different States, and between a State, or the Citizens thereof, and foreign States, Citizens or Subjects. In all Cases affecting Ambassadors, other public Ministers and Consuls, and those in which a State shall be Party, the supreme Court shall have original Jurisdiction. In all the other Cases before mentioned, the supreme Court shall have appellate Jurisdiction, both as to Law and Fact, with such Exceptions, and under such Regulations as the Congress shall make. The Trial of all Crimes, except in Cases of Impeachment, shall be by Jury; and such Trial shall be held in the State where the said Crimes shall have been committed; but when not committed within any State, the Trial shall be at such Place or Places as the Congress may by Law have directed.",
          translation: "Los tribunales federales atienden casos sobre: la Constitución, las leyes federales, los tratados, disputas entre estados, disputas entre ciudadanos de estados distintos y casos que involucran a diplomáticos extranjeros.",
          rights: "Esto asegura que las cuestiones constitucionales las decidan tribunales federales, no tribunales estatales que podrían estar presionados por la política local.",
          references: [
            { text: "La 11.ª Enmienda limitó después la capacidad de los ciudadanos de demandar a los estados en tribunales federales.", source: "Constitucional" }
          ]
        },
        {
          id: "a3s3",
          title: "Sección 3: Traición",
          original: "Treason against the United States, shall consist only in levying War against them, or in adhering to their Enemies, giving them Aid and Comfort. No Person shall be convicted of Treason unless on the Testimony of two Witnesses to the same overt Act, or on Confession in open Court.",
          translation: "Traición significa SOLO: hacer la guerra contra EE. UU. o ayudar a sus enemigos. La condena requiere dos testigos del mismo acto, o una confesión en tribunal abierto. Los cargos de traición no pueden usarse contra la familia de alguien.",
          rights: "Los Fundadores definieron la traición de manera extremadamente estrecha A PROPÓSITO. En Inglaterra, la 'traición' se usaba para ejecutar opositores políticos. Aquí, el gobierno no puede etiquetar la disidencia o la crítica como traición. Protestar, criticar e incluso odiar al gobierno NO es traición.",
          examples: [
            "Los políticos a veces acusan a la ligera a sus oponentes de 'traición', pero la Constitución dice que esa palabra significa algo muy específico y muy limitado.",
            "Solo unas 30 personas han sido acusadas de traición en la historia de EE. UU. La definición estrecha es una característica, no un defecto."
          ],
          references: [
            { text: "Cramer v. United States (1945) confirmó que el requisito de 'dos testigos' es estricto. Ambos deben atestiguar el mismo acto manifiesto de traición.", source: "325 U.S. 1" }
          ]
        }
      ]
    },
    {
      number: 4,
      title: "Relaciones entre los estados",
      summary: "Cómo deben tratar los estados las leyes, ciudadanos y registros de los demás. Cómo se suman nuevos estados y cómo el gobierno federal protege a los estados.",
      sections: [
        {
          id: "a4s1",
          title: "Sección 1: Plena fe y crédito",
          original: "Full Faith and Credit shall be given in each State to the public Acts, Records, and judicial Proceedings of every other State.",
          translation: "Cada estado debe honrar las leyes, registros y decisiones judiciales de todos los demás estados.",
          rights: "Su matrimonio, contratos, sentencias judiciales y registros legales de un estado son válidos en todos los estados. Usted no pierde su estatus legal por cruzar una frontera estatal.",
          examples: [
            "Las licencias de conducir, matrimonios, órdenes judiciales y registros corporativos deben reconocerse entre estados.",
            "Esta cláusula fue central en los debates sobre si los estados debían reconocer los matrimonios del mismo sexo celebrados en otros estados (resuelto por Obergefell en 2015)."
          ],
          references: [
            { text: "Obergefell v. Hodges (2015) dictaminó que todos los estados deben reconocer los matrimonios del mismo sexo celebrados en cualquier estado.", source: "576 U.S. 644" }
          ]
        },
        {
          id: "a4s2",
          title: "Sección 2: Privilegios e inmunidades",
          original: "The Citizens of each State shall be entitled to all Privileges and Immunities of Citizens in the several States.",
          translation: "Los estados no pueden discriminar a los ciudadanos de otros estados. Si usted visita o se muda a otro estado, recibe los mismos derechos básicos que sus residentes.",
          rights: "Un estado no puede tratarle como ciudadano de segunda clase por venir de otro lugar. Hay excepciones (como requisitos de residencia para matrícula universitaria estatal), pero los derechos fundamentales son portátiles.",
          references: [
            { text: "Saenz v. Roe (1999) sostuvo que los nuevos residentes de un estado reciben los mismos beneficios sociales que los residentes de largo plazo.", source: "526 U.S. 489" }
          ]
        }
      ]
    },
    {
      number: 5,
      title: "Cómo enmendar la Constitución",
      summary: "Cómo cambiar la Constitución. Es intencionalmente difícil y requiere supermayorías en cada paso.",
      sections: [
        {
          id: "a5",
          title: "El proceso de enmienda",
          original: "The Congress, whenever two thirds of both Houses shall deem it necessary, shall propose Amendments to this Constitution, or, on the Application of the Legislatures of two thirds of the several States, shall call a Convention for proposing Amendments, which, in either Case, shall be valid to all Intents and Purposes, as Part of this Constitution, when ratified by the Legislatures of three fourths of the several States, or by Conventions in three fourths thereof, as the one or the other Mode of Ratification may be proposed by the Congress; Provided that no Amendment which may be made prior to the Year One thousand eight hundred and eight shall in any Manner affect the first and fourth Clauses in the Ninth Section of the first Article; and that no State, without its Consent, shall be deprived of its equal Suffrage in the Senate.",
          translation: "Para cambiar la Constitución: o 2/3 del Congreso propone una enmienda, O 2/3 de las legislaturas estatales convocan una convención. Luego 3/4 de los estados deben ratificarla. Eso es todo: dos caminos para proponer, un umbral para aprobar.",
          rights: "La Constitución está diseñada para ser difícil de cambiar. Esto protege sus derechos de ser eliminados por una mayoría pasajera. Alterar la ley fundamental de la nación exige un consenso amplio y sostenido.",
          examples: [
            "Se han propuesto más de 11,000 enmiendas en el Congreso. Solo 27 han sido ratificadas. El sistema funciona como fue diseñado: los movimientos políticos fugaces no pueden reescribir fácilmente los derechos fundamentales.",
            "No se ha convocado ninguna convención constitucional desde 1787. Varios esfuerzos estatales se han acercado (presupuesto equilibrado, límites de mandato), pero ninguno ha alcanzado el umbral de 2/3."
          ],
          references: [
            { text: "La ERA (Enmienda de Igualdad de Derechos) fue propuesta en 1972 y aprobada por el Congreso, pero no logró que 3/4 de los estados la ratificaran antes de su plazo (debatido).", source: "Histórico" }
          ]
        }
      ]
    },
    {
      number: 6,
      title: "Supremacía de la Constitución",
      summary: "La Constitución es la ley más alta. La ley federal vence a la estatal. Todos los funcionarios juran defenderla. No hay prueba religiosa para el cargo.",
      sections: [
        {
          id: "a6",
          title: "La Cláusula de Supremacía",
          original: "All Debts contracted and Engagements entered into, before the Adoption of this Constitution, shall be as valid against the United States under this Constitution, as under the Confederation. This Constitution, and the Laws of the United States which shall be made in Pursuance thereof; and all Treaties made, or which shall be made, under the Authority of the United States, shall be the supreme Law of the Land; and the Judges in every State shall be bound thereby, any Thing in the Constitution or Laws of any State to the Contrary notwithstanding. The Senators and Representatives before mentioned, and the Members of the several State Legislatures, and all executive and judicial Officers, both of the United States and of the several States, shall be bound by Oath or Affirmation, to support this Constitution; but no religious Test shall ever be required as a Qualification to any Office or public Trust under the United States.",
          translation: "La Constitución es la ley suprema. La ley federal prevalece sobre la estatal cuando chocan. Todo funcionario debe jurar defender la Constitución. No se le puede exigir seguir ninguna religión (o no tener ninguna) para ocupar un cargo.",
          rights: "Ningún estado puede aprobar una ley que contradiga la Constitución o una ley federal válida. Y sus creencias religiosas (o su ausencia) no pueden usarse para excluirle de un cargo público.",
          examples: [
            "Cuando las leyes estatales chocan con la federal, gana la federal, pero la ley federal debe ser a su vez constitucional. Las leyes federales inconstitucionales pueden anularse.",
            "Varias constituciones estatales aún tienen técnicamente pruebas religiosas para el cargo (excluir a los ateos, por ejemplo), pero son inaplicables bajo la Cláusula de Supremacía.",
            "El requisito del juramento significa que los funcionarios que socavan la Constitución violan su deber jurado, sin importar su partido."
          ],
          references: [
            { text: "Cooper v. Aaron (1958) estableció que los estados no pueden anular decisiones de la Corte Suprema ni ignorar la Constitución.", source: "358 U.S. 1" },
            { text: "Torcaso v. Watkins (1961) dictaminó que los requisitos religiosos para cargos públicos son inconstitucionales.", source: "367 U.S. 488" }
          ]
        }
      ]
    },
    {
      number: 7,
      title: "Ratificación",
      summary: "Cómo se aprobó la propia Constitución: requirió 9 de los 13 estados originales.",
      sections: [
        {
          id: "a7",
          title: "El proceso de ratificación",
          original: "The Ratification of the Conventions of nine States, shall be sufficient for the Establishment of this Constitution between the States so ratifying the Same.",
          translation: "Nueve de los trece estados tenían que aprobar esta Constitución para que entrara en vigor.",
          rights: "La Constitución fue ratificada por el pueblo mediante convenciones estatales, no por las legislaturas ni por el gobierno existente. Su autoridad proviene directamente de los ciudadanos.",
          references: [
            { text: "Delaware fue el primero en ratificar (7 de diciembre de 1787). New Hampshire fue el 9.º, haciéndola oficial (21 de junio de 1788). Rhode Island fue el último (29 de mayo de 1790).", source: "Histórico" }
          ]
        }
      ]
    }
  ]
};
