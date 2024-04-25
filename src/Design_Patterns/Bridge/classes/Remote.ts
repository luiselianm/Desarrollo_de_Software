import { Device } from "../interfaces";

export class Remote {

    constructor(
        protected device: Device
    ) { }

    public togglePower(): void {
        if (this.device.isEnabled())
            this.device.disable();
        else
            this.device.enable();

        console.log(this.device.isEnabled())
    }

    public volumeDown() {
        console.log(this.device.getVolume() - 10);
    }

    public volumeUp() {
        console.log(this.device.getVolume() + 10);
    }

    public channelDown() {
        console.log(this.device.getChannel() - 1);
    }

    public channelUp() {
        console.log(this.device.getChannel() + 1);
    }

}