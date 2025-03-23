# app/dash/routes.py
from flask import render_template
from . import dash

@dash.route('/dash')
def dashboard():
    return render_template('charts.html')

@dash.route('/dash/cluster01')
def cluster01():
    return render_template('cat1.html')
    


@dash.route('/dash/cluster02')
def cluster02():
    return render_template('cat2.html')

@dash.route('/dash/cluster03')
def cluster03():
    datos = {
        'titulo': 'Página de gráficos',
        'descripcion': 'Esta página muestra gráficos interactivos.',
        'grafico1': 'Gráfico de Dispersión',
        'grafico2': 'Gráfico de Torta',
        'valores': [
            {'id': 1, 'nombre': 'Item 1', 'valor': 10},
            {'id': 2, 'nombre': 'Item 2', 'valor': 20},
            {'id': 3, 'nombre': 'Item 3', 'valor': 30},
            {'id': 4, 'nombre': 'Item 4', 'valor': 40},
            {'id': 5, 'nombre': 'Item 5', 'valor': 50}
        ]
    }
    return render_template('cat3.html',datos=datos)
