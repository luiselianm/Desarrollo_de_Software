import { SortingStrategy } from "../interfaces";

export class QuickSort implements SortingStrategy{
    
    sort(numeros: number[]): void {
        console.log('Quick sort executed!');
        console.log(numeros);
    }

}