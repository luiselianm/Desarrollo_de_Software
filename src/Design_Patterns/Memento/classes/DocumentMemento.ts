export class DocumentMemento{

    constructor(        
        private content: string
    ){}

    public getContent(): string{
        return this.content;
    }

}