
import {Alphabet, Shape} from "./Shape";

export class Hexagon extends Shape {
    side: number;
    flat: boolean;

    constructor(side: number, flat: boolean = false) {
        const width = Math.max((side-1) * 2 + (flat ? side : 1), 0);
        const height = Math.max((side-1) * 2 + (flat ? 1 : side), 0);
        super(width, height);

        this.flat = flat;
        this.side = side;
    }

    pixel(x, y): Alphabet {
        if (this.flat) {
            return this.alignedPixel(x, y, this.height);
        } else {
            return this.alignedPixel(y, x, this.width);
        }
    }

    alignedPixel(x: number, y: number, lines: number): Alphabet {
        let index;
        if(y < lines / 2) {
            index = y;
        } else {
            index = lines - y - 1;
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