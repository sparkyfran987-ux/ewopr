export type Noticia = {
  id: number;
  titulo: string;
  fecha: string;
  descripcion: string;
  imagen: string;
  link: string;
};

export const noticiasEWO: Noticia[] = [
  {
    id: 1,
    titulo: "¿QUÉ BUSCA EDWIN GARCÍA EN EWO?",
    fecha: "EWO 2040",
    descripcion:
      "En 2014, David Estilo quiso destruir EWO y no pudo. Doce años después regresa como Edwin García, ahora junto a EWA y hablando de… ¿colaboración?",
    imagen: "/publicacion1.jpg",
    link: "https://www.facebook.com/share/v/18BiM62Cqn/",
  },
  {
    id: 2,
    titulo: "¡Los campeones listos para su PRIMERA GRAN PRUEBA!",
    fecha: "EWO 2040",
    descripcion:
      "Peak Puerto Rico, y su Alcalde, Hon. Jesús “Jerry” Márquez  Rodríguez  presentan #EWO2040, el próximo sábado en el Coliseo Ismael Benabe de Luquillo.",
    imagen: "/publicacion2.jpg",
    link: "https://www.facebook.com/share/v/1CzFNBLgpj/",
  },
  {
    id: 3,
    titulo: "𝐕𝐈𝐒𝐈𝐎́𝐍, 𝐂𝐀𝐌𝐁𝐈𝐎𝐒 𝐘 𝐍𝐔𝐄𝐕𝐎𝐒 𝐇𝐎𝐑𝐈𝐙𝐎𝐍𝐓𝐄𝐒…",
    fecha: "EWO 2040",
    descripcion:
      "Llegadas inesperadas, alianzas sorpresivas y movimientos silenciosos comienzan a transformar el panorama de la EWO.",
    imagen: "/publicacion3.jpg",
    link: "https://www.facebook.com/share/v/19Yh9iP4im/",
  },
  {
    id: 4,
    titulo: "De El Hombre de la Pegada David Estilo a El Unprofessional... Y vengo por tí, CAMPEÓN!",
    fecha: "EWO 2040 LA ANTESALA",
    descripcion:
      "¿Colaboración? ¿No viene solo? ¡Este sábado EXPLOTA el Coliseo de Luquillo!",
    imagen: "/publicacion4.jpg",
    link: "https://www.facebook.com/share/v/19eLY8X5g7/",
  },
  {
    id: 5,
    titulo: "LA GLORIA ENOCK EN EWO 2040",
    fecha: "EWO 2040",
    descripcion:
      "Este sábado 5 de septiembre en Luquillo, ENOCK se enfrenta a Pablo Salvaterra Díaz en una lucha histórica e impredecible durante el evento #2040. ¡LA GLORIA brillará en el ring!",
    imagen: "/publicacion5.jpg",
    link: "https://www.facebook.com/share/p/1KNT23kRys/",
  },
];
