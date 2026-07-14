# CONTEXTO — SIGMA (Seminario Integrador · Grupo 6)

> Fuente única de verdad del proyecto. Se actualiza a medida que avanzamos.
> Última actualización: 2026-07-09

---

## 0. Meta

- **Materia:** Seminario Integrador — UTN-FRRe
- **Grupo:** G6 — Brites, Elisa Alejandra · Cettour, Ivo Claudio · Gonzalez, Matías Exequiel · Maldonado, Leandro Adrian · Martin Rodich, Victoria · Moray, Maria Paz · Ozuna Veron, Augusto Lautaro
- **Repositorio:** https://github.com/matiasgzlez/SIGMA-Seminario-Integrador-G6
- **Próxima entrega (carpeta):** **17/07/2026**

### Checklist de la entrega del 17/07

| # | Sección | Estado | Fuente disponible |
|---|---------|--------|-------------------|
| 1 | Fuentes de recolección de requerimientos | ⬜ pendiente | — |
| 2 | Declaración del problema + restricciones (situación actual) | 🟡 parcial (inferido) | — |
| 3 | Objetivos del nuevo sistema | ⬜ pendiente | — |
| 4 | Misión, Visión y Alcance | ⬜ pendiente | — |
| 5 | Producto y potenciales clientes | 🟡 parcial (inferido) | — |
| 6 | Diagrama de Contexto (modelado del ambiente) | ⬜ pendiente | — |
| 7 | Glosario de Términos | ✅ tenemos | PDF Glosario |
| 8 | Modelo de Tablas | 🟠 **a corregir** | PDF SQL + ER (ver §11) |
| 9 | Diccionario de Datos | 🟠 **a corregir** | PDF Diccionario |
| 10 | Mapa de Historias | 🟢 corregido (propuesta, §13.2) — validar | Story map por sprint |
| 11 | Road Map (Plan de release) | 🟢 corregido (propuesta, §13.2) — validar | Cronograma 7 sprints |
| 12 | Herramientas de trabajo en equipo | ⬜ pendiente | — |
| 13 | Arquitectura de Hardware y Software | ⬜ pendiente | — |

Leyenda: ✅ listo · 🟡 parcial · 🟠 tenemos pero requiere corrección · ⬜ pendiente

### Artefactos del proyecto
- `contexto.md` — fuente de verdad (este archivo).
- `docs/entrega-17-07/hu-antes-despues.pdf` — comparativa de HU antes/después de la corrección.
- `prototipo/index.html` — prototipo navegable (localhost: `cd prototipo && npm run dev` → :3000; Vercel-ready). En curso: CRUD real con localStorage.
- `prototipo/roadmap.html` — story map / tablero de sprints editable.
- **GitHub:** 32 Issues (1×HU) + 7 milestones (sprints) + labels. Falta el Project board visual (scope `project`).

---

## 1. De qué se trata SIGMA (resumen)

Sistema web de **gestión de mantenimiento de activos e infraestructura** de una facultad. Digitaliza y da trazabilidad al ciclo completo:

**Falla detectada → Ticket/Solicitud → Validación → Orden de Trabajo → Tareas ejecutadas por técnicos → Conformidad → Cierre.**

Además gestiona:
- **Mantenimiento preventivo** planificado (planes + plantillas de tareas por tipo de activo).
- **Inventario de depósito** (materiales consumibles y herramientas) con stock, compras, proveedores y remitos.
- **Prestadores de servicio externos** cuando el trabajo excede la capacidad del equipo propio.
- **Tablero de KPIs** para el área de infraestructura.

### Roles del sistema (3, cobertura total sin solapamiento)
| Rol | Qué hace |
|-----|----------|
| **Administrador** | Máximos permisos. Valida tickets, genera OT, asigna técnicos, gestiona activos/espacios/inventario/planes preventivos, registra conformidad. |
| **Técnico** | Ejecuta las OT/tareas. Tiene especialidad y disponibilidad. Consume materiales y usa herramientas. |
| **Usuario Autorizado** | Responsable de un área, habilitado para **registrar tickets** y registrar la **conformidad** del trabajo. |

---

## 2. Situación actual / Problema (borrador — §2 y §5 de la entrega)

> _Inferido del dominio. Reemplazar/ampliar con el documento oficial de "situación actual" cuando lo carguemos._

**Problema:** la gestión del mantenimiento de la facultad se lleva de forma manual/dispersa (papel, planillas, comunicación informal), lo que dificulta la **trazabilidad** de las solicitudes, la **asignación** de técnicos, el **control de stock** del depósito y la **medición de desempeño** (KPIs). No hay un registro único del estado de los activos ni del historial de intervenciones.

**Restricciones (a completar):** presupuesto/tiempo académico, tecnología disponible, un único ente (la facultad), etc.

---

## 3–6. Objetivos / Misión-Visión-Alcance / Producto-Clientes / Diagrama de Contexto

⬜ **Pendiente** de cargar los documentos correspondientes. (Producto: sistema web interno de la facultad; clientes potenciales: otras facultades/UUAA con necesidad de gestión de mantenimiento de infraestructura.)

---

## 7. Glosario de Términos (fuente: PDF Glosario)

