import { Device } from "../interfaces";

export class Tv implements Device {

    enabled: boolean;
    volume: number;
    channel: number;

    constructor(
        enabled: boolean = false,
        volume: number = 30,
        channel: number = 10
    ) {
        this.enabled = enabled;
        this.channel = channel;
        this.volume = volume;
    }

    isEnabled(): boolean {
        return this.enabled;
    }

    enable(): void {
        this.enabled = true;
    }

    disable(): void {
        this.enabled = false;
    }

    getVolume(): number {
        return this.volume;
    }
    setVolume(volume: number): number {
        return this.volume = volume;
    }
    getChannel(): number {
        return this.channel
    }
    setChannel(channel: number): number {
        return this.channel = channel;
    }

}