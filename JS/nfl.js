import { createInstances } from './apis.js';
import { createCard, displayData } from './dom.js';

function createNflTeamCard(team) {
    return createCard(
        team.name, 
        [
            `Ubicación: ${team.location}`,
            `División: ${team.division}`,
            `Conferencia: ${team.conference}`
        ],
        `nfl-team-${team.name}`,
        'nfl-team'
    );
}

function createNflPlayerCard(player) {
    return createCard(
        `${player.firstName} ${player.lasName || ''}`.trim(), 
        [
            `Posición: ${player.position}`,
            `Edad: ${player.age}`,
            `Altura: ${player.height}`,
            `Peso: ${player.weight}`
        ].filter(Boolean),
        `nfl-player-${player.firstName}-${player.lastName || ''}`,
        'nfl-player'
    );
}

async function loadNflData() {
    try {
        const data = await createInstances();
        displayData('teams-nfl', data.nflTeams, createNflTeamCard);
        displayData('players-nfl', data.nflPlayers, createNflPlayerCard);
    } catch (error) {
        console.error("Error cargando NFL:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadNflData);