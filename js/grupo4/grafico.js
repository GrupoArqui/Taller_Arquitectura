/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/

/* Esto es para el rendimiento del pc */
const G4cpu = document.getElementById("CPU").getContext("2d");
let labels_n = [];
let data_n = [];
let data_n2 = [];
let data_n3 = [];
let data_n4 = [];
let CPU = new Chart(G4cpu, {
	type: "line",
	data: {
		labels: labels_n,
		datasets: [
			{
				label: "CPU",
				data: data_n,
				backgroundColor: ["rgba(255,255,1)"],
				borderColor: ["(255, 255, 255, .2)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2,
				backgroundColor: ["rgba(138,221,45,1)"],
				borderColor: ["rgba(0, 0, 255,1)"],
				borderWidth: 1,
			}
		],
	},
	options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "black", 
                }
            },
            x: {
                ticks: {
                    color: "black", 
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "black" 
                }
            }
        }
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


/* Esto es para el almacenamiento del PC */
const G4meno = document.getElementById("Almacen").getContext("2d");
let labels_na = [];
let data_na = [];
let data_n2a = [];
let data_n3a = [];
let data_n4a = [];
let Almacen = new Chart(G4meno, {
	type: "line",
	data: {
		labels: labels_na,
		datasets: [
			{
				label: "Almacenamiento",
				data: data_na,
				backgroundColor: ["rgba(255, 255, 255, .8)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2a,
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
                ticks: {
                    color: "black", 
                }
            },
            x: {
                ticks: {
                    color: "black", 
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "black" 
                }
            }
        }
    },
});

function addDataAlmc(chart2, dataS2) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart2.data.labels.push(date);
	chart2.data.datasets[0].data.push(dataS2);
	chart2.data.datasets[1].data.push(40);
	chart2.update();
}

/* Esto es para la temperatura del PC */
const G4temp = document.getElementById("Tempera").getContext("2d");
let labels_nb = [];
let data_nb = [];
let data_n2b = [];
let data_n3b = [];
let data_n4b = [];
let Tempera = new Chart(G4temp, {
    type: "line",
    data: {
        labels: labels_nb,
        datasets: [
            {
                label: "Uso de CD",
                data: data_nb,
                backgroundColor: ["rgba(255, 255, 255, .8)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
            },
            {
                label: "Base Line",
                data: data_n2b,
                backgroundColor: ["rgba(0, 0, 255, 0.2)"],
                borderColor: ["rgba(255, 255, 255, .8)"],
                borderWidth: 1,
            }
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "white", 
                }
            },
            x: {
                ticks: {
                    color: "white", 
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: "white" 
                }
            }
        }
    },
});



function addDataTemp(chart3, dataS3) {

	let today = new Date();
	let date =
		today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// Datos recolectados del sensor
	chart3.data.labels.push(date);
	chart3.data.datasets[0].data.push(dataS3);
	chart3.data.datasets[1].data.push(40);
	chart3.update();
}