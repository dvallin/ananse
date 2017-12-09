import {BoundingRect} from "../../src/space/BoundingRect";
import {Position} from "../../src/space/Position";

const x0y0 = Position.zero();
const x05y05 = new Position(0.5,0.5);
const x1y1 = new Position(1,1);
const xm1ym1 = new Position(-1,-1);
function assertContainement(b: BoundingRect, p0: boolean,
                            p1: boolean, p2: boolean, p3: boolean) {
    expect(b.contains(x0y0)).toBe(p0);
    expect(b.contains(x05y05)).toBe(p1);
    expect(b.contains(x1y1)).toBe(p2);
    expect(b.contains(xm1ym1)).toBe(p3);
}

describe("BoundingRect", () => {
   describe("empty", () => {
       it("contains no values", () => {
           assertContainement(BoundingRect.empty(),
               false, false, false, false);
       });
       it("does not change on add", () => {
           const a = new BoundingRect(10,10,10,10);
           expect(BoundingRect.empty().and(a)).toEqual(a);

           const b = new BoundingRect(-10,-10,10,10);
           expect(BoundingRect.empty().and(b)).toEqual(b);

           const c = new BoundingRect(-10,-10,-10,-10);
           expect(BoundingRect.empty().and(c)).toEqual(c);
       });
       it("has no height and width", () => {
           expect(BoundingRect.empty().width()).toBe(0);
           expect(BoundingRect.empty().height()).toBe(0);
       });
   });
   it("correctly finds contained values", () => {
       assertContainement( new BoundingRect(0,0,0,0),
           true, false, false, false);
       assertContainement(new BoundingRect(0,0,0.5,0.5),
           true, true, false, false);
       assertContainement(new BoundingRect(0.5,0.5,0.5,0.5),
           false, true, false, false);
       assertContainement(new BoundingRect(0.5,0.5,1.5,1.5),
           false, true, true, false);
       assertContainement(new BoundingRect(-1,-1,1,1),
           true, true, true, true);
   });

   it("ands with other bound rect", () => {
       const b0 = new BoundingRect(0,0,0,0);
       const b1 = new BoundingRect(1,1,1,1);
       const b01 = new BoundingRect(0,0,1,1);
       expect(b0.and(b1)).toEqual(b01);
   });

    it("correctly gives width and height", () => {
        const b0 = new BoundingRect(0,0,0,0);
        const b1 = new BoundingRect(1,1,1,1);
        const b2 = new BoundingRect(0,-1,1,0);
        expect(b0.width()).toBe(1);
        expect(b0.height()).toBe(1);
        expect(b1.width()).toBe(1);
        expect(b1.height()).toBe(1);
        expect(b2.width()).toBe(2);
        expect(b2.height()).toBe(2);
    });
});