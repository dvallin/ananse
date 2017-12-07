import {Rectangle} from "../../src/shapes/Rectangle";
import {assertPixelRaster} from "../AssertionUtils";

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
        assertPixelRaster(new Rectangle(0,0), 0, 0, "");
        assertPixelRaster(new Rectangle(0,2), 0, 2, "");
        assertPixelRaster(new Rectangle(2,0), 2, 0, "");
        assertPixelRaster(new Rectangle(1,1), 1, 1, "#");
        assertPixelRaster(new Rectangle(2,2), 2, 2, rectangle2x2);
        assertPixelRaster(new Rectangle(3,3), 3, 3, rectangle3x3);
        assertPixelRaster(new Rectangle(8,4), 8, 4, rectangle8x4);
    });
});