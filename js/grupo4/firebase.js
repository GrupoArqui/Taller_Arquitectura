/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/
/*################################################################################################*/

$(document).ready(function () {
	
	const config = {
		apiKey: "AIzaSyBh0IiiXyAUgWPVeIXYyBxYHkAjPKdouG8",
		authDomain: "data-base-arc-grupo4.firebaseapp.com",
		databaseURL: "https://data-base-arc-grupo4-default-rtdb.firebaseio.com",
		projectId: "data-base-arc-grupo4",
		storageBucket: "data-base-arc-grupo4.appspot.com",
		messagingSenderId: "31642498289",
		appId: "1:31642498289:web:6bf1f3c60b60e6bddc2550",
		measurementId: "G-MW07RE2LXB"
	};
	

	firebase.initializeApp(config); //inicializamos firebase
	var db = firebase.database();
	var coleccionProductos = db.ref().child("datoscompuG4");
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
			datos.child("hora").val(),
			datos.child("CPU").val(),
			datos.child("RAM").val(),
			datos.child("Cache").val(),
			datos.child("CD").val(),
		];
		table.rows.add([dataSet]).draw();
	});
});
