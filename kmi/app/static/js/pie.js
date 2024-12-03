// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.clustering);

const getOptionChart2 = async () => {
  try {
    const response = await fetch("http://127.0.0.1:5000/tasks/api-kmeans");
    const jsonData = await response.json();
    
    // Asegúrate de que la clave 'pie' existe
    if (jsonData.pie) {
      return jsonData.pie;  // Devuelve directamente la configuración del gráfico
    } else {
      throw new Error("No se encontraron datos para el gráfico");
    }
  } catch (ex) {
    alert("Error: " + ex.message);
  }
}

const initChart2 = async() => {
  const myChart = echarts.init(document.getElementById('chartPie'));
  myChart.setOption(await getOptionChart2());
  myChart.on('click', function(params) {
    var categoryMap = {
      'CLUSTER1': 'categoria1',
      'CLUSTER2': 'categoria2',
      'CLUSTER3': 'categoria3'
    };
  
    var categoryPage = categoryMap[params.name];
    if (categoryPage) {
      window.location.href = categoryPage;
    } else {
      alert('Página no encontrada para esta categoría.');
    }
   });
  
  myChart.resize();
};

window.addEventListener('load', async () => {
  await initChart2();
});

