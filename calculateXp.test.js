const calculateXp = require('./calculateXp');

test('Should return 2500 when two players kill a Dragon', () => {
   expect(calculateXp('Dragon', 2)).toBe(2500);
});