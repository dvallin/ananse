import {Position} from "../space/Position";
import {Alphabet, LineByLineRasterizable, rasterizeLR} from "../Rasterizable";

export class Hexagon extends LineByLineRasterizable<Alphabet> {
    side: number;
    flat: boolean;

    constructor(side: number, flat: boolean = false) {
        const width = Math.max((side-1) * 2 + (flat ? side : 1), 0);
        const height = Math.max((side-1) * 2 + (flat ? 1 : side), 0);
        super(width, height);

        this.flat = flat;
        this.side = side;
    }

    pixel(p: Position): Alphabet {
        // if not flat rotate is if it was flat.
        if (this.flat) {
            return this.flatPixel(p, this.height);
        } else {
            return this.flatPixel(p.flip(), this.width);
        }
    }

    private flatPixel(p: Position, lines: number): Alphabet {
        let index;
        if(p.y < lines / 2) {
            index = p.y;
        } else {
            index = lines - p.y - 1;
        }
        let outer = this.side - 1 - index;
        let inner = this.side + 2 * index;
        return rasterizeLR(p, outer, outer + inner - 1, index == 0);
    }
}