import { showFavorites } from './dom.js';


function initFavoritesPage() {
    console.log("Inicializando página de favoritos...");
    showFavorites();
}

document.addEventListener('DOMContentLoaded', initFavoritesPage);

export { initFavoritesPage };