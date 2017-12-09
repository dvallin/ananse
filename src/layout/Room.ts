import {Position} from "../space/Position";
import {BoundingRect} from "../space/BoundingRect";
import {Alphabet, LineByLineRasterizable} from "../Rasterizable";

export class Room extends LineByLineRasterizable<Alphabet> {
    position: Position;
    shape: LineByLineRasterizable<Alphabet>;

    constructor(position: Position, shape: LineByLineRasterizable<Alphabet>) {
        super(shape.width, shape.height);
        this.shape = shape;
        this.position = position;
    }

    center(): Position {
        return Position.inGrid(
            this.shape.width / 2 + this.position.x,
            this.shape.height / 2 + this.position.y
        );
    }

    boundingRect(): BoundingRect {
        return new BoundingRect(
            this.position.x,
            this.position.y,
            this.position.x + this.shape.width - 1,
            this.position.y + this.shape.height - 1
        );
    }

    pixel(p: Position): Alphabet {
        if(this.boundingRect().contains(p)) {
            return this.shape.pixel(p.minus(this.position));
        }
        return Alphabet.Empty;
    }
}