/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/

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
				label: "Disk",
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
				label: "RAM",
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
}


function addData_disk(chart, dataS) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(dataS);
	chart.data.datasets[1].data.push(40);
	chart.update();
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
}

function addData_temperature(chart, dataS) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(dataS);
	chart.data.datasets[1].data.push(40);
	chart.update();
}
