import {Position} from "../../src/space/Position";

function assertXandY(value: number, toBe: number) {
    expect(new Position(value, value).x).toBe(toBe);
    expect(new Position(value, value).y).toBe(toBe);
}

function assertGridXandY(value: number, toBe: number) {
    expect(Position.inGrid(value, value).x).toBe(toBe);
    expect(Position.inGrid(value, value).y).toBe(toBe);
}


describe("Position", () => {
    it("represents coordinates", () => {
        assertXandY(0, 0);
        assertXandY(1, 1);
    });

    it("represents a position on the grid", () => {
        assertGridXandY(0.5, 0);
        assertGridXandY(1.5, 1);
    });

    it("represents a position on the grid even for negatives numbers", () => {
        assertGridXandY(-1, -1);
        assertGridXandY(-0.5, -1);
        assertGridXandY(-1.5, -2);
    });
});