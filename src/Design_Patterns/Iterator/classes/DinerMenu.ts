import { Iterator, Menu } from "../interfaces";
import { DinerMenuIterator } from './DinerMenuIterator'

export class DinerMenu implements Menu {

    constructor(
        private menuItems: string[]
    ) { }

    createIterator(): Iterator {
        return new DinerMenuIterator(this.menuItems)
    }

    getMenuItems(): string[]{
        return this.menuItems;
    }

}