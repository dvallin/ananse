
import {Alphabet, Shape} from "./Shape";

export class Octagon extends Shape {
    side: number;

    constructor(side: number) {
        const width = Math.max(side + 2*(side -1), 0);
        super(width, width);

        this.side = side;
    }

    pixel(x, y): Alphabet {
        let index;
        if(y < this.height / 3) {
            index = y;
        } else if (y >= 2 * this.height / 3 ){
            index = this.height - y - 1;
        } else {
            index = this.side - 1;
        }

        let outer = this.side - 1 - index;
        let inner = this.side + 2 * index;

        if(x < outer) {
            return Alphabet.Empty;
        } else if (x == outer) {
            return Alphabet.Wall;
        } else if (x < outer + inner) {
            if(index == 0 || x == outer + inner - 1) {
                return Alphabet.Wall;
            } else {
                return Alphabet.Floor;
            }
        } else {
            return Alphabet.Empty;
        }
    }
}