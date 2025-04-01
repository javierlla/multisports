import { createInstances } from './apis.js';
import { createCard, displayData} from './dom.js';

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

async function loadBasketballData() {
    try {
        const data = await createInstances();
        displayData('teams-nba', data.nbaTeams, createNbaTeamCard);
        displayData('players-nba', data.nbaPlayers, createNbaPlayerCard);
    }
    catch (error)
    {
        console.error("Error al cargar los datos de la NBA:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadBasketballData);
