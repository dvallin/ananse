import {Rectangle} from "../../src/shapes/Rectangle";
import {assertShape} from "./ShapeUtils";

const rectangle2x2 = `##
##`;

const rectangle3x3 = `###
#.#
###`;

const rectangle8x4 = `########
#......#
#......#
########`;


describe("rectangle", () => {
    it("generates a rectangle", () => {
        assertShape(new Rectangle(0,0), 0, 0, "");
        assertShape(new Rectangle(0,2), 0, 2, "");
        assertShape(new Rectangle(2,0), 2, 0, "");
        assertShape(new Rectangle(1,1), 1, 1, "#");
        assertShape(new Rectangle(2,2), 2, 2, rectangle2x2);
        assertShape(new Rectangle(3,3), 3, 3, rectangle3x3);
        assertShape(new Rectangle(8,4), 8, 4, rectangle8x4);
    });
});