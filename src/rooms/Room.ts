import {Shape} from "../shapes/Shape";
import {Position} from "../space/Position";
import {BoundingRect} from "../space/BoundingRect";

export class Room {
    position: Position;
    shape: Shape;

    constructor(position: Position, shape: Shape) {
        this.shape = shape;
        this.position = position;
    }

    center(): Position {
        return new Position(
            this.shape.width / 2 + this.position.x,
            this.shape.height / 2 + this.position.y
        );
    }

    boundingRect(): BoundingRect {
        return new BoundingRect(
            this.position.x,
            this.position.y,
            this.position.x + this.shape.width,
            this.position.y + this.shape.height
        );
    }
}