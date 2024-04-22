import { Character } from "../interfaces";
import { BaseDecorator } from "./BaseDecorator";

export class Perk implements BaseDecorator {

    character: Character;

    constructor(
        character: Character,
        private name: string,
        public power: number = 0,
        public health: number = 0,
        public shield: number = 0
    ) {
        this.character = character;
        this.setPerk();
    }

    public getName() {
        console.log(this.name)
    }

    public getDescription(): void {
        this.character.getDescription();
    }

    public setPerk(): void {
        this.character.setPerk(this);
    }

}