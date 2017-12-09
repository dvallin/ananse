import {Room} from "./Room";
import {Alphabet, LineByLineRasterizable} from "../Rasterizable";
import {BoundingRect} from "../space/BoundingRect";

export class RoomNode extends LineByLineRasterizable<Alphabet> {
    value: Room;
    bounds: BoundingRect;
    children: Array<RoomNode>;

    constructor(room) {
        super(room.width, room.height);
        this.value = room;
        this.bounds = room.boundingRect();
        this.children = [];
    }

    contains(p: Position) {
        return this.bounds.contains(p);
    }

    addChild(child: RoomNode) {
        this.bounds = this.bounds.and(child.bounds);
        this.width = this.bounds.width();
        this.height = this.bounds.height();
        this.children.push(child);
    }

    pixel(p: Position): Alphabet {
        if(this.value.boundingRect().contains(p)) {
            return this.value.pixel(p);
        } else {
            for(const child of this.children) {
                if(child.contains(p)) {
                    return child.pixel(p);
                }
            }
        }
        return Alphabet.Empty;
    }
}