import {Position} from "../../src/space/Position";

function assertXandY(value: number, toBe: number) {
    expect(new Position(value, value).x).toBe(toBe);
    expect(new Position(value, value).y).toBe(toBe);
}

describe("Position", () => {
    it("represents coordinates", () => {
        assertXandY(0, 0);
        assertXandY(1, 1);
    });

    it("represents a position on the grid", () => {
        assertXandY(0.5, 0);
        assertXandY(1.5, 1);
    });

    it("represents a position on the grid even for negatives numbers", () => {
        assertXandY(-1, -1);
        assertXandY(-0.5, -1);
        assertXandY(-1.5, -2);
    });
});