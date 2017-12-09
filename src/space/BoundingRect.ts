import {Position} from "./Position";

export class BoundingRect {
    topLeft: Position;
    bottomRight: Position;

    contains(p: Position): boolean{
        return (p.x >= this.topLeft.x && p.x <= this.bottomRight.x)
            && (p.y >= this.topLeft.y && p.y <= this.bottomRight.y);
    }

    static empty(): BoundingRect {
        const c = Number.MAX_VALUE;
        return new BoundingRect(c,c,-c,-c);
    }

    and(other: BoundingRect): BoundingRect {
        return new BoundingRect(
            Math.min(this.topLeft.x, other.topLeft.x),
            Math.min(this.topLeft.y, other.topLeft.y),
            Math.max(this.bottomRight.x, other.bottomRight.x),
            Math.max(this.bottomRight.y, other.bottomRight.y),
        );
    }

    width(): number {
        return Math.max(this.bottomRight.x - this.topLeft.x + 1, 0);
    }

    height(): number {
        return Math.max(this.bottomRight.y - this.topLeft.y + 1, 0);
    }

    constructor(left: number, top: number, right: number, bottom: number) {
        this.topLeft = new Position(left, top);
        this.bottomRight = new Position(right, bottom);
    }
}