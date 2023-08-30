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
	//Number(wsport),
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
	if (destination === "gabito") {
		let response = JSON.parse(message.payloadString);
		dataFormat = response;

		let dataCPU = dataFormat.CPU;
		let dataMemory = dataFormat.Memory;
		let dataDisk = dataFormat.Disk;
		let dataCache = dataFormat.Cache;

		let datasOperativo = dataFormat.sOperativo;
		let dataArquitectura = dataFormat.Arquitectura;
		let dataRam = dataFormat.Ram;
        let dataDiskInfo = dataFormat.DiskInfo;
        let dataProcessor = dataFormat.Processor;

		//Cargar datos CPU , Memoria y Almacenamiento
		addData(myChartCPU, parseFloat(dataCPU));
        addData(myChartMemory, parseFloat(dataMemory));
		addData(myChartDisk, parseFloat(dataDisk));

		//Envio de valores estáticos.
		let dateCPU = dataCPU + '%';
		document.getElementById('cpuValue').innerText = dateCPU;

		let dateMemory = dataMemory.toLocaleString() + ' %';
		document.getElementById('memoryValue').innerText = dateMemory;

		let dateDisk = dataDisk.toLocaleString() + ' GB';
		document.getElementById('diskValue').innerText = dateDisk;

		let dateCache = dataCache.toLocaleString() + ' %';
		document.getElementById('cacheValue').innerText = dateCache;


		let datesOperativo = datasOperativo.toLocaleString();
		document.getElementById('operativoValue').innerText = datesOperativo;

        let dateArquitectura = dataArquitectura.toLocaleString();
		document.getElementById('arquitecturaValue').innerText = dateArquitectura;

		let dateRam = dataRam.toLocaleString();
		document.getElementById('ramValue').innerText = dateRam;

		let dateDiskInfo = dataDiskInfo.toLocaleString();
		document.getElementById('diskInfoValue').innerText = dateDiskInfo;

		let dateProcessor = dataProcessor.toLocaleString();
		document.getElementById('processorValue').innerText = dateProcessor;
	}

	if (destination === "gabito1") {
		let response = JSON.parse(message.payloadString);
		dataFormat = response;

		let dataCPU1 = dataFormat.CPU;
		let dataMemory1 = dataFormat.Memory;
		let dataDisk1 = dataFormat.Disk;
		let dataCache1 = dataFormat.Cache;

		let datasOperativo1 = dataFormat.sOperativo;
		let dataArquitectura1 = dataFormat.Arquitectura;
		let dataRam1 = dataFormat.Ram;
        let dataDiskInfo1 = dataFormat.DiskInfo;
        let dataProcessor1 = dataFormat.Processor;

		//Cargar datos CPU , Memoria y Almacenamiento
		addData(myChartCPU1, parseFloat(dataCPU1));
        addData(myChartMemory1, parseFloat(dataMemory1));
		addData(myChartDisk1, parseFloat(dataDisk1));

		//Envio de valores estáticos.
		let dateCPU1 = dataCPU1 + '%';
		document.getElementById('cpuValue1').innerText = dateCPU1;

		let dateMemory1 = dataMemory1.toLocaleString() + ' %';
		document.getElementById('memoryValue1').innerText = dateMemory1;

		let dateDisk1 = dataDisk1.toLocaleString() + ' GB';
		document.getElementById('diskValue1').innerText = dateDisk1;

		let dateCache1 = dataCache1.toLocaleString() + ' %';
		document.getElementById('cacheValue1').innerText = dateCache1;


		let datesOperativo1 = datasOperativo1.toLocaleString();
		document.getElementById('operativoValue1').innerText = datesOperativo1;

        let dateArquitectura1 = dataArquitectura1.toLocaleString();
		document.getElementById('arquitecturaValue1').innerText = dateArquitectura1;

		let dateRam1 = dataRam1.toLocaleString();
		document.getElementById('ramValue1').innerText = dateRam1;

		let dateDiskInfo1 = dataDiskInfo1.toLocaleString();
		document.getElementById('diskInfoValue1').innerText = dateDiskInfo1;

		let dateProcessor1 = dataProcessor1.toLocaleString();
		document.getElementById('processorValue1').innerText = dateProcessor1;
	}
};

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("gabito", { qos: 1 });
		client.subscribe("gabito1", { qos: 2 });
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

