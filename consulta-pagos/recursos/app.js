const $ = s => document.querySelector(s);
const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
const espera = ms => reducido ? Math.min(ms, 250) : ms;
const HOY_ISO = '2026-10-28';

/* ═══════════ Íconos (los mismos de la 3659) ═══════════ */
const P = {
  atras:'<path d="M20 12H5M11 18l-6-6 6-6"/>',
  chevD:'<path d="M6 9l6 6 6-6"/>',
  chevR:'<path d="M9 6l6 6-6 6"/>',
  chevL:'<path d="M15 6l-6 6 6 6"/>',
  pantalla:'<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19.5h20M12 8.5v4M10 10.5h4"/>',
  salir:'<path d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4M15 16l4-4-4-4M19 12H9"/>',
  filtros:'<path d="M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="12" r="2"/><circle cx="17" cy="17" r="2"/>',
  descarga:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  check:'<circle cx="12" cy="12" r="9"/><path d="M8 12.4l2.7 2.7L16.2 9.6"/>',
  tick:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  hamb:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  buscar:'<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
};
const ic = (n, c = '') => `<svg class="ic ${c}" viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;
const BULB = '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="currentColor" d="M24 11.7001C22.0514 11.7025 20.1833 12.4777 18.8054 13.8555C17.4276 15.2334 16.6524 17.1015 16.65 19.0501C16.65 19.3286 16.7606 19.5957 16.9575 19.7926C17.1545 19.9895 17.4215 20.1001 17.7 20.1001C17.9785 20.1001 18.2455 19.9895 18.4425 19.7926C18.6394 19.5957 18.75 19.3286 18.75 19.0501C18.7516 17.6582 19.3052 16.3237 20.2894 15.3395C21.2736 14.3553 22.6081 13.8017 24 13.8001C24.2785 13.8001 24.5455 13.6895 24.7425 13.4926C24.9394 13.2956 25.05 13.0286 25.05 12.7501C25.05 12.4716 24.9394 12.2045 24.7425 12.0076C24.5455 11.8107 24.2785 11.7001 24 11.7001ZM24 7.50009C17.2446 7.50009 12.4421 12.9831 12.45 19.0652C12.4498 21.8563 13.466 24.5519 15.3086 26.6482C16.9926 28.5658 18.6082 31.6954 18.75 32.7001L18.7539 37.6345C18.7541 37.8409 18.8155 38.0425 18.9305 38.214L20.5383 40.6316C20.634 40.7756 20.7639 40.8937 20.9162 40.9754C21.0686 41.0572 21.2388 41.1 21.4118 41.1002H26.5863C26.7595 41.1003 26.9301 41.0577 27.0829 40.9759C27.2356 40.8941 27.3658 40.7759 27.4617 40.6316L29.0695 38.2127C29.1834 38.0408 29.2448 37.8394 29.2461 37.6332L29.25 32.7001C29.3977 31.6685 31.0219 28.5533 32.6914 26.6482C34.153 24.979 35.1026 22.9241 35.4266 20.7292C35.7505 18.5344 35.4352 16.2927 34.5182 14.2724C33.6012 12.2522 32.1214 10.539 30.256 9.3379C28.3906 8.13683 26.2186 7.49877 24 7.50009ZM27.1461 37.3142L26.0239 39.0002H21.9735L20.8539 37.3142V36.9002H27.148L27.1461 37.3142ZM27.15 34.8001H20.85L20.8461 32.7001H27.15V34.8001ZM31.1144 25.2642C30.1957 26.3109 28.7309 28.4201 27.7957 30.5988H20.2082C19.2711 28.4194 17.8063 26.3109 16.8876 25.2642C15.3811 23.5448 14.5517 21.3361 14.5539 19.0501C14.5421 13.997 18.5164 9.60009 24 9.60009C29.2113 9.60009 33.45 13.8388 33.45 19.0501C33.4499 21.3363 32.6192 23.5447 31.1124 25.2642H31.1144ZM9.3 19.0501C9.3 18.7716 9.18937 18.5046 8.99246 18.3076C8.79555 18.1107 8.52848 18.0001 8.25 18.0001H4.05C3.77152 18.0001 3.50445 18.1107 3.30754 18.3076C3.11062 18.5046 3 18.7716 3 19.0501C3 19.3286 3.11062 19.5957 3.30754 19.7926C3.50445 19.9895 3.77152 20.1001 4.05 20.1001H8.25C8.52848 20.1001 8.79555 19.9895 8.99246 19.7926C9.18937 19.5957 9.3 19.3286 9.3 19.0501ZM37.65 11.7001C37.8131 11.6997 37.9739 11.6618 38.1199 11.5892L42.3199 9.48918C42.5689 9.36457 42.7583 9.14611 42.8463 8.88188C42.9343 8.61764 42.9137 8.32928 42.7891 8.08021C42.7274 7.95689 42.642 7.84693 42.5378 7.7566C42.4336 7.66628 42.3126 7.59737 42.1818 7.5538C41.9176 7.4658 41.6292 7.48637 41.3801 7.61099L37.1801 9.711C36.9686 9.81681 36.7989 9.99095 36.6987 10.2052C36.5985 10.4195 36.5736 10.6613 36.6279 10.8915C36.6823 11.1217 36.8128 11.3268 36.9983 11.4736C37.1838 11.6203 37.4135 11.7001 37.65 11.7001ZM43.95 18.0001H39.75C39.4715 18.0001 39.2044 18.1107 39.0075 18.3076C38.8106 18.5046 38.7 18.7716 38.7 19.0501C38.7 19.3286 38.8106 19.5957 39.0075 19.7926C39.2044 19.9895 39.4715 20.1001 39.75 20.1001H43.95C44.2285 20.1001 44.4955 19.9895 44.6925 19.7926C44.8894 19.5957 45 19.3286 45 19.0501C45 18.7716 44.8894 18.5046 44.6925 18.3076C44.4955 18.1107 44.2285 18.0001 43.95 18.0001ZM10.8199 9.711L6.61987 7.61099C6.49655 7.54929 6.36228 7.51248 6.22473 7.50266C6.08718 7.49285 5.94905 7.51022 5.81821 7.5538C5.55398 7.64179 5.33552 7.83115 5.21091 8.08021C5.08629 8.32928 5.06571 8.61764 5.15371 8.88188C5.2417 9.14611 5.43106 9.36457 5.68012 9.48918L9.88012 11.5892C10.0261 11.6618 10.1869 11.6997 10.35 11.7001C10.5865 11.7001 10.8162 11.6203 11.0017 11.4736C11.1872 11.3268 11.3177 11.1217 11.3721 10.8915C11.4264 10.6613 11.4015 10.4195 11.3013 10.2052C11.2011 9.99095 11.0314 9.81681 10.8199 9.711ZM42.3199 28.611L38.1199 26.511C37.8707 26.3864 37.5823 26.3659 37.318 26.4539C37.0537 26.542 36.8352 26.7314 36.7106 26.9806C36.586 27.2297 36.5654 27.5182 36.6535 27.7825C36.7415 28.0468 36.931 28.2653 37.1801 28.3899L41.3801 30.4899C41.6293 30.6145 41.9177 30.635 42.182 30.547C42.4463 30.4589 42.6648 30.2695 42.7894 30.0203C42.914 29.7712 42.9346 29.4827 42.8465 29.2184C42.7585 28.9541 42.569 28.7357 42.3199 28.611ZM10.35 26.4001C10.1869 26.4005 10.0261 26.4385 9.88012 26.511L5.68012 28.611C5.43097 28.7357 5.24153 28.9541 5.15348 29.2184C5.10987 29.3493 5.09248 29.4875 5.10227 29.6251C5.11207 29.7627 5.14887 29.897 5.21058 30.0203C5.27228 30.1437 5.35768 30.2537 5.4619 30.3441C5.56612 30.4344 5.68711 30.5034 5.81798 30.547C6.08227 30.635 6.37072 30.6145 6.61987 30.4899L10.8199 28.3899C11.0318 28.2843 11.2018 28.1101 11.3023 27.8957C11.4028 27.6813 11.4278 27.4392 11.3734 27.2088C11.319 26.9784 11.1883 26.7731 11.0025 26.6263C10.8167 26.4795 10.5868 26.3998 10.35 26.4001Z"/></svg>';

const XCIRC = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.47581 2 2 6.47581 2 12C2 17.5242 6.47581 22 12 22C17.5242 22 22 17.5242 22 12C22 6.47581 17.5242 2 12 2ZM12 20.7097C7.21371 20.7097 3.29032 16.8347 3.29032 12C3.29032 7.21371 7.16532 3.29032 12 3.29032C16.7863 3.29032 20.7097 7.16532 20.7097 12C20.7097 16.7863 16.8347 20.7097 12 20.7097ZM15.8226 9.20564L13.0282 12L15.8226 14.7944C16.0121 14.9839 16.0121 15.2903 15.8226 15.4798L15.4798 15.8226C15.2903 16.0121 14.9839 16.0121 14.7944 15.8226L12 13.0282L9.20564 15.8226C9.01613 16.0121 8.70968 16.0121 8.52016 15.8226L8.17742 15.4798C7.9879 15.2903 7.9879 14.9839 8.17742 14.7944L10.9718 12L8.17742 9.20564C7.9879 9.01613 7.9879 8.70968 8.17742 8.52016L8.52016 8.17742C8.70968 7.9879 9.01613 7.9879 9.20564 8.17742L12 10.9718L14.7944 8.17742C14.9839 7.9879 15.2903 7.9879 15.4798 8.17742L15.8226 8.52016C16.0081 8.70968 16.0081 9.01613 15.8226 9.20564Z"/></svg>';

/* ═══════════ Utilidades ═══════════ */
const limpia = v => v.replace(/[^0-9kK]/g, '').toUpperCase();
const formatea = c => c.length < 2 ? c : c.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '-' + c.slice(-1);
const dv = cuerpo => { let s = 0, m = 2; for (let i = cuerpo.length - 1; i >= 0; i--) { s += +cuerpo[i] * m; m = m === 7 ? 2 : m + 1; } const r = 11 - (s % 11); return r === 11 ? '0' : r === 10 ? 'K' : String(r); };
const rutValido = c => c.length >= 8 && /^\d+[0-9K]$/.test(c) && dv(c.slice(0, -1)) === c.slice(-1);
const conGuion = c => c.slice(0, -1) + '-' + c.slice(-1);
const iso = s => s.split('/').reverse().join('-');
const corta = i => i.split('-').reverse().join('/');
const pesos = n => '$' + n.toLocaleString('es-CL');
const guion = v => v || '<span class="vacio-celda">—</span>';

/* ═══════════ Estado ═══════════ */
const SIN_FILTROS = { tx:'', desde:'', hasta:'', est:'' };
const inicial = () => ({ buscado:null, cargando:false, ordenando:false, filtros:{ ...SIN_FILTROS }, orden:{ col:null, dir:null }, pag:0, tam:10 });
const S = inicial();
// Error que muestra cada HTML (window.CASO): falla el primer intento y el reintento funciona
let SIM = { 'error-buscar':'buscar', 'error-exportar':'exportar' }[window.CASO] || '';
const falla = tipo => { if (SIM !== tipo) return false; SIM = ''; return true; };
const rut = $('#rut'), folio = $('#folio'), btnBuscar = $('#buscar');

/* ═══════════ Búsqueda ═══════════ */
// Buscar: RUT válido o folio. Un RUT a medio escribir o errado lo deja deshabilitado aunque haya folio.
function puedeBuscar() {
  const c = limpia(rut.value), f = folio.value.trim();
  if (c && !rutValido(c)) return false;
  return !!c || !!f;
}
function actualizarBuscar() { btnBuscar.disabled = !puedeBuscar(); }
function errorRut(msg) { $('#rut-err').textContent = msg; rut.classList.toggle('invalido', !!msg); rut.setAttribute('aria-invalid', msg ? 'true' : 'false'); }

function alEscribirRut() {
  rut.value = formatea(limpia(rut.value).slice(0, 9));
  errorRut('');
  actualizarBuscar();
}
// Al salir del campo RUT se valida el dígito verificador
function salirRut() {
  const c = limpia(rut.value);
  if (c && !rutValido(c)) { errorRut('Ingresa un RUT válido'); actualizarBuscar(); }
}

rut.addEventListener('input', alEscribirRut);
rut.addEventListener('blur', salirRut);
folio.addEventListener('input', () => { folio.value = folio.value.replace(/\D/g, '').slice(0, 10); actualizarBuscar(); });

let tBuscar, tOrden;
function buscar() {
  if (!puedeBuscar()) { salirRut(); return; }
  // Si el sistema no responde, la tabla vuelve a como estaba
  const antes = { buscado:S.buscado, filtros:S.filtros, orden:S.orden, pag:S.pag };
  S.buscado = { rut: limpia(rut.value), folio: folio.value.trim() };
  Object.assign(S, { filtros:{ ...SIN_FILTROS }, orden:{ col:null, dir:null }, pag:0, cargando:true, ordenando:false });
  clearTimeout(tOrden);
  btnBuscar.setAttribute('aria-busy', 'true'); btnBuscar.style.pointerEvents = 'none';
  btnBuscar.innerHTML = '<svg class="cargador" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/></svg><span class="sr">Buscando…</span>';
  pintar();
  clearTimeout(tBuscar);
  tBuscar = setTimeout(() => {
    S.cargando = false;
    btnBuscar.removeAttribute('aria-busy'); btnBuscar.style.pointerEvents = ''; btnBuscar.textContent = 'Buscar';
    if (falla('buscar')) { Object.assign(S, antes); pintar(); modalErrorSistema(); return; }
    pintar();
    const n = resultados().length;
    $('#vivo').textContent = n ? `${n} ${n === 1 ? 'solicitud' : 'solicitudes'} de pago` : 'No encontramos solicitudes de pago';
  }, espera(900));
}
$('#f-buscar').addEventListener('submit', ev => { ev.preventDefault(); buscar(); });

/* ═══════════ Resultados ═══════════ */
// Orden base: Fecha solicitud de pago y folio, de la más reciente a la más antigua
const resultados = () => {
  const b = S.buscado; if (!b) return [];
  return PAGOS.filter(p => (!b.rut || p.rut === b.rut) && (!b.folio || p.folio === b.folio))
    .sort((x, y) => iso(y.fs).localeCompare(iso(x.fs)) || y.folio - x.folio);
};
const filtradas = () => {
  const f = S.filtros;
  return resultados().filter(p => (!f.tx || p.tx === f.tx) && (!f.desde || iso(p.fs) >= f.desde) && (!f.hasta || iso(p.fs) <= f.hasta) && (!f.est || p.est === f.est));
};
// Al ordenar, las celdas sin dato quedan al final en ambos sentidos y los empates siguen el orden base
const clave = (p, k) => k === 'fs' || k === 'fe' ? iso(p[k]) : p[k];
function ordenadas() {
  const lista = filtradas(), { col, dir } = S.orden;
  if (!col) return lista;
  const d = dir === 'asc' ? 1 : -1;
  const cmp = (a, b) => typeof a === 'number' ? a - b : a.localeCompare(b, 'es', { numeric:true });
  return lista.sort((a, b) => { const x = clave(a, col), y = clave(b, col); return (x === '') - (y === '') || (x === '' ? 0 : d * cmp(x, y)); });
}

// Las 14 columnas de la HU, en su orden, más RUT a pagar entre Transacción y Folio. Con clave, la columna se ordena
const COLS = [
  ['Proceso'], ['Transacción', 'tx'], ['RUT a pagar'], ['Folio doc.<br> solicitado', 'folio'], ['Fecha solicitud<br> de pago', 'fs'],
  ['Estado de pago', 'est'], ['Fecha estado<br> pago', 'fe'], ['Modalidad<br> de pago', 'mod'], ['Institución<br> bancaria', 'bdest'],
  ['Cuenta<br> bancaria', 'cta'], ['Tipo de<br> cuenta', 'tcta'], ['Monto solicitado<br> a pago', 'monto'], ['Banco<br> pagador', 'bpag'],
  ['Folio vale<br> vista', 'fvv'], ['Estado vale<br> vista', 'evv'],
];
const SK = [60, 70, 80, 60, 70, 80, 70, 60, 75, 70, 70, 60, 70, 60, 60];
const MONTO = COLS.findIndex(c => c[1] === 'monto');
const CARET = '<svg class="caret" viewBox="0 0 8 5" aria-hidden="true"><path d="M0 0h8L4 5z"/></svg>';
const CHIP = { [SOL]:'sol', [PRO]:'proc', [PAG]:'pag', [PVV]:'pag' };
const chip = e => `<span class="chip ${CHIP[e]}">${e}</span>`;
const rutNombre = r => `<span class="dos-lineas">${formatea(r)}<small>${NOMBRES[r] || ''}</small></span>`;
const celdas = p => ['Beneficios', p.tx, rutNombre(p.rut), p.folio, p.fs, chip(p.est), p.fe, p.mod, guion(p.bdest), guion(p.cta), guion(p.tcta), pesos(p.monto), guion(p.bpag), guion(p.fvv), guion(p.evv)];

// Mientras busca, los títulos no ordenan
const titulo = ([t, k], i, bloqueado) => {
  const num = i === MONTO ? ' num' : '';
  if (!k) return `<th scope="col"${num ? ' class="num"' : ''}>${t}</th>`;
  const a = S.orden.col === k;
  return `<th scope="col" class="ord${num}${a ? ' activa' : ''}"${a ? ` aria-sort="${S.orden.dir === 'asc' ? 'ascending' : 'descending'}"` : ''}><button type="button" class="orden" id="ord-${k}" data-a="ordenar" data-v="${k}"${bloqueado ? ' disabled' : ''}>${t}${CARET}</button></th>`;
};
const tabla = (cuerpo, bloqueado) => `<div class="tabla-scroll" tabindex="0" role="region" aria-label="Historial de solicitudes de pago (desplazable a lo ancho)">
  <table class="tabla t-consulta">
    <thead><tr>${COLS.map((c, i) => titulo(c, i, bloqueado)).join('')}</tr></thead>
    <tbody>${cuerpo}</tbody>
  </table></div>`;
const esqueleto = n => Array.from({ length: n }, () => `<tr>${SK.map(w => `<td><span class="sk" style="width:${w}%"></span></td>`).join('')}</tr>`).join('');
const vacio = (clase, icono, t, p) => `<div class="vacio ${clase}"><div class="vacio-ic">${icono}</div><h3>${t}</h3><p>${p}</p></div>`;

function chipsFiltro() {
  // Mismo orden que las columnas de la tabla
  const f = S.filtros, c = [];
  if (f.tx) c.push(['tx', `Transacción: ${f.tx}`]);
  if (f.desde) c.push(['desde', `Fecha solicitud de pago desde: ${corta(f.desde)}`]);
  if (f.hasta) c.push(['hasta', `Fecha solicitud de pago hasta: ${corta(f.hasta)}`]);
  if (f.est) c.push(['est', `Estado de pago: ${f.est}`]);
  return c;
}
function paginador(pag, tam, total) {
  const ini = total ? pag * tam + 1 : 0, fin = Math.min(total, (pag + 1) * tam);
  return `<div class="paginador">
    <label>Mostrar por página <select class="sel-chico" id="pb-tam">${[10, 20, 50].map(n => `<option ${n === tam ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
    <span aria-live="polite">${ini} - ${fin} de ${total}</span>
    <span class="pag-flechas">
      <button type="button" data-a="pag" data-v="-1" aria-label="Página anterior" ${pag === 0 ? 'disabled' : ''}>${ic('chevL')}</button>
      <button type="button" data-a="pag" data-v="1" aria-label="Página siguiente" ${fin >= total ? 'disabled' : ''}>${ic('chevR')}</button>
    </span>
  </div>`;
}

function pintar() {
  const b = S.buscado, todos = resultados(), lista = ordenadas(), chips = chipsFiltro();
  const conRes = !!(b && !S.cargando && todos.length);
  // Al buscar solo por folio, el RUT y el nombre salen de la solicitud encontrada
  const r = conRes ? (b.rut || todos[0].rut) : '';
  // Antes de buscar y en una búsqueda sin solicitudes, la cabecera queda con Filtros y Exportar deshabilitados
  let cuerpo;
  if (!b) cuerpo = vacio('sin-ops', BULB, 'Ingresa un RUT o un folio', 'Aquí verás los resultados de las solicitudes de pago.');
  else if (S.cargando) cuerpo = tabla(esqueleto(6), true);
  else if (!todos.length) cuerpo = vacio('sin-res', ic('buscar'), 'No encontramos solicitudes de pago', 'Revisa el RUT o el folio e intenta de nuevo.');
  else if (!lista.length) cuerpo = vacio('sin-res', ic('buscar'), 'Sin resultados', 'Cambia o quita algún filtro para ver más resultados.');
  else {
    const pag = Math.min(S.pag, Math.ceil(lista.length / S.tam) - 1); S.pag = pag;
    const pagina = lista.slice(pag * S.tam, (pag + 1) * S.tam);
    // Al ordenar, la página 1 carga en esqueleto
    const filas = S.ordenando ? esqueleto(pagina.length) : pagina.map(p => `<tr>${celdas(p).map((c, i) => `<td${i === MONTO ? ' class="num"' : ''}>${c}</td>`).join('')}</tr>`).join('');
    cuerpo = tabla(filas) + paginador(pag, S.tam, lista.length);
  }
  $('#res').innerHTML = `
    <div class="tabla-cab">
      <div>
        <h2 id="t-res">Historial de solicitudes de pago</h2>
        ${conRes ? `<p><span class="lila">${formatea(r)}</span> • <span class="lila">${NOMBRES[r] || ''}</span></p>` : ''}
      </div>
      <div class="acciones">
        <button class="btn btn-sec c-acc" type="button" id="btn-filtros" data-a="filtros" ${conRes ? '' : 'disabled'}>${ic('filtros')}Filtros</button>
        <button class="btn btn-sec c-acc" type="button" id="btn-exportar" data-a="exportar" ${conRes && lista.length ? '' : 'disabled'}>${ic('descarga')}Exportar</button>
      </div>
    </div>
    ${conRes && chips.length ? `<div class="filtros-aplicados"><span class="etq">Filtros aplicados</span>
      ${chips.map(([k, t]) => `<span class="chip-f">${t}<button type="button" data-a="quitar-filtro" data-v="${k}" aria-label="Quitar filtro ${t}">${ic('x')}</button></span>`).join('')}
      <button type="button" class="link" data-a="limpiar-filtros">Limpiar filtros</button></div>` : ''}
    ${cuerpo}`;
}

/* ═══════════ Modal de filtros (estándar de la 3659) ═══════════ */
let focoPrevio = null;
function abrirModal(html, alMontar) {
  focoPrevio = document.activeElement;
  const c = $('#capa');
  c.innerHTML = html; c.hidden = false;
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => c.classList.add('vis'));
  alMontar && alMontar();
}
function cerrarModal(destino) {
  const c = $('#capa'); if (c.hidden) return;
  c.classList.remove('vis');
  document.body.style.overflow = '';
  c.hidden = true; c.innerHTML = '';
  const f = (typeof destino === 'string' ? $(destino) : destino) || focoPrevio;
  if (f && document.contains(f)) f.focus({ preventScroll: true });
}
function modalFiltros() {
  const f = S.filtros;
  abrirModal(`<form class="modal" role="dialog" aria-modal="true" aria-labelledby="m-tit" id="f-filtros" novalidate>
    <div class="modal-cab"><h2 id="m-tit">Selección de filtros</h2><p>Filtra el historial de solicitudes de pago.</p></div>
    <div class="modal-cuerpo"><div class="grid-f">
      <div class="campo"><label id="f-tx-lbl" for="f-tx">Transacción</label>${combo('f-tx', f.tx)}</div>
      <div class="campo"><label id="f-est-lbl" for="f-est">Estado de pago</label>${combo('f-est', f.est)}</div>
      <div class="campo"><label for="f-desde">Fecha solicitud de pago desde</label><input class="input" type="date" id="f-desde" value="${f.desde}" max="${f.hasta || HOY_ISO}"></div>
      <div class="campo"><label for="f-hasta">Fecha solicitud de pago hasta</label><input class="input" type="date" id="f-hasta" value="${f.hasta}" min="${f.desde}" max="${HOY_ISO}" aria-describedby="f-hasta-nota"><p class="campo-nota" id="f-hasta-nota" aria-live="polite"></p></div>
    </div></div>
    <div class="modal-pie">
      <button class="btn btn-sec" type="button" data-a="cerrar-modal">Cancelar</button>
      <button class="btn btn-pri" type="submit" id="f-aplicar" disabled>Aplicar filtros</button>
    </div></form>`, () => { revisarFiltros(); $('#f-tx').focus(); });
}
const leerFiltros = () => ({ tx: valor('f-tx'), desde: $('#f-desde').value, hasta: $('#f-hasta').value, est: valor('f-est') });
// Aplicar filtros se habilita solo si el formulario cambia respecto de los filtros aplicados
function revisarFiltros() {
  const b = $('#f-aplicar'); if (!b) return;
  const nf = leerFiltros();
  b.disabled = Object.keys(nf).every(k => nf[k] === S.filtros[k]) || (nf.desde && nf.hasta && nf.hasta < nf.desde);
}
// Hasta nunca es anterior a desde: si queda antes, se quita y se avisa
function ajustarFechas(origen) {
  const d = $('#f-desde'), h = $('#f-hasta'), nota = $('#f-hasta-nota');
  h.min = d.value; d.max = h.value || HOY_ISO;
  if (origen === 'f-desde') nota.textContent = '';
  if (d.value && h.value && h.value < d.value) { h.value = ''; d.max = HOY_ISO; nota.textContent = 'Se quitó la fecha hasta: era anterior a la fecha desde.'; }
}
function aplicarFiltros(nf) {
  S.filtros = nf; S.pag = 0;
  pintar();
}
function modalErrorSistema() {
  abrirModal(`<div class="modal modal-err" role="alertdialog" aria-modal="true" aria-labelledby="m-tit" aria-describedby="m-sub">
    <div class="modal-cab"><span class="err-ic" aria-hidden="true">!</span><h2 id="m-tit">Tuvimos un problema</h2><p id="m-sub">El sistema no responde. Vuelve a intentarlo en unos minutos.</p></div>
    <div class="modal-pie"><button class="btn btn-pri" type="button" id="m-entendido" data-a="cerrar-modal">Entendido</button></div>
  </div>`, () => { focoPrevio = btnBuscar; $('#m-entendido').focus(); });
}

