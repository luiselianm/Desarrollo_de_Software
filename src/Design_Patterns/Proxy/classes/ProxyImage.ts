import { Image } from "../Interfaces";
import { RealImage } from "./";

export class ProxyImage implements Image{

    constructor(
        private imageName: string,
        private realImage?: RealImage
    ){}

    display(): void {
        if (!this.realImage) this.realImage = new RealImage(this.imageName);
        this.realImage.display();
    }

}