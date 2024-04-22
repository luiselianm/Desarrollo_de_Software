import { Character } from "../interfaces";
import { Perk } from "../Decorators";


export class BaseCharacter implements Character{

    constructor(
        private name: string,
        private power: number = 100,
        private health: number= 100,
        private perks: Perk[] = [],
        private shield: number = 0
    ){ }
    
    public getPerks(){
        console.log('Perks:')
        if (this.perks.length >= 1 ){
            this.perks.forEach(
                perk => {if (perk) console.log(perk.getName())}
            )
        } else {
            console.log('The character has no habilities')
        }
    }

    public getDescription(){
        console.log(`Name: ${this.name}, power: ${this.power}, health: ${this.health}, shield: ${this.shield}`)
        this.getPerks();
    };

    public setPerk(perk: Perk): void {
        this.perks.push(perk);
        this.health += perk.health;
        this.power += perk.power;
        this.shield += perk.shield;
    }

}