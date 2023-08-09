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



client.onMessageArrived = function (message) {
	let destination = message.destinationName;
	if (destination === "prueba2") {
		let response = JSON.parse(message.payloadString);
		dataFormat = response;
		let dataCPU = dataFormat.cpu;
		let dataMemoria = dataFormat.memory;
		let dataDisco = dataFormat.disk;
		let dataTemperature = dataFormat.temperature;
		let dataSystem = dataFormat.system;
		let dataTotalMemory = dataFormat.total_memory;
		let dataTotalStorage = dataFormat.total_storage;
		console.log(dataFormat);
		console.log(parseFloat(dataFormat.value));

		//Cargar datos CPU , Memoria y Almacenamiento
		addData(
			myChart,
			parseFloat(dataCPU),
		);

		addData_memory(
			myChart2,
			parseFloat(dataMemoria),
		);

		addData_almacenamiento(
			myChart3,
			parseFloat(dataDisco),
		);
		addData_temperature(
			dataTemperature,
		);
		addData_system(
			dataSystem,
		);
		
		addData_total_memory(
			parseFloat(dataTotalMemory),
		);
		addData_total_storage(
			parseFloat(dataTotalStorage),
		);
		
	}
};

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("prueba2", { qos: 1 });
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
