/* ═══════════ Utilidades ═══════════ */
const $ = (s, r = document) => r.querySelector(s);
const miles = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const pesos = n => '$' + miles(n);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const iso = d => { const [dd, mm, aa] = d.split('/'); return `20${aa}-${mm}-${dd}`; };
const corta = i => { const [y, m, d] = i.split('-'); return `${d}/${m}/${y}`; };
// En pantalla las fechas van con año de 4 dígitos; los datos internos siguen en DD/MM/AA
const f4 = d => d.length === 8 ? `${d.slice(0, 6)}20${d.slice(6)}` : d;
const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
const dv = rut => { let s = 0, m = 2; for (const c of String(rut).split('').reverse()) { s += +c * m; m = m === 7 ? 2 : m + 1; } const d = 11 - (s % 11); return d === 11 ? '0' : d === 10 ? 'K' : String(d); };
const reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
const espera = ms => reducido ? Math.min(ms, 250) : ms;

/* ═══════════ Datos ficticios (fase 1 · Reembolsos) ═══════════ */
const HOY = '06/10/26';
const USUARIO = 'Camila Rojas Fuentes';
// Causales por ahora (Javier, 09/10): 3 + Otro; la lista final la define el equipo
const CAUSALES = ['Monto no cuadra', 'Error en detalle', 'Duplicado', 'Otro'];
// Con "Otro", la causal se muestra como el motivo escrito (alerta, tooltip, modal revocar, historial y Centralizar)
const causalTxt = o => o.causal === 'Otro' && o.motivo ? o.motivo : o.causal;
// Sin excluidos (refinamiento 09/10): al aprobador solo llegan OPs validadas sin errores; val = total de casos de la OP (reembolsos o LM, uno por fila del detalle).
// Canal de origen: Sistema o Manual (OP cargada por Excel), como en Figma v3
const OPS0 = [
  { id:11696, per:'01/10/26', sol:['05/10/26','15:40'], est:'Pendiente', fe:['05/10/26','15:40'], canal:'Sistema', val:314, monto:67670420 },
  { id:11695, per:'01/10/26', sol:['05/10/26','10:03'], est:'Pendiente', fe:['05/10/26','10:03'], canal:'Sistema', val:382, monto:83380220 },
  { id:11693, per:'01/10/26', sol:['02/10/26','16:13'], est:'Pendiente', fe:['02/10/26','16:13'], canal:'Manual',  val:111, monto:23835610 },
  { id:11692, per:'01/10/26', sol:['02/10/26','09:29'], est:'Aprobada',  fe:['05/10/26','16:05'], canal:'Sistema', val:24,  monto:3829590,  por:USUARIO },
  { id:11689, per:'01/10/26', sol:['01/10/26','17:53'], est:'Aprobada',  fe:['02/10/26','10:41'], canal:'Sistema', val:66,  monto:1425990,  por:USUARIO },
  { id:11688, per:'01/10/26', sol:['01/10/26','17:40'], est:'Aprobada',  fe:['02/10/26','10:30'], canal:'Manual',  val:59,  monto:12517250, por:USUARIO },
  { id:11679, per:'01/09/26', sol:['30/09/26','17:02'], est:'Aprobada',  fe:['30/09/26','18:20'], canal:'Sistema', val:287, monto:58004410, por:USUARIO },
  { id:11676, per:'01/09/26', sol:['29/09/26','16:48'], est:'Aprobada',  fe:['30/09/26','09:02'], canal:'Sistema', val:305, monto:64230870, por:USUARIO },
];
// Tope por OP (entrevista 06/10): ~990 movimientos en SAP; cada reembolso = debe + haber → 495 reembolsos
const MAX_REEMB_OP = 495;
// Historial anterior ficticio desde enero de 2023, como en la plataforma actual (Javier, 07/10)
(() => {
  const r = rng(3659), dd = n => String(n).padStart(2, '0');
  const fmt = x => `${dd(x.getDate())}/${dd(x.getMonth() + 1)}/${String(x.getFullYear()).slice(2)}`;
  const hora = (min = 9) => `${dd(min + Math.floor(r() * (18 - min)))}:${dd(Math.floor(r() * 60))}`;
  const habil = (x, paso) => { do x.setDate(x.getDate() + paso); while (x.getDay() === 0 || x.getDay() === 6); };
  const d = new Date(2026, 8, 29); let id = 11674;
  const DESDE = new Date(2023, 0, 2);
  while (d > DESDE) {
    habil(d, -1);
    for (let k = 0, n = 1 + Math.floor(r() * 2); k < n && d > DESDE; k++) {
      const rec = 20 + Math.floor(r() * (MAX_REEMB_OP - 20)), exc = r() < .45 ? 1 + Math.floor(r() * Math.min(20, rec / 10)) : 0;
      const prom = () => 150000 + r() * 90000, sol = fmt(d), rech = r() < .12, fe = new Date(d); habil(fe, 1);
      // Mismo orden de sorteos que v2 para conservar el historial; el sorteo del monto excluido se descarta
      const solH = hora(), feH = hora(), val = rec - exc, monto = Math.round(val * prom() / 10) * 10; prom();
      OPS0.push({ id, per:`01/${sol.slice(3)}`, sol:[sol, solH], est: rech ? 'Rechazada' : 'Aprobada', fe:[fmt(fe), feH],
        canal: id >= 11674 ? 'Sistema' : 'Manual', val, monto, por:USUARIO, ...(rech ? { causal:CAUSALES[Math.floor(r() * 3)] } : {}) });
      id -= 1 + Math.floor(r() * 3);
    }
  }
  // Rechazo de ejemplo con "Otro" y su motivo, como Figma 13b y RV2
  const o74 = OPS0.find(o => o.id === 11674);
  if (o74?.est === 'Rechazada') Object.assign(o74, { causal:'Otro', motivo:'Faltan respaldos de 3 reembolsos. Adjuntarlos y volver a enviar la OP.' });
})();
// Item de operación (Figma, subsección "Item de operación"): en fase 1 solo Pago Reembolso; con más de uno, el historial abre sin item elegido
const ITEMS = ['Pago Reembolso', 'Licencias médicas', 'Easy Cancha'];
// OPs ficticias de Licencias médicas, como Figma IO3 e IO5. Easy Cancha no tiene OPs: muestra el vacío por item (IO4)
OPS0.push(
  { id:11697, per:'01/10/26', sol:['06/10/26','09:12'], est:'Pendiente', fe:['06/10/26','09:12'], canal:'Sistema', val:1204, monto:389214560, item:ITEMS[1] },
  { id:11694, per:'01/10/26', sol:['04/10/26','18:40'], est:'Pendiente', fe:['04/10/26','18:40'], canal:'Sistema', val:986,  monto:76776120,  item:ITEMS[1] },
  { id:11690, per:'01/10/26', sol:['02/10/26','08:55'], est:'Aprobada',  fe:['02/10/26','12:20'], canal:'Sistema', val:1117, monto:86902340,  item:ITEMS[1], por:USUARIO },
  { id:11681, per:'01/09/26', sol:['30/09/26','19:05'], est:'Aprobada',  fe:['01/10/26','10:02'], canal:'Sistema', val:1042, monto:81510880,  item:ITEMS[1], por:USUARIO },
);
const BANCOS = ['001', '012', '037', '016', '028', '039', '049', '051', '009'];
const VACIO = { op:'', est:'', per:'', sol:'', fe:'', canal:'' };
const VACIO_D = { asiento:'', cc:'', cli:'', banco:'', cuenta:'', ben:'', cau:'', con:'' };
const VACIO_C = { op:'', arch:'', est:'', per:'', sol:'', fe:'' };
// Periodo Contable es mensual: el filtro ofrece desde enero de 2023 hasta el mes en curso (valor MM/AA)
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const PERIODOS = Array.from({ length: 46 }, (_, k) => { const n = 2026 * 12 + 9 - k, m = n % 12, a = Math.floor(n / 12); return { v: `${String(m + 1).padStart(2, '0')}/${String(a).slice(2)}`, t: `${MESES[m]} ${a}` }; });
const periodoTxt = v => PERIODOS.find(p => p.v === v)?.t || v;

