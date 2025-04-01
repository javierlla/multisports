
function createCard(title, properties)
{
    const card = document.createElement('div');
    card.classList.add('card');

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    card.appendChild(titleElement);

    properties.forEach(prop => {
        const p = document.createElement('p');
        p.textContent = prop;
        card.appendChild(p);
    });

    return(card);
}

function displayData(containerId, data, createItem)
{
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ''; // Limpiar antes de agregar
    data.forEach(item => container.appendChild(createItem(item)));
}

export{createCard, displayData};

