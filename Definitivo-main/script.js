const switchButton = document.getElementById('switch');
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchButton.classList.toggle('active')
})

const elementsList = document.getElementsByTagName('p');

function getElementFontSize(element) {
    //getComputedStyle nos devuelve las propiedades css de cada párrafo(elemento)
    const elementFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    return parseFloat(elementFontSize);  //Devolvemos el total de pixeles
}

function cambiarTexto(operador) {
    for (let element of elementsList) {
        //Obtener el total de pixel de cada párrafo.
        const currentSize = getElementFontSize(element);

        //Restar o sumar, dependiendo del operador.
        const newFontSize = (operador === '+' ? (currentSize + 1) : (currentSize - 1)) + 'px';
        //Aplicarle al parrafo actual el nuevo tamaño.
        element.style.fontSize = newFontSize
    }
}






var Fila = null
function onSubmit() {
    let DataForm = Leer()
    if (Fila == null) {
        InsertarDatos(DataForm)
    } else {
        Actualizar(DataForm)
        Vaciar()
    }
}
//En la funcion Leer se ocupo los objetos DataForm que nos permite leer los datos y este esta diseñado principalmente para enviar datos de formularios//
function Leer() {
    let DataForm = {}
    DataForm["nom"] = document.getElementById("nom").value
    DataForm["ape"] = document.getElementById("ape").value
    DataForm["ci"] = document.getElementById("ci").value
    DataForm["gmail"] = document.getElementById("gmail").value
    DataForm["contra"] = document.getElementById("contra").value
    DataForm["num"] = document.getElementById("num").value
    DataForm["fecha"] = document.getElementById("fecha").value
    DataForm["page"] = document.getElementById("page").value
    DataForm["hombre"] = document.getElementById("hombre").value
    DataForm["mujer"] = document.getElementById("mujer").value
    return DataForm
}
//En la siguiente funcion se toma la tabla y la primera celda seria el numero indice que comienza en 0 y su codigo de la informacion, luego cree una celda con el boton editar y eliminar para la lista de tabla// 
function InsertarDatos(data) {
    let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
    let Fila = table.insertRow(table.length)
    columna1 = Fila.insertCell(0).innerHTML = data.nom
    columna2 = Fila.insertCell(1).innerHTML = data.ape
    columna3 = Fila.insertCell(2).innerHTML = data.ci
    columna4 = Fila.insertCell(3).innerHTML = data.gmail
    columna5 = Fila.insertCell(4).innerHTML = data.contra
    columna6 = Fila.insertCell(5).innerHTML = data.num
    columna7 = Fila.insertCell(6).innerHTML = data.fecha
    columna8 = Fila.insertCell(7).innerHTML = data.page
    columna9 = Fila.insertCell(8).innerHTML = data.hombre
    columna10 = Fila.insertCell(9).innerHTML = data.mujer
    columna11 = Fila.insertCell(10).innerHTML = `<input class="submit" type="button" onClick="Editarr(this)" value="Editar" >
                                            <input class="submit" type="button" onClick="Borrarr(this)" value="Eliminar" >`
    document.getElementById("nom").focus()
    Vaciar()
}
//En la siguiente funcion es el restablecimiento de formulario "registro"//
function Vaciar() {
    document.getElementById("nom").value = ""
    document.getElementById("ape").value = ""
    document.getElementById("ci").value = ""
    document.getElementById("gmail").value = ""
    document.getElementById("contra").value = ""
    document.getElementById("num").value = ""
    document.getElementById("fecha").value = ""
    document.getElementById("page").value = ""
    document.getElementById("hombre").value = ""
    document.getElementById("mujer").value = ""
    Fila = null
}
//En la siguiente funcion se edita para eso se toma el id de todas las fila toda para lograr editar cada parametro//
function Editarr(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("nom").value = Fila.cells[0].innerHTML
    document.getElementById("ape").value = Fila.cells[1].innerHTML
    document.getElementById("ci").value = Fila.cells[2].innerHTML
    document.getElementById("gmail").value = Fila.cells[3].innerHTML
    document.getElementById("contra").value = Fila.cells[4].innerHTML
    document.getElementById("num").value = Fila.cells[5].innerHTML
    document.getElementById("fecha").value = Fila.cells[6].innerHTML
    document.getElementById("page").value = Fila.cells[7].innerHTML
    document.getElementById("hombre").value = Fila.cells[8].innerHTML
    document.getElementById("mujer").value = Fila.cells[9].innerHTML
}
//En la siguiente funcion se establece el valor de actualizar en la tabla aca se menciona cada indice de celda y su identificacion//
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.nom
    Fila.cells[1].innerHTML = DataForm.ape
    Fila.cells[2].innerHTML = DataForm.ci
    Fila.cells[3].innerHTML = DataForm.gmail
    Fila.cells[4].innerHTML = DataForm.contra
    Fila.cells[5].innerHTML = DataForm.num
    Fila.cells[6].innerHTML = DataForm.fecha
    Fila.cells[7].innerHTML = DataForm.page
    Fila.cells[8].innerHTML = DataForm.hombre
    Fila.cells[9].innerHTML = DataForm.mujer
    document.getElementById("nom").focus()
}
//En la siguiente funcion se empieza con un mensaje para la confirmacion de la eliminacion y si es un si entonces se eliminara el registro//
function Borrarr(td) {
    if (confirm('¿Seguro de eliminar la cuenta?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }
}
