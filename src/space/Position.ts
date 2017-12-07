export class Position {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    flip(): Position {
        return new Position(this.y, this.x);
    }

    index(lineWidth: number): number {
        return this.x + this.y*lineWidth;
    }

    scale(x: number, y: number): Position {
        return new Position(this.x * x, this.y * y);
    }

    static inGrid(x: number, y: number): Position {
        return new Position(Math.floor(x), Math.floor(y));
    }
}