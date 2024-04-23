import { Image } from "./Interfaces";
import { ProxyImage } from "./classes";

let image: Image = new ProxyImage('imagen.jpg');

image.display();
image.display();