import { VendingMachineState } from "../interfaces";

export class ReadyState implements VendingMachineState{

    handleRequest(): void {
        console.log('The machine is ready to process your order')
    }

}