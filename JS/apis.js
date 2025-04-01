
import { classTeamsNfl, classPlayersNfl, classTeamsEpl, classPlayersEpl, classTeamsNba, classPlayersNba } from "./class.js";


async function teamsEpl() {
    try {
        const URLJson = await fetch("https://api.balldontlie.io/epl/v1/teams?season=2024", {
            headers: { "Authorization": "3ca153f6-b17e-4e7c-aa06-da8e42c5bd27" }
        });
        const UrlApi = await URLJson.json();
        return (UrlApi); 
    } catch (error) {
        console.log("el error es", error);
    }
}


async function playersEpl() {
    try {
        const URLJson = await fetch("https://api.balldontlie.io/epl/v1/players?season=2024", {
            headers: { "Authorization": "3ca153f6-b17e-4e7c-aa06-da8e42c5bd27" }
        });
        const UrlApi = await URLJson.json();
        return(UrlApi);
    } catch (error) {
        console.log("el error es", error);
    }
}

async function fetchTeamsNba() {
    try {
        const URLJson = await fetch("https://api.balldontlie.io/v1/teams?season=2024?", {
            headers: { "Authorization": "3ca153f6-b17e-4e7c-aa06-da8e42c5bd27" }
        });
        const UrlApi = await URLJson.json();
        return UrlApi;
    } catch (error) {
        console.log("el error es", error);
    }
}


async function playersNba() {
    try {
        const URLJson = await fetch("https://api.balldontlie.io/v1/players?season=2024?", {
            headers: { "Authorization": "3ca153f6-b17e-4e7c-aa06-da8e42c5bd27" }
        });
        const UrlApi = await URLJson.json();
        return(UrlApi);
    } catch (error) {
        console.log("el error es", error);
    }
}

async function teamsNfl() {
    try {
        const URLJson = await fetch("https://api.balldontlie.io/nfl/v1/teams", {
            headers: { "Authorization": "3ca153f6-b17e-4e7c-aa06-da8e42c5bd27" }
        });
        const UrlApi = await URLJson.json();
        return UrlApi;
    } catch (error) {
        console.log("el error es", error);
    }
}

async function playersNfl() {
    try {
        const URLJson = await fetch("https://api.balldontlie.io/nfl/v1/players", {
            headers: { "Authorization": "3ca153f6-b17e-4e7c-aa06-da8e42c5bd27" }
        });
        const UrlApi = await URLJson.json();
        return UrlApi; 
    } catch (error) {
        console.log("el error es", error);
    }
}


export async function createInstances() {
    const teamsEpleague = await teamsEpl();
    const playersEpleague = await playersEpl(); 

    if (!teamsEpleague || !playersEpleague) {
        console.error("Error al obtener los datos de EPL");
        return;
    }

    const classTeamsPremier = teamsEpleague.data.map(team => new classTeamsEpl(
        team.name,
        team.city,
        team.stadium
    ));

    const classPlayersPremier = playersEpleague.data.map(player => new classPlayersEpl(
        player.name,
        player.national_team,
        player.position,
        player.age
    ));


    const teamsNfleague = await teamsNfl();
    const playersNfleague = await playersNfl();

    const classTeamsNflInstance = teamsNfleague.data.map(team => new classTeamsNfl(
        team.name,
        team.location,
        team.division,
        team.conference
    ));


    const classPlayersNflInstance = playersNfleague.data.map(player => new classPlayersNfl(
        player.first_name,
        player.position,
        player.age,
        player.height,
        player.weight
    ));

    const teamsNbaLeague = await fetchTeamsNba();
    const playersNbaLeague = await playersNba();


    const classTeamsNbaInstance = teamsNbaLeague.data.map(team => new classTeamsNba(
        team.conference,
        team.city,
        team.name,
        team.division
    ));

    const classPlayersNbaInstance = playersNbaLeague.data.map(player => new classPlayersNba(
        player.first_name,
        player.last_name,
        player.country,
        player.height,
        player.weight
    ));

    return {
        nbaTeams: classTeamsNbaInstance,
        nbaPlayers: classPlayersNbaInstance,
        eplTeams: classTeamsPremier,
        eplPlayers: classPlayersPremier,
        nflTeams: classTeamsNflInstance,
        nflPlayers: classPlayersNflInstance
    };
/* 
    console.log("Equipos EPL", classTeamsPremier);
    console.log("Jugadores EPL", classPlayersPremier);
    console.log("Equipos NFL", classTeamsNflInstance);
    console.log("Jugadores NFL", classPlayersNflInstance);
    console.log("Equipos NBA", classTeamsNbaInstance);
    console.log("Jugadores NBA", classPlayersNbaInstance);  */
}

