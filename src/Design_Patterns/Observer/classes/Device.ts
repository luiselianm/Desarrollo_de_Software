import { Observer } from "../interfaces";

export class Device implements Observer{
    
    constructor(
        private name: string,
        private weather: string
    ){}

    public display(){
        console.log(`${this.name}: The weather is ${this.weather}`);
    }

    public update(weather: string){
        this.weather = weather;
        this.display();
    }

}