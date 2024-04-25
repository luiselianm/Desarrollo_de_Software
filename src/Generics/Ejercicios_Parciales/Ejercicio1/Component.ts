import { Optional } from '../../Optional_Example'

export abstract class Component<T> {
    value: T;
    constructor(v: T) { this.value = v; }
    abstract count(predicate: (e: T) => boolean): number;
    abstract first(predicate: (e: T) => boolean): Optional<T>;
    }