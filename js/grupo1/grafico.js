
const ctx = document.getElementById("myChartCPU").getContext("2d");
let labels_n = [];
let data_n = [];
let myChartCPU = new Chart(ctx, {
	type: "line",
	data: {
	  labels: labels_n,
	  datasets: [{
		label: "CPU",
		data: data_n,
		backgroundColor: "rgba(139, 0, 0, 0.2)",
		borderColor: "rgb(139, 0, 0)",
		borderWidth: 1,
	  }],
	},
	options: {
	  scales: {
		y: {
		  beginAtZero: true,
		  grid: {
			drawBorder: false,
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

  function addData(chart, dataS) {
	let today = new Date();
	let date =
	  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
	// Limit the number of data points to 6
	if (chart.data.labels.length >= 6) {
	  chart.data.labels.shift();
	  chart.data.datasets[0].data.shift();
	}
  
	// Add new data point
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(dataS);
	chart.update();
  }
const ctx2 = document.getElementById("myChartMemory").getContext("2d");
let labels_n2 = [];
let data_n3 = [];
let myChartMemory = new Chart(ctx2, {
	type: "line",
	data: {
	  labels: labels_n2,
	  datasets: [{
		label: "Memoria",
		data: data_n3,
		backgroundColor: "rgba(0, 0, 0, 0.2)",
		borderColor: "rgb(0, 0, 0)",
		borderWidth: 1,
	  }],
	},
	options: {
	  scales: {
		y: {
		  beginAtZero: true,
		  grid: {
			drawBorder: false,
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
  function addData2(chart, data1) {
	let today = new Date();
	let date =
	  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
	// Limit the number of data points to 6
	if (chart.data.labels.length >= 6) {
	  chart.data.labels.shift();
	  chart.data.datasets[0].data.shift();
	}
  
	// Add new data point
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(data1);
	chart.update();
  }
  
const ctx3 = document.getElementById("myChartDisk").getContext("2d");
let labels_n3 = [];
let data_n5 = [];
let myChartDisk = new Chart(ctx3, {
	type: "line",
	data: {
	  labels: labels_n3,
	  datasets: [{
		label: "Disco",
		data: data_n5,
		backgroundColor: "rgba(153, 102, 255, 0.2)",
		borderColor: "rgb(153, 102, 255)",
		borderWidth: 1,
	  }],
	},
	options: {
	  scales: {
		y: {
		  beginAtZero: true,
		  grid: {
			drawBorder: false,
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

  function addData3(chart, data1, data2) {
	let today = new Date();
	let date =
	  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
	// Limit the number of data points to 6
	if (chart.data.labels.length >= 6) {
	  chart.data.labels.shift();
	  chart.data.datasets[0].data.shift();
	}
  
	// Add new data point
	chart.data.labels.push(date);
	chart.data.datasets[0].data.push(data1);
	chart.update();
	
  }