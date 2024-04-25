export interface Device{

    enabled: boolean;
    volume: number;
    channel: number;

    isEnabled(): boolean;
    enable(): void;
    disable(): void;
    getVolume(): number;
    setVolume( volume: number ): number;
    getChannel(): number;
    setChannel( channel: number ): number;

}