| Concepto | Descripción |
|----------|-------------|
| **Activo** | Elemento físico instalado en la facultad que requiere mantenimiento/control (edificios, aulas, mobiliario, laboratorios, áreas comunes). Estados: Operativo → En mantenimiento → Fuera de servicio → Retirado. |
| **Administrador** | Rol con más permisos. Gestiona usuarios, técnicos, activos, espacios, inventario, tickets, OT y planes preventivos; registra conformidad. |
| **Autorizado / Usuario autorizado** | Responsable de un área habilitado para cargar tickets. Uno de los 3 roles. |
| **Área** | Unidad organizacional con un responsable con autoridad para registrar tickets. |
| **Backlog** | Lista ordenada (prioridad/fecha límite) de OT pendientes. |
| **Cancelación de OT** | Terminar una OT antes de su fin normal; requiere motivo (ticket inválido/duplicado, activo dado de baja, reparación innecesaria, tercerización). |
| **Compras** | Registro de adquisiciones de materiales/herramientas para el depósito. |
| **Conformidad** | Retroalimentación de la OT: el solicitante del ticket confirma si el trabajo fue exitoso. Sin conformidad el ticket no se cierra (Finalizado → Cerrado). |
| **Diagnóstico** | Evaluación del problema (pre-diagnóstico del admin o diagnóstico del técnico en el lugar). Describe causa, alcance y solución requerida. |
| **Director de Infraestructura** | Autoridad del área; planifica, asigna técnicos a OT y coordina el equipo. |
| **Edificio** | Infraestructura estable donde se desarrollan las actividades. |
| **Egreso** | Salida de material/herramienta que disminuye stock. Automático al consumir material en tarea o entregar herramienta. |
| **Especialidad** | Área de conocimiento técnico (eléctrica, civil, refrigeración…). |
| **Espacio** | Lugar donde se encuentra el activo a reparar. |
| **Estado** | Etapa del ciclo de vida de una entidad (ticket, OT, tarea, activo, herramienta). |
| **Evidencia** | Imágenes en ticket u OT que respaldan el estado del activo/incidente. |
| **Falla** | Clasificación del problema reportado (eléctrica, mecánica, estructural, sanitaria…). Un ticket puede reportar una o más fallas. |
| **Herramienta** | Instrumento perdurable que usan los técnicos. Estados: Disponible → En uso → En reparación. |
| **Indicador de gestión (KPI)** | Métrica de desempeño del área (tiempos, productividad, consumo de materiales…). |
| **Ingreso** | Entrada de material/herramienta al depósito (aumenta stock) vía remito de compra. |
| **Inventario de Activo** | Registro de activos instalados (nº inventario, lugar, estado, historial). Entidad `Activos`. |
| **Inventario de Depósito** | Cantidad disponible de materiales/herramientas. Entidad `ItemInventario` + `Materiales`/`Herramientas`. |
| **ItemInventario** | Entidad general del inventario; se especializa en Materiales (consumibles) y Herramientas (perdurables), cobertura total sin solapamiento. |
| **Línea de Compra** | Detalle de cada ítem dentro de una compra (producto, cantidad, monto). |
| **Mantenimiento Correctivo** | Reparación de un desperfecto ya ocurrido; se origina en un ticket. |
| **Mantenimiento Preventivo** | Intervención planificada antes de que ocurra la falla. |
| **Materiales** | Insumo consumible que se descuenta del inventario al usarse. |
| **Orden de Trabajo (OT)** | Autorización generada a partir de un ticket (o plan) que especifica la tarea del técnico. Estados: Creada → Asignada → En ejecución → Finalizada / Cancelada. |
| **Personas** | (Entidad general de datos comunes; **ver corrección de la profe en §11**). |
| **Plan de Mantenimiento Preventivo** | Conjunto de OT: qué activos, con qué frecuencia, qué tarea y responsables. Genera OT preventivas automáticamente. |
| **Plantillas Tareas** | Modelo predefinido de tarea asociado a un plan preventivo. |
| **Prestadores de Servicio** | Empresa/profesional externo contratado para trabajos que no cubre el personal propio. |
| **Prioridad** | Nivel de importancia asignado a una OT. |
| **Proveedores** | Personas/empresas a las que se les compran bienes. |
| **Remito** | Documento que confirma el ingreso de materiales al depósito. |
| **Stock / Stock mínimo** | Cantidad disponible / cantidad mínima a mantener. |
| **Tablero** | Panel visual con los KPIs del área. |
| **Tarea (dentro de OT)** | Actividad dentro de una OT. La OT finaliza cuando todas sus tareas están completas. Estados: Pendiente → En ejecución → Completada. |
| **Técnico** | Personal que ejecuta las OT. Tiene especialidad y disponibilidad. |
| **Ticket** | Registro formal de una necesidad de mantenimiento. Entrada del sistema. Estados: Creado → Validado → Asignado → En ejecución → Finalizado → Cerrado / Rechazado. Genera al menos una OT. |
| **Tipo de Activo** | Categoría que agrupa activos por naturaleza (aires, mobiliario, luminarias…). |
| **Tipo de Prestación** | Clasificación del servicio de un prestador externo. |
| **Trazabilidad** | Seguir el historial completo de ticket, OT, activo o acción de usuario. |
| **Usuario** | Persona que interactúa con el sistema, con un rol asignado. |

---

## 8. Modelo de Dominio (Entidad-Relación) — conceptual

El ER (imagen `docs/fuentes/`) modela: `Facultad` tiene `Edificios` → `Espacios` → `Áreas`; `Personas` ES-A {Administrador, Técnico, Usuario Autorizado}; `Activos` se localizan en Espacios y se clasifican en `TipoActivo`; `Fallas` reportan sobre Activos; `Tickets` los crea el Usuario Autorizado y los valida el Administrador; una OT `TareasOT` se ejecutan por Técnicos, consumen `Materiales` y usan `Herramientas`; `Mantenimiento Preventivo` con `PlantillasTareas` genera OT; `ItemInventario` ES-A {Herramientas, Materiales}; `Compras`→`Línea de Compra`←`Proveedores`; `Prestador de Servicio` brinda `Tipo Prestación`.

