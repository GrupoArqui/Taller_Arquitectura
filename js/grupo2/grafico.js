/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/

const ctx1 = document.getElementById("myChartCPU").getContext("2d");
let labels_nCPU = [];
let data_n1CPU = [];
let data_n2CPU = [];

let myChartCPU = new Chart(ctx1, {
	type: "line",
	data: {
		labels: labels_nCPU,
		datasets: [
			{
				label: "CPU",
				data: data_n1CPU,
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2CPU,
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

const ctx2 = document.getElementById("myChartMemory").getContext("2d");
let labels_nMemory = [];
let data_n1Memory = [];
let data_n2Memory = [];

let myChartMemory = new Chart(ctx2, {
	type: "line",
	data: {
		labels: labels_nMemory,
		datasets: [
			{
				label: "MEMORIA",
				data: data_n1Memory,
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2Memory,
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

const ctx3 = document.getElementById("myChartDisk").getContext("2d");
let labels_nDisk = [];
let data_n1Disk = [];
let data_n2Disk = [];

let myChartDisk = new Chart(ctx3, {
	type: "line",
	data: {
		labels: labels_nDisk,
		datasets: [
			{
				label: "DISCO DURO",
				data: data_n1Disk,
				backgroundColor: ["rgba(255, 99, 132, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)"],
				borderWidth: 1,
			},
			{
				label: "Base Line",
				data: data_n2Disk,
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