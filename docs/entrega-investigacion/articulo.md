# Diseñar la seguridad, peritar el daño

### El rol profesional en temas de ciberseguridad: las dos tareas que el Estado argentino le reserva al título de informática, qué responsabilidad traen y qué pasa con ellas en el Chaco

**Trabajo de investigación — Unidad Temática 5: *Peritaje, arbitraje y tasaciones***
**Tema asignado al Grupo 6: el rol profesional en temas de ciberseguridad**

Seminario Integrador · Universidad Tecnológica Nacional, Facultad Regional Resistencia
Resistencia, Chaco · agosto de 2026

**Autores — Grupo 6:** Brites, Elisa Alejandra · Cettour, Ivo Claudio · Gonzalez, Matías Exequiel · Maldonado, Leandro Adrian · Martin Rodich, Victoria · Moray, Maria Paz · Ozuna Veron, Augusto Lautaro

---

> **CÓMO USAR ESTE ARCHIVO**
> Este archivo se genera automáticamente desde `web/index.html`, así que **las dos versiones dicen siempre lo mismo**. Si hay que corregir algo, se corrige en el HTML y se regenera.
> El texto corrido es el artículo tal como debe quedar. Los bloques `> ### Figura N` traen el epígrafe literal, el «cómo leerlo» y la tabla de datos de cada gráfico, para poder rearmarlos en papel.
> El cuaderno de trabajo, con el material que no entró, es `investigacion.md`.

---

Este trabajo se pregunta cuál es el rol del profesional informático en ciberseguridad: qué lugar ocupa, de dónde sale ese lugar y qué consecuencias le trae. Arrancamos con una idea que teníamos bastante metida (que la ciberseguridad es una buena práctica recomendable) y encontramos que en Argentina es otra cosa: una **tarea que el Estado le reserva al título**, y que viene con responsabilidad civil, penal y ética.

Seguimos, paso por paso, las normas de las que sale esa reserva (el artículo 43 de la Ley 24.521 y la Resolución ME 786/2009), vimos ante quién responde el profesional y con qué vara se lo mide, y leemos las leyes argentinas no como una lista sino por lo que le exigen, en concreto, a quien ejerce. Al final miramos qué pasa en la Provincia del Chaco, donde encontramos algo que no esperábamos: la ley del consejo profesional de ingeniería parece alcanzar a los ingenieros en sistemas desde hace años, con matrícula obligatoria incluida, y ni el consejo ni la carrera parecen haberlo advertido.

> ### Antes de empezar
> El tema cruza dos vocabularios: el del derecho y el de la informática. Para que se pueda leer sin ser especialista en ninguno de los dos, dejamos acá los nueve términos que más se repiten.

---

## 1. Introducción: la pregunta que nos hicimos

Cuando nos asignaron este tema, lo primero que hicimos fue preguntarnos entre nosotros por qué la ciberseguridad nos concierne. Las respuestas que aparecieron fueron dos, y ninguna nos convenció del todo. La primera era técnica: *porque sabemos de computadoras*. La segunda, moral: *porque está mal que roben datos*. Ambas se caen ante una repregunta sencilla: ¿y si un profesional decide que el tema no le interesa?

Buscando una respuesta mejor llegamos a un lugar que no esperábamos y que, admitimos, ninguno de nosotros había leído antes: los anexos de la Resolución 786 del Ministerio de Educación, dictada en 2009. Ese documento hace algo muy concreto: enumera, para cada título universitario de informática, las tareas que sólo quien tiene ese título puede realizar. Entre las once que le reserva al Ingeniero en Sistemas de Información, figura la novena:

> «Elaborar, diseñar, implementar y/o evaluar métodos y normas a seguir en cuestiones de seguridad de la información y los datos procesados, generados y/o transmitidos por el software.»
> — Resolución ME 786/2009, actividad profesional reservada n.º 9 al título de Ingeniero en Sistemas de Información / Informática

La norma no dice «conviene» ni «se recomienda». Dice que se trata de una **actividad reservada**: una facultad que el Estado atribuye a un título y sustrae de los demás. Esa sola línea reformuló nuestra pregunta inicial. El problema dejó de ser *por qué nos concierne* y pasó a ser **qué se nos exige, ante quién respondemos y con qué consecuencias**. Ese es el objeto de este trabajo.

Hay además un motivo por el cual la pregunta no nos resulta abstracta: las incumbencias que vamos a describir son las que recibiremos junto con el título. No estamos estudiando la profesión de otros.

Y hay una coincidencia que orientó todo el recorrido: tres renglones más abajo de la actividad n.º 9, en la misma enumeración, aparece la n.º 11: «Realizar arbitrajes, peritajes y tasaciones referidas a las áreas específicas de su aplicación y entendimiento.» Es decir, la misma resolución que nos reserva la seguridad de la información nos reserva el peritaje, que es justamente la unidad temática dentro de la cual se inscribe este trabajo. Volveremos sobre esa coincidencia en el punto 9, porque creemos que no es tal.

> ### En criollo
> Hay un papel oficial del Estado que dice, con todas las letras, que diseñar la seguridad de un sistema es trabajo del ingeniero en sistemas. No de quien tenga ganas: de quien tiene el título. Y en la misma lista, unos renglones más abajo, dice que también le corresponde peritar, o sea, explicarle a un juez qué pasó cuando algo falló.
> Todo el artículo sale de ahí: si el Estado te reserva una tarea, después te la exige.

El artículo se organiza así. Explicamos primero cómo trabajamos (punto 2) y precisamos qué es exactamente aquello que se nos pide proteger (punto 3). Reconstruimos después la cadena normativa de la que nace el rol (punto 4) y examinamos los cuatro frentes ante los cuales responde quien lo ejerce (punto 5). Leemos luego el marco normativo argentino en clave de deberes profesionales (punto 6) y describimos el contexto real en el que ese rol se ejerce (punto 7). Los punto 8 y 9 aterrizan la cuestión en la Provincia del Chaco y en los roles concretos del mercado. Cerramos con conclusiones (punto 10), con una declaración honesta de lo que nos quedó sin verificar (punto 11) y con las declaraciones formales del trabajo, incluida la del uso de inteligencia artificial.

---

## 2. Metodología: cómo trabajamos

Contamos cómo trabajamos porque no todo lo que afirmamos vale lo mismo: depende de qué fuente lo respalde, y algunas son mucho más firmes que otras.

Trabajamos sobre **fuentes normativas primarias** siempre que fue posible, es decir, el texto original de las leyes, decretos y resoluciones, consultado en los sitios oficiales donde el Estado los publica, y no el resumen que alguien hizo de ellos. Para el estado de situación recurrimos a **estadísticas oficiales** producidas por los propios organismos del Estado (el Ministerio Público Fiscal y el equipo nacional de respuesta a incidentes), y no a estimaciones de empresas del sector. No decimos que esas estimaciones estén mal, sino que preferimos, cuando existe la opción, una fuente que no venda el producto que el dato justifica.

Nos impusimos una regla más, después de tropezar con ella: **toda norma que se cita entre comillas se transcribe de su texto publicado**, no de un resumen. La adoptamos tarde, y al aplicarla descubrimos que tres de las citas centrales del borrador (incluida la que le da título al artículo) eran paráfrasis que circulan por internet y que habíamos tomado por literales. Están corregidas. Lo contamos en las Declaraciones, al final.

Asumimos también un límite: **no consultamos jurisprudencia de manera sistemática**, o sea, no revisamos cómo vienen fallando los jueces en casos concretos. Cuando afirmamos que un punto está discutido, lo hacemos sobre la base de los textos legales y de la doctrina que pudimos revisar, no de un relevamiento de sentencias.

Para el capítulo provincial la situación fue distinta y conviene decirlo con claridad. La norma chaqueña más relevante para nuestro tema fue sancionada **pocas semanas antes** de que cerráramos este trabajo, y al momento de escribir no pudimos acceder a su texto publicado en el Digesto provincial. Lo que describimos en el punto 8.3 proviene de la cobertura periodística de la sesión legislativa y de comunicados oficiales. Es una fuente secundaria y la tratamos como tal: señalamos el punto en el texto y lo registramos entre las verificaciones pendientes del punto 11.

Sostuvimos además una distinción que nos costó trabajo: cuando decimos que algo *no existe*, en realidad estamos diciendo que no lo encontramos en las fuentes que consultamos. Parece una formalidad y no lo es. Nuestra hipótesis de partida sobre el Chaco era que ningún consejo profesional matriculaba informáticos; al ir del sitio web al texto de la ley, esa hipótesis se cayó. Si la hubiéramos escrito como certeza en vez de como hallazgo provisorio, habríamos publicado un error.

---

## 3. El objeto del rol: qué se nos pide proteger, exactamente

Antes de ver qué se le exige al profesional hay que aclarar **sobre qué** se le exige, porque en el uso corriente cuatro términos distintos funcionan como si nombraran la misma cosa. No es una distinción caprichosa: cada uno tiene su propia autoridad de aplicación (es decir, un organismo distinto del Estado a cargo) y confundirlos lleva a confundir también ante quién se responde.

