function createEncounter(monster, numberOfPlayers) {
    let encounter = {"monster": monster, "numberOfPlayers": numberOfPlayers, "combatDifficulties": ['Easy', 'Normal', 'Hard', 'Very Hard', 'Deadly']}
    return encounter;
}

module.exports = createEncounter;