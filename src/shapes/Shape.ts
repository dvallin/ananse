export enum Alphabet {
    Wall,
    Floor,
    Empty,
}

export abstract class Shape {
    public width: number;
    public height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    print(wall: string, floor: string, empty: string): string {
        let s = "";
        if(this.height == 0 || this.width == 0) {
            return s;
        }
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                switch(this.pixel(x, y)) {
                    case Alphabet.Empty:
                        s += empty;
                        break;
                    case Alphabet.Floor:
                        s += floor;
                        break;
                    case Alphabet.Wall:
                        s += wall;
                        break;
                }
            }
            if(y != this.height-1) {
                s += '\n';
            }
        }
        return s;
    }

    abstract pixel(x, y): Alphabet;
}