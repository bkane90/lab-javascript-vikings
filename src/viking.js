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
      if(this.health > 0){
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
class Saxon extends Soldier{
    receiveDamage = (damage) => {
        this.health -= damage
      if(this.health > 0){
          return `A Saxon has received ${damage} points of damage`
      } else {
          return `A Saxon has died in combat`
      }
    }
}

// War
class War {
    vikingArmy =[];
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
          this.saxonArmy.splice(saxon)
          return saxon.receiveDamage(viking.strength)
      }
      saxonAttack = () => {
        let sax = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let vik = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        this.vikingArmy.splice(vik)
        return vik.receiveDamage(sax.strength)
      }
}


