import { Document, DocumentHistory } from "./classes";

let originator: Document = new Document('Documento 1');
let caretaker: DocumentHistory = new DocumentHistory(originator,) 

caretaker.addMemento(originator.createMemento());
originator.setContent('Documento 2');
caretaker.addMemento(originator.createMemento());
originator.setContent('Documento 3');
caretaker.addMemento(originator.createMemento());
originator.setContent('Documento 4');

console.log(caretaker.getMementos());

console.log(caretaker.getMemento(1));

console.log(originator.getContent());