**Seguridad de la información** es el concepto más amplio: protege la información en cualquier soporte (papel, digital, una conversación en un pasillo) preservando su confidencialidad, integridad y disponibilidad. **Ciberseguridad** es un subconjunto: la protección de esa información y de los activos asociados cuando viven en el ciberespacio. **Protección de datos personales** no es una técnica sino un derecho de la persona sobre sus propios datos, para el cual la seguridad es apenas un medio. Y **ciberdefensa** es la ciberseguridad aplicada al ámbito militar.

Cada una tiene su propia autoridad: la ciberseguridad la conduce el Centro Nacional de Ciberseguridad, en la Jefatura de Gabinete; los datos personales, la Agencia de Acceso a la Información Pública; la ciberdefensa, el Ministerio de Defensa. El profesional que confunde los ámbitos se equivoca de interlocutor.

La disciplina resume en tres palabras lo que hay que cuidar. **Confidencialidad**: que sólo acceda quien debe. **Integridad**: que el dato no se altere sin permiso. **Disponibilidad**: que esté cuando se lo necesita.

Pero mientras investigábamos nos convencimos de que faltan dos, y son justo las que conectan nuestro rol con el peritaje. La **autenticidad** permite probar quién hizo qué, y es lo que le da sentido a la Ley 25.506 de Firma Digital. La **trazabilidad** es lo que convierte un registro de auditoría (el archivo donde el sistema va anotando quién entró, cuándo y qué tocó) en un elemento de prueba.

> ### En criollo
> Un sistema que no anota lo que pasa adentro no sólo es inseguro: es un sistema que, después de un ataque, **no se puede peritar**. Sin ese registro, nadie puede reconstruir qué ocurrió ni demostrarlo ante un juez.
> Quien lo diseñó así no dejó solamente una vulnerabilidad. Destruyó por anticipado la prueba de lo que fuera a ocurrir.

---

## 4. Origen del rol: de dónde nace la incumbencia

Éste es el corazón del trabajo. Lo que decimos es que el rol del profesional en ciberseguridad no se apoya en la costumbre del sector ni en la buena voluntad de cada uno, sino en una cadena de normas corta y verificable que cualquiera puede recorrer.

El punto de partida es el **artículo 43 de la Ley 24.521 de Educación Superior**. Ese artículo separa a las carreras universitarias en dos grupos, y pone en un régimen especial a aquellas «cuyo ejercicio pudiera comprometer el interés público, poniendo en riesgo de modo directo la salud, la seguridad y los bienes de los habitantes». Medicina está ahí; ingeniería civil también. Para esas carreras, el Ministerio de Educación debe hacer dos cosas: acreditarlas periódicamente y fijar las **actividades profesionales reservadas** a sus títulos.

Quisimos comprobar si nuestra carrera está ahí adentro, y está: la **Resolución ME 786/2009**, del 26 de mayo de 2009, incorporó a ese régimen los títulos de Licenciado en Ciencias de la Computación, Licenciado en Sistemas, Licenciado en Informática, Ingeniero en Computación e Ingeniero en Sistemas de Información, y fijó para cada uno sus actividades reservadas.

> ### Figura 1 — La cadena normativa que funda la incumbencia profesional en seguridad de la información y, en el mismo acto administrativo, la incumbencia pericial.
> Cómo leerlo: se lee de arriba hacia abajo, como una cadena de causas. Una ley del Congreso habilita a un ministerio a decidir qué tareas quedan reservadas a cada título; el ministerio lo hace en 2009; y de esa decisión salen las dos cajas de color del final, que son las dos incumbencias de las que trata todo este artículo.
>
> *Elaboración propia sobre la Ley 24.521 y la Resolución ME 786/2009.*

**Tabla 1. Actividades reservadas vinculadas a seguridad y a peritaje, según los anexos de la Resolución ME 786/2009. Se conserva la numeración original de cada título. Las filas destacadas son las que sostienen el argumento del artículo. **El texto es literal**: lo transcribimos de los anexos de la resolución, no de resúmenes. «Ing. en Sistemas» abrevia Ingeniero en Sistemas de Información / Informática; «Lic. en Sistemas», Licenciado en Sistemas / Sistemas de Información / Análisis de Sistemas.**

| Título | N.º | Actividad reservada |
|---|---|---|
| Ing. en Sistemas | 9 | **Elaborar, diseñar, implementar y/o evaluar métodos y normas a seguir en cuestiones de seguridad de la información y los datos procesados, generados y/o transmitidos por el software.** |
| Ing. en Sistemas | 10 | Establecer métricas y normas de calidad y **seguridad de software** |
| Ing. en Sistemas | 4 | Seleccionar arquitecturas tecnológicas de procesamiento y sistemas de comunicación de datos |
| Ing. en Sistemas | 8 | Determinar y controlar normas técnicas de funcionamiento del software |
| Ing. en Sistemas | 11 | **Realizar arbitrajes, peritajes y tasaciones referidas a las áreas específicas de su aplicación y entendimiento.** |
| Lic. en Sistemas | 6 | **Planificar, dirigir, realizar y/o evaluar los sistemas de seguridad en el almacenamiento y procesamiento de la información. Realizar la especificación, diseño, desarrollo, implementación y mantenimiento de los componentes de seguridad de información embebidos en los sistemas físicos y en los sistemas de software de aplicación.** |
| Lic. en Sistemas | 7 | **Efectuar las tareas de Auditoría de los Sistemas Informáticos. Realizar arbitrajes, pericias y tasaciones relacionados con los Sistemas Informáticos.** |
| Lic. en Sistemas | 5 | Establecer métricas y normas de calidad y seguridad de software |

De que una actividad esté reservada se siguen, a nuestro entender, tres consecuencias que ordenan todo lo que viene después. La primera es negativa: quien no posee el título no debería ejercerla, y hacerlo configura ejercicio ilegal de la profesión. La segunda es de estándar: quien la ejerce es medido contra lo que un profesional competente *debía* saber, no contra lo que efectivamente sabía. La tercera es personal: existe un deber de firma, y la firma compromete a la persona antes que a la organización que la emplea.

Nos parece importante subrayar que ninguna de las tres depende de que el profesional esté de acuerdo. Son efectos de la reserva, no elecciones de carrera. No hay forma de optar por salir.

---

## 5. El régimen de responsabilidad: ante quién respondemos

Si el rol nace de una reserva del Estado, lo que sigue es preguntarse qué pasa cuando se ejerce mal. Encontramos cuatro frentes distintos, que operan en paralelo y no se excluyen entre sí: el civil, el penal, el ético y el técnico. Que operen en paralelo significa que un mismo error puede, al mismo tiempo, obligar a pagar una indemnización, abrir una causa penal y motivar una sanción del consejo profesional.

### 5.1 · Civil: la vara con la que nos miden es más alta

El Código Civil y Comercial (la ley que regula, entre otras cosas, quién paga cuando alguien causa un daño) no menciona la palabra ciberseguridad, pero contiene la regla que define el riesgo civil de nuestra profesión. El **artículo 1725** establece que «cuanto mayor sea el deber de obrar con prudencia y pleno conocimiento de las cosas, mayor es la diligencia exigible al agente». Traducido: al ingeniero en sistemas no se lo juzga con la vara del usuario común, sino contra el estado del arte de su disciplina. Es exactamente la contracara de la reserva del punto 4, se nos reconoce una competencia exclusiva y, por eso mismo, se nos exige más.

El **artículo 1768** aporta la distinción que nos resultó más útil de todo el capítulo.

El derecho separa dos cosas: prometer un *esfuerzo* y prometer un *resultado*. Un médico se compromete a tratarte bien, no a curarte; un transportista, en cambio, se compromete a que el paquete llegue. A lo primero se lo llama obligación de *medios*; a lo segundo, de *resultado*. El profesional liberal responde por medios (o sea, sólo si actuó con culpa) salvo que haya prometido un resultado concreto, en cuyo caso responde aunque no haya hecho nada mal.

> ### En criollo
> **En seguridad se contratan medios, nunca resultados.** «Voy a proteger el sistema aplicando estos controles» y «el sistema será inviolable» son dos frases jurídicamente opuestas, y sólo la primera es defendible.
> Quien promete que no lo van a hackear está firmando que se hace cargo aunque lo hackeen habiendo hecho todo bien.

Nos habíamos preguntado si operar un sistema que trata datos sensibles podría considerarse una «actividad riesgosa» del **artículo 1757**, que obliga a responder aunque no haya culpa. Al leer el 1768 completo encontramos que el propio Código cierra la discusión para nosotros: su última oración dice que «la actividad del profesional liberal no está comprendida en la responsabilidad por actividades riesgosas previstas en el artículo 1757».

La pregunta sigue viva, pero corrida de lugar. No alcanza al profesional que presta el servicio; sí podría alcanzar a la *organización* que opera el sistema, que no es un profesional liberal. Es una distinción que conviene tener presente antes de firmar un contrato: la empresa y quien la asesora no responden por la misma vía.

La conclusión es más judicial que técnica, y es el que más nos hizo cambiar de idea sobre nuestro propio trabajo: como la obligación es de medios, lo que se prueba en un juicio no es que el sistema no haya sido vulnerado, sino que se obró con diligencia. Y la diligencia se prueba con documentación, análisis de riesgos, decisiones de diseño registradas, evidencia de las pruebas realizadas, registros de auditoría. **El profesional que no documenta no tiene con qué defenderse.**

