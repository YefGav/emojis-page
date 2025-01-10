
import { initializeHoverAndClickEvents } from './index.js';

document.addEventListener('DOMContentLoaded', () => {
    const containerItems = document.querySelectorAll('.container-item');
    initializeHoverAndClickEvents(containerItems);
});
