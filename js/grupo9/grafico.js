/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/

const cpuSpan = document.getElementById("cpuValue");

// Función para actualizar el valor del CPU, MEMORIA Y DISCO en el span


function updateCPUValue(value) {
  cpuSpan.textContent = value; 
}

function updateMemoryValue(value) {
	const memorySpan = document.getElementById("memoryValue");
	memorySpan.textContent = value;
}

function updateDiskValue(value) {
	const diskSpan = document.getElementById("diskValue");
	diskSpan.textContent = value;
}

function updateTemperatureValue(value) {
	const diskSpan = document.getElementById("temperatureValue");
	diskSpan.textContent = value + " °";
}

function updateSystemValue(value) {
	const diskSpan = document.getElementById("systemValue");
	diskSpan.textContent = value;
}

function updateTotalMemoryValue(value) {
	const diskSpan = document.getElementById("totalMemoryValue");
	diskSpan.textContent = value +" GB";
}
function updateTotalStorageValue(value) {
	const diskSpan = document.getElementById("totalStorageValue");
	diskSpan.textContent = value +" GB";
}

function updateIpDeviceValue(value) {
	const ip = document.getElementById("ipDevice");
	ip.textContent = value;
}




const ctx = document.getElementById("chart-bars").getContext("2d");
let labels_n = [];
let data_n = [];
let data_n2 = [];
let data_n3 = [];
let data_n4 = [];
let myChart = new Chart(ctx, {
	type: "line",
	data: {
		labels: labels_n,
		datasets: [
			{
				label: "CPU",
				data: data_n,
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2,
				backgroundColor: ["rgba(0, 0, 255, 0.2)"],
				borderColor: ["rgba(0, 0, 255,1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

//Segunda
const ctx2 = document.getElementById("chart-line").getContext("2d");
let labels2_n = [];
let data2_n = [];
let data2_n2 = [];
let data2_n3 = [];
let data2_n4 = [];
let myChart2 = new Chart(ctx2, {
	type: "line",
	data: {
		labels: labels_n,
		datasets: [
			{
				label: "Memoria",
				data: data2_n,
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data2_n2,
				backgroundColor: ["rgba(0, 0, 255, 0.2)"],
				borderColor: ["rgba(0, 0, 255,1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});

//Tercera
const ctx3 = document.getElementById("chart-line-tasks").getContext("2d");
let labels3_n = [];
let data3_n = [];
let data3_n2 = [];
let data3_n3 = [];
let data3_n4 = [];
let myChart3 = new Chart(ctx3, {
	type: "line",
	data: {
		labels: labels_n,
		datasets: [
			{
				label: "Almacenamiento",
				data: data3_n,
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data3_n2,
				backgroundColor: ["rgba(0, 0, 255, 0.2)"],
				borderColor: ["rgba(0, 0, 255,1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});


function addData(chart, dataS) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(dataS);
	chart.data.datasets[1].data.push(40);
	chart.update();

	// Llamada inicial para mostrar el valor del CPU al cargar la página
	updateCPUValue(dataS);
}

function addData_memory(chart, dataS) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(dataS);
	chart.data.datasets[1].data.push(40);
	chart.update();
	
	// Llamada inicial para mostrar el valor de la MEMORIA al cargar la página
	updateMemoryValue(dataS);
}

function addData_almacenamiento(chart, dataS) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(dataS);
	
	chart.data.datasets[1].data.push(40);
	chart.update();

	// Llamada inicial para mostrar el valor del DISCO al cargar la página
	updateDiskValue(dataS);
}

function addData_temperature(dataS) {
	// Llamada inicial para mostrar el valor del DISCO al cargar la página
	updateTemperatureValue(dataS);
}
function addData_system(dataS) {
	// Llamada inicial para mostrar el valor del DISCO al cargar la página
	updateSystemValue(dataS);
}

function addData_total_memory(dataS) {
	// Llamada inicial para mostrar el valor del DISCO al cargar la página
	updateTotalMemoryValue(dataS);
}

function addData_total_storage(dataS) {
	// Llamada inicial para mostrar el valor del DISCO al cargar la página
	updateTotalStorageValue(dataS);
}

function addData_ip_device(dataS) {
	// Llamada inicial para mostrar el valor de la ip
	updateIpDeviceValue(dataS);
}