### 5.2 · Penal: dónde termina el hacking ético

El **artículo 153 bis del Código Penal** reprime «al que a sabiendas accediere por cualquier medio, sin la debida autorización o excediendo la que posea, a un sistema o dato informático de acceso restringido». Nos llamó la atención que la norma no distinga intenciones: no exige ánimo de lucro ni de daño. Y la pena sube si el acceso perjudica a «un sistema o dato informático de un organismo público estatal». Es decir, entrar «para ver si se puede» ya alcanza. El elemento que separa una prueba de penetración legítima de un delito es, literalmente, un papel firmado por quien tiene facultades para firmarlo.

**Lo que la vuelve lícita.** Autorización escrita y previa. Alcance delimitado: qué direcciones, qué dominios, en qué horario. Acuerdo de confidencialidad. Reporte responsable de los hallazgos. Autorización otorgada por quien tiene poder para otorgarla.

La segunda figura que nos alcanza de manera directa es el **artículo 156**, violación de secreto profesional. Castiga a quien, «teniendo noticia, por razón de su estado, oficio, empleo, profesión o arte, de un secreto cuya divulgación pueda causar daño, lo revelare sin justa causa». Es una norma antigua, pensada para médicos y confesores. Su redacción amplia captura sin esfuerzo a quien administra una base de datos.

El administrador de sistemas, el encargado de la base de datos, el soporte técnico y el perito acceden a datos ajenos *por su oficio*: están dentro del tipo penal. Y no hace falta firmar un acuerdo de confidencialidad para que el deber exista, porque lo crea la ley.

### 5.3 · Ético: el deber de desobedecer

En varias jurisdicciones los profesionales informáticos tienen un **consejo profesional**: una entidad que lleva el registro de quién está habilitado para ejercer y que puede sancionar a quien ejerce mal. En la Provincia de Buenos Aires existe el CPCIBA, creado por la Ley 13.016; hay figuras equivalentes en Córdoba, Entre Ríos y Mendoza. El código de ética que citamos acá es el del Consejo Profesional de Ciencias Informáticas, asociación civil de la Ciudad Autónoma de Buenos Aires, que es el que pudimos consultar en su texto publicado. Sus cláusulas, leídas desde nuestro tema, funcionan casi como una especificación técnica de la responsabilidad. Dos nos parecieron especialmente relevantes.

> «No debe llevar a cabo actos reñidos con la buena técnica, aún cuando pudiera ser en cumplimiento de órdenes emanadas de autoridades, mandantes o comitentes.»
> — Código de Ética del Consejo Profesional de Ciencias Informáticas, artículo 6

La cláusula da vuelta la jerarquía laboral: convierte la obediencia en una defensa inválida. Si la orden es guardar contraseñas en texto plano (o sea, sin cifrar, legibles para cualquiera que abra la base), o desactivar el registro de auditoría antes de una inspección, el deber profesional no es cumplirla sino negarse. Reconocemos que es más fácil escribirlo en un trabajo práctico que sostenerlo frente a un empleador, pero la norma no admite matices.

El **artículo 27** agrega el reverso. Obliga a «informar al cliente de los errores en que éste pudiera incurrir» y a «subsanar los que por sí mismo pudiera haber cometido», lo que en materia de seguridad equivale a un deber ético de comunicar el incidente. Ocultarlo no es prudencia: es falta ética y, según el caso, delito.

El **artículo 29** cierra el círculo. Dice que «el secreto profesional es una obligación», que revelarlo sin causa justa «conforma un delito previsto por el Código Penal», y agrega un detalle que nos pareció importante: «no es necesario publicar el hecho para que exista revelación, basta la confidencia a una persona cualquiera». Es el puente explícito entre el código de ética y el artículo 156 del Código Penal. La única excepción la da el **artículo 30**: cuando la información se deba usar «en defensa personal como prueba insustituible».

### 5.4 · Técnico: quién llena el vacío que deja la ley

El cuarto frente no es un tribunal, pero determina el resultado de los otros tres. Cuando la ley exige «medidas técnicas y organizativas adecuadas» sin decir cuáles, o cuando el Código Civil exige «la diligencia exigible» sin definirla, alguien tiene que aportar el contenido concreto. Ese alguien son los estándares técnicos: documentos internacionales que describen, con detalle, qué controles se consideran razonables.

Esto le cambia el peso a los estándares: conocerlos deja de ser una cuestión de actualización profesional y pasa a integrar el deber jurídico, porque son la evidencia disponible de qué era razonable hacer en un momento dado.

**Tabla 2. Estándares que operan como referencia del «estado del arte» exigible al profesional, y el rol que cada uno sostiene. Destacamos la norma ISO/IEC 27037 porque es la que reaparece en el punto 9: es el manual del perito informático.**

| Estándar | Qué aporta | Rol que lo aplica |
|---|---|---|
| ISO/IEC 27001 | Sistema de gestión de seguridad de la información; se puede certificar | Responsable de seguridad |
| ISO/IEC 27002 | Catálogo de controles: el «cómo» de la 27001 | Implementador |
| ISO/IEC 27032 | Lineamientos específicos de ciberseguridad | Arquitecto de seguridad |
| ISO/IEC 27037 | **Cómo identificar, recolectar y preservar evidencia digital sin arruinarla** | **Perito informático forense** |
| NIST CSF | Cinco funciones: identificar, proteger, detectar, responder, recuperar | Gestión de riesgo |
| OWASP Top 10 / ASVS | Las fallas más comunes al programar aplicaciones web, y cómo evitarlas | Desarrollador |
| DA 641/2021 | Requisitos mínimos para el sector público argentino | Punto focal de ciberseguridad |

---

## 6. Las normas como fuente de deberes: qué nos exige, en concreto, el marco argentino

No vamos a listar acá toda la normativa argentina de ciberseguridad, porque se nos iría del tema. Nos preguntamos algo más acotado: de todo ese conjunto, ¿qué le exige efectivamente al profesional que ejerce? Leído así, el mosaico se ordena.

Conviene decir primero lo que encontramos como rasgo general: **Argentina no tiene una ley integral de ciberseguridad**. No existe un texto único al que uno pueda ir a buscar «las reglas». Lo que hay es un conjunto de piezas dictadas en momentos distintos y por autoridades distintas: algunas son leyes del Congreso, otras decretos del Poder Ejecutivo, otras resoluciones de organismos técnicos. Para el profesional eso significa que el deber de conocer se reparte entre normas penales, de protección de datos y administrativas.

> ### Figura 2 — Hitos normativos que enmarcan el ejercicio profesional en ciberseguridad, entre 1988 y 2026.
> Cómo leerlo: el eje horizontal es el tiempo y cada punto es una norma. El color dice quién la dictó: azul el Congreso, naranja el Poder Ejecutivo, verde los organismos técnicos. Las etiquetas se reparten arriba y abajo sólo para que no se pisen entre sí, eso no significa nada. Hay dos cosas para mirar. La primera es la densidad: casi todo se dictó después de 2000, y buena parte después de 2019. La segunda es el cambio de color hacia la derecha: lo viejo son leyes, lo nuevo son decretos y disposiciones. Es exactamente el problema que señalamos en el punto 6.3: la institucionalidad se armó sin pasar por el Congreso.
>
> *Fuente: compilado normativo del Centro Nacional de Ciberseguridad.*

### 6.1 · El deber de definir las medidas

La **Ley 25.326 de Protección de los Datos Personales** es del año 2000 y contiene, a nuestro juicio, el artículo que más define el trabajo cotidiano del profesional en materia de seguridad:

> «…adoptar las medidas técnicas y organizativas que resulten necesarias para garantizar la seguridad y confidencialidad de los datos personales, de modo de evitar su adulteración, pérdida, consulta o tratamiento no autorizado, y que permitan detectar desviaciones, intencionales o no, de información.»
> — Ley 25.326, artículo 9

El mismo artículo prohíbe registrar datos personales en archivos que no reúnan condiciones técnicas de integridad y seguridad, y el artículo 10 impone un deber de confidencialidad que **subsiste aun después de terminada la relación** con el titular del archivo: no se extingue con la renuncia ni con el fin del contrato.

> ### En criollo
> Fijate en lo que la ley *no* dice. No enumera las medidas, no fija un estándar técnico y no remite a ninguna norma ISO. Deja el contenido abierto, y ese vacío lo llena, en los hechos, el profesional que diseña el sistema.
> Es una delegación silenciosa, y de consecuencias enormes: **quien define las medidas es quien responde si las eligió mal.**

### 6.2 · Los tipos penales que nos alcanzan

La **Ley 26.388**, de 2008, suele citarse como «la ley de delitos informáticos», lo cual nos indujo a error al principio de la investigación. No creó un cuerpo normativo separado: fue metiendo las conductas digitales adentro del Código Penal que ya existía, modificando artículos y agregando incisos. Por eso no se la busca como ley, se la lee en el Código. Relevamos las figuras y las ordenamos según su relevancia para el ejercicio profesional.

**Tabla 3. Figuras del Código Penal aplicables a conductas informáticas, según el texto ordenado por la Ley 26.388. Destacamos las dos que alcanzan de manera directa al profesional en ejercicio: las demás describen al delincuente; esas dos pueden describirlo a él.**

