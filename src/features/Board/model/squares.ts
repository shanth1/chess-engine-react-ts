import { Colors } from "features/Board/types/enums";
import { ISquare } from "features/Board/types/interfaces";
import { getFileName } from "shared/boardInfo";
import { PieceTypes } from "shared/enums";

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
            piece: PieceTypes.NONE,
            isLegal: false,
            isSelected: false,
            isAlternativeCastling: false,
        });
        index++;
    }
}

export { squares };
