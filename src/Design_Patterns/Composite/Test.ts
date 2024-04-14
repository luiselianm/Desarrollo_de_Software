import { File } from "./File";
import { Folder } from "./Folder";

let user: Folder = new Folder([]);
let documents: Folder = new Folder([]);
let doc1: File = new File('Documento 1');
let doc2: File = new File('Documento 2');
let docNoCumple = new File('');

user.setElement(documents);
user.setElement(doc1);
documents.setElement(doc2);
documents.setElement(docNoCumple);


console.log(user.findByCondition( 
    (fileName: string) => {
    return (fileName.length >= 1) ? true : false} 
))