| Artículo | Conducta tipificada | Por qué le importa al profesional |
|---|---|---|
| 153 | Violación de correspondencia o comunicación electrónica | Alcanza al acceso a casillas y mensajería ajenas |
| 153 bis | **Acceso ilegítimo a un sistema informático** | Marca el límite exacto de la prueba de penetración |
| 155 | Publicación indebida de una comunicación electrónica | Difusión de material obtenido en una intervención |
| 156 | **Violación de secreto profesional** | Alcanza a quien conoce el secreto «por razón de su oficio o profesión» |
| 157 bis | Acceso o revelación indebida de bancos de datos personales | Se agrava si el autor es funcionario público |
| 173 inc. 16 | Defraudación mediante manipulación informática | Es la figura detrás de la mayoría de los reportes (punto 7) |
| 183, 2.º párr. | Daño informático: alterar, destruir o inutilizar datos o sistemas | Es la figura aplicable al ransomware |
| 197 | Interrupción de comunicaciones | Ataques que tiran abajo un servicio |

Va una observación para quien piense dedicarse a peritar: el Código Penal, por sí solo, tiene un problema de alcance, porque el ciberdelito casi nunca es territorial. El servidor está en un país, el autor en otro y la víctima en un tercero, y la justicia argentina no puede pedirle nada a una empresa extranjera sin un acuerdo previo. Eso es lo que vino a resolver la **Ley 27.411**, que aprobó la adhesión argentina al Convenio sobre Ciberdelito del Consejo de Europa (conocido como Convenio de Budapest), cuyo aporte no es tipificar delitos, porque eso ya lo hizo la 26.388, sino habilitar cooperación internacional y pedidos urgentes de preservación de datos.

### 6.3 · Lo que se exige si se trabaja para el Estado

Buena parte de nosotros va a trabajar, en algún momento, en organismos públicos o para ellos. Por eso relevamos con particular atención el régimen administrativo. El **Decreto 941/2025** creó el **Centro Nacional de Ciberseguridad** como órgano rector en la materia, el organismo que fija la política y a quien los demás le deben rendir cuentas.

Debajo funcionan tres instrumentos que bajan a lo concreto y que constituyen, para el profesional, obligaciones verificables:
- La **Decisión Administrativa 641/2021**, que fija requisitos mínimos de seguridad obligatorios para los organismos nacionales y que cualquier otra organización puede adoptar voluntariamente si quiere, un detalle que reaparecerá en el punto 8.
- La **Disposición 8/2021** del CERT.ar, una guía de seguridad para desarrollo de aplicaciones web que aplica de manera directa al trabajo que hacemos en la carrera.
- La **Disposición 1/2026**, que por primera vez pone exigencias verificables de continuidad: hay que tener un inventario de sistemas clasificado por criticidad, definir en cuánto tiempo debe volver a funcionar cada uno y cuántos datos es aceptable perder, probarlo una vez al año, y sostener un centro de datos alterno a no menos de 1.500 km del principal. El plazo para adecuarse es de 180 días.

> ### Lo que no encontramos, y que también define el rol
> **Una ley marco.** Toda la institucionalidad que describimos se construyó por decreto y disposición, no por ley del Congreso. Es potente y es rápida; también es reversible por la misma vía, sin que intervenga el Parlamento.
> **Un deber general de avisar cuando se filtran datos.** Existe para el sector público y por vía de guías, pero no como obligación legal general frente a la persona cuyos datos se filtraron. El proyecto de reforma de la Ley 25.326 lo incorpora.
> **Colegiación nacional del profesional informático.** A diferencia de lo que ocurre con médicos, abogados o ingenieros civiles, no existe una matrícula obligatoria de alcance nacional. Hay consejos provinciales, y no en todas las provincias. Sobre esto volvemos en el punto 8.5, porque es donde el problema se vuelve más visible.

---

## 7. El contexto de ejercicio: dónde y cuánto se ejerce este rol

Un rol también se define por cuánto trabajo hay. Para medirlo fuimos a las dos series oficiales que encontramos: los reportes que recibe la Unidad Fiscal Especializada en Ciberdelincuencia (la fiscalía nacional dedicada a delitos informáticos, que se abrevia UFECI) y los incidentes que gestiona el equipo nacional de respuesta.

> ### Figura 3 — Reportes de delitos informáticos recibidos por la UFECI, años calendario 2021 a 2024.
> Cómo leerlo: cada columna es un año y su altura es la cantidad de denuncias recibidas. La columna azul oscuro es el último año disponible. Lo importante no es sólo que 2024 sea el máximo, sino que 2023 bajó: la serie sube, pero no todos los años.
>
> | Año | Reportes recibidos |
> |---|---|
> | 2021 | 22.364 |
> | 2022 | 32.395 |
> | 2023 | 28.456 |
> | 2024 | 34.468 |
>
> *Como referencia del punto de partida: entre abril de 2019 y marzo de 2020 la unidad había recibido 2.581 reportes, y 14.583 en el período siguiente. Esos dos primeros períodos van de abril a marzo, y por eso no los graficamos junto a los años calendario. Fuente: UFECI, informe de gestión 2024.*

Nos interesa señalar tres cosas de esta serie. La primera es la magnitud del salto inicial: de 2.581 reportes en 2019-2020 se pasó a 34.468 en 2024. La segunda es que 2024 marca el máximo histórico, con un aumento del 21,1 % respecto del año anterior. La tercera nos parece la más honesta de mostrar: **2023 fue un año de caída**, de 32.395 a 28.456 reportes. La serie sube, pero no de manera pareja, y atribuir cada oscilación a un cambio en la conducta criminal sería imprudente, los reportes miden también cuánta gente conoce el canal de denuncia y cuánta confía en él.

Conviene aclararlo de una vez: toda la serie mide **denuncias recibidas, no hechos ocurridos**. Tenemos una medición de cuánto se pierde en el camino, aunque es local y hay que tomarla como tal: un relevamiento de la Universidad Champagnat junto al municipio de Mendoza encontró que **5 de cada 10 encuestados había sufrido un ciberdelito y sólo el 8 % lo denunció**, y que el 67 % ni siquiera sabía dónde hacerlo. No podemos extrapolarlo al país, pero da una idea del orden del subregistro. Tomamos las cifras de la UFECI como un piso, no como una medición del fenómeno.

> ### Figura 4 — Modalidades reportadas a la UFECI durante 2024, sobre un total de 34.468 casos.
> Cómo leerlo: cada barra es un tipo de delito y su largo es cuántas veces se denunció. La barra azul es la que domina: una sola modalidad, el fraude en línea, explica casi dos tercios de todo. Las otras cinco juntas no le llegan.
>
> | Modalidad | Casos | Porcentaje |
> |---|---|---|
> | Fraude en línea | 21.729 | 63,0 % |
> | Usurpación de identidad | 4.637 | 13,5 % |
> | Acceso ilegítimo a cuentas | 2.877 | 8,3 % |
> | Otras modalidades | 2.204 | 6,4 % |
> | Phishing | 1.563 | 4,5 % |
> | Acoso | 1.458 | 4,2 % |
>
> *Fuente: UFECI, informe de gestión 2024.*

El desglose confirma por qué la conversación pública sobre ciberseguridad gira alrededor del fraude, pero el dato que nos habla más de cerca es el tercero: **2.877 accesos ilegítimos a cuentas**, es decir, la figura del artículo 153 bis ocurriendo casi ocho veces por día. Su distribución por plataforma muestra dónde vive hoy la identidad digital de las personas, que es la superficie que en la práctica tenemos que defender.

> ### Figura 5 — Distribución por plataforma de los 2.877 accesos ilegítimos reportados en 2024.
> Cómo leerlo: el color acompaña al tamaño: cuanto más alto el porcentaje, más oscura la barra. Las dos primeras son las que importan. Una aplicación de mensajería y una billetera virtual concentran más de la mitad de todos los robos de cuenta del país.
>
> | Plataforma | Porcentaje |
> |---|---|
> | WhatsApp | 30 % |
> | Mercado Pago | 26 % |
> | Otras plataformas | 20 % |
> | Facebook | 15 % |
> | Gmail | 4 % |
> | Instagram | 3 % |
> | Hotmail | 2 % |
>
> *Fuente: UFECI. Los valores son los porcentajes publicados; las cantidades absolutas por plataforma se derivan de ellos y por eso no las mostramos.*

No hay aquí nada parecido a un ataque sofisticado: hay ingeniería social sobre segundos factores de autenticación. Dicho simple, alguien convence a la víctima de que le pase el código de verificación que le llegó por mensaje. Nos parece un dato incómodo para nuestra formación, porque señala que la parte más demandada del rol no es la más técnica.

Falta la otra mitad del cuadro. El CERT.ar (el equipo nacional que atiende incidentes de seguridad) registró 438 durante 2024, un 15,6 % más que en 2023, y su distribución por sector es contundente.

> ### Figura 6 — Incidentes de ciberseguridad gestionados por el CERT.ar durante 2024, según sector afectado.
> Cómo leerlo: la barra entera son los 438 incidentes del año. La parte azul oscuro es la porción que golpeó a organismos del Estado. Seis de cada diez.
>
> | Sector | Incidentes | Porcentaje |
> |---|---|---|
> | Estado | 267 | 61 % |
> | Resto de los sectores | 171 | 39 % |
> | Total | 438 | 100 % |
>
> *Fuente: CERT.ar, informe anual de gestión de incidentes 2024.*

