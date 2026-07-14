/* ============================================================
   SIGMA · Prototipo funcional — capa de datos + vistas
   Persistencia: localStorage ('sigma-db-v1')
   ============================================================ */

/* ---------- HU catalog (chips de referencia) ---------- */
const HU={
 'HU-05':'Como administrador, quiero gestionar los edificios de la facultad, para tener registrada la infraestructura.',
 'HU-06':'Como administrador, quiero gestionar los técnicos y su especialidad, para saber con qué recursos cuento al asignar una OT.',
 'HU-07':'Como administrador, quiero registrar usuarios autorizados y asignarles un área, para habilitarlos a cargar tickets.',
 'HU-08':'Como administrador, quiero gestionar los activos físicos y su ubicación, para mantener actualizado el inventario de activos.',
 'HU-09':'Como usuario autorizado, quiero registrar un ticket con descripción y evidencia, para informar una necesidad de mantenimiento.',
 'HU-11':'Como administrador, quiero validar o rechazar un ticket: al validarlo se genera automáticamente una OT.',
 'HU-12':'Como administrador, quiero visualizar y consultar los tickets con filtros, para conocer y localizar las solicitudes.',
 'HU-13':'Como administrador, quiero gestionar la plantilla de tareas, para estandarizar la creación de OT.',
 'HU-14':'Como administrador, quiero gestionar (alta en catálogo) los ítems de inventario, para mantener actualizado el catálogo.',
 'HU-15':'Como administrador, quiero registrar el ingreso por remito, para aumentar el stock del depósito.',
 'HU-16':'Como administrador, quiero visualizar el stock de materiales y herramientas, para verificar disponibilidad.',
 'HU-17':'Como administrador, quiero crear la OT definiendo sus tareas, prioridad y asignando técnico o prestador externo.',
 'HU-21':'Como técnico, quiero consultar mis tareas con filtros por fecha prevista y prioridad, para saber qué hacer y en qué orden.',
 'HU-22':'Como técnico, quiero registrar los repuestos utilizados y agregar observaciones, para asegurar la trazabilidad.',
 'HU-26':'Como administrador, quiero dar por cerrado el ticket cuando su OT se finaliza, para concluir el proceso.',
 'HU-27':'Como administrador, quiero consultar las OT y su estado, para hacer seguimiento de las tareas programadas.',
 'HU-29':'Como administrador, quiero gestionar los planes de mantenimiento preventivo, para anticiparme a las fallas.',
 'HU-32':'Como usuario autorizado, quiero consultar mis tickets y su estado, para hacer seguimiento.',
 'HU-33':'Como usuario, quiero ingresar con mis credenciales, para acceder de forma segura.',
 'HU-34':'Como usuario, quiero recuperar mi contraseña, para no perder el acceso.',
 'HU-35':'Como administrador, quiero gestionar los usuarios y sus permisos, para controlar los accesos al sistema.',
 'HU-36':'Como administrador, quiero configurar alertas de stock mínimo, para ser notificado.',
 'HU-37':'Como administrador, quiero ver el historial de intervenciones por activo, para evaluar criticidad.',
 'HU-38':'Como administrador, quiero importar el inventario inicial desde Excel, para agilizar la carga inicial del catálogo.',
 'HU-41':'Como administrador, quiero identificar las áreas con mayor incidencia, para priorizar mejoras.',
 'HU-42':'Como administrador, quiero visualizar el consumo de materiales, para planificar compras.',
 'HU-43':'Como administrador, quiero ver la carga de trabajo por técnico, para equilibrar asignaciones.',
 'HU-44':'Como administrador, quiero ver los tiempos promedio de resolución, para evaluar eficiencia.',
 'HU-45':'Como administrador, quiero gestionar las especialidades, para clasificar a los técnicos.',
 'HU-46':'Como administrador, quiero gestionar los tipos de activos, para categorizarlos.',
 'HU-47':'Como administrador, quiero gestionar los espacios de un edificio, para localizar cada activo.',
 'HU-48':'Como administrador, quiero gestionar las áreas y su responsable, para habilitar la carga de tickets.',
 'HU-49':'Como administrador, quiero gestionar los prestadores de servicio y sus tipos de prestación, para poder asignarlos a las tareas de una OT.',
 'HU-50':'Como administrador, quiero registrar la falla asociada a cada tarea de la OT, para clasificar el problema y darle trazabilidad.',
};
const huRef=(...ids)=>ids.filter(Boolean).map(id=>`<span class="hu-ref">${id}<span class="pop"><b>${id}</b>${HU[id]||''}</span></span>`).join('');

/* ---------- Store ---------- */
const DBKEY='sigma-db-v4';
const store={
  db:null,
  load(){ this.db=JSON.parse(localStorage.getItem(DBKEY)||'null'); if(!this.db){this.db=seed();} else {const s=seed(); for(const k in s){ if(!(k in this.db)) this.db[k]=s[k]; }} this.persist(); },
  persist(){ localStorage.setItem(DBKEY,JSON.stringify(this.db)); },
  all(e){ return this.db[e]||[]; },
  get(e,id){ return this.all(e).find(r=>r.id==id); },
  nextId(e,prefix){ if(prefix){const n=this.all(e).reduce((m,r)=>Math.max(m,+String(r.id).replace(/\D/g,'')||0),prefix.base-1)+1;return prefix.pfx+n;} return (this.all(e).reduce((m,r)=>Math.max(m,+r.id||0),0)+1); },
  add(e,obj,prefix){ obj.id=this.nextId(e,prefix); this.db[e].push(obj); this.persist(); return obj; },
  update(e,id,patch){ const r=this.get(e,id); if(r){Object.assign(r,patch);this.persist();} return r; },
  remove(e,id){ this.db[e]=this.all(e).filter(r=>r.id!=id); this.persist(); },
  reset(){ this.db=seed(); this.persist(); },
};

