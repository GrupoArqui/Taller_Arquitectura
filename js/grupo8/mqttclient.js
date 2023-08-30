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
	if (destination === "grupo8") {
		let response = JSON.parse(message.payloadString);
		dataFormat = response;
		let dataLatitud = dataFormat.Latitud;
        let dataLongitud = dataFormat.Longitud;
		let dataCPU = dataFormat.CPU;
		let dataMemory = dataFormat.Memory;
		let dataDisco = dataFormat.Disco;
		let dataCapaMemory = dataFormat.CapacidadMemoriaRam;
		let dataCapaSisOpetartivo = dataFormat.SistemaOperativo;
		let dataProcesador = dataFormat.Procesador;
		let dataMemoriaT = dataFormat.MemoriaT;
		let dataRam = dataFormat.Ram;
		let dataBateria = dataFormat.Bateria;
		let dataDiscoInf = dataFormat.DiscoInf;
		let datalatitud = dataFormat.latitud;
		let datalongitud = dataFormat.longitud;

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

				const dataSisOpetartivoElement = document.getElementById("dataCapaSisOpetartivoElement");
				dataSisOpetartivoElement.textContent =  dataCapaSisOpetartivo;

				const dataProcesadorElement = document.getElementById("dataProcesadorElement");
				dataProcesadorElement.textContent =  dataProcesador;

				const dataMemoriaTElement = document.getElementById("dataMemoriaTElement");
				dataMemoriaTElement.textContent = "Valor de Memoria: " + dataMemoriaT

				const dataRamElement = document.getElementById("dataRamElement");
				dataRamElement.textContent = dataRam;

				const dataBateriaElement = document.getElementById("dataBateriaElement");
				dataBateriaElement.textContent = dataBateria;

				const dataDiscoInfElement = document.getElementById("dataDiscoInfaElement");
				dataDiscoInfElement.textContent = dataDiscoInf;
			}
		
			if (datalatitud && datalongitud) {
				// Obtén el elemento iframe
				var mapIframe = document.getElementById("mapIframe");
				
				// Crea la URL con las coordenadas actualizadas
				var newUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d785.9799858102821!2d${datalongitud}!3d${datalatitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1693171313621!5m2!1ses-419!2sec`;
				
				// Actualiza el atributo src del iframe
				mapIframe.setAttribute("src", newUrl);
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
		client.subscribe("grupo8", { qos: 1 });
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