Los dos números anteriores miden lo que llega a una fiscalía o a un equipo de respuesta, es decir, la punta del iceberg. Para tener una idea del volumen bruto de ataques buscamos una medición distinta: cuántos intentos por semana recibe una organización promedio. En mayo de 2026, Check Point Research midió el dato por país.

> ### Figura 7 — Intentos de ciberataque por semana y por organización, mayo de 2026.
> Cómo leerlo: cada barra es un país y su largo es cuántos intentos recibe por semana una organización promedio. La barra naranja es Argentina. El dato tiene dos caras: estamos por debajo del promedio regional (3.149) pero por encima del mundial (2.055). No es que a Argentina la ataquen poco, es que a la región la atacan muchísimo.
>
> | País o referencia | Intentos semanales por organización |
> |---|---|
> | Colombia | 4.065 |
> | Brasil | 3.830 |
> | México | 3.339 |
> | Argentina | 2.470 |
> | Promedio América Latina | 3.149 |
> | Promedio mundial | 2.055 |
>
> *Fuente: Check Point Research, división de inteligencia de amenazas de Check Point Software Technologies. Medición de mayo de 2026.*

No lo leemos como una casualidad estadística: el Estado es a la vez el mayor custodio de datos personales sensibles del país y el mayor operador de sistemas viejos que nadie actualizó. Es también el empleador o comitente de buena parte de los profesionales formados en universidades públicas como la nuestra, lo que conecta directamente con las obligaciones del punto 6.3.

---

## 8. El ejercicio en el Chaco: qué le pasa al profesional en nuestra provincia

Todo lo anterior describe un rol que se define a nivel nacional. Nos faltaba una pregunta concreta: qué pasa con ese rol en la provincia donde vamos a ejercer. El caso chaqueño nos resultó útil precisamente porque no es homogéneo.

### 8.1 · Una protección de rango constitucional

A diferencia de lo que ocurre en el orden nacional, donde la protección de datos personales llegó por una ley común en el año 2000, en el Chaco el derecho está escrito en la propia Constitución provincial, que es la norma de mayor jerarquía que puede dictar una provincia. Su artículo 19 agrupa las garantías procesales de la provincia (hábeas corpus, amparo y hábeas data) y, en la parte que nos ocupa, reconoce a toda persona el derecho a conocer los datos sobre sí misma o sus bienes que consten en registros o bancos oficiales o privados de carácter público, para qué están destinados, y a exigir su actualización, rectificación, **supresión o confidencialidad**. Prohíbe además usarlos con fines discriminatorios de cualquier tipo. La **Ley provincial 4360** reglamenta cómo se reclama eso ante un juez.

La cronología vale la pena: ese artículo 19 proviene de la reforma constitucional de 1994, la misma en la que el habeas data se incorpora a la Constitución Nacional; la ley nacional 25.326 llegó recién en 2000. Para el profesional esto significa que el deber de proteger no se apoya solamente en una ley reglamentaria, sino en una garantía constitucional que la provincia tuvo seis años antes que la ley nacional que hoy la desarrolla.

### 8.2 · Cuando el Estado le da valor jurídico a un sistema

La **Ley 3203-A**, de modernización de la administración provincial, es el marco del programa Chaco Digital y de la plataforma Tu Gobierno Digital. Define e institucionaliza dos conceptos que pertenecen de lleno a nuestra disciplina: la **identidad digital** y la **seguridad de la información**, entendida como el conjunto de políticas, controles y procedimientos necesarios para preservar la confidencialidad, integridad y disponibilidad de los datos *como bien público de la administración*.

La consecuencia para el profesional es más pesada de lo que parece a primera vista. La ley le da plena validez jurídica al domicilio electrónico: si el Estado te notifica algo ahí, quedaste notificado, con los mismos efectos que si te hubiera llegado una carta documento.

> ### En criollo
> Desde el momento en que una ley le da ese valor a un sistema informático, **que el sistema esté disponible deja de ser un problema técnico y pasa a ser un problema de derechos**.
> Si la plataforma está caída el día que vence un plazo, lo que se afecta no es un indicador de servicio: es la posibilidad de una persona de defenderse. Quien diseña y opera ese sistema asume esa responsabilidad, la conozca o no.

### 8.3 · Una ley que crea demanda de peritaje

El 8 de julio de 2026, la Cámara de Diputados del Chaco sancionó la **Ley 4250-J** de protección digital, que modifica el Código de Faltas provincial y el Código Procesal Penal. Según la información a la que pudimos acceder (y con la salvedad metodológica del punto 2), sanciona la creación o difusión de contenido generado con inteligencia artificial que dañe el honor o el patrimonio de una persona, la captura de imágenes sin consentimiento con fines de difusión, la instalación de programas espía, dispositivos de rastreo o cámaras encubiertas, y el acoso reiterado, incluso bajo identidad falsa. En el plano procesal incorpora reglas para preservar evidencia digital, mecanismos para bajar contenido de internet y capacitación judicial en cibercrimen, y crea el **Instituto de la Denuncia Electrónica**.

> ### Por qué incluimos esta ley en un trabajo sobre el rol profesional
> Podría objetarse que se trata de una norma sobre violencia digital y no sobre nuestra profesión. Creemos que sí nos concierne, y de manera directa. Una norma que exige preservar evidencia digital y que sanciona contenido generado artificialmente presupone que exista alguien capaz de hacer dos cosas: recolectar esa evidencia sin arruinarla, y determinar técnicamente si un video, un audio o una imagen fueron fabricados o manipulados. Ninguna de las dos es una tarea que un tribunal pueda resolver por sí mismo.
> Dicho de otro modo: la Ley 4250-J **crea demanda de peritaje informático por vía legislativa provincial**. Es el argumento más concreto que encontramos sobre la vigencia práctica de la actividad reservada n.º 11.

### 8.4 · Hay capacidad instalada

La provincia no depende sólo de normas. **ECOM Chaco**, la empresa provincial de software y telecomunicaciones, fue la primera organización de su tipo en el país en adherir voluntariamente a los requisitos mínimos de seguridad que mencionamos en el punto 6.3, y cuenta con peritos en ciberseguridad y análisis forense. El **Poder Judicial del Chaco** también adhirió. A ello se suman la División Cibercrimen de la Policía del Chaco y una fiscalía especializada en delitos informáticos. Es decir: el rol tiene, en la provincia, ámbitos concretos donde ejercerse.

### 8.5 · Lo que dice la ley del consejo, y lo que pasa en la práctica

Acá esperábamos encontrar un vacío y encontramos otra cosa, más interesante. La hipótesis con la que llegamos era que en el Chaco no existe consejo profesional que matricule informáticos, porque el sitio de COPIPACH (Consejo Profesional de la Ingeniería y Profesiones Afines) no menciona informática, sistemas ni computación por ningún lado. Fuimos entonces al texto de su ley, la **Ley provincial 2955-C**, y ahí la hipótesis se cayó.

El artículo 1 somete a la ley al «ejercicio profesional de la ingeniería **en todas las ramas y especialidades** y de las profesiones conexas de grado universitario (Licenciaturas), que no estén reguladas por ley especial». El artículo 31 le da al Consejo «el gobierno de la matrícula de **todos los Ingenieros de todas las ramas de especialidad** y Licenciados de profesiones afines». Y el artículo 45, que reparte las especialidades en cuatro áreas, cierra con un inciso 4 de «otras especialidades» y esta aclaración:

> «Este ordenamiento es meramente enunciativo y a medida que surjan nuevas especialidades, la Comisión Directiva decidirá a qué área se incorporará para la actividad colegiada.»
> — Ley 2955-C de la Provincia del Chaco, artículo 45

Ingeniería en Sistemas de Información es una rama de la ingeniería, no está regulada por ley especial en la provincia, y la ley prevé expresamente qué hacer con las especialidades que van apareciendo. La lectura razonable es que **la ley de COPIPACH ya alcanza al ingeniero en sistemas**.

Un detalle de contexto lo vuelve más llamativo. La 2955-C no es una ley vieja: reemplaza al antiguo Consejo Profesional de Agrimensores, Arquitectos e Ingenieros y fue sancionada cuando las carreras de sistemas ya llevaban décadas dictándose en el país, incluida la nuestra. No es que el legislador no supiera que existíamos. Simplemente no nos nombró, y dejó la puerta del artículo 45 abierta para que alguien lo hiciera después.

No somos los primeros en leerlo así, y eso importa porque somos estudiantes de sistemas interpretando una ley, no abogados. En la Provincia de Santa Fe, el Colegio de Ingenieros Especialistas creado por la Ley 11.291 matricula expresamente a los egresados de las carreras de ingeniería y licenciaturas «de las Áreas Química, Mecánica, Eléctrica, **Sistemas**, entre otras». Es decir: un consejo provincial de ingeniería que hace exactamente lo que nosotros sostenemos que la ley chaqueña habilita. La diferencia es que Santa Fe lo dice y el Chaco lo deja implícito.

