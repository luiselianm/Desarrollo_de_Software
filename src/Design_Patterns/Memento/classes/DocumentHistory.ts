import { Document } from "./Document";
import { DocumentMemento } from "./DocumentMemento";

export class DocumentHistory{

    constructor(
        private originator: Document,
        private history: DocumentMemento[] = []
    ){}

    public addMemento(memento: DocumentMemento): void{
        this.history.push(memento)
    }

    public getMementos(): DocumentMemento[]{
        return this.history
    }

    public getMemento(index: number): DocumentMemento{
        return this.history[index]
    }

    public getOriginator(): Document{
        return this.originator
    }

}