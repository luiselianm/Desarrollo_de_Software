import { OutOfStockState, ProductSelectedState, ReadyState, VendingMachineContext } from './classes'

let machine: VendingMachineContext = new VendingMachineContext(new ReadyState());

machine.request();
machine.setState(new ProductSelectedState());
machine.request();
machine.setState(new OutOfStockState());
machine.request();