> ⚠️ **La profe aclaró que el ER está conceptualmente bien, pero mal traducido a tablas.** Ver §11.

---

## 9. Modelo de Tablas — VERSIÓN ACTUAL (entregada, con errores)

Fuente: PDF "Sentencias SQL". Tablas: `facultad, edificios, espacios, areas, tiposActivos, activos, clasificacionActivos, personas, administradores, tecnicos, autorizados, personasConformanFacultad, fallas, tickets, ticketReportaFalla, ticketInvolucraActivo, ordenesTrabajo, plantillaTareasOT, tareasOT, tecnicoEstaAsignadoTareaOT, tecnicoControlaActivo, ordenTrabajoInvolucraActivo, ordenTrabajoContrataServicio, plantillaMantenimientosPreventivos, mantenimientosPreventivos, ordenesDeTrabajoDelMantPrev, tecnicosAsignadosAPlanDeMantenimiento, tipoPrestacion, prestadoresServicio, prestadorServicioBrinda, proveedores, compras, lineaCompra, itemsInventario, herramientas, materiales, tareasOTConsumeMateriales, tecnicoUtilizaHerramienta`.

El SQL completo original está en `docs/fuentes/` (referencia).

---

## 10. Diccionario de Datos

Fuente: PDF "Diccionario". Estructura por columna: `Tabla | Campo | Tipo | Longitud | Clave | Es Nulo | Es Único | Descripción`. Se regenerará junto con el modelo corregido (§11). Estados clave (ENUM):
- **activos.estado:** Operativo, En mantenimiento, Fuera de servicio, Retirado.
- **tickets.estado:** Creado, Validado, Asignado, En ejecución, Pendiente, Finalizado, Cerrado, Rechazado.
- **ordenesTrabajo.estado:** Creada, Asignada, En ejecución, Finalizada, Cancelada.
- **tareasOT.estado:** Creada, Asignada, En ejecución, Pendiente, Finalizada, Cancelada.

---

## 11. ⭐ CORRECCIONES DE LA PROFE (16/06/2026) + fix propuesto

> Estas correcciones aplican al **Modelo de Tablas** y **Diccionario de Datos**. Hay que rehacerlos para el 17/07. Cada punto tiene el fix que propongo; los marcados con ❓ requieren tu decisión.

| # | Observación de la profe | Fix propuesto |
|---|-------------------------|---------------|
| 1 | "Presentaron un ER, se pedía un **Modelo de Tablas**." | Entregar el modelo **relacional en tablas** (columnas, PK, FK; sin rombos ni ES-A). El SQL ya es base; refinarlo con los puntos siguientes y presentarlo como tal. |
| 2 | Tabla **Personas** no tiene sentido; con Administradores/Técnicos/Autorizados basta (agregando nombre/apellido). Salvo que Personas sea compartida por otros sistemas. | **Eliminar `personas`**. Llevar nombre, apellido, dni, cuil, email, telefono, fechaNacimiento a cada tabla de rol. Revisar `personasConformanFacultad` (¿la facultad es única? → posible `idFacultad` como atributo). ❓ ¿Personas se comparte con otro sistema? Si sí, se mantiene. |
| 3 | **Tickets.diagnosticoEstado / diagnosticoDescripcion**: ¿cuándo y quién los informa? | El diagnóstico del técnico va en la **OT/Tarea**, no en el ticket. Dejar en ticket a lo sumo un **preDiagnóstico** opcional que carga el Administrador al validar. ❓ decidir: eliminarlos del ticket o dejar solo `preDiagnostico`. |
| 4 | **Fallas del ticket**: al crear el ticket aún no se identifican. ¿Cuándo/quién? Tiene más sentido que **cada TareaOT se relacione con una falla**. | **Eliminar `ticketReportaFalla`**. Agregar `tareasOT.idFalla` (FK, nullable). La falla se identifica en el diagnóstico (técnico), no al crear el ticket. |
| 5 | **ordenesTrabajo.fechaReparacion** es ambigua (¿creación, inicio, cierre?). | Reemplazar por fechas explícitas: `fechaCreacion`, `fechaProgramada`, `fechaFinalizacion`. |
| 6 | **tecnicoEstaAsignadoTareaOT.idEdificio**: ¿por qué está? | **Eliminar `idEdificio`**. PK = (tecnico, idTareaOT). (En el SQL ya está corregido; asegurar que quede así en el diccionario). |
| 7 | **ordenTrabajoInvolucraActivo**: una OT es para UNA solicitud, y esta es por fallas en **UN ÚNICO ACTIVO**. | **Eliminar `ordenTrabajoInvolucraActivo` y `ticketInvolucraActivo`** (N:M). Poner `idActivo` como FK **único** en `tickets` y en `ordenesTrabajo`. |
| 8 | **ordenTrabajoContrataServicio** no existe. | **Eliminar**. El prestador va como atributo en TareasOT (punto 10). |
| 9 | **ordenesDeTrabajoDelMantPrev** no existe. | **Eliminar**. La OT lleva `idMantenimientoPreventivo` como atributo (punto 11). |
| 10 | El prestador de servicios de una tarea debe ser **atributo en TareasOT**. | Agregar `tareasOT.idPrestadorServicio` (FK, nullable). |
| 11 | Si la OT es de un Mantenimiento Preventivo, debe ser **atributo (nullable) en la OT**; nulo si viene de un Ticket, y viceversa. | `ordenesTrabajo`: `idTicket` (FK, nullable) + `idMantenimientoPreventivo` (FK, nullable), con regla: exactamente uno de los dos con valor. |
| 12 | El ER está bien conceptualmente pero mal plasmado en tablas. "Deben aprender a hacer un Modelo de Tablas correcto." | Aplicar 1–11 y presentar el modelo relacional limpio + diccionario coherente. |

