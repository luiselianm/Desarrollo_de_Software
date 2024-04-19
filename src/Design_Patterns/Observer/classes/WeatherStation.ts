import { Observer, Subject } from "../interfaces";

export class WeatherStation implements Subject{
    
    constructor(
        private observers:Observer[],
        private weather: string
    ){}

    public addObserver(observer: Observer){
        this.observers.push(observer)
    }

    public removeObserver(observerToRemove: Observer){
        this.observers = this.observers.filter(
            observer => observer !== observerToRemove
        )
    }

    public notifyObservers(){
        this.observers.forEach(
            observer => observer.update(this.weather)
        )
    }

    public setWeather(weather: string){
        this.weather = weather;
        this.notifyObservers()
    }
}