/* ---------- Seed ---------- */
function seed(){
  return {
    edificios:[
      {id:1,nombre:'Edificio Central',direccion:'French 414'},
      {id:2,nombre:'Pabellón Tecnológico',direccion:'French 500'},
      {id:3,nombre:'Aulas Anexo',direccion:'Roca 320'},
      {id:4,nombre:'Depósito y Talleres',direccion:'French 620'}],
    espacios:[
      {id:1,nombre:'Aula 12',tipo:'Aula',piso:0,idEdificio:1},
      {id:2,nombre:'Aula 8',tipo:'Aula',piso:1,idEdificio:1},
      {id:3,nombre:'Lab. Redes',tipo:'Laboratorio',piso:1,idEdificio:2},
      {id:4,nombre:'Lab. Química',tipo:'Laboratorio',piso:0,idEdificio:2},
      {id:5,nombre:'Oficina Secretaría',tipo:'Oficina',piso:0,idEdificio:1},
      {id:6,nombre:'Depósito Central',tipo:'Depósito',piso:0,idEdificio:4},
      {id:7,nombre:'Aula 21',tipo:'Aula',piso:2,idEdificio:3},
      {id:8,nombre:'Pasillo 1º Piso',tipo:'Circulación',piso:1,idEdificio:1},
      {id:9,nombre:'Sala de Servidores',tipo:'Laboratorio',piso:0,idEdificio:2},
      {id:10,nombre:'Aula Magna',tipo:'Aula',piso:0,idEdificio:1},
      {id:11,nombre:'Taller Eléctrico',tipo:'Depósito',piso:0,idEdificio:4},
      {id:12,nombre:'Oficina Infraestructura',tipo:'Oficina',piso:1,idEdificio:1}],
    especialidades:[{id:1,nombre:'Refrigeración'},{id:2,nombre:'Eléctrica'},{id:3,nombre:'Civil'},{id:4,nombre:'Sanitaria'},{id:5,nombre:'Electrónica / Redes'}],
    areas:[
      {id:1,nombre:'Aulas Planta Baja',idEspacio:1,idAutorizado:1},
      {id:2,nombre:'Laboratorios',idEspacio:3,idAutorizado:2},
      {id:3,nombre:'Secretaría',idEspacio:5,idAutorizado:3},
      {id:4,nombre:'Aulas Anexo',idEspacio:7,idAutorizado:4},
      {id:5,nombre:'Servidores / IT',idEspacio:9,idAutorizado:5},
      {id:6,nombre:'Infraestructura',idEspacio:12,idAutorizado:6}],
    autorizados:[
      {id:1,nombre:'Ana',apellido:'López',email:'alopez@frre.utn',idArea:1},
      {id:2,nombre:'Luis',apellido:'Díaz',email:'ldiaz@frre.utn',idArea:2},
      {id:3,nombre:'Sofía',apellido:'Ruiz',email:'sruiz@frre.utn',idArea:3},
      {id:4,nombre:'Diego',apellido:'Sosa',email:'dsosa@frre.utn',idArea:4},
      {id:5,nombre:'Paula',apellido:'Vera',email:'pvera@frre.utn',idArea:5},
      {id:6,nombre:'Marcos',apellido:'Gil',email:'mgil@frre.utn',idArea:6}],
    tecnicos:[
      {id:1,nombre:'Juan',apellido:'Pérez',idEspecialidad:1,disponibilidad:'Mañana'},
      {id:2,nombre:'Marta',apellido:'Gómez',idEspecialidad:2,disponibilidad:'Tarde'},
      {id:3,nombre:'Carlos',apellido:'Núñez',idEspecialidad:3,disponibilidad:'Completa'},
      {id:4,nombre:'Lucía',apellido:'Franco',idEspecialidad:4,disponibilidad:'Mañana'},
      {id:5,nombre:'Pablo',apellido:'Ortiz',idEspecialidad:5,disponibilidad:'Tarde'},
      {id:6,nombre:'Rosa',apellido:'Medina',idEspecialidad:2,disponibilidad:'Completa'}],
    tiposActivo:[{id:1,nombre:'Aire acondicionado'},{id:2,nombre:'Proyector'},{id:3,nombre:'Luminaria'},{id:4,nombre:'Mobiliario'},{id:5,nombre:'Servidor / Red'},{id:6,nombre:'Instalación sanitaria'}],
    activos:[
      {id:1,codigo:'AA-012',descripcion:'Split frío/calor Aula 12',idTipoActivo:1,idEspacio:1,estado:'Operativo'},
      {id:2,codigo:'PR-201',descripcion:'Proyector Lab. Redes',idTipoActivo:2,idEspacio:3,estado:'Operativo'},
      {id:3,codigo:'LU-330',descripcion:'Luminaria pasillo 1P',idTipoActivo:3,idEspacio:8,estado:'En mantenimiento'},
      {id:4,codigo:'AA-108',descripcion:'Split Aula 8',idTipoActivo:1,idEspacio:2,estado:'Operativo'},
      {id:5,codigo:'PR-210',descripcion:'Proyector Aula Magna',idTipoActivo:2,idEspacio:10,estado:'Operativo'},
      {id:6,codigo:'MB-045',descripcion:'Bancos Aula 21',idTipoActivo:4,idEspacio:7,estado:'Operativo'},
      {id:7,codigo:'SV-001',descripcion:'Servidor principal',idTipoActivo:5,idEspacio:9,estado:'Operativo'},
      {id:8,codigo:'SN-014',descripcion:'Canilla baño Secretaría',idTipoActivo:6,idEspacio:5,estado:'Fuera de servicio'},
      {id:9,codigo:'AA-055',descripcion:'Split Lab. Química',idTipoActivo:1,idEspacio:4,estado:'En mantenimiento'},
      {id:10,codigo:'LU-331',descripcion:'Luminaria Aula Magna',idTipoActivo:3,idEspacio:10,estado:'Operativo'},
      {id:11,codigo:'PR-215',descripcion:'Proyector Aula 21',idTipoActivo:2,idEspacio:7,estado:'Operativo'},
      {id:12,codigo:'SV-002',descripcion:'Switch core de redes',idTipoActivo:5,idEspacio:9,estado:'Operativo'},
      {id:13,codigo:'AA-070',descripcion:'Split Secretaría',idTipoActivo:1,idEspacio:5,estado:'Operativo'},
      {id:14,codigo:'MB-050',descripcion:'Sillas Aula 12',idTipoActivo:4,idEspacio:1,estado:'Retirado'}],
    plantillasTarea:[
      {id:1,descripcion:'Limpieza de filtros'},{id:2,descripcion:'Recarga de gas refrigerante'},{id:3,descripcion:'Revisión eléctrica general'},
      {id:4,descripcion:'Reemplazo de luminaria'},{id:5,descripcion:'Ajuste y lubricación mecánica'},{id:6,descripcion:'Control de instalación sanitaria'}],
    prestadores:[
      {id:1,nombre:'ClimaTec SRL',tipo:'Refrigeración'},{id:2,nombre:'ElectroSur',tipo:'Eléctrica'},
      {id:3,nombre:'AquaFix',tipo:'Sanitaria'},{id:4,nombre:'RedesPro',tipo:'Electrónica / Redes'}],
    inventario:[
      {id:1,nombre:'Gas R410A',tipo:'Material',stock:8,stockMin:3,unidad:'kg'},
      {id:2,nombre:'Filtro split universal',tipo:'Material',stock:1,stockMin:4,unidad:'u'},
      {id:3,nombre:'Cable HDMI 3m',tipo:'Material',stock:6,stockMin:2,unidad:'u'},
      {id:4,nombre:'Tubo LED 18W',tipo:'Material',stock:12,stockMin:5,unidad:'u'},
      {id:5,nombre:'Cinta aisladora',tipo:'Material',stock:3,stockMin:6,unidad:'u'},
      {id:6,nombre:'Sellador de silicona',tipo:'Material',stock:9,stockMin:3,unidad:'u'},
      {id:7,nombre:'Taladro percutor',tipo:'Herramienta',stock:2,stockMin:0,unidad:'u'},
      {id:8,nombre:'Juego de llaves combinadas',tipo:'Herramienta',stock:3,stockMin:0,unidad:'u'},
      {id:9,nombre:'Escalera 3m',tipo:'Herramienta',stock:1,stockMin:0,unidad:'u'},
      {id:10,nombre:'Multímetro digital',tipo:'Herramienta',stock:2,stockMin:0,unidad:'u'},
      {id:11,nombre:'Caño PVC 1/2"',tipo:'Material',stock:0,stockMin:4,unidad:'m'},
      {id:12,nombre:'Fusibles 10A',tipo:'Material',stock:20,stockMin:8,unidad:'u'}],
    tickets:[
      {id:'TK-1044',idActivo:5,idAutorizado:1,descripcion:'El control remoto del proyector no responde.',prioridad:'Media',estado:'Creado',fecha:'2026-07-09'},
      {id:'TK-1043',idActivo:4,idAutorizado:1,descripcion:'El split del Aula 8 no enciende.',prioridad:'Alta',estado:'Creado',fecha:'2026-07-09'},
      {id:'TK-1042',idActivo:1,idAutorizado:1,descripcion:'El aire no enfría y gotea agua.',prioridad:'Alta',estado:'Creado',fecha:'2026-07-08'},
      {id:'TK-1041',idActivo:2,idAutorizado:2,descripcion:'El proyector no da imagen por HDMI.',prioridad:'Media',estado:'Validado',fecha:'2026-07-07',idAdministrador:1},
      {id:'TK-1039',idActivo:3,idAutorizado:2,descripcion:'Luminaria con parpadeo intermitente.',prioridad:'Baja',estado:'En ejecución',fecha:'2026-07-05',idAdministrador:1},
      {id:'TK-1038',idActivo:11,idAutorizado:4,descripcion:'Imagen borrosa en el proyector del Aula 21.',prioridad:'Baja',estado:'Validado',fecha:'2026-07-04',idAdministrador:1},
      {id:'TK-1035',idActivo:8,idAutorizado:3,descripcion:'La canilla pierde agua constantemente.',prioridad:'Alta',estado:'En ejecución',fecha:'2026-07-03',idAdministrador:1},
      {id:'TK-1030',idActivo:9,idAutorizado:1,descripcion:'Ruido fuerte al encender el split.',prioridad:'Media',estado:'Finalizado',fecha:'2026-06-30',idAdministrador:1},
      {id:'TK-1028',idActivo:14,idAutorizado:1,descripcion:'Silla rota (reporte duplicado).',prioridad:'Baja',estado:'Rechazado',fecha:'2026-06-28',motivoRechazo:'Duplicado de TK-1019'},
      {id:'TK-1025',idActivo:7,idAutorizado:5,descripcion:'El servidor se reinicia solo.',prioridad:'Alta',estado:'Cerrado',fecha:'2026-06-25',idAdministrador:1}],
    ordenes:[
      {id:'OT-501',idTicket:'TK-1039',idActivo:3,estado:'En ejecución',fechaCreacion:'2026-07-05',origen:'Ticket'},
      {id:'OT-502',idTicket:'TK-1041',idActivo:2,estado:'Creada',fechaCreacion:'2026-07-07',origen:'Ticket'},
      {id:'OT-503',idTicket:'TK-1035',idActivo:8,estado:'En ejecución',fechaCreacion:'2026-07-03',origen:'Ticket'},
      {id:'OT-504',idTicket:'TK-1030',idActivo:9,estado:'Finalizada',fechaCreacion:'2026-06-30',origen:'Ticket'},
      {id:'OT-505',idTicket:'TK-1025',idActivo:7,estado:'Finalizada',fechaCreacion:'2026-06-25',origen:'Ticket'},
      {id:'OT-506',idTicket:'TK-1038',idActivo:11,estado:'Creada',fechaCreacion:'2026-07-04',origen:'Ticket'},
      {id:'OT-507',idTicket:null,idActivo:1,estado:'Creada',fechaCreacion:'2026-07-01',origen:'Preventivo'},
      {id:'OT-508',idTicket:null,idActivo:4,estado:'Creada',fechaCreacion:'2026-07-01',origen:'Preventivo'}],
    tareas:[
      {id:1,idOrden:'OT-501',descripcion:'Reemplazar tubo LED',asignadoTipo:'tecnico',asignadoId:2,falla:'Eléctrica',prioridad:'Baja',fechaInicio:'2026-07-08',estado:'En ejecución',observaciones:'',consumos:[]},
      {id:2,idOrden:'OT-503',descripcion:'Reparar canilla del baño',asignadoTipo:'tecnico',asignadoId:4,falla:'Sanitaria',prioridad:'Alta',fechaInicio:'2026-07-04',estado:'Pendiente',observaciones:'',consumos:[]},
      {id:3,idOrden:'OT-503',descripcion:'Sellar junta con silicona',asignadoTipo:'tecnico',asignadoId:4,falla:'Sanitaria',prioridad:'Alta',fechaInicio:'2026-07-04',estado:'Pendiente',observaciones:'',consumos:[]},
      {id:4,idOrden:'OT-504',descripcion:'Recargar gas refrigerante',asignadoTipo:'tecnico',asignadoId:1,falla:'Mecánica',prioridad:'Media',fechaInicio:'2026-06-30',estado:'Completada',observaciones:'Se recargó 2kg. Fuga sellada.',consumos:[{idItem:1,cant:2}]},
      {id:5,idOrden:'OT-504',descripcion:'Limpieza de filtros',asignadoTipo:'tecnico',asignadoId:1,falla:'Mecánica',prioridad:'Media',fechaInicio:'2026-06-30',estado:'Completada',observaciones:'',consumos:[{idItem:2,cant:1}]},
      {id:6,idOrden:'OT-505',descripcion:'Revisar fuente de alimentación',asignadoTipo:'prestador',asignadoId:4,falla:'Electrónica',prioridad:'Alta',fechaInicio:'2026-06-25',estado:'Completada',observaciones:'Fuente reemplazada por el prestador.',consumos:[]},
      {id:7,idOrden:'OT-502',descripcion:'Reemplazar cable HDMI',asignadoTipo:'tecnico',asignadoId:5,prioridad:'Media',fechaInicio:'2026-07-08',estado:'Pendiente',observaciones:'',consumos:[]},
      {id:8,idOrden:'OT-507',descripcion:'Limpieza de filtros',asignadoTipo:'tecnico',asignadoId:1,prioridad:'Media',fechaInicio:'2026-07-02',estado:'Pendiente',observaciones:'',consumos:[]},
      {id:9,idOrden:'OT-508',descripcion:'Limpieza de filtros',asignadoTipo:'tecnico',asignadoId:1,prioridad:'Media',fechaInicio:'2026-07-02',estado:'Pendiente',observaciones:'',consumos:[]}],
    planesPrev:[
      {id:1,nombre:'Limpieza trimestral de splits',idTipoActivo:1,frecuencia:'Trimestral',idPlantilla:1,proxima:'2026-07-12'},
      {id:2,nombre:'Revisión anual eléctrica',idTipoActivo:3,frecuencia:'Anual',idPlantilla:3,proxima:'2026-11-01'},
      {id:3,nombre:'Control semestral sanitario',idTipoActivo:6,frecuencia:'Semestral',idPlantilla:6,proxima:'2026-07-15'}],
    usuarios:[
      {id:1,nombre:'Admin Demo',email:'admin@frre.utn',rol:'Administrador',activo:'Sí'},
      {id:2,nombre:'Juan Pérez',email:'jperez@frre.utn',rol:'Técnico',activo:'Sí'},
      {id:3,nombre:'Marta Gómez',email:'mgomez@frre.utn',rol:'Técnico',activo:'Sí'},
      {id:4,nombre:'Ana López',email:'alopez@frre.utn',rol:'Usuario autorizado',activo:'Sí'},
      {id:5,nombre:'Luis Díaz',email:'ldiaz@frre.utn',rol:'Usuario autorizado',activo:'Sí'},
      {id:6,nombre:'Pablo Ortiz',email:'portiz@frre.utn',rol:'Técnico',activo:'No'}],
  };
}

