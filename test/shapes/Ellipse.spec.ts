import {assertRasterizable} from "../AssertionUtils";
import {Ellipse} from "../../src/shapes/Ellipse";

const e33 =
` # 
###
 # `;

const e44 =
` ## 
#..#
#..#
 ## `;

const e206 =
`    ############    
 ###............### 
#..................#
#..................#
 ###............### 
    ############    `;

describe("Ellipse", () => {
    it("generates an Ellipse", () => {
        assertRasterizable(new Ellipse(0,0), 0, 0, "");
        assertRasterizable(new Ellipse(0,2), 0, 2, "");
        assertRasterizable(new Ellipse(2,0), 2, 0, "");
        assertRasterizable(new Ellipse(3,3), 3, 3, e33);
        assertRasterizable(new Ellipse(4,4), 4, 4, e44);
        assertRasterizable(new Ellipse(20,6), 20, 6, e206);
    });
});