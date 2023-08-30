/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/

$(document).ready(function () {
	const config = {
		apiKey: "AIzaSyBItnbDqsSmjKea9_WG2K8zTzclVr7KFaE",
        authDomain: "arquitectura-grupo1.firebaseapp.com",
        databaseURL: "https://arquitectura-grupo1-default-rtdb.firebaseio.com",
        projectId: "arquitectura-grupo1",
        storageBucket: "arquitectura-grupo1.appspot.com",
        messagingSenderId: "403528054934",
        appId: "1:403528054934:web:f35df505876e472528eab7",
	};
	firebase.initializeApp(config); //inicializamos firebase
	var db = firebase.database();
	var coleccionProductos = db.ref().child("valores");
	var dataSet = []; //array para guardar los valores de los campos inputs del form
	var table = $("#tablaValores").DataTable({
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
		$("#tablaValores").delay("slow").fadeIn();
		dataSet = [
			datos.key,
			datos.child("fecha").val(),
			datos.child("hora").val(),
			datos.child("CPU").val(),
			datos.child("Memoria").val(),
			datos.child("Disco").val(),
			datos.child("Recepcion").val(),
		];
		table.rows.add([dataSet]).draw();
	});
});