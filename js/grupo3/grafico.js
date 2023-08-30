/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/
/** 
const ctx20 = document.getElementById("chart-bars").getContext("2d");
let labels_n = [];
let data_n = [];
let data_n2 = [];
let data_n3 = [];
let data_n4 = [];
let myChart = new Chart(ctx20, {
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

const ctx21=document.getElementById("chart-line").getContext("2d");
let labels_n_MEMORY = [];
let data_n_MEMORYRY = [];
let data_n2_MEMORRY= [];
let data_n3_MEMORRY= [];
let data_n4_MEMORRY= [];


let mychartMemory = new Chart(ctx21, {
    type: "line",
    data: {
        labels: labels_n_MEMORY,
        datasets: [
            {
                label: "RAM",
                data: data_n_MEMORYRY,
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
            },
            {
                label: "Base line",
                data: data_n2_MEMORRY,
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

const ctx22=document.getElementById("chart-line-tasks").getContext("2d");
let labels_n_disco = [];
let data_n_disco  = [];
let data_n2_disco = [];
let data_n3_disco = [];
let data_n4_disco = [];


let myChartDisco = new Chart(ctx22, {
    type: "line",
    data: {
        labels: labels_n_disco,
        datasets: [
            {
                label: "Disco",
                data: data_n_disco,
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
            },
            {
                label: "Base line",
                data: data_n2_disco,
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

function addData_disco(chart, dataS) {
    let today = new Date();
    let date =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // Datos recolectados del sensor
    chart.data.labels.push(date);
    chart.data.datasets[0].data.push(dataS);
    chart.data.datasets[1].data.push(40);
    chart.update();
}

*/
/*################################################################################################*/
/*####################################### DESPLIEGUE DEL GRAFICO #################################*/
/*################################################################################################*/

var ctx = document.getElementById("chart-bars").getContext("2d");
let labels_n = [];
let data_n = [];
let ChartCPU=new Chart(ctx, {
  type: "line",
  data: {
    labels: labels_n,
    datasets: [{
      label: "Sales",
      tension: 0.4,
      borderWidth: 0,
      borderRadius: 4,
      borderSkipped: false,
      backgroundColor: "rgba(255, 255, 255, .8)",
      data: data_n,
      maxBarThickness: 6
    }, ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 500,
          beginAtZero: true,
          padding: 10,
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
          color: "#fff"
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
          display: true,
          color: '#f8f9fa',
          padding: 10,
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  },
});

function addDataCPU(chart, dataS) {

let today = new Date();
let date =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// Datos recolectados del sensor
chart.data.labels.push(date);
chart.data.datasets[0].data.push(dataS);
chart.update();
}

var ctx2 = document.getElementById("chart-line").getContext("2d");
let labels_n2 = [];
let data_n2 = [];
let ChartRAM=new Chart(ctx2, {
  type: "line",
  data: {
    labels: labels_n2,
    datasets: [{
      label: "RAM",
      tension: 0,
      borderWidth: 0,
      pointRadius: 5,
      pointBackgroundColor: "rgba(255, 255, 255, .8)",
      pointBorderColor: "transparent",
      borderColor: "rgba(255, 255, 255, .8)",
      borderColor: "rgba(255, 255, 255, .8)",
      borderWidth: 4,
      backgroundColor: "transparent",
      fill: true,
      data: data_n2,
      maxBarThickness: 6

    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
          display: true,
          color: '#f8f9fa',
          padding: 10,
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          color: '#f8f9fa',
          padding: 10,
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  },
});
function addDataRAM(chart, dataS) {

let today = new Date();
let date =
today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// Datos recolectados del sensor
chart.data.labels.push(date);
chart.data.datasets[0].data.push(dataS);
chart.update();
}

var ctx3 = document.getElementById("chart-line-tasks").getContext("2d");
let labels_n3 = [];
let data_n3 = [];
let ChartDISCO=new Chart(ctx3, {
  type: "line",
  data: {
    labels: labels_n3,
    datasets: [{
      label: "Mobile apps",
      tension: 0,
      borderWidth: 0,
      pointRadius: 5,
      pointBackgroundColor: "rgba(255, 255, 255, .8)",
      pointBorderColor: "transparent",
      borderColor: "rgba(255, 255, 255, .8)",
      borderWidth: 4,
      backgroundColor: "transparent",
      fill: true,
      data: data_n3,
      maxBarThickness: 6

    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
          color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
          display: true,
          padding: 10,
          color: '#f8f9fa',
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5]
        },
        ticks: {
          display: true,
          color: '#f8f9fa',
          padding: 10,
          font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
          },
        }
      },
    },
  },
});
function addDataDISCO(chart, dataS) {

let today = new Date();
let date =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// Datos recolectados del sensor
chart.data.labels.push(date);
chart.data.datasets[0].data.push(dataS);
chart.update();
}

function updateCPU(valor){
    const cteCPU=document.getElementById("CPU-value");
    cteCPU.textContent=valor ;
}

function updateRAM(VALOR){
    const constRam=document.getElementById("RAM-value");
    constRam.textContent=VALOR
}

function updateDISCO(VALOR){
    const constDisco=document.getElementById("DISCO-value");
    constDisco.textContent=VALOR
}
function updateRED(VALOR){
    const constRED=document.getElementById("RED-value");
    constRED.textContent=VALOR
}
function updateOS(VALOR){
    const constOS=document.getElementById("SistemaOperativo");
    constOS.textContent=VALOR
}
function updateVersion(VALOR){
    const constVersion=document.getElementById("Version");
    constVersion.textContent=VALOR
}
function updateArquitectura(VALOR){
    const constArquitectura=document.getElementById("Arquitectura");
    constArquitectura.textContent=VALOR
}
function updateRAM2(VALOR){
    const constRam2=document.getElementById("RAM");
    constRam2.textContent=VALOR
}
function updateAlmacenamiento(VALOR){
    const constAlmacenamiento=document.getElementById("Almacenamiento");
    constAlmacenamiento.textContent=VALOR
}
function updateProcesador(VALOR){
    const constProcesador=document.getElementById("Procesador");
    constProcesador.textContent=VALOR
}
