// index.js
export function initializeHoverAndClickEvents(elements) {
    elements.forEach((element) => {
        element.addEventListener('mouseover', () => {
            console.log('Click event triggered');
            element.classList.add('hidden'); // Agrega la clase que oculta el elemento
        });

        element.addEventListener('click', () => {
            
            console.log('Click event triggered');
            element.classList.remove('hidden'); // Elimina la clase para hacerlo visible
        });
    });
    console.log(elements);
}
