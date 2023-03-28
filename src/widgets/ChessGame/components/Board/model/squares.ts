import { getFileName } from "./../../../lib/indexToNameConverter/fileNames";
import { Colors, PieceTypes } from "widgets/ChessGame/types/enums";
import { ISquare } from "widgets/ChessGame/types/interfaces";

const squares: Array<ISquare> = [];
let index: number = 0;

for (let rank: number = 7; rank >= 0; rank--) {
    for (let file: number = 0; file < 8; file++) {
        const color: Colors =
            (file + rank) % 2 !== 0 ? Colors.WHITE : Colors.BLACK;
        squares.push({
            index: index,
            color: color,
            name: `${getFileName(index)}${rank + 1}`,
            pieceCode: PieceTypes.NONE,
            isLegalToMove: false,
        });
        index++;
    }
}

export { squares };