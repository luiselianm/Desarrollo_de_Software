import {  Device, WeatherStation } from './classes'

let estacionDeClima = new WeatherStation([],'20 grados');
let tv = new Device('Tv', 'not assigned');
let Phone = new Device('Phone', 'not assigned');

estacionDeClima.addObserver(tv);
estacionDeClima.addObserver(Phone);
tv.display();
Phone.display();
estacionDeClima.setWeather('40 grados');