import {Alphabet, Rasterizable} from "../Rasterizable";
import {EmptyCell} from "./EmptyCell";

export class Grid extends Rasterizable {
    emptyCell: EmptyCell;
    grid: Array<Rasterizable>;

    constructor(width: number, height: number) {
        super(width, height);
        this.grid = [];
        this.emptyCell = new EmptyCell(1,1);
    }

    at(x, y): Rasterizable {
        return this.grid[x + y*this.width] || this.emptyCell;
    }

    pixel(x, y): Alphabet {
        return this.at(x,y).pixel(x, y);
    }
}