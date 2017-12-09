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

    abstract pixels(offset: Position): Array<T>;
}

export abstract class LineByLineRasterizable<T> extends Rasterizable<T> {
    pixels(offset: Position): Array<T> {
        const result = [];
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const p = new Position(x, y).plus(offset);
                result.push(this.pixel(p));
            }
        }
        return result;
    }

    abstract pixel(p: Position): T;
}

export class Rasterizer<T> {
    static print(printer: (a: T) => string,
                 shape: Rasterizable<T>,
                 offset: Position = Position.zero()): string {
        let s = "";
        if(shape.height == 0 || shape.width == 0) {
            return s;
        }
        const pixels = shape.pixels(offset);
        for (let y = 0; y < shape.height; y++) {
            for (let x = 0; x < shape.width; x++) {
                const p = new Position(x,y);
                s += printer(pixels[(p.index(shape.width))]);
            }
            if(y != shape.height-1) {
                s += '\n';
            }
        }
        return s;
    }
}