import {createInstances } from './apis.js';
import {createCard, displayData} from './dom.js';

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

async function loadFootballData() {
    try {
        const data = await createInstances();
        displayData('teams-epl', data.eplTeams, createEplTeamCard);
        displayData('players-epl', data.eplPlayers, createEplPlayerCard);
    }
    catch (error)
    {
        console.error("Error al cargar los datos de la EPL:", error);

    }
}

document.addEventListener('DOMContentLoaded', loadFootballData);
