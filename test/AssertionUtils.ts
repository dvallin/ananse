import {Alphabet, Rasterizable, Rasterizer} from "../src/Rasterizable";
import {Room} from "../src/layout/Room";

const pixels = {
    [Alphabet.Empty]: " ",
    [Alphabet.Floor]: ".",
    [Alphabet.Wall]: "#",
};

export function assertPixelRaster(shape: Rasterizable, width: number, height: number, rendered: string) {
    expect(Rasterizer.print(
        (a: Alphabet) => pixels[a],
        shape
    )).toBe(rendered);
    expect(shape.width).toBe(width);
    expect(shape.height).toBe(height);
}

export function assertRoomRender(shape: Room, width: number, height: number, rendered: string) {
    expect(Rasterizer.print(
        (a: Alphabet) => pixels[a],
        shape,
        shape.position
    )).toBe(rendered);
    expect(shape.width).toBe(width);
    expect(shape.height).toBe(height);
}