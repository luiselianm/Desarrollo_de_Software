import { DocumentMemento } from "./DocumentMemento";

export class Document{

    constructor(
        private content: string
    ){}

    public setContent(content: string): void{
        this.content = content;
    }

    public getContent(): string{
        return this.content;
    }

    public createMemento(): DocumentMemento{
        return new DocumentMemento(this.content)
    }

    public restoreFromMemento(memento: DocumentMemento){
        this.content = memento.getContent();
    }  

}