
let favoritesTracker = [];

function createCard(title, properties, itemId = null, itemType = null) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    if (itemId && itemType) {
        const favButton = document.createElement('button');
        favButton.classList.add('fav-btn');
        favButton.dataset.id = itemId;
        favButton.dataset.type = itemType;
        favButton.textContent = isFavorite(itemId, itemType) ? "❤️" : "🤍";
        card.appendChild(favButton);
        
        favoritesTracker.push({ id: itemId, type: itemType, name: title });
    }

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    card.appendChild(titleElement);

    properties.forEach(prop => {
        if (prop) {
            const p = document.createElement('p');
            p.textContent = prop;
            card.appendChild(p);
        }
    });

    return card;
}

function isFavorite(id, type) {
    const favorites = getFavorites();
    return favorites.some(fav => fav.id === id && fav.type === type);
}

function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("fav-btn")) {
        const id = e.target.dataset.id;
        const type = e.target.dataset.type;
        const name = e.target.closest('.card').querySelector('h3').textContent;
        
        let favorites = getFavorites();
        const index = favorites.findIndex(fav => fav.id === id && fav.type === type);
        
        if (index > -1) {
            favorites.splice(index, 1);
            e.target.textContent = "🤍";
        } else {
            favorites.push({ id, type, name });
            e.target.textContent = "❤️";
        }
        
        saveFavorites(favorites);
    }

    if (e.target.classList.contains('remove-favorite')) {
        const id = e.target.dataset.id;
        const type = e.target.dataset.type;
        let favorites = getFavorites();
        favorites = favorites.filter(fav => !(fav.id === id && fav.type === type));
        saveFavorites(favorites);
        showFavorites();
    }
});

function displayData(containerId, data, createItemFunction) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Contenedor ${containerId} no encontrado`);
        return;
    }

    container.innerHTML = '';
    
    if (!Array.isArray(data)) {
        console.error("Datos no son un array:", data);
        container.innerHTML = '<p>Datos no disponibles</p>';
        return;
    }

    data.forEach(item => {
        try {
            const card = createItemFunction(item);
            if (card) container.appendChild(card);
        } catch (error) {
            console.error("Error creando tarjeta:", error);
        }
    });
}

function showFavorites(containerId = "favorites-container") {
    const favorites = getFavorites();
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error("Contenedor de favoritos no encontrado");
        return;
    }
    
    console.log("Mostrando favoritos:", favorites); 
    
    if (favorites.length === 0) {
        container.innerHTML = "<p>No tienes favoritos aún</p>";
        return;
    }

    container.innerHTML = favorites.map(fav => `
        <div class="favorite-card">
            <h3>${fav.name}</h3>
            <p>Tipo: ${fav.type.replace('-', ' ').toUpperCase()}</p>
            <button class="remove-favorite" data-id="${fav.id}" data-type="${fav.type}">
                ❌ Eliminar
            </button>
        </div>
    `).join('');
}

console.log("Favoritos actuales:", getFavorites());

export { createCard, displayData, showFavorites, getFavorites };