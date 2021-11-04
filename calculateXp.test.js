const calculateXp = require('./calculateXp');

test('Should return 2500 when two players kill a Dragon', () => {
   expect(calculateXp('Dragon', 2)).toBe(2500);
});

test('Should return 400 when one players kills a Kobold', () => {
    expect(calculateXp('Kobold', 1)).toEqual(400);
})

// FunFact: ToBe and ToEqual here are performing the same thing, because we are using primitive types, 
// as long toBe campares with ===, so the exact same object, if my assertion was aiming an object, I would get
// a incorrect match

test('Should return invalid monster error when I send a invalid monster', () => {
    expect(() => calculateXp('KleberTheInvalidMonster')).toThrow('This is a invalid monster!')
})
