<div align="center">

# 🔧 SIGMA

### Sistema Integral de Gestión de Mantenimiento de Activos

_“Todo tu mantenimiento, sumado.”_

<br>

![Estado](https://img.shields.io/badge/estado-prototipo_funcional-0B6B8C?style=for-the-badge)
![Historias](https://img.shields.io/badge/HU-34-F08A24?style=for-the-badge)
![Sprints](https://img.shields.io/badge/sprints-7-0B6B8C?style=for-the-badge)
![Entrega](https://img.shields.io/badge/entrega-17--07--2026-0C2733?style=for-the-badge)

![HTML](https://img.shields.io/badge/HTML-0C2733?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-0C2733?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-0C2733?style=flat-square&logo=javascript&logoColor=F08A24)
![UTN--FRRe](https://img.shields.io/badge/UTN--FRRe-Seminario_Integrador-0B6B8C?style=flat-square)

</div>

---

## 🧩 ¿Qué es?

**SIGMA** digitaliza y da trazabilidad al ciclo completo de **mantenimiento de activos e infraestructura** de una facultad. Reemplaza planillas y comunicación informal por un flujo único, medible y ordenado:

```
🎫 Ticket  →  ✅ Validar  →  ⚙️ OT automática  →  🧰 Tareas (técnico / prestador)  →  🔨 Ejecución  →  🔒 Cierre
```

---

## ✨ Características

| | Módulo | Qué hace |
|---|---|---|
| 🎫 | **Tickets** | El usuario autorizado reporta un desperfecto; el admin valida o rechaza. |
| ⚙️ | **Órdenes de trabajo** | Se generan **automáticamente** al validar; con tareas, prioridad, falla y asignación. |
| 🧰 | **Ejecución** | El técnico registra repuestos (baja stock solo) y observaciones. |
| 📦 | **Inventario** | Catálogo, stock, ingresos por remito, importación desde Excel y alertas de mínimo. |
| 🗓️ | **Mant. preventivo** | Planes que **generan OT preventivas automáticamente**. |
| 📊 | **Tablero KPIs** | Tiempos de resolución, consumo de materiales, carga por técnico, historial por activo. |
| 👥 | **3 roles** | Administrador · Técnico · Usuario autorizado. |

> ⚡ **Automatizaciones** para menos burocracia: OT automática al validar, egreso de stock al completar tareas, estado de activo automático, técnico sugerido por especialidad, materiales sugeridos, aviso de duplicados y más.

---

## 👥 Roles

| Rol | Qué hace |
|-----|----------|
| **🛡️ Administrador** | Valida tickets, arma OT, asigna técnicos/prestadores, gestiona activos, inventario y planes preventivos. |
| **🔧 Técnico** | Ejecuta las tareas de la OT, carga materiales y observaciones. |
| **📝 Usuario autorizado** | Registra tickets de su área y sigue su estado. |

---

## 🚀 Cómo correrlo

El prototipo es **estático** (HTML/CSS/JS + `localStorage`), sin build:

```bash
cd prototipo
npm run dev          # → http://localhost:3000
```

> 💡 También podés abrir `prototipo/index.html` directo en el navegador.
> Los datos se guardan en tu navegador; el botón **“⟲ Reiniciar datos demo”** restablece el set de ejemplo.

**Deploy:** listo para **Vercel** (estático, *Root Directory* = `prototipo`).

---

## 📁 Estructura

```
SIGMA-Seminario-Integrador-G6/
├── contexto.md              # 📖 Fuente de verdad (dominio, glosario, modelo, roadmap)
├── prototipo/               # 🖥️ Prototipo funcional navegable
│   ├── index.html
│   ├── styles.css           #    Estética iOS / Apple-like
│   └── app.js               #    Capa de datos (localStorage) + vistas + CRUD
└── docs/
    └── entrega-17-07/       # 📄 Comparativa de HU antes/después (HTML + PDF)
```

> 🧭 Dentro del prototipo, el botón **`❯ HU`** (arriba del logo) abre el índice de las 34 historias y te lleva a la pantalla donde cada una está implementada.

---

## 🗺️ Roadmap & gestión

- **7 sprints** de 2 semanas — del **10/08** al **26/11/2026**.
- **34 historias de usuario** con story points, gestionadas en **GitHub Projects** (issues + milestones por sprint + labels por rol).

📌 **Tablero:** [SIGMA — Roadmap G6](https://github.com/users/matiasgzlez/projects/4)

---

## 📚 Documentación

| Documento | Contenido |
|---|---|
| [`contexto.md`](contexto.md) | Situación, glosario, modelo de tablas + correcciones, roadmap de HU, automatizaciones. |
| [`docs/entrega-17-07/hu-antes-despues.pdf`](docs/entrega-17-07/hu-antes-despues.pdf) | Comparativa de HU antes/después de la corrección de cátedra. |

---

## 👨‍💻 Equipo — Grupo 6

Brites, Elisa Alejandra · Cettour, Ivo Claudio · Gonzalez, Matías Exequiel · Maldonado, Leandro Adrian · Martin Rodich, Victoria · Moray, Maria Paz · Ozuna Veron, Augusto Lautaro

<div align="center">
<br>

**Seminario Integrador · UTN — Facultad Regional Resistencia · 2026**

`Sigma Teal #0B6B8C` &nbsp;·&nbsp; `Signal Amber #F08A24` &nbsp;·&nbsp; `Deep Ink #0C2733`

</div>
