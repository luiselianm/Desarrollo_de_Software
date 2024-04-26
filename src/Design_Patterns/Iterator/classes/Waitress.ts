import { Iterator, Menu } from "../interfaces";
import { DinerMenuIterator } from "./DinerMenuIterator";

export class Waitress{
    
    constructor(
        private menu: Menu
    ){}

    public printMenu(): void{
        const menuIterator: Iterator = new DinerMenuIterator(this.menu.getMenuItems());
        console.log('Menu:');
        while ( menuIterator.hasNext() )
            console.log(menuIterator.getNext())
    }

}