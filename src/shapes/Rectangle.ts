import {Position} from "../space/Position";
import {Alphabet, Rasterizable} from "../Rasterizable";

export class Rectangle extends Rasterizable {

    constructor(width: number, height: number) {
        super(width, height);
    }

    pixel(p: Position): Alphabet {
        if(p.x == 0 || p.y == 0 || p.x == this.width-1 || p.y == this.height-1) {
            return Alphabet.Wall;
        } else {
            return Alphabet.Floor;
        }
    }

}