import { Iterator } from "../interfaces";

export class DinerMenuIterator implements Iterator {

    constructor(
        private menuItems: string[] = [],
        private position: number = 0
    ) { }

    hasNext(): boolean {
        return (this.position >= this.menuItems.length ||
            this.menuItems[this.position] == undefined) 
            ? false : true;
    }

    getNext(): string {
        const menuItem = this.menuItems[this.position]
        this.position += 1;
        return menuItem;
    }
    

}