/* ---------- helpers de dominio ---------- */
const label={
  edificios:r=>r.nombre, especialidades:r=>r.nombre, tiposActivo:r=>r.nombre, plantillasTarea:r=>r.descripcion,
  prestadores:r=>r.nombre, inventario:r=>r.nombre, areas:r=>r.nombre,
  espacios:r=>`${r.nombre} · ${lbl('edificios',r.idEdificio)}`,
  tecnicos:r=>`${r.nombre} ${r.apellido}`,
  autorizados:r=>`${r.nombre} ${r.apellido}`,
  activos:r=>`${r.codigo} · ${r.descripcion}`,
};
function lbl(e,id){ const r=store.get(e,id); if(!r) return '—'; return (label[e]?label[e](r):r.nombre)||'—'; }
const badge=(s)=>`<span class="badge b-${(s||'').toLowerCase().replace(/[\s·]+/g,'').replace('ó','o').replace('í','i')}">${s}</span>`;
const prio=(p)=>`<span class="prio p-${(p||'').toLowerCase()}">${p||'—'}</span>`;
const ESP_POR_TIPO={1:1,2:5,3:2,4:3,5:5,6:4};                 // tipoActivo -> especialidad recomendada
const MAT_POR_FALLA={'Eléctrica':[5,12],'Mecánica':[1,2],'Sanitaria':[11,6],'Electrónica':[3,12],'Estructural':[6]}; // falla -> materiales sugeridos
const PLANTILLAS_POR_TIPO={1:[1,2],2:[3],3:[4],4:[5],5:[3],6:[6]}; // tipoActivo -> plantillas de tarea sugeridas
const rankPrio={Alta:0,Media:1,Baja:2};

/* ---------- toast + modal ---------- */
let toastT;
function toast(msg,type){ const t=document.getElementById('toast'); t.textContent=msg; t.className='show '+(type||''); clearTimeout(toastT); toastT=setTimeout(()=>t.className='',2200); }
function modal(title,bodyHtml,footHtml){
  closeModal();
  const bg=document.createElement('div'); bg.className='modal-bg'; bg.id='modal-bg';
  bg.innerHTML=`<div class="modal"><div class="modal-h"><h3>${title}</h3><button class="x" onclick="closeModal()">×</button></div>
    <div class="modal-b">${bodyHtml}</div><div class="modal-f">${footHtml||'<button class="btn" onclick="closeModal()">Cerrar</button>'}</div></div>`;
  bg.addEventListener('click',e=>{if(e.target===bg)closeModal();});
  document.body.appendChild(bg);
}
function closeModal(){ const m=document.getElementById('modal-bg'); if(m)m.remove(); }

/* ============================================================
   CRUD genérico (ABMs)
   ============================================================ */
