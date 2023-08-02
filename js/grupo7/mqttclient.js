/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/


//var wsbroker = "0.tcp.sa.ngrok.io";
var wsbroker = "broker.hivemq.com";

//var wsport = 14792; // port for above
var wsport = 1883; // port for above
var client = new Paho.MQTT.Client(
	wsbroker,
	//Number(wsport),
	Number(8000),
	"myclientid_" + parseInt(Math.random() * 100, 10)
);

client.onConnectionLost = function (responseObject) {
	console.log("connection lost: " + responseObject.errorMessage);
};

/*################################################################################################*/
/*####################################### LLEGA EL MENSAJE########################################*/
/*################################################################################################*/
let prevCPUValue = 0;
let prevMemoryValue = 0;
let prevDiskValue = 0;



client.onMessageArrived = function (message) {
	let destination = message.destinationName;
	if (destination === "arqui1") {
        let response = JSON.parse(message.payloadString);
        dataFormat = response;
        let dataCPU = dataFormat.CPU;
        let dataMemoria = dataFormat.Memoria;
        let dataDisco = dataFormat.Disco;
        

        // Calcular la diferencia con respecto al valor anterior
        let diffCPU = dataCPU - prevCPUValue;
        let diffMemory = dataMemoria - prevMemoryValue;
        let diffDisk = dataDisco - prevDiskValue;

        // Calcular el porcentaje de cambio
        let percentageCPU = calculatePercentage(diffCPU, prevCPUValue);
        let percentageMemory = calculatePercentage(diffMemory, prevMemoryValue);
        let percentageDisk = calculatePercentage(diffDisk, prevDiskValue);

        // Actualizar los valores en tiempo real en la página
        document.getElementById("cpuValue").innerText = dataCPU +"GHz";
        document.getElementById("memoryValue").innerText = dataMemoria + "GB";
        document.getElementById("diskValue").innerText = dataDisco +"%";

        // Actualizar los porcentajes en la página
        document.getElementById("cpuPercentage").innerText = percentageCPU + "GHz";
        document.getElementById("memoryPercentage").innerText = percentageMemory + "GB";
        document.getElementById("diskPercentage").innerText = percentageDisk + "%";

        // Actualizar los valores anteriores con los nuevos valores
        prevCPUValue = dataCPU;
        prevMemoryValue = dataMemoria;
        prevDiskValue = dataDisco;

        // Cargar datos CPU, Memoria y Almacenamiento en las gráficas
        addData(myChartCPU, dataCPU);
        addData2(myChartMemory, dataMemoria);
        addData3(myChartDisk, dataDisco);


    }
};

// Función para calcular el porcentaje de cambio
function calculatePercentage(diff, prevValue) {
    if (prevValue === 0) {
        return "0"; // Si el valor anterior es cero, el porcentaje de cambio es cero
    }

    let percentage = ((diff / prevValue) * 100).toFixed(2);
    if (isFinite(percentage)) {
        return percentage >= 0 ? "+" + percentage : percentage;
    } else {
        return "0";
    }
}

var options = {
	timeout: 3,
	onSuccess: function () {
		console.log("mqtt connected");
		// Connection succeeded; subscribe to our topic, you can add multile lines of these
		client.subscribe("arqui1", { qos: 1 });
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