/* ═══════════ Ordenar columnas ═══════════ */
// Repinta la tabla sin perder el desplazamiento a lo ancho ni el foco
function repintar() {
  const x = $('#res .tabla-scroll')?.scrollLeft || 0, id = $('#res').contains(document.activeElement) && document.activeElement.id;
  pintar();
  const sc = $('#res .tabla-scroll'); if (sc) sc.scrollLeft = x;
  if (id) $('#' + id)?.focus({ preventScroll: true });
}
// Primer clic ascendente, segundo descendente; vuelve a la página 1 y carga en esqueleto
function ordenar(k) {
  if (S.cargando) return;
  const o = S.orden;
  S.orden = { col:k, dir: o.col === k && o.dir === 'asc' ? 'desc' : 'asc' }; S.pag = 0; S.ordenando = true;
  repintar();
  clearTimeout(tOrden);
  tOrden = setTimeout(() => { S.ordenando = false; repintar(); }, espera(420));
}

/* ═══════════ Exportar ═══════════ */
// El nombre depende solo del RUT y del folio escritos en la búsqueda (regla de la HU)
const nombreArchivo = () => { const b = S.buscado; return `DetalleSolicitudPago_${b.rut ? conGuion(b.rut) : '#RUT'}_${b.folio || '#Folio'}.xlsx`; };
function exportar(btn) {
  if (btn.getAttribute('aria-busy') === 'true') return;
  const html = btn.innerHTML, archivo = nombreArchivo();
  btn.style.minWidth = btn.offsetWidth + 'px';
  btn.setAttribute('aria-busy', 'true'); btn.setAttribute('aria-disabled', 'true'); btn.style.pointerEvents = 'none';
  btn.innerHTML = '<svg class="arco" viewBox="0 0 26 26" aria-hidden="true"><circle cx="13" cy="13" r="9"/></svg><span class="sr">Exportando…</span>';
  setTimeout(() => {
    const b = $('#btn-exportar');
    if (b && b.getAttribute('aria-busy') === 'true') {
      b.innerHTML = html; b.style.minWidth = b.style.pointerEvents = '';
      b.removeAttribute('aria-busy'); b.removeAttribute('aria-disabled');
    }
    // Si la descarga falla, la tabla y los filtros no cambian
    if (falla('exportar')) { toast('No pudimos descargar el archivo. Vuelve a intentarlo.', 'error'); return; }
    toast(`Se descargó ${archivo}`);
  }, espera(1200));
}

