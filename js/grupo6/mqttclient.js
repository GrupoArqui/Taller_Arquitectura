/*################################################################################################*/
/*####################################### CLIENTE MQTT ###########################################*/
/*################################################################################################*/

//var wsbroker = "192.168.0.3";  //mqtt websocket enabled broker
//var wsbroker = "localhost";
var wsbroker = "broker.hivemq.com";

//var wsport = 8083 // port for above
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
  if (destination === "grupo6_arquitectura") {
    let response = JSON.parse(message.payloadString);
    dataFormat = response;

    let sistema = dataFormat.Sistema;
    let cpu_info = dataFormat.Cpu_info;
    let ram_info = dataFormat.Ram_info;
    let disco_espacio = dataFormat.Disco_espacio;
    let tipo_sistema = dataFormat.Tipo_sistema;

    const sistemaElement = document.getElementById("sistemaElement");
    sistemaElement.textContent = sistema;

    const cpu_infoElement = document.getElementById("cpu_infoElement");
    cpu_infoElement.textContent = cpu_info;

    const ram_infoElement = document.getElementById("ram_infoElement");
    ram_infoElement.textContent = ram_info;

    const disco_espacioElement = document.getElementById(
      "disco_espacioElement"
    );
    disco_espacioElement.textContent = disco_espacio;

    const tipo_sistemaElement = document.getElementById("tipo_sistemaElement");
    tipo_sistemaElement.textContent = tipo_sistema;

    /*#PRIMER COMENTARIO##*/

    let dataCPU = dataFormat.CPU;
    let dataMemoria = dataFormat.Memoria;
    let dataDisk = dataFormat.Disco;
    console.log(dataFormat);
    console.log(parseFloat(dataFormat.value));

    const dataCPUelement = document.getElementById("dataCPUelement");
    dataCPUelement.textContent = dataCPU.toFixed(2) + "%";

    const dataRAMelement = document.getElementById("dataRAMelement");
    dataRAMelement.textContent = dataMemoria.toFixed(2) + "%";

    const dataDISKelement = document.getElementById("dataDISKelement");
    dataDISKelement.textContent = dataDisk.toFixed(2) + "%";

    addData(myChart, parseFloat(dataCPU));
    addData(myChartMemory, parseFloat(dataMemoria));
    addData(myChartDisk, parseFloat(dataDisk));

    /*Verificar uso de memoria ram y lanzar alerta*/
    const valorAlertaRam = 60;

    if (parseFloat(dataMemoria.toFixed(2)) > valorAlertaRam) {
      alert("¡Alerta! Uso alto de memoria RAM.");
    }
  }
};

var options = {
  timeout: 3,
  onSuccess: function () {
    console.log("mqtt connected");
    // Connection succeeded; subscribe to our topic, you can add multile lines of these
    client.subscribe("grupo6_arquitectura", { qos: 1 });
  },
  onFailure: function (message) {
    console.log("Connection failed: " + message.errorMessage);
  },
};

function initMqtt() {
  client.connect(options);
}
