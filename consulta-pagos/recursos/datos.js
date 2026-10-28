/* ═══════════ Datos ficticios ═══════════ */
// RUT sin puntos ni guion → nombre del destinatario
const NOMBRES = { '123456785':'Andrea Muñoz Pérez', '156782343':'Rodrigo Saavedra Ortiz', '765432103':'Comercial Los Aromos SpA' };
const CTA = {
  A:{ bdest:'BancoEstado', cta:'00012345678', tcta:'Cuenta RUT' },
  F:{ bdest:'Banco Falabella', cta:'19876543', tcta:'Cuenta vista' },
  R:{ bdest:'Banco Santander', cta:'71234598', tcta:'Cuenta corriente' },
  E:{ bdest:'Banco Itaú', cta:'0213456789', tcta:'Cuenta corriente' },
  V:{ bdest:'', cta:'', tcta:'' },
};
const RE = 'Reembolso', LM = 'Licencia médica', DEP = 'Depósito', VV = 'Vale vista', BCH = 'Banco de Chile';
const SOL = 'Solicitado', PRO = 'En proceso de pago', PAG = 'Pagado', PVV = 'Pagado con vale vista';
const ESTADOS = [SOL, PRO, PAG, PVV];
const fila = (folio, rut, tx, fs, est, fe, mod, cta, monto, bpag, fvv = '', evv = '') => ({ folio, rut, tx, fs, est, fe, mod, ...CTA[cta], monto, bpag, fvv, evv });
const PAGOS = [
  fila('3848231',  '123456785', RE, '23/10/2026', SOL, '23/10/2026', DEP, 'A', 38450,   ''),
  fila('54187320', '123456785', LM, '21/10/2026', PRO, '23/10/2026', DEP, 'A', 412300,  BCH),
  fila('3848176',  '123456785', RE, '19/10/2026', PRO, '22/10/2026', DEP, 'A', 12990,   BCH),
  fila('3848015',  '123456785', RE, '15/10/2026', PVV, '20/10/2026', VV,  'V', 84600,   'BCI', '45821377', 'Emitido'),
  fila('3848102',  '123456785', RE, '07/10/2026', PAG, '13/10/2026', DEP, 'A', 56780,   BCH),
  fila('54098811', '123456785', LM, '25/09/2026', PAG, '01/10/2026', DEP, 'A', 398120,  BCH),
  fila('3847988',  '123456785', RE, '18/09/2026', PAG, '24/09/2026', DEP, 'A', 15300,   BCH),
  fila('3846930',  '123456785', RE, '04/09/2026', PVV, '10/09/2026', VV,  'V', 27500,   'BCI', '45790214', 'Emitido'),
  fila('3847920',  '123456785', RE, '21/08/2026', PAG, '27/08/2026', DEP, 'F', 23400,   BCH),
  fila('3847804',  '123456785', RE, '05/08/2026', PVV, '11/08/2026', VV,  'V', 9990,    'BCI', '45712009', 'Emitido'),
  fila('53977650', '123456785', LM, '18/07/2026', PAG, '24/07/2026', DEP, 'A', 376540,  BCH),
  fila('3846511',  '123456785', RE, '02/07/2026', PAG, '08/07/2026', DEP, 'A', 41200,   BCH),
  fila('53901244', '123456785', LM, '12/06/2026', PAG, '18/06/2026', DEP, 'A', 365880,  BCH),
  fila('54123987', '156782343', LM, '16/10/2026', PAG, '22/10/2026', DEP, 'R', 520000,  BCH),
  fila('3848190',  '156782343', RE, '12/10/2026', SOL, '12/10/2026', DEP, 'R', 31200,   ''),
  fila('54150022', '765432103', LM, '20/10/2026', PRO, '22/10/2026', DEP, 'E', 1284600, BCH),
  fila('54077310', '765432103', LM, '22/09/2026', PAG, '28/09/2026', DEP, 'E', 962450,  BCH),
  fila('53990815', '765432103', LM, '24/08/2026', PAG, '31/08/2026', DEP, 'E', 1037900, BCH),
];
