document.addEventListener('DOMContentLoaded', async () => {
    let responses = [];  // Lista para almacenar las respuestas del usuario

    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/tasks/api-kmeans');
            const data = await response.json();
            const settings = data.settings; // Extraer la etiqueta 'settings'
            
            const listContainer = document.getElementById('computerList');
            
            settings.forEach((item, index) => {
                const listItem = document.createElement('li');
                listItem.className = 'computer-item';
                listItem.innerHTML = `
                    <div class="computer-details">
                        <span class="computer-name">${item[1]} (${item[2]})</span>
                        <span class="computer-specs">Disco: ${item[3]}, RAM: ${item[4]}, Sistema: ${item[6]}</span>
                    </div>
                    <div class="rating">
                        <label>Calificación: 
                            <input type="text" class="response-input" data-index="${index}" maxlength="1" placeholder="A/B/C">
                        </label>
                    </div>
                `;
                listContainer.appendChild(listItem);
            });
            
            // Escuchar cambios en las respuestas
            const inputs = document.querySelectorAll('.response-input');
            inputs.forEach(input => {
                input.addEventListener('input', (e) => {
                    const idx = e.target.dataset.index;
                    responses[idx] = e.target.value;  // Almacena la respuesta en la posición correcta
                });
            });

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Enviar las respuestas al backend
    document.getElementById('submitBtn').addEventListener('click', async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/settings/settings/save-responses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ responses })  // Envía la lista de respuestas
            })

        } catch (error) {
            console.error('Error al enviar las respuestas:', error);
            alert('Error al enviar las respuestas.');
        }
    });

    fetchData(); // Llamar a la función después de que el DOM esté listo
});