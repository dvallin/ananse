import {Position} from "../space/Position";
import {BoundingRect} from "../space/BoundingRect";
import {Rasterizable, Alphabet} from "../Rasterizable";

export class Room extends Rasterizable {
    position: Position;
    shape: Rasterizable;

    constructor(position: Position, shape: Rasterizable) {
        super(shape.width, shape.height);
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

    pixel(x, y): Alphabet {
        return this.shape.pixel(x, y);
    }
}