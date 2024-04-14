import { INodo } from "./Nodo";

export class File implements INodo{

    constructor(
        private name: string
    ){}

    public cumple(predicado: (fileName: string) => boolean){
        return (predicado(this.name)) ? true : false;
    }

    findByCondition(predicado: (fileName: string) => boolean): INodo[] {
        let element: INodo[] = [];
        element.push(this)
        return (this.cumple(predicado)) ? element : []
    }
}