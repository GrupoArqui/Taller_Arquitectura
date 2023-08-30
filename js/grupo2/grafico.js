/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/

//pc#1
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

// pc#2

const ctx4 = document.getElementById("myChartCPU1").getContext("2d");
let labels_nCPU1 = [];
let data_n1CPU1 = [];
let data_n2CPU1 = [];

let myChartCPU1 = new Chart(ctx4, {
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

const ctx5 = document.getElementById("myChartMemory1").getContext("2d");
let labels_nMemory1 = [];
let data_n1Memory1 = [];
let data_n2Memory1 = [];

let myChartMemory1 = new Chart(ctx5, {
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

const ctx6 = document.getElementById("myChartDisk1").getContext("2d");
let labels_nDisk1 = [];
let data_n1Disk1 = [];
let data_n2Disk1 = [];

let myChartDisk1 = new Chart(ctx6, {
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