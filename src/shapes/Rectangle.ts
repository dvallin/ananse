import {Alphabet, Rasterizable} from "../Rasterizable";

export class Rectangle extends Rasterizable {

    constructor(width: number, height: number) {
        super(width, height);
    }

    pixel(x, y): Alphabet {
        if(x == 0 || y == 0 || x == this.width-1 || y == this.height-1) {
            return Alphabet.Wall;
        } else {
            return Alphabet.Floor;
        }
    }

}