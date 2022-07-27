const adicionar = document.querySelector("#adicionar");

function precioconIva(precio){
  let precioIva;
  precioIva = precio*1.21;
  return precioIva.toFixed(2);
}

function exito(){
    Toastify({
      text: "Cargado con éxito!",
      duration: 1500,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "blue"}
    }).showToast();
}



$(document).ready(function() {
  //obtenemos el valor de los input

  $('#adicionar').click(function() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cedula = document.getElementById("cedula").value;
    var precioIVA = precioconIva(document.getElementById("apellido").value);
    var i = 1; //contador para asignar id al boton que borrara la fila
    var fila = '<tr id="row' + i + '"><td>' + nombre + '</td><td>' + apellido + '</td><td>' + cedula + '</td><td>' + precioIVA + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila
    i++;
    
  
    $('#mytable tr:first').after(fila);
      $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
      var nFilas = $("#mytable tr").length;
      $("#adicionados").append(nFilas - 1);
      //le resto 1 para no contar la fila del header
      document.getElementById("apellido").value ="";
      document.getElementById("cedula").value = "";
      document.getElementById("nombre").value = "";
      document.getElementById("nombre").focus();


      Toastify({
        text: "Cargado con éxito!",
        duration: 1500,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "blue"}
      }).showToast();

  });

  $(document).on('click', '.btn_remove', function() {
    var button_id = $(this).attr("id");
      //cuando da click obtenemos el id del boton
      $('#row' + button_id + '').remove(); //borra la fila
      //limpia el para que vuelva a contar las filas de la tabla
      $("#adicionados").text("");
      var nFilas = $("#mytable tr").length;
      $("#adicionados").append(nFilas - 1);
  });
});
