/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


$(document).ready(function () {
	// Your web app's Firebase configuration
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: "AIzaSyB7a1cp2wpW8htomlNsw9RbZcvgk4LNzc8",
		authDomain: "arqui-grupo11.firebaseapp.com",
		databaseURL: "https://arqui-grupo11-default-rtdb.firebaseio.com",
		projectId: "arqui-grupo11",
		storageBucket: "arqui-grupo11.appspot.com",
		messagingSenderId: "612954810741",
		appId: "1:612954810741:web:dc3672b26965753afb0b3c",
		measurementId: "G-LWXZ71295C"

	};

	// Initialize Firebase
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
			datos.child("Descarga").val(),
			datos.child("Subida").val()
		];
		table.rows.add([dataSet]).draw();
	});

	coleccionProductos.orderByChild("fecha").limitToFirst(2).once("value", (snapshot) => {
		snapshot.forEach((datos) => {
			const primeraFecha = datos.child("fecha").val();
			const fechaInput = document.getElementById("fechaInput");
			if (primeraFecha !== null) {
				fechaInput.min = primeraFecha;
				console.log(fechaInput);
			}
			//   fechaInput.min = '2023-08-27';
			console.log(primeraFecha);
			console.log(fechaInput);
		});
	});


	coleccionProductos.orderByChild("fecha").limitToLast(1).once("value", (snapshot) => {
		snapshot.forEach((datos) => {
			const ultimaFecha = datos.child("fecha").val();
			const fechaInput = document.getElementById("fechaInput");
			fechaInput.max = ultimaFecha;
			console.log(ultimaFecha)
			console.log(fechaInput)
		});
	});

	$("#generateReportButton").on("click", function () {
		const selectedDate = document.getElementById("fechaInput").value;
		const fechaInput = new Date(selectedDate); // Convertir a objeto de fecha
		const today = new Date(); // Obtener la fecha actual
		console.log(selectedDate)
		console.log(fechaInput)
		console.log(today)

		if (!selectedDate) {
			alert("Selecciona una fecha antes de generar el informe.");
			return;
		}

		obtenerTodasLasFechas(selectedDate, function (fechas) {
			generateMultiplePDFs(fechas);
		});
	});


	function obtenerTodasLasFechas(selectedDate, callback) {
		const coleccionProductos = db.ref().child("presiones");
		coleccionProductos.once("value", (snapshot) => {
			const fechas = new Set();
			snapshot.forEach((datos) => {
				const fecha = datos.child("fecha").val();
				if (fecha >= selectedDate) {
					fechas.add(fecha);
				}
			});
			callback(Array.from(fechas));
		});
	}

	function generateMultiplePDFs(fechas) {
		const zip = new JSZip();
		const promises = [];

		fechas.forEach((fecha, index) => {
			promises.push(generatePDFReport(fecha, index + 1, zip));
		});

		Promise.all(promises).then(() => {
			zip.generateAsync({ type: "blob" }).then(function (content) {
				saveAs(content, "Informes.zip");
			});
		});
	}

	function generatePDFReport(fecha, pageIndex, zip) {
		return new Promise((resolve) => {
			const doc = new jsPDF();
			let yPos = 20;
			const pageWidth = doc.internal.pageSize.width;
			const pageHeight = doc.internal.pageSize.height;
			const columnWidth = pageWidth / 2;

			obtenerDatosPorFecha(fecha, function (data) {
				doc.setFontSize(16);
				doc.text(`Informe de Datos - Fecha ${fecha}`, 10, yPos);
				yPos += 20;

				const promedios = calcularPromedios(data);

				doc.setFontSize(12);
				Object.keys(promedios).forEach((key, index) => {
					doc.text(`${key} Promedio: ${promedios[key].toFixed(2)}`, 10, yPos + index * 10);
				});

				yPos += Object.keys(promedios).length * 10 + 10;

				data.forEach((rowData, rowIndex) => {
					if (yPos + 20 > pageHeight) {
						doc.addPage();
						yPos = 20;
					}

					doc.setFontSize(12);
					Object.keys(rowData).forEach((key, colIndex) => {
						const columnIndex = colIndex % 2;
						const textX = columnIndex === 0 ? 10 : columnWidth + 10;
						const text = `${key}: ${rowData[key]}`;
						doc.text(textX, yPos, text);
						if (columnIndex === 1) {
							yPos += 10;
						}
					});

					yPos += 10;
				});

				const pdfBlob = doc.output("blob");
				zip.file(`Informe_${fecha}.pdf`, pdfBlob);
				resolve();
			});
		});
	}

	function obtenerDatosPorFecha(selectedDate, callback) {
		const coleccionProductos = db.ref().child("presiones");
		coleccionProductos.once("value", (snapshot) => {
			const data = [];
			snapshot.forEach((datos) => {
				const fecha = datos.child("fecha").val();
				if (fecha === selectedDate) {
					const rowData = {
						hora: datos.child("hora").val(),
						CPU: datos.child("CPU").val(),
						Memory: datos.child("Memory").val(),
						Disco: datos.child("Disco").val(),
						Descarga: datos.child("Descarga").val(),
						Subida: datos.child("Subida").val(),
					};
					data.push(rowData);
				}
			});
			callback(data);
		});
	}

	function calcularPromedios(data) {
		const totalRows = data.length;
		const promedios = {
			CPU: 0,
			Memory: 0,
			Disco: 0,
			Descarga: 0,
			Subida: 0,
		};

		data.forEach((rowData) => {
			Object.keys(promedios).forEach((key) => {
				promedios[key] += parseFloat(rowData[key]);
			});
		});

		Object.keys(promedios).forEach((key) => {
			promedios[key] /= totalRows;
		});

		return promedios;
	}
});
