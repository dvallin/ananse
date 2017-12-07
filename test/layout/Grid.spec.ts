import {Grid} from "../../src/layout/Grid";
import {assertRasterizable} from "../AssertionUtils";

const empty2x2 = `  
  `;

describe("Grid", () => {
    it("initializes empty", () => {
        assertRasterizable(new Grid(0,0), 0, 0, "");
        assertRasterizable(new Grid(1,1), 1, 1, " ");
        assertRasterizable(new Grid(2,2), 2, 2, empty2x2);
    });

    it("", () => {
        const g = new Grid(8,8);
    });
});