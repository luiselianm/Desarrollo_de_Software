import { Optional } from "../../Optional_Example";
import { Component } from "./Component";

export class Leaf<T> extends Component<T> {
    
    count(predicate: (e: T) => boolean): number {
        return (predicate(this.value))? 1 : 0
    }

    first(predicate: (e: T) => boolean): Optional<T> {
        return (predicate(this.value)) ?
        new Optional<T>(this.value) :
        new Optional<T>(undefined)
    }

}