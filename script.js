// Coordenadas de Villa Mercedes, San Luis
const map = L.map('map').setView([-33.6756, -65.4672], 14);

// Capa de mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Lugares importantes (¡cargá los tuyos!)
const recuerdos = [
  {
    coords: [-33.675648747891906, -65.45841222930096],
    titulo: "📍 Plaza del hogar escuela 💖",
    mensaje: "Donde nos hicimos novios(20/12/2023)"
  },
  {
    coords: [-33.691809054633985, -65.4679935299973],
    titulo: "Dia de la tormenta",
    mensaje: "Un dia feo pero muy lindo porque nos unio mas(14/12/2023)"
  },
  {
    coords: [-33.67455123697044, -65.46217822564486],
    titulo: "nuestos primeros mates ",
    mensaje: "Primera Juntada (07/12/2023)"
  },
  {
    coords: [-33.673841461770536, -65.44901252968563],
    titulo: "Primera Noche de Serie",
    mensaje: "vimos Psycho pass juntos (07/12/2023)"
  },{
    coords: [-33.66513728590114, -65.46662327705691],
    titulo: "Viaje a San Luis",
    mensaje: "primer viaje (17/01/2024)"
  },
  {
    coords: [-33.66513728590114, -65.46662327705691],
    titulo: "Viaje a San Luis",
    mensaje: "primer viaje (17/01/2024)"
  },{
    coords:[-33.66241564617342, -65.46323262185564],
    titulo: "Noche de Cine",
    mensaje: "primera salida al cine(28/09/24)"

  },{
    coords:[-33.68218183620443, -65.46547930033653],
    titulo: "Feria del libro",
    mensaje:"Donde te hicieron tu dibujo de batman :D (20/11/2024)"
  },{
    coords:[-33.30610942270052, -66.32335531568692],
    titulo: "Shopping de San Luis",
    mensaje:"Donde comimos Milanesas juntos(17/01/2024)"
  },
  {
    coords:[-33.30610942270052, -66.32335531568692],
    titulo: "Dia Tragico en el Volcan",
    mensaje:"No volvemos a visitar nunca este lugar jaja"
  },{
    coords:[-32.63787832712566, -64.95061646338009],
    titulo: "Chorro de San Ignacio",
    mensaje:"Primer viaje con mi familia"
  },
  {
    coords:[-32.55205916807553, -64.95532990160675],
    titulo: "Dique picu yaco",
    mensaje:"Lindo lugar, ttenemos una de las fotos que mas me gustan"
  },{
    coords:[-32.439748005085036, -65.0046118174271],
    titulo: "Los Molles",
    mensaje:"nos sacamos una linda foto aqui :3"
  },{
    coords:[-33.68296906821657, -65.46500260783336],
    titulo: "14 de febrero",
    mensaje:"nuestro primer dia de San valentin <3 (14/02/2024)"
  },{
    coords:[-33.68186269018336, -65.46381889639187],
    titulo: "Primer Aniversario",
    mensaje:"fuimos a Astor Cafe por Primera vez(20/12/2024)"
  }, {
    coords:[-33.7011292243549, -65.47749624677996],
    titulo: "Cumple de Bren",
    mensaje:"comimos muy rico y fuimos a Social (05/05/2024)"
  },{
    coords:[-33.692843660715376, -65.44896044229398],
    titulo: "Recepcion de Bren",
    mensaje:"Una noche muy especial para Bren (06/12/2024)"
  },{
    coords:[-33.6929756882025, -65.49562821214852],
    titulo: "Acto de Colaccion",
    mensaje:"Dia donde Bren termina la Secundaria(10/12/2024)"
  },{
    coords:[-33.68571326762129, -65.49848946715107],
    titulo: "Dia en Bici",
    mensaje:"Salimos a andar en Bici (10/12/2024)"
  },{
    coords:[-33.68868146608323, -65.50477214998662],
    titulo: "Cumple de agus",
    mensaje:"comimos hambuerguesas y bren conocio a mi familia (05/01/2024)"
  },{
    coords:[-33.30618630042597, -66.29689301519656],
    titulo: "Mirador",
    mensaje:"Vimos la ciudad de San luis entera"
  },{
    coords:[-33.303810722049874, -66.33423809031314],
    titulo: "Lbreria en San Luis",
    mensaje:"Primera libreria juntos jijiji"
  },
  {
    coords:[-33.679687255583374, -65.46352304543153],
    titulo: "Helado :D",
    mensaje:"Nuestro grido Favorito"
  },{
    coords:[-33.66750611563889, -65.46822439916154],
    titulo: "Escuela Tecnica N°18",
    mensaje:"Secundaria de Bren"
  },{
    coords:[-33.67732622261334, -65.46212561156736],
    titulo: "Colegio Nacional",
    mensaje:"Secundaria de Agus"
  },
  
  
  
  
  
  
  
];

// Agregar marcadores
recuerdos.forEach(recuerdo => {
  L.marker(recuerdo.coords)
    .addTo(map)
    .bindPopup(`<b>${recuerdo.titulo}</b><br>${recuerdo.mensaje}`);
});
