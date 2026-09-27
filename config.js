/* ============================================================
   CONFIG.JS  —  ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR
   ------------------------------------------------------------
   Cambia textos, links, colores y secciones aquí.
   No hace falta tocar el HTML ni el CSS.
   Guarda, recarga el navegador y listo.
   ============================================================ */

const CONFIG = {

  /* ---------- 1. LA MARCA ---------- */
  marca: {
    nombre: "ME DIJO UN GEEK",
    nombreAcento: "UN",                    // esta palabra sale en naranja, como en tu portada
    logo: "assets/img/logo.png",
    wordmark: "",                          // si algún día tienes un PNG con el nombre, ponlo aquí
    lema: "Reseñas de model kits, figuras y todo lo geek.",
    descripcion: "Todas nuestras redes, los productos que reseñamos y cómo apoyarnos."
  },

  /* ---------- 2. INSIGNIA DE ARRIBA ----------
     Se ve como una burbuja con dos líneas de texto.
     Cambia "modo" al que quieras usar de la lista de textos. */
  insignia: {
    modo: "nuevo",
    enlace: "https://www.youtube.com/channel/UCTbBuveaDtAB_FesLjxeOCA",
    textos: {
      nuevo:  { chico: "Mira el",   grande: "ÚLTIMO VIDEO" },
      envivo: { chico: "Estamos",   grande: "EN VIVO" },
      aviso:  { chico: "Novedad",   grande: "NUEVA RESEÑA" }
    }
  },

  /* ---------- 3. BOTÓN PRINCIPAL ---------- */
  destacado: {
    texto: "Suscríbete en YouTube",
    nota: "Reseñas nuevas cada semana",
    url: "https://www.youtube.com/channel/UCTbBuveaDtAB_FesLjxeOCA",
    icono: "youtube"
  },

  /* ---------- 4. COLORES ----------
     Sacados del logo y de la portada del canal. */
  colores: {
    acento:       "#FF9419",   // naranja de la portada
    acentoOscuro: "#F15A24",   // naranja del logo
    azul:         "#0071BC",   // azul de la marca
    azulClaro:    "#4FB0EC",
    fondo:        "#04324F",   // orillas del degradado
    fondoCentro:  "#0A66A8",   // centro del degradado
    panel:        "#0A4675",   // tarjetas y botones
    texto:        "#FFFFFF",
    textoSuave:   "#A9CFEA"
  },

  /* ---------- 5. SECCIONES ----------
     El orden de esta lista = el orden en la página.
     Para ocultar una, bórrala.
     tipos: "enlaces" | "galeria" | "texto" | "horarios"

     banner: "" dibuja el encabezado con CSS usando tus colores.
     Si algún día haces banners PNG, ponlos ahí.
  */
  secciones: [

    {
      id: "redes",
      tipo: "enlaces",
      titulo: "Redes",
      banner: "",
      items: [
        { texto: "YouTube",         detalle: "El canal principal",      url: "https://www.youtube.com/channel/UCTbBuveaDtAB_FesLjxeOCA" },
        { texto: "TikTok",          detalle: "Clips y unboxings",       url: "https://www.tiktok.com/@medijoungeek" },
        { texto: "Instagram",       detalle: "Fotos y avances",         url: "https://www.instagram.com/me_dijo_un_geek/" },
        { texto: "Facebook",        detalle: "La página del canal",     url: "https://www.facebook.com/MeDijounGeek" },
        { texto: "Facebook Store",  detalle: "La tienda",               url: "https://www.facebook.com/MeDijounGeekStore" }
      ]
    },

    {
      id: "amazon",
      tipo: "enlaces",
      titulo: "En Amazon",
      banner: "",
      nota: "¿Piensas comprar más de un producto? Descuida: basta con que entres desde uno de los enlaces.",
      items: [
        /* Cambia "Producto 1" por el nombre real de cada kit. */
        { texto: "Producto 1", detalle: "Ver en Amazon", url: "https://link.amazon/B099OsCuU", icono: "compras" },
        { texto: "Producto 2", detalle: "Ver en Amazon", url: "https://link.amazon/B0ce0ZU81", icono: "compras" },
        { texto: "Producto 3", detalle: "Ver en Amazon", url: "https://link.amazon/B08OY2GML", icono: "compras" }
      ]
    },

    {
      id: "aliexpress",
      tipo: "enlaces",
      titulo: "En AliExpress",
      banner: "",
      nota: "¿Piensas comprar más de un producto? Descuida: basta con que entres desde uno de los enlaces.",
      items: [
        { texto: "Producto 1", detalle: "Ver en AliExpress", url: "https://s.click.aliexpress.com/e/_c4DeyGKJ", icono: "compras" },
        { texto: "Producto 2", detalle: "Ver en AliExpress", url: "https://s.click.aliexpress.com/e/_c423m9zt", icono: "compras" },
        { texto: "Producto 3", detalle: "Ver en AliExpress", url: "https://s.click.aliexpress.com/e/_c3BEcRK7", icono: "compras" },
        { texto: "Producto 4", detalle: "Ver en AliExpress", url: "https://s.click.aliexpress.com/e/_c34k0r8n", icono: "compras" },
        { texto: "Producto 5", detalle: "Ver en AliExpress", url: "https://s.click.aliexpress.com/e/_c329FFdt", icono: "compras" },
        { texto: "Producto 6", detalle: "Ver en AliExpress", url: "https://s.click.aliexpress.com/e/_c4T7zgEP", icono: "compras" },
        { texto: "Producto 7", detalle: "Ver en AliExpress", url: "https://s.click.aliexpress.com/e/_c3KC8D49", icono: "compras" },
        { texto: "Producto 8", detalle: "Ver en AliExpress", url: "https://s.click.aliexpress.com/e/_c3qbBAQf", icono: "compras" }
      ]
    },

    {
      id: "videos",
      tipo: "galeria",
      titulo: "Videos",
      banner: "",
      items: [
        /* Para agregar un video: abre el video en YouTube, copia lo que va
           después de "v=" en la barra de direcciones y pégalo en "id".
           Ejemplo: youtube.com/watch?v=ABC123xyz  ->  id: "ABC123xyz"        */
        { tipo: "youtube", id: "c0a4dsUF5Ok", titulo: "Model kits Bootleg u Original" },
        { tipo: "youtube", id: "CAMBIA_ESTE_ID", titulo: "Unboxing" },
        { tipo: "imagen",  src: "assets/img/portada.png", titulo: "Me Dijo un Geek" }
      ]
    },

    {
      id: "donaciones",
      tipo: "enlaces",
      titulo: "Donaciones",
      banner: "",
      nota: "Cualquier cantidad será agradecida por igual.",
      items: [
        { texto: "PayPal", detalle: "Apoya al canal", url: "https://www.paypal.com/paypalme/MeDijounGeek", icono: "paypal" }
      ]
    },

    {
      id: "info",
      tipo: "texto",
      titulo: "Información",
      banner: "",
      contenido: [
        "Me Dijo un Geek es un canal de reseñas de model kits, figuras y coleccionables. Aquí encuentras todos los canales, los productos que hemos reseñado y la forma de apoyar el proyecto.",
        "Los enlaces de compra son de afiliado: a ti te cuesta lo mismo y al canal le ayuda a seguir haciendo reseñas."
      ]
    }

  ],

  /* ---------- 6. PIE DE PÁGINA ---------- */
  pie: "© 2026 Me Dijo un Geek"
};
