import {createInstances } from './apis.js';
import {createCard, displayData} from './dom.js';

function createNflTeamCard(team)
{
    return createCard(team.name, [
        `Ubicación: ${team.location}`,
        `División: ${team.division}`,
        `Conferencia: ${team.conference}`
    ]);
}

function createNflPlayerCard(player)
{
    return createCard(player.firstName, [
        `Posición: ${player.position}`,
        `Edad: ${player.age}`,
        `Altura: ${player.height}`,
        `Peso: ${player.weight}`
    ]);
}

async function loadNflData()
{
    try {
        const data = await createInstances();
        displayData('teams-nfl', data.nflTeams, createNflTeamCard);
        displayData('players-nfl', data.nflPlayers, createNflPlayerCard);
    } 
    catch (error) 
    {
        console.error("Error al cargar los datos de la NFL:", error);
    }
}

document.addEventListener('DOMContentLoaded', loadNflData);
