import { INodo } from "./Nodo";

export class Folder implements INodo{

    constructor(
        private elements: INodo[]
    ){}

    public setElement(element: INodo){
        this.elements.push(element)
    }

    public findByCondition(predicado: (fileName: string) => boolean): INodo[] {
        let filesWithCondition : INodo[] = []
        this.elements.forEach( element => {
            const elementsWithCondition = element.findByCondition(predicado);
            elementsWithCondition.forEach(element => {
                filesWithCondition.push(element)
            })
        })
        return filesWithCondition;
    }
}