Hay más, y es lo que termina de cerrar el artículo. El **artículo 4** define qué cuenta como ejercicio profesional, y su inciso 4 incluye «la elaboración de informes, tasaciones, estudios, dictámenes, **pericias**, laudos y cualquier otro documento comprendido en las incumbencias de la profesión, sean éstos producidos ante los Tribunales de la Provincia». Es, palabra por palabra, la actividad reservada n.º 11 de la resolución nacional. El **artículo 7** exige matrícula para ejercer, y el **artículo 8** dice que quien ofrece servicios propios de la incumbencia sin estar habilitado «incurre en ejercicio ilegal de la profesión».

> ### En criollo
> Si esta lectura es correcta, un ingeniero en sistemas que hoy firma una pericia informática en el Chaco **sin estar matriculado en COPIPACH** podría estar en ejercicio ilegal de la profesión.
> No estamos en condiciones de decir cuánta gente lo sabe: no medimos eso. Sí podemos decir que nosotros, que estamos por recibirnos de esta carrera en esta provincia, no lo sabíamos, y que no encontramos ninguna comunicación del Consejo ni de la facultad que lo mencione.

> ### La objeción más fuerte a nuestra lectura, y qué le contestamos
> Alguien puede responder, con razón, que el artículo 45 fue redactado mirando la ingeniería civil, la electromecánica y la higiene y seguridad, y que su inciso 4 de «otras especialidades» pensaba en agrimensura o en ramas cercanas a la obra, no en informática. Que una cláusula sea abierta en el papel no significa que la institución la haya abierto en los hechos.
> Es una objeción válida y no la podemos refutar con el texto. Lo que sí podemos decir es que la carga de la prueba se movió de lado. Ya no hay que demostrar que la ley alcanza a los informáticos: hay que explicar por qué no los alcanzaría, cuando dice «todas las ramas y especialidades», cuenta las pericias como ejercicio profesional y prevé un mecanismo para incorporar especialidades nuevas. Y hay un consejo provincial, el de Santa Fe, que resolvió esa misma pregunta por la afirmativa.

Entonces el vacío no es el que suponíamos. No es que falte la norma: la norma está y es amplia. Lo que falta es todo lo demás.

**Tabla 4. Qué dice la Ley 2955-C sobre su propio alcance, y qué encontramos en la práctica del Consejo. La columna de la derecha es lo que releva este trabajo.**

| Aspecto | Lo que dice la ley | Lo que encontramos |
|---|---|---|
| Alcance | Art. 1 y 31 | «La ingeniería en todas las ramas y especialidades» y las licenciaturas conexas alcanza a sistemas |
| Especialidades | Art. 45 | Cuatro áreas, la cuarta es «otras», y el listado es «meramente enunciativo» abierto |
| Pericias | Art. 4, inc. 4 | Son ejercicio profesional y requieren matrícula |
| Obligatoriedad | Art. 7 y 8 | Ejercer sin matrícula es ejercicio ilegal de la profesión |
| **Área de informática** | — | No existe como área Ninguna de las cuatro del art. 45 la nombra |
| **Código de ética informático** | — | No lo encontramos El código es el de ingeniería |
| **Difusión hacia la carrera** | — | Ninguna que hayamos visto El sitio del Consejo no menciona informática |

*La lectura de los artículos 1, 31 y 45 es nuestra. No es una interpretación forzada, pero es una interpretación: sólo COPIPACH puede confirmarla. Lo registramos en el punto 11.*

El resultado es una asimetría distinta de la que habíamos imaginado, y más incómoda. **La obligación de matricularse probablemente exista y nadie la esté cumpliendo**, porque el Consejo no tiene área de informática, ni un código de ética escrito para la disciplina, ni comunicación alguna dirigida a los egresados de nuestra carrera. La ley alcanza a una profesión que la institución no mira.

Eso cambia la recomendación. No hace falta crear un consejo nuevo: hace falta que el que existe abra el área que su propio artículo 45 le permite abrir, y que la facultad les diga a sus egresados que la matrícula podría estar alcanzándolos. Es mucho más barato que una ley nueva.

La asimetría de fondo, de todos modos, sigue en pie y no es exclusiva del Chaco: la incumbencia se otorga en el orden nacional y se administra en el provincial, y entre una cosa y la otra hay un hueco por el que se cae la ética profesional. Se nos pide actuar como auxiliares de la justicia; la estructura que en otras profesiones acompaña ese papel, acá está a medio armar.

---

## 9. Las formas del rol: en qué se convierte, en la práctica

Ya vimos de dónde nace el rol y qué responsabilidad trae. Falta lo más concreto: en qué trabajos se convierte. Ordenamos los que encontramos según la norma que los sostiene.

**Tabla 5. Roles profesionales en ciberseguridad y la norma o estándar que los sostiene en el ordenamiento argentino. Destacamos el del perito porque es donde cierra el argumento del artículo.**

| Rol | Qué hace | Norma o estándar que lo sostiene |
|---|---|---|
| Responsable de seguridad | Define la política, gestiona el riesgo y responde ante la dirección | DA 641/2021 |
| Respuesta a incidentes | Detecta el ataque, lo contiene, lo erradica y recupera el servicio | Disp. 3/2023 · CERT.ar |
| Prueba de penetración | Ataca el sistema propio, con autorización, para encontrarle las fallas | Art. 153 bis, CP |
| Auditor de sistemas | Verifica que los controles existan y funcionen | Res. 786/2009, Lic. n.º 7 |
| Protección de datos | Vela por el cumplimiento en materia de datos personales | Ley 25.326 |
| **Perito informático forense** | **Produce la prueba digital que usa la justicia** | Res. 786/2009, Ing. n.º 11 · ISO 27037 |
| Desarrollador | Construye de forma segura desde el diseño | Disp. 8/2021 · OWASP |

Falta un dato que no habla de los ataques sino de nosotros. Si el rol existe y la demanda crece, la pregunta obvia es si hay gente para ocuparlo.

> ### Figura 8 — La brecha mundial de profesionales de ciberseguridad.
> Cómo leerlo: la barra entera son los 10,2 millones de profesionales que harían falta en el mundo. La parte llena, en azul, son los que efectivamente existen. La parte rayada es el hueco: casi la mitad de los puestos no tiene quién los ocupe. Es la contracara de toda la tabla de arriba: la ley reserva esos roles a un título, y no hay suficientes títulos para ocuparlos.
>
> | Concepto | Personas |
> |---|---|
> | Profesionales necesarios | 10,2 millones |
> | Profesionales activos | 5,5 millones |
> | Brecha | 4,8 millones |
>
> *Fuente: ISC2 Cybersecurity Workforce Study. El estudio 2025 agrega que el 88 % de las organizaciones consultadas sufrió al menos una consecuencia de seguridad atribuida directamente a la falta de personal capacitado.*

> ### En criollo
> Casi la mitad de los puestos de ciberseguridad del mundo están vacíos, y 9 de cada 10 organizaciones dicen haber tenido un problema de seguridad justamente por no tener a quién ponerle la tarea.
> Para nosotros eso significa dos cosas al mismo tiempo: **hay trabajo**, y **quien lo tome va a estar solo**. Las dos son razones para tomarse en serio lo que dice el resto de este artículo.

Queremos cerrar volviendo a la coincidencia que señalamos en la introducción, porque después de todo el recorrido dejamos de creer que sea una coincidencia. El profesional informático que interviene en materia de seguridad puede terminar ante un tribunal, y no como acusado sino como auxiliar de la justicia. No sabemos con qué frecuencia ocurre (no encontramos estadísticas de designaciones periciales por especialidad) pero sí sabemos que la ley se lo reserva y que, como se vio en el punto 8.3, la normativa provincial más reciente lo presupone. Puede actuar de cuatro maneras. Como **perito de oficio**, cuando el juzgado lo sortea de una lista. Como **perito de parte**, cuando lo contrata uno de los litigantes. Como **árbitro**, en peleas por contratos de software. Y como **tasador**, poniéndole precio a un desarrollo, a una base de datos o al daño que dejó un ataque.

En todos esos casos su trabajo consiste en producir prueba digital con dos propiedades que la vuelven admisible ante un juez: **integridad** (que se pueda demostrar que nadie tocó el original) y una **cadena de custodia** documentada, es decir, el registro de quién tuvo la evidencia en su poder, cuándo y por qué. Son exactamente las mismas propiedades que debió diseñar en el sistema cuando lo construyó, y las mismas que el punto 3 identificó como condición para que un incidente sea peritable.

> ### La idea que resume todo el artículo
> La actividad reservada n.º 9 y la n.º 11 no son dos incumbencias distintas que casualmente pertenecen al mismo título. Son **la misma competencia técnica aplicada antes y después del incidente**.
> El que diseña los controles y el que después le explica al juez qué pasó son la misma persona, con el mismo título, haciendo el mismo trabajo en dos momentos distintos.

---

