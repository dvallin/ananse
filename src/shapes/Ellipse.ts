import {Position} from "../space/Position";
import {Alphabet, Rasterizable} from "../Rasterizable";

export class Ellipse extends Rasterizable {
    constructor(width: number, height: number) {
        super(width, height);
    }

    pixel(p: Position): Alphabet {
        const c = new Position(this.width/2, this.height/2);
        if(!Ellipse.inside(p, c, this.width, this.height)) {
            return Alphabet.Empty;
        } else if(!Ellipse.inside(p, c,this.width-2, this.height-2)) {
            return Alphabet.Wall;
        } else {
            return Alphabet.Floor;
        }
    }

    static inside(p: Position, c: Position, width: number, height: number): boolean {
        const a = Math.floor(width/2);
        const b = Math.floor(height/2);
        const dx = (p.x+0.5) - c.x;
        const dy = (p.y+0.5) - c.y;
        const d = (dx*dx) / (a*a) + (dy*dy) / (b*b);
        return d <= 1.0
    }
}