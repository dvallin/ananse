import {Position} from "./space/Position";

export enum Alphabet {
    Empty,
    Wall,
    Floor,
}

export function rasterizeLR(p: Position, left: number, right: number, full: boolean): Alphabet {
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

export abstract class Rasterizable<T> {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    print(printer: (a: T) => string): string {
        let s = "";
        if(this.height == 0 || this.width == 0) {
            return s;
        }
        const pixels = this.pixels();
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                s += printer(pixels[(new Position(x, y).index(this.width))]);
            }
            if(y != this.height-1) {
                s += '\n';
            }
        }
        return s;
    }

    abstract pixels(): Array<T>;
}

export abstract class LineByLineRasterizable<T> extends Rasterizable<T> {
    pixels(): Array<T> {
        const result = [];
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                result.push(this.pixel(new Position(x,y));
            }
        }
        return result;
    }

    abstract pixel(p: Position): T;
}