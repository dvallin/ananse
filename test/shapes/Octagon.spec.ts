import {Octagon} from "../../src/shapes/Octagon";
import {assertRasterizable} from "../AssertionUtils";

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
        assertRasterizable(new Octagon(0), 0, 0, "");
        assertRasterizable(new Octagon(1), 1, 1, "#");
        assertRasterizable(new Octagon(2), 4, 4, octagon2);
        assertRasterizable(new Octagon(3), 7, 7, octagon3);
        assertRasterizable(new Octagon(4), 10, 10, octagon4);
    });
});