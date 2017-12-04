import {Position} from "./Position";

export class BoundingRect {
    topLeft: Position;
    bottomRight: Position;

    constructor(left: number, top: number, right: number, bottom: number) {
        this.topLeft = new Position(left, top);
        this.bottomRight = new Position(right, bottom);
    }
}