/* ============================================================
   LEYENDDX — app.js
   Arma la página leyendo config.js. Normalmente no necesitas
   editar este archivo.
   ============================================================ */

(function () {
  "use strict";

  var C = window.CONFIG || CONFIG;

  /* ---------- iconos ---------- */
  var ICONOS = {
    twitch:'<svg viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>',
    youtube:'<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    tiktok:'<svg viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
    instagram:'<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>',
    x:'<svg viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z"/></svg>',
    discord:'<svg viewBox="0 0 24 24"><path d="M20.317 4.369a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.099.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
    kick:'<svg viewBox="0 0 24 24"><path d="M1.5 0h7.2v5.4h2.4V2.7h2.4V0h7.2v7.2h-2.4v2.4h-2.4v2.4h2.4v2.4h2.4V24h-7.2v-2.7h-2.4v-2.7H8.7V24H1.5z"/></svg>',
    facebook:'<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    spotify:'<svg viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
    paypal:'<svg viewBox="0 0 24 24"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201H8.34c-.024 0-.052.024-.056.05l-1.187 7.527h2.998c.459 0 .85-.334.922-.788l.038-.207.72-4.57.048-.252c.07-.454.462-.788.921-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.667-4.94z"/></svg>',
    kofi:'<svg viewBox="0 0 24 24"><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.05c2.438-.426 2.683-2.566 2.658-3.734 4.352.245 7.422-2.831 6.649-6.915zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/></svg>',
    correo:'<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    compras:'<svg viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.2 14.6h9.5c.75 0 1.4-.41 1.74-1.03l3.24-5.88A.85.85 0 0 0 20.93 6.4H6.2l-.83-1.8H2v1.8h2.2l3.6 7.58-1.35 2.44c-.66 1.2.2 2.68 1.57 2.68H19v-1.8H8.02a.22.22 0 0 1-.2-.33l.9-1.62z"/></svg>',
    enlace:'<svg viewBox="0 0 24 24"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM5 5h5V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2v5H5V5z"/></svg>'
  };

  var DOMINIOS = [
    ["twitch.tv","twitch"], ["youtube.","youtube"], ["youtu.be","youtube"],
    ["tiktok.","tiktok"], ["instagram.","instagram"], ["twitter.com","x"], ["x.com","x"],
    ["discord.","discord"], ["kick.com","kick"], ["facebook.","facebook"],
    ["spotify.","spotify"], ["paypal.","paypal"], ["ko-fi.","kofi"], ["mailto:","correo"],
    ["amazon","compras"], ["aliexpress","compras"], ["mercadolibre","compras"], ["ebay.","compras"]
  ];

  function icono(nombre, url) {
    if (nombre && ICONOS[nombre]) return ICONOS[nombre];
    var u = (url || "").toLowerCase();
    for (var i = 0; i < DOMINIOS.length; i++) {
      if (u.indexOf(DOMINIOS[i][0]) !== -1) return ICONOS[DOMINIOS[i][1]];
    }
    return ICONOS.enlace;
  }

  /* ---------- utilidades ---------- */
  function el(tag, clase, texto) {
    var n = document.createElement(tag);
    if (clase) n.className = clase;
    if (texto !== undefined) n.textContent = texto;
    return n;
  }

  function externo(a, url) {
    a.href = url;
    if (url && url.indexOf("mailto:") !== 0) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  }

  /* ---------- colores ---------- */
  function pintarColores() {
    var c = C.colores || {};
    var mapa = {
      acento: "--acento", acentoOscuro: "--acento-oscuro", azul: "--azul", azulClaro: "--azul-claro",
      fondo: "--fondo", fondoCentro: "--fondo-centro", panel: "--panel",
      texto: "--texto", textoSuave: "--texto-suave"
    };
    for (var k in mapa) {
      if (c[k]) document.documentElement.style.setProperty(mapa[k], c[k]);
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && c.fondo) meta.setAttribute("content", c.fondo);
  }

  /* ---------- cabecera / identidad ---------- */
  function pintarIdentidad() {
    var cont = document.getElementById("identidad");
    var m = C.marca || {};

    if (m.logo) {
      var logo = el("img", "marca__logo");
      logo.src = m.logo;
      logo.alt = m.nombre || "Logo";
      cont.appendChild(logo);
    }

    if (m.wordmark) {
      var wm = el("img", "marca__wordmark");
      wm.src = m.wordmark;
      wm.alt = m.nombre || "";
      wm.onerror = function () { wm.remove(); };
      cont.appendChild(wm);
    } else if (m.nombre) {
      var h1 = el("h1", "marca__nombre");
      if (m.nombreAcento) {
        var partes = m.nombre.split(m.nombreAcento);
        h1.appendChild(document.createTextNode(partes[0]));
        h1.appendChild(el("em", null, m.nombreAcento));
        h1.appendChild(document.createTextNode(partes.slice(1).join(m.nombreAcento)));
      } else {
        h1.textContent = m.nombre;
      }
      cont.appendChild(h1);
    }

    if (m.lema) cont.appendChild(el("p", "marca__lema", m.lema));

    /* insignia */
    var e = C.insignia || C.estado;
    if (e && e.modo) {
      var t = (e.textos && e.textos[e.modo]) || { chico: "", grande: e.modo };
      var caja = document.createElement(e.enlace ? "a" : "div");
      caja.className = "insignia insignia--" + e.modo;
      if (e.enlace) externo(caja, e.enlace);
      caja.appendChild(el("span", "insignia__punto"));
      var txt = el("span", "insignia__txt");
      if (t.chico) txt.appendChild(el("span", "insignia__chico", t.chico));
      txt.appendChild(el("span", "insignia__grande", t.grande));
      caja.appendChild(txt);
      cont.appendChild(caja);
    }

    /* botón principal */
    var d = C.destacado;
    if (d && d.url) {
      var a = el("a", "destacado");
      externo(a, d.url);
      var ic = el("span", "destacado__icono");
      ic.innerHTML = icono(d.icono, d.url);
      a.appendChild(ic);
      var w = el("span", "destacado__txt");
      w.appendChild(el("span", "destacado__texto", d.texto || "Ver más"));
      if (d.nota) w.appendChild(el("span", "destacado__nota", d.nota));
      a.appendChild(w);
      cont.appendChild(a);
    }
  }

  /* ---------- encabezado de sección ---------- */
  function encabezado(sec) {
    if (sec.banner) {
      var caja = el("div", "encabezado");
      var img = el("img");
      img.src = sec.banner;
      img.alt = sec.titulo || "";
      img.onerror = function () { caja.replaceWith(encabezadoCSS(sec.titulo)); };
      caja.appendChild(img);
      return caja;
    }
    return encabezadoCSS(sec.titulo);
  }

  function encabezadoCSS(titulo) {
    var caja = el("div", "encabezado encabezado--css");
    caja.appendChild(el("span", null, titulo || ""));
    return caja;
  }

  /* ---------- tipos de sección ---------- */
  function bloqueEnlaces(items) {
    var lista = el("div", "lista");
    (items || []).forEach(function (it) {
      var a = el("a", "enlace");
      externo(a, it.url);
      var ic = el("span", "enlace__icono");
      ic.innerHTML = icono(it.icono, it.url);
      a.appendChild(ic);
      var txt = el("span", "enlace__txt");
      txt.appendChild(el("span", "enlace__texto", it.texto || ""));
      if (it.detalle) txt.appendChild(el("span", "enlace__detalle", it.detalle));
      a.appendChild(txt);
      a.appendChild(el("span", "enlace__flecha"));
      lista.appendChild(a);
    });
    return lista;
  }

  function bloqueHorarios(sec) {
    var frag = document.createDocumentFragment();
    var caja = el("div", "horarios");
    var hoy = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][new Date().getDay()];

    (sec.items || []).forEach(function (h) {
      var fila = el("div", "horario" + (h.hora ? "" : " horario--libre") + (h.dia === hoy ? " horario--hoy" : ""));
      var dia = el("span", "horario__dia", h.dia || "");
      if (h.dia === hoy) dia.appendChild(el("span", "horario__hoy", "hoy"));
      fila.appendChild(dia);
      fila.appendChild(el("span", "horario__hora", h.hora || "—"));
      fila.appendChild(el("span", "horario__nota", h.nota || ""));
      caja.appendChild(fila);
    });
    frag.appendChild(caja);
    if (sec.zona) frag.appendChild(el("p", "zona", sec.zona));
    return frag;
  }

  function bloqueTexto(sec) {
    var caja = el("div", "texto");
    var parrafos = Array.isArray(sec.contenido) ? sec.contenido : [sec.contenido];
    parrafos.forEach(function (p) { if (p) caja.appendChild(el("p", null, p)); });
    return caja;
  }

  function bloqueGaleria(sec) {
    var grid = el("div", "galeria");
    (sec.items || []).forEach(function (it, i) {
      var b = el("button", "tarjeta");
      b.type = "button";
      b.setAttribute("aria-label", "Abrir: " + (it.titulo || "elemento " + (i + 1)));

      var src = it.miniatura || (it.tipo === "youtube" ? "https://img.youtube.com/vi/" + it.id + "/hqdefault.jpg" : it.src);
      if (src) {
        var img = el("img");
        img.src = src;
        img.alt = it.titulo || "";
        img.loading = "lazy";
        img.onerror = function () { img.remove(); };
        b.appendChild(img);
      }
      if (it.tipo !== "imagen") b.appendChild(el("span", "tarjeta__play"));
      if (it.titulo) b.appendChild(el("span", "tarjeta__pie", it.titulo));

      b.addEventListener("click", function () { abrirVisor(it); });
      grid.appendChild(b);
    });
    return grid;
  }

  /* ---------- visor ---------- */
  var visor = document.getElementById("visor");
  var visorCaja = document.getElementById("visorCaja");
  var visorTitulo = document.getElementById("visorTitulo");
  var ultimoFoco = null;

  function abrirVisor(it) {
    ultimoFoco = document.activeElement;
    visorCaja.innerHTML = "";
    var host = location.hostname || "localhost";

    if (it.tipo === "youtube") {
      visorCaja.innerHTML = '<iframe src="https://www.youtube.com/embed/' + it.id +
        '?autoplay=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen title="' + (it.titulo || "Video") + '"></iframe>';
    } else if (it.tipo === "twitch") {
      visorCaja.innerHTML = '<iframe src="https://player.twitch.tv/?video=' + it.id +
        '&parent=' + host + '&autoplay=true" allowfullscreen title="' + (it.titulo || "Video") + '"></iframe>';
    } else {
      var img = el("img");
      img.src = it.src;
      img.alt = it.titulo || "";
      visorCaja.appendChild(img);
    }

    visorTitulo.textContent = it.titulo || "";
    visor.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("visorCerrar").focus();
  }

  function cerrarVisor() {
    visor.hidden = true;
    visorCaja.innerHTML = "";
    document.body.style.overflow = "";
    if (ultimoFoco) ultimoFoco.focus();
  }

  document.getElementById("visorCerrar").addEventListener("click", cerrarVisor);
  visor.addEventListener("click", function (ev) { if (ev.target === visor) cerrarVisor(); });
  document.addEventListener("keydown", function (ev) { if (ev.key === "Escape" && !visor.hidden) cerrarVisor(); });

  /* ---------- secciones ---------- */
  function pintarSecciones() {
    var main = document.getElementById("contenido");

    (C.secciones || []).forEach(function (sec) {
      var s = el("section", "seccion");
      if (sec.id) s.id = sec.id;
      s.setAttribute("aria-label", sec.titulo || "");
      s.appendChild(encabezado(sec));
      if (sec.nota) s.appendChild(el("p", "nota", sec.nota));

      if (sec.tipo === "enlaces") s.appendChild(bloqueEnlaces(sec.items));
      else if (sec.tipo === "horarios") s.appendChild(bloqueHorarios(sec));
      else if (sec.tipo === "texto") s.appendChild(bloqueTexto(sec));
      else if (sec.tipo === "galeria") s.appendChild(bloqueGaleria(sec));

      main.appendChild(s);
    });
  }

  /* ---------- metadatos ---------- */
  function pintarMeta() {
    var m = C.marca || {};
    if (m.nombre) document.title = m.nombre;
    if (m.descripcion) {
      var d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute("content", m.descripcion);
      var od = document.querySelector('meta[property="og:description"]');
      if (od) od.setAttribute("content", m.descripcion);
    }
    var ot = document.querySelector('meta[property="og:title"]');
    if (ot && m.nombre) ot.setAttribute("content", m.nombre);
    if (m.logo) {
      var fav = document.querySelector('link[rel="icon"]');
      if (fav) fav.href = m.logo;
    }
  }

  /* ---------- arranque ---------- */
  pintarColores();
  pintarMeta();
  pintarIdentidad();
  pintarSecciones();
  document.getElementById("pie").textContent = C.pie || "";
})();
