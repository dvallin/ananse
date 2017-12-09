import {RoomNode} from "../../src/layout/RoomNode";
import {Room} from "../../src/layout/Room";
import {Position} from "../../src/space/Position";
import {Rectangle} from "../../src/shapes/Rectangle";
import {assertPixelRaster} from "../AssertionUtils";
import {Rasterizable} from "../../src/Rasterizable";

const rectangle3x3 = `###
#.#
###`;

const hubAndRect = `#####
#...#
#.#.#
#...#
#####`;

const star = `  #  
 ### 
##.##
 ### 
  #  `;

function createNode<T>(p: Position, s: Rasterizable<T>) {
    return new RoomNode(new Room(p, s));
}

describe("RoomNode", () => {
    it("renders its value", () => {
        const room = new Room(Position.zero(), new Rectangle(3, 3));
        const node = new RoomNode(room);
        assertPixelRaster(node, 3, 3, rectangle3x3);
    });

    it("renders children on inside", () => {
        const hub = new Room(new Position(2,2), new Rectangle(1, 1));
        const room = new Room(Position.zero(), new Rectangle(5, 5));
        const node = new RoomNode(room);
        const parent = new RoomNode(hub);
        parent.addChild(node);

        assertPixelRaster(parent, 5, 5, hubAndRect);
    });

    it("renders children on outside and expands bounds", () => {
        const hub = createNode(new Position(1,1), new Rectangle(3, 3));
        hub.addChild(
            createNode(new Position(0,2), new Rectangle(1, 1))
        );
        hub.addChild(
            createNode(new Position(4,2), new Rectangle(1, 1))
        );
        hub.addChild(
            createNode(new Position(2,0), new Rectangle(1, 1))
        );
        hub.addChild(
            createNode(new Position(2,4), new Rectangle(1, 1))
        );
        assertPixelRaster(hub, 5, 5, star);
    });
});
