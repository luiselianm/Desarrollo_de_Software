import { Marca } from "./Marca";
import { Optional } from "./Optional";

let adidas: Marca = new Marca("Adidas");
let optional: Optional<Marca> = new Optional<Marca>(adidas);

console.log(optional.getValue())
console.log(optional.hasValue())

let optional2: Optional<undefined> = new Optional<undefined>(undefined);

console.log(optional2.getValue())
console.log(optional2.hasValue())