/* Caso que muestra cada HTML: lo declara la página con window.CASO antes de cargar los scripts */
const CASOS = {
  principal: {},
  'sin-operaciones': { vacio:true },
  'error-cargar': { errorCarga:true },
  'error-aprobar': { fallan:['aprobar', 'revocar'] },
  'error-rechazar': { fallan:['rechazar'] },
  'error-exportar': { fallan:['exportar'] },
  'escalabilidad-items': { varios:true },
};
const CFG = CASOS[window.CASO] || CASOS.principal;

/* ═══════════ Íconos ═══════════ */
const P = {
  atras:'<path d="M20 12H5M11 18l-6-6 6-6"/>',
  chevD:'<path d="M6 9l6 6 6-6"/>',
  pantalla:'<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19.5h20M12 8.5v4M10 10.5h4"/>',
  chevR:'<path d="M9 6l6 6-6 6"/>',
  chevL:'<path d="M15 6l-6 6 6 6"/>',
  doc:'<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
  campana:'<path d="M18 9a6 6 0 0 0-12 0c0 6-2.5 8-2.5 8h17S18 15 18 9"/><path d="M13.7 20.5a2 2 0 0 1-3.4 0"/>',
  salir:'<path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4M15 16l4-4-4-4M19 12H9"/>',
  filtros:'<path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="17" r="2"/>',
  descarga:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.1"/>',
  check:'<circle cx="12" cy="12" r="9"/><path d="M8 12.4l2.7 2.7L16.2 9.6"/>',
  tick:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  hamb:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  buscar:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
  subir:'<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>',
};
const ic = (n, c = '') => `<svg class="ic ${c}" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;
// Íconos de relleno exportados de Figma: ampolleta (sin operaciones) y círculo con X (errores)
const BULB = '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M24 11.7001C22.0514 11.7025 20.1833 12.4777 18.8054 13.8555C17.4276 15.2334 16.6524 17.1015 16.65 19.0501C16.65 19.3286 16.7606 19.5957 16.9575 19.7926C17.1545 19.9895 17.4215 20.1001 17.7 20.1001C17.9785 20.1001 18.2455 19.9895 18.4425 19.7926C18.6394 19.5957 18.75 19.3286 18.75 19.0501C18.7516 17.6582 19.3052 16.3237 20.2894 15.3395C21.2736 14.3553 22.6081 13.8017 24 13.8001C24.2785 13.8001 24.5455 13.6895 24.7425 13.4926C24.9394 13.2956 25.05 13.0286 25.05 12.7501C25.05 12.4716 24.9394 12.2045 24.7425 12.0076C24.5455 11.8107 24.2785 11.7001 24 11.7001ZM24 7.50009C17.2446 7.50009 12.4421 12.9831 12.45 19.0652C12.4498 21.8563 13.466 24.5519 15.3086 26.6482C16.9926 28.5658 18.6082 31.6954 18.75 32.7001L18.7539 37.6345C18.7541 37.8409 18.8155 38.0425 18.9305 38.214L20.5383 40.6316C20.634 40.7756 20.7639 40.8937 20.9162 40.9754C21.0686 41.0572 21.2388 41.1 21.4118 41.1002H26.5863C26.7595 41.1003 26.9301 41.0577 27.0829 40.9759C27.2356 40.8941 27.3658 40.7759 27.4617 40.6316L29.0695 38.2127C29.1834 38.0408 29.2448 37.8394 29.2461 37.6332L29.25 32.7001C29.3977 31.6685 31.0219 28.5533 32.6914 26.6482C34.153 24.979 35.1026 22.9241 35.4266 20.7292C35.7505 18.5344 35.4352 16.2927 34.5182 14.2724C33.6012 12.2522 32.1214 10.539 30.256 9.3379C28.3906 8.13683 26.2186 7.49877 24 7.50009ZM27.1461 37.3142L26.0239 39.0002H21.9735L20.8539 37.3142V36.9002H27.148L27.1461 37.3142ZM27.15 34.8001H20.85L20.8461 32.7001H27.15V34.8001ZM31.1144 25.2642C30.1957 26.3109 28.7309 28.4201 27.7957 30.5988H20.2082C19.2711 28.4194 17.8063 26.3109 16.8876 25.2642C15.3811 23.5448 14.5517 21.3361 14.5539 19.0501C14.5421 13.997 18.5164 9.60009 24 9.60009C29.2113 9.60009 33.45 13.8388 33.45 19.0501C33.4499 21.3363 32.6192 23.5447 31.1124 25.2642H31.1144ZM9.3 19.0501C9.3 18.7716 9.18937 18.5046 8.99246 18.3076C8.79555 18.1107 8.52848 18.0001 8.25 18.0001H4.05C3.77152 18.0001 3.50445 18.1107 3.30754 18.3076C3.11062 18.5046 3 18.7716 3 19.0501C3 19.3286 3.11062 19.5957 3.30754 19.7926C3.50445 19.9895 3.77152 20.1001 4.05 20.1001H8.25C8.52848 20.1001 8.79555 19.9895 8.99246 19.7926C9.18937 19.5957 9.3 19.3286 9.3 19.0501ZM37.65 11.7001C37.8131 11.6997 37.9739 11.6618 38.1199 11.5892L42.3199 9.48918C42.5689 9.36457 42.7583 9.14611 42.8463 8.88188C42.9343 8.61764 42.9137 8.32928 42.7891 8.08021C42.7274 7.95689 42.642 7.84693 42.5378 7.7566C42.4336 7.66628 42.3126 7.59737 42.1818 7.5538C41.9176 7.4658 41.6292 7.48637 41.3801 7.61099L37.1801 9.711C36.9686 9.81681 36.7989 9.99095 36.6987 10.2052C36.5985 10.4195 36.5736 10.6613 36.6279 10.8915C36.6823 11.1217 36.8128 11.3268 36.9983 11.4736C37.1838 11.6203 37.4135 11.7001 37.65 11.7001ZM43.95 18.0001H39.75C39.4715 18.0001 39.2044 18.1107 39.0075 18.3076C38.8106 18.5046 38.7 18.7716 38.7 19.0501C38.7 19.3286 38.8106 19.5957 39.0075 19.7926C39.2044 19.9895 39.4715 20.1001 39.75 20.1001H43.95C44.2285 20.1001 44.4955 19.9895 44.6925 19.7926C44.8894 19.5957 45 19.3286 45 19.0501C45 18.7716 44.8894 18.5046 44.6925 18.3076C44.4955 18.1107 44.2285 18.0001 43.95 18.0001ZM10.8199 9.711L6.61987 7.61099C6.49655 7.54929 6.36228 7.51248 6.22473 7.50266C6.08718 7.49285 5.94905 7.51022 5.81821 7.5538C5.55398 7.64179 5.33552 7.83115 5.21091 8.08021C5.08629 8.32928 5.06571 8.61764 5.15371 8.88188C5.2417 9.14611 5.43106 9.36457 5.68012 9.48918L9.88012 11.5892C10.0261 11.6618 10.1869 11.6997 10.35 11.7001C10.5865 11.7001 10.8162 11.6203 11.0017 11.4736C11.1872 11.3268 11.3177 11.1217 11.3721 10.8915C11.4264 10.6613 11.4015 10.4195 11.3013 10.2052C11.2011 9.99095 11.0314 9.81681 10.8199 9.711ZM42.3199 28.611L38.1199 26.511C37.8707 26.3864 37.5823 26.3659 37.318 26.4539C37.0537 26.542 36.8352 26.7314 36.7106 26.9806C36.586 27.2297 36.5654 27.5182 36.6535 27.7825C36.7415 28.0468 36.931 28.2653 37.1801 28.3899L41.3801 30.4899C41.6293 30.6145 41.9177 30.635 42.182 30.547C42.4463 30.4589 42.6648 30.2695 42.7894 30.0203C42.914 29.7712 42.9346 29.4827 42.8465 29.2184C42.7585 28.9541 42.569 28.7357 42.3199 28.611ZM10.35 26.4001C10.1869 26.4005 10.0261 26.4385 9.88012 26.511L5.68012 28.611C5.43097 28.7357 5.24153 28.9541 5.15348 29.2184C5.10987 29.3493 5.09248 29.4875 5.10227 29.6251C5.11207 29.7627 5.14887 29.897 5.21058 30.0203C5.27228 30.1437 5.35768 30.2537 5.4619 30.3441C5.56612 30.4344 5.68711 30.5034 5.81798 30.547C6.08227 30.635 6.37072 30.6145 6.61987 30.4899L10.8199 28.3899C11.0318 28.2843 11.2018 28.1101 11.3023 27.8957C11.4028 27.6813 11.4278 27.4392 11.3734 27.2088C11.319 26.9784 11.1883 26.7731 11.0025 26.6263C10.8167 26.4795 10.5868 26.3998 10.35 26.4001Z"/></svg>';
const XCIRC = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.47581 2 2 6.47581 2 12C2 17.5242 6.47581 22 12 22C17.5242 22 22 17.5242 22 12C22 6.47581 17.5242 2 12 2ZM12 20.7097C7.21371 20.7097 3.29032 16.8347 3.29032 12C3.29032 7.21371 7.16532 3.29032 12 3.29032C16.7863 3.29032 20.7097 7.16532 20.7097 12C20.7097 16.7863 16.8347 20.7097 12 20.7097ZM15.8226 9.20564L13.0282 12L15.8226 14.7944C16.0121 14.9839 16.0121 15.2903 15.8226 15.4798L15.4798 15.8226C15.2903 16.0121 14.9839 16.0121 14.7944 15.8226L12 13.0282L9.20564 15.8226C9.01613 16.0121 8.70968 16.0121 8.52016 15.8226L8.17742 15.4798C7.9879 15.2903 7.9879 14.9839 8.17742 14.7944L10.9718 12L8.17742 9.20564C7.9879 9.01613 7.9879 8.70968 8.17742 8.52016L8.52016 8.17742C8.70968 7.9879 9.01613 7.9879 9.20564 8.17742L12 10.9718L14.7944 8.17742C14.9839 7.9879 15.2903 7.9879 15.4798 8.17742L15.8226 8.52016C16.0081 8.70968 16.0081 9.01613 15.8226 9.20564Z"/></svg>';
const KEBAB = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.7" fill="currentColor"/><circle cx="12" cy="12" r="1.7" fill="currentColor"/><circle cx="12" cy="19" r="1.7" fill="currentColor"/></svg>';

let OPS, S, C;
// Items: con uno (fase 1) el selector y Buscar quedan deshabilitados; con varios (escalabilidad) el historial abre sin item elegido
const VARIOS = !!CFG.varios;
const cacheTx = {};
function reiniciar() {
  // ev = decisiones de la OP (aprobar, rechazar, revocar), para la alerta y el historial. Revocar no borra el rechazo
  OPS = OPS0.map(o => ({ ...o, item:o.item || ITEMS[0], sol:[...o.sol], fe:[...o.fe], ev: o.est === 'Pendiente' ? [] : [{ est:o.est, por:o.por, fe:[...o.fe], causal:o.causal || '', motivo:o.motivo || '' }] }));
  S = { vista:'bandeja', item: VARIOS ? '' : ITEMS[0], itemSel: VARIOS ? '' : ITEMS[0], opId:null, pagB:0, tamB:10, pagD:0, tamD:10, filtros:{ ...VACIO }, filtrosD:{ ...VACIO_D }, orden:{ col:null, dir:null }, ordenD:{ col:null, dir:null }, cargando:false, retener:new Set() };
  C = { tipo:'', item:'', buscado:null, pag:0, tam:10, orden:{ col:'id', dir:'desc' }, filtros:{ ...VACIO_C }, cargando:false };
}
const habilitada = o => VARIOS || o.item === ITEMS[0];
// Errores de una acción: falla el primer intento de cada OP (al exportar, de cada pantalla) y el reintento funciona
const fallidos = new Set();
function falla(accion, clave) {
  if (!(CFG.fallan || []).includes(accion) || fallidos.has(accion + ':' + clave)) return false;
  fallidos.add(accion + ':' + clave); return true;
}
// Las decisiones de la demo viven solo en memoria: al recargar (F5) el prototipo vuelve a su estado inicial (Javier, 07/10)
const op = id => OPS.find(o => o.id === +id);

/* ═══════════ Piezas comunes ═══════════ */
const chip = (est, nueva) => `<span class="chip ${est}${nueva ? ' nueva' : ''}">${est}</span>`;
const fh = ([d, h]) => `<span class="fh">${f4(d)}<small>${h} hrs.</small></span>`;
const migas = items => `<nav class="migas" aria-label="Migas de pan">${items.map((it, i) => i < items.length - 1
  ? `<a href="#/" data-a="ir-bandeja">${it}</a>${ic('chevR')}`
  : `<span aria-current="page">${it}</span>`).join('')}</nav>`;
function paginador(id, pag, tam, total, opciones) {
  const ini = total ? pag * tam + 1 : 0, fin = Math.min(total, (pag + 1) * tam);
  return `<div class="paginador">
    <label>Mostrar por página <select class="sel-chico" id="${id}-tam" data-c="${id}-tam">${opciones.map(n => `<option ${n === tam ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
    <span aria-live="polite">${ini} - ${fin} de ${miles(total)}</span>
    <span class="pag-flechas">
      <button type="button" id="${id}-ant" data-a="${id}-pag" data-v="-1" aria-label="Página anterior" ${pag === 0 ? 'disabled' : ''}>${ic('chevL')}</button>
      <button type="button" id="${id}-sig" data-a="${id}-pag" data-v="1" aria-label="Página siguiente" ${fin >= total ? 'disabled' : ''}>${ic('chevR')}</button>
    </span>
  </div>`;
}

/* ═══════════ Bandeja ═══════════ */
function filtradas() {
  const f = S.filtros;
  return OPS.filter(o => o.item === S.item && (S.retener.has(o.id) ||
    (!f.op || String(o.id).includes(f.op.trim())) &&
    (!f.est || o.est === f.est) &&
    (!f.per || o.per.slice(3) === f.per) &&
    (!f.sol || iso(o.sol[0]) === f.sol) &&
    (!f.fe || iso(o.fe[0]) === f.fe) &&
    (!f.canal || o.canal === f.canal)));
}
// Columnas ordenables de la bandeja (todas menos Acciones). Salto de línea fijo como en Figma
const COLS_B = [
  ['per', 'Periodo <br>contable', o => iso(o.per)], ['id', 'N° <br>operación', o => o.id], ['canal', 'Canal de <br>origen', o => o.canal],
  ['sol', 'Fecha solicitud <br>centralizador', o => iso(o.sol[0]) + o.sol[1]], ['est', 'Estado <br>aprobación', o => ORDEN_EST[o.est]],
  ['fe', 'Fecha <br>estado', o => iso(o.fe[0]) + o.fe[1]], ['val', 'Total de casos', o => o.val], ['monto', 'Monto <br>a pagar', o => o.monto],
];
const ORDEN_EST = { Pendiente:0, Aprobada:1, Rechazada:2 };
const CARET = '<svg class="caret" viewBox="0 0 8 5" aria-hidden="true"><path d="M0 0h8L4 5z"/></svg>';
// Por defecto ninguna columna aparece activa y los datos vienen por Fecha Solicitud, más reciente primero.
// Al ordenar, los empates se resuelven igual (Fecha Solicitud y N° Operación descendentes)
function ordenadas() {
  const cmp = (a, b) => a < b ? -1 : a > b ? 1 : 0;
  const base = (a, b) => -cmp(iso(a.sol[0]) + a.sol[1], iso(b.sol[0]) + b.sol[1]) || b.id - a.id;
  if (!S.orden.col) return filtradas().sort(base);
  const [, , v] = COLS_B.find(([k]) => k === S.orden.col), d = S.orden.dir === 'asc' ? 1 : -1;
  return filtradas().sort((a, b) => d * cmp(v(a), v(b)) || base(a, b));
}
// Detalle: por defecto, por N° Asiento; los vacíos (—) quedan al final en ambos sentidos
const CLAVES_D = { asiento:t => t.asiento, fecha:t => iso(t.fecha), folio:t => t.folio, ben:t => t.ben, cau:t => t.cau, con:t => t.con, cc:t => t.cc, imp:t => t.imp, cli:t => t.cli, prov:t => t.prov, banco:t => t.banco, cuenta:t => t.cuenta };
function ordenadasD(filas) {
  if (!S.ordenD.col) return filas;
  const v = CLAVES_D[S.ordenD.col], d = S.ordenD.dir === 'asc' ? 1 : -1;
  const cmp = (a, b) => typeof a === 'string' ? a.localeCompare(b, 'es', { numeric:true }) : a - b;
  return [...filas].sort((a, b) => { const x = v(a), y = v(b); return (x == null) - (y == null) || (x == null ? 0 : d * cmp(x, y)) || a.asiento - b.asiento; });
}
function chipsFiltro() {
  // Mismo orden que las columnas de la tabla
  const f = S.filtros, c = [];
  if (f.per) c.push(['per', `Periodo: ${periodoTxt(f.per)}`]);
  if (f.op) c.push(['op', `N° operación: ${f.op}`]);
  if (f.canal) c.push(['canal', `Canal de origen: ${f.canal}`]);
  if (f.sol) c.push(['sol', `Fecha solicitud: ${corta(f.sol)}`]);
  if (f.est) c.push(['est', `Estado: ${f.est}`]);
  if (f.fe) c.push(['fe', `Fecha estado: ${corta(f.fe)}`]);
  return c;
}
// Rechazada lleva tooltip con la causal (con "Otro", el motivo escrito) (Javier, 09/10)
const chipEst = o => o.est === 'Rechazada'
  ? `<span class="con-tip chip-tip" tabindex="0" data-tip="causal" data-id="${o.id}" aria-describedby="tip">${chip(o.est, o.anim)}</span>` : chip(o.est, o.anim);
// Card Item de operación: siempre sobre el historial. Buscar se habilita al elegir un item (solo con varios items)
const cardItem = () => `
  <section class="card card-buscar" aria-label="Item de operación">
    <div class="fila-buscar">
      <div class="campo"><label for="b-item">Item de operación</label><select class="input" id="b-item" data-c="b-item" ${VARIOS ? '' : 'disabled'}>
        ${VARIOS ? '<option value="">Selecciona un item</option>' : ''}${(VARIOS ? ITEMS : [ITEMS[0]]).map(i => `<option ${S.itemSel === i ? 'selected' : ''}>${i}</option>`).join('')}</select></div>
      <button class="btn btn-pri" type="button" id="b-buscar" data-a="b-buscar" ${VARIOS && S.itemSel ? '' : 'disabled'}>Buscar</button>
    </div>
  </section>`;
const vacioOps = (t, p) => `<div class="vacio sin-ops"><div class="vacio-ic">${BULB}</div><h3>${t}</h3><p>${p}</p></div>`;
function vBandeja() {
  const sinItem = !S.item, sinOps = !sinItem && (CFG.vacio || !OPS.some(o => o.item === S.item));
  const lista = sinItem || sinOps ? [] : ordenadas(), chips = sinItem || sinOps ? [] : chipsFiltro();
  const maxPag = Math.max(0, Math.ceil(lista.length / S.tamB) - 1);
  if (S.pagB > maxPag) S.pagB = maxPag;
  const pagina = lista.slice(S.pagB * S.tamB, (S.pagB + 1) * S.tamB);
  return `
  <header class="cab-pag"><h1>Aprobaciones para solicitudes de pagos</h1>${migas(['Inicio', 'Aprobaciones de Pago'])}</header>
  ${cardItem()}
  <section class="card" aria-labelledby="t-hist">
    <div class="tabla-cab">
      <div><h2 id="t-hist">Historial de aprobaciones</h2></div>
      <div class="acciones">
        <button class="btn btn-sec" type="button" id="btn-filtros" data-a="filtros" ${sinItem || sinOps ? 'disabled' : ''}>${ic('filtros')}Filtros</button>
        <button class="btn btn-sec" type="button" id="btn-exportar" data-a="exportar" ${lista.length ? '' : 'disabled'}>${ic('descarga')}Exportar</button>
      </div>
    </div>
    ${chips.length ? `<div class="filtros-aplicados"><span class="etq">Filtros aplicados</span>
      ${chips.map(([k, t]) => `<span class="chip-f">${esc(t)}<button type="button" data-a="quitar-filtro" data-v="${k}" aria-label="Quitar filtro ${esc(t)}">${ic('x')}</button></span>`).join('')}
      <button type="button" class="link" data-a="limpiar-filtros">Limpiar filtros</button></div>` : ''}
    ${sinItem ? vacioOps('Elige un item de operación', 'Selecciona un item y presiona Buscar para ver sus OPs.')
    : lista.length || S.cargandoB ? `
    <div class="tabla-scroll" id="scroll-b">
      <table class="tabla t-bandeja" aria-busy="${!!S.cargandoB}">
        <thead><tr>
          ${COLS_B.map(([k, t]) => { const a = S.orden.col === k; return `<th scope="col" class="ord${a ? ' activa' : ''}"${a ? ` aria-sort="${S.orden.dir === 'asc' ? 'ascending' : 'descending'}"` : ''}><button type="button" class="orden" id="ord-${k}" data-a="ordenar" data-v="${k}">${t}${CARET}</button></th>`; }).join('')}
          <th scope="col" class="col-acc">Acciones</th>
        </tr></thead>
        <tbody>${S.cargandoB ? filasSk(pagina.length || 5) : pagina.map(o => `<tr>
          <td>${f4(o.per)}</td><td>${o.id}</td><td>${o.canal}</td><td>${fh(o.sol)}</td><td>${chipEst(o)}</td><td>${fh(o.fe)}</td>
          <td>${miles(o.val)}</td><td>${pesos(o.monto)}</td>
          <td class="col-acc"><button type="button" class="kebab" id="acc-${o.id}" data-a="menu" data-id="${o.id}" aria-haspopup="menu" aria-expanded="false" aria-controls="menu" aria-label="Acciones de la OP ${o.id}">${KEBAB}</button></td>
        </tr>`).join('')}</tbody>
      </table>
    </div>
    ${lista.length ? paginador('pb', S.pagB, S.tamB, lista.length, [10, 20, 50]) : ''}` : sinOps ? (VARIOS
      ? vacioOps(`Aún no hay operaciones de ${S.item}`, 'Aquí verás las OPs de este item que lleguen para aprobar.')
      : vacioOps('Aún no hay operaciones', 'Aquí verás las OPs que lleguen para aprobar.')) : `
    <div class="vacio sin-res">
      <div class="vacio-ic">${ic('buscar')}</div>
      <h3>Sin resultados</h3>
      <p>Cambia o quita algún filtro para ver más resultados.</p>
    </div>`}
  </section>`;
}

// Fila de carga de la bandeja: mismas columnas y alto que una fila real; barras de 12 px como Figma (frame 20)
const SK_B = [55, 50, 55, 60, 55, 60, 40, 70];
const filasSk = n => Array.from({ length: n }, () => `<tr>${SK_B.map(w => `<td><span class="sk" style="width:${w}%"></span></td>`).join('')}<td class="col-acc"><span class="sk" style="width:24px;margin:0 auto"></span></td></tr>`).join('');
let timerB;
// Simula la consulta al cambiar filtros, página o tamaño: skeleton breve y luego los datos (conserva foco y scroll)
function cargarBandeja() {
  clearTimeout(timerB); S.cargandoB = true;
  timerB = setTimeout(() => {
    if (S.vista !== 'bandeja') { S.cargandoB = false; return; }
    // Error al cargar: la tabla sigue en carga y se avisa con el modal de error del sistema
    if (CFG.errorCarga) { modalErrorSistema(); return; }
    S.cargandoB = false;
    const fid = document.activeElement?.id, x = $('#scroll-b')?.scrollLeft || 0;
    render(false); if (fid) enfocar(fid);
    const sc = $('#scroll-b'); if (sc) sc.scrollLeft = x; sombraScroll();
  }, espera(420));
}

/* ═══════════ Detalle ═══════════ */
// Una sola alerta para todas las decisiones: la última, con quién y cuándo; si es un rechazo, la causal debajo. Con más de una
// (p. ej. rechazo + revocación) suma "Ver historial", que abre la secuencia completa (Javier, 09/10)
const accionTxt = e => e.est === 'Revocado' ? 'Rechazo revocado' : e.est;
function alerta(o) {
  const u = o.ev[o.ev.length - 1];
  if (!u) return '';
  const [d, h] = u.fe, nueva = o.anim ? ' nueva' : '', rech = u.est === 'Rechazada';
  return `<div class="alerta${nueva}" role="status"><div class="alerta-m"><span class="alerta-ic">${ic('info')}</span><div class="alerta-t">
      <p><b>${accionTxt(u)}</b> por <b>${esc(u.por)}</b> el ${f4(d)} a las ${h} hrs.</p>
      ${rech ? `<p>Causal: <b>${esc(causalTxt(u))}</b></p>` : ''}
    </div></div>
    ${o.ev.length > 1 ? '<button type="button" class="ver" id="ver-historial" data-a="historial">Ver historial</button>' : ''}</div>`;
}
function vDetalle() {
  const o = op(S.opId);
  return `
  <header class="cab-pag"><h1>Detalle OP ${o.id}</h1>${migas(['Inicio', 'Aprobaciones de Pago', `Detalle OP ${o.id}`])}</header>
  <div id="zona-alerta">${alerta(o)}</div>
  <section class="card resumen" aria-label="Resumen de la OP">
    <div class="resumen-in">
    <div class="monto"><div class="etq">Monto a pagar</div><div class="cifra">${pesos(o.monto)}</div><div class="sub">${miles(o.val)} casos</div></div>
    <dl class="meta">
      <div><dt>Estado aprobación</dt><dd id="d-estado">${chip(o.est, o.anim)}</dd></div>
      <div><dt>Item de operación</dt><dd>${o.item}</dd></div>
      <div><dt>Periodo contable</dt><dd>${f4(o.per)}</dd></div>
      <div><dt>Fecha solicitud centralizador</dt><dd>${f4(o.sol[0])} <span class="sep">·</span> ${o.sol[1]} hrs.</dd></div>
      <div><dt>Canal de origen</dt><dd>${o.canal}</dd></div>
    </dl>
    </div>
  </section>
  <section class="card" id="panel-tx" aria-label="Detalle de transacciones"></section>
  ${o.est === 'Pendiente' ? `
  <div class="barra-decision" id="barra-decision">
    <p>Al aprobar, se envían a SAP <b>${miles(o.val)} casos</b> por <b>${pesos(o.monto)}</b>.</p>
    <div class="botones">
      <button class="btn btn-sec btn-140" type="button" id="det-rechazar" data-a="rechazar" data-id="${o.id}">Rechazar</button>
      <button class="btn btn-pri btn-140" type="button" id="det-aprobar" data-a="aprobar" data-id="${o.id}">Aprobar</button>
    </div>
  </div>` : o.est === 'Rechazada' ? `
  <div class="barra-decision" id="barra-decision">
    <p><b>La OP no se envió a SAP.</b> Si el rechazo fue un error, puedes revocarlo.</p>
    <div class="botones una"><button class="btn btn-pri" type="button" id="det-revocar" data-a="revocar" data-id="${o.id}">Revocar rechazo</button></div>
  </div>` : ''}`;
}
// Filtros del detalle (Javier, 09/10, "de momento, los definimos nosotros"): N° asiento exacto; códigos y cuenta "contiene";
// Tipo de beneficio, Causal de emisión (solo Licencias médicas) y Concepto son selects de valor exacto con las opciones del item.
// N° cuenta contable "contiene" (HU punto 13). Mismo orden que las columnas del detalle (OK de Javier, 13/10)
const ETQ_D = { asiento:'N° asiento', ben:'Tipo de beneficio', cau:'Causal de emisión', con:'Concepto', cc:'N° cuenta contable', cli:'Código cliente', banco:'Clave banco', cuenta:'Cuenta bancaria' };
function filasD(o) {
  const f = S.filtrosD, tiene = (x, v) => x != null && String(x).toLowerCase().includes(v.toLowerCase());
  return transacciones(o).filter(t => (!f.asiento || t.asiento === +f.asiento) && (!f.cc || tiene(t.cc, f.cc)) && (!f.cli || tiene(t.cli, f.cli))
    && (!f.banco || tiene(t.banco, f.banco)) && (!f.cuenta || tiene(t.cuenta, f.cuenta))
    && (!f.ben || t.ben === f.ben) && (!f.cau || t.cau === f.cau) && (!f.con || t.con === f.con));
}
const chipsFiltroD = () => Object.keys(ETQ_D).filter(k => S.filtrosD[k]).map(k => [k, `${ETQ_D[k]}: ${S.filtrosD[k]}`]);
function vTabla() {
  // Filtrar no cambia lo que se aprueba: la tarjeta resumen y la barra siguen con la OP completa
  const o = op(S.opId), filas = ordenadasD(filasD(o)), chips = chipsFiltroD();
  const nulo = v => v == null ? '<span class="vacio-celda">—</span>' : v;
  // Las 15 columnas de la HU (12.a), en su orden. Solo se ordenan las que cambian entre filas; las iguales en toda la OP no llevan caret
  // (en Reembolsos, Causal de emisión es "-" en todas). Licencias médicas lleva Tipo y Causal en una línea, como Figma IO5
  const lm = !!negocioDe(o.item).cau;
  const cols = [
    ['N° de operación', () => o.id], ['Descripción proceso', () => 'Beneficios'], ['Descripción item proceso', () => o.item],
    ['N° asiento', t => t.asiento, 'asiento'], ['Fecha <br>contable', t => f4(t.fecha), 'fecha'], ['Folio <br>documento', t => t.folio, 'folio'],
    [lm ? 'Tipo de beneficio' : 'Tipo de <br>beneficio', t => t.ben, 'ben'], [lm ? 'Causal de emisión' : 'Causal de <br>emisión', t => t.cau, lm ? 'cau' : null], ['Concepto', t => t.con, 'con'],
    ['N° cuenta contable', t => t.cc, 'cc'], ['Código cliente', t => t.cli, 'cli'], ['Código <br>proveedor', t => t.prov, 'prov'],
    ['Importe <br>documento', t => pesos(t.imp), 'imp'], ['Clave <br>banco', t => t.banco, 'banco'], ['Cuenta <br>bancaria', t => nulo(t.cuenta), 'cuenta'],
  ];
  // Anchos fijos de cada columna, iguales a Figma (frame 06 e IO5); los títulos largos pasan a 2 líneas
  const ANCHOS_D = lm ? [140, 160, 200, 120, 136, 136, 192, 252, 212, 172, 152, 156, 168, 116, 152] : [140, 160, 200, 120, 136, 136, 144, 136, 200, 172, 152, 156, 168, 116, 152];
  const ancho = i => ` style="width:${ANCHOS_D[i]}px;min-width:${ANCHOS_D[i]}px"`;
  const thOrd = (k, t, i) => { const a = S.ordenD.col === k; return `<th scope="col" class="ord${a ? ' activa' : ''}"${ancho(i)}${a ? ` aria-sort="${S.ordenD.dir === 'asc' ? 'ascending' : 'descending'}"` : ''}><button type="button" class="orden" id="ordd-${k}" data-a="ordenar-det" data-v="${k}">${t}${CARET}</button></th>`; };
  const cab = `<div class="tabla-cab">
      <div><h2>Detalle de transacciones</h2></div>
      <div class="acciones">
        <button class="btn btn-sec" type="button" id="btn-filtros-det" data-a="filtros-det">${ic('filtros')}Filtros</button>
        <button class="btn btn-sec" type="button" id="btn-exportar-det" data-a="exportar-det" ${filas.length ? '' : 'disabled'}>${ic('descarga')}Exportar</button>
      </div>
    </div>
    ${chips.length ? `<div class="filtros-aplicados"><span class="etq">Filtros aplicados</span>
      ${chips.map(([k, t]) => `<span class="chip-f">${esc(t)}<button type="button" data-a="quitar-filtro-det" data-v="${k}" aria-label="Quitar filtro ${esc(t)}">${ic('x')}</button></span>`).join('')}
      <button type="button" class="link" data-a="limpiar-filtros-det">Limpiar filtros</button></div>` : ''}`;
  if (!filas.length && !S.cargando) return cab + `<div class="vacio sin-res"><div class="vacio-ic">${ic('buscar')}</div><h3>Sin resultados</h3><p>Cambia o quita algún filtro para ver más resultados.</p></div>`;
  const maxPag = Math.max(0, Math.ceil(filas.length / S.tamD) - 1);
  if (S.pagD > maxPag) S.pagD = maxPag;
  const pagina = filas.slice(S.pagD * S.tamD, (S.pagD + 1) * S.tamD);
  const head = cols.map(([t, , k], i) => k ? thOrd(k, t, i) : `<th scope="col"${ancho(i)}>${t}</th>`).join('');
  const body = S.cargando
    ? (pagina.length ? pagina : Array(5).fill(0)).map(() => `<tr>${cols.map(() => '<td><span class="sk" style="width:70%"></span></td>').join('')}</tr>`).join('')
    : pagina.map(t => `<tr>${cols.map(([, f]) => `<td>${f(t)}</td>`).join('')}</tr>`).join('');
  return cab + `<div class="tabla-scroll" id="scroll-d"><table class="tabla t-detalle" aria-busy="${S.cargando}"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`
    + (filas.length ? paginador('pd', S.pagD, S.tamD, filas.length, [10, 20, 50]) : '');
}
let timerCarga;
// Tras cambiar de página: el foco sigue en la flecha (o en la otra si quedó deshabilitada) y la tabla vuelve a la vista
function enfocar(id) {
  let el = $('#' + id);
  if (el?.disabled) el = $('#' + id.replace(/-(sig|ant)$/, m => m === '-sig' ? '-ant' : '-sig'));
  el?.focus({ preventScroll: true });
}
function verTabla(sel) {
  const t = $(sel); if (!t) return;
  const y = t.getBoundingClientRect().top;
  if (y < 88) window.scrollBy({ top: y - 88, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}
function pintarTabla(conCarga) {
  const panel = $('#panel-tx'); if (!panel) return;
  clearTimeout(timerCarga);
  S.cargando = !!conCarga;
  panel.innerHTML = vTabla();
  sombraScroll();
  if (conCarga) timerCarga = setTimeout(() => { if (S.vista !== 'detalle' || !panel.isConnected) { S.cargando = false; return; } if (CFG.errorCarga) { modalErrorSistema(); return; } S.cargando = false; const x = $('#scroll-d')?.scrollLeft || 0, fid = panel.contains(document.activeElement) && document.activeElement.id; panel.innerHTML = vTabla(); if (fid) enfocar(fid); const sc = $('#scroll-d'); if (sc) sc.scrollLeft = x; sombraScroll(); }, espera(420));
}

/* ═══════════ Centralizar/Pagos (base as-is de CCP, relevada en cert 08/10) ═══════════ */
// Misma estructura y contenido que CCP con nuestra UI (Javier, 08/10). Solo dos cambios (HU 13/10): todas las filas llevan el tag
// del canal de origen y el menú no muestra Solicitar Pago ni Rechazar Solicitud, que son facultad del aprobador. Spec: 03_analisis/Centralizar_Pagos_Base_AsIs_v1.md
// Misma data de OPs que la bandeja: aprobar o rechazar en Aprobaciones de Pago cambia el estado aquí.
const TIPOS_OP = {
  'CENTRALIZACIÓN':['BONOS CADUCOS', 'BONOS REACTIVADOS', 'COSTO BONOS', 'COSTO REEMBOLSO', 'COSTO SUBSIDIO', 'SUBSIDIO FUPF'],
  'SOLICITUD DE PAGO':['PAGO REEMBOLSO', 'PAGO SUBSIDIO', 'PAGO SUBSIDIO FUPF', 'PAGO SUBSIDIO PREVIRED', 'REEMISION REEMBOLSO', 'REEMISION SUBSIDIO',
    'REEMISION SUBSIDIO PREVIRED', 'REEMISION SUBSIDIO FUPF', 'PAGO SUBSIDIO FUPF PREVIRED', 'REVALIDADOS SIL FUPF', 'EASY CANCHA', 'REEMISION EASY CANCHA',
    'PAGO SUBSIDIO CADUCO', 'PAGO REEMBOLSO CADUCO', 'REEMISION SUBSIDIO CADUCO', 'REEMISION REEMBOLSO CADUCO', 'DEVOLUCION COPAGO'] };
// Estados del filtro de CCP, en su orden y escritura
const ESTADOS_C = ['Cargando Arch.', 'Archivo Cargado', 'Error Carga', 'Validando Arch.', 'Arch. Val. Con Exito', 'Arch. Val. Con Error', 'En Proceso',
  'Proceso Con Exito', 'Procesado Con Errores', 'Rechazada', 'Borrado', 'En Propuesta', 'Revisada', 'En Proceso De Pago', 'Pagado', 'Pagado Parcial', 'Pagado Rendido'];
// Etiquetas de los chips de filtro, como CCP
const ETQ_C = { per:'Periodo', op:'N° Operación', arch:'Nombre Archivo', sol:'Fecha Solicitud', est:'Estado', fe:'Fecha Estado' };
// CCP muestra el estado en mayúsculas y sin tildes
const mayus = s => s.normalize('NFD').replace(/\p{M}/gu, '').toUpperCase();
// Estados como hoy en CCP, iguales para OPs por sistema y manuales; los labels to-be van por otro carril (Javier, 13/10).
// Pendiente de aprobación: Sol. validada con éxito (por sistema) o Arch. val. con éxito (manual). Sin excluidos
const estTxt = f => mayus(f.est);
const perC = d => `20${d.slice(6)}-${d.slice(3, 5)}`;                       // DD/MM/AA → AAAA-MM
const fechaC = d => `${d.slice(0, 6).replace(/\//g, '-')}20${d.slice(6)}`;  // DD/MM/AA → DD-MM-AAAA
// Estado SAP de las OPs aprobadas antes de la demo, como en Figma CP-02. Las aprobadas en la sesión quedan En proceso
const SAP0 = { 11692:{ est:'En proceso' }, 11689:{ est:'Procesado con errores', err:3, fe:['02/10/26', '11:12'] }, 11688:{ est:'Proceso con éxito', fe:['02/10/26', '10:58'] },
  11679:{ est:'En propuesta', fe:['01/10/26', '09:40'], real:57913260 }, 11676:{ est:'Pagado', fe:['03/10/26', '12:15'], real:64230870 } };
// OPs que llegan por sistema (canal AUTOMATICO; en cert sin nombre, aquí con nombre generado + etiqueta).
// Sale del Canal de origen de la bandeja: las Manual (Excel) se muestran como fila Excel; pendientes, ARCH. VAL. CON EXITO (Javier, 09/10).
// Incluye las pendientes de la bandeja del aprobador: aprobar, rechazar o revocar ahí cambia su estado aquí
const SIS0 = new Set(OPS0.filter(o => o.canal === 'Sistema').map(o => o.id));
// Usuarios ficticios que cargan o solicitan (tooltip de N° Operación)
const USUARIOS_C = ['psoto@ejemplo.cl', 'mdiaz@ejemplo.cl', 'afuentes@ejemplo.cl'];
const sumaHabiles = (dmy, n) => {
  const [d, m, a] = dmy.split('/').map(Number), x = new Date(2000 + a, m - 1, d), dd = v => String(v).padStart(2, '0');
  for (let k = 0; k < n;) { x.setDate(x.getDate() + 1); if (x.getDay() % 6) k++; }
  const t = `${dd(x.getDate())}/${dd(x.getMonth() + 1)}/${String(x.getFullYear()).slice(2)}`;
  return iso(t) > iso(HOY) ? HOY : t;
};
// Estado en CCP del historial según la época, como en cert (07/10): 2023 Proceso con éxito; 2024–2025 En propuesta; 2026 Pagado parcial y Pagado
function estadoSapHist(r, anio) {
  const x = r(), t = anio <= 2023 ? [['Proceso con éxito', .78], ['Procesado con errores', .95]]
    : anio <= 2025 ? [['En propuesta', .86], ['Proceso con éxito', .93], ['Procesado con errores', .96], ['En proceso', .975]]
    : [['Pagado parcial', .6], ['Pagado', .83], ['En propuesta', .88], ['Revisada', .91], ['Proceso con éxito', .94], ['Procesado con errores', .96], ['Pagado rendido', .97], ['En proceso de pago', .975]];
  const e = (t.find(([, p]) => x < p) || ['Rechazada'])[0];
  const dias = ['Proceso con éxito', 'Procesado con errores', 'En proceso'].includes(e) ? 0 : ['En propuesta', 'Rechazada'].includes(e) ? 1 + Math.floor(r() * 3) : 3 + Math.floor(r() * 8);
  return { est:e, dias };
}
// Monto real de pago = asientos OK en SAP (cert): igual al total si todo OK, menor con errores, 0 si no llegó a SAP
// sap = la OP ya tiene respuesta de SAP (si no, el tooltip muestra "Pendiente" en correctos y con error)
function filaC(o) {
  const r = rng(o.id * 7), sistema = SIS0.has(o.id);
  const [d, h] = o.sol, ss = String(Math.floor(r() * 60)).padStart(2, '0');
  // Por sistema: TextoCabeceraPrefijo_SAP-ID_OP (HU 13/10), p. ej. REEMBOLSO202610-11696. Todas las filas llevan tag de origen, "Por sistema" o "Manual" (Excel) (Javier, 09/10)
  const archivo = sistema ? `REEMBOLSO20${o.per.slice(6)}${o.per.slice(3, 5)}-${o.id}`
    : `${iso(d).replace(/-/g, '')}-${h.replace(':', '')}${ss}-Pago-Reembolso-${String(1 + o.id % 3).padStart(3, '0')}-${o.id}.xlsx`;
  // Fecha Solicitud Centralizacion = cuando la OP llegó al sistema (la misma de la bandeja), en todas las filas (Javier, 08/10)
  const f = { id:o.id, per:o.per, sol:o.sol, fe:o.fe, archivo, sistema, monto:o.monto, real:0, val:o.val, sap:false, usuario:USUARIOS_C[o.id % 3] };
  if (o.est === 'Pendiente') return { ...f, est: sistema ? 'Sol. validada con éxito' : 'Arch. val. con éxito' };
  if (o.est === 'Rechazada') return { ...f, est:'Rechazada' };
  const parcial = () => Math.round(o.monto * (.9 + r() * .08) / 10) * 10, hora = () => `${String(9 + Math.floor(r() * 9)).padStart(2, '0')}:${String(Math.floor(r() * 60)).padStart(2, '0')}`;
  let s = o.enSesion ? { est:'En proceso' } : SAP0[o.id];
  if (!s) { const h0 = estadoSapHist(r, 2000 + +o.fe[0].slice(6)); s = { est:h0.est, fe: h0.dias ? [sumaHabiles(o.fe[0], h0.dias), hora()] : null }; }
  const e = s.est, x = r();
  if (e === 'Procesado con errores' && !s.err) s.err = x < .4 ? o.val : 1 + Math.floor(r() * 5);
  const real = s.real ?? (e === 'En proceso' && (o.enSesion || SAP0[o.id]) ? 0
    : e === 'Proceso con éxito' ? o.monto
    : e === 'Procesado con errores' ? Math.round(o.monto * (o.val - s.err) / o.val / 10) * 10
    : e === 'En proceso' ? (x < .25 ? 0 : parcial())
    : e === 'Rechazada' ? (x < .55 ? 0 : x < .75 ? o.monto : parcial())
    : x < .85 ? o.monto : parcial());
  return { ...f, est:e, err:s.err || 0, sap: e !== 'En proceso', real, fe: s.fe || o.fe };
}
// Columnas y anchos de CCP (cert, 08/10); salto de línea fijo en la cabecera, como la grilla de Aprobaciones
const COLS_C = [
  ['per', 'Periodo <br>Cont.', f => perC(f.per), 117], ['id', 'Nº <br>Operación', f => f.id, 131], ['arch', 'Nombre del archivo', f => f.archivo, 424],
  ['sol', 'Fecha Solicitud <br>Centralizacion', f => iso(f.sol[0]) + f.sol[1], 173], ['est', 'Estado', f => mayus(estTxt(f)), 210], ['fe', 'Fecha <br>Estado', f => iso(f.fe[0]) + f.fe[1], 112],
  ['monto', 'Monto <br>Debe/Haber', f => f.monto, 146], ['real', 'Monto <br>Real Pago', f => f.real, 114],
];
// En CCP el filtro de estado va por código: Arch. Val. Con Exito también trae las Sol. Validada Con Exito
const estFiltroC = e => mayus(e.replace('Sol. validada con', 'Arch. val. con'));
function listaC() {
  if (!C.buscado || C.buscado.tipo !== 'SOLICITUD DE PAGO' || C.buscado.item !== 'PAGO REEMBOLSO') return [];
  const q = C.filtros, cmp = (a, b) => a < b ? -1 : a > b ? 1 : 0;
  // Periodo y N° operación exactos; nombre "contiene"; fechas día exacto (como cert)
  const filas = OPS.filter(o => o.item === ITEMS[0]).map(filaC).filter(f =>
    (!q.op || String(f.id) === q.op) && (!q.arch || f.archivo.toLowerCase().includes(q.arch.toLowerCase())) &&
    (!q.est || estFiltroC(f.est) === mayus(q.est)) && (!q.per || perC(f.per) === q.per) && (!q.sol || iso(f.sol[0]) === q.sol) && (!q.fe || iso(f.fe[0]) === q.fe));
  const base = (a, b) => b.id - a.id;
  const v = COLS_C.find(([k]) => k === C.orden.col)[2], d = C.orden.dir === 'asc' ? 1 : -1;
  return filas.sort((a, b) => d * cmp(v(a), v(b)) || base(a, b));
}
const chipsFiltroC = () => Object.keys(ETQ_C).filter(k => C.filtros[k]).map(k => [k, ETQ_C[k]]);
const opcionesItem = () => (TIPOS_OP[C.tipo] || []).map(i => `<option ${C.item === i ? 'selected' : ''}>${i}</option>`).join('');
function vCentralizar() {
  const b = C.buscado, lista = listaC(), chips = chipsFiltroC();
  const maxPag = Math.max(0, Math.ceil(lista.length / C.tam) - 1);
  if (C.pag > maxPag) C.pag = maxPag;
  const pagina = lista.slice(C.pag * C.tam, (C.pag + 1) * C.tam);
  const vacio = (t, p) => `<div class="vacio sin-res"><div class="vacio-ic">${ic('buscar')}</div><h3>${t}</h3><p>${p}</p></div>`;
  return `
  <header class="cab-pag"><h1>Centralización de Costos y Solicitudes de Pago</h1>${migas(['Inicio', 'Centralizar/Pagos'])}</header>
  <section class="card card-buscar" aria-labelledby="t-buscar">
    <h2 id="t-buscar">Buscar Centralizaciones o Solicitudes de Pago</h2>
    <div class="fila-buscar">
      <div class="campo"><label for="c-tipo">Tipo de Operación</label><select class="input" id="c-tipo" data-c="c-tipo">
        <option value="">Seleccione Un Tipo</option>${Object.keys(TIPOS_OP).map(t => `<option ${C.tipo === t ? 'selected' : ''}>${t}</option>`).join('')}</select></div>
      <div class="campo"><label for="c-item">Item de Operación</label><select class="input" id="c-item" data-c="c-item" ${C.tipo ? '' : 'disabled'}>
        <option value="">Seleccione un Item</option>${opcionesItem()}</select></div>
      <button class="btn btn-pri" type="button" id="c-buscar" data-a="c-buscar" ${C.tipo && C.item ? '' : 'disabled'}>Buscar</button>
      <button class="btn btn-sec c-cargar" type="button" id="c-cargar" data-a="c-cargar" ${b ? '' : 'disabled'}>${ic('subir')}Cargar archivo</button>
    </div>
  </section>
  <section class="card" aria-labelledby="t-hist-c">
    <div class="tabla-cab">
      <div><h2 id="t-hist-c">Historial de Centralizaciones y Solicitudes de Pago</h2>
        <p>${b ? `Operación seleccionada <span class="lila">${b.tipo} - ${b.item}</span>` : 'No se ha seleccionado operación'}</p></div>
      <div class="acciones"><button class="btn btn-sec c-filtros" type="button" id="c-btn-filtros" data-a="c-filtros" ${b && !C.cargando && (lista.length || chips.length) ? '' : 'disabled'}>Filtros</button></div>
    </div>
    ${chips.length ? `<div class="filtros-aplicados"><span class="etq">Resultados filtrados por:</span>
      ${chips.map(([k, t]) => `<span class="chip-f">${t}<button type="button" data-a="c-quitar-filtro" data-v="${k}" aria-label="Quitar filtro ${t}">${ic('x')}</button></span>`).join('')}
      <button type="button" class="link" data-a="c-limpiar-filtros">Limpiar filtros</button></div>` : ''}
    ${!b ? vacio('Aún no filtras un tipo de operación', 'Selecciona un tipo e ítem de operación')
    : lista.length || C.cargando ? `
    <div class="tabla-scroll" id="scroll-c">
      <table class="tabla t-centralizar" aria-busy="${!!C.cargando}">
        <colgroup>${COLS_C.map(c => `<col style="width:${c[3]}px">`).join('')}<col style="width:96px"></colgroup>
        <thead><tr>
          ${COLS_C.map(([k, t]) => { const a = C.orden.col === k; return `<th scope="col" class="ord${a ? ' activa' : ''}"${a ? ` aria-sort="${C.orden.dir === 'asc' ? 'ascending' : 'descending'}"` : ''}><button type="button" class="orden" id="ordc-${k}" data-a="ordenar-c" data-v="${k}">${t}${CARET}</button></th>`; }).join('')}
          <th scope="col" class="col-acc">Acciones</th>
        </tr></thead>
        <tbody>${C.cargando ? filasSkC(pagina.length || C.tam) : pagina.map(f => `<tr>
          <td>${perC(f.per)}</td>
          <td><span class="con-tip" tabindex="0" data-tip="op" data-id="${f.id}" aria-describedby="tip">${f.id}</span></td>
          <td><span class="arch"><span class="trunc" title="${f.archivo}">${f.archivo}</span><span class="tag-orig">${f.sistema ? 'Por sistema' : 'Manual'}</span></span></td>
          <td>${fechaC(f.sol[0])}</td>
          <td>${estTxt(f)}</td>
          <td>${fechaC(f.fe[0])}</td><td>${miles(f.monto)}</td><td>${miles(f.real)}</td>
          <td class="col-acc"><button type="button" class="kebab" id="accc-${f.id}" data-a="menu" data-m="c" data-id="${f.id}" aria-haspopup="menu" aria-expanded="false" aria-controls="menu" aria-label="Acciones de la OP ${f.id}">${KEBAB}</button></td>
        </tr>`).join('')}</tbody>
      </table>
    </div>
    ${lista.length ? paginador('pc', C.pag, C.tam, lista.length, [10, 20, 50]) : ''}`
    : vacio('No se encontraron resultados', chips.length ? 'Selecciona otro rango de filtrado para encontrar archivos' : 'Intenta cambiar el tipo o ítem de operación')}
  </section>`;
}
// Tooltip de N° Operación, como CCP pero sin la fila de la causal: la causal la registra el aprobador y se ve en el
// Historial de aprobaciones. Lo que aún no existe dice "Pendiente"
function tipOp(f) {
  const pend = '<span class="pend">Pendiente</span>';
  const filas = [['Num. Operación', f.id], ['Total asientos procesados', miles(f.val)], ['Total Mov. Contables', miles(f.val * 2)],
    ['Total asientos correctos (SAP)', f.sap ? miles(f.val - f.err) : pend], ['Total asientos con Error (SAP)', f.sap ? miles(f.err) : pend],
    ['Usuario', f.usuario], ['Canal Origen', f.sistema ? 'AUTOMATICO' : 'MANUAL']];
  return `<dl>${filas.map(([t, v]) => `<div><dt>${t}</dt><dd>${v}</dd></div>`).join('')}</dl>`;
}
function verTip(el) {
  const t = $('#tip');
  // Causal de la Rechazada en el historial: a la derecha del chip, centrado, con punta a la izquierda.
  // Con "Otro" muestra solo el motivo escrito (Figma 13b); con las otras causales, la causal
  if (el.dataset.tip === 'causal') {
    const o = op(el.dataset.id);
    t.className = 'tip causal';
    t.innerHTML = o.causal === 'Otro' && o.motivo ? `<span>${esc(o.motivo)}</span>` : `<b>${esc(o.causal)}</b>`;
    t.hidden = false;
    const r = el.getBoundingClientRect();
    t.style.top = (r.top + r.height / 2 - t.offsetHeight / 2) + 'px';
    t.style.left = Math.min(r.right + 12, innerWidth - t.offsetWidth - 8) + 'px';
    requestAnimationFrame(() => t.classList.add('vis'));
    return;
  }
  t.className = 'tip op'; t.innerHTML = tipOp(filaC(op(el.dataset.id)));
  t.hidden = false;
  const r = el.getBoundingClientRect(), h = t.offsetHeight, w = t.offsetWidth;
  const abajo = r.bottom + 8 + h < innerHeight - 8;
  t.style.top = (abajo ? r.bottom + 8 : r.top - 8 - h) + 'px';
  t.style.left = Math.max(8, Math.min(r.left, innerWidth - w - 8)) + 'px';
  requestAnimationFrame(() => t.classList.add('vis'));
}
function ocultarTip() { const t = $('#tip'); t.classList.remove('vis'); t.hidden = true; }
const SK_C = [55, 40, 80, 50, 70, 60, 60, 40];
const filasSkC = n => Array.from({ length: n }, () => `<tr>${SK_C.map(w => `<td><span class="sk" style="width:${w}%"></span></td>`).join('')}<td class="col-acc"><span class="sk" style="width:24px;margin:0 auto"></span></td></tr>`).join('');
let timerC;
// Filtros está deshabilitado mientras carga: si el foco se perdió al repintar, vuelve a destino al terminar
function cargarC(destino) {
  clearTimeout(timerC); C.cargando = true;
  timerC = setTimeout(() => {
    C.cargando = false; if (S.vista !== 'centralizar') return;
    const fid = document.activeElement?.id || destino;
    render(false); if (fid) enfocar(fid); sombraScroll();
  }, espera(420));
}
// Tipo e ítem se eligen sin repintar la vista; Buscar se habilita con ambos. Cargar archivo se habilita con una operación buscada, como CCP (Javier, 09/10)
function cambioBusqueda(c, v) {
  if (c === 'c-tipo') { C.tipo = v; C.item = ''; const it = $('#c-item'); it.innerHTML = '<option value="">Seleccione un Item</option>' + opcionesItem(); it.disabled = !v; }
  else C.item = v;
  $('#c-buscar').disabled = !(C.tipo && C.item);
}
// Menú de CCP en su orden, deshabilitado lo que no aplica. Se quitan Solicitar Pago y Rechazar Solicitud: aprobar o rechazar la OP
// es facultad del aprobador (Figma CP-03, Javier 14/10). Centralización Diaria, deshabilitada en Solicitud de pago, como hoy en CCP
function menuC(o) {
  const f = filaC(o), it = (a, t, ok) => `<button type="button" role="menuitem" data-a="${ok ? a : 'nada'}" data-id="${f.id}"${ok ? '' : ' aria-disabled="true"'}>${t}</button>`;
  // Descargar Archivo siempre habilitado, también en las OPs por sistema (Javier, 08/10)
  return it('desc-arch', 'Descargar Archivo', true)
    + it('desc-mov', 'Descargar Movimientos con error', /val(\.|idada) con error/i.test(f.est))
    + it('borrar-arch', 'Borrar Archivo', ['ARCHIVO CARGADO', 'ARCH. VAL. CON EXITO', 'ARCH. VAL. CON ERROR'].includes(estFiltroC(f.est)))
    + it('nada', 'Centralización Diaria', false)
    + it('desc-sap', 'Descargar asientos con error SAP', f.est === 'Procesado con errores');
}
function modalFiltrosC() {
  const q = C.filtros;
  abrirModal(`<form class="modal" role="dialog" aria-modal="true" aria-labelledby="m-tit" id="f-filtros-c" novalidate style="width:720px">
    <div class="modal-cab"><h2 id="m-tit">Selección de filtros</h2><p>Seleccione los criterios de búsqueda para encontrar Solicitudes de Pago específicas.</p></div>
    <div class="modal-cuerpo"><div class="grid-f">
      <div class="campo"><label for="fc-per">Periodo</label><input class="input" id="fc-per" maxlength="7" autocomplete="off" placeholder="AAAA-MM" value="${esc(q.per)}"></div>
      <div class="campo"><label for="fc-op">N° Operación</label><input class="input" id="fc-op" inputmode="numeric" maxlength="6" autocomplete="off" value="${esc(q.op)}"></div>
      <div class="campo"><label for="fc-arch">Nombre Archivo</label><input class="input" id="fc-arch" autocomplete="off" value="${esc(q.arch)}"></div>
      <div class="campo"><label for="fc-sol">Fecha Solicitud</label><input class="input" type="date" id="fc-sol" value="${q.sol}" data-cal></div>
      <div class="campo"><label for="fc-est">Estado</label><select class="input" id="fc-est">
        <option value=""></option>${ESTADOS_C.map(e => `<option ${q.est === e ? 'selected' : ''}>${e}</option>`).join('')}</select></div>
      <div class="campo"><label for="fc-fe">Fecha Estado</label><input class="input" type="date" id="fc-fe" value="${q.fe}" data-cal></div>
    </div></div>
    <div class="modal-pie">
      <button class="btn btn-sec" type="button" id="fc-cancelar" data-a="cerrar-modal">Cancelar</button>
      <button class="btn btn-pri" type="submit" id="fc-aplicar" disabled>Filtrar</button>
    </div></form>`, () => { revisarFiltrosC(); $('#fc-per').focus(); });
}
const leerFiltrosC = () => { const v = id => $('#fc-' + id).value.trim(); return { op:v('op'), arch:v('arch'), est:v('est'), per:v('per'), sol:v('sol'), fe:v('fe') }; };
function revisarFiltrosC() {
  const b = $('#fc-aplicar'); if (!b) return;
  const nf = leerFiltrosC(); b.disabled = Object.keys(nf).every(k => nf[k] === (C.filtros[k] || ''));
}
// Sidebar: el ítem activo sigue a la vista
function marcarNav() {
  const enC = S.vista === 'centralizar';
  [['#nav-aprobaciones', !enC], ['#nav-centralizar', enC]].forEach(([sel, a]) => {
    const e = $(sel); e.classList.toggle('activo', a); e.classList.toggle('sec', !a);
    if (a) e.setAttribute('aria-current', 'page'); else e.removeAttribute('aria-current');
  });
}

/* ═══════════ Render y rutas ═══════════ */
function render(anim = true) {
  const v = $('#vista');
  if (anim && S.vista === 'bandeja') cargarBandeja();
  v.innerHTML = S.vista === 'detalle' ? vDetalle() : S.vista === 'centralizar' ? vCentralizar() : vBandeja();
  marcarNav();
  if (S.vista === 'detalle') pintarTabla(anim);
  if (anim) { v.classList.remove('entra'); void v.offsetWidth; v.classList.add('entra'); }
  OPS.forEach(o => { o.anim = false; });
  sombraScroll();
  ubicarToasts();
}
function sombraScroll() {
  document.querySelectorAll('.tabla-scroll').forEach(sc => sc.classList.toggle('desborda', sc.scrollWidth - sc.clientWidth - sc.scrollLeft > 2));
}
function leerHash() {
  const m = (location.hash || '').match(/^#\/op\/(\d+)/);
  if (m && op(m[1])) { S.vista = 'detalle'; S.opId = +m[1]; }
  else if (location.hash === '#/centralizar') { S.vista = 'centralizar'; S.opId = null; }
  else { S.vista = 'bandeja'; S.opId = null; }
}
function ir(hash) {
  try { if (location.hash !== hash) history.pushState(null, '', hash); } catch (e) {}
  if (hash === '#/') { S.vista = 'bandeja'; S.opId = null; }
  else if (hash === '#/centralizar') { S.vista = 'centralizar'; S.opId = null; }
  else { const m = hash.match(/^#\/op\/(\d+)/); S.vista = 'detalle'; S.opId = +m[1]; S.pagD = 0; S.ordenD = { col:null, dir:null }; S.filtrosD = { ...VACIO_D }; }
  cerrarTodo();
  render(true);
  window.scrollTo({ top: 0, behavior: reducido ? 'auto' : 'smooth' });
}
window.addEventListener('popstate', () => { leerHash(); S.pagD = 0; S.ordenD = { col:null, dir:null }; S.filtrosD = { ...VACIO_D }; cerrarTodo(); if (!ocupado) cerrarModal($('#main')); render(true); });

/* ═══════════ Menú de acciones ═══════════ */
let menuBtn = null;
function abrirMenu(btn) {
  cerrarMenu();
  const o = op(btn.dataset.id), pend = o.est === 'Pendiente', rech = o.est === 'Rechazada';
  const m = $('#menu');
  m.classList.toggle('ancho', btn.dataset.m === 'c');
  const dis = pend ? '' : ' aria-disabled="true"';
  m.innerHTML = btn.dataset.m === 'c' ? menuC(o) : `
    <button type="button" role="menuitem" id="m-ver" data-a="ver" data-id="${o.id}">Ver detalle</button>
    <button type="button" role="menuitem" id="m-aprobar" data-a="${pend ? 'aprobar' : 'nada'}" data-id="${o.id}"${dis}>Aprobar</button>
    ${rech // En la Rechazada, "Revocar rechazo" reemplaza a Rechazar (Javier, 09/10)
      ? `<button type="button" role="menuitem" id="m-revocar" data-a="revocar" data-id="${o.id}">Revocar rechazo</button>`
      : `<button type="button" role="menuitem" id="m-rechazar" data-a="${pend ? 'rechazar' : 'nada'}" data-id="${o.id}"${dis}>Rechazar</button>`}`;
  m.hidden = false;
  const r = btn.getBoundingClientRect(), h = m.offsetHeight, w = m.offsetWidth;
  const abajo = r.bottom + 4 + h < innerHeight - 8;
  m.classList.toggle('arriba', !abajo);
  m.style.top = (abajo ? r.bottom + 4 : r.top - 4 - h) + 'px';
  m.style.left = Math.max(8, Math.min(r.right - w, innerWidth - w - 8)) + 'px';
  requestAnimationFrame(() => m.classList.add('vis'));
  btn.setAttribute('aria-expanded', 'true');
  menuBtn = btn;
  m.querySelector('[role=menuitem]').focus({ preventScroll: true });
}
function cerrarMenu(devolverFoco) {
  const m = $('#menu');
  if (m.hidden) return;
  m.classList.remove('vis');
  setTimeout(() => { if (!m.classList.contains('vis')) m.hidden = true; }, 150);
  if (menuBtn) { menuBtn.setAttribute('aria-expanded', 'false'); if (devolverFoco) menuBtn.focus(); }
  menuBtn = null;
}

/* ═══════════ Modales ═══════════ */
let focoPrevio = null, ocupado = false, abiertoEn = 0;
// Mientras el modal se desvanece no acepta confirmaciones ni recibe foco
const modalVisible = () => $('#capa').classList.contains('vis');
// El cuerpo pasa a scroll solo si el contenido supera el alto máximo (con una lista de causales abierta no se recalcula).
// Se observan también sus hijos: con el cuerpo ya en su alto máximo, su caja no cambia cuando el contenido crece (al desplegar "Describe el motivo")
// Se mide con el cuerpo como contenedor de scroll: si no, scrollHeight no suma el padding inferior y, cuando solo ese padding no cabe,
// el último campo queda pegado al pie y sin scroll (Javier, 14/10)
function ajustarScrollModal() {
  const b = $('#capa .modal>.modal-cuerpo, #capa .modal>.linea');
  if (!b || b.querySelector('.combo-lista.vis')) return;
  b.classList.add('con-scroll');
  b.classList.toggle('con-scroll', b.scrollHeight > b.clientHeight + 1);
}
const roModal = new ResizeObserver(ajustarScrollModal);
function abrirModal(html, alMontar) {
  focoPrevio = document.activeElement && document.activeElement.closest('#menu') ? menuBtn : document.activeElement;
  cerrarMenu();
  const c = $('#capa');
  c.innerHTML = html; c.hidden = false; abiertoEn = performance.now();
  roModal.disconnect(); const cuerpo = c.querySelector('.modal>.modal-cuerpo, .modal>.linea'); cuerpo && [cuerpo, ...cuerpo.children].forEach(n => roModal.observe(n));
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => c.classList.add('vis'));
  alMontar && alMontar();
}
function cerrarModal(destinoFoco) {
  const c = $('#capa'); if (c.hidden || ocupado) return;
  c.classList.remove('vis');
  document.body.style.overflow = '';
  setTimeout(() => { if (!c.classList.contains('vis')) { c.hidden = true; c.innerHTML = ''; } }, espera(220));
  const f = destinoFoco || focoPrevio;
  if (f && document.contains(f)) f.focus({ preventScroll: true });
}
function cuerpoResumen(o, sap) {
  return `<dl class="res-m">
    <div><dt>Item de operación</dt><dd>${o.item}</dd></div>
    <div><dt>Monto a pagar</dt><dd>${pesos(o.monto)}</dd></div>
    <div><dt>Total de casos${sap ? ' <span class="sep">·</span> se envían a SAP' : ''}</dt><dd>${miles(o.val)}</dd></div>
    <div><dt>Canal de origen</dt><dd>${o.canal}</dd></div>
  </dl>`;
}
function modalAprobar(id) {
  const o = op(id);
  abrirModal(`<div class="modal" role="dialog" aria-modal="true" aria-labelledby="m-tit" aria-describedby="m-sub">
    <div class="modal-cab"><h2 id="m-tit">Aprobar OP ${o.id}</h2><p id="m-sub">Se envía a SAP y queda registrada con tu usuario, fecha y hora.</p></div>
    <div class="modal-cuerpo">${cuerpoResumen(o, true)}</div>
    <div class="modal-pie">
      <button class="btn btn-sec" type="button" id="m-cancelar" data-a="cerrar-modal">Cancelar</button>
      <button class="btn btn-pri" type="button" id="m-confirmar" data-a="confirmar-aprobar" data-id="${o.id}">Enviar a SAP</button>
    </div></div>`, () => $('#m-cancelar').focus());
}
// Error del sistema (ER1): no se pudo cargar la información; un solo botón, que cierra
function modalErrorSistema() {
  if (ocupado) return;
  abrirModal(`<div class="modal modal-err" role="alertdialog" aria-modal="true" aria-labelledby="m-tit" aria-describedby="m-sub">
    <div class="modal-cab"><span class="err-ic" aria-hidden="true">!</span><h2 id="m-tit">Tuvimos un problema</h2><p id="m-sub">El sistema no responde. Vuelve a intentarlo en unos minutos.</p></div>
    <div class="modal-pie"><button class="btn btn-pri" type="button" id="m-entendido" data-a="cerrar-modal">Entendido</button></div>
  </div>`, () => $('#m-entendido').focus());
}
// Rechazo: causal obligatoria. Con "Otro" se despliega "Describe el motivo", obligatorio, de 10 a 80 caracteres; lo escrito se muestra como la causal (Javier, 14/10)
let R = { causal:'', motivo:'', tocado:false };
function modalRechazar(id) {
  const o = op(id);
  R = { causal:'', motivo:'', tocado:false };
  abrirModal(`<form class="modal" role="dialog" aria-modal="true" aria-labelledby="m-tit" aria-describedby="m-sub" id="f-rechazo" novalidate>
    <div class="modal-cab"><h2 id="m-tit">Rechazar OP ${o.id}</h2><p id="m-sub">Queda registrada con tu usuario, fecha y hora.</p></div>
    <div class="modal-cuerpo">
      ${cuerpoResumen(o, false)}
      <div class="campo">
        <label id="lbl-causal" for="causal-btn">Causal de rechazo</label>
        <div class="combo" id="combo">
          <button type="button" class="combo-btn" id="causal-btn" data-a="combo" aria-haspopup="listbox" aria-expanded="false" aria-controls="causal-lista" aria-labelledby="lbl-causal causal-btn"><span class="ph" id="causal-txt">Selecciona una causal</span>${ic('chevD')}</button>
          <ul class="combo-lista" id="causal-lista" role="listbox" aria-labelledby="lbl-causal" hidden>
            ${CAUSALES.map((c, i) => `<li role="option" id="op-c${i}" data-a="causal" data-v="${c}" aria-selected="false">${c}</li>`).join('')}
          </ul>
        </div>
      </div>
      <div class="plegable" id="pleg-otro"><div>
        <div class="campo">
          <label for="motivo">Describe el motivo</label>
          <textarea class="input" id="motivo" rows="3" maxlength="80" placeholder="Explica qué debe corregir el solicitante" aria-describedby="motivo-msj motivo-cont" tabindex="-1"></textarea>
          <div class="campo-pie"><span id="motivo-msj" aria-live="polite">Mínimo 10 caracteres</span><span id="motivo-cont">0/80</span></div>
        </div>
      </div></div>
    </div>
    <div class="modal-pie">
      <button class="btn btn-sec" type="button" id="m-cancelar" data-a="cerrar-modal">Cancelar</button>
      <button class="btn btn-pri" type="submit" id="m-confirmar" data-id="${o.id}" disabled>Rechazar OP</button>
    </div></form>`, () => $('#causal-btn').focus());
}
let activa = -1;
function comboAbierto() { const l = $('#causal-lista'); return l && !l.hidden; }
function abrirCombo() {
  const l = $('#causal-lista'), b = $('#causal-btn');
  // La lista hace scroll propio: se ajusta al espacio visible y se abre hacia arriba si abajo no cabe
  const r = b.getBoundingClientRect(), abajo = innerHeight - r.bottom - 16, arriba = r.top - 16;
  const subir = abajo < 160 && arriba > abajo;
  l.classList.toggle('arriba', subir);
  l.style.maxHeight = Math.max(120, Math.min(314, subir ? arriba : abajo)) + 'px';
  Object.assign(l.style, { left: r.left + 'px', width: r.width + 'px', top: subir ? 'auto' : r.bottom + 4 + 'px', bottom: subir ? innerHeight - r.top + 4 + 'px' : 'auto' });
  // Si el cuerpo hace scroll, el campo se mueve y la lista no: se cierra
  l.closest('.modal-cuerpo').addEventListener('scroll', cerrarCombo, { once: true, passive: true });
  l.hidden = false; b.setAttribute('aria-expanded', 'true');
  requestAnimationFrame(() => l.classList.add('vis'));
  marcarActiva(Math.max(0, CAUSALES.indexOf(R.causal)));
}
function cerrarCombo() {
  const l = $('#causal-lista'), b = $('#causal-btn'); if (!l || l.hidden) return;
  l.classList.remove('vis'); l.hidden = true;
  b.setAttribute('aria-expanded', 'false'); b.removeAttribute('aria-activedescendant');
  ajustarScrollModal();
}
function marcarActiva(i) {
  activa = (i + CAUSALES.length) % CAUSALES.length;
  document.querySelectorAll('#causal-lista li').forEach((li, k) => li.classList.toggle('activa', k === activa));
  const l = $('#causal-lista'), li = l.children[activa];
  if (li.offsetTop < l.scrollTop) l.scrollTop = li.offsetTop;
  else if (li.offsetTop + li.offsetHeight > l.scrollTop + l.clientHeight) l.scrollTop = li.offsetTop + li.offsetHeight - l.clientHeight;
  $('#causal-btn').setAttribute('aria-activedescendant', 'op-c' + activa);
}
function elegirCausal(v) {
  R.causal = v;
  const t = $('#causal-txt'); t.textContent = v; t.classList.remove('ph');
  document.querySelectorAll('#causal-lista li').forEach(li => {
    const sel = li.dataset.v === v;
    li.setAttribute('aria-selected', sel);
    li.innerHTML = esc(li.dataset.v) + (sel ? ic('tick') : '');
  });
  cerrarCombo();
  // Con "Otro" se despliega "Describe el motivo" y recibe el foco; con las otras causales se pliega y el foco vuelve a la causal
  const otro = v === 'Otro', mot = $('#motivo');
  $('#pleg-otro').classList.toggle('abierto', otro);
  mot.tabIndex = otro ? 0 : -1;
  if (otro) setTimeout(() => mot.focus(), espera(200)); else $('#causal-btn').focus();
  validarRechazo();
}
// Los errores se muestran al salir del campo con algo escrito, o al llegar al mínimo; los espacios al inicio y al final no cuentan
function validarRechazo() {
  const mot = R.motivo.trim(), otro = R.causal === 'Otro';
  $('#m-confirmar').disabled = !(R.causal && (!otro || mot.length >= 10));
  const err = otro && R.tocado && mot.length < 10, i = $('#motivo'), m = $('#motivo-msj');
  m.textContent = err ? 'Escribe al menos 10 caracteres.' : 'Mínimo 10 caracteres';
  m.classList.toggle('err', err); i.classList.toggle('invalido', err); i.setAttribute('aria-invalid', err);
  $('#motivo-cont').textContent = mot.length + '/80';
}
// Revocar rechazo (Javier, 09/10): sin motivo; la OP vuelve a Pendiente y queda el registro de quién y cuándo
function modalRevocar(id) {
  const o = op(id), u = o.ev[o.ev.length - 1];
  abrirModal(`<div class="modal" role="dialog" aria-modal="true" aria-labelledby="m-tit" aria-describedby="m-sub">
    <div class="modal-cab"><h2 id="m-tit">Revocar rechazo OP ${o.id}</h2><p id="m-sub">La OP vuelve a Pendiente. Queda registrada con tu usuario, fecha y hora.</p></div>
    <div class="modal-cuerpo"><dl class="res-m">
      <div><dt>Rechazada por</dt><dd>${esc(u.por)}</dd></div>
      <div><dt>Fecha de rechazo</dt><dd>${f4(u.fe[0])} <span class="sep">·</span> ${u.fe[1]} hrs.</dd></div>
      <div class="full"><dt>Causal</dt><dd>${esc(causalTxt(u))}</dd></div>
    </dl></div>
    <div class="modal-pie">
      <button class="btn btn-sec" type="button" id="m-cancelar" data-a="cerrar-modal">Cancelar</button>
      <button class="btn btn-pri" type="button" id="m-confirmar" data-a="confirmar-revocar" data-id="${o.id}">Revocar</button>
    </div></div>`, () => $('#m-cancelar').focus());
}
// Historial de decisiones (Javier, 09/10): la más reciente arriba y "Llegó para aprobación" al final. Se cierra con la X, sin botones
function modalHistorial(id) {
  const o = op(id), quien = (p, [d, h]) => `${esc(p)} <span class="sep">·</span> ${f4(d)} <span class="sep">·</span> ${h} hrs.`;
  const pasos = [...o.ev].reverse().map(e => ({ hito: e.est === 'Revocado' ? 'Pendiente' : e.est, acc: accionTxt(e), quien: quien(e.por, e.fe), causal: e.est === 'Rechazada' ? causalTxt(e) : '' }))
    .concat({ hito:'Pendiente', acc:'Llegó para aprobación', quien: quien(o.canal, o.sol), causal:'' });
  abrirModal(`<div class="modal" role="dialog" aria-modal="true" aria-labelledby="m-tit">
    <div class="hist-cab"><div><h2 id="m-tit">Historial de decisiones</h2><p>OP ${o.id} <span class="sep">·</span> Estado actual ${chip(o.est)}</p></div>
      <button type="button" class="cerrar" id="m-cerrar" data-a="cerrar-modal" aria-label="Cerrar">${ic('x')}</button></div>
    <ol class="linea">${pasos.map(p => `<li class="paso"><span class="riel" aria-hidden="true"><span class="hito ${p.hito}"></span><i></i></span>
      <div class="paso-c"><b>${p.acc}</b><span>${p.quien}</span>${p.causal ? `<div class="caja-causal"><p>Causal: <b>${esc(p.causal)}</b></p></div>` : ''}</div></li>`).join('')}</ol>
  </div>`, () => $('#m-cerrar').focus());
}
// Selects de los datos de negocio del detalle (no van en el historial: son datos de cada transacción, no de la OP)
// Opciones según el item (como las notas de filtros de Figma); Reembolsos no lleva Causal de emisión
const selNegocio = (f, n) => [['ben', 'Tipo de beneficio', n.ben], ['cau', 'Causal de emisión', n.cau], ['con', 'Concepto', n.con]]
  .filter(([, , ops]) => ops).map(([k, etq, ops]) => `<div class="campo"><label for="fd-${k}">${etq}</label><select class="input" id="fd-${k}">
        <option value="">Selecciona</option>${ops.map(v => `<option ${f[k] === v ? 'selected' : ''}>${v}</option>`).join('')}</select></div>`).join('\n      ');
// Filtros del detalle: mismo patrón que la bandeja (Aplicar se habilita solo si hay cambios)
function modalFiltrosD() {
  const f = S.filtrosD;
  abrirModal(`<form class="modal" role="dialog" aria-modal="true" aria-labelledby="m-tit" id="f-filtros-d" novalidate style="width:720px">
    <div class="modal-cab"><h2 id="m-tit">Selección de filtros</h2><p>Filtra las transacciones de la OP ${S.opId}.</p></div>
    <div class="modal-cuerpo"><div class="grid-f">
      <div class="campo"><label for="fd-asiento">N° asiento</label><input class="input" id="fd-asiento" inputmode="numeric" maxlength="3" autocomplete="off" placeholder="Ej: 25" value="${esc(f.asiento)}"></div>
      ${selNegocio(f, negocioDe(op(S.opId).item))}
      <div class="campo"><label for="fd-cc">N° cuenta contable</label><input class="input" id="fd-cc" inputmode="numeric" maxlength="10" autocomplete="off" placeholder="Ej: 2102300001" value="${esc(f.cc)}"></div>
      <div class="campo"><label for="fd-cli">Código cliente</label><input class="input" id="fd-cli" maxlength="12" autocomplete="off" placeholder="Ej: I15521774K" value="${esc(f.cli)}"></div>
      <div class="campo"><label for="fd-banco">Clave banco</label><input class="input" id="fd-banco" inputmode="numeric" maxlength="3" autocomplete="off" placeholder="Ej: 037" value="${esc(f.banco)}"></div>
      <div class="campo"><label for="fd-cuenta">Cuenta bancaria</label><input class="input" id="fd-cuenta" inputmode="numeric" maxlength="12" autocomplete="off" placeholder="Ej: 57974882" value="${esc(f.cuenta)}"></div>
    </div></div>
    <div class="modal-pie">
      <button class="btn btn-sec" type="button" id="fd-cancelar" data-a="cerrar-modal">Cancelar</button>
      <button class="btn btn-pri" type="submit" id="fd-aplicar" disabled>Aplicar filtros</button>
    </div></form>`, () => $('#fd-asiento').focus());
}
const leerFiltrosD = () => { const v = id => $('#fd-' + id)?.value.trim() || ''; return { asiento:v('asiento'), cc:v('cc'), cli:v('cli'), banco:v('banco'), cuenta:v('cuenta'), ben:v('ben'), cau:v('cau'), con:v('con') }; };
function revisarFiltrosD() {
  const b = $('#fd-aplicar'); if (!b) return;
  const nf = leerFiltrosD(); b.disabled = Object.keys(nf).every(k => nf[k] === S.filtrosD[k]);
}
function modalFiltros() {
  const f = S.filtros;
  abrirModal(`<form class="modal" role="dialog" aria-modal="true" aria-labelledby="m-tit" id="f-filtros" novalidate style="width:720px">
    <div class="modal-cab"><h2 id="m-tit">Selección de filtros</h2><p>Filtra el historial de aprobaciones.</p></div>
    <div class="modal-cuerpo"><div class="grid-f">
      <!-- Solo columnas del historial, en su mismo orden (Javier, 13/10) -->
      <div class="campo"><label for="f-per">Periodo contable</label><select class="input" id="f-per">
        <option value="">Selecciona</option>${PERIODOS.map(p => `<option value="${p.v}" ${f.per === p.v ? 'selected' : ''}>${p.t}</option>`).join('')}</select></div>
      <div class="campo"><label for="f-op">N° operación</label><input class="input" id="f-op" inputmode="numeric" maxlength="6" autocomplete="off" placeholder="Ej: 11696" value="${esc(f.op)}"></div>
      <div class="campo"><label for="f-canal">Canal de origen</label><select class="input" id="f-canal">
        <option value="">Selecciona</option>${['Sistema', 'Manual'].map(c => `<option ${f.canal === c ? 'selected' : ''}>${c}</option>`).join('')}</select></div>
      <div class="campo"><label for="f-sol">Fecha solicitud centralizador</label><input class="input" type="date" id="f-sol" value="${f.sol}" aria-describedby="f-sol-nota" data-cal><p class="campo-nota" id="f-sol-nota" aria-live="polite"></p></div>
      <div class="campo"><label for="f-est">Estado aprobación</label><select class="input" id="f-est">
        <option value="">Selecciona</option>${['Pendiente', 'Aprobada', 'Rechazada'].map(e => `<option ${f.est === e ? 'selected' : ''}>${e}</option>`).join('')}</select></div>
      <div class="campo"><label for="f-fe">Fecha estado</label><input class="input" type="date" id="f-fe" value="${f.fe}" aria-describedby="f-fe-nota" data-cal><p class="campo-nota" id="f-fe-nota" aria-live="polite"></p></div>
    </div></div>
    <div class="modal-pie">
      <button class="btn btn-sec" type="button" id="f-cancelar" data-a="cerrar-modal">Cancelar</button>
      <button class="btn btn-pri" type="submit" id="f-aplicar" disabled>Aplicar filtros</button>
    </div></form>`, () => { ajustarFechas(); revisarFiltros(); $('#f-per').focus(); });
}
// Aplicar filtros se habilita solo si el formulario cambia respecto de los filtros aplicados (Figma F2/F3)
const leerFiltros = () => { const v = id => $('#' + id).value; return { op:v('f-op').trim(), est:v('f-est'), per:v('f-per'), sol:v('f-sol'), fe:v('f-fe'), canal:v('f-canal') }; };
function revisarFiltros() {
  const b = $('#f-aplicar'); if (!b) return;
  const nf = leerFiltros(); b.disabled = Object.keys(nf).every(k => nf[k] === (S.filtros[k] || ''));
}
/* Fechas del filtro: el periodo acota el calendario (abre en ese mes); sin periodo, abre en el mes en curso.
   Fecha Estado nunca es anterior a Fecha Solicitud. Una fecha que queda fuera se quita y se avisa. */
const rangoFechas = per => {
  const hoy = iso(HOY);
  if (!per) { const [m, a] = PERIODOS[PERIODOS.length - 1].v.split('/'); return [`20${a}-${m}-01`, hoy]; }
  const [m, a] = per.split('/'), fin = `20${a}-${m}-${new Date(+`20${a}`, +m, 0).getDate()}`;
  return [`20${a}-${m}-01`, fin < hoy ? fin : hoy];
};
function ajustarFechas(origen) {
  const per = $('#f-per').value, [ini, fin] = rangoFechas(per), sol = $('#f-sol'), fe = $('#f-fe');
  const nota = (i, t) => { $('#' + i.id + '-nota').textContent = t; };
  if (origen) [sol, fe].forEach(i => nota(i, ''));
  [sol, fe].forEach(i => {
    if (i.value && (i.value < ini || i.value > fin)) {
      i.value = '';
      nota(i, per && origen === 'f-per' ? `Se quitó la fecha: no está en ${periodoTxt(per).toLowerCase()}.` : `Elige una fecha entre ${corta(ini)} y ${corta(fin)}.`);
    }
  });
  if (sol.value && fe.value && fe.value < sol.value) {
    const quitar = origen === 'f-fe' ? fe : sol; quitar.value = '';
    nota(quitar, quitar === fe ? 'Se quitó: es anterior a la fecha de solicitud.' : 'Se quitó: es posterior a la fecha de estado.');
  }
  sol.min = ini; sol.max = fe.value || fin;
  fe.min = sol.value || ini; fe.max = fin;
}

function abrirCalendario(i) { try { i.showPicker(); } catch (e) {} }
document.addEventListener('mousedown', ev => { if (ev.target.matches?.('[data-cal]')) { ev.preventDefault(); ev.target.focus(); abrirCalendario(ev.target); } });

/* ═══════════ Decisiones ═══════════ */
function horaAhora() { const d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
// est = 'Pendiente' es revocar un rechazo. Cada decisión queda como evento; Fecha estado = la de la última decisión (Javier, 09/10)
function decidir(id, est, causal = '', motivo = '') {
  const o = op(id), fe = [HOY, horaAhora()];
  if (filtradas().includes(o)) S.retener.add(o.id);
  o.ev.push({ est: est === 'Pendiente' ? 'Revocado' : est, por:USUARIO, fe:[...fe], causal, motivo });
  Object.assign(o, { est, fe, por:USUARIO, causal, motivo, anim:true, enSesion:true });
  const barra = $('#barra-decision');
  const pintar = () => {
    ocupado = false;
    const eraDetalle = S.vista === 'detalle';
    cerrarModal(eraDetalle ? $('h1') : null);
    render(false);
    if (!eraDetalle) { const k = $('#acc-' + id) || $('#btn-filtros'); if (k) k.focus({ preventScroll: true }); }
    // Desde el detalle se vuelve al inicio de la página para ver el estado actualizado junto al snackbar (Javier, 07/10)
    else { $('h1').setAttribute('tabindex', '-1'); $('h1').focus({ preventScroll: true }); window.scrollTo({ top: 0, behavior: reducido ? 'auto' : 'smooth' }); }
    toast(est === 'Aprobada' ? `La OP ${id} se aprobó y se envió a SAP` : est === 'Rechazada' ? `La OP ${id} se rechazó` : `La OP ${id} volvió a Pendiente`, 'ok');
  };
  if (barra && S.vista === 'detalle') { barra.classList.add('saliendo'); setTimeout(pintar, espera(120)); } else pintar();
}
function ocupar(btn, texto) {
  ocupado = true; btn._html = btn.innerHTML;
  $('#aviso-error')?.remove();
  btn.disabled = false; btn.setAttribute('aria-disabled', 'true'); btn.style.pointerEvents = 'none';
  btn.style.minWidth = btn.offsetWidth + 'px'; btn.setAttribute('aria-busy', 'true');
  btn.innerHTML = `<svg class="cargador" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/></svg><span class="sr">${texto}</span>`;
  $('#m-cancelar').setAttribute('aria-disabled', 'true');
}
function liberar(btn) {
  btn.innerHTML = btn._html; btn.style.minWidth = btn.style.pointerEvents = '';
  btn.removeAttribute('aria-busy'); btn.removeAttribute('aria-disabled');
  $('#m-cancelar').removeAttribute('aria-disabled');
  ocupado = false;
}
// Error de una acción (ER2, ER3): el modal sigue abierto con lo ingresado y un aviso de error; el botón principal reintenta
function falloAccion(btn, msg) {
  liberar(btn);
  const cuerpo = $('#capa .modal-cuerpo');
  cuerpo.insertAdjacentHTML('beforeend', `<div class="alerta error nueva" id="aviso-error" role="alert"><div class="alerta-m"><span class="ic-err">${XCIRC}</span><div class="alerta-t"><p>${msg}</p></div></div></div>`);
  ajustarScrollModal();
  cuerpo.scrollTo({ top: cuerpo.scrollHeight, behavior: reducido ? 'auto' : 'smooth' });
  btn.focus({ preventScroll: true });
}

// Exportar: el botón muestra carga, mantiene su ancho y al terminar avisa con snackbar de éxito (o de error, ER4)
function exportando(btn, msg) {
  if (btn.getAttribute('aria-busy') === 'true') return;
  const id = btn.id, html = btn.innerHTML, clave = id === 'btn-exportar-det' ? 'detalle-' + S.opId : 'historial';
  btn.style.minWidth = btn.offsetWidth + 'px';
  btn.setAttribute('aria-busy', 'true'); btn.setAttribute('aria-disabled', 'true'); btn.style.pointerEvents = 'none';
  btn.innerHTML = '<svg class="arco" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="9"/></svg><span class="sr">Exportando…</span>';
  setTimeout(() => {
    const b = $('#' + id);
    if (b && b.getAttribute('aria-busy') === 'true') {
      b.innerHTML = html; b.style.minWidth = b.style.pointerEvents = '';
      b.removeAttribute('aria-busy'); b.removeAttribute('aria-disabled');
    }
    if (falla('exportar', clave)) toast('No pudimos descargar el archivo. Vuelve a intentarlo.', 'error'); else toast(msg, 'ok');
  }, espera(1200));
}

/* ═══════════ Toasts ═══════════ */
// Arriba a la derecha, 24 px bajo el header
function ubicarToasts() {
  const c = $('.cabecera');
  $('#toasts').style.top = (c ? Math.max(c.getBoundingClientRect().bottom, 0) : 0) + 24 + 'px';
}
addEventListener('scroll', () => { if ($('#toasts').childElementCount) ubicarToasts(); }, { passive: true });
function toast(msg, tipo = 'ok') {
  const t = document.createElement('div');
  t.className = 'toast ' + tipo;
  t.innerHTML = (tipo === 'error' ? `<span class="ic-err">${XCIRC}</span>` : ic(tipo === 'ok' ? 'check' : 'info')) + `<span>${esc(msg)}</span>`;
  ubicarToasts();
  $('#toasts').append(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('vis')));
  setTimeout(() => { t.classList.remove('vis'); setTimeout(() => t.remove(), 300); }, 5000);
}

/* ═══════════ Lateral ═══════════ */
const movil = () => innerWidth <= 1100;
function lateral(abrir) {
  const l = $('#lateral'), s = $('#lat-scrim');
  l.classList.toggle('abierto', abrir); s.classList.toggle('vis', abrir);
  l.inert = movil() && !abrir;
  $('#btn-hamb').setAttribute('aria-expanded', abrir);
  if (abrir) $('#btn-lat').focus();
}
function cerrarTodo() { cerrarMenu(); if (movil()) lateral(false); }

/* ═══════════ Acciones ═══════════ */
const ACC = {
  'ir-bandeja': (el, ev) => { ev.preventDefault(); ir('#/'); },
  menu: el => (menuBtn === el ? cerrarMenu() : abrirMenu(el)),
  ver: el => ir('#/op/' + el.dataset.id),
  aprobar: el => modalAprobar(el.dataset.id),
  rechazar: el => modalRechazar(el.dataset.id),
  revocar: el => modalRevocar(el.dataset.id),
  historial: () => modalHistorial(S.opId),
  nada: () => {},
  'cerrar-modal': () => cerrarModal(),
  'confirmar-aprobar': el => { if (ocupado || !modalVisible()) return; ocupar(el, 'Enviando a SAP…'); setTimeout(() => (falla('aprobar', el.dataset.id) ? falloAccion(el, 'No pudimos registrar la aprobación. Vuelve a intentarlo.') : decidir(+el.dataset.id, 'Aprobada')), espera(1200)); },
  'confirmar-revocar': el => { if (ocupado || !modalVisible()) return; ocupar(el, 'Revocando…'); setTimeout(() => (falla('revocar', el.dataset.id) ? falloAccion(el, 'No pudimos revocar el rechazo. Vuelve a intentarlo.') : decidir(+el.dataset.id, 'Pendiente')), espera(800)); },
  combo: () => (comboAbierto() ? cerrarCombo() : abrirCombo()),
  causal: el => elegirCausal(el.dataset.v),
  ordenar: el => {
    const k = el.dataset.v, o = S.orden;
    S.orden = { col:k, dir: o.col === k && o.dir === 'asc' ? 'desc' : 'asc' }; S.pagB = 0;
    cargarBandeja(); render(false); $('#ord-' + k)?.focus({ preventScroll: true });
  },
  'ordenar-det': el => {
    const k = el.dataset.v, o = S.ordenD, x = $('#scroll-d')?.scrollLeft || 0;
    S.ordenD = { col:k, dir: o.col === k && o.dir === 'asc' ? 'desc' : 'asc' }; S.pagD = 0;
    pintarTabla(true); const sc = $('#scroll-d'); if (sc) sc.scrollLeft = x; $('#ordd-' + k)?.focus({ preventScroll: true });
  },
  'pb-pag': el => { S.pagB += +el.dataset.v; cargarBandeja(); render(false); enfocar(el.id); verTabla('#scroll-b'); },
  'pd-pag': el => { S.pagD += +el.dataset.v; pintarTabla(true); enfocar(el.id); verTabla('#panel-tx'); },
  filtros: () => modalFiltros(),
  'filtros-det': () => modalFiltrosD(),
  'quitar-filtro-det': el => { S.filtrosD[el.dataset.v] = ''; S.pagD = 0; pintarTabla(true); $('#btn-filtros-det')?.focus(); },
  'limpiar-filtros-det': () => { S.filtrosD = { ...VACIO_D }; S.pagD = 0; pintarTabla(true); $('#btn-filtros-det')?.focus(); },
  'b-buscar': () => { S.item = S.itemSel; S.filtros = { ...VACIO }; S.retener.clear(); S.pagB = 0; cargarBandeja(); render(false); $('#b-buscar')?.focus({ preventScroll: true }); },
  'c-buscar': () => { C.buscado = { tipo:C.tipo, item:C.item }; C.pag = 0; C.orden = { col:'id', dir:'desc' }; C.filtros = { ...VACIO_C }; cargarC(); render(false); $('#c-buscar')?.focus({ preventScroll: true }); },
  'ordenar-c': el => { const k = el.dataset.v, o = C.orden; C.orden = { col:k, dir: o.col === k && o.dir === 'asc' ? 'desc' : 'asc' }; C.pag = 0; cargarC(); render(false); $('#ordc-' + k)?.focus({ preventScroll: true }); },
  'pc-pag': el => { C.pag += +el.dataset.v; cargarC(); render(false); enfocar(el.id); verTabla('#scroll-c'); },
  'c-filtros': () => modalFiltrosC(),
  'c-quitar-filtro': el => { C.filtros[el.dataset.v] = ''; C.pag = 0; cargarC('c-btn-filtros'); render(false); },
  'c-limpiar-filtros': () => { C.filtros = { ...VACIO_C }; C.pag = 0; cargarC('c-btn-filtros'); render(false); },
  'desc-arch': () => { cerrarMenu(true); toast('Su documento se esta descargando', 'info'); },
  'borrar-arch': () => { cerrarMenu(true); toast('Borrar Archivo no está disponible en el prototipo', 'info'); },
  'desc-mov': () => { cerrarMenu(true); toast('Se ha generado su documento exitosamente', 'ok'); },
  'desc-sap': () => { cerrarMenu(true); toast('Se ha generado su documento exitosamente', 'ok'); },
  'c-cargar': () => toast('Cargar archivo no está disponible en el prototipo', 'info'),
  'quitar-filtro': el => { S.filtros[el.dataset.v] = ''; S.retener.clear(); S.pagB = 0; cargarBandeja(); render(false); $('#btn-filtros')?.focus(); },
  'limpiar-filtros': () => { S.filtros = { ...VACIO }; S.retener.clear(); S.pagB = 0; cargarBandeja(); render(false); $('#btn-filtros')?.focus(); },
  exportar: el => exportando(el, 'Se descargó HistorialAprobaciones_06102026.xlsx'),
  // En pantalla, una fila por asiento; el Excel lleva 2 filas por asiento (debe y haber), como va a SAP (Javier, 07/10)
  'exportar-det': el => exportando(el, `Se descargó Detalle_OP_${S.opId}.xlsx`),
};

document.addEventListener('click', ev => {
  const el = ev.target.closest('[data-a]');
  if (!ev.target.closest('#menu') && !(el && el.dataset.a === 'menu')) cerrarMenu();
  if (comboAbierto() && !ev.target.closest('#combo')) cerrarCombo();
  if (ev.target.id === 'capa') { if (!ocupado && ev.detail < 2 && performance.now() - abiertoEn > 400) cerrarModal(); return; }
  if (!el) return;
  const f = ACC[el.dataset.a];
  if (f) f(el, ev);
});
document.addEventListener('change', ev => {
  const c = ev.target.dataset.c;
  if (c === 'pb-tam') { S.tamB = +ev.target.value; S.pagB = 0; cargarBandeja(); render(false); $('#pb-tam')?.focus(); }
  if (c === 'pc-tam') { C.tam = +ev.target.value; C.pag = 0; cargarC(); render(false); $('#pc-tam')?.focus(); }
  if (c === 'c-tipo' || c === 'c-item') cambioBusqueda(c, ev.target.value);
  if (c === 'b-item') { S.itemSel = ev.target.value; $('#b-buscar').disabled = !S.itemSel; }
  if (ev.target.closest?.('#f-filtros-c')) revisarFiltrosC();
  if (c === 'pd-tam') { S.tamD = +ev.target.value; S.pagD = 0; pintarTabla(true); $('#pd-tam')?.focus(); }
  if (['f-per', 'f-sol', 'f-fe'].includes(ev.target.id)) ajustarFechas(ev.target.id);
  if (ev.target.closest?.('#f-filtros')) revisarFiltros();
});
document.addEventListener('input', ev => {
  if (ev.target.id === 'motivo') { R.motivo = ev.target.value; if (R.motivo.trim().length >= 10) R.tocado = true; validarRechazo(); }
  if (ev.target.id === 'f-op') { ev.target.value = ev.target.value.replace(/\D/g, ''); revisarFiltros(); }
  if (ev.target.id === 'fc-op') ev.target.value = ev.target.value.replace(/\D/g, '');
  if (['fd-asiento', 'fd-cc', 'fd-banco', 'fd-cuenta'].includes(ev.target.id)) ev.target.value = ev.target.value.replace(/\D/g, '');
  if (ev.target.closest?.('#f-filtros-d')) revisarFiltrosD();
  if (ev.target.closest?.('#f-filtros-c')) revisarFiltrosC();
});
// Tooltips (N° Operación en Centralizar y causal de la Rechazada en el historial): hover y foco de teclado
document.addEventListener('mouseover', ev => { const el = ev.target.closest?.('[data-tip]'); if (el && !el.contains(ev.relatedTarget)) verTip(el); });
document.addEventListener('mouseout', ev => { const el = ev.target.closest?.('[data-tip]'); if (el && !el.contains(ev.relatedTarget)) ocultarTip(); });
document.addEventListener('focusin', ev => { if (ev.target.dataset?.tip) verTip(ev.target); });
document.addEventListener('focusout', ev => { if (ev.target.dataset?.tip) ocultarTip(); });
document.addEventListener('focusout', ev => {
  if (ev.target.id === 'motivo' && R.motivo.length) { R.tocado = true; validarRechazo(); }
});
document.addEventListener('submit', ev => {
  ev.preventDefault();
  if (ev.target.id === 'f-rechazo') {
    const b = $('#m-confirmar'); if (b.disabled || ocupado || !modalVisible()) return;
    ocupar(b, 'Rechazando…');
    // Se registra la causal elegida; con "Otro", también el motivo escrito
    const causal = R.causal, motivo = R.causal === 'Otro' ? R.motivo.trim() : '';
    setTimeout(() => (falla('rechazar', b.dataset.id) ? falloAccion(b, 'No pudimos registrar el rechazo. Vuelve a intentarlo.') : decidir(+b.dataset.id, 'Rechazada', causal, motivo)), espera(800));
  }
  if (ev.target.id === 'f-filtros-c') {
    if ($('#fc-aplicar').disabled) return;
    C.filtros = leerFiltrosC(); C.pag = 0;
    cerrarModal($('#c-btn-filtros'));
    cargarC('c-btn-filtros'); render(false);
  }
  if (ev.target.id === 'f-filtros-d') {
    if ($('#fd-aplicar').disabled) return;
    S.filtrosD = leerFiltrosD(); S.pagD = 0;
    cerrarModal($('#btn-filtros-det'));
    pintarTabla(true);
    $('#btn-filtros-det')?.focus({ preventScroll: true });
  }
  if (ev.target.id === 'f-filtros') {
    if ($('#f-aplicar').disabled) return;
    S.filtros = leerFiltros(); S.retener.clear(); S.pagB = 0;
    cerrarModal($('#btn-filtros'));
    cargarBandeja(); render(false);
    $('#btn-filtros')?.focus({ preventScroll: true });
  }
});

document.addEventListener('keydown', ev => {
  const capa = $('#capa');
  // Fechas del filtro: se eligen solo con el calendario (Enter/Espacio/↓ lo abren, Supr/Retroceso la borra)
  if (ev.target.matches?.('[data-cal]') && !['Tab', 'Escape'].includes(ev.key)) {
    ev.preventDefault();
    if (['Enter', ' ', 'ArrowDown'].includes(ev.key)) abrirCalendario(ev.target);
    if (['Delete', 'Backspace'].includes(ev.key) && ev.target.value) { ev.target.value = ''; if (ev.target.closest('#f-filtros')) { ajustarFechas(ev.target.id); revisarFiltros(); } else revisarFiltrosC(); }
    return;
  }
  // Combo de causales
  if (ev.target.id === 'causal-btn') {
    const abierto = comboAbierto();
    if (['ArrowDown', 'ArrowUp'].includes(ev.key)) { ev.preventDefault(); if (!abierto) abrirCombo(); else marcarActiva(activa + (ev.key === 'ArrowDown' ? 1 : -1)); return; }
    if ((ev.key === 'Enter' || ev.key === ' ') && abierto) { ev.preventDefault(); elegirCausal(CAUSALES[activa]); return; }
    if (ev.key === 'Home' && abierto) { ev.preventDefault(); marcarActiva(0); return; }
    if (ev.key === 'End' && abierto) { ev.preventDefault(); marcarActiva(CAUSALES.length - 1); return; }
    if (ev.key === 'Escape' && abierto) { ev.preventDefault(); cerrarCombo(); return; }
    if (ev.key === 'Tab' && abierto) cerrarCombo();
  }
  // Menú de fila
  if (!$('#menu').hidden && ev.target.closest('#menu')) {
    const items = [...document.querySelectorAll('#menu [role=menuitem]')];
    const i = items.indexOf(document.activeElement);
    if (ev.key === 'ArrowDown') { ev.preventDefault(); items[(i + 1) % items.length].focus(); return; }
    if (ev.key === 'ArrowUp') { ev.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); return; }
    if (ev.key === 'Tab') { ev.preventDefault(); cerrarMenu(true); return; }
  }
  if (ev.key === 'Escape') {
    if (!capa.hidden) { if (!ocupado) cerrarModal(); return; }
    if (!$('#menu').hidden) { cerrarMenu(true); return; }
    if ($('#lateral').classList.contains('abierto')) { lateral(false); $('#btn-hamb').focus(); return; }
  }
  // Trampa de foco del modal
  if (ev.key === 'Tab' && !capa.hidden && modalVisible()) {
    const f = [...capa.querySelectorAll('button:not([disabled]),input,select,textarea:not([tabindex="-1"]),[tabindex="0"]')].filter(e => e.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (!capa.contains(document.activeElement)) { ev.preventDefault(); (ev.shiftKey ? last : first).focus(); return; }
    if (ev.shiftKey && document.activeElement === first) { ev.preventDefault(); last.focus(); }
    else if (!ev.shiftKey && document.activeElement === last) { ev.preventDefault(); first.focus(); }
  }
});

window.addEventListener('resize', () => { cerrarMenu(); cerrarCombo(); sombraScroll(); if (!movil()) { $('#lateral').classList.remove('abierto'); $('#lat-scrim').classList.remove('vis'); } $('#lateral').inert = movil() && !$('#lateral').classList.contains('abierto'); });
window.addEventListener('scroll', () => { cerrarMenu(); }, { passive: true });
document.addEventListener('scroll', ev => { ocultarTip(); if (ev.target.classList && ev.target.classList.contains('tabla-scroll')) { cerrarMenu(); sombraScroll(); } }, true);

/* ═══════════ Shell ═══════════ */
$('#btn-hamb').innerHTML = ic('hamb');
$('#campana').insertAdjacentHTML('afterbegin', ic('campana'));
$('#btn-salir').insertAdjacentHTML('beforeend', ic('salir'));
$('#btn-lat').innerHTML = ic('atras');
$('#btn-escritorio').innerHTML = ic('chevD') + '<span>Escritorio de Trabajo</span>';
$('#nav-aprobaciones').innerHTML = ic('pantalla') + '<span>Aprobaciones de Pago</span>';
document.querySelectorAll('[data-mod]').forEach(a => {
  a.innerHTML = ic('pantalla') + `<span>${a.dataset.mod}</span>`;
  a.addEventListener('click', ev => { ev.preventDefault(); toast(`${a.dataset.mod} no está disponible en el prototipo`, 'info'); });
});
$('#logo').addEventListener('click', ev => { ev.preventDefault(); ir('#/'); });
$('#nav-aprobaciones').addEventListener('click', ev => { ev.preventDefault(); ir('#/'); });
$('#nav-centralizar').innerHTML = ic('pantalla') + '<span>Centralizar/Pagos</span>';
$('#nav-centralizar').addEventListener('click', ev => { ev.preventDefault(); ir('#/centralizar'); });
$('#btn-hamb').addEventListener('click', () => lateral(true));
$('#lat-scrim').addEventListener('click', () => lateral(false));
$('#btn-lat').addEventListener('click', () => {
  if (movil()) { lateral(false); $('#btn-hamb').focus(); return; }
  const c = $('#shell').classList.toggle('colapsado');
  $('#btn-lat').setAttribute('aria-label', c ? 'Expandir menú' : 'Contraer menú');
  setTimeout(sombraScroll, 300);
});
$('#btn-escritorio').addEventListener('click', () => {
  const b = $('#btn-escritorio'), abierto = b.getAttribute('aria-expanded') === 'true';
  b.setAttribute('aria-expanded', !abierto);
  $('#lat-sub').classList.toggle('cerrado', abierto);
});
$('#btn-salir').addEventListener('click', () => toast('Cerrar sesión no está disponible en el prototipo', 'info'));

reiniciar();
$('#lateral').inert = movil();
leerHash();
render(true);
