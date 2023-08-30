/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/

$(document).ready(function () {
	const config = {
		apiKey: "AIzaSyDdrVWYYi2QNBh4D0l8_3ZSaQqtYrB8q28",
		authDomain: "arquitectura-grupo-9.firebaseapp.com",
		databaseURL: "https://arquitectura-grupo-9-default-rtdb.firebaseio.com",
		projectId: "arquitectura-grupo-9",
		storageBucket: "arquitectura-grupo-9.appspot.com",
		messagingSenderId: "909836845860",
		appId: "1:909836845860:web:b04cf2ae82e3cdfb2da9b1",
		measurementId: "G-SQCEM0PJLB"
		//apiKey: "AIzaSyB4XD-AIzaSyDUAEKVhvQV4g9xk5uefVGAPpRJwPFZTDs",
		//authDomain: "presion-a3041.firebaseapp.com",
		//databaseURL: "https://arquitectura-grupo-9-default-rtdb.firebaseio.com/",
		//databaseURL: "https://presion-a3041-default-rtdb.firebaseio.com/",
		//projectId: "presion-a3041",
		//storageBucket: "presion-a3041.appspot.com",
		//messagingSenderId: "752009347781",
		//appId: "1:752009347781:web:7dc65ecf2f5bc204fe26ac",
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


