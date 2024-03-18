const classes = {
    availableClasses : {
        0 : 'Sorcerer',
        1 : 'Warrior',
        2 : 'Monk',
        3 : 'Ninja'
    }
}

class character {
    constructor(name, type, weapon) {
        this.name = name;
        this.type = type;
        this.weapon = weapon;
    }
}

let heroName;
const heroClass = classes.availableClasses[Math.floor(Math.random() * 5)];
let heroWeapon;

if (heroClass == 'Sorcerer') {
    heroName = 'Merlin Shadowcaster';
    heroWeapon = 'Staff of Wisdom'
} else if (heroClass == 'Warrior') {
    heroName = 'Sylas Bloodaxe';
    heroWeapon = 'Black Knight Greataxe';
} else if (heroClass == 'Monk') {
    heroName = 'Asher Sunfire';
    heroWeapon = 'Iron Fist';
} else {
    heroName = 'Masato';
    heroWeapon = 'Shuriken';
}


const heroCharacter = new character (heroName, heroClass, heroWeapon);

console.log (`${heroCharacter.name} is a ${heroCharacter.type} and used the ${heroCharacter.weapon} to attack`)