const ENTITIES={
 edificios:{label:'Edificios',hu:'HU-05',icon:'🏢',
   fields:[{k:'nombre',l:'Nombre',req:1},{k:'direccion',l:'Dirección'}],
   cols:[{k:'nombre',l:'Nombre'},{k:'direccion',l:'Dirección'}]},
 espacios:{label:'Espacios',hu:'HU-47',icon:'🚪',
   fields:[{k:'nombre',l:'Nombre',req:1},{k:'tipo',l:'Tipo',type:'select',opts:['Aula','Laboratorio','Oficina','Depósito','Circulación']},{k:'idEdificio',l:'Edificio',type:'ref',ref:'edificios',req:1},{k:'piso',l:'Piso',type:'number'}],
   cols:[{k:'nombre',l:'Nombre'},{k:'tipo',l:'Tipo'},{k:'idEdificio',l:'Edificio',ref:'edificios'},{k:'piso',l:'Piso'}]},
 areas:{label:'Áreas',hu:'HU-48',icon:'📍',
   fields:[{k:'nombre',l:'Nombre',req:1},{k:'idEspacio',l:'Espacio',type:'ref',ref:'espacios'},{k:'idAutorizado',l:'Responsable',type:'ref',ref:'autorizados'}],
   cols:[{k:'nombre',l:'Nombre'},{k:'idEspacio',l:'Espacio',ref:'espacios'},{k:'idAutorizado',l:'Responsable',ref:'autorizados'}]},
 especialidades:{label:'Especialidades',hu:'HU-45',icon:'🛠',
   fields:[{k:'nombre',l:'Nombre',req:1}], cols:[{k:'nombre',l:'Nombre'}]},
 tecnicos:{label:'Técnicos',hu:'HU-06',icon:'👷',
   fields:[{k:'nombre',l:'Nombre',req:1},{k:'apellido',l:'Apellido',req:1},{k:'idEspecialidad',l:'Especialidad',type:'ref',ref:'especialidades',req:1},{k:'disponibilidad',l:'Disponibilidad',type:'select',opts:['Mañana','Tarde','Completa']}],
   cols:[{k:'nombre',l:'Nombre'},{k:'apellido',l:'Apellido'},{k:'idEspecialidad',l:'Especialidad',ref:'especialidades'},{k:'disponibilidad',l:'Disp.'}]},
 tiposActivo:{label:'Tipos de activo',hu:'HU-46',icon:'🏷',
   fields:[{k:'nombre',l:'Nombre',req:1}], cols:[{k:'nombre',l:'Nombre'}]},
 activos:{label:'Activos',hu:'HU-08',icon:'🖥',
   fields:[{k:'codigo',l:'Código',req:1},{k:'descripcion',l:'Descripción',req:1},{k:'idTipoActivo',l:'Tipo',type:'ref',ref:'tiposActivo',req:1},{k:'idEspacio',l:'Espacio',type:'ref',ref:'espacios',req:1},{k:'estado',l:'Estado',type:'select',opts:['Operativo','En mantenimiento','Fuera de servicio','Retirado']}],
   cols:[{k:'codigo',l:'Código'},{k:'descripcion',l:'Descripción'},{k:'idTipoActivo',l:'Tipo',ref:'tiposActivo'},{k:'idEspacio',l:'Ubicación',ref:'espacios'},{k:'estado',l:'Estado',badge:1}]},
 autorizados:{label:'Usuarios autorizados',hu:'HU-07',icon:'🧑‍💼',
   fields:[{k:'nombre',l:'Nombre',req:1},{k:'apellido',l:'Apellido',req:1},{k:'email',l:'Email',type:'email'},{k:'idArea',l:'Área',type:'ref',ref:'areas'}],
   cols:[{k:'nombre',l:'Nombre'},{k:'apellido',l:'Apellido'},{k:'email',l:'Email'},{k:'idArea',l:'Área',ref:'areas'}]},
 plantillasTarea:{label:'Plantillas de tareas',hu:'HU-13',icon:'📋',
   fields:[{k:'descripcion',l:'Descripción',req:1}], cols:[{k:'descripcion',l:'Descripción'}]},
 planesPrev:{label:'Planes de mant. preventivo',hu:'HU-29',icon:'◈',
   fields:[{k:'nombre',l:'Nombre',req:1},{k:'idTipoActivo',l:'Tipo de activo',type:'ref',ref:'tiposActivo'},{k:'frecuencia',l:'Frecuencia',type:'select',opts:['Semanal','Mensual','Trimestral','Semestral','Anual']},{k:'idPlantilla',l:'Plantilla',type:'ref',ref:'plantillasTarea'}],
   cols:[{k:'nombre',l:'Plan'},{k:'idTipoActivo',l:'Tipo activo',ref:'tiposActivo'},{k:'frecuencia',l:'Frecuencia'},{k:'idPlantilla',l:'Plantilla',ref:'plantillasTarea'}]},
 prestadores:{label:'Prestadores de servicio',hu:'HU-49',icon:'🏢',
   fields:[{k:'nombre',l:'Nombre',req:1},{k:'tipo',l:'Tipo de prestación'}],
   cols:[{k:'nombre',l:'Nombre'},{k:'tipo',l:'Tipo de prestación'}]},
 usuarios:{label:'Usuarios y permisos',hu:'HU-35',icon:'🔐',
   fields:[{k:'nombre',l:'Nombre',req:1},{k:'email',l:'Email',type:'email'},{k:'rol',l:'Rol',type:'select',opts:['Administrador','Técnico','Usuario autorizado']},{k:'activo',l:'Activo',type:'select',opts:['Sí','No']}],
   cols:[{k:'nombre',l:'Nombre'},{k:'email',l:'Email'},{k:'rol',l:'Rol'},{k:'activo',l:'Activo'}]},
};
function cell(row,c){ let v=row[c.k]; if(c.ref)return lbl(c.ref,v); if(c.badge)return badge(v); return v==null||v===''?'—':v; }
function renderEntity(ekey){
  const cfg=ENTITIES[ekey]; const rows=store.all(ekey);
  return `<div class="page-head"><div><h2 class="sec">${cfg.icon} ${cfg.label}</h2><p class="lead">Alta, edición y baja. Los cambios se guardan y se reflejan en el resto del sistema.</p></div>
    <div class="head-actions">${huRef(cfg.hu)}<button class="btn pri" onclick="formEntity('${ekey}')">＋ Nuevo</button></div></div>
    <div class="card">${rows.length?`<table class="tbl"><thead><tr>${cfg.cols.map(c=>`<th>${c.l}</th>`).join('')}<th class="actions">Acciones</th></tr></thead>
    <tbody>${rows.map(r=>`<tr>${cfg.cols.map(c=>`<td>${cell(r,c)}</td>`).join('')}
      <td class="actions"><button class="icon-btn" onclick="formEntity('${ekey}','${r.id}')">✎</button><button class="icon-btn del" onclick="delEntity('${ekey}','${r.id}')">🗑</button></td></tr>`).join('')}
    </tbody></table>`:`<div class="empty">Sin registros. Creá el primero con “＋ Nuevo”.</div>`}</div>`;
}
function fieldInput(f,val){
  const v=val==null?'':val;
  if(f.type==='select')return `<select data-k="${f.k}">${f.opts.map(o=>`<option ${o==v?'selected':''}>${o}</option>`).join('')}</select>`;
  if(f.type==='ref'){const opts=store.all(f.ref).map(r=>`<option value="${r.id}" ${r.id==v?'selected':''}>${lbl(f.ref,r.id)}</option>`).join('');return `<select data-k="${f.k}"><option value="">— elegir —</option>${opts}</select>`;}
  if(f.type==='number')return `<input type="number" data-k="${f.k}" value="${v}">`;
  if(f.type==='email')return `<input type="email" data-k="${f.k}" value="${v}">`;
  return `<input data-k="${f.k}" value="${v}">`;
}
function formEntity(ekey,id){
  const cfg=ENTITIES[ekey]; const rec=id?store.get(ekey,id):{};
  const body=`<div class="form-grid">${cfg.fields.map(f=>`<div class="field ${cfg.fields.length%2&&f===cfg.fields[cfg.fields.length-1]?'full':''}"><label>${f.l}${f.req?' *':''}</label>${fieldInput(f,rec[f.k])}</div>`).join('')}</div>`;
  modal(`${id?'Editar':'Nuevo'} · ${cfg.label}`,body,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn pri" onclick="saveEntity('${ekey}','${id||''}')">Guardar</button>`);
}
function saveEntity(ekey,id){
  const cfg=ENTITIES[ekey]; const data={};
  document.querySelectorAll('#modal-bg [data-k]').forEach(el=>{ let v=el.value; if(el.type==='number')v=v===''?null:+v; data[el.dataset.k]=v; });
  for(const f of cfg.fields){ if(f.req && (data[f.k]===''||data[f.k]==null)){ toast('Completá: '+f.l,'err'); return; } }
  if(id){ store.update(ekey,id,data); toast('Cambios guardados','ok'); } else { store.add(ekey,data); toast(cfg.label+': registro creado','ok'); }
  closeModal(); render();
}
function delEntity(ekey,id){ if(confirm('¿Eliminar este registro?')){ store.remove(ekey,id); toast('Registro eliminado'); render(); } }

/* ============================================================
   Vistas de flujo
   ============================================================ */
const V={};

V.dashboard=()=>{
  const abiertos=store.all('tickets').filter(t=>['Creado','Validado','En ejecución'].includes(t.estado)).length;
  const otEjec=store.all('ordenes').filter(o=>o.estado==='En ejecución'||o.estado==='Creada').length;
  const bajo=store.all('inventario').filter(i=>i.tipo==='Material'&&i.stock<i.stockMin).length;
  return `<div class="page-head"><div><h2 class="sec">Panel general</h2><p class="lead">Resumen operativo del área de mantenimiento.</p></div>
    <div class="head-actions"><button class="btn sm" onclick="resetDemo()">⟲ Reiniciar datos demo</button></div></div>
  <div class="flowbar"><span class="on">Ticket</span><i>→</i><span>Validar</span><i>→</i><span>OT auto</span><i>→</i><span>Tareas</span><i>→</i><span>Ejecución</span><i>→</i><span>Cierre</span></div>
  <div class="grid g4" style="margin-bottom:18px">
    ${kpi(abiertos,'Tickets abiertos','HU-12','tickets')}
    ${kpi(otEjec,'OT en curso','HU-27','ot')}
    ${kpi(bajo,'Materiales bajo mínimo','HU-36','e:inventario')}
    ${kpi(store.all('activos').length,'Activos registrados','HU-08','e:activos')}
  </div>
  ${(()=>{ const lim=new Date(Date.now()+7*864e5).toISOString().slice(0,10);
    const venc=store.all('planesPrev').filter(p=>p.proxima&&p.proxima<=lim);
    const cerrar=store.all('ordenes').filter(o=>{if(o.estado!=='Finalizada')return false;const t=store.get('tickets',o.idTicket);return t&&t.estado!=='Cerrado';});
    let h='';
    if(cerrar.length)h+=`<div class="card" style="margin-bottom:16px"><div class="hu-row">${huRef('HU-26')}</div><h2 class="sec" style="font-size:1rem">✅ Tickets listos para cerrar (${cerrar.length})</h2>${cerrar.map(o=>`<div class="row" style="justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--sep-soft)"><span>${o.idTicket} · ${lbl('activos',o.idActivo)} <span class="pill">${o.id} finalizada</span></span><button class="btn ok sm" onclick="cerrarTicket('${o.idTicket}')">Cerrar ticket</button></div>`).join('')}</div>`;
    if(venc.length)h+=`<div class="card" style="margin-bottom:16px"><div class="hu-row">${huRef('HU-29')}</div><h2 class="sec" style="font-size:1rem">🔔 Preventivos por vencer (${venc.length})</h2>${venc.map(p=>`<div class="row" style="justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--sep-soft)"><span>${p.nombre} · vence <b>${p.proxima}</b></span><button class="btn ok sm" onclick="generarOTPrev(${p.id})">⚡ Generar OT</button></div>`).join('')}</div>`;
    return h;
  })()}
  <div class="card"><div class="hu-row">${huRef('HU-12')}</div><h2 class="sec" style="font-size:1rem">Últimos tickets</h2>
    ${ticketTable(store.all('tickets').slice(-5).reverse())}</div>`;
};

function kpi(n,l,hu,go){ return `<div class="card kpi" style="cursor:pointer" onclick="nav('${go}')"><div class="hu-row">${huRef(hu)}</div><b>${n}</b><span>${l}</span></div>`; }

/* --- Tickets --- */
function ticketTable(list,withVer){
  if(!list.length)return `<div class="empty">Sin tickets.</div>`;
  return `<table class="tbl"><thead><tr><th>Ticket</th><th>Activo</th><th>Solicitante</th><th>Estado</th><th>Fecha</th><th class="actions"></th></tr></thead><tbody>
   ${list.map(t=>`<tr><td><b>${t.id}</b></td><td>${lbl('activos',t.idActivo)}</td><td>${lbl('autorizados',t.idAutorizado)}</td>
    <td>${badge(t.estado)}</td><td>${t.fecha}</td>
    <td class="actions"><button class="btn sm" onclick="openTicket('${t.id}')">Ver →</button></td></tr>`).join('')}</tbody></table>`;
}
V.tickets=()=>{
  const f=window._tf||{};
  let list=store.all('tickets');
  if(f.estado)list=list.filter(t=>t.estado===f.estado);
  if(f.q)list=list.filter(t=>(t.id+lbl('activos',t.idActivo)).toLowerCase().includes(f.q.toLowerCase()));
  return `<div class="page-head"><div><h2 class="sec">Bandeja de tickets</h2><p class="lead">Un ticket puede existir sin OT (Creado o Rechazado).</p></div><div class="head-actions">${huRef('HU-12')}</div></div>
  <div class="card"><div class="filters">
    <select onchange="setTf('estado',this.value)"><option value="">Todos los estados</option>${['Creado','Validado','En ejecución','Finalizado','Cerrado','Rechazado'].map(s=>`<option ${f.estado===s?'selected':''}>${s}</option>`).join('')}</select>
    <input placeholder="Buscar ticket / activo…" value="${f.q||''}" oninput="setTf('q',this.value)">
  </div>${ticketTable(list)}</div>`;
};
function setTf(k,v){ window._tf=Object.assign({},window._tf,{[k]:v}); render(); }

V.ticketDetail=()=>{
  const t=store.get('tickets',window._tk); if(!t)return `<div class="empty">Ticket no encontrado</div>`;
  const ot=store.all('ordenes').find(o=>o.idTicket===t.id);
  const puedeValidar=t.estado==='Creado';
  return `<button class="btn" onclick="nav('tickets')">← Volver</button>
  <div class="grid g2" style="margin-top:14px">
    <div class="card"><div class="hu-row">${huRef('HU-09')}</div>
      <h2 class="sec">${t.id}</h2><p class="lead">${lbl('activos',t.idActivo)} · ${t.fecha}</p>
      <p style="margin:12px 0"><b>Estado:</b> ${badge(t.estado)}</p>
      <p><b>Solicitante:</b> ${lbl('autorizados',t.idAutorizado)}</p>
      <p><b>Descripción:</b> ${t.descripcion}</p></div>
    <div class="card"><div class="hu-row">${huRef('HU-11')}</div>
      <h2 class="sec" style="font-size:1.05rem">Validación</h2>
      <p class="lead">Al validar, se genera automáticamente la OT.</p>
      ${puedeValidar
        ? `<div class="row" style="margin-top:12px"><button class="btn ok" onclick="validarTicket('${t.id}')">✓ Validar y generar OT</button><button class="btn dg" onclick="rechazarTicket('${t.id}')">✕ Rechazar</button></div>`
        : ot ? `<div class="note">✓ Ticket ${t.estado.toLowerCase()} — <b>${ot.id}</b> generada. <button class="btn pri sm" style="margin-top:8px" onclick="openOT('${ot.id}')">Ir a la OT →</button></div>`
        : `<div class="note">Ticket ${t.estado}.</div>`}
    </div></div>`;
};
function openTicket(id){ window._tk=id; nav('ticketDetail'); }
function validarTicket(id){
  const t=store.update('tickets',id,{estado:'Validado'});
  const ot=store.add('ordenes',{idTicket:id,idActivo:t.idActivo,estado:'Creada',fechaCreacion:today(),origen:'Ticket'},{pfx:'OT-',base:501});
  toast(`Ticket validado · ${ot.id} generada automáticamente`,'ok');
  window._ot=ot.id; nav('otDetail');
}
function rechazarTicket(id){ const m=prompt('Motivo del rechazo:'); if(m!=null){ store.update('tickets',id,{estado:'Rechazado',motivoRechazo:m}); toast('Ticket rechazado'); nav('tickets'); } }

/* --- Órdenes de trabajo --- */
V.ot=()=>{
  const list=store.all('ordenes');
  return `<div class="page-head"><div><h2 class="sec">Órdenes de trabajo</h2><p class="lead">Seguimiento de OT. Al finalizar una OT se puede cerrar el ticket.</p></div><div class="head-actions">${huRef('HU-27','HU-26')}</div></div>
  <div class="card">${list.length?`<table class="tbl"><thead><tr><th>OT</th><th>Ticket</th><th>Activo</th><th>Tareas</th><th>Estado</th><th class="actions"></th></tr></thead><tbody>
   ${list.map(o=>{const ts=store.all('tareas').filter(t=>t.idOrden===o.id);const done=ts.filter(t=>t.estado==='Completada').length;
     const tk=store.get('tickets',o.idTicket);
     return `<tr><td><b>${o.id}</b></td><td>${o.idTicket||'—'}</td><td>${lbl('activos',o.idActivo)}</td><td>${done}/${ts.length}</td><td>${badge(o.estado)}</td>
     <td class="actions"><button class="btn sm" onclick="openOT('${o.id}')">Abrir →</button>
     ${o.estado==='Finalizada'&&tk&&tk.estado!=='Cerrado'?`<button class="btn ok sm" onclick="cerrarTicket('${o.idTicket}')">Cerrar ticket</button>`:(tk&&tk.estado==='Cerrado'?`<span class="badge b-cerrado" style="margin-left:5px">Ticket cerrado ✓</span>`:'')}</td></tr>`;}).join('')}
   </tbody></table>`:`<div class="empty">No hay OT. Validá un ticket para generar una.</div>`}</div>`;
};
function openOT(id){ window._ot=id; nav('otDetail'); }
V.otDetail=()=>{
  const o=store.get('ordenes',window._ot); if(!o)return `<div class="empty">OT no encontrada</div>`;
  const tareas=store.all('tareas').filter(t=>t.idOrden===o.id);
  return `<button class="btn" onclick="nav('ot')">← Volver</button>
  <div class="page-head" style="margin-top:14px"><div><h2 class="sec">${o.id}</h2><p class="lead">Origen: ${o.origen} ${o.idTicket?`(${o.idTicket})`:''} · ${lbl('activos',o.idActivo)} · ${badge(o.estado)}</p></div>
   <div class="head-actions">${huRef('HU-17','HU-16','HU-13')}<button class="btn" onclick="precargarTareas()">⚡ Precargar plantilla</button><button class="btn pri" onclick="formTarea()">＋ Agregar tarea</button></div></div>
  <div class="grid g2">
    <div class="card"><h2 class="sec" style="font-size:1rem">Tareas de la OT</h2>
      ${tareas.length?`<table class="tbl"><thead><tr><th>Tarea</th><th>Falla</th><th>Asignada a</th><th>Prioridad</th><th>Estado</th><th class="actions"></th></tr></thead><tbody>
      ${tareas.map(t=>`<tr><td>${t.descripcion}</td><td>${t.falla?`<span class="pill">${t.falla}</span>`:'—'}</td><td>${asignadoLbl(t)}</td><td>${prio(t.prioridad)}</td><td>${badge(t.estado)}</td>
        <td class="actions"><button class="icon-btn del" onclick="delTarea(${t.id})">🗑</button></td></tr>`).join('')}
      </tbody></table>`:`<div class="empty">Agregá las tareas de esta OT.</div>`}
      <div class="note" style="margin-top:14px">💡 Cada tarea se asigna a un <b>técnico</b> (según especialidad) o a un <b>prestador externo</b>. Los materiales se cargan al <b>ejecutar</b>, no ahora.</div>
    </div>
    <div class="card"><div class="hu-row">${huRef('HU-16')}</div><h2 class="sec" style="font-size:1rem">Disponibilidad de stock</h2>
      <table class="tbl"><thead><tr><th>Material</th><th>Stock</th></tr></thead><tbody>
      ${store.all('inventario').filter(i=>i.tipo==='Material').map(i=>`<tr><td>${i.nombre}</td><td>${i.stock<i.stockMin?`<span class="badge b-bajo">${i.stock} ${i.unidad} · bajo mín.</span>`:`<span class="badge b-ok">${i.stock} ${i.unidad}</span>`}</td></tr>`).join('')}
      </tbody></table>
      ${o.estado==='Creada'&&tareas.length?`<p class="lead" style="margin:14px 0 8px">Ya definiste las tareas. <b>Confirmá la OT para despacharla</b>: pasa a <b>En ejecución</b>, el activo queda "En mantenimiento" y los técnicos pueden empezar.</p><button class="btn pri" style="width:100%;justify-content:center" onclick="ponerEnEjecucion('${o.id}')">✓ Confirmar OT y enviar a ejecución</button>`:''}
    </div></div>`;
};
function asignadoLbl(t){ return t.asignadoTipo==='prestador'?`🏢 ${lbl('prestadores',t.asignadoId)}`:`👷 ${lbl('tecnicos',t.asignadoId)}`; }
function formTarea(){
  const _ot=store.get('ordenes',window._ot); const _act=_ot&&store.get('activos',_ot.idActivo); const recEsp=_act?ESP_POR_TIPO[_act.idTipoActivo]:null;
  const tecs=[...store.all('tecnicos')].sort((a,b)=>(b.idEspecialidad===recEsp)-(a.idEspecialidad===recEsp)).map(r=>`<option value="tecnico:${r.id}">👷 ${lbl('tecnicos',r.id)} — ${lbl('especialidades',r.idEspecialidad)}${r.idEspecialidad===recEsp?' ⭐ recomendado':''}</option>`).join('');
  const _rec=recEsp?store.all('tecnicos').filter(t=>t.idEspecialidad===recEsp).map(t=>lbl('tecnicos',t.id)).join(', '):'';
  const _hint=_rec?`<div class="note" style="margin:0 0 12px">💡 Para este activo conviene un técnico de <b>${lbl('especialidades',recEsp)}</b>: ${_rec} (van primero en la lista con ⭐).</div>`:'';
  const pres=store.all('prestadores').map(r=>`<option value="prestador:${r.id}">🏢 ${r.nombre} (${r.tipo})</option>`).join('');
  const plant=store.all('plantillasTarea').map(r=>`<option value="${r.descripcion}">${r.descripcion}</option>`).join('');
  modal('Nueva tarea de la OT',
    `<div class="hu-row">${huRef('HU-50')}</div>${_hint}
     <div class="field"><label>Descripción *</label><input list="plt" data-k="descripcion" placeholder="Describí la tarea…"><datalist id="plt">${plant}</datalist></div>
     <div class="form-grid"><div class="field"><label>Asignar a *</label><select data-k="asig"><optgroup label="Técnicos">${tecs}</optgroup><optgroup label="Prestadores externos">${pres}</optgroup></select></div>
     <div class="field"><label>Falla (tipo)</label><select data-k="falla"><option value="">— sin especificar —</option><option>Eléctrica</option><option>Mecánica</option><option>Estructural</option><option>Sanitaria</option><option>Electrónica</option><option>Otra</option></select></div>
     <div class="field"><label>Prioridad</label><select data-k="prioridad"><option>Alta</option><option selected>Media</option><option>Baja</option></select></div>
     <div class="field"><label>Fecha prevista de inicio</label><input type="date" data-k="fechaInicio" value="${today()}"></div></div>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn pri" onclick="saveTarea()">Agregar tarea</button>`);
}
function saveTarea(){
  const g=k=>document.querySelector(`#modal-bg [data-k="${k}"]`).value;
  const desc=g('descripcion'); if(!desc){toast('Poné una descripción','err');return;}
  const [tipo,aid]=g('asig').split(':');
  store.add('tareas',{idOrden:window._ot,descripcion:desc,asignadoTipo:tipo,asignadoId:+aid,falla:g('falla'),prioridad:g('prioridad'),fechaInicio:g('fechaInicio'),estado:'Pendiente',observaciones:'',consumos:[]});
  toast('Tarea agregada','ok'); closeModal(); render();
}
function delTarea(id){ if(confirm('¿Eliminar la tarea?')){store.remove('tareas',id);toast('Tarea eliminada');render();} }
function ponerEnEjecucion(id){ const o=store.get('ordenes',id); store.update('ordenes',id,{estado:'En ejecución'}); if(o.idTicket)store.update('tickets',o.idTicket,{estado:'En ejecución'}); store.update('activos',o.idActivo,{estado:'En mantenimiento'}); toast('OT en ejecución · activo → En mantenimiento','ok'); render(); }
function precargarTareas(){
  const o=store.get('ordenes',window._ot); const act=store.get('activos',o.idActivo); const recEsp=act?ESP_POR_TIPO[act.idTipoActivo]:null;
  const tec=store.all('tecnicos').find(t=>t.idEspecialidad===recEsp)||store.all('tecnicos')[0];
  const plts=PLANTILLAS_POR_TIPO[act?act.idTipoActivo:0]||[];
  if(!plts.length){toast('No hay plantilla para este tipo de activo','err');return;}
  plts.forEach(pid=>{const p=store.get('plantillasTarea',pid); store.add('tareas',{idOrden:o.id,descripcion:p?p.descripcion:'Tarea',asignadoTipo:'tecnico',asignadoId:tec?tec.id:null,falla:'',prioridad:'Media',fechaInicio:today(),estado:'Pendiente',observaciones:'',consumos:[]});});
  toast(`${plts.length} tarea(s) precargada(s) desde plantilla`,'ok'); render();
}

/* --- Técnico: tareas + ejecución --- */
V.tareas=()=>{
  const orden=window._to||'auto';
  let list=store.all('tareas').filter(t=>t.asignadoTipo==='tecnico'&&t.estado!=='Completada');
  list.sort((a,b)=> orden==='fecha' ? (a.fechaInicio||'').localeCompare(b.fechaInicio||'') : (rankPrio[a.prioridad]-rankPrio[b.prioridad])||(a.fechaInicio||'').localeCompare(b.fechaInicio||''));
  return `<div class="page-head"><div><h2 class="sec">Mis tareas asignadas</h2><p class="lead">Ordenadas automáticamente por prioridad y fecha prevista.</p></div><div class="head-actions">${huRef('HU-21')}</div></div>
  ${list.length?`<div class="note">🔔 Tenés <b>${list.length}</b> tarea(s) asignada(s) pendientes.</div>`:''}
  <div class="card"><div class="filters"><span class="pill">Orden:</span>
     <button class="btn sm ${orden==='auto'?'pri':''}" onclick="setTo('auto')">Automático (prioridad + fecha)</button>
     <button class="btn sm ${orden==='fecha'?'pri':''}" onclick="setTo('fecha')">Por fecha</button></div>
   ${list.length?`<table class="tbl"><thead><tr><th>Tarea</th><th>OT</th><th>Activo</th><th>Inicio</th><th>Prioridad</th><th>Estado</th><th class="actions"></th></tr></thead><tbody>
   ${list.map(t=>{const o=store.get('ordenes',t.idOrden);return `<tr><td>${t.descripcion}</td><td>${t.idOrden}</td><td>${o?lbl('activos',o.idActivo):'—'}</td><td>${t.fechaInicio||'—'}</td><td>${prio(t.prioridad)}</td><td>${badge(t.estado)}</td>
     <td class="actions"><button class="btn pri sm" onclick="openTarea(${t.id})">Ejecutar →</button></td></tr>`;}).join('')}
   </tbody></table>`:`<div class="empty">No tenés tareas pendientes.</div>`}</div>`;
};
function setTo(v){ window._to=v; render(); }
function openTarea(id){ window._ta=id; nav('ejecutar'); }
V.ejecutar=()=>{
  const t=store.get('tareas',window._ta); if(!t)return `<div class="empty">Tarea no encontrada</div>`;
  const o=store.get('ordenes',t.idOrden);
  const mats=store.all('inventario').filter(i=>i.tipo==='Material');
  return `<button class="btn" onclick="nav('tareas')">← Volver</button>
  <div class="page-head" style="margin-top:14px"><div><h2 class="sec">${t.descripcion}</h2><p class="lead">${t.idOrden} · ${o?lbl('activos',o.idActivo):''} · ${badge(t.estado)}</p></div><div class="head-actions">${huRef('HU-22')}</div></div>
  <div class="grid g2">
    <div class="card"><h2 class="sec" style="font-size:1rem">Repuestos / materiales utilizados</h2>
      ${t.consumos.length?`<table class="tbl"><tbody>${t.consumos.map((c,i)=>`<tr><td>${lbl('inventario',c.idItem)}</td><td>${c.cant} ${store.get('inventario',c.idItem)?.unidad||''}</td><td class="actions"><button class="icon-btn del" onclick="delConsumo(${i})">×</button></td></tr>`).join('')}</tbody></table>`:`<p class="lead">Sin materiales cargados.</p>`}
      ${(()=>{const sug=(MAT_POR_FALLA[t.falla]||[]).filter(id=>store.get('inventario',id)&&!t.consumos.some(c=>c.idItem===id));return sug.length?`<div style="margin:12px 0 2px"><span class="pill">Sugeridos p/ falla ${t.falla}</span> ${sug.map(id=>`<button class="btn sm" onclick="addConsumoQuick(${id})">＋ ${store.get('inventario',id).nombre}</button>`).join(' ')}</div>`:'';})()}
      <div class="filters" style="margin-top:12px"><select id="cmat">${mats.map(m=>`<option value="${m.id}">${m.nombre} (${m.stock} ${m.unidad})</option>`).join('')}</select>
        <input id="ccant" type="number" min="1" value="1" style="width:80px"><button class="btn sm" onclick="addConsumo()">＋ Agregar</button></div>
      <div class="note">Al completar la tarea se registra el <b>egreso</b> y baja el stock automáticamente.</div>
    </div>
    <div class="card"><h2 class="sec" style="font-size:1rem">Observaciones</h2>
      <div class="field"><textarea id="cobs" rows="4" placeholder="Actividades adicionales, hallazgos…">${t.observaciones||''}</textarea></div>
      <div class="row"><button class="btn" onclick="guardarObs()">Guardar avance</button>
        ${t.estado!=='Completada'?`<button class="btn ok" onclick="completarTarea(${t.id})">✓ Completar tarea</button>`:''}</div>
      <p class="lead" style="margin-top:12px">Cuando todas las tareas se completan, la OT queda <b>Finalizada</b> y el admin cierra el ticket ${huRef('HU-26')}.</p>
    </div></div>`;
};
function addConsumo(){ const idItem=+document.getElementById('cmat').value; const cant=+document.getElementById('ccant').value||1;
  const t=store.get('tareas',window._ta); t.consumos.push({idItem,cant}); store.persist(); toast('Material agregado'); render(); }
function addConsumoQuick(idItem){ const t=store.get('tareas',window._ta); t.consumos.push({idItem,cant:1}); store.persist(); toast('Material sugerido agregado','ok'); render(); }
function delConsumo(i){ const t=store.get('tareas',window._ta); t.consumos.splice(i,1); store.persist(); render(); }
function guardarObs(){ store.update('tareas',window._ta,{observaciones:document.getElementById('cobs').value}); toast('Avance guardado','ok'); }
function completarTarea(id){
  const t=store.get('tareas',id); t.observaciones=document.getElementById('cobs')?.value||t.observaciones;
  t.consumos.forEach(c=>{ const it=store.get('inventario',c.idItem); if(it){ it.stock=Math.max(0,it.stock-c.cant); } });
  t.estado='Completada'; store.persist();
  const hermanas=store.all('tareas').filter(x=>x.idOrden===t.idOrden);
  if(hermanas.every(x=>x.estado==='Completada')){ const o=store.get('ordenes',t.idOrden); store.update('ordenes',t.idOrden,{estado:'Finalizada'}); if(o)store.update('activos',o.idActivo,{estado:'Operativo'}); toast('Tarea completada · OT finalizada · activo → Operativo','ok'); }
  else toast('Tarea completada · stock actualizado','ok');
  nav('tareas');
}
function cerrarTicket(id){ store.update('tickets',id,{estado:'Cerrado'}); toast('Ticket cerrado','ok'); render(); }

/* --- Inventario (con ingreso/stock) --- */
V.inventarioView=()=>{
  const rows=store.all('inventario');
  return `<div class="page-head"><div><h2 class="sec">▥ Inventario de depósito</h2><p class="lead">Catálogo, stock y alertas de mínimo. “Registrar ingreso” aumenta el stock (≠ alta en catálogo).</p></div>
    <div class="head-actions">${huRef('HU-14','HU-15','HU-16','HU-36','HU-38')}<button class="btn" onclick="importExcel()">⇪ Importar Excel</button><button class="btn pri" onclick="formInv()">＋ Alta en catálogo</button></div></div>
  <div class="card"><table class="tbl"><thead><tr><th>Ítem</th><th>Tipo</th><th>Stock</th><th>Mínimo</th><th>Estado</th><th class="actions">Acciones</th></tr></thead><tbody>
   ${rows.map(i=>`<tr><td><b>${i.nombre}</b></td><td>${i.tipo}</td><td>${i.stock} ${i.unidad}</td><td>${i.stockMin||'—'}</td>
     <td>${i.tipo==='Material'&&i.stock<i.stockMin?'<span class="badge b-bajo">Bajo mínimo</span>':'<span class="badge b-ok">OK</span>'}</td>
     <td class="actions"><button class="btn sm" onclick="ingreso(${i.id})">↧ Ingreso</button><button class="icon-btn" onclick="formInv('${i.id}')">✎</button><button class="icon-btn del" onclick="delEntity('inventario','${i.id}')">🗑</button></td></tr>`).join('')}
  </tbody></table></div>`;
};
function formInv(id){
  const r=id?store.get('inventario',id):{tipo:'Material',stock:0,stockMin:0,unidad:'u'};
  modal(`${id?'Editar':'Alta en catálogo'} · Inventario`,
   `<div class="form-grid"><div class="field full"><label>Nombre *</label><input data-k="nombre" value="${r.nombre||''}"></div>
    <div class="field"><label>Tipo</label><select data-k="tipo"><option ${r.tipo==='Material'?'selected':''}>Material</option><option ${r.tipo==='Herramienta'?'selected':''}>Herramienta</option></select></div>
    <div class="field"><label>Unidad</label><input data-k="unidad" value="${r.unidad||'u'}"></div>
    <div class="field"><label>Stock inicial</label><input type="number" data-k="stock" value="${r.stock||0}"></div>
    <div class="field"><label>Stock mínimo</label><input type="number" data-k="stockMin" value="${r.stockMin||0}"></div></div>`,
   `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn pri" onclick="saveInv('${id||''}')">Guardar</button>`);
}
function saveInv(id){ const d={}; document.querySelectorAll('#modal-bg [data-k]').forEach(el=>{let v=el.value;if(el.type==='number')v=+v||0;d[el.dataset.k]=v;});
  if(!d.nombre){toast('Poné el nombre','err');return;} if(id)store.update('inventario',id,d);else store.add('inventario',d); toast('Guardado','ok'); closeModal(); render(); }
function ingreso(id){ const c=prompt('Cantidad a ingresar (remito):','1'); if(c==null)return; const it=store.get('inventario',id); it.stock+= +c||0; store.persist(); toast(`Ingreso registrado · ${it.nombre}: ${it.stock} ${it.unidad}`,'ok'); render(); }
function importExcel(){
  modal('Importar inventario desde Excel',
   `<div class="hu-row">${huRef('HU-38')}</div><p class="lead" style="margin:0 0 12px">Pegá filas (una por línea) con el formato: <b>nombre, tipo, stock, stockMin, unidad</b></p>
    <div class="field"><textarea id="imp" rows="6" placeholder="Bujía NGK, Material, 20, 5, u&#10;Escalera 3m, Herramienta, 1, 0, u"></textarea></div>`,
   `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn pri" onclick="doImport()">Importar</button>`);
}
function doImport(){
  const txt=document.getElementById('imp').value.trim(); if(!txt){toast('Pegá al menos una fila','err');return;}
  let n=0; txt.split('\n').forEach(l=>{const p=l.split(',').map(s=>s.trim()); if(p[0]){store.add('inventario',{nombre:p[0],tipo:p[1]||'Material',stock:+p[2]||0,stockMin:+p[3]||0,unidad:p[4]||'u'});n++;}});
  toast(`${n} ítems importados`,'ok'); closeModal(); render();
}

/* --- KPIs --- */
V.kpis=()=>{
  const areasInc={}; store.all('tickets').forEach(t=>{const a=store.get('activos',t.idActivo);const es=a&&store.get('espacios',a.idEspacio);const ar=es?es.nombre:'—';areasInc[ar]=(areasInc[ar]||0)+1;});
  const topArea=Object.entries(areasInc).sort((a,b)=>b[1]-a[1])[0];
  const consumo={}; store.all('tareas').forEach(t=>t.consumos.forEach(c=>{const n=lbl('inventario',c.idItem);consumo[n]=(consumo[n]||0)+c.cant;}));
  return `<div class="page-head"><div><h2 class="sec">Tablero de indicadores</h2><p class="lead">KPIs calculados sobre los datos cargados.</p></div><div class="head-actions">${huRef('HU-37','HU-41','HU-42','HU-43','HU-44')}</div></div>
  <div class="grid g4" style="margin-bottom:18px">
    ${kpiStat(store.all('tickets').length,'Tickets totales','HU-12')}
    ${kpiStat(store.all('ordenes').filter(o=>o.estado==='Finalizada').length,'OT finalizadas','HU-27')}
    ${kpiStat(topArea?topArea[0]:'—','Espacio con más incidencias','HU-41')}
    ${kpiStat(store.all('tareas').filter(t=>t.estado==='Completada').length,'Tareas completadas','HU-43')}
  </div>
  <div class="grid g2">
   <div class="card"><div class="hu-row">${huRef('HU-42')}</div><h2 class="sec" style="font-size:1rem">Consumo de materiales</h2>
     ${Object.keys(consumo).length?`<table class="tbl"><tbody>${Object.entries(consumo).map(([n,c])=>`<tr><td>${n}</td><td>${c}</td></tr>`).join('')}</tbody></table>`:'<p class="lead">Todavía no hay consumos registrados.</p>'}</div>
   <div class="card"><div class="hu-row">${huRef('HU-43')}</div><h2 class="sec" style="font-size:1rem">Carga por técnico</h2>
     <table class="tbl"><tbody>${store.all('tecnicos').map(tc=>`<tr><td>${lbl('tecnicos',tc.id)}</td><td>${store.all('tareas').filter(t=>t.asignadoTipo==='tecnico'&&t.asignadoId===tc.id).length} tareas</td></tr>`).join('')}</tbody></table></div>
   <div class="card"><div class="hu-row">${huRef('HU-37')}</div><h2 class="sec" style="font-size:1rem">Historial de intervenciones por activo</h2>
     <table class="tbl"><thead><tr><th>Activo</th><th>Intervenciones</th><th>Criticidad</th></tr></thead><tbody>
     ${store.all('activos').map(a=>{const c=store.all('ordenes').filter(o=>o.idActivo===a.id).length;const cr=c>=3?'Alta':c>=1?'Media':'Baja';return `<tr><td>${lbl('activos',a.id)}</td><td>${c}</td><td>${prio(cr)}</td></tr>`;}).join('')}
     </tbody></table></div>
  </div>`;
};
const kpiStat=(n,l,hu)=>`<div class="card kpi"><div class="hu-row">${huRef(hu)}</div><b style="font-size:${String(n).length>6?'1.1rem':'2rem'}">${n}</b><span>${l}</span></div>`;

/* --- Autorizado --- */
V.registrar=()=>{
  const activos=store.all('activos').map(a=>`<option value="${a.id}">${lbl('activos',a.id)}</option>`).join('');
  return `<div class="page-head"><div><h2 class="sec">Registrar ticket</h2><p class="lead">Informá un desperfecto sobre un activo.</p></div><div class="head-actions">${huRef('HU-09')}</div></div>
  <div class="card" style="max-width:580px">
    <div class="field"><label>Activo afectado *</label><select id="rk-activo">${activos}</select></div>
    <div class="field"><label>Descripción del problema *</label><textarea id="rk-desc" rows="3" placeholder="Contá qué pasa…"></textarea></div>
    <div class="field"><label>Fecha</label><input type="date" id="rk-fecha" value="${today()}"></div>
    <div class="field"><label>Evidencia (foto)</label><input type="file"></div>
    <div class="note">La <b>prioridad</b> la asigna el administrador al planificar la OT (no la carga el solicitante).</div>
    <button class="btn pri" onclick="crearTicket()">Enviar solicitud</button>
  </div>`;
};
function crearTicket(){
  const idActivo=+document.getElementById('rk-activo').value;
  const desc=document.getElementById('rk-desc').value.trim(); if(!desc){toast('Describí el problema','err');return;}
  const data={idActivo,idAutorizado:CURRENT_AUTORIZADO,descripcion:desc,estado:'Creado',fecha:document.getElementById('rk-fecha').value};
  const dup=store.all('tickets').find(x=>x.idActivo===idActivo && !['Cerrado','Rechazado'].includes(x.estado));
  if(dup){ window._pendTicket=data; modal('⚠︎ Posible ticket duplicado',
    `<p style="margin:0 0 6px">Ya existe <b>${dup.id}</b> ${badge(dup.estado)} abierto sobre <b>${lbl('activos',idActivo)}</b>:</p><p class="lead" style="margin:0">“${dup.descripcion}”</p><p style="margin:12px 0 0">¿Registrás uno nuevo igual?</p>`,
    `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn dg" onclick="confirmTicket()">Registrar igual</button>`); return; }
  finalizeTicket(data);
}
function confirmTicket(){ closeModal(); finalizeTicket(window._pendTicket); }
function finalizeTicket(data){ const t=store.add('tickets',data,{pfx:'TK-',base:1042}); toast(`Ticket ${t.id} registrado`,'ok'); nav('mistickets'); }
V.mistickets=()=>{
  const list=store.all('tickets').filter(t=>t.idAutorizado===CURRENT_AUTORIZADO);
  return `<div class="page-head"><div><h2 class="sec">Mis tickets</h2><p class="lead">Seguimiento de tus solicitudes.</p></div><div class="head-actions">${huRef('HU-32')}</div></div>
  <div class="card">${list.length?ticketTable(list):`<div class="empty">Todavía no registraste tickets.</div>`}</div>`;
};
const CURRENT_AUTORIZADO=2; // demo: Luis Díaz

/* --- Mantenimiento preventivo (con automatización) --- */
V.preventivo=()=>{
  const planes=store.all('planesPrev');
  return `<div class="page-head"><div><h2 class="sec">◈ Mantenimiento preventivo</h2><p class="lead">Planes que generan OT preventivas automáticamente según su frecuencia.</p></div>
    <div class="head-actions">${huRef('HU-29')}<button class="btn pri" onclick="formEntity('planesPrev')">＋ Nuevo plan</button></div></div>
  <div class="card">${planes.length?`<table class="tbl"><thead><tr><th>Plan</th><th>Tipo de activo</th><th>Frecuencia</th><th>Plantilla</th><th class="actions">Acciones</th></tr></thead><tbody>
   ${planes.map(p=>`<tr><td><b>${p.nombre}</b></td><td>${lbl('tiposActivo',p.idTipoActivo)}</td><td>${p.frecuencia}</td><td>${lbl('plantillasTarea',p.idPlantilla)}</td>
     <td class="actions"><button class="btn ok sm" onclick="generarOTPrev(${p.id})">⚡ Generar OT</button><button class="icon-btn" onclick="formEntity('planesPrev','${p.id}')">✎</button><button class="icon-btn del" onclick="delEntity('planesPrev','${p.id}')">🗑</button></td></tr>`).join('')}
   </tbody></table>`:`<div class="empty">Sin planes. Creá el primero.</div>`}
   <div class="note" style="margin-top:14px">⚡ <b>Automatización:</b> “Generar OT” crea una orden preventiva con la tarea de la plantilla para cada activo de ese tipo, sin pasar por un ticket.</div></div>`;
};
function generarOTPrev(id){
  const p=store.get('planesPrev',id);
  const activos=store.all('activos').filter(a=>a.idTipoActivo===p.idTipoActivo);
  if(!activos.length){toast('No hay activos de ese tipo','err');return;}
  const plt=store.get('plantillasTarea',p.idPlantilla); const tec=store.all('tecnicos')[0];
  let creadas=0;
  activos.forEach(a=>{ const ot=store.add('ordenes',{idTicket:null,idActivo:a.id,estado:'Creada',fechaCreacion:today(),origen:'Preventivo'},{pfx:'OT-',base:501});
    store.add('tareas',{idOrden:ot.id,descripcion:plt?plt.descripcion:'Tarea preventiva',asignadoTipo:'tecnico',asignadoId:tec?tec.id:null,prioridad:'Media',fechaInicio:today(),estado:'Pendiente',observaciones:'',consumos:[]}); creadas++; });
  toast(`${creadas} OT preventivas generadas automáticamente`,'ok'); nav('ot');
}
function recuperar(){
  modal('Recuperar contraseña',
   `<div class="hu-row">${huRef('HU-34')}</div><div class="field"><label>Email</label><input type="email" placeholder="tu@frre.utn"></div><p class="lead" style="margin:0">Te enviaremos un enlace para restablecer tu contraseña.</p>`,
   `<button class="btn" onclick="closeModal()">Cancelar</button><button class="btn pri" onclick="closeModal();toast('Enlace de recuperación enviado','ok')">Enviar enlace</button>`);
}

/* ============================================================
   Router + navegación
   ============================================================ */
const NAV={
 admin:[['GRUPO','Operación'],['dashboard','◧','Dashboard'],['tickets','▤','Tickets'],['ot','▦','Órdenes de trabajo'],['preventivo','◈','Mant. preventivo'],
   ['GRUPO','Inventario'],['e:inventario','▥','Inventario'],
   ['GRUPO','Configuración'],['e:edificios','🏢','Edificios'],['e:espacios','🚪','Espacios'],['e:areas','📍','Áreas'],['e:especialidades','🛠','Especialidades'],['e:tecnicos','👷','Técnicos'],['e:tiposActivo','🏷','Tipos de activo'],['e:activos','🖥','Activos'],['e:autorizados','🧑‍💼','Usuarios autoriz.'],['e:prestadores','🏢','Prestadores'],['e:plantillasTarea','📋','Plantillas tareas'],
   ['GRUPO','Seguridad'],['e:usuarios','🔐','Usuarios y permisos'],
   ['GRUPO','Análisis'],['kpis','◫','Tablero KPIs']],
 tec:[['GRUPO','Trabajo'],['tareas','✦','Mis tareas']],
 auto:[['GRUPO','Solicitudes'],['registrar','＋','Registrar ticket'],['mistickets','▤','Mis tickets']],
};
const TITLES={dashboard:'Dashboard',tickets:'Tickets',ticketDetail:'Detalle de ticket',ot:'Órdenes de trabajo',otDetail:'Orden de trabajo',tareas:'Mis tareas',ejecutar:'Ejecutar tarea',kpis:'Tablero KPIs',registrar:'Registrar ticket',mistickets:'Mis tickets',preventivo:'Mant. preventivo'};
const ROLE_META={admin:['Admin Demo','A'],tec:['Marta Gómez','M'],auto:['Luis Díaz','L']};
let role='admin', view='dashboard';

function nav(v){ view=v; window._tf=window._tf; render(); document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('active',a.dataset.v===view)); }
function buildNav(){
  const pend=store.all('tareas').filter(t=>t.asignadoTipo==='tecnico'&&t.estado!=='Completada').length;
  document.getElementById('nav').innerHTML=NAV[role].map(item=> item[0]==='GRUPO'
    ? `<div class="nav-group">${item[1]}</div>`
    : `<a data-v="${item[0]}" onclick="nav('${item[0]}')"><span class="ic">${item[1]}</span>${item[2]}${item[0]==='tareas'&&pend?`<span class="nav-badge">${pend}</span>`:''}</a>`).join('');
}
function render(){
  let html, title;
  if(view.startsWith('e:')){ const ek=view.slice(2); title=ENTITIES[ek]?.label||'ABM'; html= ek==='inventario'?V.inventarioView():renderEntity(ek); }
  else if(view==='ticketDetail'){ html=V.ticketDetail(); title='Detalle de ticket'; }
  else if(view==='otDetail'){ html=V.otDetail(); title='Orden de trabajo'; }
  else { html=(V[view]||(()=>`<div class="empty">En construcción</div>`))(); title=TITLES[view]||'SIGMA'; }
  document.getElementById('content').innerHTML=html;
  document.getElementById('view-title').textContent=title;
  buildNav();
  document.querySelectorAll('#nav a').forEach(a=>a.classList.toggle('active',a.dataset.v===view));
}
function setRole(r){ role=r; const m=ROLE_META[r]; document.getElementById('who-name').textContent=m[0]; document.getElementById('who-av').textContent=m[1];
  buildNav(); view=NAV[r].find(i=>i[0]!=='GRUPO')[0]; render(); }
