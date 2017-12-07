import {Alphabet, Rasterizable} from "../Rasterizable";

export class EmptyCell extends Rasterizable {
    pixel(x, y): Alphabet {
        return Alphabet.Empty;
    }
}