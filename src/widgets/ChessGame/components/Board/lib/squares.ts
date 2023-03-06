import { Colors } from "widgets/ChessGame/types/enums";
import { Square } from "../../Square/model/Square";

const squares: Array<Square> = [];
let index: number = 0;
for (let rank: number = 7; rank >= 0; rank--) {
    for (let file: number = 0; file < 8; file++) {
        const color: Colors =
            (file + rank) % 2 !== 0 ? Colors.WHITE : Colors.BLACK;
        squares.push(new Square(index, color, file, rank));
        index += 1;
    }
}

export { squares };
