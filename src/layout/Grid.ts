import {Position} from "../space/Position";
import {Alphabet, Rasterizable, LineByLineRasterizable} from "../Rasterizable";
import Option from "../Option";
import {Rectangle} from "../shapes/Rectangle";
import {Room} from "./Room";

export class Grid extends Rasterizable<Alphabet> {
    gridWidth: number;
    gridHeight: number;
    cellWidth: number;
    cellHeight: number;

    grid: Array<LineByLineRasterizable<Alphabet>>;

    constructor(width: number, height: number, cellWidth: number, cellHeight) {
        super(width*cellWidth, height*cellHeight);
        this.grid = [];
        this.gridWidth = width;
        this.gridHeight = height;
        this.cellWidth = cellWidth;
        this.cellHeight = cellHeight;
    }

    at(p: Position): Option<LineByLineRasterizable<Alphabet>> {
        return Option.just(this.grid[p.index(this.gridWidth)]);
    }

    pixels(): Array<Alphabet> {
        const result = [];
        for (let y = 0; y < this.gridHeight; y++) {
            for (let cy = 0; cy < this.cellHeight; cy++) {
                for (let x = 0; x < this.gridWidth; x++) {
                    const cell = this.at(new Position(x, y));
                    for (let cx = 0; cx < this.cellWidth; cx++) {
                        result.push(cell
                            .map(c => c.pixel(new Position(cx, cy)))
                            .unwrap(Alphabet.Empty)
                        );
                    }
                }
            }
        }
        return result;
    }

    rectRoom(p: Position) {
        this.grid[p.index(this.gridWidth)] = new Room(
            p.scale(this.cellWidth, this.cellHeight),
            new Rectangle(this.cellWidth, this.cellHeight)
        );
    }
}