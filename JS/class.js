
class classTeamsNfl
{
    constructor(name, location, division, conference)
    {
        this.name = name,
        this.location = location,
        this.division = division,
        this.conference = conference
    }
}

class classPlayersNfl
{
    constructor(firstName, position, age, height, weight)
    {
        this.firstName = firstName,
        this.position = position,
        this.age = age,
        this.height = height,
        this.weight = weight
    }
}


class classTeamsNba{
    constructor(conference, city, name, division) {
        this.conference = conference, 
        this.city = city, 
        this.name = name,
        this.division = division
    }
}
class classPlayersNba
{
    constructor(firstName, lastName, country, height, weight)
    {
        this.firstName = firstName,
        this.lastName = lastName,
        this.country = country,
        this.height = height,
        this.weight = weight
    }
}

class classTeamsEpl
{
    constructor(name, city, stadium)
    {
        this.name = name,
        this.city = city,
        this.stadium = stadium
    }
}

class classPlayersEpl
{
    constructor(name, nationalTeam, position, age)
    {
        this.name = name,
        this.nationalTeam = nationalTeam,
        this.position = position,
        this.age = age
    }
}

export{classTeamsNfl, classPlayersNfl, classTeamsEpl, classPlayersEpl, classTeamsNba, classPlayersNba}