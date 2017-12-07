import {assertPixelRaster} from "../AssertionUtils";
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
        assertPixelRaster(new Ellipse(0,0), 0, 0, "");
        assertPixelRaster(new Ellipse(0,2), 0, 2, "");
        assertPixelRaster(new Ellipse(2,0), 2, 0, "");
        assertPixelRaster(new Ellipse(3,3), 3, 3, e33);
        assertPixelRaster(new Ellipse(4,4), 4, 4, e44);
        assertPixelRaster(new Ellipse(20,6), 20, 6, e206);
    });
});