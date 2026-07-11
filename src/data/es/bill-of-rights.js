// Spanish edition. The "original" field intentionally stays in English:
// it is the authoritative legal text. Everything else is translated.
export const billOfRights = {
  title: "La Carta de Derechos",
  date: "Ratificada el 15 de diciembre de 1791",
  summary: "Las primeras 10 enmiendas. Estos son sus derechos personales fundamentales: las cosas que el gobierno tiene específicamente prohibido hacerle.",
  amendments: [
    {
      number: 1,
      title: "Libertad de religión, expresión, prensa, reunión y petición",
      original: "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.",
      translation: "El gobierno no puede: crear una religión oficial, impedirle practicar la suya, silenciar su expresión, censurar a la prensa, impedirle reunirse pacíficamente ni castigarle por exigir que corrijan los problemas.",
      rights: "Son cinco derechos en una sola enmienda. Usted puede creer lo que quiera, decir lo que quiera, publicar lo que quiera, reunirse con quien quiera y quejarse ante el gobierno, y no pueden impedírselo.",
      examples: [
        "Las 'zonas de libre expresión' que alejan a los manifestantes kilómetros de los eventos que protestan neutralizan en la práctica el derecho a reunirse donde importa.",
        "Cuando el gobierno presiona a las redes sociales para eliminar contenido, eso puede ser acción estatal que restringe la expresión, aunque la censura la ejecute una empresa privada.",
        "Exigir permisos y tarifas para protestar es legal en casos limitados, pero cuando el proceso es lento, caro o se aplica selectivamente, se convierte en una barrera contra el derecho mismo.",
        "Las leyes de protección de periodistas varían según el estado. Algunos estados no ofrecen ninguna protección para que los reporteros mantengan confidenciales sus fuentes, lo que enfría la libertad de prensa."
      ],
      references: [
        { text: "Tinker v. Des Moines (1969). Los estudiantes no pierden su libertad de expresión al entrar a la escuela.", source: "393 U.S. 503" },
        { text: "New York Times v. Sullivan (1964). La prensa puede criticar a los funcionarios públicos sin temor a demandas, salvo que exista 'malicia real.'", source: "376 U.S. 254" },
        { text: "Engel v. Vitale (1962). La oración patrocinada por el gobierno en las escuelas públicas viola la Cláusula de Establecimiento.", source: "370 U.S. 421" },
        { text: "Murthy v. Missouri (2024). La Corte examinó cuándo la comunicación del gobierno con las plataformas se convierte en coerción inconstitucional.", source: "144 S. Ct. 1972" }
      ]
    },
    {
      number: 2,
      title: "Derecho a portar armas",
      original: "A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.",
      translation: "Debido a que una ciudadanía armada y entrenada es necesaria para que un país libre siga siendo libre, el derecho del pueblo a poseer y portar armas no puede ser violado.",
      rights: "Los ciudadanos tienen el derecho individual de poseer armas de fuego. Existe para que el pueblo conserve siempre la capacidad física de defenderse, ya sea de criminales, invasores o un gobierno tiránico.",
      examples: [
        "Las leyes de 'bandera roja' permiten a los tribunales confiscar armas temporalmente sin una condena penal, lo que plantea preocupaciones de debido proceso.",
        "Los sistemas de permisos discrecionales ('may-issue'), donde los funcionarios deciden a quién negar permisos de porte, pueden aplicarse de forma desigual. Los conectados obtienen permisos y los ciudadanos comunes no.",
        "La Enmienda Hughes (1986) prohibió la propiedad civil de ametralladoras nuevas, lo que elevó el precio de las existentes a decenas de miles de dólares y excluyó a los ciudadanos comunes de una clase de armas.",
        "Algunas jurisdicciones exigen registros, períodos de espera o licencias especiales que crean barreras, especialmente para personas de bajos ingresos en zonas de alta criminalidad que más necesitan protección."
      ],
      references: [
        { text: "District of Columbia v. Heller (2008). La Segunda Enmienda protege el derecho individual a poseer armas, independiente del servicio en una milicia.", source: "554 U.S. 570" },
        { text: "McDonald v. City of Chicago (2010). Este derecho individual también aplica a los gobiernos estatales y locales, no solo al federal.", source: "561 U.S. 742" },
        { text: "New York State Rifle & Pistol Assn. v. Bruen (2022). Los permisos de porte no pueden exigir demostrar una 'necesidad especial.' El derecho se extiende fuera del hogar.", source: "597 U.S. 1" }
      ]
    },
    {
      number: 3,
      title: "Alojamiento de soldados",
      original: "No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.",
      translation: "El gobierno no puede obligarle a alojar soldados en su casa en tiempos de paz. Incluso en guerra, solo puede hacerlo si una ley lo permite específicamente.",
      rights: "Su hogar es suyo. El ejército no puede apropiárselo. Esto también establece el principio más amplio de que su propiedad privada y su privacidad doméstica están protegidas de la intrusión del gobierno.",
      examples: [
        "Aunque alojar soldados literalmente es raro hoy, los tribunales han aplicado el espíritu de este principio a casos donde la policía tomó viviendas privadas como posiciones tácticas durante operativos.",
        "El principio general de privacidad del hogar de esta enmienda refuerza las protecciones de la 4.ª Enmienda."
      ],
      references: [
        { text: "Mitchell v. City of Henderson (2015). Un tribunal consideró si la policía violó la Tercera Enmienda al tomar una casa para una vigilancia.", source: "No. 2:13-cv-01154 (D. Nev.)" },
        { text: "Engblom v. Carey (1982). La Tercera Enmienda aplica a los gobiernos estatales y protege a los inquilinos, no solo a los propietarios.", source: "677 F.2d 957" }
      ]
    },
    {
      number: 4,
      title: "Registros e incautaciones",
      original: "The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.",
      translation: "Usted tiene derecho a que le dejen en paz. El gobierno no puede registrarle a usted, su casa, sus pertenencias ni sus documentos sin una buena razón. Para obtener una orden judicial, deben jurar que tienen causa probable Y describir específicamente qué buscan y dónde.",
      rights: "Esto significa: la policía necesita una orden judicial (con raras excepciones). Esa orden debe ser específica, sin expediciones de pesca. Y el estándar es la causa probable: evidencia real que sugiera un delito, no una simple corazonada.",
      examples: [
        "Los programas de vigilancia masiva que recogen los registros telefónicos, correos y actividad en internet de todos sin órdenes individuales violan el espíritu de esta enmienda, porque son la definición de un registro general.",
        "El uso policial de datos de ubicación celular para rastrear sus movimientos sin orden judicial fue declarado inconstitucional en Carpenter v. United States.",
        "Los perros antidrogas en paradas de tráfico, si extienden la parada más allá de su propósito original sin sospecha razonable, violan la 4.ª Enmienda.",
        "El decomiso civil de bienes confisca propiedad sin condena penal. El gobierno toma primero, y usted debe probar su inocencia para recuperarla."
      ],
      references: [
        { text: "Carpenter v. United States (2018). La policía necesita una orden judicial para acceder a los registros de ubicación de un teléfono celular.", source: "585 U.S. 296" },
        { text: "Riley v. California (2014). La policía necesita una orden judicial para registrar su teléfono celular, incluso durante un arresto.", source: "573 U.S. 373" },
        { text: "Katz v. United States (1967). La 4.ª Enmienda protege a las personas, no a los lugares. Intervenir un teléfono es un registro.", source: "389 U.S. 347" },
        { text: "Rodriguez v. United States (2015). La policía no puede extender una parada de tráfico para esperar a un perro antidrogas sin sospecha razonable.", source: "575 U.S. 348" }
      ]
    },
    {
      number: 5,
      title: "Derechos del acusado",
      original: "No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury, except in cases arising in the land or naval forces, or in the Militia, when in actual service in time of War or public danger; nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.",
      translation: "Para delitos graves, un gran jurado debe acusarle primero. No pueden juzgarle dos veces por el mismo delito. No pueden obligarle a testificar contra sí mismo. No puede perder su vida, libertad o propiedad sin un proceso legal justo. Si el gobierno toma su propiedad para uso público, debe pagarle un precio justo.",
      rights: "Cinco protecciones en una: (1) Requisito de gran jurado, (2) Prohibición del doble juicio, (3) Derecho a guardar silencio, (4) Debido proceso, (5) Pago justo si el gobierno toma su propiedad. Existen porque sin ellas, el gobierno puede destruir su vida usando solo el proceso legal.",
      examples: [
        "Abuso de expropiación: gobiernos que confiscan viviendas privadas y entregan el terreno a desarrolladores privados por 'desarrollo económico', pagando por debajo del valor de mercado.",
        "El decomiso civil de bienes esquiva el debido proceso porque se 'acusa' a su propiedad (no a usted), así que las protecciones penales no aplican. El caso se llama literalmente 'Estados Unidos contra $35,000 en efectivo.'",
        "Los acuerdos de culpabilidad presionan a inocentes a declararse culpables. Ante décadas de prisión en juicio contra meses con un acuerdo, hasta los inocentes aceptan el trato, lo que socava la protección del gran jurado.",
        "El 'derecho a guardar silencio' se debilita cuando los fiscales piden al jurado sacar conclusiones negativas de que el acusado no testifique."
      ],
      references: [
        { text: "Miranda v. Arizona (1966). Deben informarle de su derecho a guardar silencio antes de un interrogatorio bajo custodia.", source: "384 U.S. 436" },
        { text: "Kelo v. City of New London (2005). La Corte permitió polémicamente la expropiación para desarrollo económico privado.", source: "545 U.S. 469" },
        { text: "Gamble v. United States (2019). Soberanos distintos (estado + federal) pueden procesar el mismo acto sin violar la prohibición del doble juicio.", source: "587 U.S. 678" }
      ]
    },
    {
      number: 6,
      title: "Derecho a un juicio justo",
      original: "In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed, which district shall have been previously ascertained by law, and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.",
      translation: "Si le acusan de un delito, usted tiene derecho a: un juicio rápido (sin pudrirse en la cárcel esperando), un juicio público (sin tribunales secretos), un jurado local de gente común, saber exactamente de qué le acusan, enfrentar cara a cara a sus acusadores, obligar a testigos a declarar a su favor, y un abogado, aunque no pueda pagarlo.",
      rights: "El gobierno no puede encerrarle en una celda y olvidarse de usted. Deben acusarle, juzgarle con rapidez, dejarle defenderse y hacerlo todo a la vista del público.",
      examples: [
        "Hay personas que pasan meses o años en la cárcel esperando juicio porque no pueden pagar la fianza, lo que viola el 'juicio rápido' en la práctica aunque no técnicamente en la ley.",
        "Los defensores públicos suelen llevar más de 500 casos a la vez, haciendo casi imposible una defensa real para los acusados pobres. Tener un abogado en papel no es lo mismo que tener una defensa efectiva.",
        "La evidencia secreta y los procedimientos clasificados (especialmente en casos de seguridad nacional) pueden impedir que los acusados confronten a sus acusadores o siquiera conozcan el caso completo en su contra.",
        "Los cambios de sede en casos mediáticos pueden alejar los juicios de la comunidad, debilitando la protección del 'jurado local.'"
      ],
      references: [
        { text: "Gideon v. Wainwright (1963). Si no puede pagar un abogado, el estado debe proporcionarle uno para cualquier cargo que pueda implicar cárcel.", source: "372 U.S. 335" },
        { text: "Barker v. Wingo (1972). Estableció una prueba de equilibrio para las violaciones del derecho a un juicio rápido.", source: "407 U.S. 514" },
        { text: "Crawford v. Washington (2004). Las declaraciones testimoniales de testigos ausentes son inadmisibles salvo que el acusado haya podido contrainterrogarlos antes.", source: "541 U.S. 36" }
      ]
    },
    {
      number: 7,
      title: "Derecho a jurado en casos civiles",
      original: "In Suits at common law, where the value in controversy shall exceed twenty dollars, no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, than according to the rules of the common law.",
      translation: "En demandas civiles de más de $20 (cualquier monto significativo), usted tiene derecho a un juicio con jurado. Una vez que un jurado decide los hechos, ningún juez puede simplemente anular sus conclusiones.",
      rights: "Esto significa que ciudadanos comunes, no solo jueces, deciden las disputas. Evita que las partes poderosas (corporaciones, gobierno) tengan casos decididos únicamente por funcionarios que podrían favorecerlas.",
      examples: [
        "Las cláusulas de arbitraje obligatorio en contratos laborales, tarjetas de crédito y términos de servicio le obligan a renunciar a su derecho a jurado antes de que exista siquiera una disputa.",
        "Cuando usted pulsa 'Acepto' en la mayoría de las aplicaciones y servicios, a menudo renuncia a su derecho de la 7.ª Enmienda sin darse cuenta.",
        "Las renuncias a demandas colectivas combinadas con cláusulas de arbitraje pueden hacer económicamente imposible presentar reclamos válidos, porque no puede unirse a otros y el arbitraje individual cuesta más de lo que vale el reclamo."
      ],
      references: [
        { text: "Epic Systems Corp. v. Lewis (2018). Confirmó las cláusulas de arbitraje obligatorio que renuncian a demandas colectivas en acuerdos laborales.", source: "584 U.S. 497" },
        { text: "AT&T Mobility v. Concepcion (2011). Las empresas pueden imponer cláusulas de arbitraje que prohíben las demandas colectivas.", source: "563 U.S. 333" }
      ]
    },
    {
      number: 8,
      title: "Castigos crueles e inusuales",
      original: "Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.",
      translation: "La fianza no puede fijarse imposiblemente alta. Las multas no pueden ser excesivas. Los castigos no pueden ser crueles ni inusuales.",
      rights: "Tres protecciones: (1) La fianza debe ser lo bastante asequible para funcionar de verdad, (2) Las multas deben ser proporcionales a la falta, (3) El castigo no puede ser bárbaro ni groseramente desproporcionado al delito.",
      examples: [
        "Los sistemas de fianza en efectivo que mantienen a los pobres en la cárcel por faltas menores mientras los ricos acusados del mismo delito salen libres. Eso es fianza excesiva aplicada por clase económica.",
        "Los municipios que financian sus presupuestos con multas y cargos agresivos a los residentes (multas de tráfico, costas judiciales, recargos por pago tardío) usan el sistema de justicia como fuente de ingresos.",
        "La cadena perpetua sin libertad condicional por delitos de drogas no violentos plantea serias dudas de proporcionalidad.",
        "El confinamiento solitario prolongado ha sido reconocido internacionalmente como tortura, y sin embargo sigue siendo común en las prisiones estadounidenses."
      ],
      references: [
        { text: "Timbs v. Indiana (2019). La Cláusula de Multas Excesivas aplica a los estados. Confiscar un vehículo de $42,000 por un delito de drogas de $10,000 era potencialmente excesivo.", source: "586 U.S. 146" },
        { text: "DOJ Ferguson Report (2015). Documentó cómo Ferguson, Misuri, usó a la policía y los tribunales como generadores de ingresos, imponiendo multas aplastantes a residentes pobres.", source: "Departamento de Justicia de EE. UU., División de Derechos Civiles" },
        { text: "Graham v. Florida (2010). La cadena perpetua sin libertad condicional para menores en casos sin homicidio es cruel e inusual.", source: "560 U.S. 48" }
      ]
    },
    {
      number: 9,
      title: "Derechos retenidos por el pueblo",
      original: "The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.",
      translation: "Que un derecho no esté específicamente listado aquí no significa que usted no lo tenga. Esta lista no está completa, y usted tiene más derechos de los que están escritos.",
      rights: "Esto es enorme. El gobierno no puede decir 'bueno, la Constitución no menciona específicamente X, así que usted no tiene ese derecho.' Sus derechos no se limitan a lo que está en este documento.",
      examples: [
        "El derecho a la privacidad no está explícitamente en la Constitución, pero la 9.ª Enmienda (junto con otras) respalda su existencia.",
        "El derecho a viajar entre estados, el derecho al voto (originalmente), el derecho a criar a sus hijos como considere: ninguno está listado explícitamente, y todos están protegidos.",
        "Cuando el gobierno alega que una nueva tecnología significa que usted 'no tiene expectativa de privacidad', la 9.ª Enmienda responde: la tecnología nueva no borra los derechos antiguos."
      ],
      references: [
        { text: "Griswold v. Connecticut (1965). El voto concurrente del juez Goldberg usó la 9.ª Enmienda para respaldar el derecho a la privacidad conyugal.", source: "381 U.S. 479" },
        { text: "Richmond Newspapers v. Virginia (1980). El derecho del público a asistir a juicios penales, aunque no está listado, está protegido.", source: "448 U.S. 555" }
      ]
    },
    {
      number: 10,
      title: "Poderes reservados a los estados y al pueblo",
      original: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.",
      translation: "Si la Constitución no otorga específicamente un poder al gobierno federal, ese poder pertenece a los estados o al pueblo. El gobierno federal solo tiene los poderes aquí listados y nada más.",
      rights: "El gobierno federal tiene poderes LIMITADOS y DEFINIDOS. Todo lo demás queda en manos de los estados o de las personas. Esto debe impedir la extralimitación federal en áreas que la Constitución nunca autorizó.",
      examples: [
        "El gobierno federal usa la Cláusula de Comercio para regular mucho más allá de lo que 'el comercio entre los estados' significaba originalmente, esquivando en la práctica los límites de la 10.ª Enmienda.",
        "Las condiciones de financiamiento federal (como 'hagan lo que decimos o pierden el dinero de carreteras') presionan a los estados a obedecer deseos federales en asuntos reservados a los estados.",
        "La educación, la salud, la vivienda y muchas otras áreas fueron históricamente asuntos estatales. La participación federal en ellas se justifica constitucionalmente mediante lecturas amplias de las cláusulas de Comercio y de Gasto."
      ],
      references: [
        { text: "United States v. Lopez (1995). La Corte anuló una ley federal de armas porque no trataba realmente del comercio interestatal. Raro límite moderno a la expansión de la Cláusula de Comercio.", source: "514 U.S. 549" },
        { text: "National Federation of Independent Business v. Sebelius (2012). No se puede coaccionar a los estados a expandir Medicaid amenazando su financiamiento existente.", source: "567 U.S. 519" },
        { text: "Printz v. United States (1997). El gobierno federal no puede obligar a funcionarios estatales a aplicar la ley federal.", source: "521 U.S. 898" }
      ]
    }
  ]
};
