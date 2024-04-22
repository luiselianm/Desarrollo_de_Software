import { Perk } from "../Decorators";

export interface Character{
    getDescription(): void;
    setPerk(hability: Perk): void;
}