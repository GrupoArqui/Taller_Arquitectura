/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

var wsbroker = "192.168.0.3";  //mqtt websocket enabled broker
var wsbroker = "localhost";
var wsbroker = "broker.hivemq.com";
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

var primero = 1; // Add this variable to keep track if it's the first time receiving data

client.onMessageArrived = function (message) {
	var cont=2;
	var i=1;
	let destination = message.destinationName;
	if (destination === "grupo5") {
		let response = JSON.parse(message.payloadString);
		dataFormat = response;
		let dataCPU = dataFormat.CPU;
		let dataMemory = dataFormat.Memory;
		let dataDisco = dataFormat.Disco;
		let dataCapaMemory = dataFormat.CapacidadMemoriaRam;

		// Check if it's the first time receiving data (primero == 1)
			if (primero == 1) {
				var dataCPUElement = document.getElementById("dataCPUElement");
				dataCPUElement.textContent = "Valor de CPU: " + dataCPU.toFixed(2);
	
				const dataMemoryElement = document.getElementById("dataMemoryElement");
				dataMemoryElement.textContent = "Valor de Memoria: " + dataMemory.toFixed(2);
	
				const dataDiscoElement = document.getElementById("dataDiscoElement");
				dataDiscoElement.textContent = "Valor de Disco: " + dataDisco.toFixed(2);
				
				const dataCapaMemoryElement = document.getElementById("dataCapaMemoryElement");
				dataCapaMemoryElement.textContent = "Capacidad de Memoria: " + dataCapaMemory.toFixed(2);
			}
		  
		console.log(dataFormat);
		console.log(parseFloat(dataFormat.value));
		//Cargar datos CPU , Memoria y Almacenamiento
		addData(
			myChart,
			parseFloat(dataCPU),

		);

		addData_Memory(
			Grafica2,
			parseFloat(dataMemory),

		);


		addData_Disco(
			Grafica3,
			parseFloat(dataDisco),

	    );
	}
};

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multiple lines of these
		client.subscribe("grupo5", { qos: 1 });
	},
	onFailure: function (message) {
		console.log("Connection failed: " + message.errorMessage);
	},
};

function init() {
	client.connect(options);
}

function testMqtt(){
	console.log("hi");
}

function initMqtt() {
	client.connect(options);
}
