// Spanish edition. The "original" field intentionally stays in English:
// it is the authoritative legal text. Everything else is translated.
export const laterAmendments = {
  title: "Enmiendas 11-27",
  summary: "Las enmiendas restantes, ratificadas entre 1795 y 1992. Ampliaron derechos, corrigieron problemas y adaptaron la Constitución a una nación cambiante.",
  amendments: [
    {
      number: 11,
      title: "Inmunidad soberana estatal",
      year: 1795,
      original: "The Judicial power of the United States shall not be construed to extend to any suit in law or equity, commenced or prosecuted against one of the United States by Citizens of another State, or by Citizens or Subjects of any Foreign State.",
      translation: "Usted no puede demandar a un estado en un tribunal federal si es de otro estado o de un país extranjero.",
      rights: "Esto limita su capacidad de exigir cuentas a los gobiernos estatales en tribunales federales. Los estados tienen inmunidad frente a muchas demandas salvo que consientan ser demandados.",
      examples: [
        "Si un estado viola sus derechos, a menudo no puede demandar al estado directamente. Debe demandar al funcionario específico responsable (una vía establecida por jurisprudencia posterior).",
        "Universidades, agencias y entidades estatales a veces pueden evitar demandas alegando inmunidad soberana."
      ],
      references: [
        { text: "Ex parte Young (1908): Usted puede demandar a funcionarios estatales (no al estado) por violaciones constitucionales en curso.", source: "209 U.S. 123" },
        { text: "Alden v. Maine (1999): Los estados también son inmunes a demandas privadas en sus propios tribunales, salvo que consientan.", source: "527 U.S. 706" }
      ]
    },
    {
      number: 12,
      title: "Revisión del Colegio Electoral",
      year: 1804,
      original: "The Electors shall meet in their respective states and vote by ballot for President and Vice-President, one of whom, at least, shall not be an inhabitant of the same state with themselves; they shall name in their ballots the person voted for as President, and in distinct ballots the person voted for as Vice-President, and they shall make distinct lists of all persons voted for as President, and of all persons voted for as Vice-President, and of the number of votes for each, which lists they shall sign and certify, and transmit sealed to the seat of the government of the United States, directed to the President of the Senate;--The President of the Senate shall, in the presence of the Senate and House of Representatives, open all the certificates and the votes shall then be counted;--The person having the greatest number of votes for President, shall be the President, if such number be a majority of the whole number of Electors appointed; and if no person have such majority, then from the persons having the highest numbers not exceeding three on the list of those voted for as President, the House of Representatives shall choose immediately, by ballot, the President. But in choosing the President, the votes shall be taken by states, the representation from each state having one vote; a quorum for this purpose shall consist of a member or members from two-thirds of the states, and a majority of all the states shall be necessary to a choice. And if the House of Representatives shall not choose a President whenever the right of choice shall devolve upon them, before the fourth day of March next following, then the Vice-President shall act as President, as in the case of the death or other constitutional disability of the President. The person having the greatest number of votes as Vice-President, shall be the Vice-President, if such number be a majority of the whole number of Electors appointed, and if no person have a majority, then from the two highest numbers on the list, the Senate shall choose the Vice-President; a quorum for the purpose shall consist of two-thirds of the whole number of Senators, and a majority of the whole number shall be necessary to a choice. But no person constitutionally ineligible to the office of President shall be eligible to that of Vice-President of the United States.",
      translation: "El Presidente y el Vicepresidente se votan por separado (antes, el segundo lugar se convertía en Vicepresidente). Los electores emiten un voto para Presidente y otro distinto para Vicepresidente.",
      rights: "Esto corrigió un defecto de diseño de la Constitución original que causó caos en la elección de 1800. Estableció el sistema de fórmula presidencial que tenemos hoy.",
      examples: [
        "El propio Colegio Electoral sigue siendo polémico porque un candidato puede ganar el voto popular y perder la elección, como ocurrió en 2000 y 2016.",
        "Algunos estados se están sumando al Pacto Interestatal del Voto Popular Nacional para esquivar en la práctica el Colegio Electoral sin enmendar la Constitución."
      ],
      references: [
        { text: "La elección de 1800 entre Jefferson y Burr se empantanó porque el sistema antiguo no distinguía entre votos presidenciales y vicepresidenciales.", source: "Histórico" },
        { text: "Chiafalo v. Washington (2020): Los estados pueden sancionar o reemplazar a los 'electores desleales' que no votan como prometieron.", source: "591 U.S. 578" }
      ]
    },
    {
      number: 13,
      title: "Abolición de la esclavitud",
      year: 1865,
      original: "Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction. Congress shall have power to enforce this article by appropriate legislation.",
      translation: "La esclavitud es ilegal. El trabajo forzado es ilegal. La única excepción: las personas condenadas por delitos pueden ser obligadas a trabajar como parte de su castigo.",
      rights: "Nadie puede ser dueño de usted, y no pueden obligarle a trabajar contra su voluntad. Sin embargo, la excepción para condenados tiene implicaciones modernas significativas.",
      examples: [
        "Los programas de trabajo penitenciario pagan a los reclusos centavos por hora (a veces $0.12-0.40/hora) por trabajo que beneficia a empresas privadas y operaciones gubernamentales. Esa es la excepción del 'castigo' en la práctica.",
        "La trata de personas sigue siendo una forma moderna de esclavitud. A pesar de esta enmienda, se estima que cientos de miles de personas son traficadas en EE. UU. cada año.",
        "La servidumbre por deudas y los contratos laborales abusivos que atrapan a los trabajadores (especialmente inmigrantes indocumentados) evocan la servidumbre involuntaria."
      ],
      references: [
        { text: "Jones v. Alfred H. Mayer Co. (1968): El Congreso puede prohibir la discriminación racial privada bajo el poder de aplicación de la 13.ª Enmienda.", source: "392 U.S. 409" },
        { text: "La cláusula de excepción de la 13.ª Enmienda habilitó directamente los sistemas de arrendamiento de convictos tras la Guerra Civil, que algunos historiadores consideran 'esclavitud con otro nombre.'", source: "Análisis histórico, Douglas Blackmon (2008)" }
      ]
    },
    {
      number: 14,
      title: "Protección igualitaria y debido proceso",
      year: 1868,
      original: "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.",
      translation: "Si usted nació aquí o se naturalizó, es ciudadano. Punto. Ningún estado puede aprobar leyes que le quiten sus derechos como ciudadano. Ningún estado puede quitarle la vida, la libertad o la propiedad sin un proceso legal justo. Ningún estado puede negar a nadie la protección igualitaria de las leyes.",
      rights: "Podría decirse que es la enmienda más importante después de la Carta de Derechos. (1) Define la ciudadanía, (2) aplica la Carta de Derechos a los gobiernos ESTATALES (no solo al federal), y (3) exige que toda persona sea tratada igual ante la ley. La mayoría de las protecciones de derechos civiles nacen de esta enmienda.",
      examples: [
        "Antes de esta enmienda, los estados podían violar sus derechos libremente porque la Carta de Derechos solo limitaba al gobierno federal. La 14.ª lo cambió.",
        "La inmunidad calificada permite a los funcionarios violar sus derechos sin responsabilidad personal salvo que la violación exacta ya estuviera 'claramente establecida' por jurisprudencia previa, lo que según los críticos socava la protección igualitaria.",
        "El perfilamiento racial, las sentencias discriminatorias y el financiamiento escolar desigual plantean desafíos de protección igualitaria.",
        "La cláusula del debido proceso se ha usado para proteger derechos no mencionados explícitamente en la Constitución (debido proceso sustantivo)."
      ],
      references: [
        { text: "Brown v. Board of Education (1954): La segregación racial en las escuelas públicas viola la protección igualitaria.", source: "347 U.S. 483" },
        { text: "Loving v. Virginia (1967): Las prohibiciones del matrimonio interracial violan la protección igualitaria.", source: "388 U.S. 1" },
        { text: "Harlow v. Fitzgerald (1982): Estableció la doctrina moderna de la inmunidad calificada.", source: "457 U.S. 800" }
      ]
    },
    {
      number: 15,
      title: "Derecho al voto sin distinción de raza",
      year: 1870,
      original: "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of race, color, or previous condition of servitude.",
      translation: "El gobierno no puede negarle el derecho al voto por su raza ni porque usted o sus antepasados fueron esclavizados.",
      rights: "No pueden rechazarle en las urnas por su raza. Hoy parece obvio, pero tomó un siglo más de lucha (impuestos al voto, pruebas de alfabetización, intimidación) antes de que la Ley de Derecho al Voto de 1965 lo hiciera realidad.",
      examples: [
        "Tras aprobarse esta enmienda, los estados usaron impuestos al voto, pruebas de alfabetización, cláusulas del abuelo y violencia abierta para impedir el voto de los ciudadanos negros durante otros 95 años.",
        "Las leyes modernas de identificación de votantes, el cierre de centros de votación en vecindarios minoritarios y las purgas de padrones que afectan desproporcionadamente a votantes minoritarios plantean dudas sobre nuevas formas de la vieja supresión.",
        "La pérdida del voto por condenas penales excluye a millones, afectando desproporcionadamente a los estadounidenses negros por las disparidades del sistema de justicia penal."
      ],
      references: [
        { text: "Shelby County v. Holder (2013): Anuló la fórmula de autorización previa de la Ley de Derecho al Voto, eliminando la supervisión federal de estados con historiales de discriminación.", source: "570 U.S. 529" },
        { text: "Brnovich v. Democratic National Committee (2021): Dificultó impugnar restricciones al voto bajo la Ley de Derecho al Voto.", source: "594 U.S. 647" }
      ]
    },
    {
      number: 16,
      title: "Impuesto sobre la renta",
      year: 1913,
      original: "The Congress shall have power to lay and collect taxes on incomes, from whatever source derived, without apportionment among the several States, and without regard to any census or enumeration.",
      translation: "El Congreso puede gravar directamente sus ingresos. No tiene que repartir el impuesto entre los estados según su población.",
      rights: "Esto dio al gobierno federal el poder de gravar el ingreso individual. Antes, el gobierno federal dependía principalmente de aranceles e impuestos especiales.",
      examples: [
        "El código tributario ha crecido a más de 6,000 páginas. Su complejidad beneficia a quienes pueden pagar contadores y abogados para encontrar resquicios.",
        "A los asalariados se les retienen los impuestos automáticamente, mientras el ingreso por inversiones (ganancias de capital) tributa a tasas menores; el 'ingreso' que más agresivamente se grava es el dinero del trabajo."
      ],
      references: [
        { text: "Pollock v. Farmers' Loan & Trust Co. (1895): El caso que anuló un impuesto sobre la renta anterior e hizo necesaria esta enmienda.", source: "157 U.S. 429" }
      ]
    },
    {
      number: 17,
      title: "Elección directa de senadores",
      year: 1913,
      original: "The Senate of the United States shall be composed of two Senators from each State, elected by the people thereof, for six years; and each Senator shall have one vote.",
      translation: "Los senadores son elegidos directamente por el pueblo de su estado. Antes, los elegían las legislaturas estatales.",
      rights: "Usted vota directamente por sus senadores. Esto hizo al Senado responsable ante los ciudadanos en lugar de ante los políticos estatales.",
      examples: [
        "Algunos sostienen que esto debilitó el federalismo al quitar a los estados su voz directa en el Congreso; otros dicen que hizo a los senadores responsables ante votantes reales.",
        "El costo masivo de las campañas al Senado hace que los senadores dependan de grandes donantes, lo que cuestiona si la elección directa realmente los hizo más responsables ante los ciudadanos comunes."
      ],
      references: [
        { text: "La corrupción de legislaturas estatales que 'compraban' escaños del Senado fue un motivador principal. Entre 1857 y 1900, tres elecciones al Senado fueron anuladas por soborno.", source: "Histórico, registros del Senado de EE. UU." }
      ]
    },
    {
      number: 18,
      title: "Prohibición del alcohol",
      year: 1919,
      original: "After one year from the ratification of this article the manufacture, sale, or transportation of intoxicating liquors within, the importation thereof into, or the exportation thereof from the United States and all territory subject to the jurisdiction thereof for beverage purposes is hereby prohibited.",
      translation: "Fabricar, vender o transportar alcohol es ilegal.",
      rights: "Esta enmienda QUITÓ un derecho: el derecho a beber. Es la única enmienda que restringió la libertad personal en lugar de protegerla. Fue derogada 14 años después por la 21.ª Enmienda porque fue un desastre.",
      examples: [
        "La Prohibición creó el crimen organizado, llenó las cárceles y se aplicó selectivamente (los ricos siguieron bebiendo). Es un caso de estudio de lo que pasa cuando el gobierno intenta regular la conducta personal.",
        "Los paralelos con la Guerra contra las Drogas son directos: prohibir una sustancia que la gente quiere crea mercados negros, violencia, encarcelamiento masivo y aplicación selectiva."
      ],
      references: [
        { text: "Derogada por la 21.ª Enmienda en 1933 tras 13 años de ilegalidad generalizada, crecimiento del crimen organizado y fracaso policial.", source: "Histórico" }
      ]
    },
    {
      number: 19,
      title: "Derecho al voto de la mujer",
      year: 1920,
      original: "The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any State on account of sex.",
      translation: "Las mujeres pueden votar. El gobierno no puede negar el voto de nadie por su sexo.",
      rights: "La mitad de la población ganó plena participación política. Pasaron 144 años desde la Declaración de Independencia hasta que las mujeres obtuvieron el voto.",
      examples: [
        "El sufragio femenino tomó 72 años de activismo organizado desde Seneca Falls (1848) hasta la ratificación. Los derechos no se regalan. Se conquistan con demanda persistente.",
        "A pesar del voto, las mujeres siguen subrepresentadas en los cargos electos: aproximadamente el 29% del Congreso en años recientes."
      ],
      references: [
        { text: "Minor v. Happersett (1875): El vergonzoso caso que dijo que la ciudadanía por sí sola no garantizaba a las mujeres el derecho al voto, haciendo necesaria esta enmienda.", source: "88 U.S. 162" }
      ]
    },
    {
      number: 20,
      title: "Fechas del mandato presidencial",
      year: 1933,
      original: "Section 1. The terms of the President and the Vice President shall end at noon on the 20th day of January, and the terms of Senators and Representatives at noon on the 3d day of January, of the years in which such terms would have ended if this article had not been ratified; and the terms of their successors shall then begin. Section 2. The Congress shall assemble at least once in every year, and such meeting shall begin at noon on the 3d day of January, unless they shall by law appoint a different day. Section 3. If, at the time fixed for the beginning of the term of the President, the President elect shall have died, the Vice President elect shall become President. If a President shall not have been chosen before the time fixed for the beginning of his term, or if the President elect shall have failed to qualify, then the Vice President elect shall act as President until a President shall have qualified; and the Congress may by law provide for the case wherein neither a President elect nor a Vice President elect shall have qualified, declaring who shall then act as President, or the manner in which one who is to act shall be selected, and such person shall act accordingly until a President or Vice President shall have qualified. Section 4. The Congress may by law provide for the case of the death of any of the persons from whom the House of Representatives may choose a President whenever the right of choice shall have devolved upon them, and for the case of the death of any of the persons from whom the Senate may choose a Vice President whenever the right of choice shall have devolved upon them. Section 5. Sections 1 and 2 shall take effect on the 15th day of October following the ratification of this article. Section 6. This article shall be inoperative unless it shall have been ratified as an amendment to the Constitution by the legislatures of three-fourths of the several States within seven years from the date of its submission.",
      translation: "El mandato del Presidente empieza y termina el 20 de enero. El Congreso empieza el 3 de enero. Esto eliminó el largo período de 'pato cojo' entre la elección y la toma de posesión.",
      rights: "Reduce el tiempo que un político derrotado conserva el poder. Lleva antes al cargo a los recién elegidos para que la decisión del pueblo surta efecto más pronto.",
      examples: [
        "El período de transición entre la elección (noviembre) y la investidura (20 de enero) aún supera los dos meses, un lapso en el que la administración saliente puede hacer cambios de política, nombramientos y órdenes ejecutivas de último minuto."
      ],
      references: [
        { text: "Antes, las investiduras eran en marzo, cuatro meses después de la elección. El Congreso 'pato cojo' podía aprobar leyes impopulares sin rendición de cuentas electoral.", source: "Histórico" }
      ]
    },
    {
      number: 21,
      title: "Derogación de la Prohibición",
      year: 1933,
      original: "The eighteenth article of amendment to the Constitution of the United States is hereby repealed.",
      translation: "La 18.ª Enmienda (Prohibición) queda cancelada. El alcohol vuelve a ser legal. Los estados pueden fijar sus propias leyes sobre el alcohol.",
      rights: "Es la única enmienda que deroga otra enmienda. Restauró la libertad personal y demostró que las malas enmiendas SÍ pueden deshacerse. También delegó la regulación del alcohol a los estados.",
      examples: [
        "La existencia de esta enmienda demuestra que la Constitución puede corregir sus propios errores. Si la Prohibición pudo derogarse, cualquier enmienda puede. La Constitución es un documento vivo.",
        "Algunos sostienen que este precedente debería aplicarse a la prohibición moderna de las drogas, que crea problemas similares (mercados negros, encarcelamiento masivo, aplicación selectiva)."
      ],
      references: [
        { text: "La única enmienda ratificada por convenciones estatales en lugar de legislaturas, porque el lobby de la templanza controlaba muchas legislaturas.", source: "Histórico" }
      ]
    },
    {
      number: 22,
      title: "Límite de mandatos presidenciales",
      year: 1951,
      original: "No person shall be elected to the office of the President more than twice, and no person who has held the office of President, or acted as President, for more than two years of a term to which some other person was elected President shall be elected to the office of President more than once.",
      translation: "Nadie puede ser Presidente más de dos mandatos (8 años). Si usted sirvió más de 2 años del mandato de otra persona, solo puede ser elegido una vez.",
      rights: "Esto impide que una sola persona conserve el poder presidencial indefinidamente. Es una protección estructural contra el autoritarismo.",
      examples: [
        "FDR ganó cuatro mandatos antes de que esta enmienda se aprobara. El país decidió que, por popular que sea un presidente, el poder concentrado por demasiado tiempo es peligroso.",
        "No existe un límite equivalente para el Congreso, donde algunos miembros sirven más de 30-40 años, acumulando enorme poder con poca rendición de cuentas."
      ],
      references: [
        { text: "George Washington se retiró voluntariamente tras dos mandatos, fijando un precedente que duró 150 años hasta que FDR lo rompió.", source: "Histórico" }
      ]
    },
    {
      number: 23,
      title: "Votos electorales para D.C.",
      year: 1961,
      original: "Section 1. The District constituting the seat of Government of the United States shall appoint in such manner as the Congress may direct: A number of electors of President and Vice President equal to the whole number of Senators and Representatives in Congress to which the District would be entitled if it were a State, but in no event more than the least populous State; they shall be in addition to those appointed by the States, but they shall be considered, for the purposes of the election of President and Vice President, to be electors appointed by a State; and they shall meet in the District and perform such duties as provided by the twelfth article of amendment. Section 2. The Congress shall have power to enforce this article by appropriate legislation.",
      translation: "Los residentes de Washington D.C. obtienen votos electorales para Presidente (3 votos). Antes, los residentes de D.C. no tenían ninguna voz en las elecciones presidenciales.",
      rights: "Más de 700,000 ciudadanos estadounidenses que viven en D.C. ahora pueden votar por Presidente. Sin embargo, siguen sin tener representación con voto en el Congreso.",
      examples: [
        "Los residentes de D.C. pagan impuestos federales, sirven en el ejército y obedecen las leyes federales, pero no tienen senadores ni representantes con voto. Sus placas dicen 'Taxation Without Representation' (impuestos sin representación).",
        "La estadidad de D.C. se ha propuesto repetidamente para dar a estos ciudadanos plena representación, pero sigue siendo políticamente contenciosa."
      ],
      references: [
        { text: "Adams v. Clinton (2000): Un tribunal dictaminó que los residentes de D.C. no tienen derecho constitucional a representación con voto en el Congreso.", source: "90 F. Supp. 2d 35" }
      ]
    },
    {
      number: 24,
      title: "Abolición de los impuestos al voto",
      year: 1964,
      original: "The right of citizens of the United States to vote in any primary or other election for President or Vice President, for electors for President or Vice President, or for Senator or Representative in Congress, shall not be denied or abridged by the United States or any State by reason of failure to pay any poll tax or other tax.",
      translation: "No pueden cobrarle por votar. Sin impuestos al voto, punto.",
      rights: "Votar es gratis. El gobierno no puede ponerle precio a su derecho a participar en la democracia. Esto eliminó una herramienta usada principalmente para impedir el voto de los pobres y de los ciudadanos negros.",
      examples: [
        "Equivalentes modernos: exigir documentos de identidad de pago para votar, cerrar oficinas del DMV en zonas minoritarias, hacer caro o lento obtener la identificación requerida.",
        "Las costas judiciales, multas y restituciones que deben pagarse antes de restaurar el voto a exconvictos funcionan como impuestos al voto modernos."
      ],
      references: [
        { text: "Harper v. Virginia Board of Elections (1966): Extendió la prohibición del impuesto al voto a las elecciones estatales y locales bajo la Cláusula de Protección Igualitaria.", source: "383 U.S. 663" },
        { text: "Jones v. Governor of Florida (2020): Un tribunal confirmó exigir el pago de todas las multas antes de que los exconvictos voten, lo que los críticos llamaron un impuesto al voto moderno.", source: "975 F.3d 1016" }
      ]
    },
    {
      number: 25,
      title: "Sucesión presidencial",
      year: 1967,
      original: "Section 1. In case of the removal of the President from office or of his death or resignation, the Vice President shall become President. Section 2. Whenever there is a vacancy in the office of the Vice President, the President shall nominate a Vice President who shall take office upon confirmation by a majority vote of both Houses of Congress. Section 3. Whenever the President transmits to the President pro tempore of the Senate and the Speaker of the House of Representatives his written declaration that he is unable to discharge the powers and duties of his office, and until he transmits to them a written declaration to the contrary, such powers and duties shall be discharged by the Vice President as Acting President. Section 4. Whenever the Vice President and a majority of either the principal officers of the executive departments or of such other body as Congress may by law provide, transmit to the President pro tempore of the Senate and the Speaker of the House of Representatives their written declaration that the President is unable to discharge the powers and duties of his office, the Vice President shall immediately assume the powers and duties of the office as Acting President. Thereafter, when the President transmits to the President pro tempore of the Senate and the Speaker of the House of Representatives his written declaration that no inability exists, he shall resume the powers and duties of his office unless the Vice President and a majority of either the principal officers of the executive department or of such other body as Congress may by law provide, transmit within four days to the President pro tempore of the Senate and the Speaker of the House of Representatives their written declaration that the President is unable to discharge the powers and duties of his office. Thereupon Congress shall decide the issue, assembling within forty-eight hours for that purpose if not in session. If the Congress, within twenty-one days after receipt of the latter written declaration, or, if Congress is not in session, within twenty-one days after Congress is required to assemble, determines by two-thirds vote of both Houses that the President is unable to discharge the powers and duties of his office, the Vice President shall continue to discharge the same as Acting President; otherwise, the President shall resume the powers and duties of his office.",
      translation: "Si el Presidente muere, renuncia o es destituido: el Vicepresidente se convierte en Presidente. Si el puesto de Vicepresidente queda vacío, el Presidente elige uno nuevo (confirmado por el Congreso). Si el Presidente queda temporalmente incapacitado, el Vicepresidente asume hasta que se recupere.",
      rights: "Esto asegura que siempre haya una línea de sucesión clara y un proceso para manejar a un presidente incapacitado. Evita vacíos de poder y ambigüedad.",
      examples: [
        "La Sección 4 (destitución involuntaria de un presidente incapacitado) nunca se ha invocado con éxito. El umbral (Vicepresidente más la mayoría del gabinete) la hace casi imposible en la práctica.",
        "Gerald Ford llegó a Vicepresidente (y luego a Presidente) sin haber sido elegido para ninguno de los dos cargos, usando la Sección 2 de esta enmienda."
      ],
      references: [
        { text: "Se usó cuando Nixon renunció (1974): Ford asumió la presidencia y luego nominó a Rockefeller como Vicepresidente.", source: "Histórico" },
        { text: "La Sección 3 se ha invocado para procedimientos médicos presidenciales (colonoscopias, cirugías), transfiriendo el poder temporalmente al Vicepresidente.", source: "Histórico" }
      ]
    },
    {
      number: 26,
      title: "Edad para votar reducida a 18",
      year: 1971,
      original: "The right of citizens of the United States, who are eighteen years of age or older, to vote shall not be denied or abridged by the United States or by any State on account of age.",
      translation: "Si usted tiene 18 años o más, puede votar. Ningún gobierno puede negarle el voto por su edad.",
      rights: "Si tiene edad suficiente para ser reclutado y enviado a la guerra, tiene edad suficiente para votar sobre si debe haber guerra. Fue una respuesta directa al reclutamiento de la Guerra de Vietnam.",
      examples: [
        "El argumento 'con edad para pelear, con edad para votar' es directo. Sin embargo, a los 18 se puede votar y ser enviado a la guerra, pero no comprar alcohol (21) ni alquilar un auto (25) en la mayoría de los lugares.",
        "La participación electoral juvenil sigue siendo bastante menor que la de los grupos mayores, así que el derecho que tanto costó conquistar está subutilizado."
      ],
      references: [
        { text: "Oregon v. Mitchell (1970): La Corte dictaminó que el Congreso podía fijar la edad para votar en elecciones federales pero no estatales, forzando esta enmienda.", source: "400 U.S. 112" }
      ]
    },
    {
      number: 27,
      title: "Salarios del Congreso",
      year: 1992,
      original: "No law, varying the compensation for the services of the Senators and Representatives, shall take effect, until an election of Representatives shall have intervened.",
      translation: "El Congreso no puede darse un aumento que surta efecto de inmediato. Cualquier cambio salarial entra en vigor después de la siguiente elección, para que los votantes opinen primero.",
      rights: "Usted tiene voz antes de que sus representantes reciban un aumento. No pueden votarse más dinero y embolsárselo antes de que usted pueda votar para sacarlos.",
      examples: [
        "Se propuso originalmente en 1789 y no se ratificó hasta 1992, 203 años después. Un estudiante universitario (Gregory Watson) notó que no tenía fecha de expiración e hizo campaña por su ratificación.",
        "El Congreso ha encontrado atajos: ajustes automáticos por costo de vida (COLA) que aumentan el salario sin un 'voto' formal, aunque el Congreso los ha bloqueado en muchos años recientes."
      ],
      references: [
        { text: "Propuesta originalmente por James Madison en 1789 como parte de la Carta de Derechos original. Fue una de las dos enmiendas no ratificadas entonces (la otra, sobre el reparto de escaños, sigue sin ratificarse).", source: "Histórico" }
      ]
    }
  ]
};
