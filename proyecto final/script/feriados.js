const FERIADOS = [
      {
            motivo: "Año Nuevo",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo",
            dia: 1,
            mes: 0,
            anio: 2020,
      },
      {
            motivo: "Carnaval",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Carnaval",
            dia: 24,
            mes: 1,
            anio: 2020,
      },
      {
            motivo: "Carnaval",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Carnaval",
            dia: 25,
            mes: 1,
            anio: 2020,
      },
      {
            motivo: "Feriado Puente Turístico",
            tipo: "puente",
            info: "https://es.wikipedia.org/wiki/Puente_festivo",
            dia: 23,
            mes: 2,
            anio: 2020,
      },
      {
            motivo: "Día Nacional de la Memoria por la Verdad y la Justicia",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_Nacional_de_la_Memoria_por_la_Verdad_y_la_Justicia",
            dia: 24,
            mes: 2,
            anio: 2020,
      },
      {
            motivo: "Día del Veterano y de los Caídos en la Guerra de Malvinas",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_del_Veterano_y_de_los_Ca%C3%ADdos_en_la_Guerra_de_Malvinas",
            dia: 31,
            mes: 2,
            anio: 2020,
      },
      {
            motivo: "Viernes Santo Festividad Cristiana",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Viernes_Santo",
            dia: 10,
            mes: 3,
            anio: 2020,
      },
      {
            motivo: "Día del Trabajador",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_Internacional_de_los_Trabajadores",
            dia: 1,
            mes: 4,
            anio: 2020,
      },
      {
            motivo: "Día de la Revolución de Mayo",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_de_Mayo",
            dia: 25,
            mes: 4,
            anio: 2020,
      },
      {
            motivo: "Paso a la Inmortalidad del Gral. Don Martín Güemes",
            tipo: "trasladable",
            original: "17-06",
            info: "https://es.wikipedia.org/wiki/Mart%C3%ADn_Miguel_de_G%C3%BCemes",
            dia: 15,
            mes: 5,
            anio: 2020,
      },
      {
            motivo: "Paso a la Inmortalidad del General Manuel Belgrano",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Bandera_(Argentina)",
            dia: 20,
            mes: 5,
            anio: 2020,
      },
      {
            motivo: "Día de la Independencia",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_independencia_de_la_Argentina",
            dia: 9,
            mes: 6,
            anio: 2020,
      },
      {
            motivo: "Feriado Puente Turístico",
            tipo: "puente",
            info: "https://es.wikipedia.org/wiki/Puente_festivo",
            dia: 10,
            mes: 6,
            anio: 2020,
      },
      {
            motivo: "Paso a la Inmortalidad del General José de San Martín",
            tipo: "trasladable",
            original: "17-08",
            info: "https://es.wikipedia.org/wiki/Jos%C3%A9_de_San_Mart%C3%ADn",
            dia: 17,
            mes: 7,
            anio: 2020,
      },
      {
            motivo: "Día del Respeto a la Diversidad Cultural",
            tipo: "trasladable",
            original: "12-10",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_del_Respeto_a_la_Diversidad_Cultural_(Argentina)",
            dia: 12,
            mes: 9,
            anio: 2020,
      },
      {
            motivo: "Día de la Soberanía Nacional",
            tipo: "trasladable",
            original: "20-11",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Soberan%C3%ADa_Nacional",
            dia: 23,
            mes: 10,
            anio: 2020,
      },
      {
            motivo: "Feriado Puente Turístico",
            tipo: "puente",
            info: "https://es.wikipedia.org/wiki/Puente_festivo",
            dia: 7,
            mes: 11,
            anio: 2020,
      },
      {
            motivo: "Inmaculada Concepción de María",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Inmaculada_Concepci%C3%B3n",
            dia: 8,
            mes: 11,
            anio: 2020,
      },
      {
            motivo: "Navidad",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Navidad",
            dia: 25,
            mes: 11,
            anio: 2020,
      },
      {
            motivo: "Año Nuevo",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo",
            dia: 1,
            mes: 0,
            anio: 2021,
      },
      {
            motivo: "Carnaval",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Carnaval",
            dia: 15,
            mes: 1,
            anio: 2021,
      },
      {
            motivo: "Carnaval",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Carnaval",
            dia: 16,
            mes: 1,
            anio: 2021,
      },
      {
            motivo: "Día Nacional de la Memoria por la Verdad y la Justicia",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_Nacional_de_la_Memoria_por_la_Verdad_y_la_Justicia",
            dia: 24,
            mes: 2,
            anio: 2021,
      },
      {
            motivo: "Día del Veterano y de los Caídos en la Guerra de Malvinas",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_del_Veterano_y_de_los_Ca%C3%ADdos_en_la_Guerra_de_Malvinas",
            dia: 2,
            mes: 3,
            anio: 2021,
      },
      {
            motivo: "Viernes Santo Festividad Cristiana",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Viernes_Santo",
            dia: 2,
            mes: 3,
            anio: 2021,
      },
      {
            motivo: "Día del Trabajador",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_Internacional_de_los_Trabajadores",
            dia: 1,
            mes: 4,
            anio: 2021,
      },
      {
            motivo: "Feriado Puente Turístico",
            tipo: "puente",
            info: "https://es.wikipedia.org/wiki/Puente_festivo",
            dia: 24,
            mes: 4,
            anio: 2021,
      },
      {
            motivo: "Día de la Revolución de Mayo",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_de_Mayo",
            dia: 25,
            mes: 4,
            anio: 2021,
      },
      {
            motivo: "Paso a la Inmortalidad del General Manuel Belgrano",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Bandera_(Argentina)",
            dia: 20,
            mes: 5,
            anio: 2021,
      },
      {
            motivo: "Paso a la Inmortalidad del Gral. Don Martín Güemes",
            tipo: "trasladable",
            original: "17-06",
            info: "https://es.wikipedia.org/wiki/Mart%C3%ADn_Miguel_de_G%C3%BCemes",
            dia: 21,
            mes: 5,
            anio: 2021,
      },
      {
            motivo: "Día de la Independencia",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_independencia_de_la_Argentina",
            dia: 9,
            mes: 6,
            anio: 2021,
      },
      {
            motivo: "Paso a la Inmortalidad del General José de San Martín",
            tipo: "trasladable",
            original: "17-08",
            info: "https://es.wikipedia.org/wiki/Jos%C3%A9_de_San_Mart%C3%ADn",
            dia: 16,
            mes: 7,
            anio: 2021,
      },
      {
            motivo: "Feriado Puente Turístico",
            tipo: "puente",
            info: "https://es.wikipedia.org/wiki/Puente_festivo",
            dia: 8,
            mes: 9,
            anio: 2021,
      },
      {
            motivo: "Día del Respeto a la Diversidad Cultural",
            tipo: "trasladable",
            original: "12-10",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_del_Respeto_a_la_Diversidad_Cultural_(Argentina)",
            dia: 11,
            mes: 9,
            anio: 2021,
      },
      {
            motivo: "Día de la Soberanía Nacional",
            tipo: "trasladable",
            original: "20-11",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Soberan%C3%ADa_Nacional",
            dia: 20,
            mes: 10,
            anio: 2021,
      },
      {
            motivo: "Feriado Puente Turístico",
            tipo: "puente",
            info: "https://es.wikipedia.org/wiki/Puente_festivo",
            dia: 22,
            mes: 10,
            anio: 2021,
      },
      {
            motivo: "Inmaculada Concepción de María",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Inmaculada_Concepci%C3%B3n",
            dia: 8,
            mes: 11,
            anio: 2021,
      },
      {
            motivo: "Navidad",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Navidad",
            dia: 25,
            mes: 11,
            anio: 2021,
      },
      {
            motivo: "Año Nuevo",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/A%C3%B1o_Nuevo",
            dia: 1,
            mes: 0,
            anio: 2022,
      },
      {
            motivo: "Carnaval",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Carnaval",
            dia: 28,
            mes: 1,
            anio: 2022,
      },
      {
            motivo: "Carnaval",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Carnaval",
            dia: 1,
            mes: 2,
            anio: 2022,
      },
      {
            motivo: "Día Nacional de la Memoria por la Verdad y la Justicia",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_Nacional_de_la_Memoria_por_la_Verdad_y_la_Justicia",
            dia: 24,
            mes: 2,
            anio: 2022,
      },
      {
            motivo: "Día del Veterano y de los Caídos en la Guerra de Malvinas",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_del_Veterano_y_de_los_Ca%C3%ADdos_en_la_Guerra_de_Malvinas",
            dia: 2,
            mes: 3,
            anio: 2022,
      },
      {
            motivo: "Viernes Santo Festividad Cristiana",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Viernes_Santo",
            dia: 15,
            mes: 3,
            anio: 2022,
      },
      {
            motivo: "Día del Trabajador",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_Internacional_de_los_Trabajadores",
            dia: 1,
            mes: 4,
            anio: 2022,
      },
      {
            motivo: "CENSO",
            tipo: "inamovible",
            info: " ",
            dia: 18,
            mes: 4,
            anio: 2022,
      },
      {
            motivo: "Día de la Revolución de Mayo",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Revoluci%C3%B3n_de_Mayo",
            dia: 25,
            mes: 4,
            anio: 2022,
      },
      {
            motivo: "Paso a la Inmortalidad del Gral. Don Martín Güemes",
            tipo: "trasladable",
            original: "17-06",
            info: "https://es.wikipedia.org/wiki/Mart%C3%ADn_Miguel_de_G%C3%BCemes",
            dia: 17,
            mes: 5,
            anio: 2022,
      },
      {
            motivo: "Paso a la Inmortalidad del General Manuel Belgrano",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Bandera_(Argentina)",
            dia: 20,
            mes: 5,
            anio: 2022,
      },
      {
            motivo: "Día de la Independencia",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Declaraci%C3%B3n_de_independencia_de_la_Argentina",
            dia: 9,
            mes: 6,
            anio: 2022,
      },
      {
            motivo: "Paso a la Inmortalidad del General José de San Martín",
            tipo: "trasladable",
            original: "17-08",
            info: "https://es.wikipedia.org/wiki/Jos%C3%A9_de_San_Mart%C3%ADn",
            dia: 15,
            mes: 7,
            anio: 2022,
      },
      {
            motivo: "Feriado Puente Turístico",
            tipo: "puente",
            info: "https://es.wikipedia.org/wiki/Puente_festivo",
            dia: 7,
            mes: 9,
            anio: 2022,
      },
      {
            motivo: "Día del Respeto a la Diversidad Cultural",
            tipo: "trasladable",
            original: "12-10",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_del_Respeto_a_la_Diversidad_Cultural_(Argentina)",
            dia: 10,
            mes: 9,
            anio: 2022,
      },
      {
            motivo: "Día de la Soberanía Nacional",
            tipo: "trasladable",
            original: "20-11",
            info: "https://es.wikipedia.org/wiki/D%C3%ADa_de_la_Soberan%C3%ADa_Nacional",
            dia: 20,
            mes: 10,
            anio: 2022,
      },
      {
            motivo: "Feriado Puente Turístico",
            tipo: "puente",
            info: "https://es.wikipedia.org/wiki/Puente_festivo",
            dia: 21,
            mes: 10,
            anio: 2022,
      },
      {
            motivo: "Inmaculada Concepción de María",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Inmaculada_Concepci%C3%B3n",
            dia: 8,
            mes: 11,
            anio: 2022,
      },
      {
            motivo: "Feriado Puente Turístico",
            tipo: "puente",
            info: "https://es.wikipedia.org/wiki/Puente_festivo",
            dia: 9,
            mes: 11,
            anio: 2022,
      },
      {
            motivo: "Navidad",
            tipo: "inamovible",
            info: "https://es.wikipedia.org/wiki/Navidad",
            dia: 25,
            mes: 11,
            anio: 2022,
      },
];
