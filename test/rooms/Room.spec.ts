import {Room} from "../../src/rooms/Room";

import {Rectangle} from "../../src/shapes/Rectangle";
import {Position} from "../../src/space/Position";
import {BoundingRect} from "../../src/space/BoundingRect";

describe("Room", () => {
    it("has a center and bounding rect", () => {
        const r = new Room(new Position(2, 2), new Rectangle(5, 5));
        expect(r.center()).toEqual(new Position(4, 4));
        expect(r.boundingRect()).toEqual(new BoundingRect(2, 2, 7, 7));
    });
});