### 11.1 Modelo de Tablas CORREGIDO (propuesta a validar)

**Roles (sin `personas`):**
- `administradores(legajo PK, nombre, apellido, dni, cuil, email, telefono, fechaNacimiento, fechaAsuncion)`
- `tecnicos(legajo PK, nombre, apellido, dni, cuil, email, telefono, fechaNacimiento, especialidad, disponibilidad)`
- `autorizados(legajo PK, nombre, apellido, dni, cuil, email, telefono, fechaNacimiento, idArea FK)`

**Estructura física:**
- `facultad(idFacultad PK, nombre, cuit, telefono, direccion)`
- `edificios(idEdificio PK, nombre, direccion, idFacultad FK)`
- `espacios(idEspacio PK, idEdificio FK, nombre, tipo, piso, numero, dimensiones)`
- `areas(idArea PK, nombre, idAutorizado FK, idEspacio FK)` ⚠️ dependencia circular areas↔autorizados (revisar)

**Activos:**
- `tiposActivos(idTipoActivo PK, nombre, descripcion, observaciones)`
- `activos(codigo PK, fechaAlta, descripcion, categoria, subcategoria, fechaInstalacion, estado ENUM, fechaUltMantenimiento, idEspacio FK)`
- `clasificacionActivos(idActivo, idTipoActivo)` — N:M (o hacerlo 1:N con `activos.idTipoActivo` ❓)
- `fallas(idFalla PK, tipo, descripcion, idActivo FK)`

**Tickets / OT / Tareas:**
- `tickets(idTicket PK, fechaAlta, descripcion, estado ENUM, conformidad, evidencia, preDiagnostico?, idActivo FK, personaAutorizada FK→autorizados, idAdministrador FK→administradores nullable)` ← **idActivo único**, sin N:M
- `ordenesTrabajo(idOrdenTrabajo PK, descripcion, estado ENUM, evidencia, fechaCreacion, fechaProgramada, fechaFinalizacion, idActivo FK, idTicket FK nullable, idMantenimientoPreventivo FK nullable)` ← regla: uno de idTicket/idMantPrev
- `plantillaTareasOT(idPlantillaTareaOT PK, descripcion)`
- `tareasOT(idTareaOT PK, descripcion, estado ENUM, prioridad, fechaInicio, fechaFinalizacion, idOrdenTrabajo FK, idPlantillaTareaOT FK nullable, idPrestadorServicio FK nullable, idFalla FK nullable)`
- `tecnicoEstaAsignadoTareaOT(tecnico FK, idTareaOT FK, fechaAsignacion, activo)` — PK(tecnico, idTareaOT), **sin idEdificio**
- `tareasOTConsumeMateriales(idTareaOT, idMaterial, fecha, cantidad)`

**Mantenimiento preventivo:**
- `plantillaMantenimientosPreventivos(idPlantillaMantenimientoPreventivo PK, nombre, frecuencia)`
- `mantenimientosPreventivos(idMantenimientoPreventivo PK, idAdministrador FK, idTipoActivo FK, idPlantillaMantenimientoPreventivo FK nullable)`
- `tecnicosAsignadosAPlanDeMantenimiento(idMantenimientoPreventivo, idTecnico, fechaAsignacion, activo)`

**Prestadores:**
- `tipoPrestacion(idTipoPrestacion PK, nombre, descripcion)`
- `prestadoresServicio(idPrestadorServicio PK, nombre, cuil, telefono, email, garantia)`
- `prestadorServicioBrinda(idPrestadorServicio, idTipoPrestacion)`

**Inventario / Compras:**
- `proveedores(idProveedor PK, nombre, cuit, telefono, email, direccion, rubro, observacion)`
- `compras(nroFactura PK, fecha, tipoFactura, observacion, idProveedor FK)`
- `lineaCompra(idLineaCompra, factura, monto, descripcion, cantidad)` — PK(idLineaCompra, factura)
- `itemsInventario(idItem PK, nombre, codigo, descripcion, estado, observacion, idFacultad FK, idLineaCompra+factura FK)`
- `herramientas(idHerramienta PK/FK→itemsInventario, estado)`
- `materiales(idMaterial PK/FK→itemsInventario, stockActual, stockMinimo, fechaVencimiento)`
- `tecnicoUtilizaHerramienta(idHerramienta, idTecnico, fecha, devuelta)`

**Tablas ELIMINADAS respecto de la versión anterior:** `personas`, `personasConformanFacultad`(revisar), `ticketReportaFalla`, `ticketInvolucraActivo`, `ordenTrabajoInvolucraActivo`, `ordenTrabajoContrataServicio`, `ordenesDeTrabajoDelMantPrev`. (`tecnicoControlaActivo` estaba en el SQL pero no en glosario/diccionario → ❓ revisar si se mantiene.)

---

## 12–13. Mapa de Historias · Road Map (VERSIÓN ACTUAL — pendiente de corrección de HU)

**Cronograma:** 7 sprints de **2 semanas** c/u. Ventana total: **10/08/2026 → 26/11/2026**.
Fechas indicativas por sprint (2 semanas): S1 10–23 ago · S2 24 ago–6 sep · S3 7–20 sep · S4 21 sep–4 oct · S5 5–18 oct · S6 19 oct–1 nov · S7 2–15 nov (+ buffer hasta 26 nov).

