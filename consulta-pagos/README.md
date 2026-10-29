# Consulta de Pagos · prototipos HTML

Versión: v1.2 · Fecha: 29/10/2026

Estos tres prototipos muestran funcionando la **Consulta de Pagos** de CCP (HU ESENCIALS-3661). En esta pantalla, el back office busca por RUT o por folio en qué estado está el pago de un cliente y exporta el resultado.

Es un proyecto independiente de los prototipos de Aprobaciones de Pago que están en la raíz de este repositorio: tiene sus propios archivos y no comparte ninguno con ellos.

## Qué es y qué no es

- **Es una referencia** de comportamiento, textos y estados. Sirve para revisar cómo responde la pantalla: qué carga, qué cambia y qué dice.
- **No es código de producción.** Usa datos de ejemplo y no se conecta a ningún servicio. Al recargar la página, todo vuelve al inicio. Exportar no genera un archivo; solo muestra el aviso.
- **El diseño manda.** Si el prototipo y el Figma no coinciden, vale Figma.

## Los tres prototipos

| Prototipo | Objetivo | Link |
|---|---|---|
| Principal | Recorrer la consulta cuando todo sale bien: buscar, filtrar, ordenar, cambiar de página y exportar. También la validación del RUT y las búsquedas sin resultados | [index.html](https://jzamorano-ui.github.io/aprobaciones-pago/consulta-pagos/) |
| Error al buscar | Revisar qué pasa cuando el sistema no responde al buscar | [error-buscar.html](https://jzamorano-ui.github.io/aprobaciones-pago/consulta-pagos/error-buscar.html) |
| Error al exportar | Revisar qué pasa cuando falla la descarga del archivo | [error-exportar.html](https://jzamorano-ui.github.io/aprobaciones-pago/consulta-pagos/error-exportar.html) |

Todos abren en la Consulta de Pagos, con la sesión de «Paula Henríquez Soto», Ejecutiva backoffice Tesorería.

## Datos para buscar

Los ejemplos de los campos sirven para buscar: el RUT 12.345.678-5 y el folio 3848015.

| Búsqueda | Qué trae |
|---|---|
| RUT 12.345.678-5 | 13 solicitudes de Andrea Muñoz Pérez, de Reembolso y de Licencia médica, en los cuatro estados de pago. Son dos páginas |
| RUT 15.678.234-3 | 2 solicitudes de Rodrigo Saavedra Ortiz |
| RUT 76.543.210-3 | 3 solicitudes de Comercial Los Aromos SpA, un RUT de empresa |
| Folio 3848015 | 1 solicitud de Andrea Muñoz Pérez, pagada con vale vista |
| RUT 12.345.678-5 y folio 54123987 | Ninguna: ese folio es de otro RUT |
| Cualquier otro RUT válido, por ejemplo 11.111.111-1 | Ninguna |
| RUT 12.345.678-9 | No se puede buscar: el dígito verificador está errado |

## Cómo recorrer cada uno

### Principal

1. Escribir el RUT 12.345.678-5 y presionar **Buscar**.
2. Presionar el título de una columna, por ejemplo **Monto solicitado a pago**, y después presionarlo otra vez.
3. Presionar **Filtros**, elegir Estado de pago «Pagado a cuenta bancaria» y presionar **Aplicar filtros**. Después, quitar el filtro desde su chip o con **Limpiar filtros**.
4. Cambiar de página y presionar **Exportar**. Repetirlo después de buscar solo por folio y por RUT y folio, para revisar el nombre del archivo.
5. Desplazar la tabla hacia la derecha hasta la última columna.
6. Repetir la búsqueda con los otros datos de la tabla de arriba.

Qué observar:

- **Búsqueda:**
  - Buscar se habilita con un RUT válido o con un folio.
  - Al salir del campo, un RUT con el dígito verificador errado muestra «Ingresa un RUT válido» y Buscar queda deshabilitado.
  - Con RUT y folio, aparece la solicitud de ese folio solo si es de ese RUT.
  - Mientras busca, Buscar muestra la carga y la tabla muestra filas en esqueleto.
  - Una búsqueda nueva limpia los filtros y el orden.
- **Resultados:**
  - Van de la solicitud más reciente a la más antigua.
  - El RUT y el nombre del destinatario aparecen bajo el título de la tabla y en la columna RUT a pagar. Al buscar solo por folio, se toman de la solicitud encontrada.
  - Una celda sin dato muestra «—», por ejemplo en las solicitudes pagadas con vale vista.
- **Ordenar:** se ordenan todas las columnas menos Proceso y RUT a pagar. El primer clic ordena de forma ascendente y el segundo, descendente. Cada orden vuelve a la página 1.
- **Filtros:** Transacción, Estado de pago y Fecha solicitud de pago desde–hasta. Las fechas se eligen con el calendario y no se escriben: Enter, Espacio o ↓ lo abren, y Supr o Retroceso borran la fecha. Los filtros aplicados quedan como chips sobre la tabla.
- **Exportar:** muestra el aviso «Se descargó…» con el nombre del archivo, que depende de la búsqueda. Si falta el RUT o el folio, queda su palabra fija:

  | Búsqueda | Archivo |
  |---|---|
  | Solo RUT | `DetalleSolicitudPago_12345678-5_#Folio.xlsx` |
  | Solo folio | `DetalleSolicitudPago_#RUT_3848015.xlsx` |
  | RUT y folio | `DetalleSolicitudPago_12345678-5_3848015.xlsx` |

- **Estados vacíos:**
  - Antes de buscar: «Ingresa un RUT o un folio».
  - Si la búsqueda no encuentra solicitudes: «No encontramos solicitudes de pago».
  - En ambos casos, Filtros y Exportar quedan deshabilitados.
  - Si los filtros dejan la tabla vacía: «Sin resultados». Filtros sigue habilitado para cambiarlos y Exportar queda deshabilitado.

### Error al buscar

1. Escribir el RUT 12.345.678-5 y presionar **Buscar**.
2. Presionar **Entendido** y volver a presionar **Buscar**.

Qué observar:

- El primer intento abre el modal «Tuvimos un problema», con el texto «El sistema no responde. Vuelve a intentarlo en unos minutos.» y un solo botón: «Entendido».
- Al cerrarlo, la tabla queda como estaba.
- El reintento muestra los resultados.

### Error al exportar

1. Escribir el RUT 12.345.678-5 y presionar **Buscar**.
2. Presionar **Exportar** y, cuando aparezca el aviso, presionarlo otra vez.

Qué observar:

- El botón queda en carga y después aparece el aviso de error «No pudimos descargar el archivo. Vuelve a intentarlo.» La tabla y los filtros no cambian.
- El reintento muestra el aviso de éxito con el nombre del archivo.

## Sobre los datos

- Los nombres, RUT, folios, cuentas y montos son de ejemplo.
- El prototipo trabaja con la fecha 28/10/2026.

## Archivos

```
index.html                      principal
error-buscar.html
error-exportar.html
recursos/
  estilos.css                   estilos, con los tokens de color al inicio
  datos.js                      datos de ejemplo
  app.js                        comportamiento
  logo-esencial.png
```

Los tres HTML comparten los archivos de `recursos/`. Cada uno declara su caso con una sola línea, `window.CASO`, antes de cargar los scripts. Funcionan publicados y también abriéndolos directamente desde la carpeta.