/* Datos de negocio de cada transacción (HU 13/10, valores de Mauro): Tipo de beneficio, Causal de emisión, Concepto y
   N° cuenta contable dependen del item. Son de ejemplo: las opciones las entrega el back. Deterministas por OP y N° asiento,
   sin usar la semilla del resto de los campos. En Reembolsos la causal no aplica ("-"), por eso no se ordena ni se filtra */
const PUB = 'Licencia curativa publico', PRIV = 'Licencia curativa privado', NORMAL = 'Por pago normal (emision regular)', REEM = 'Reemisión';
// Conceptos de Licencias médicas: [Concepto, N° cuenta contable, peso]
const CON_LM = [['Subsidio', '2102300006', 40], ['Fondo pensiones cuota', '2102300007', 20], ['Seguro de cesantía cuota', '2102300007', 10],
  ['Rentabilidad Protegida', '2102300007', 10], ['Cotizaciones de salud cuota', '2102300008', 20]];
const NEGOCIO = {
  reembolso: {
    ben:['Reembolso salud', 'Reembolso gasto'], cau:null, con:['Easy Cancha', 'Maraton'],
    gen:h => { const p = h % 100; return p < 80 ? { ben:'Reembolso salud', cau:'-', con:'-', cc:'2102300001' } : { ben:'Reembolso gasto', cau:'-', con:p < 90 ? 'Easy Cancha' : 'Maraton', cc:'5201500009' }; },
  },
  lm: {
    ben:[PUB, PRIV], cau:[NORMAL, REEM], con:CON_LM.map(c => c[0]),
    gen:h => { let p = h % 100, k = 0; while (p >= CON_LM[k][2]) { p -= CON_LM[k][2]; k++; } return { ben:(h >>> 8) % 2 ? PRIV : PUB, cau:(h >>> 12) % 5 ? NORMAL : REEM, con:CON_LM[k][0], cc:CON_LM[k][1] }; },
  },
};
const negocioDe = item => item === ITEMS[1] ? NEGOCIO.lm : NEGOCIO.reembolso;
const hashTx = (id, a) => { let x = Math.imul(id, 73856093) ^ Math.imul(a, 19349663); x = Math.imul(x ^ (x >>> 16), 0x45d9f3b); x = Math.imul(x ^ (x >>> 16), 0x45d9f3b); return (x ^ (x >>> 16)) >>> 0; };
const negocio = (o, a) => ({ folio: String(2000000 + (o.id - 8000) * 500 + a), ...negocioDe(o.item).gen(hashTx(o.id, a)) });
// Asientos 1 a 10 iguales a Figma: OP 11696 (frame 06) y OP 11697 (IO5). Los importes del resto se escalan al saldo
const RS = 'Reembolso salud', RG = 'Reembolso gasto', CS = '2102300001', CG = '5201500009';
const FIJAS = {
  11696: [
    { ben:RS, con:'-', cc:CS, cli:'I15521774K', imp:125910, banco:'053', cuenta:'00120222238' },
    { ben:RG, con:'Easy Cancha', cc:CG, cli:'I155218843', imp:244520, banco:'001', cuenta:'704510909038' },
    { ben:RS, con:'-', cc:CS, cli:'I155219939', imp:104520, banco:'012', cuenta:'000310686838' },
    { ben:RS, con:'-', cc:CS, cli:'I155221038', imp:223130, banco:'012', cuenta:'160464639' },
    { ben:RS, con:'-', cc:CS, cli:'I155222123', imp:341750, banco:'016', cuenta:'80200242440' },
    { ben:RS, con:'-', cc:CS, cli:'I155223227', imp:201750, banco:'037', cuenta:'001940929239' },
    { ben:RS, con:'-', cc:CS, cli:'I155224312', imp:320360, banco:'039', cuenta:'33010707040' },
    { ben:RS, con:'-', cc:CS, cli:'I155225416', imp:180360, banco:'051', cuenta:'00720484841' },
    { ben:RS, con:'-', cc:CS, cli:'I15522651K', imp:298970, banco:'053', cuenta:'510262642' },
    { ben:RG, con:'Maraton', cc:CG, cli:'I155227605', imp:158970, banco:'001', cuenta:'900440949441' },
  ],
  11697: [
    { ben:PUB, cau:NORMAL, con:'Subsidio', cc:'2102300006' }, { ben:PUB, cau:NORMAL, con:'Fondo pensiones cuota', cc:'2102300007' },
    { ben:PUB, cau:NORMAL, con:'Seguro de cesantía cuota', cc:'2102300007' }, { ben:PUB, cau:NORMAL, con:'Cotizaciones de salud cuota', cc:'2102300008' },
    { ben:PRIV, cau:NORMAL, con:'Subsidio', cc:'2102300006' }, { ben:PRIV, cau:NORMAL, con:'Rentabilidad Protegida', cc:'2102300007' },
    { ben:PRIV, cau:REEM, con:'Subsidio', cc:'2102300006' }, { ben:PRIV, cau:REEM, con:'Cotizaciones de salud cuota', cc:'2102300008' },
    { ben:PUB, cau:REEM, con:'Fondo pensiones cuota', cc:'2102300007' }, { ben:PUB, cau:NORMAL, con:'Subsidio', cc:'2102300006' },
  ],
};

