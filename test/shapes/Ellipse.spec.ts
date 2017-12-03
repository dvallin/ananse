import {assertShape} from "./ShapeUtils";
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
        assertShape(new Ellipse(0,0), 0, 0, "");
        assertShape(new Ellipse(0,2), 0, 2, "");
        assertShape(new Ellipse(2,0), 2, 0, "");
        assertShape(new Ellipse(3,3), 3, 3, e33);
        assertShape(new Ellipse(4,4), 4, 4, e44);
        assertShape(new Ellipse(20,6), 20, 6, e206);
    });
});