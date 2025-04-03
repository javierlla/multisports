import { createInstances } from './apis.js';
import { createCard, displayData } from './dom.js';

function createNbaTeamCard(team) {
    return createCard(
        team.name, 
        [
            `Ciudad: ${team.city}`,
            `Conferencia: ${team.conference}`,
            `División: ${team.division}`
        ],
        `nba-team-${team.name}`,
        'nba-team'
    );
}

function createNbaPlayerCard(player) {
    return createCard(
        `${player.firstName} ${player.lastName}`, 
        [
            `País: ${player.country}`,
            `Altura: ${player.height}`,
            `Peso: ${player.weight}`
        ],
        `nba-player-${player.first_name}-${player.last_name}`,
        'nba-player'
    );
}

async function loadBasketballData() {
    try {
        const data = await createInstances();
        displayData('teams-nba', data.nbaTeams, createNbaTeamCard);
        displayData('players-nba', data.nbaPlayers, createNbaPlayerCard);
    } catch (error) {
        console.error("Error cargando NBA:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadBasketballData);