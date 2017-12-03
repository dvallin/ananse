
import {Alphabet, Shape} from "./Shape";

export class Ellipse extends Shape {
    constructor(width: number, height: number) {
        super(width, height);
    }

    pixel(x: number, y: number): Alphabet {
        const cx = this.width/2;
        const cy = this.height/2;
        if(!Ellipse.inside(x, y, cx, cy, this.width, this.height)) {
            return Alphabet.Empty;
        } else if(!Ellipse.inside(x, y, cx, cy,this.width-2, this.height-2)) {
            return Alphabet.Wall;
        } else {
            return Alphabet.Floor;
        }
    }

    static inside(x: number, y: number, cx: number, cy: number, width: number, height: number): boolean {
        const a = Math.floor(width/2);
        const b = Math.floor(height/2);
        const dx = (x+0.5) - (cx);
        const dy = (y+0.5) - (cy);
        const d = (dx*dx) / (a*a) + (dy*dy) / (b*b);
        return d <= 1.0
    }
}