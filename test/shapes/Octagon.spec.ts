import {Octagon} from "../../src/shapes/Octagon";
import {assertShape} from "./ShapeUtils";

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
        assertShape(new Octagon(0), 0, 0, "");
        assertShape(new Octagon(1), 1, 1, "#");
        assertShape(new Octagon(2), 4, 4, octagon2);
        assertShape(new Octagon(3), 7, 7, octagon3);
        assertShape(new Octagon(4), 10, 10, octagon4);
    });
});