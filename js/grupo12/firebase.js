/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/
console.log("firebase conectado")
$(document).ready(function () {
	const config = {
		apiKey: "AIzaSyA2wVfP429fdlSjR9EroRM0kYKQ8Ddn2cM",
		authDomain: "arquitectura-grupo-12.firebaseapp.com",
		databaseURL: "https://arquitectura-grupo-12-default-rtdb.firebaseio.com",
		projectId: "arquitectura-grupo-12",
		storageBucket: "arquitectura-grupo-12.appspot.com",
		messagingSenderId: "768591056677",
		appId: "1:768591056677:web:efa3b2e4b1ad4964ae54cc",
		
	};
	firebase.initializeApp(config); //inicializamos firebase
	var db = firebase.database();
	var coleccionProductos = db.ref().child("presiones");
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
			datos.child("presionSistolica").val(),
			datos.child("presionDiastocia").val(),
		];
		table.rows.add([dataSet]).draw();
	});
});
