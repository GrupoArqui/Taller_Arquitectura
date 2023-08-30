/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

//var wsbroker = "192.168.0.3";  //mqtt websocket enabled broker
//var wsbroker = "localhost";
//var wsbroker = "0.tcp.sa.ngrok.io";
var wsbroker = "broker.hivemq.com";


//var wsport = 8083 // port for above
//var wsport = 14792; // port for above
var wsport = 1883; // port for above

var client = new Paho.MQTT.Client(
	wsbroker,
	Number(8000),
	"myclientid_" + parseInt(Math.random() * 100, 10)
);

client.onConnectionLost = function (responseObject) {
	console.log("connection lost: " + responseObject.errorMessage);
};

/*################################################################################################*/
/*####################################### LLEGA EL MENSAJE########################################*/
/*################################################################################################*/

function updateTemperature(temperature) {
	const mercury = document.getElementById('mercury');
	const temperatureDisplay = document.getElementById('temperature');
  
	// Limitar la temperatura entre 0°C y 100°C (ajusta esto según tus necesidades)
	temperature = Math.min(Math.max(temperature, 0), 100);
  
	const mercuryHeight = temperature + '%';
	mercury.style.height = mercuryHeight;
	temperatureDisplay.textContent = temperature + '°C';
  }

  function updateCPUUsage(usage) {
	const mercury = document.getElementById('mercury_cpu');
	const temperatureDisplay = document.getElementById('temperature_cpu');
  
	usage = Math.min(Math.max(usage, 0), 100);
  
	const mercuryHeight = usage + '%';
	mercury.style.height = mercuryHeight;
	temperatureDisplay.textContent = usage + '%';
  }
  
  function updateDiskUsage(usage) {
	const mercury = document.getElementById('mercury_disk');
	const temperatureDisplay = document.getElementById('temperature_disk');
  
	usage = Math.min(Math.max(usage, 0), 100);
  
	const mercuryHeight = usage + '%';
	mercury.style.height = mercuryHeight;
	temperatureDisplay.textContent = usage + '%';
  }
  
  function updateRAMUsage(usage) {
	const mercury = document.getElementById('mercury_ram');
	const temperatureDisplay = document.getElementById('temperature_ram');
  
	usage = Math.min(Math.max(usage, 0), 100);
  
	const mercuryHeight = usage + '%';
	mercury.style.height = mercuryHeight;
	temperatureDisplay.textContent = usage + '%';
  }

client.onMessageArrived = function (message) {
	let destination = message.destinationName;
	if (destination === "hivetopic") {
	  let response = JSON.parse(message.payloadString);
	  dataFormat = response;
	  let dataCPU = dataFormat.cpu;
	  let dataMemoria = dataFormat.memory;
	  let dataDisco = dataFormat.disk;
	  let dataTemperatura = dataFormat.temperature;
	  let dataRAM = dataFormat.ram;
	  let dataDTotal = dataFormat.dt;
	  let dataCores = dataFormat.cores;
	  let dataLatency= dataFormat.latency;
	  let dataOs= dataFormat.os;
	  let dataFrec= dataFormat.cpu_frequency;
	  console.log(dataFormat);
	  console.log(parseFloat(dataFormat.value));
		
	  //Cargar datos CPU, Memoria y Almacenamiento
	  addData(myChart, parseFloat(dataCPU));
	  addData_disk(myChart2, parseFloat(dataDisco));
	  addData_memory(myChart3, parseFloat(dataMemoria));
	  //addData_temperature(myChart4, parseFloat(dataTemperatura));
  
	  // Actualizar el valor con id
	  updateTemperature(parseFloat(dataTemperatura));
	  updateCPUUsage(parseFloat(dataCPU));
  	  updateDiskUsage(parseFloat(dataDisco));
  	  updateRAMUsage(parseFloat(dataMemoria));
	  document.getElementById("ramUsageValue").textContent = dataMemoria + "%";
	  document.getElementById("cpuUsageValue").textContent = dataCPU + "%";
	  document.getElementById("diskUsageValue").textContent = dataDisco + "%";
	  document.getElementById("temperatureUsageValue").textContent = dataTemperatura + "°C";
	  document.getElementById("ramTotalValue").textContent = dataRAM + "GB";
	  document.getElementById("dtTotalValue").textContent = dataDTotal + "GB";
	  document.getElementById("coresTotalValue").textContent = dataCores + " CPU CORES";
	  document.getElementById("LatencyTotalValue").textContent = dataLatency + " Latency";
	  document.getElementById("OSTotalValue").textContent = dataOs + " OS";
	  document.getElementById("FrecValue").textContent= dataFrec+ "GHz";
	
	
	}
  };
  

  
var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("hivetopic", { qos: 1 });
	},
	onFailure: function (message) {
		console.log("Connection failed: " + message.errorMessage);
	},
};


function testMqtt(){
	console.log("hi");
}
function initMqtt() {
	client.connect(options);
}
