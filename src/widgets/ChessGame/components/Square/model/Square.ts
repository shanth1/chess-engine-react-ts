import { Colors, PieceCodes } from "widgets/ChessGame/types/enums";
import { FileCoordinates } from "../types/enums";

const fileCoordinates: Array<FileCoordinates> = [
    FileCoordinates.A,
    FileCoordinates.B,
    FileCoordinates.C,
    FileCoordinates.D,
    FileCoordinates.E,
    FileCoordinates.F,
    FileCoordinates.G,
    FileCoordinates.H,
];

export class Square {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;

    piece: PieceCodes;

    constructor(
        index: number,
        color: Colors,
        file: number,
        rank: number,
        piece: PieceCodes = PieceCodes.NONE,
    ) {
        this.index = index;
        this.color = color;
        this.name = `${fileCoordinates[file]}${rank + 1}`;
        this.piece = piece;
    }
}