> Los números de HU salteados (HU-01 a 04, 24, 25, 28, 31, 39) corresponden a HU **eliminadas/corregidas en el momento** con la profe. No se buscan. Total actual: **35 HU**.
> ⭐ HU-10 y HU-19 aparecen **destacadas (negras)** en el tablero — revisar por qué (¿críticas / en discusión?).

### SPRINT 1 — ABM base / configuración
| HU | Rol | Historia |
|----|-----|----------|
| HU-05 | Administrador | Gestionar edificios, espacios y áreas de la facultad, para la asignación correcta de tickets. |
| HU-06 | Administrador | Gestionar los técnicos, para saber con qué recursos humanos cuento al asignar una OT. |
| HU-07 | Administrador | Registrar usuarios autorizados y asignarles un área, para habilitarlos a cargar tickets. |
| HU-08 | Administrador | Gestionar los activos físicos, para mantener actualizado el inventario. |

### SPRINT 2 — Ticket + validación + plantillas
| HU | Rol | Historia |
|----|-----|----------|
| HU-09 | Usuario autorizado | Registrar un ticket, para informar un desperfecto. |
| ⭐HU-10 | Técnico | Registrar el diagnóstico del ticket, para preparar la OT. |
| HU-11 | Administrador | Validar o rechazar un ticket, para determinar si se genera una OT. |
| HU-12 | Administrador | Visualizar los tickets, para conocer las solicitudes de mantenimiento. |
| HU-13 | Administrador | Gestionar la plantilla de tareas, para estandarizar la creación de OT. |
| HU-14 | Administrador | Gestionar el inventario, para mantener actualizado el catálogo del depósito. |

### SPRINT 3 — Inventario/stock + creación de OT
| HU | Rol | Historia |
|----|-----|----------|
| HU-15 | Administrador | Registrar ingresos por remito, para mantener actualizado el stock. |
| HU-38 | Administrador | Importar inventario inicial desde Excel, para agilizar la carga inicial. |
| HU-16 | Administrador | Visualizar el stock de materiales, para controlar la disponibilidad antes de asignar una OT. |
| HU-17 | Administrador | Crear OT, para planificar tareas de mantenimiento. |
| ⭐HU-19 | Administrador | Asignar tareas a la OT, para especificar las actividades que deben realizarse. |
| HU-18 | Administrador | Asignar un técnico a una tarea, para que se ejecute el mantenimiento correspondiente. |
| HU-20 | Administrador | Priorizar las OT pendientes, para asignar el trabajo según su importancia. |

### SPRINT 4 — Ejecución de tareas (técnico) + cierre OT
| HU | Rol | Historia |
|----|-----|----------|
| HU-21 | Técnico | Consultar las tareas de la OT, para saber qué tengo que hacer. |
| HU-22 | Técnico | Registrar repuestos utilizados en una tarea, para asegurar la trazabilidad. |
| HU-23 | Técnico | Agregar una observación a una tarea, para registrar actividades adicionales. |
| HU-26 | Administrador | Cerrar la OT, para finalizar formalmente el proceso. |

### SPRINT 5 — Seguimiento + preventivo + consultas
| HU | Rol | Historia |
|----|-----|----------|
| HU-27 | Administrador | Consultar las OT, para realizar el seguimiento de las tareas programadas. |
| HU-29 | Administrador | Gestionar los planes de mantenimiento preventivo, para anticiparse a las fallas críticas. |
| HU-30 | Administrador | Consultar tickets, para localizar rápidamente un ticket. |
| HU-32 | Usuario autorizado | Consultar mis tickets y su estado, para hacer seguimiento. |

### SPRINT 6 — Autenticación / usuarios / alertas
| HU | Rol | Historia |
|----|-----|----------|
| HU-33 | Usuario | Ingresar con credenciales asignadas, para acceder de forma segura. |
| HU-34 | Usuario | Recuperar mi contraseña, para no perder el acceso al sistema. |
| HU-35 | Administrador | Gestionar los usuarios, para controlar los accesos y permisos al sistema. |
| HU-36 | Administrador | Gestionar alertas de stock mínimo, para recibir alertas. |
| HU-37 | Administrador | Ver el historial de intervenciones por activo, para evaluar criticidad y decidir reemplazos. |

### SPRINT 7 — Prestadores externos + KPIs / tablero
| HU | Rol | Historia |
|----|-----|----------|
| HU-40 | Administrador | Registrar un prestador externo en una OT, para tareas que exceden el equipo propio. |
| HU-41 | Administrador | Identificar áreas con mayor incidencia, para priorizar mejoras estructurales. |
| HU-42 | Administrador | Visualizar el consumo de materiales, para mejorar la planificación de compras. |
| HU-43 | Administrador | Ver la carga de trabajo diaria por técnico, para equilibrar asignaciones. |
| HU-44 | Administrador | Ver tiempos promedio de resolución, para evaluar la eficiencia del área o personal. |

### 13.1 ⭐ CORRECCIONES DE LAS HU (profe) + fix aplicado

