export const courseModules = [
  {
    id: "m1",
    title: "1. Introducción a Excel para oficina",
    description: "Conoce qué es Excel y cómo se aplica en un entorno laboral real.",
    theory: [
      {
        concept: "¿Qué es Excel?",
        explanation: "Excel es una hoja de cálculo electrónica que permite organizar datos, realizar cálculos y generar reportes. Es la herramienta principal en el 90% de las oficinas.",
        example: "Gobierno: Padrón de beneficiarios. Empresa: Inventario de ventas. Escuela: Lista de calificaciones.",
        error: "Usar Excel como si fuera Word (solo para escribir texto) sin aprovechar sus celdas y fórmulas.",
        tip: "Piensa en Excel como una gran tabla cuadriculada infinita donde cada cuadro (celda) puede contener datos y operaciones matemáticas."
      },
      {
        concept: "Estructura Básica: Libro, Hoja, Celda",
        explanation: "Un Archivo de Excel es un 'Libro'. Un libro tiene varias 'Hojas' (pestañas abajo). Cada hoja está formada por 'Celdas' (la intersección de una columna y una fila).",
        example: "La celda C4 está en la columna C y la fila 4. Un 'Rango' es un conjunto de celdas, ejemplo: A1:A10.",
        error: "Crear 50 archivos distintos en lugar de usar varias hojas dentro de un mismo libro para tareas relacionadas.",
        tip: "Renombra siempre las hojas haciendo doble clic sobre 'Hoja1' en la parte inferior para mantener el orden."
      }
    ],
    simulator: [],
    exercises: [
      {
        context: "Te han enviado un padrón, pero no sabes dónde encontrar un dato.",
        instruction: "Identifica qué es 'B5'.",
        data: [
          ["", "A", "B", "C"],
          ["1", "ID", "Nombre", "Edad"],
          ["2", "001", "Juan", "25"],
          ["3", "002", "Ana", "30"]
        ],
        expected: "La celda B5 no está en los datos mostrados, pero B2 contiene 'Juan'.",
        solution: "Las letras son columnas (vertical), los números son filas (horizontal). La celda es el cruce."
      }
    ],
    quiz: [
      {
        question: "¿Qué es un rango en Excel?",
        options: ["Una sola celda.", "Un conjunto de celdas contiguas (ej. A1:B5).", "El nombre del archivo.", "Una hoja de cálculo."],
        correct: 1,
        feedback: "Correcto! Un rango es un grupo de celdas seleccionadas juntas."
      },
      {
        question: "Si tu jefe te pide 'crear una nueva pestaña en el documento', ¿a qué se refiere?",
        options: ["Abrir un nuevo archivo de Excel.", "Crear una nueva Hoja dentro del mismo Libro.", "Añadir una columna.", "Cerrar el archivo."],
        correct: 1,
        feedback: "¡Exacto! Las pestañas en la parte inferior de la ventana son las 'Hojas' del libro."
      }
    ],
    tasks: [
      "Abre Excel, crea un libro en blanco y renombra 'Hoja1' a 'Enero'.",
      "Selecciona el rango A1:C10 y ponle un color de fondo amarillo."
    ]
  },
  {
    id: "m2",
    title: "2. Captura correcta de datos",
    description: "Aprende las reglas de oro para ingresar información sin arruinar bases de datos.",
    theory: [
      {
        concept: "Nombres y Textos",
        explanation: "Evita dejar espacios al principio o al final. No uses TODO MAYÚSCULAS a menos que sea un formato oficial. Divide el nombre en varias columnas si necesitas ordenar por apellido.",
        example: "Bien: Juan | Pérez | Gómez. Mal: JUAN PEREZ GOMEZ (con doble espacio).",
        error: "Añadir un espacio al final de un nombre. Esto hará que la fórmula BUSCARV no lo encuentre nunca.",
        tip: "Acostúmbrate a capturar en MAYÚSCULAS/MINÚSCULAS (Tipo Título) desde el inicio para ahorrar tiempo."
      },
      {
        concept: "Fechas y Teléfonos",
        explanation: "Las fechas deben introducirse con '/' o '-' (ej. 15/04/2026). Los teléfonos deben capturarse como texto o sin espacios/guiones para poder filtrarlos bien.",
        example: "Bien: 15/04/2026. Mal: 15 de Abril 2026.",
        error: "Poner texto junto al número, ej: '555-1234 (celular)'. ¡Esto arruina el formato de número!",
        tip: "Si un número empieza con cero (ej. 0123) y Excel lo borra, escribe una comilla simple (') antes del cero: '0123."
      }
    ],
    simulator: [],
    exercises: [
      {
        context: "Limpiaremos la captura incorrecta de un compañero.",
        instruction: "¿Cuál es el error en la captura de este teléfono: '55 1234 5678 (recados)'?",
        data: [],
        expected: "Tiene texto y espacios mezclados.",
        solution: "Debe capturarse solo los números (5512345678) y en otra columna 'Observaciones' poner '(recados)'."
      }
    ],
    quiz: [
      {
        question: "¿Cuál es la mejor forma de capturar una fecha para que Excel la reconozca?",
        options: ["01 de Marzo del 2026", "01/03/2026", "Marzo 01 2026", "1-Mar-26"],
        correct: 1,
        feedback: "Correcto. El formato con '/' (ej. DD/MM/AAAA) es el más seguro y universal en Excel."
      }
    ],
    tasks: [
      "Crea una tabla con 5 registros inventados cuidando que los nombres no tengan espacios extra.",
      "Captura 5 números de teléfono de 10 dígitos sin espacios y aplícales formato de texto."
    ]
  },
  {
    id: "m3",
    title: "3. Formato de tablas",
    description: "Dale un aspecto profesional a tus reportes para que sean fáciles de leer.",
    theory: [
      {
        concept: "Encabezados y Ajuste de Columnas",
        explanation: "La primera fila siempre debe ser tu encabezado (negritas, centrado, color distinto). Ajusta el ancho de las columnas haciendo doble clic en el límite entre las letras de las columnas.",
        example: "Fila 1: ID, NOMBRE, FECHA, ESTATUS.",
        error: "Dejar texto cortado o columnas tan anchas que hay que hacer scroll horizontal innecesario.",
        tip: "Selecciona toda la hoja (click en el triángulo entre A y 1) y haz doble clic entre dos columnas para autoajustar todo de golpe."
      },
      {
        concept: "Congelar Paneles",
        explanation: "Si tienes una tabla muy larga, al bajar pierdes de vista los encabezados. 'Inmovilizar fila superior' te permite mantener los encabezados siempre visibles.",
        example: "Ir a Vista > Inmovilizar > Inmovilizar fila superior.",
        error: "Intentar copiar y pegar los encabezados en cada página, lo cual arruina los filtros.",
        tip: "Si seleccionas la celda B2 y usas 'Inmovilizar paneles', se congelarán la fila 1 y la columna A al mismo tiempo."
      }
    ],
    simulator: [],
    exercises: [
      {
        context: "Te piden un reporte de pagos presentable.",
        instruction: "Imagina una columna con '1500'. ¿Cómo debe formatearse si es dinero?",
        data: [],
        expected: "Debe aplicarse formato de 'Moneda' o 'Contabilidad' para que se vea como $1,500.00.",
        solution: "Nunca escribas el signo de $ manualmente. Escribe 1500 y usa el botón de formato '$' en la pestaña Inicio."
      }
    ],
    quiz: [
      {
        question: "¿Para qué sirve inmovilizar paneles?",
        options: ["Para bloquear la hoja con contraseña.", "Para que los encabezados sigan visibles al hacer scroll hacia abajo.", "Para que no se puedan borrar los datos.", "Para detener el cálculo de fórmulas."],
        correct: 1,
        feedback: "¡Exacto! Es vital para bases de datos largas."
      }
    ],
    tasks: [
      "Abre Excel, crea una tabla con 5 columnas y 20 filas.",
      "Aplica un color oscuro a los encabezados con texto blanco, e inmoviliza la fila 1."
    ]
  },
  {
    id: "m4",
    title: "4. Fórmulas básicas",
    description: "Las herramientas matemáticas esenciales para el día a día.",
    theory: [
      {
        concept: "SUMA, PROMEDIO, MAX y MIN",
        explanation: "Realizan cálculos automáticos sobre un rango. Todas las fórmulas en Excel empiezan con un signo igual (=).",
        example: "=SUMA(A1:A10) suma todos los números. =PROMEDIO(B1:B5) da la media.",
        error: "Escribir =A1+A2+A3... en lugar de usar =SUMA(A1:A30).",
        tip: "Usa el atajo ALT + = (o Shift+ALT+=) al final de una columna para insertar autosuma instantáneamente."
      },
      {
        concept: "CONTAR vs CONTARA",
        explanation: "CONTAR solo cuenta celdas que contienen números. CONTARA cuenta celdas no vacías (texto, números, símbolos).",
        example: "=CONTARA(A2:A100) te dirá cuántos nombres de personas capturaste.",
        error: "Usar CONTAR en una columna de Nombres. Te dará 0 porque no hay números.",
        tip: "Usa CONTARA para saber rápidamente cuántos registros hay en un padrón usando la columna ID o Nombre."
      },
      {
        concept: "La función SI (Condicional)",
        explanation: "Hace que Excel decida. Sintaxis: =SI(condición, valor_si_verdadero, valor_si_falso).",
        example: "=SI(E2=\"CONCLUIDA\", \"LISTO\", \"PENDIENTE\")",
        error: "Olvidar las comillas dobles (\"\") al escribir el texto que quieres que aparezca.",
        tip: "La función SI es la clave para automatizar alertas. Ej: =SI(Ventas>=1000, \"Bono\", \"\")"
      }
    ],
    simulator: [
      {
        formula: "=SUMA(B2:B10)",
        action: "Suma los valores desde B2 hasta B10",
        syntax: "=SUMA(rango)",
        example: "Si B2=10 y B3=20. Resultado: 30"
      },
      {
        formula: "=SI(C2>=70, \"APROBADO\", \"REVISAR\")",
        action: "Evalúa si la calificación es mayor o igual a 70.",
        syntax: "=SI(prueba_lógica, valor_si_verdadero, valor_si_falso)",
        example: "Si C2=65. Resultado: REVISAR"
      },
      {
        formula: "=CONTAR.SI(F2:F100, \"PENDIENTE\")",
        action: "Cuenta cuántas veces aparece la palabra 'PENDIENTE'.",
        syntax: "=CONTAR.SI(rango, criterio)",
        example: "Si hay 5 'PENDIENTE' en la columna F. Resultado: 5"
      }
    ],
    exercises: [
      {
        context: "Tabla de apoyos a ciudadanos.",
        instruction: "Si en la celda C2 está la edad de una persona, escribe una fórmula para que si es mayor o igual a 65, diga 'APOYO', de lo contrario 'NO APLICA'.",
        data: [],
        expected: "=SI(C2>=65, \"APOYO\", \"NO APLICA\")",
        solution: "=SI(C2>=65, \"APOYO\", \"NO APLICA\")"
      }
    ],
    quiz: [
      {
        question: "¿Qué fórmula usarías para saber cuántos asistentes vinieron a una reunión, si en la columna A están sus nombres?",
        options: ["=CONTAR(A:A)", "=SUMA(A:A)", "=CONTARA(A:A)", "=PROMEDIO(A:A)"],
        correct: 2,
        feedback: "¡Muy bien! CONTARA cuenta celdas con texto."
      }
    ],
    tasks: [
      "Crea una lista de 10 calificaciones escolares.",
      "Usa la fórmula SI para que los que tengan menos de 6 digan 'REPROBADO' y el resto 'APROBADO'."
    ]
  },
  {
    id: "m5",
    title: "5. Fórmulas de texto",
    description: "Ideal para limpiar y unificar bases de datos desastrosas.",
    theory: [
      {
        concept: "CONCATENAR y ESPACIOS",
        explanation: "CONCATENAR (o CONCAT) une celdas. ESPACIOS borra los molestos espacios accidentales al inicio o final de un texto.",
        example: "=CONCATENAR(A2, \" \", B2) une el Nombre y Apellido poniendo un espacio en medio.",
        error: "Olvidar poner el espacio \" \" entre comillas al concatenar, lo que resulta en 'JuanPérez'.",
        tip: "Siempre que recibas una base de otra persona, aplica =ESPACIOS() a las columnas de texto."
      },
      {
        concept: "MAYUSC, MINUSC y NOMPROPIO",
        explanation: "Transforman el formato del texto al instante.",
        example: "=NOMPROPIO(\"jUan peReZ\") da como resultado 'Juan Perez'.",
        error: "Intentar reescribir manualmente mil nombres en lugar de usar =MAYUSC(A2) y arrastrar la fórmula.",
        tip: "Crea una columna auxiliar, aplica la fórmula, copia los resultados, y pega como 'Valores' sobre la columna original."
      }
    ],
    simulator: [
      {
        formula: "=CONCATENAR(A2, \" \", B2)",
        action: "Une nombre y apellido.",
        syntax: "=CONCATENAR(texto1, texto2, ...)",
        example: "A2='Ana', B2='López'. Resultado: 'Ana López'"
      },
      {
        formula: "=NOMPROPIO(A2)",
        action: "Pone la primera letra en mayúscula.",
        syntax: "=NOMPROPIO(texto)",
        example: "A2='mARÍA góMEz'. Resultado: 'María Gómez'"
      },
      {
        formula: "=SUSTITUIR(A2, \"-\", \"\")",
        action: "Reemplaza un texto por otro.",
        syntax: "=SUSTITUIR(texto, texto_viejo, texto_nuevo)",
        example: "A2='555-123-4567'. Resultado: '5551234567'"
      }
    ],
    exercises: [
      {
        context: "Tienes una columna con teléfonos con guiones: '55-1234-5678'.",
        instruction: "¿Qué fórmula usarías para quitar los guiones?",
        data: [],
        expected: "=SUSTITUIR(A2, \"-\", \"\")",
        solution: "Usa SUSTITUIR para cambiar el guion \"-\" por nada (comillas vacías \"\")."
      }
    ],
    quiz: [
      {
        question: "Si la celda A1 tiene ' juan ', ¿qué fórmula elimina los espacios en blanco sobrantes?",
        options: ["=BORRAR(A1)", "=LIMPIAR(A1)", "=ESPACIOS(A1)", "=TEXTO(A1)"],
        correct: 2,
        feedback: "¡Exacto! ESPACIOS es vital para la limpieza de datos."
      }
    ],
    tasks: [
      "Escribe 5 nombres mal formateados (ej. mArTa) y usa NOMPROPIO para arreglarlos.",
      "Une el contenido de tres celdas separándolas con una coma usando CONCATENAR."
    ]
  },
  {
    id: "m6",
    title: "6. Búsqueda de datos",
    description: "Domina BUSCARV, la fórmula más demandada en las entrevistas de trabajo.",
    theory: [
      {
        concept: "BUSCARV (Vlookup)",
        explanation: "Busca un valor en la primera columna de una tabla y te devuelve otro dato de esa misma fila.",
        example: "Buscar el CURP de un ciudadano para que Excel te traiga su Dirección automáticamente.",
        error: "Olvidar poner 'FALSO' o '0' al final de la fórmula. Si no lo pones, Excel te dará datos incorrectos.",
        tip: "El dato que buscas (ej. el CURP) DEBE estar siempre en la primera columna de la tabla donde haces la búsqueda."
      },
      {
        concept: "Errores de BUSCARV (#N/D)",
        explanation: "Si sale #N/D significa 'No Disponible'. O no existe, o hay un error de formato (ej. el número 123 está guardado como texto en una tabla y como número en otra).",
        example: "Usa =SI.ERROR(BUSCARV(...), \"No encontrado\") para que el reporte se vea más limpio.",
        error: "Buscar por nombre (ej. 'Juan Pérez'). Siempre busca por datos únicos (ID, RFC, CURP, Folio).",
        tip: "La nueva función BUSCARX soluciona casi todos los problemas de BUSCARV, úsala si tienes Office 365."
      }
    ],
    simulator: [
      {
        formula: "=BUSCARV(A2, TablaDatos, 3, FALSO)",
        action: "Busca el valor de A2, en la tabla, y trae la columna 3.",
        syntax: "=BUSCARV(valor_buscado, rango_tabla, num_columna, exactitud)",
        example: "A2='001'. Tabla tiene (ID, Nombre, Edad). Traerá la Edad."
      },
      {
        formula: "=BUSCARX(A2, A:A, C:C, \"NO ENCONTRADO\")",
        action: "Busca A2 en columna A, devuelve columna C.",
        syntax: "=BUSCARX(valor_buscado, matriz_buscada, matriz_devuelta, [si_no_se_encuentra])",
        example: "Mucho más fácil y potente que BUSCARV."
      }
    ],
    exercises: [
      {
        context: "Cruzar base de ciudadanos con base de pagos.",
        instruction: "Si buscas el ID de la celda A2, en el rango Hoja2!A:D, y quieres traer el Pago (columna 4). Escribe la fórmula.",
        data: [],
        expected: "=BUSCARV(A2, Hoja2!A:D, 4, FALSO)",
        solution: "Asegúrate de poner FALSO para coincidencia exacta."
      }
    ],
    quiz: [
      {
        question: "¿Qué significa el último argumento 'FALSO' o '0' en un BUSCARV?",
        options: ["Que la fórmula no funciona.", "Que busque una coincidencia exacta.", "Que busque una coincidencia aproximada.", "Que ignore los errores."],
        correct: 1,
        feedback: "¡Correcto! Siempre usa FALSO en trabajo de oficina para no cruzar datos erróneos."
      }
    ],
    tasks: [
      "Crea una 'Tabla 1' con ID y Nombre, y una 'Tabla 2' con ID y Teléfono.",
      "Usa BUSCARV para traer el teléfono de la Tabla 2 hacia la Tabla 1."
    ]
  },
  {
    id: "m7",
    title: "7. Limpieza de bases de datos",
    description: "Aprende a arreglar un archivo sucio y dejarlo listo para analizar.",
    theory: [
      {
        concept: "Eliminar Duplicados",
        explanation: "Herramienta que borra filas repetidas. Ve a Datos > Quitar Duplicados.",
        example: "Si capturaste a la misma persona dos veces, Excel borra la segunda aparición basándose en el CURP o Folio.",
        error: "Quitar duplicados seleccionando solo una columna en vez de toda la tabla; esto revuelve los datos de toda la base.",
        tip: "Siempre haz una copia de seguridad de la hoja antes de usar 'Quitar Duplicados'."
      },
      {
        concept: "Texto en Columnas",
        explanation: "Separa texto contenido en una celda a varias columnas. Ideal cuando te pasan nombres completos y necesitas Nombre, Paterno, Materno.",
        example: "Datos > Texto en columnas > Delimitado por 'Espacio'.",
        error: "Hacerlo cuando no tienes columnas vacías a la derecha; sobreescribirás los datos existentes.",
        tip: "Combínalo con =ESPACIOS() primero para que la separación sea perfecta."
      }
    ],
    simulator: [],
    exercises: [
      {
        context: "Te envían un Excel con nombres completos y necesitas separarlos.",
        instruction: "¿Qué herramienta del menú Datos usarías?",
        data: [],
        expected: "Texto en columnas.",
        solution: "Pestaña Datos -> Texto en columnas -> Delimitado (por espacios)."
      }
    ],
    quiz: [
      {
        question: "Si vas a usar Quitar Duplicados para eliminar registros repetidos de ciudadanos, ¿qué columna deberías usar como criterio principal?",
        options: ["Nombre completo", "Colonia", "CURP, RFC o Folio Único", "Edad"],
        correct: 2,
        feedback: "Correcto. El Nombre puede repetirse (Homónimos), pero el CURP o ID es único."
      }
    ],
    tasks: [
      "Pega una lista de 5 nombres completos en una columna y usa 'Texto en Columnas' para separarlos.",
      "Duplica una fila intencionalmente y usa 'Quitar duplicados'."
    ]
  },
  {
    id: "m8",
    title: "8. Filtros, ordenamiento y reportes",
    description: "Analiza rápidamente la información y responde preguntas de tu jefe en segundos.",
    theory: [
      {
        concept: "Filtros Automáticos",
        explanation: "Permiten ocultar temporalmente información que no necesitas ver. Atajo: CTRL + SHIFT + L.",
        example: "Filtrar la columna 'Estatus' para ver solo los 'PENDIENTE'.",
        error: "Olvidar que hay un filtro activo y pensar que se borró información.",
        tip: "Puedes filtrar por colores si marcaste filas importantes en amarillo."
      },
      {
        concept: "Subtotales y Reportes rápidos",
        explanation: "En lugar de sumar todo a mano, usa una Tabla Dinámica o la fórmula =SUBTOTALES() para que la suma cambie al aplicar filtros.",
        example: "=SUBTOTALES(9, C2:C100) sumará solo las filas visibles después de filtrar.",
        error: "Usar =SUMA() en una tabla filtrada. SUMA incluirá los datos ocultos. SUBTOTALES no.",
        tip: "Acostúmbrate a convertir tus rangos de datos en 'Tablas Oficiales' de Excel presionando CTRL + T."
      }
    ],
    simulator: [],
    exercises: [
      {
        context: "Tu jefe pide la suma total, pero solo de los folios 'APROBADOS'.",
        instruction: "¿Por qué no debes usar =SUMA() si aplicas un filtro?",
        data: [],
        expected: "Porque =SUMA() suma incluso las celdas ocultas por el filtro.",
        solution: "Aplica el filtro y usa =SUBTOTALES(9, rango) o selecciona los números visibles y mira la barra de estado inferior derecha de Excel."
      }
    ],
    quiz: [
      {
        question: "¿Cuál es el atajo de teclado para aplicar o quitar Filtros rápidamente?",
        options: ["CTRL + F", "CTRL + B", "CTRL + SHIFT + L", "ALT + F4"],
        correct: 2,
        feedback: "¡Memorízalo! CTRL + SHIFT + L te salvará la vida diario."
      }
    ],
    tasks: [
      "Convierte tu tabla de pruebas en una Tabla de Excel (CTRL + T).",
      "Aplica un filtro para mostrar solo a las personas con 'APROBADO'."
    ]
  },
  {
    id: "m9",
    title: "9. Inventario básico",
    description: "Aplica todo lo aprendido para llevar el control de entradas y salidas.",
    theory: [
      {
        concept: "Estructura del Inventario",
        explanation: "Mínimo necesitas: ID Producto, Descripción, Entradas, Salidas y Existencias (Stock).",
        example: "Existencia = (Inventario Inicial + Entradas) - Salidas.",
        error: "Modificar la Existencia a mano en lugar de usar fórmulas referenciadas.",
        tip: "Usa Formato Condicional para pintar de rojo las celdas de Existencia cuando el valor sea menor a 5."
      },
      {
        concept: "SUMAR.SI para inventarios",
        explanation: "Si tienes un historial diario de entradas, usa SUMAR.SI para saber cuánto entró en total de un producto específico.",
        example: "=SUMAR.SI(Columna_Productos, \"Lápices\", Columna_Cantidades)",
        error: "Hacer un historial en hojas diferentes por mes. Es mejor una sola base de datos grande filtrable por fecha.",
        tip: "Diseña un archivo 'Kardex' donde anotes cada movimiento, y una hoja de 'Resumen' con fórmulas."
      }
    ],
    simulator: [
      {
        formula: "=SUMAR.SI(A2:A100, \"DESPENSA\", B2:B100)",
        action: "Suma los valores de la columna B, SOLO si en la columna A dice 'DESPENSA'.",
        syntax: "=SUMAR.SI(rango_criterio, criterio, rango_suma)",
        example: "Ideal para sumar gastos por departamento."
      }
    ],
    exercises: [
      {
        context: "Quieres saber cuántas libretas salieron del almacén hoy.",
        instruction: "Escribe un SUMAR.SI si la columna C tiene el producto y la D tiene la cantidad.",
        data: [],
        expected: "=SUMAR.SI(C:C, \"Libreta\", D:D)",
        solution: "El primer rango es donde buscas (Producto), luego qué buscas (\"Libreta\"), y por último el rango a sumar (Cantidad)."
      }
    ],
    quiz: [
      {
        question: "En control de inventario, ¿qué fórmula colorea celdas automáticamente según su valor?",
        options: ["Pintar.Celda", "Formato Condicional", "Estilos de Tabla", "Brocha de formato"],
        correct: 1,
        feedback: "Correcto. Formato Condicional > Resaltar reglas de celdas > Menor que..."
      }
    ],
    tasks: [
      "Crea un mini inventario de 5 productos de papelería.",
      "Aplica formato condicional para que la 'Existencia' se pinte rojo si es menor a 10."
    ]
  },
  {
    id: "m10",
    title: "10. Caso práctico final de oficina",
    description: "El examen integrador. Demuestra que puedes manejar una base de datos real.",
    theory: [
      {
        concept: "Flujo de trabajo recomendado",
        explanation: "1. Haz una copia del original. 2. Limpia espacios (ESPACIOS). 3. Estandariza texto (MAYUSC/NOMPROPIO). 4. Quita duplicados. 5. Cruza datos (BUSCARV). 6. Analiza (Filtros/Tablas Dinámicas).",
        example: "Seguir este orden evita arrastrar errores desde el inicio.",
        error: "Intentar hacer un gráfico o reporte sin haber limpiado la base primero.",
        tip: "NUNCA trabajes sobre el archivo original que te enviaron por correo. Guárdalo como 'Archivo_Original' y haz un 'Archivo_Trabajo'."
      }
    ],
    simulator: [],
    exercises: [
      {
        context: "El archivo final.",
        instruction: "Revisa la lista de tareas en la sección de 'Tareas' y evalúa tu progreso.",
        data: [],
        expected: "Completar la simulación",
        solution: "Si dudas en algún paso, repasa el módulo 6 (BUSCARV) o 7 (Limpieza)."
      }
    ],
    quiz: [
      {
        question: "¿Cuál es el primer paso antes de empezar a modificar un archivo importante que te enviaron?",
        options: ["Ponerle filtros.", "Borrar las columnas vacías.", "Guardar una copia de respaldo.", "Hacer un BUSCARV."],
        correct: 2,
        feedback: "¡Regla de oro de oficina! Nunca trabajes sobre el único original."
      }
    ],
    tasks: [
      "Descarga o crea una base sucia de 20 filas (nombres mal escritos, espacios extra).",
      "Limpia los datos, cruza información con otra tabla inventada, y genera un reporte de cantidades por Estatus usando SUMAR.SI."
    ]
  }
];

