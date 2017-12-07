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

    static inGrid(x: number, y: number): Position {
        return new Position(Math.floor(x), Math.floor(y));
    }
}