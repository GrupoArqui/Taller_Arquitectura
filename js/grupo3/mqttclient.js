/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

//var wsbroker = "192.168.0.3";  //mqtt websocket enabled broker
//var wsbroker = "localhost";
var wsbroker = "broker.hivemq.com";


var wsport = 1883 // port for above
//var wsport = 14792; // port for above
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
	if (destination === "/test2023") {
		let response = JSON.parse(message.payloadString);
		dataFormat = response;
		let dataCPU = dataFormat.CPU;
		let dataMemoria = dataFormat.Memoria;
		let dataDisco = dataFormat.Disco;
        let dataRed=dataFormat.RED;
		console.log(dataCPU);
		console.log(dataDisco);
		console.log(dataMemoria);
		//console.log(parseFloat(dataFormat.value));

		//Cargar datos CPU , Memoria y Almacenamiento
	    		//Cargar datos CPU , Memoria y Almacenamiento
		/*addDataCPU(
			ChartCPU,
			parseFloat(dataCPU),
		);

		addDataRAM(
         ChartRAM,
		 parseFloat(dataMemoria)
			
		)

		addDataDISCO(
			ChartDISCO,
			parseFloat(dataDisco.toExponential(2))

		);
		updateCPU(dataCPU)
		updateDISCO(dataDisco)
		updateRAM(dataMemoria)
		updateRED(dataRed.toExponential(2))*/
		if (typeof dataDisco !== "undefined") {
			// Cargar datos CPU, Memoria y Almacenamiento
			addDataCPU(ChartCPU, parseFloat(dataCPU));
			addDataRAM(ChartRAM, parseFloat(dataMemoria));
			addDataDISCO(ChartDISCO, parseFloat(dataDisco).toExponential(2));
			updateCPU(dataCPU);
			updateDISCO(dataDisco.toExponential(2));
			updateRAM(dataMemoria);
			updateRED(dataRed.toExponential(2));
		} else {
			console.log("dataDisco no está definido o no tiene un valor válido.");
		}
        
	}
};

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("/test2023", { qos: 1 });
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