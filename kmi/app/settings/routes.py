# app/settings/routes.py
import numpy as np
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score
from flask import render_template,request,jsonify
from . import settings 
true_labels = ['A','A','A','A','A','B','B','B','B','B','C','C','C','C','C']  # Etiquetas reales esperadas

@settings.route('/settings')
def ajustes():
    return render_template('settings.html')


@settings.route('/settings/api-data')
def api_data():
    return render_template ('home.html')

        
@settings.route('/settings/save-responses', methods=['POST'])
def save_responses():
    try:
        user_responses = request.json.get('responses', [])  # Recibir las respuestas del frontend
        
        # Validación de longitud de respuestas
        if len(user_responses) != len(true_labels):
            return jsonify({'message': 'Cantidad de respuestas incorrecta'}), 400
        
        # Calcular la matriz de confusión
        cm = confusion_matrix(true_labels, user_responses, labels=['A', 'B', 'C'])
        cm_list = cm.tolist()
        print(cm_list)
        # Generar reporte de clasificación
        reporte = classification_report(true_labels, user_responses, labels=['A', 'B', 'C'], output_dict=True)
        print(reporte)
        # Calcular precisión global (accuracy)
        precision_global = accuracy_score(true_labels, user_responses)
        print(precision_global)
        
        # Devolver datos en formato JSON
        return jsonify({
            'confusion_matrix': cm_list,
            'classification_report': reporte,
            'accuracy': precision_global
        }), 200  # Código 200 indica éxito
    
    except Exception as e:
        print("Error al guardar respuestas:", e)
        return jsonify({'message': 'Error al guardar las respuestas', 'error': str(e)}), 500
     
        