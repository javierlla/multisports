import { createInstances } from './apis.js';
import { createCard, displayData } from './dom.js';

function createEplTeamCard(team) {
    const teamId = `epl-team-${team.name.toLowerCase().replace(/\s+/g, '-')}`;
    
    return createCard(
        team.name, 
        [
            `Ciudad: ${team.city}`,
            `Estadio: ${team.stadium}`
        ],
        teamId,
        'epl-team'
    );
}

function createEplPlayerCard(player) {
    const playerId = `epl-player-${player.name.toLowerCase().replace(/\s+/g, '-')}`;
    
    return createCard(
        player.name, 
        [
            `Selección: ${player.national_team}`,
            `Posición: ${player.position}`,
            `Edad: ${player.age}`
        ],
        playerId,
        'epl-player'
    );
}

async function loadFootballData() {
    try {
        const data = await createInstances();
        
        data.eplTeams.forEach(team => team.type = 'epl-team');
        data.eplPlayers.forEach(player => player.type = 'epl-player');
        
        displayData('teams-epl', data.eplTeams, createEplTeamCard);
        displayData('players-epl', data.eplPlayers, createEplPlayerCard);
    }
    catch (error) {
        console.error("Error al cargar los datos de la EPL:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadFootballData);