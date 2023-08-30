/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

//var wsbroker = "192.168.0.3";  //mqtt websocket enabled broker
var wsbroker = "broker.hivemq.com";
//var wsbroker = "localhost";
//var wsbroker = "0.tcp.sa.ngrok.io";


var wsport = 1883; // port for above
//var wsport = 8083 // port foorr above
//var wsport = 14792; // port for above
var client = new Paho.MQTT.Client(
	wsbroker,
	//Number(wsport)
	Number(8000),
	"myclientid_" + parseInt(Math.random() * 100, 10)
);

client.onConnectionLost = function (responseObject) {
	console.log("connection lost: " + responseObject.errorMessage);
};

/*################################################################################################*/
/*####################################### LLEGA EL MENSAJE########################################*/
/*################################################################################################*/

let primero = 1;
client.onMessageArrived = function (message) {
	let destination = message.destinationName;
	if (destination === "merequetengue") {
		let response = JSON.parse(message.payloadString);
		dataFormat = response;
		let dataCPU = dataFormat.CPU;
		console.log(dataFormat);
		let dataMemory = dataFormat.Memory;
		let dataDisco = dataFormat.Disco;
		let dataVelocidadD = dataFormat.Descarga;
		let dataVelocidadS = dataFormat.Subida;
		let dataTemperaturas = dataFormat.Temperatura;
		let A = dataFormat.a;
		let B = dataFormat.b;
		let C = dataFormat.c;
		let D = dataFormat.d;
		let E = dataFormat.e;
		console.log(dataFormat);
		console.log(parseFloat(dataFormat.value));


		const dataCPUElement = document.getElementById("dataCPUElement");
		dataCPUElement.textContent = "Valor de CPU: " + dataCPU.toFixed(2) + "%";

		const dataMemoryElement = document.getElementById("dataMemoryElement");
		dataMemoryElement.textContent = "Valor de uso de Memoria: " + dataMemory.toFixed(2) + "%";

		const dataDiscoElement = document.getElementById("dataDiscoElement");
		dataDiscoElement.textContent = "Valor Usado de Disco: " + dataDisco.toFixed(2) + " GB";

		const dataVelocidadDercarga = document.getElementById("dataVelocidadDescarga");
		dataVelocidadDercarga.textContent = "Bajada: " + dataVelocidadD.toFixed(2) + " MB";

		const dataVelocidadSubida = document.getElementById("dataVelocidadSubida");
		dataVelocidadSubida.textContent = "Subida: " + dataVelocidadS.toFixed(2) + " MB";

		const dataTemperatura = document.getElementById("dataTemperatura");
		dataTemperatura.textContent = "temperatura: " + dataTemperaturas + " °C";

		const dataInfoA = document.getElementById("dataInfoA");
		dataInfoA.textContent = A;

		const dataInfoB = document.getElementById("dataInfoB");
		dataInfoB.textContent = B;

		const dataInfoC = document.getElementById("dataInfoC");
		dataInfoC.textContent = C;

		const dataInfoD = document.getElementById("dataInfoD");
		dataInfoD.textContent = D;

		const dataInfoE = document.getElementById("dataInfoE");
		dataInfoE.textContent = E;


		//Cargar datos CPU , Memoria y Almacenamiento
		addData(
			chart_bars,
			parseFloat(dataCPU),

		);

		addData_Memory(
			chart_line,
			parseFloat(dataMemory),

		);

		addData_Disco(
			chart_line_tasks,
			parseFloat(dataDisco),

		);
	}
};

function enviarMensajeMQTT(mensajeJSON) {
	let messageObj = new Paho.MQTT.Message(mensajeJSON);
	messageObj.destinationName = "merequetengue2"; // Cambia al topic correcto
	client.send(messageObj);
}

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("merequetengue", { qos: 1 });
	},
	onFailure: function (message) {
		console.log("Connection failed: " + message.errorMessage);
	},
};


function testMqtt() {
	console.log("hi");
}
function initMqtt() {
	client.connect(options);
}
