const getOptionChart66 = async () => {
    try {
        const response = await fetch("http://127.0.0.1:5000/tasks/api-kmeans");
        const jsonData = await response.json();
        
        // Asegúrate de que la clave 'pie' existe
        if (jsonData.cluster1) {
          return jsonData.cluster1;  // Devuelve directamente la configuración del gráfico
        } else {
          throw new Error("No se encontraron datos para el gráfico");
        }
      } catch (ex) {
        alert("Error: " + ex.message);
      }
}

$(document).ready(async function() {
    const data = await getOptionChart66();

    $('#tabla-valores').DataTable({
        data: data,
        columns: [
            { title: "ID" },
            { title: "PROCESADOR" },
            { title: "PLACA MADRE" },
            { title: "DISCO" },
            { title: "RAM" },
            { title: "CALIFICACION" },
            { title: "SYSOP" }
        ]
    });
});