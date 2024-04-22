import { Perk } from "./Decorators";
import { BaseCharacter } from "./classes";
import { Character } from "./interfaces";

let character: Character = new BaseCharacter('Luis Elian');
character.getDescription();

let miniShield: Perk = new Perk(character, 'Mini Shield', 0, 0, 25)
character.getDescription();

let bigShield: Perk = new Perk(character, 'Big Shield', 0, 0, 50)
character.getDescription();