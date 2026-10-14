# Aprobaciones de Pago · prototipos HTML

Versión: v1.1 · Fecha: 14/10/2026

Estos siete prototipos muestran funcionando la vista del aprobador en CCP: el **Historial de aprobaciones** con el detalle de cada OP, y los ajustes de **Centralizar/Pagos**: el tag del canal de origen y el menú sin las acciones del aprobador. Siguen el handoff de Figma.

## Qué es y qué no es

- **Es una referencia** de comportamiento, textos, estados y medidas. Sirve para ver cómo responde cada pantalla: qué carga, qué cambia y qué dice.
- **No es código de producción.** Usa datos de ejemplo y no se conecta a SAP ni a otros servicios. Las decisiones se guardan solo en memoria: al recargar la página, todo vuelve al inicio. Exportar no genera un archivo; solo muestra el aviso.
- **El diseño manda.** Si un prototipo y el handoff de Figma no coinciden, vale Figma.

## Los siete prototipos

| Prototipo | Objetivo | Link |
|---|---|---|
| Principal | Recorrer el flujo completo cuando todo sale bien: aprobar, rechazar, revocar un rechazo, filtrar, ordenar y exportar. En Centralizar/Pagos, ver el tag de canal de origen y el menú sin las acciones del aprobador | [happy-path-aprobaciones.html](https://jzamorano-ui.github.io/aprobaciones-pago/happy-path-aprobaciones.html) |
| Historial sin operaciones | Ver la pantalla cuando no hay OPs para aprobar | [sin-operaciones.html](https://jzamorano-ui.github.io/aprobaciones-pago/sin-operaciones.html) |
| Error al cargar | Ver qué pasa cuando el sistema no responde al cargar el historial | [error-cargar.html](https://jzamorano-ui.github.io/aprobaciones-pago/error-cargar.html) |
| Error al aprobar o revocar | Ver qué pasa cuando no se logra registrar una aprobación o la revocación de un rechazo | [error-aprobar.html](https://jzamorano-ui.github.io/aprobaciones-pago/error-aprobar.html) |
| Error al rechazar | Ver qué pasa cuando no se logra registrar un rechazo | [error-rechazar.html](https://jzamorano-ui.github.io/aprobaciones-pago/error-rechazar.html) |
| Error al exportar | Ver qué pasa cuando falla la descarga del archivo | [error-exportar.html](https://jzamorano-ui.github.io/aprobaciones-pago/error-exportar.html) |
| Varios items (escalabilidad futura) | Ver el historial cuando el aprobador tiene más de un item de operación | [escalabilidad-items.html](https://jzamorano-ui.github.io/aprobaciones-pago/escalabilidad-items.html) |

Todos abren en el Historial de aprobaciones, con la sesión de «Camila Rojas Fuentes», Aprobador Beneficios.

## Cómo recorrer cada uno

### Principal

Corresponde a las secciones «Módulo aprobador / Reembolso» y «Centralizar/Pagos» de la página «Happy path» del handoff. También a «Validación del rechazo», «Acciones según estado» y «Contenido largo y anchos de escritorio», en la página «Errores / casuísticas».

1. Abrir el menú ⋮ de la OP 11696, elegir **Aprobar** y presionar **Enviar a SAP**.
2. Abrir el menú ⋮ de la OP 11695 y elegir **Rechazar**. Elegir la causal «Otro» y escribir menos de 10 caracteres; después, un motivo de 10 o más. Presionar **Rechazar OP**.
3. Pasar el cursor sobre el estado «Rechazada» de la OP 11695.
4. En la misma OP, abrir el menú ⋮, elegir **Revocar rechazo** y presionar **Revocar**.
5. Abrir los menús ⋮ de una OP Pendiente, una Aprobada y una Rechazada, y comparar sus acciones.
6. Entrar a **Ver detalle** de la OP 11695. Presionar **Ver historial** en la alerta. Aprobar o rechazar desde el detalle.
7. En el historial y en el detalle: aplicar y limpiar filtros, ordenar una columna, cambiar de página y presionar **Exportar**.
8. Ir a **Centralizar/Pagos** en el menú lateral. Elegir el tipo «SOLICITUD DE PAGO» y el item «PAGO REEMBOLSO», presionar **Buscar** y abrir el menú ⋮ de una fila.

Qué observar:

- **Acciones según el estado:**
  - Pendiente: Ver detalle, Aprobar y Rechazar.
  - Aprobada: Aprobar y Rechazar aparecen deshabilitados.
  - Rechazada: Aprobar aparece deshabilitado y Revocar rechazo reemplaza a Rechazar.
- **Rechazo:** la causal es obligatoria. Con «Otro» se despliega «Describe el motivo», de 10 a 80 caracteres, y lo escrito se muestra como la causal (en la alerta, en el tooltip y en el historial de decisiones).
- **Revocar un rechazo** no pide motivo: la OP vuelve a Pendiente. Cada decisión queda registrada. La alerta del detalle muestra la última (quién y cuándo; la causal, si fue rechazo) y, cuando hay más de una, suma «Ver historial».
- **Centralizar/Pagos:**
  - Cada fila lleva, en la segunda línea del nombre del archivo, el tag del canal de origen: «Por sistema» o «Manual».
  - El menú ⋮ ya no muestra Solicitar Pago ni Rechazar Solicitud: aprobar o rechazar la OP le corresponde al aprobador.

### Historial sin operaciones

Corresponde a «Sin operaciones» en la página «Errores / casuísticas».

1. Abrir el prototipo.

Qué observar: el historial muestra el estado vacío «Aún no hay operaciones», sin tabla.

### Error al cargar

Corresponde a «Errores · Error al cargar el historial».

1. Abrir el prototipo y presionar **Entendido** en el modal.

Qué observar: la tabla queda en carga y se abre el modal «Tuvimos un problema», con el texto «El sistema no responde. Vuelve a intentarlo en unos minutos.» y un solo botón: «Entendido».

### Error al aprobar o revocar

Corresponde a «Errores · Error al aprobar», que también cubre revocar.

1. Abrir el menú ⋮ de la OP 11696, elegir **Aprobar** y presionar **Enviar a SAP**. Cuando aparezca el aviso, presionar **Enviar a SAP** otra vez.
2. Rechazar una OP (eso funciona normal), elegir **Revocar rechazo** y presionar **Revocar**. Cuando aparezca el aviso, presionar **Revocar** otra vez.
3. Repetir desde **Ver detalle** de otra OP Pendiente.

Qué observar:

- El primer intento con cada OP falla. El modal sigue abierto y muestra un aviso: «No pudimos registrar la aprobación. Vuelve a intentarlo.» (al revocar: «No pudimos revocar el rechazo. Vuelve a intentarlo.»).
- El botón principal reintenta, y el segundo intento funciona.

### Error al rechazar

Corresponde a «Errores · Error al rechazar».

1. Abrir el menú ⋮ de la OP 11695 y elegir **Rechazar**. Elegir una causal y presionar **Rechazar OP**.
2. Cuando aparezca el aviso, presionar **Rechazar OP** otra vez.

Qué observar:

- El primer intento con cada OP falla. El modal sigue abierto, conserva la causal y el motivo, y muestra el aviso «No pudimos registrar el rechazo. Vuelve a intentarlo.»
- El reintento registra el rechazo.

### Error al exportar

Corresponde a «Errores · Error al exportar».

1. Presionar **Exportar** en el historial y, cuando aparezca el aviso, presionarlo otra vez.
2. Entrar a **Ver detalle** de una OP y repetir.

Qué observar:

- El botón queda en carga y después aparece el aviso de error «No pudimos descargar el archivo. Vuelve a intentarlo.» La tabla sigue disponible.
- Falla el primer intento en el historial y en el detalle de cada OP. El reintento muestra el aviso de éxito con el nombre del archivo.

### Varios items (escalabilidad futura)

Corresponde a la sección «Módulo aprobador / escalabilidad (futura)» de la página «Happy path».

1. Abrir el prototipo.
2. Elegir «Licencias médicas» en Item de operación y presionar **Buscar**.
3. Entrar a **Ver detalle** de la OP 11697 y abrir sus filtros.
4. Volver, elegir «Easy Cancha» y presionar **Buscar**.

Qué observar:

- Sin item elegido, el historial dice «Elige un item de operación» y «Selecciona un item y presiona Buscar para ver sus OPs.»
- Licencias médicas muestra las OPs 11697, 11694, 11690 y 11681. En su detalle, la columna «Causal de emisión» trae valores: se filtra y se ordena (en Pago Reembolso va con «-», sin filtro ni orden).
- Easy Cancha no tiene OPs, así que muestra «Aún no hay operaciones de Easy Cancha». En Figma, este estado usa Licencias médicas como ejemplo.
- En la fase 1 el aprobador tiene un solo item. Por eso, en los otros seis prototipos el selector y Buscar están deshabilitados.

## Dónde está lo demás

- **Pantallas, medidas y notas de cada estado:** en el handoff de Figma.
  - [Happy path · Módulo aprobador / Reembolso](https://www.figma.com/design/0k5aH2hbfsvgHUSgOR64ik/CCP-Handoff-Solicitud-pagos?node-id=7001-74128)
  - [Happy path · Módulo aprobador / escalabilidad (futura)](https://www.figma.com/design/0k5aH2hbfsvgHUSgOR64ik/CCP-Handoff-Solicitud-pagos?node-id=7003-171273)
  - [Happy path · Centralizar/Pagos](https://www.figma.com/design/0k5aH2hbfsvgHUSgOR64ik/CCP-Handoff-Solicitud-pagos?node-id=7004-183264)
  - [Errores / casuísticas · Módulo aprobador / Reembolso](https://www.figma.com/design/0k5aH2hbfsvgHUSgOR64ik/CCP-Handoff-Solicitud-pagos?node-id=7005-185467)
- **Racionales y reglas del módulo:** en el [Read me del handoff](https://www.figma.com/design/0k5aH2hbfsvgHUSgOR64ik/CCP-Handoff-Solicitud-pagos?node-id=7003-181438). Aquí no se repiten, para que exista una sola versión.

## Sobre los datos

- Los nombres, RUT, cuentas y montos son de ejemplo. El total de casos y el monto de cada OP cuadran con las transacciones de su detalle, así que se puede seguir una misma OP de una pantalla a otra.
- Las opciones de los filtros y de Item de operación las carga el back en la implementación. Las de Tipo de beneficio, Causal de emisión y Concepto, y los items distintos de Pago Reembolso, son de ejemplo.
- El prototipo trabaja con la fecha 06/10/2026. Las decisiones quedan registradas con esa fecha y la hora real.
- Cada prototipo cambia solo lo que dice su nombre. Por ejemplo, en «Historial sin operaciones» Centralizar/Pagos muestra los mismos datos que el principal.

## Archivos

```
happy-path-aprobaciones.html    principal
sin-operaciones.html
error-cargar.html
error-aprobar.html
error-rechazar.html
error-exportar.html
escalabilidad-items.html
index.html                      redirige al principal
recursos/
  estilos.css                   estilos, con los tokens de color al inicio
  datos.js                      datos de ejemplo y las utilidades que los generan
  app.js                        comportamiento
  logo-esencial.png
```

Los siete HTML comparten los archivos de `recursos/`. Cada uno declara su caso con una sola línea, `window.CASO`, antes de cargar los scripts. Funcionan publicados y también abriéndolos directamente desde la carpeta.
