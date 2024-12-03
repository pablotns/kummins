
// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.clustering);

const getOptionChart = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/tasks/api-kmeans");
    const jsonData = await response.json();
    
    // Asegúrate de que la clave 'pie' existe
    if (jsonData.scatter) {
      return jsonData.scatter;  // Devuelve directamente la configuración del gráfico
    } else {
      throw new Error("No se encontraron datos para el gráfico");
    }
  } catch (ex) {
    alert("Error: " + ex.message);
  }
}

const initChart = async() => {
    const myChart = echarts.init(document.getElementById('chartScatter'));
    myChart.setOption(await getOptionChart());
    myChart.resize();
};

window.addEventListener('load',async()=>{
  await initChart();
});