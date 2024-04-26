import { VendingMachineState } from '../interfaces'

export class OutOfStockState implements VendingMachineState {
    
    handleRequest(): void {
        console.log('The machine is out of stock')
    }

}