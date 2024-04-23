import { Image } from '../Interfaces'

export class RealImage implements Image {
    
    constructor(
        private imageName: string
    ){ this.loadImage()}

    loadImage(): void{
        console.log('Loading image: ', this.imageName)
    }

    display(): void {
        console.log('Image name: ', this.imageName)
    }

}