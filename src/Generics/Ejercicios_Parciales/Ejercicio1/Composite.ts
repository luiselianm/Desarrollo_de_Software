import { Optional } from "../../Optional_Example";
import { Component } from "./Component";

export class Composite<T> extends Component<T> {

    components: Component<T>[];

    constructor(v: T) {
        super(v);
        this.components = [];
    }

    add(e: Component<T>) {
        this.components.push(e);
    }

    count(predicate: (e: T) => boolean): number {
        let cumplen: number = 0;
        this.components.forEach(component => {
            cumplen += component.count(predicate)
            }
        )
        return (predicate(this.value))? cumplen + 1 : cumplen;
    }

    first(predicate: (e: T) => boolean): Optional<T> {
        if (predicate(this.value))
            return new Optional<T>(this.value);

        let first: Optional<T> = new Optional<T>(undefined);
        this.components.forEach(component => {
            if (component.first(predicate).getValue())
                first = new Optional<T>(component.first(predicate).getValue())
        });
        return first;
    }

}