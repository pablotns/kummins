from flask import jsonify
from . import tasks
from . import globals

@tasks.route('/api-kmeans')
def datos():
    
    globals.processor.process_data()
    globals.processor.process_kmeans()
    globals.processor.process_results()

    v1, v2, v3 = globals.processor.get_cantPuntos()
    data = [
            { 'value': v1, 'name': 'CLUSTER1' },
            { 'value': v2, 'name': 'CLUSTER2' },
            { 'value': v3, 'name': 'CLUSTER3' }
        ]
    
    chart = {
        'tooltip': {
            'trigger': 'item'
        },
        'legend': {
            'top': '5%',
            'left': 'center'
        },
        'series': [
            {
                'name': 'Result',
                'type': 'pie',
                'radius': ['30%', '70%'],
                'avoidLabelOverlap': False,
                'padAngle': 5,
                'itemStyle': {
                    'borderRadius': 10
                },
                'data': data
            }
        ]
    }

    cluster1,cluster2,cluster3 = globals.processor.get_coordenadas()
    data = [[0.056,-0.30],[-0.321, 0.134],[0.41, 0.258]]

    chart2 = {
        'tooltip': {
            'show':'true',
            'trigger':'item',
            'formatter': ' {a}<br/>{c0}'
        },
        'xAxis':
        {
            'scale': 'true'    
        },
        'yAxis': 
        {
            'scale': 'true'
        },
        'series': [
            {
            'name': 'Cluster: 1',
            'symbolSize': '8',
            'data': cluster1,
            'type': 'scatter',
            'color': '#5470c6'
            }
            ,
            {
            'name': 'Cluster: 2',
            'symbolSize': '8',
            'data': cluster2,
            'type': 'scatter',
            'color': '#91cc75'
            }
            ,
            {
            'name': 'Cluster: 3',
            'symbolSize': '8',
            'data': cluster3,
            'type': 'scatter',
            'color': '#fac858'
            },
            {
            'name': 'Centroids',
            'type': 'effectScatter',
            'symbolSize': '12',
            'data': data,
            'color':'#ee6666'
            }
        ]
    }

    dataset = globals.processor.get_tablaDesc()
    dataset = dataset.values.tolist()
    
    w1,w2,w3 = globals.processor.get_dataTabla()
    w1 = w1[:5]
    w2 = w2[:5]
    w3 = w3[:5]
    settings = w1+w2+w3
    # Preparar la respuesta JSON
    response = {
        'pie': chart,
        'scatter': chart2,
        'tabla' : dataset,
        'settings' : settings
    }
    
    return jsonify(response)
    