function enter(){ document.getElementById('login').classList.add('hidden'); document.getElementById('app').classList.remove('hidden'); setRole(document.getElementById('role')?.value||'admin'); }
function resetDemo(){ if(confirm('¿Reiniciar los datos de ejemplo? Se pierden tus cambios.')){ store.reset(); toast('Datos reiniciados'); render(); } }
const today=()=>new Date().toISOString().slice(0,10);

/* ---- Índice de HU → dónde está implementada cada una ---- */
const HU_LOC={
 'HU-05':{v:'e:edificios',r:'admin',s:1},'HU-45':{v:'e:especialidades',r:'admin',s:1},'HU-06':{v:'e:tecnicos',r:'admin',s:1},
 'HU-46':{v:'e:tiposActivo',r:'admin',s:1},'HU-08':{v:'e:activos',r:'admin',s:1},'HU-07':{v:'e:autorizados',r:'admin',s:1},
 'HU-47':{v:'e:espacios',r:'admin',s:1},'HU-48':{v:'e:areas',r:'admin',s:1},
 'HU-09':{v:'registrar',r:'auto',s:2},'HU-12':{v:'tickets',r:'admin',s:2},'HU-11':{v:'tickets',r:'admin',s:2},
 'HU-13':{v:'e:plantillasTarea',r:'admin',s:2},'HU-14':{v:'e:inventario',r:'admin',s:2},
 'HU-17':{v:'ot',r:'admin',s:3},'HU-16':{v:'e:inventario',r:'admin',s:3},'HU-15':{v:'e:inventario',r:'admin',s:3},
 'HU-38':{v:'e:inventario',r:'admin',s:3},'HU-49':{v:'e:prestadores',r:'admin',s:3},'HU-50':{v:'ot',r:'admin',s:3},
 'HU-21':{v:'tareas',r:'tec',s:4},'HU-22':{v:'tareas',r:'tec',s:4},'HU-26':{v:'ot',r:'admin',s:4},
 'HU-27':{v:'ot',r:'admin',s:5},'HU-29':{v:'preventivo',r:'admin',s:5},'HU-32':{v:'mistickets',r:'auto',s:5},
 'HU-33':{v:'__login',s:6},'HU-34':{v:'__recuperar',s:6},'HU-35':{v:'e:usuarios',r:'admin',s:6},
 'HU-36':{v:'e:inventario',r:'admin',s:6},'HU-37':{v:'kpis',r:'admin',s:6},
 'HU-41':{v:'kpis',r:'admin',s:7},'HU-42':{v:'kpis',r:'admin',s:7},'HU-43':{v:'kpis',r:'admin',s:7},'HU-44':{v:'kpis',r:'admin',s:7},
};
function openHUList(){
  const sprints={}; Object.keys(HU_LOC).forEach(id=>{const s=HU_LOC[id].s;(sprints[s]=sprints[s]||[]).push(id);});
  let body='<p class="lead" style="margin:0 0 12px">Tocá una HU para ir a la pantalla donde está implementada.</p>';
  Object.keys(sprints).sort().forEach(s=>{
    body+=`<div class="nav-group" style="padding:12px 0 4px">Sprint ${s}</div>`;
    sprints[s].forEach(id=>{ body+=`<div class="hu-item" onclick="goHU('${id}')"><span class="hu-item-id">${id}</span><span class="hu-item-tx">${HU[id]||''}</span><span class="hu-item-go">→</span></div>`; });
  });
  modal(`Historias de Usuario · ${Object.keys(HU_LOC).length}`,body,'<a class="btn" href="https://github.com/users/matiasgzlez/projects/4" target="_blank" rel="noopener">🔗 Ver en GitHub Projects ↗</a><button class="btn" onclick="closeModal()">Cerrar</button>');
}
function goHU(id){
  const l=HU_LOC[id]; if(!l)return; closeModal();
  if(l.v==='__login'||l.v==='__recuperar'){ document.getElementById('app').classList.add('hidden'); document.getElementById('login').classList.remove('hidden'); if(l.v==='__recuperar')recuperar(); return; }
  if(l.r && l.r!==role){ const sel=document.getElementById('role'); if(sel)sel.value=l.r; setRole(l.r); }
  nav(l.v); toast('→ '+id);
}

/* init */
store.load();
document.getElementById('login-hu').innerHTML=huRef('HU-33','HU-34');

/* posicionamiento inteligente de los tooltips de HU (evita que se salgan de pantalla) */
document.addEventListener('mouseover',e=>{
  const chip=e.target.closest&&e.target.closest('.hu-ref'); if(!chip)return;
  const pop=chip.querySelector('.pop'); if(!pop)return;
  const r=chip.getBoundingClientRect(), pw=pop.offsetWidth||270, ph=pop.offsetHeight||90, m=10;
  let left=r.left; if(left+pw>window.innerWidth-m) left=r.right-pw; if(left<m) left=m;
  let top=r.top-ph-8; if(top<m) top=r.bottom+8;
  pop.style.left=left+'px'; pop.style.top=top+'px';
});
