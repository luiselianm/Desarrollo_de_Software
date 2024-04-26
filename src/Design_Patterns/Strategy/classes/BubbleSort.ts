import { SortingStrategy } from "../interfaces";

export class BubbleSort implements SortingStrategy{
    
    sort(numeros: number[]): void {
        console.log('Bubble sort executed!');
        console.log(numeros);
    }

}