/* Transacciones de cada OP (registros tipo Debe, uno por caso): generados con semilla fija para que siempre sean los mismos. Sin excluidos: todos se envían a SAP.
   Código proveedor determinista por OP y N° asiento (OP 11696, asiento 1 → 20004509, como Figma) */
function transacciones(o) {
  if (cacheTx[o.id]) return cacheTx[o.id];
  const R = rng(o.id), filas = [];
  for (let a = 1; a <= o.val; a++) {
    const rut = Math.floor(6000000 + R() * 18000000);
    const L = 8 + Math.floor(R() * 5);
    let cuenta = String(1 + Math.floor(R() * 9)); while (cuenta.length < L) cuenta += Math.floor(R() * 10);
    const prov = String(20000000 + ((o.id - 11696) * 4000 + 4502 + a * 7 + 1e8) % 1e7);
    const t = { asiento:a, fecha:o.sol[0], cli:'I' + rut + dv(rut), prov, banco:BANCOS[Math.floor(R() * BANCOS.length)], cuenta, w:Math.exp(R() * 2.4), ...negocio(o, a) };
    filas.push(t);
  }
  (FIJAS[o.id] || []).forEach((f, i) => Object.assign(filas[i], f));
  // Importes escalados para que sumen el monto de la OP (los fijos de Figma se descuentan antes)
  const libres = filas.filter(t => t.imp == null), saldo = o.monto - filas.reduce((a, t) => a + (t.imp || 0), 0);
  const s = libres.reduce((a, t) => a + t.w, 0); let acc = 0;
  libres.forEach((t, i) => { t.imp = i < libres.length - 1 ? Math.round(saldo * t.w / s / 10) * 10 : saldo - acc; acc += t.imp; });
  return (cacheTx[o.id] = filas);
}