## 10. Conclusiones: a qué llegamos
1. **El rol profesional en ciberseguridad tiene fundamento legal expreso en Argentina.** No es una construcción retórica de la disciplina ni una recomendación de buenas prácticas: la Resolución ME 786/2009, dictada bajo el artículo 43 de la Ley 24.521, reserva al título de grado «elaborar, diseñar, implementar y/o evaluar métodos y normas a seguir en cuestiones de seguridad de la información».
2. **Esa reserva tiene un precio, y es la responsabilidad.** El estándar de diligencia es más alto por el artículo 1725 del Código Civil y Comercial; el deber de secreto tiene su propio delito en el artículo 156 del Código Penal; y el código de ética profesional obliga a desobedecer las órdenes contrarias a la buena técnica.
3. **La obligación es de medios, no de resultado.** Ningún profesional puede garantizar que no habrá incidentes. Lo que sí puede (y debe) acreditar es haber aplicado el estado del arte, y eso se prueba únicamente con documentación.
4. **La ley delega en el profesional la definición del contenido técnico.** El artículo 9 de la Ley 25.326 exige «medidas técnicas y organizativas» sin enumerarlas. Quien las define es quien responde si las eligió mal, y por eso los estándares dejan de ser opcionales.
5. **El principal ámbito de ejercicio es el sector público.** El 61 % de los incidentes gestionados por el CERT.ar en 2024 impactó en organismos estatales, que son a la vez los mayores custodios de datos sensibles del país.
6. **En el Chaco la institución existe, pero no mira a la profesión.** Llegamos buscando un vacío normativo y encontramos lo contrario: la Ley 2955-C alcanza a «la ingeniería en todas las ramas y especialidades», sus artículos 7 y 8 hacen obligatoria la matrícula bajo pena de ejercicio ilegal, y su artículo 4 cuenta las pericias como ejercicio profesional. Lo que falta no es la norma sino su aplicación: COPIPACH no tiene área de informática, ni código de ética de la disciplina, ni comunicación hacia nuestra carrera.
7. **Ciberseguridad y peritaje son la misma incumbencia en dos tiempos.** Quien diseña los controles y quien produce la prueba de lo ocurrido ejercen la misma competencia técnica, reconocida por el mismo acto administrativo, en momentos distintos del ciclo de vida de un incidente.

De lo anterior se desprende una recomendación que excede el alcance académico de este trabajo, pero que sus conclusiones justifican, y que es más barata que la que habíamos previsto. **No hace falta crear un consejo nuevo.** Alcanza con dos cosas: que COPIPACH abra el área de informática que su propio artículo 45 le permite abrir, con un código de ética escrito para la disciplina; y que la facultad les advierta a sus egresados que la matrícula provincial probablemente los alcance. Crear un Consejo Profesional de Ciencias Informáticas propio, al modo de Buenos Aires, Córdoba, Entre Ríos o Mendoza, sigue siendo una opción, pero ya no es la única ni la más rápida.

Cerramos con una observación sobre nuestra propia formación. Empezamos este trabajo creyendo que la ciberseguridad era un área de especialización a la que uno se dedica si le interesa. Terminamos convencidos de que es una dimensión del ejercicio profesional de la que no se puede optar por salir, y que, sin embargo, nadie nos había mostrado escrita.

---

## 11. Limitaciones: lo que nos quedó por verificar

Siguiendo el criterio que fijamos en el punto 2, dejamos constancia de las afirmaciones cuyo grado de certeza es menor y de cómo debería resolverse cada una.
1. **Texto oficial de la Ley 4250-J.** Todo el punto 8.3 se apoya en cobertura periodística y comunicados oficiales, no en el texto publicado. Debe contrastarse contra el Digesto de la Legislatura del Chaco. *Es la verificación de mayor impacto sobre este trabajo.*
2. **La lectura de la Ley 2955-C es nuestra.** Los artículos 1, 31 y 45 los transcribimos del texto publicado por el propio Consejo, pero la conclusión de que alcanzan a Ingeniería en Sistemas de Información es una interpretación, no una respuesta institucional. Puede haber criterios internos, resoluciones de la Comisión Directiva o prácticas de matriculación que no constan en la ley. **Sólo COPIPACH puede confirmarlo o desmentirlo**, y esa consulta queda pendiente. Es la verificación de mayor impacto sobre el punto 8.5 y sobre la conclusión 6.
3. **No relevamos cuántos informáticos están matriculados.** El padrón electoral que publica el Consejo lista número de matrícula pero no especialidad, así que no pudimos medir si la matriculación de egresados de sistemas es nula, escasa o simplemente invisible. Ese dato convertiría nuestra afirmación sobre la práctica en una medición.
4. **Estado parlamentario del proyecto de reforma de la Ley 25.326.** Si hubiera sido sancionado, cambiarían las afirmaciones del punto 6.1 y del recuadro del punto 6.3 sobre el aviso de filtraciones.
5. **Discusión doctrinaria sobre el artículo 1757 del Código Civil y Comercial.** Afirmamos en el punto 5.1 que no encontramos una respuesta consolidada. Un relevamiento sistemático de sentencias (que no hicimos) podría mostrar lo contrario.
6. **Magnitud del subregistro de denuncias.** Sostenemos en el punto 7 que las cifras oficiales son un piso. La afirmación es plausible y está sostenida por la literatura, pero no citamos una cifra propia y no deberíamos hacerlo sin una fuente metodológicamente sólida.
7. **Existencia de un equipo provincial de respuesta a incidentes.** No relevamos si el Chaco cuenta con un CSIRT propio. Corresponde consultarlo con ECOM Chaco y con la Subsecretaría de Modernización del Estado.
8. **El artículo 19 de la Constitución del Chaco lo citamos en paráfrasis.** Contrastamos dos fuentes secundarias que coinciden, pero no pudimos acceder al texto oficial publicado por la provincia. Los artículos del código de ética, en cambio, sí están transcriptos de su texto publicado.
9. **Las Figuras 7 y 8 no vienen de fuentes estatales.** Una es de una empresa de ciberseguridad (Check Point) y la otra de una asociación profesional internacional (ISC2). Las usamos porque no encontramos equivalentes públicos, pero conviene tener presente que ambas tienen interés en que el problema se vea grande. Las tomamos como orden de magnitud, no como medición exacta.
10. **Informe anual del CERT.ar correspondiente a 2025.** De estar publicado, actualizaría las Figuras 3 a 6 y las cifras del punto 7.

---

## Declaraciones

### Uso de herramientas de inteligencia artificial

Este trabajo se elaboró con asistencia de un modelo de lenguaje. Lo declaramos porque nos parece que corresponde, y porque un artículo sobre responsabilidad profesional que ocultara cómo fue hecho sería incoherente consigo mismo.

La herramienta se usó para **buscar y localizar normativa y estadísticas**, para **redactar y reescribir** el texto, para **construir las figuras** y para **revisar el borrador** en busca de afirmaciones sin respaldo. No se usó para inventar datos ni citas.

Lo que sigue siendo nuestro, y de lo que respondemos: la **pregunta de investigación**, la **tesis** de que las actividades reservadas n.º 9 y n.º 11 son la misma competencia en dos momentos, la decisión de mirar el Chaco, y **la verificación de cada cita contra su fuente**. Ese último punto no es un detalle: durante la revisión encontramos que tres de las citas más importantes del borrador eran paráfrasis presentadas como texto literal, incluida la que le da título al artículo. Están corregidas contra el texto publicado, y esa corrección es la razón por la que dejamos esta declaración escrita.

### Contribuciones

El trabajo es del Grupo 6 en su conjunto. La distribución concreta de tareas (relevamiento normativo, redacción, figuras, revisión) se detalla en la presentación oral y en el repositorio del grupo.

### Conflictos de interés y financiamiento

No declaramos conflictos de interés. El trabajo no recibió financiamiento; se realizó en el marco de la cursada de Seminario Integrador.

### Disponibilidad de las fuentes

Toda la normativa citada es de acceso público y gratuito en los sitios oficiales de publicación (InfoLEG, argentina.gob.ar, Digesto de la Legislatura del Chaco y el sitio del propio COPIPACH). Las estadísticas provienen de los informes públicos de la UFECI y del CERT.ar. Los datos de cada figura están en el desplegable «Ver los datos» que acompaña a cada una.

---

## Referencias: fuentes consultadas

### Normativa que funda el rol

Ley 24.521 de Educación Superior, artículo 43.

Resolución 786/2009 del Ministerio de Educación, del 26 de mayo de 2009. Contenidos curriculares básicos y actividades profesionales reservadas de los títulos de Licenciado en Ciencias de la Computación, Licenciado en Sistemas / Sistemas de Información / Análisis de Sistemas, Licenciado en Informática, Ingeniero en Computación e Ingeniero en Sistemas de Información / Informática.

### Régimen de responsabilidad

Código Civil y Comercial de la Nación, artículos 1725, 1749, 1757 y 1768.

Código Penal de la Nación, artículos 153, 153 bis, 155, 156, 157 bis, 173 inciso 16, 183, 184 y 197, según el texto ordenado por la Ley 26.388 de Delitos Informáticos.

Consejo Profesional de Ciencias Informáticas, asociación civil de la Ciudad Autónoma de Buenos Aires. *Código de Ética Profesional*, artículos 6, 27, 29 y 30, consultados en su texto publicado.

Ley 13.016 de la Provincia de Buenos Aires, que crea el Consejo Profesional de Ciencias Informáticas de esa provincia (CPCIBA). Normas equivalentes de Córdoba, Entre Ríos y Mendoza.

ACM / IEEE Computer Society. *Software Engineering Code of Ethics and Professional Practice.* ISC². *Code of Ethics.*

### Normativa que crea deberes concretos

