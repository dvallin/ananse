import {Octagon} from "../../src/shapes/Octagon";
import {assertPixelRaster} from "../AssertionUtils";

const octagon2 = ` ## 
#..#
#..#
 ## `;

const octagon3 = `  ###  
 #...# 
#.....#
#.....#
#.....#
 #...# 
  ###  `;

const octagon4 = `   ####   
  #....#  
 #......# 
#........#
#........#
#........#
#........#
 #......# 
  #....#  
   ####   `;


describe("octagon", () => {
    it("generates an octagon", () => {
        assertPixelRaster(new Octagon(0), 0, 0, "");
        assertPixelRaster(new Octagon(1), 1, 1, "#");
        assertPixelRaster(new Octagon(2), 4, 4, octagon2);
        assertPixelRaster(new Octagon(3), 7, 7, octagon3);
        assertPixelRaster(new Octagon(4), 10, 10, octagon4);
    });
});