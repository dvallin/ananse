import {Hexagon} from "../../src/shapes/Hexagon";
import {assertPixelRaster} from "../AssertionUtils";

// w: 4, h: 3
const hex2 = ` # 
#.#
#.#
 # `;
// w: 5, h: 7
const hex3 =
    `  #  
 #.# 
#...#
#...#
#...#
 #.# 
  #  `;
// w: 7, h: 10
const hex4 = `   #   
  #.#  
 #...# 
#.....#
#.....#
#.....#
#.....#
 #...# 
  #.#  
   #   `;

// w: 4, h: 3
const hex2_f = ` ## 
#..#
 ## `;
// w: 7, h: 5
const hex3_f = `  ###  
 #...# 
#.....#
 #...# 
  ###  `;
// w: 10, h: 7
const hex4_f = `   ####   
  #....#  
 #......# 
#........#
 #......# 
  #....#  
   ####   `;

describe("Hexagon", () => {
    it("generates a Hexagon", () => {
        assertPixelRaster(new Hexagon(0), 0, 0, "");
        assertPixelRaster(new Hexagon(1), 1, 1, "#");
        assertPixelRaster(new Hexagon(2), 3, 4, hex2);
        assertPixelRaster(new Hexagon(3), 5, 7, hex3);
        assertPixelRaster(new Hexagon(4), 7, 10, hex4);
        assertPixelRaster(new Hexagon(0, true), 0, 0, "");
        assertPixelRaster(new Hexagon(1, true), 1, 1, "#");
        assertPixelRaster(new Hexagon(2, true), 4, 3, hex2_f);
        assertPixelRaster(new Hexagon(3, true), 7, 5, hex3_f);
        assertPixelRaster(new Hexagon(4, true), 10, 7, hex4_f);
    })
});