/* ═══════════ Snackbar ═══════════ */
// Arriba a la derecha, 24 px bajo el header
function toast(msg, tipo = 'ok') {
  const t = document.createElement('div');
  t.className = 'toast ' + tipo;
  t.innerHTML = (tipo === 'error' ? `<span class="ic-err">${XCIRC}</span>` : ic('check')) + `<span>${msg}</span>`;
  $('#toasts').style.top = $('.cabecera').getBoundingClientRect().bottom + 24 + 'px';
  $('#toasts').append(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('vis')));
  setTimeout(() => { t.classList.remove('vis'); setTimeout(() => t.remove(), 300); }, 5000);
}

/* ═══════════ Menú desplegable ═══════════ */
// Como el de la 3659 (causal de rechazo): botón con lista propia y teclado. El valor elegido queda en data-v del botón
const OPS = {
  'f-tx': [{ v:'', t:'Selecciona', ph:true }, { v:RE, t:RE }, { v:LM, t:LM }],
  'f-est': [{ v:'', t:'Selecciona', ph:true }, ...ESTADOS.map(e => ({ v:e, t:e }))],
};
const elegida = (o, v) => o.v === v && !o.ph;
const opciones = (id, v) => OPS[id].map((o, i) => `<li role="option" id="${id}-op${i}"${o.ph ? ' class="ph"' : ''} data-a="opcion" data-c="${id}" data-v="${o.v}" aria-selected="${elegida(o, v)}">${o.t}${elegida(o, v) ? ic('tick') : ''}</li>`).join('');
function combo(id, v) {
  const o = OPS[id].find(o => o.v === v);
  return `<div class="combo">
        <button type="button" class="combo-btn" id="${id}" data-a="combo" data-v="${v}" aria-haspopup="listbox" aria-expanded="false" aria-controls="${id}-lista" aria-labelledby="${id}-lbl ${id}"><span${o.ph ? ' class="ph"' : ''}>${o.t}</span>${ic('chevD')}</button>
        <ul class="combo-lista" id="${id}-lista" role="listbox" aria-labelledby="${id}-lbl" hidden>${opciones(id, v)}</ul>
      </div>`;
}
const valor = id => $('#' + id)?.dataset.v || '';
function ponerValor(id, v) {
  const b = $('#' + id), o = OPS[id].find(o => o.v === v), t = b.firstElementChild;
  b.dataset.v = v; t.textContent = o.t; t.className = o.ph ? 'ph' : '';
  $(`#${id}-lista`).innerHTML = opciones(id, v);
}
let abierto = null, activa = -1;
function abrirCombo(id) {
  cerrarCombo();
  const b = $('#' + id), l = $(`#${id}-lista`);
  // Se abre hacia arriba si abajo no cabe
  const r = b.getBoundingClientRect(), abajo = innerHeight - r.bottom - 16, arriba = r.top - 16;
  const subir = abajo < 160 && arriba > abajo;
  l.classList.toggle('arriba', subir);
  l.style.maxHeight = Math.max(120, Math.min(314, subir ? arriba : abajo)) + 'px';
  l.hidden = false; b.setAttribute('aria-expanded', 'true'); abierto = id;
  requestAnimationFrame(() => l.classList.add('vis'));
  marcarActiva(Math.max(0, OPS[id].findIndex(o => o.v === valor(id))));
}
function cerrarCombo() {
  const id = abierto; abierto = null;
  const b = id && $('#' + id); if (!b) return;
  const l = $(`#${id}-lista`);
  l.classList.remove('vis'); l.hidden = true;
  b.setAttribute('aria-expanded', 'false'); b.removeAttribute('aria-activedescendant');
}
function marcarActiva(i) {
  const l = $(`#${abierto}-lista`), n = l.children.length;
  activa = (i + n) % n;
  [...l.children].forEach((li, k) => li.classList.toggle('activa', k === activa));
  const li = l.children[activa];
  if (li.offsetTop < l.scrollTop) l.scrollTop = li.offsetTop;
  else if (li.offsetTop + li.offsetHeight > l.scrollTop + l.clientHeight) l.scrollTop = li.offsetTop + li.offsetHeight - l.clientHeight;
  $('#' + abierto).setAttribute('aria-activedescendant', li.id);
}
function elegir(id, v) {
  ponerValor(id, v); cerrarCombo(); $('#' + id).focus();
  if (id.startsWith('f-')) revisarFiltros();
}

