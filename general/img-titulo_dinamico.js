//Obtención del elemento imagen en el cuál se muestra el titulo.
const imagen_titulo = document.getElementById("img-titulo");

//Obtención de la fecha actual.
var fecha = new Date();


if((fecha.getMonth() + 1) == 9) { //Septiembre, mes patrio.
    imagen_titulo.src = "'{{ '/imagenes/logos/tituloALaMexicana.png' | relative_url }}'";
} else if((fecha.getMonth() + 1) == 6) { //Junio, mes del orgullo LGBT.
    //Cada día una bandera LGBT diferente.
} else { //Cualquier otro mes.
    imagen_titulo.src = "{{ '/imagenes/logos/URBtitulo.png' | relative_url }}";
}