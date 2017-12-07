import {Alphabet, Rasterizable} from "../Rasterizable";
import {EmptyCell} from "./EmptyCell";

export class Grid extends Rasterizable {
    emptyCell: EmptyCell;
    grid: Array<Rasterizable>;

    constructor(width: number, height: number, cellWidth: number, cellHeight) {
        super(width*cellWidth, height*cellHeight);
        this.grid = [];
        this.emptyCell = new EmptyCell(cellWidth,cellHeight);
    }

    at(x: number, y: number): Rasterizable {
        return this.grid[x + y*this.width] || this.emptyCell;
    }

    pixel(x: number, y: number): Alphabet {
        return this.at(x,y).pixel(x, y);
    }

    rectRoom(x: number, y: number) {

    }
}