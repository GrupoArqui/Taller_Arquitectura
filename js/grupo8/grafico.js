/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/

const ctx = document.getElementById("myChart").getContext("2d");

let labels_n = [];
let data_n =   [];
let data_n2 =  [];
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
                backgroundColor: "rgba(255, 102, 178, 1)",
                borderColor: "rgba(255, 102, 178, 1)", // Cambiar el color a blanco (RGB: 255, 255, 255)
                borderWidth: 1, // Hacer la línea más gruesa (puedes ajustar el valor según tus preferencias)
            },
            {
                label: "Base Line",
                data: data_n2,
                backgroundColor: "rgba(255, 192, 203, 1)",
                borderColor: "rgba(255, 192, 203, 1)", // Cambiar el color a blanco (RGB: 255, 255, 255)
                borderWidth: 1, // Hacer la línea más gruesa (puedes ajustar el valor según tus preferencias)
            },
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

const ctz = document.getElementById("Grafica2").getContext("2d");

let labels_n_memory = [];
let data_n_memory   =   [];
let data_n2_memory=  [];
let data_n3_memory= [];
let data_n4_memory= [];

let Grafica2 = new Chart(ctz, {
	type: "line",
	data: {
		labels: labels_n_memory,
		datasets: [
			{
				label: "Memoria RAM",
				data: data_n_memory,
				backgroundColor: ["rgba(0, 128, 0, 1)"],
				borderColor: ["rgba(0, 128, 0, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2_memory,
				backgroundColor: ["rgba(0, 255, 0, 1)"],
				borderColor: ["rgba(0, 255, 0, 1)"],
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

const cty = document.getElementById("Grafica3").getContext("2d");

let labels_n_disco = [];
let data_n_disco   =   [];
let data_n2_disco=  [];
let data_n3_disco= [];
let data_n4_disco= [];

let Grafica3 = new Chart(cty, {
	type: "line",
	data: {
		labels: labels_n_disco,
		datasets: [
			{
				label: "Disco Duro",
				data: data_n_disco,
				backgroundColor: ["rgba(0, 0, 0, 1)"],
				borderColor: ["rgba(0, 0, 0, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2_disco,
				backgroundColor: ["rgba(105, 105, 105, 1)"],
				borderColor: ["rgba(105, 105, 105, 1)"],
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

    // Limitar a un máximo de 10 datos
    if (labels_n.length >= 10) {
        labels_n.shift(); // Eliminar el dato más antiguo
        data_n.shift();
        data_n2.shift();
    }

    // Datos recolectados del sensor
    labels_n.push(date);
    data_n.push(dataS);
    data_n2.push(40);
    chart.update();
}

function addData_Memory(chart, dataS) {

	let today = new Date();
    let date =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    // Limitar a un máximo de 10 datos
    if (labels_n_memory.length >= 10) {
        labels_n_memory.shift(); // Eliminar el dato más antiguo
        data_n_memory.shift();
        data_n2_memory.shift();
    }

    // Datos recolectados del sensor
    labels_n_memory.push(date);
    data_n_memory.push(dataS);
    data_n2_memory.push(40);
    chart.update();
}

function addData_Disco(chart, dataS) {

	let today = new Date();
    let date =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    // Limitar a un máximo de 10 datos
    if (labels_n_disco.length >= 10) {
        labels_n_disco.shift(); // Eliminar el dato más antiguo
        data_n_disco.shift();
        data_n2_disco.shift();
    }

    // Datos recolectados del sensor
    labels_n_disco.push(date);
    data_n_disco.push(dataS);
    data_n2_disco.push(40);
    chart.update();
}
