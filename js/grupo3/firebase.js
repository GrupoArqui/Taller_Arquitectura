/*################################################################################################*/
/*####################################### DATA TABLE Y FIREBASE ##################################*/
/*################################################################################################*/

$(document).ready(function () {
    const config = {
        apiKey: "AIzaSyCKE8G95SI6GUPMOLltxMXePSifVGAebos",
        authDomain: "arquitectura--grupo-3.firebaseapp.com",
        databaseURL: "https://arquitectura--grupo-3-default-rtdb.firebaseio.com",
        projectId: "arquitectura--grupo-3",
        storageBucket: "arquitectura--grupo-3.appspot.com",
        messagingSenderId: "637437041091",
        appId: "1:637437041091:web:c878a9cd799bcf94e60576",
    };
    firebase.initializeApp(config); //inicializamos firebase
    var db = firebase.database();
    var coleccionProductos = db.ref().child("Estadisticas_CPU");
    var dataSet = []; //array para guardar los valores de los campos inputs del form
    var table = $("#tablaProductos").DataTable({
        pageLength: 5,
        lengthMenu: [
            [5, 10, 20, -1],
            [5, 10, 20, "Todos"],
        ],
        data: dataSet,
        columnDefs: [
            {
                targets: [0],
                visible: false, //ocultamos la columna de ID que es la [0]
            },
        ],
    });

    coleccionProductos.on("child_added", (datos) => {
        $("#tablaProductos").delay("slow").fadeIn();
        dataSet = [
            datos.key,
            datos.child("fecha").val(),
            datos.child("hora").val(),
            datos.child("CPU").val(),
            datos.child("Memoria").val(),
            datos.child("Disco").val(),
            datos.child("RED").val(),
        ];
        table.rows.add([dataSet]).draw();
    });
    // Función para exportar a PDF
    $("#exportPDF").on("click", function () {
        var doc = new jsPDF();
        doc.autoTable({
            head: [["Fecha", "Hora", "CPU", "Memoria", "Disco", "RED"]],
            body: getTableData(),
        });
        doc.save("tabla.pdf");
    });

    //Funcion para exportar en Excel
    $("#exportExcel").on("click", function () {
        var wb = XLSX.utils.book_new(); // Crear un libro de trabajo vacío
        var wsData = [ // Datos para la hoja de trabajo
            ["Fecha", "Hora", "CPU", "Memoria", "Disco", "RED"], // Encabezado
        ];
    
        // Llamada a la función getTableData() para obtener los datos de la tabla
        var tableData = getTableData(); // Asumiendo que existe la función getTableData()
    
        // Agregar los datos de la tabla al arreglo wsData
        wsData = wsData.concat(tableData);
    
        // Crear una hoja de trabajo y asignar los datos
        var ws = XLSX.utils.aoa_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, "Hoja1"); // Agregar la hoja de trabajo al libro
    
        // Generar el archivo Excel
        var wbout = XLSX.write(wb, { bookType: "xlsx", bookSST: true, type: "binary" });
    
        function s2ab(s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
            return buf;
        }
    
        // Descargar el archivo Excel
        saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), "tabla.xlsx");
    });
    
    //Función para imprimir
    $("#printPDF").on("click", function printPDF () {
        var doc = new jsPDF();
        doc.autoTable({
          head: [["Fecha", "Hora", "CPU", "Memoria", "Disco", "RED"]],
          body: getTableData(),
           
        });
      
        // Abre una nueva pestaña con el PDF generado
        var pdfDataUri = doc.output("datauristring");
        var newTab = window.open();
        newTab.document.write('<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe>');

        // Espera a que se cargue el PDF en la nueva pestaña y luego muestra la ventana de impresión
        newTab.onload = function() {
            newTab.print();
        };
      });
    

    // Función para obtener los datos de la tabla
    function getTableData() {
        var data = [];
        table.rows().every(function () {
            var rowData = this.data();
            data.push([
                rowData[1], // Fecha
                rowData[2], // Hora
                rowData[3], // CPU
                rowData[4], // Memoria
                rowData[5], // Disco
                rowData[6], // RED
            ]);
        });
        return data;
    }
});
