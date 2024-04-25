import { Composite } from "./Composite";
import { Leaf } from "./Leaf";

let composite: Composite<number> = new Composite(5);
let compositeHijo: Composite<number> = new Composite(5);
let leaf1: Leaf<number> = new Leaf(30);
let leaf2: Leaf<number> = new Leaf(40);
composite.add(leaf1);
composite.add(compositeHijo);
compositeHijo.add(leaf2);

console.log(composite.count((e: number) => e%2 === 0));
console.log(composite.first((e: number) => e%2 === 0));
