import { AdvancedRemote, Tv } from "./classes";

let tv: Tv = new Tv();
let control: AdvancedRemote = new AdvancedRemote(tv);

console.log(control.togglePower())
console.log(control.channelDown())
console.log(control.volumeUp())
console.log(control.mute())