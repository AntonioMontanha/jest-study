const createEncounter = require('./createEncounter');

test('Should return a encounter when I send a valid monster and 2 players', () => {
    expect(createEncounter('Dragon', 2)).toEqual({"monster": 'Dragon', "numberOfPlayers": 2, "combatDifficulties": ['Easy', 'Normal', 'Hard', 'Very Hard', 'Deadly']})
})

//Fun Fact: Is this case, toEqual is a good chouce, due we are talking about the Encounter Object, so toBe would not match

test('Should contain deadly in the combat difficulties', () => {
    expect(createEncounter('Dragon', 2).combatDifficulties).toContain('Deadly');
})