/* 
import { createInstances } from './apis.js';


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

// Función para mostrar datos en un contenedor
function displayData(containerId, data, createItem) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = ''; // Limpiar antes de agregar
    data.forEach(item => container.appendChild(createItem(item)));
}

// Funciones específicas para crear tarjetas
function createNbaTeamCard(team) {
    return createCard(team.name, [
        `Ciudad: ${team.city}`,
        `Conferencia: ${team.conference}`,
        `División: ${team.division}`
    ]);
}

function createNbaPlayerCard(player) {
    return createCard(`${player.firstName} ${player.lastName}`, [
        `País: ${player.country}`,
        `Altura: ${player.height}`,
        `Peso: ${player.weight}`
    ]);
}

function createEplTeamCard(team) {
    return createCard(team.name, [
        `Ciudad: ${team.city}`,
        `Estadio: ${team.stadium}`
    ]);
}

function createEplPlayerCard(player) {
    return createCard(player.name, [
        `Selección: ${player.nationalTeam}`,
        `Posición: ${player.position}`,
        `Edad: ${player.age}`
    ]);
}

function createNflTeamCard(team) {
    return createCard(team.name, [
        `Ubicación: ${team.location}`,
        `División: ${team.division}`,
        `Conferencia: ${team.conference}`
    ]);
}

function createNflPlayerCard(player) {
    return createCard(player.firstName, [
        `Posición: ${player.position}`,
        `Edad: ${player.age}`,
        `Altura: ${player.height}`,
        `Peso: ${player.weight}`
    ]);
}

// Función principal
async function initApp() {
    try {
        const data = await createInstances();
        const path = window.location.pathname.split('/').pop();

        if (path === 'basketball.html') {
            displayData('teams-nba', data.nbaTeams, createNbaTeamCard);
            displayData('players-nba', data.nbaPlayers, createNbaPlayerCard);
        } else if (path === 'football.html') {
            displayData('teams-epl', data.eplTeams, createEplTeamCard);
            displayData('players-epl', data.eplPlayers, createEplPlayerCard);
        } else if (path === 'Nfl.html') {
            displayData('teams-nfl', data.nflTeams, createNflTeamCard);
            displayData('players-nfl', data.nflPlayers, createNflPlayerCard);
        }
    } catch (error) {
        console.error("Error al inicializar la aplicación:", error);
        document.querySelectorAll('[id^="teams-"], [id^="players-"]').forEach(container => {
            const errorMsg = document.createElement('p');
            errorMsg.classList.add('error');
            errorMsg.textContent = 'Error al cargar los datos. Por favor, inténtalo de nuevo más tarde.';
            container.appendChild(errorMsg);
        });
    }
}

document.addEventListener('DOMContentLoaded', initApp); */