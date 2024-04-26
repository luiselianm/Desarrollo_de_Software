import { VendingMachineState } from '../interfaces'

export class VendingMachineContext {
    constructor(
        private state: VendingMachineState
    ) { }

    public setState(state: VendingMachineState){
        this.state = state;
    }

    public request(){
        this.state.handleRequest();
    }

}