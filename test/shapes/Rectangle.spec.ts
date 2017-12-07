import {Rectangle} from "../../src/shapes/Rectangle";
import {assertRasterizable} from "../AssertionUtils";

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
        assertRasterizable(new Rectangle(0,0), 0, 0, "");
        assertRasterizable(new Rectangle(0,2), 0, 2, "");
        assertRasterizable(new Rectangle(2,0), 2, 0, "");
        assertRasterizable(new Rectangle(1,1), 1, 1, "#");
        assertRasterizable(new Rectangle(2,2), 2, 2, rectangle2x2);
        assertRasterizable(new Rectangle(3,3), 3, 3, rectangle3x3);
        assertRasterizable(new Rectangle(8,4), 8, 4, rectangle8x4);
    });
});