| # | Observación de la profe | Fix aplicado |
|---|-------------------------|--------------|
| 1 | En una HU pueden participar más de un rol; el nº de HU por sprint se evalúa por **complejidad (story points)**, no por cantidad. | **Metodológico:** asignar **story points** a cada HU y **balancear sprints por puntos**. Aceptar HU con más de un rol participante. → *pendiente estimar puntos con el equipo.* |
| 2 | Al dar de alta técnicos hay que cargar sus **especialidades**; no todos hacen todas las tareas. | **HU-06 (modif):** gestionar técnicos **incluyendo su especialidad**. La asignación de técnico a tarea debe filtrar por especialidad. |
| 3 | Faltan HU para dar de alta **especialidades** y **tipos de activos**. | **+HU-45 (nueva):** ABM de especialidades. **+HU-46 (nueva):** ABM de tipos de activos. Ambas en **Sprint 1** (las necesitan HU-06 y HU-08). |
| 4 | Antes de HU-10 debería haber una HU de asignación de técnico para diagnóstico… pero **conviene SACAR HU-10**: proceso lento, burocrático, mucho dato intermedio. | **HU-10 ELIMINADA.** No se agrega el paso de diagnóstico por técnico. |
| 5 | Tras generar el ticket, el paso es validar/no la OT; **al validar se debe crear la OT automáticamente** desde ese ticket. (sacar HU-10) | **HU-11 (modif):** validar/rechazar ticket → **al validar se genera la OT automáticamente**. Refuerza eliminar HU-10. |
| 6 | **HU-17 antes de HU-16**: primero creo la OT y después veo si tengo materiales/herramientas. No tiene sentido cargar los materiales de la OT por adelantado (sería predecir). | **Reordenar:** HU-17 (crear OT) → luego HU-16 (ver stock). La OT **no exige** cargar materiales al crearla; los materiales se registran en la **ejecución** (HU-22). |
| 7 | **HU-19 y HU-18 van dentro de HU-17**: son parte de las tareas de crear una OT. | **HU-18 y HU-19 ABSORBIDAS en HU-17.** Crear OT incluye definir sus tareas y asignar técnicos. |
| 8 | ¿Puede haber solicitudes (tickets) sin OT generada/evaluada? | **Sí:** un ticket en estado **Creado** (sin validar) o **Rechazado** no tiene OT. Las HU de consulta de tickets deben **filtrar por estado**. |
| 9 | **HU-20 "priorizar"**: ¿qué significa priorizar en nuestro sistema? Debe servir de algo; no se entiende. | **HU-20 revisada:** la **prioridad** es un atributo que se define **al crear la OT** (parte de HU-17) y sirve para **ordenar el backlog / la lista de tareas del técnico** (HU-21). Se elimina como HU suelta salvo que se le dé un propósito propio claro. ❓ |
| 10 | **HU-21**: ¿en función de fecha prevista de inicio o de prioridad? Distintos filtros. | **HU-21 (clarif):** consultar tareas con **filtros por fecha prevista de inicio y/o prioridad**. |
| 11 | **HU-23** forma parte de la HU donde se ejecuta/registra la tarea. | **HU-23 ABSORBIDA en HU-22** (registrar repuestos + observaciones al ejecutar la tarea). |
| 12 | **HU-30 más arriba**: antes de crear una OT debo poder consultar los tickets. | **HU-30 movida a Sprint 2** (posible **merge con HU-12** "visualizar tickets"). |
| 13 | **HU-40 va al crear la OT**: una OT puede resolverla un técnico **o un prestador externo**. | **HU-40 ABSORBIDA en HU-17** (al crear la OT / asignar tarea se elige técnico **o** prestador externo). Coincide con la corrección del modelo de datos (prestador como atributo de TareaOT). |
| 14 | "Registrar ingreso de repuestos" ¿no es lo mismo que dar de alta en el catálogo de inventario? ¿Qué hace registrar ingreso? | **HU-15 (clarif):** *registrar ingreso por remito* = **movimiento que aumenta el stock** (cantidad) de un ítem ya existente. Es **distinto** del alta en catálogo (HU-14/HU-08/HU-38), que define el ítem. Aclarar esta diferencia en la HU. |

**Resumen de cambios:** ➕ HU-45, HU-46 · ❌ HU-10 · 🔀 HU-18, HU-19, HU-40, HU-23 absorbidas · 🔁 reorden HU-17↔16, HU-30 arriba · ✏️ HU-06, HU-11, HU-15, HU-20, HU-21 reescritas.

### 13.2 ROADMAP CORREGIDO — HU FINALES (bien escritas)

