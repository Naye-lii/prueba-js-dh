const { constants } = require("node:buffer")

/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require ('fs') 
exports.leerTareas = function () {
    /*
        En esta función debes leer y retornar las tareas registradas.
    */
        const tareas = fs.readFileSync('tareas.json', 'utf-8')
        return JSON.parse(tareas)
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
        const tareas = fs.readFileSync('tareas.json', 'utf-8')
        listaTareas = JSON.parse(tareas)
        return listaTareas.push(tarea)
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
        const tareas = fs.readFileSync('tareas.json', 'utf-8')
        listaTareas = JSON.parse(tareas)
        let s = [];
        for (let i = 0; i < lisraTareas.length; i++ ){
            listaTareas[i].estado == estado ? s = s.push(listaTareas[i]) : null ;
        }
        return s;
}
