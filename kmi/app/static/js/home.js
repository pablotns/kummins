
// Inicializar ECharts
var ROOT_PATH = 'https://echarts.apache.org/examples';
var chartDom = document.getElementById('neurachart');
var myChart = echarts.init(chartDom);
var option;

// Declarar los datos localmente (similares a los datos de `webkit-dep.json`)
var webkitDep = {
    "categories": [
      { "name": "Procesadores", "keyword": {}, "base": "Procesador" },
      { "name": "Discos", "keyword": {}, "base": "Disco" },
      { "name": "RAM", "keyword": {}, "base": "Memoria" },
      { "name": "SysOp", "keyword": {}, "base": "SistemaOperativo" }
    ],



    "nodes": [
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i3", "value": 1, "category": 0 },
      { "name": "Intel i5", "value": 1, "category": 0 },
      { "name": "Intel i5", "value": 1, "category": 0 },
      { "name": "Intel i5", "value": 1, "category": 0 },
      { "name": "Intel i5", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "Intel i7", "value": 1, "category": 0 },
      { "name": "240 GB Solido", "value": 1, "category": 1 },
      { "name": "240 GB Solido", "value": 1, "category": 1 },
      { "name": "240 GB Solido", "value": 1, "category": 1 },
      { "name": "240 GB Solido", "value": 1, "category": 1 },
      { "name": "240 GB Solido", "value": 1, "category": 1 },
      { "name": "240 GB Solido", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "500 GB Mecanico", "value": 1, "category": 1 },
      { "name": "1 TB Mecanico", "value": 1, "category": 1 },
      { "name": "1 TB Mecanico", "value": 1, "category": 1 },
      { "name": "1 TB Mecanico", "value": 1, "category": 1 },
      { "name": "1 TB Mecanico", "value": 1, "category": 1 },
      { "name": "1 TB Mecanico", "value": 1, "category": 1 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "4 GB RAM", "value": 1, "category": 2 },
      { "name": "8 GB RAM", "value": 1, "category": 2 },
      { "name": "8 GB RAM", "value": 1, "category": 2 },
      { "name": "8 GB RAM", "value": 1, "category": 2 },
      { "name": "8 GB RAM", "value": 1, "category": 2 },
      { "name": "8 GB RAM", "value": 1, "category": 2 },
      { "name": "8 GB RAM", "value": 1, "category": 2 },
      { "name": "8 GB RAM", "value": 1, "category": 2 },
      { "name": "8 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "2 GB RAM", "value": 1, "category": 2 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 10 PRO", "value": 1, "category": 3 },
      { "name": "WIN 8.1", "value": 1, "category": 3 },
      { "name": "WIN 8.1", "value": 1, "category": 3 },
      { "name": "WIN 8.1", "value": 1, "category": 3 },
      { "name": "WIN 8.1", "value": 1, "category": 3 },
      { "name": "WIN 8.1", "value": 1, "category": 3 },
      { "name": "WIN 8.1", "value": 1, "category": 3 },
      { "name": "WIN 8.1", "value": 1, "category": 3 },
      { "name": "WIN 8.1", "value": 1, "category": 3 },
      { "name": "WIN LTCS", "value": 1, "category": 3 },
      { "name": "WIN LTCS", "value": 1, "category": 3 },
      { "name": "WIN LTCS", "value": 1, "category": 3 },
      { "name": "WIN LTCS", "value": 1, "category": 3 },
      { "name": "WIN LTCS", "value": 1, "category": 3 },
      { "name": "WIN LTCS", "value": 1, "category": 3 },
      { "name": "WIN LTCS", "value": 1, "category": 3 },
      { "name": "WIN LTCS", "value": 1, "category": 3 },
      { "name": "WIN 7", "value": 1, "category": 3 },
      { "name": "WIN 7", "value": 1, "category": 3 },
      { "name": "WIN 7", "value": 1, "category": 3 },
      { "name": "WIN 7", "value": 1, "category": 3 },
      { "name": "WIN 7", "value": 1, "category": 3 },
      { "name": "WIN 7", "value": 1, "category": 3 },
      { "name": "WIN 7", "value": 1, "category": 3 },
      { "name": "WIN 7", "value": 1, "category": 3 },
      { "name": "WIN 11 PRO", "value": 1, "category": 3 }
    ]
    ,
  "links": [
    {
      "source": 0,
      "target": 1
    },
    {
      "source": 0,
      "target": 2
    },
    {
      "source": 0,
      "target": 3
    }
    ,
    {
      "source": 15,
      "target": 16
    }
    ,
    {
      "source": 15,
      "target": 17
    }
    ,
    {
      "source": 15,
      "target": 18
    }
    ,
    {
      "source": 15,
      "target": 19
    }
    ,
    {
      "source": 25,
      "target": 26
    }
    ,
    {
      "source": 25,
      "target": 27
    }
    ,
    {
      "source": 25,
      "target": 28
    }
    ,
    {
      "source": 25,
      "target": 29
    }
    ,
    {
      "source": 35,
      "target": 36
    }
    ,
    {
      "source": 35,
      "target": 37
    }
    ,
    {
      "source": 45,
      "target": 46
    }
    ,
    {
      "source": 45,
      "target": 47
    }
    ,
    {
      "source": 45,
      "target": 48
    }
    ,
    {
      "source": 45,
      "target": 49
    }
    ,
    {
      "source": 55,
      "target": 56
    }
    ,
    {
      "source": 55,
      "target": 57
    }
    ,
    {
      "source": 55,
      "target": 58
    }
    ,
    {
      "source": 55,
      "target": 59
    }
    ,
    {
      "source": 65,
      "target": 66
    }
    ,
    {
      "source": 65,
      "target": 67
    }
    ,
    {
      "source": 65,
      "target": 68
    }
    ,
    {
      "source": 65,
      "target": 67
    }
    ,
    {
      "source": 65,
      "target": 68
    }
    

    ]
  };
  

// Mostrar gráfico con los datos locales
myChart.showLoading();
myChart.hideLoading();

option = {
  legend: {
    data: ['Procesadores', 'Discos', 'RAM', 'SysOp']
  },
  series: [
    {
      type: 'graph',
      layout: 'force',
      animation: false,
      label: {
        position: 'right',
        formatter: '{b}'
      },
      draggable: true,
      data: webkitDep.nodes.map(function (node, idx) {
        node.id = idx;
        return node;
      }),
      categories: webkitDep.categories,
      force: {
        edgeLength: 5,
        repulsion: 20,
        gravity: 0.2
      },
      edges: webkitDep.links
    }
  ]
};

myChart.setOption(option);

// Función para el botón de inicio
function startApp() {
    window.location.href = "auth/login"; // Descomenta para redirigir a una nueva página
}