function validateMonster(monster) {
    const validMonsters = ['Dragon', 'Kobold', 'Lich']
    return validMonsters.includes(monster)
}

module.exports = validateMonster;