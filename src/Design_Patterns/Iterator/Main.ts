import { Menu } from "./interfaces";
import { DinerMenu } from './classes'
import { Waitress } from "./classes";
let menu: Menu = new DinerMenu(['Hamburguesa', 'Pabellon', 'Pasticho', 'Perro Caliente']);
let waitress: Waitress = new Waitress(menu);
waitress.printMenu()