import {Room} from "../../src/layout/Room";

import {Rectangle} from "../../src/shapes/Rectangle";
import {Position} from "../../src/space/Position";
import {BoundingRect} from "../../src/space/BoundingRect";
import {assertPixelRaster, assertRoomRender} from "../AssertionUtils";

const r5x5 = `#####
#...#
#...#
#...#
#####`;
const r5x5_not_translated = `     
     
  ###
  #..
  #..`;

describe("Room", () => {
    it("has a center and bounding rect", () => {
        const r = new Room(new Position(2, 2), new Rectangle(5, 5));
        expect(r.center()).toEqual(new Position(4, 4));
        expect(r.boundingRect()).toEqual(new BoundingRect(2, 2, 6, 6));
        assertRoomRender(r, 5,5, r5x5);
        assertPixelRaster(r, 5,5, r5x5_not_translated);
    });
});