# Me Dijo un Geek — página de links

Página de una sola pantalla, tipo Linktree, para publicar en GitHub Pages.
Sin frameworks, sin build, sin dependencias: HTML, CSS y un archivo JS.

## Archivos

```
index.html               La página. Casi nunca hay que tocarla.
config.js                ← AQUÍ SE EDITA TODO: textos, links, colores, secciones.
assets/css/estilos.css   Formas, tamaños y espaciado.
assets/js/app.js         Arma la página con lo que hay en config.js.
assets/img/              Logo y portada.
```

## Lo que falta por llenar

Dos cosas quedaron como marcador de posición porque no venían en el PDF:

1. **Los nombres de los productos.** En `config.js`, en las secciones `amazon` y `aliexpress`, cada link dice `texto: "Producto 1"`. Cámbialo por el nombre real del kit. Los enlaces ya están correctos y completos.
2. **Los videos.** En la sección `videos`, los `id: "CAMBIA_ESTE_ID"`. Abre el video en YouTube, copia lo que va después de `v=` en la barra de direcciones y pégalo ahí. Ejemplo: de `youtube.com/watch?v=ABC123xyz` se copia `ABC123xyz`.

## Publicarla en GitHub Pages

1. Crea un repo nuevo y sube estos archivos tal cual, sin carpeta extra: `index.html` tiene que quedar en la raíz.
2. En el repo, **Settings → Pages**.
3. En *Source*, **Deploy from a branch**, rama `main`, carpeta `/ (root)`. Guardar.
4. En uno o dos minutos queda en `https://TUUSUARIO.github.io/NOMBREDELREPO/`.

Para probarla antes de subirla, abre `index.html` con doble clic.

## Cómo editar

Todo vive en `config.js`. Guarda el archivo y recarga el navegador.

**Agregar un link:** copia una línea dentro de `items` y cambia texto, detalle y url.
El icono se detecta solo por el dominio (Amazon y AliExpress salen con carrito). Si quieres forzarlo, agrega `icono: "compras"`.
Disponibles: `youtube`, `tiktok`, `instagram`, `facebook`, `x`, `twitch`, `discord`, `kick`, `spotify`, `paypal`, `kofi`, `compras`, `correo`, `enlace`.

**La insignia de arriba:** en `insignia.modo` puedes poner `"nuevo"`, `"envivo"` o `"aviso"`. Cada uno tiene su texto en `insignia.textos`, y ahí puedes agregar los que quieras.

**El nombre:** `marca.nombreAcento` es la palabra que sale en naranja. Está en `"UN"` para que se lea igual que la portada del canal.

**Cambiar colores:** los hex de `colores` alimentan toda la página. Cambia `acento` y `azul` y cambia todo.

**Reordenar u ocultar secciones:** el orden del array `secciones` es el orden en pantalla. Para quitar una, bórrala.

**La nota bajo un encabezado:** el campo `nota` de cada sección. Ahí está el aviso de "basta con que entres desde uno de los enlaces".

**Banners:** si algún día hay banners PNG por sección, se ponen en `banner: "assets/img/loquesea.png"`. Con `banner: ""` la página dibuja la burbuja azul con la barra naranja, que es lo que está usando ahora.

## Detalles

- Responsiva: dos columnas en escritorio, una sola en celular.
- Respeta `prefers-reduced-motion`.
- Foco de teclado visible y enlace para saltar al contenido.
- Sin `localStorage`, sin cookies, sin analítica.
- Tipografías Archivo y Barlow desde Google Fonts.
