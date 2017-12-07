import {Alphabet, Rasterizable} from "../src/Rasterizable";

const pixels = {
    [Alphabet.Empty]: " ",
    [Alphabet.Floor]: ".",
    [Alphabet.Wall]: "#",
};

export function assertPixelRaster(shape: Rasterizable, width: number, height: number, rendered: string) {
    expect(shape.print((a: Alphabet) => pixels[a])).toBe(rendered);
    expect(shape.width).toBe(width);
    expect(shape.height).toBe(height);
}