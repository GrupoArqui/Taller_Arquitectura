/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/
// al inicio del archivo


$(document).ready(function () {
	// Your web app's Firebase configuration
  	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  	const firebaseConfig = {
		apiKey: "AIzaSyBEwwsS3mcajiDU1cn303xVWPClXolTHJQ",
		authDomain: "arqui-grupo-8.firebaseapp.com",
		databaseURL: "https://arqui-grupo-8-default-rtdb.firebaseio.com",
		projectId: "arqui-grupo-8",
		storageBucket: "arqui-grupo-8.appspot.com",
		messagingSenderId: "226714960612",
		appId: "1:226714960612:web:d436b49f48058d5fdba2f1",
		measurementId: "G-7SXRPDJ17P"
	  };

	firebase.initializeApp(firebaseConfig);

	var db = firebase.database();
	var coleccionProductos = db.ref().child("presiones");
	var dataSet = []; //array para guardar los valores de los campos inputs del form
	var table = $("#tablaProductos").DataTable({
		pageLength: 10,
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
			datos.child("CPU").val(),
			datos.child("Memory").val(),
			datos.child("Disco").val(),
			datos.child("CapacidadMemoriaRam").val(),
		];
		table.rows.add([dataSet]).draw();
	});
});

