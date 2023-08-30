/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/

$(document).ready(function () {
	const config = {
		/*apiKey: "AIzaSyB4XD-AIzaSyDUAEKVhvQV4g9xk5uefVGAPpRJwPFZTDs",
		authDomain: "presion-a3041.firebaseapp.com",
		databaseURL: "https://presion-a3041-default-rtdb.firebaseio.com/",
		projectId: "presion-a3041",
		storageBucket: "presion-a3041.appspot.com",
		messagingSenderId: "752009347781",
		appId: "1:752009347781:web:7dc65ecf2f5bc204fe26ac",*/

		apiKey: "AIzaSyAwi2Uchj6--Acl-ilaZO_ReHj7wvZINbM",
    	authDomain: "arquitectura-grupo-2-12e2b.firebaseapp.com",
    	databaseURL: "https://arquitectura-grupo-2-12e2b-default-rtdb.firebaseio.com",
    	projectId: "arquitectura-grupo-2-12e2b",
    	storageBucket: "arquitectura-grupo-2-12e2b.appspot.com",
    	messagingSenderId: "97054327515",
    	appId: "1:97054327515:web:0e64b174892096883302fe",
    	measurementId: "G-5TPVHDHHV6"
	};
	firebase.initializeApp(config); //inicializamos firebase
	var db = firebase.database();
	var coleccionProductos = db.ref().child("datos");
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
			datos.child("cpu").val(),
			datos.child("memory").val(),
			datos.child("disk").val(),
			datos.child("cache").val(),
		];
		table.rows.add([dataSet]).draw();
	});
});
