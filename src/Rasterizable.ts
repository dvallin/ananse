import {Position} from "./space/Position";

export enum Alphabet {
    Floor,
    Wall,
    Empty,
}

export function rasterizeLR(p: Position, left: number, right: number, full: boolean) {
    if(p.x < left) {
        return Alphabet.Empty;
    } else if (p.x == left) {
        return Alphabet.Wall;
    } else if (p.x <= right) {
        if(full || p.x == right) {
            return Alphabet.Wall;
        } else {
            return Alphabet.Floor;
        }
    } else {
        return Alphabet.Empty;
    }
}

export abstract class Rasterizable {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    print(printer: (a: Alphabet) => string): string {
        let s = "";
        if(this.height == 0 || this.width == 0) {
            return s;
        }
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                s += printer(this.pixel(new Position(x, y)));
            }
            if(y != this.height-1) {
                s += '\n';
            }
        }
        return s;
    }

    abstract pixel(p: Position): Alphabet;
}