Ley 25.326 de Protección de los Datos Personales, y su Decreto reglamentario 1558/2001.

Ley 25.506 de Firma Digital, y su Decreto reglamentario 2628/2002.

Ley 27.411, que aprueba el Convenio sobre Ciberdelito del Consejo de Europa (Convenio de Budapest). Ley 26.904 (grooming); Ley 27.436; Ley 27.590; Ley 27.699.

Decreto 941/2025, que crea el Centro Nacional de Ciberseguridad. Decreto 577/2017; Decreto 50/2019. Ley 23.554 de Defensa Nacional.

Decisión Administrativa 641/2021, Requisitos Mínimos de Seguridad de la Información para el Sector Público Nacional. Decisión Administrativa 893/2022.

Resoluciones 829/2019 y 44/2023, Estrategias Nacionales de Ciberseguridad. Resolución 1523/2019 sobre infraestructuras críticas de información.

Disposiciones de la Dirección Nacional de Ciberseguridad y del Centro Nacional de Ciberseguridad: 1/2021 (creación del CERT.ar), 8/2021 (guía de seguridad para desarrollo de aplicaciones web), 1/2022, 3/2023 (guía de notificación y gestión de incidentes) y 1/2026 (planes de contingencia y centros de datos alternos).

### Fuentes estadísticas

Unidad Fiscal Especializada en Ciberdelincuencia (UFECI), Ministerio Público Fiscal de la Nación. *Informe 2024: casos y modalidades reportadas.* Disponible en fiscales.gob.ar.

CERT.ar. *Informe anual de gestión de incidentes de ciberseguridad 2024.* Centro Nacional de Ciberseguridad, argentina.gob.ar.

Check Point Research. Medición de intentos de ciberataque semanales por organización, mayo de 2026. *Fuente de la industria; ver punto 11.*

ISC2. *Cybersecurity Workforce Study* (brecha global de profesionales; edición 2025 para el dato del 88 %). *Fuente sectorial; ver punto 11.*

Universidad Champagnat y Municipalidad de Mendoza. Relevamiento sobre victimización y denuncia de ciberdelitos. *Alcance local; no extrapolable al país.*

### Provincia del Chaco

Constitución de la Provincia del Chaco (1957-1994), artículo 19 (garantías de hábeas corpus, amparo y hábeas data).

Ley provincial 4360, reglamentaria de la acción de habeas data; Digesto Jurídico, L. 898-B.

Ley 3203-A de simplificación y modernización de la administración provincial. Programa Chaco Digital; plataforma Tu Gobierno Digital.

Ley 4250-J de protección digital, sancionada el 8 de julio de 2026; modificatoria del Código de Faltas (Ley 850-J) y del Código Procesal Penal (Ley 965-N). Cámara de Diputados de la Provincia del Chaco, novena sesión ordinaria. *Consultada a través de cobertura periodística y comunicados oficiales; ver punto 2 y punto 11.*

Ley 2955-C de la Provincia del Chaco, «Ejercicio profesional de la ingeniería y creación del Consejo Profesional de la Ingeniería y Profesiones Afines». Artículos 1, 2, 4, 7, 8, 31 y 45, transcriptos del texto publicado por el propio Consejo (copipach.org), fuente: Dirección de Información Parlamentaria de la Legislatura del Chaco.

Ley 2952-C de la Provincia del Chaco, Colegio Profesional de Técnicos.

Ley 11.291 de la Provincia de Santa Fe, que crea el Colegio de Ingenieros Especialistas, citada como evidencia comparada de un consejo provincial de ingeniería que matricula el área de Sistemas.

Actas de adhesión de ECOM Chaco y del Poder Judicial del Chaco a los Requisitos Mínimos de Seguridad de la Información, Dirección Nacional de Ciberseguridad.

### Estándares técnicos

ISO/IEC 27001, 27002, 27032 y 27037. NIST *Cybersecurity Framework*. OWASP *Top 10* y *Application Security Verification Standard*.

### Normativa que funda el rol
- Ley 24.521 de Educación Superior, artículo 43.
- Resolución 786/2009 del Ministerio de Educación, del 26 de mayo de 2009. Contenidos curriculares básicos y actividades profesionales reservadas de los títulos de Licenciado en Ciencias de la Computación, Licenciado en Sistemas / Sistemas de Información / Análisis de Sistemas, Licenciado en Informática, Ingeniero en Computación e Ingeniero en Sistemas de Información / Informática.

### Régimen de responsabilidad
- Código Civil y Comercial de la Nación, artículos 1725, 1749, 1757 y 1768.
- Código Penal de la Nación, artículos 153, 153 bis, 155, 156, 157 bis, 173 inciso 16, 183, 184 y 197, según el texto ordenado por la Ley 26.388 de Delitos Informáticos.
- Consejo Profesional de Ciencias Informáticas, asociación civil de la Ciudad Autónoma de Buenos Aires. *Código de Ética Profesional*, artículos 6, 27, 29 y 30, consultados en su texto publicado.
- Ley 13.016 de la Provincia de Buenos Aires, que crea el Consejo Profesional de Ciencias Informáticas de esa provincia (CPCIBA). Normas equivalentes de Córdoba, Entre Ríos y Mendoza.
- ACM / IEEE Computer Society. *Software Engineering Code of Ethics and Professional Practice.* ISC². *Code of Ethics.*

### Normativa que crea deberes concretos
- Ley 25.326 de Protección de los Datos Personales, y su Decreto reglamentario 1558/2001.
- Ley 25.506 de Firma Digital, y su Decreto reglamentario 2628/2002.
- Ley 27.411, que aprueba el Convenio sobre Ciberdelito del Consejo de Europa (Convenio de Budapest). Ley 26.904 (grooming); Ley 27.436; Ley 27.590; Ley 27.699.
- Decreto 941/2025, que crea el Centro Nacional de Ciberseguridad. Decreto 577/2017; Decreto 50/2019. Ley 23.554 de Defensa Nacional.
- Decisión Administrativa 641/2021, Requisitos Mínimos de Seguridad de la Información para el Sector Público Nacional. Decisión Administrativa 893/2022.
- Resoluciones 829/2019 y 44/2023, Estrategias Nacionales de Ciberseguridad. Resolución 1523/2019 sobre infraestructuras críticas de información.
- Disposiciones de la Dirección Nacional de Ciberseguridad y del Centro Nacional de Ciberseguridad: 1/2021 (creación del CERT.ar), 8/2021 (guía de seguridad para desarrollo de aplicaciones web), 1/2022, 3/2023 (guía de notificación y gestión de incidentes) y 1/2026 (planes de contingencia y centros de datos alternos).

### Fuentes estadísticas
- Unidad Fiscal Especializada en Ciberdelincuencia (UFECI), Ministerio Público Fiscal de la Nación. *Informe 2024: casos y modalidades reportadas.* Disponible en fiscales.gob.ar.
- CERT.ar. *Informe anual de gestión de incidentes de ciberseguridad 2024.* Centro Nacional de Ciberseguridad, argentina.gob.ar.
- Check Point Research. Medición de intentos de ciberataque semanales por organización, mayo de 2026. *Fuente de la industria; ver punto 11.*
- ISC2. *Cybersecurity Workforce Study* (brecha global de profesionales; edición 2025 para el dato del 88 %). *Fuente sectorial; ver punto 11.*
- Universidad Champagnat y Municipalidad de Mendoza. Relevamiento sobre victimización y denuncia de ciberdelitos. *Alcance local; no extrapolable al país.*

### Provincia del Chaco
- Constitución de la Provincia del Chaco (1957-1994), artículo 19 (garantías de hábeas corpus, amparo y hábeas data).
- Ley provincial 4360, reglamentaria de la acción de habeas data; Digesto Jurídico, L. 898-B.
- Ley 3203-A de simplificación y modernización de la administración provincial. Programa Chaco Digital; plataforma Tu Gobierno Digital.
- Ley 4250-J de protección digital, sancionada el 8 de julio de 2026; modificatoria del Código de Faltas (Ley 850-J) y del Código Procesal Penal (Ley 965-N). Cámara de Diputados de la Provincia del Chaco, novena sesión ordinaria. *Consultada a través de cobertura periodística y comunicados oficiales; ver punto 2 y punto 11.*
- Ley 2955-C de la Provincia del Chaco, «Ejercicio profesional de la ingeniería y creación del Consejo Profesional de la Ingeniería y Profesiones Afines». Artículos 1, 2, 4, 7, 8, 31 y 45, transcriptos del texto publicado por el propio Consejo (copipach.org), fuente: Dirección de Información Parlamentaria de la Legislatura del Chaco.
- Ley 2952-C de la Provincia del Chaco, Colegio Profesional de Técnicos.
- Ley 11.291 de la Provincia de Santa Fe, que crea el Colegio de Ingenieros Especialistas, citada como evidencia comparada de un consejo provincial de ingeniería que matricula el área de Sistemas.
- Actas de adhesión de ECOM Chaco y del Poder Judicial del Chaco a los Requisitos Mínimos de Seguridad de la Información, Dirección Nacional de Ciberseguridad.

### Estándares técnicos
- ISO/IEC 27001, 27002, 27032 y 27037. NIST *Cybersecurity Framework*. OWASP *Top 10* y *Application Security Verification Standard*.