/* ═══════════ Lateral ═══════════ */
const movil = () => innerWidth <= 1100;
function lateral(abrir) {
  $('#lateral').classList.toggle('abierto', abrir); $('#lat-scrim').classList.toggle('vis', abrir);
  $('#lateral').inert = movil() && !abrir;
  $('#btn-hamb').setAttribute('aria-expanded', abrir);
}
$('#btn-hamb').addEventListener('click', () => lateral(true));
$('#lat-scrim').addEventListener('click', () => lateral(false));
$('#btn-lat').addEventListener('click', () => {
  if (movil()) return lateral(false);
  const col = $('#shell').classList.toggle('colapsado');
  $('#btn-lat').setAttribute('aria-label', col ? 'Expandir menú' : 'Contraer menú');
});
addEventListener('resize', () => { $('#lateral').inert = movil() && !$('#lateral').classList.contains('abierto'); });

/* ═══════════ Eventos ═══════════ */
document.addEventListener('click', ev => {
  const el = ev.target.closest('[data-a]');
  if (abierto && !ev.target.closest('.combo')) cerrarCombo();
  if (ev.target.id === 'capa') return cerrarModal();
  if (!el) return;
  const a = el.dataset.a;
  if (a === 'combo') abierto === el.id ? cerrarCombo() : abrirCombo(el.id);
  else if (a === 'opcion') elegir(el.dataset.c, el.dataset.v);
  else if (a === 'filtros') modalFiltros();
  else if (a === 'exportar') exportar(el);
  else if (a === 'ordenar') ordenar(el.dataset.v);
  else if (a === 'cerrar-modal') cerrarModal();
  else if (a === 'quitar-filtro') { aplicarFiltros({ ...S.filtros, [el.dataset.v]: '' }); $('#btn-filtros')?.focus(); }
  else if (a === 'limpiar-filtros') { aplicarFiltros({ ...SIN_FILTROS }); $('#btn-filtros')?.focus(); }
  else if (a === 'pag') { S.pag += +el.dataset.v; pintar(); $(`[data-a="pag"][data-v="${el.dataset.v}"]`)?.focus(); }
});
document.addEventListener('change', ev => {
  if (ev.target.id === 'pb-tam') { S.tam = +ev.target.value; S.pag = 0; pintar(); $('#pb-tam').focus(); }
  if (ev.target.closest('#f-filtros')) { if (ev.target.type === 'date') ajustarFechas(ev.target.id); revisarFiltros(); }
});
document.addEventListener('input', ev => { if (ev.target.closest('#f-filtros')) revisarFiltros(); });
document.addEventListener('submit', ev => {
  if (ev.target.id !== 'f-filtros') return;
  ev.preventDefault();
  if ($('#f-aplicar').disabled) return;
  const nf = leerFiltros();
  aplicarFiltros(nf); cerrarModal('#btn-filtros');
});
document.addEventListener('keydown', ev => {
  // Menú desplegable
  if (ev.target.matches?.('.combo-btn')) {
    const id = ev.target.id, ab = abierto === id;
    if (['ArrowDown', 'ArrowUp'].includes(ev.key)) { ev.preventDefault(); if (!ab) abrirCombo(id); else marcarActiva(activa + (ev.key === 'ArrowDown' ? 1 : -1)); return; }
    if ((ev.key === 'Enter' || ev.key === ' ') && ab) { ev.preventDefault(); elegir(id, OPS[id][activa].v); return; }
    if (ev.key === 'Home' && ab) { ev.preventDefault(); marcarActiva(0); return; }
    if (ev.key === 'End' && ab) { ev.preventDefault(); marcarActiva(OPS[id].length - 1); return; }
    if (ev.key === 'Tab' && ab) cerrarCombo();
  }
  if (ev.key !== 'Escape') return;
  if (abierto) cerrarCombo();
  else if (!$('#capa').hidden) cerrarModal();
  else if ($('#lateral').classList.contains('abierto')) lateral(false);
});

/* ═══════════ Arranque ═══════════ */
$('#btn-hamb').innerHTML = ic('hamb');
$('#btn-lat').innerHTML = ic('atras');
$('#lat-escritorio').innerHTML = ic('chevD') + '<span>Escritorio de Trabajo</span>';
$('#lat-consulta').innerHTML = ic('pantalla') + '<span>Consulta de Pagos</span>';
$('#btn-salir').insertAdjacentHTML('beforeend', ic('salir'));
$('#migas').innerHTML = `<span>Inicio</span>${ic('chevR')}<span aria-current="page">Consulta de Pagos</span>`;
$('#lateral').inert = movil();
pintar();
