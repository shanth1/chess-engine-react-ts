import { useAppSelector } from "app/model";
import { useState } from "react";
import { Colors, PieceCodes } from "widgets/ChessGame/types/enums";
import { Square } from "../../Square";
import { FileCoordinates } from "../../Square/types/enums";
import styles from "./styles.module.css";

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

interface ISquare {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;
    piece: PieceCodes;
}

export const squares: Array<ISquare> = [];
let index: number = 0;
console.log("generate board");
for (let rank: number = 7; rank >= 0; rank--) {
    for (let file: number = 0; file < 8; file++) {
        const color: Colors =
            (file + rank) % 2 !== 0 ? Colors.WHITE : Colors.BLACK;
        squares.push({
            index: index,
            color: color,
            name: `${fileCoordinates[file]}${rank + 1}`,
            piece: PieceCodes.NONE,
        });
        index += 1;
    }
}

export const Board: React.FC = () => {
    const piecePlacement: Array<number> = useAppSelector(
        (state) => state.game.piecePlacement,
    );

    const [selectedSquare, setSelectedSquare] = useState<ISquare | null>(null);

    const onClick = (index: number) => {
        setSelectedSquare(squares[index]);
    };

    return (
        <div className={styles.board}>
            {squares.map((square, index) => {
                square.piece = piecePlacement[index];
                return (
                    <Square
                        key={square.index}
                        index={square.index}
                        color={square.color}
                        piece={square.piece}
                        selected={
                            square.index === selectedSquare?.index &&
                            !!square.piece
                        }
                        onClick={onClick}
                    />
                );
            })}
        </div>
    );
};
