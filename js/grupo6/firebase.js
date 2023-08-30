/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/

$(document).ready(function () {
  const config = {
    apiKey: "AIzaSyClIIONgDv9iQ_ye5Qo0ETtFONozUaWr-0",
    authDomain: "grupo-6-43b09.firebaseapp.com",
    databaseURL: "https://grupo-6-43b09-default-rtdb.firebaseio.com",
    projectId: "grupo-6-43b09",
    storageBucket: "grupo-6-43b09.appspot.com",
    messagingSenderId: "111085280417",
    appId: "1:111085280417:web:338a5beeca4dc03ac9a4e0",
    measurementId: "G-QGYW34P0X2",
  };
  firebase.initializeApp(config); //inicializamos firebase
  var db = firebase.database();
  var coleccionProductos = db.ref().child("grupo6");
  var dataSet = []; //array para guardar los valores de los campos inputs del form
  var table = $("#tablaProductos").DataTable({
    pageLength: 5,
    lengthMenu: [
      [5, 10, 20, -1],
      [5, 10, 20, "Todos"],
    ],
    data: dataSet,
    columnDefs: [
      {
        targets: [0],
        visible: false, //ocultamos la columna de ID que es la [0]
      },
    ],
  });

  coleccionProductos.on("child_added", (datos) => {
    $("#tablaProductos").delay("slow").fadeIn();
    dataSet = [
      datos.key,
      datos.child("fecha").val(),
      datos.child("hora").val(),
      datos.child("Uso de CPU").val(),
      datos.child("Uso Memoria RAM").val(),
      datos.child("Uso Disco").val(),
    ];
    table.rows.add([dataSet]).draw();
  });
});