> Decisiones cerradas (2026-07-09): HU-20 **eliminada** (prioridad vive en HU-17) · HU-12 y HU-30 **fusionadas** · HU-05 **dividida en 3** (edificios/espacios/áreas) · HU-23 en HU-22 · HU-18/19/40 en HU-17.
> **Story points (SP):** valores **borrador** para estimar juntos. Escala Fibonacci (1,2,3,5,8,13). Balancear sprints por SP (corrección #1). Total actual: **32 HU**.

**SPRINT 1 — Configuración base** · _SP≈24 (⚠️ sobrecargado, rebalancear al estimar)_
| HU | SP | Historia |
|----|----|----------|
| HU-05 | 3 | Como **administrador**, quiero gestionar (alta, baja y modificación) los **edificios** de la facultad, para tener registrada la estructura edilicia donde se ubican los activos. |
| HU-47 🆕 | 3 | Como **administrador**, quiero gestionar los **espacios** dentro de un edificio (aulas, laboratorios, oficinas), para localizar con precisión dónde está cada activo. |
| HU-48 🆕 | 3 | Como **administrador**, quiero gestionar las **áreas** funcionales y su responsable, para habilitar la carga y asignación correcta de tickets. |
| HU-45 🆕 | 2 | Como **administrador**, quiero gestionar las **especialidades**, para clasificar a los técnicos según el tipo de trabajo que pueden realizar. |
| HU-06 | 3 | Como **administrador**, quiero gestionar los **técnicos** y asignarles su **especialidad** y disponibilidad, para saber con qué recursos humanos cuento al asignar una OT. |
| HU-46 🆕 | 2 | Como **administrador**, quiero gestionar los **tipos de activos**, para categorizar los activos y asociarles planes de mantenimiento. |
| HU-08 | 5 | Como **administrador**, quiero gestionar los **activos físicos** y su ubicación, para mantener actualizado el inventario de activos. |
| HU-07 | 3 | Como **administrador**, quiero registrar **usuarios autorizados** y asignarles un área, para habilitarlos a cargar tickets. |

**SPRINT 2 — Ticket + consulta + estandarización** · _SP≈21_
| HU | SP | Historia |
|----|----|----------|
| HU-09 | 5 | Como **usuario autorizado**, quiero registrar un **ticket** con descripción y evidencia del desperfecto sobre un activo, para informar una necesidad de mantenimiento. |
| HU-12 | 5 | Como **administrador**, quiero **visualizar y consultar los tickets** con filtros (estado, fecha, activo, área), para conocer y localizar rápidamente las solicitudes. _(fusiona HU-30)_ |
| HU-11 | 5 | Como **administrador**, quiero **validar o rechazar un ticket**, para que al validarlo se **genere automáticamente una OT** y al rechazarlo se registre el motivo. |
| HU-13 | 3 | Como **administrador**, quiero gestionar la **plantilla de tareas**, para estandarizar la creación de las OT. |
| HU-14 | 3 | Como **administrador**, quiero gestionar (alta en **catálogo**) los ítems de inventario, para mantener actualizado el catálogo del depósito. |

**SPRINT 3 — Orden de Trabajo + stock** · _SP≈19_
| HU | SP | Historia |
|----|----|----------|
| HU-17 ⭐ | 8 | Como **administrador**, quiero **crear la OT** a partir de un ticket definiendo sus **tareas**, su **prioridad** y asignando a cada tarea un **técnico** (según especialidad) o un **prestador externo**, para planificar la ejecución del mantenimiento. _(absorbe HU-18, HU-19, HU-20, HU-40)_ |
| HU-16 | 3 | Como **administrador**, quiero **visualizar el stock** de materiales y herramientas, para verificar la disponibilidad al planificar/ejecutar una OT. |
| HU-15 | 3 | Como **administrador**, quiero **registrar el ingreso** de materiales/herramientas por remito, para **aumentar el stock** del depósito (distinto del alta en catálogo). |
| HU-38 | 5 | Como **administrador**, quiero **importar el inventario inicial desde Excel**, para agilizar la carga inicial del catálogo. |
| HU-49 🆕 | 2 | Como **administrador**, quiero **gestionar los prestadores de servicio** y sus tipos de prestación, para poder asignarlos a las tareas de una OT. |
| HU-50 🆕 | 3 | Como **administrador**, quiero **registrar la falla** asociada a cada tarea de la OT, para clasificar el problema y darle trazabilidad. |

**SPRINT 4 — Ejecución + cierre** · _SP≈13_
| HU | SP | Historia |
|----|----|----------|
| HU-21 | 5 | Como **técnico**, quiero **consultar mis tareas asignadas** con filtros por **fecha prevista de inicio** y por **prioridad**, para saber qué debo hacer y en qué orden. |
| HU-22 | 5 | Como **técnico**, quiero registrar en la tarea los **repuestos/materiales utilizados** y agregar **observaciones**, para asegurar la trazabilidad y documentar actividades adicionales. _(absorbe HU-23)_ |
| HU-26 | 3 | Como **administrador**, quiero **dar por cerrado el ticket** cuando su OT se finaliza, para concluir formalmente el proceso de mantenimiento. |

**SPRINT 5 — Seguimiento + preventivo** · _SP≈14_
| HU | SP | Historia |
|----|----|----------|
| HU-27 | 3 | Como **administrador**, quiero **consultar las OT** y su estado, para hacer seguimiento de las tareas programadas. |
| HU-29 | 8 | Como **administrador**, quiero gestionar los **planes de mantenimiento preventivo** (activos, frecuencia, plantillas, técnicos), para anticiparme a las fallas y generar OT preventivas automáticamente. |
| HU-32 | 3 | Como **usuario autorizado**, quiero **consultar mis tickets** y su estado, para hacer seguimiento de mis solicitudes. |

**SPRINT 6 — Autenticación / usuarios / alertas** · _SP≈19_
| HU | SP | Historia |
|----|----|----------|
| HU-33 | 3 | Como **usuario**, quiero **ingresar con mis credenciales**, para acceder de forma segura al sistema. |
| HU-34 | 3 | Como **usuario**, quiero **recuperar mi contraseña**, para no perder el acceso al sistema. |
| HU-35 | 5 | Como **administrador**, quiero **gestionar los usuarios** y sus permisos, para controlar los accesos al sistema. |
| HU-36 | 3 | Como **administrador**, quiero configurar **alertas de stock mínimo**, para ser notificado cuando un material cae por debajo del mínimo. |
| HU-37 | 5 | Como **administrador**, quiero ver el **historial de intervenciones por activo**, para evaluar su criticidad y decidir reemplazos. |

**SPRINT 7 — KPIs / Tablero** · _SP≈18_
| HU | SP | Historia |
|----|----|----------|
| HU-41 | 5 | Como **administrador**, quiero identificar las **áreas con mayor incidencia** de fallas, para priorizar mejoras estructurales. |
| HU-42 | 3 | Como **administrador**, quiero visualizar el **consumo de materiales**, para mejorar la planificación de compras. |
| HU-43 | 5 | Como **administrador**, quiero ver la **carga de trabajo diaria por técnico**, para equilibrar las asignaciones. |
| HU-44 | 5 | Como **administrador**, quiero ver los **tiempos promedio de resolución**, para evaluar la eficiencia del área y del personal. |

**HU eliminadas/absorbidas:** HU-10 (❌ diagnóstico burocrático) · HU-18, HU-19, HU-20, HU-40 (→ HU-17) · HU-23 (→ HU-22) · HU-30 (→ HU-12).

**Decisiones abiertas de HU (❓):**
1. ⚠️ **Sprint 1 sobrecargado (~24 SP)** vs. resto (~13–21). Rebalancear al estimar (mover 1–2 HU a S2/S3).
2. ✅ **RESUELTO (2026-07-09):** No se agrega HU de conformidad. El **administrador da por cerrado el ticket cuando la OT se finaliza** (HU-26). Pendiente menor: el término *Conformidad* del glosario y el campo `tickets.conformidad` quedarían sin uso → revisar al corregir el modelo de datos.
3. Confirmar **story points** definitivos (los de arriba son borrador).

### 13.3 Gaps detectados al analizar flujo + prototipo (2026-07-09)
- ✅ **RESUELTO — Prestadores:** creada **HU-49** (gestionar prestadores + tipos de prestación), Sprint 3. En el prototipo y GitHub (#33).
- ✅ **RESUELTO — Fallas:** creada **HU-50** (registrar la falla asociada a cada tarea de la OT), Sprint 3. En el prototipo y GitHub (#34).
- ✅ **Plantillas→OT:** ya contemplado por **HU-13** (crea plantillas) + **HU-17** (las aplica al crear la OT). No requiere HU nueva.
- ❓ **Cancelación de OT:** el glosario la define (con motivo) pero no hay HU ni flujo. ¿Se agrega? (no seleccionada por ahora)
- ❓ **Proveedores + Compras:** el modelo los tiene pero no hay HU. Definir si entran en el alcance.
- ❓ **Evidencia en ticket:** HU-09 menciona evidencia fotográfica; el alta no la captura (campo existe). Menor.
- 💡 **Automatizable:** alerta de stock mínimo (HU-36) como notificación activa; sugerir técnicos por especialidad al asignar tareas.
- ✅ Cobertura prototipo: **34/34 HU** representadas. Automatizado ya: validar→OT (HU-11), egreso/baja de stock al completar tarea, OT finalizada al completar todas las tareas, y plan preventivo→genera OT (HU-29).

### 13.4 Automatizaciones / reglas de negocio (NO son HU nuevas)
Se implementan como **criterios de aceptación de HU existentes** (evita fragmentar el backlog, como pidió la profe):
- **Estado de activo automático:** activo → "En mantenimiento" al poner la OT en ejecución; → "Operativo" al finalizarla. → regla de **HU-17 / HU-26 / HU-08**.
- **Técnico sugerido por especialidad:** al asignar tarea, se priorizan (⭐) los técnicos cuya especialidad matchea el tipo de activo. → criterio de **HU-17** (usa HU-06).
- **Materiales sugeridos:** al ejecutar, se proponen materiales según la falla; el técnico solo confirma. → criterio de **HU-22**.
- **Aviso de ticket duplicado:** al registrar, avisa si el activo ya tiene un ticket abierto (no bloquea, el usuario decide). → criterio de **HU-09**.
- **Tareas precargadas por plantilla:** al crear la OT, precarga las tareas estándar según el tipo de activo. → HU-13 / HU-17.
- **Preventivos por vencimiento:** el dashboard detecta planes que vencen (≤7 días) y ofrece generar la OT. → HU-29.
- **Cierre de ticket sugerido:** el dashboard lista tickets cuya OT finalizó, listos para cerrar (1 clic). → HU-26.
- **Orden automático de tareas (técnico):** su lista se ordena sola por prioridad + fecha prevista. → HU-21.
- **Notificación de asignaciones:** badge en el menú del técnico con el nº de tareas pendientes. → HU-21.
- Ya existentes: validar→OT (HU-11), egreso/stock al completar, OT finalizada auto, preventivo→OT (HU-29).

> **Corrección (prioridad del ticket):** la prioridad **NO** la carga el usuario autorizado. Según el glosario, la prioridad la asigna el área de infraestructura **a la OT**, y la tabla `tickets` del diccionario **no tiene** `prioridad`. Se quitó del alta de ticket; el admin la define en las **tareas de la OT** (HU-17). El prototipo la tenía mal en el ticket → corregido.

---

## 14–15. Herramientas de equipo · Arquitectura HW/SW

⬜ **Pendiente.**

---

## Preguntas abiertas (❓ decisiones del equipo)
1. ✅ **RESUELTO (2026-07-09):** Personas es exclusiva de SIGMA → **se elimina**; los datos personales van en administradores/tecnicos/autorizados.
2. Ticket: ¿eliminamos `diagnosticoEstado/Descripcion` o dejamos solo `preDiagnostico` del admin? SOLUCIONADO: Considerando que el preDiagnostico que realiza el administrador no será igual que el Diagnóstico que realice el técnico, mantenemos ambos, pero eliminamos diagnosticoEstado manteniendo solo Descrpición ya que tener ambos es redundante
3. `clasificacionActivos`: ¿N:M o un activo tiene un único `idTipoActivo`?
4. Dependencia circular `areas ↔ autorizados`: ¿cómo la resolvemos? --- SOLUCIONADO: SE SEPARA, dejamos en la tabla de autorizados el FK al área
5. ¿Mantenemos `tecnicoControlaActivo`?
6. `personasConformanFacultad`: si la facultad es única, ¿pasa a atributo? SOLUCIÓN: La facultad no es única por lo que no la consideramos atributos, varias personas pueden trabajar en varias facultades 