export const intensiveRoute = {
  title: "Ruta intensiva de 7 días",
  description: "Un plan estructurado paso a paso para dominar lo esencial en una semana de práctica enfocada.",
  days: [
    {
      day: "Día 1: Interfaz, captura y formato",
      goal: "Aprender a moverse en Excel y escribir datos correctamente sin arruinar reportes futuros.",
      topics: "Módulo 1, 2 y 3. Atajos de teclado básicos.",
      practice: "Crear una tabla de 20 filas desde cero, aplicando formato de moneda, fecha correcta y congelando paneles.",
      expected: "Una tabla limpia, presentable y navegable."
    },
    {
      day: "Día 2: Tablas, filtros y ordenamiento",
      goal: "Poder encontrar información rápidamente y responder a consultas comunes.",
      topics: "Módulo 8 y Tablas oficiales (CTRL+T).",
      practice: "Aplicar filtros por estatus, colores y fechas. Usar orden alfabético.",
      expected: "Saber responder 'Cuántos registros tenemos del estatus X' usando filtros."
    },
    {
      day: "Día 3: Fórmulas básicas",
      goal: "Automatizar matemáticas de oficina.",
      topics: "Módulo 4: SUMA, PROMEDIO, MAX, MIN, CONTARA.",
      practice: "Calcular promedios mensuales y contar el total de beneficiarios en una lista.",
      expected: "Manejo fluido de rangos (ej. A1:A50) y comprensión de =CONTARA vs =CONTAR."
    },
    {
      day: "Día 4: Fórmulas lógicas y condicionales",
      goal: "Que Excel tome decisiones por ti.",
      topics: "Módulo 4: =SI, =CONTAR.SI, =SUMAR.SI.",
      practice: "Asignar 'APROBADO' o 'RECHAZADO' automáticamente según edad o ingreso.",
      expected: "Poder crear semáforos lógicos en bases de datos."
    },
    {
      day: "Día 5: Texto y limpieza de datos",
      goal: "Arreglar desastres de otros usuarios.",
      topics: "Módulo 5 y 7: ESPACIOS, MAYUSC, CONCATENAR, Texto en Columnas.",
      practice: "Tomar una base de datos mal capturada y dejar todos los nombres unificados, sin espacios extra y sin duplicados.",
      expected: "Base de datos prístina lista para análisis."
    },
    {
      day: "Día 6: BUSCARV, BUSCARX y cruces",
      goal: "Vincular información de diferentes archivos.",
      topics: "Módulo 6: El poder de buscar datos únicos.",
      practice: "Tener dos tablas separadas y cruzarlas usando un ID o CURP para traer direcciones a la base principal.",
      expected: "Dominio de BUSCARV con el parámetro FALSO para coincidencias exactas."
    },
    {
      day: "Día 7: Caso práctico final de oficina",
      goal: "Simular un día intenso de trabajo administrativo.",
      topics: "Módulo 9 y 10: Integración total.",
      practice: "Recibes una base sucia, la limpias, cruzas datos faltantes con BUSCARV, aplicas un =SI para determinar estatus, y calculas el resumen financiero con =SUMAR.SI.",
      expected: "Flujo de trabajo completo, rápido y sin errores."
    }
  ]
};
