import {Shape} from "../../src/shapes/Shape";

export function assertShape(shape: Shape, width: number, height: number, rendered: string) {
    expect(shape.print("#", ".", " ")).toBe(rendered);
    expect(shape.width).toBe(width);
    expect(shape.height).toBe(height);
}