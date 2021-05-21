
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
        const tareas = fs.readFileSync('./tareas.json', 'utf-8')
        let listado = JSON.parse(tareas);
        return listado;

}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
        let listado = exports.leerTareas();
        listado.push(tarea)
        fs.writeFileSync('./tareas.json', JSON.stringify(listado));
        listado = exports.leerTareas();
        return listado;
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
        let listado = exports.leerTareas();
        let listaFiltrada =[];
        for (let i = 0; i < listado.length; i++){
            listado[i].status == estado ? listaFiltrada.push(listado[i]) : null;
        }
        return listaFiltrada


}
