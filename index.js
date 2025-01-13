document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.container-item');
    
    items.forEach(item => {
        item.addEventListener('click', handleClick);
    });
});

function handleClick(event) {
    this.classList.toggle('fade-out');
    event.stopPropagation();
}