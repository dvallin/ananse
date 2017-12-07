export enum Alphabet {
    Room,
    Corridor,
    Floor,
    Wall,
    Empty,
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
                s += printer(this.pixel(x, y));
            }
            if(y != this.height-1) {
                s += '\n';
            }
        }
        return s;
    }

    abstract pixel(x, y): Alphabet;
}