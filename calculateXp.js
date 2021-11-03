function calculateXp(monster, numberOfPlayers){
    let partialXp;
    switch (monster){
        case 'Dragon' : 
            partialXp = 5000;
            break;
        case 'Kobold' : 
            partialXp = 400;
            break;
        case 'Lich' : 
            return 'Whatever, you are alreay dead.'
    }
    return partialXp / numberOfPlayers
}

module.exports = calculateXp;

