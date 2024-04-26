import { SortingStrategy } from "../interfaces";

export class SortingContext{

    constructor(
        private sortingStrategy: SortingStrategy,
        private numbers: number[]
    ){}

    public setSortingStrategy(sortingStrategy: SortingStrategy): void{
        this.sortingStrategy = sortingStrategy;
    }

    public performSort(){
        this.sortingStrategy.sort(this.numbers)
    }

}