// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack = () => {
        return this.strength
    }
    receiveDamage = (damage) => {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }
    receiveDamage = (damage) => {
        this.health -= damage
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry = () => {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage = (damage) => {
        this.health -= damage
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    vikingArmy = [];
    saxonArmy = [];

    addViking = (VK) => {
        this.vikingArmy.push(VK);
    }

    addSaxon = (SX) => {
        this.saxonArmy.push(SX);
    }
    vikingAttack = () => {
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        if (viking && saxon) {
            let result = saxon.receiveDamage(viking.strength)
            if (saxon.health - viking.strength > 0) {
                return result
            } else {
                this.saxonArmy.splice(saxon, 1)
                return result;

            }
        }
    }
    saxonAttack = () => {
        let sax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        if (vik && sax) {
            let result = vik.receiveDamage(sax.strength)
            if (vik.health - sax.strength > 0) {
                return result
            } else {
                this.vikingArmy.splice(vik, 1)
                return result;
            }
        }
    }
}


