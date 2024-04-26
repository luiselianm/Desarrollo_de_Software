import { VendingMachineState } from "../interfaces";

export class ProductSelectedState implements VendingMachineState{
    
    handleRequest(): void {
        console.log('The product has been selected.')
    }

}