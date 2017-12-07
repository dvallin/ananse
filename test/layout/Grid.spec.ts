import {Position} from "../../src/space/Position";
import {Grid} from "../../src/layout/Grid";
import {assertPixelRaster} from "../AssertionUtils";

const empty2x2 = `  
  `;
const grid1 = `         
         
         
   ###   
   #.#   
   ###   
   ######
   #.##.#
   ######`;

describe("Grid", () => {
    it("initializes empty", () => {
        assertPixelRaster(new Grid(0,0,0,0), 0, 0, "");
        assertPixelRaster(new Grid(1,1,1,1), 1, 1, " ");
        assertPixelRaster(new Grid(1,1,2,2), 2, 2, empty2x2);
        assertPixelRaster(new Grid(2,2,1,1), 2, 2, empty2x2);
    });

    it("", () => {
        const g = new Grid(3,3,3,3);
        g.rectRoom(new Position(1,1));
        g.rectRoom(new Position(2,2));
        g.rectRoom(new Position(1,2));
        assertPixelRaster(g, 9, 9, grid1);
    });
});