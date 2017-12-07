import {Alphabet, Rasterizable} from "../src/Rasterizable";

const alphabetMapping = {
    [Alphabet.Empty]: " ",
    [Alphabet.Floor]: ".",
    [Alphabet.Wall]: "#",
};

export function assertRasterizable(shape: Rasterizable, width: number, height: number, rendered: string) {
    expect(shape.print((a: Alphabet) => alphabetMapping[a])).toBe(rendered);
    expect(shape.width).toBe(width);
    expect(shape.height).toBe(height);
}