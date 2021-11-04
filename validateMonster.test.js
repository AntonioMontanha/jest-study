const validateMonster = require('./validateMonster');

test('Should return true when I pass a valid monster', () => {
    expect(validateMonster('Dragon')).toBe(true)
})

test('Should return false when I pass a invalid monster', () => {
    expect(validateMonster('InvalidMonster')).toBe(false)
})

test('Should return false when I pass null', () => {
    expect(validateMonster(null)).toBe(false)
})