import {Position} from "../space/Position";
import {Alphabet, Rasterizable, rasterizeLR} from "../Rasterizable";

export class Octagon extends Rasterizable {
    side: number;

    constructor(side: number) {
        const width = Math.max(side + 2*(side -1), 0);
        super(width, width);

        this.side = side;
    }

    pixel(p: Position): Alphabet {
        let index;
        if(p.y < this.height / 3) {
            index = p.y;
        } else if (p.y >= 2 * this.height / 3 ){
            index = this.height - p.y - 1;
        } else {
            index = this.side - 1;
        }
        let outer = this.side - 1 - index;
        let inner = this.side + 2 * index;
        return rasterizeLR(p, outer, outer + inner - 1, index == 0);
    }
}