import { Device } from '../interfaces'
import { Remote } from './Remote'

export class AdvancedRemote extends Remote {

    constructor(
        device: Device
    ){
        super(device)
    }

    public mute(): number{
        return this.device.setVolume(0)
    }

}