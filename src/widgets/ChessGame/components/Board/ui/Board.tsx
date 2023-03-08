import { useAppDispatch, useAppSelector } from "app/model";
import { useState } from "react";
import { moveFigure } from "widgets/ChessGame/model";
import { Colors, PieceCodes } from "widgets/ChessGame/types/enums";
import { colorBitMask } from "../../Piece/lib/bitMasks";
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

export interface ISquare {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;
    available: boolean;
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
            available: false,
        });
        index += 1;
    }
}

const getAvailable = (selectedSquare: ISquare | null) => {
    if (!selectedSquare) {
        squares.forEach((square) => {
            square.available = false;
        });
    } else {
        squares.forEach((square) => {
            if (
                (square.piece & colorBitMask) !==
                    (selectedSquare.piece & colorBitMask) &&
                selectedSquare.piece
            ) {
                square.available = true;
            } else {
                square.available = false;
            }
        });
    }
};

export const Board: React.FC = () => {
    const piecePlacement: Array<number> = useAppSelector(
        (state) => state.game.piecePlacement,
    );
    const dispatch = useAppDispatch();

    const [selectedSquare, setSelectedSquare] = useState<ISquare | null>(null);

    const onClick = (index: number) => {
        getAvailable(squares[index]);
        setSelectedSquare(squares[index]);
    };

    const targetMove = (index: number) => {
        console.log(selectedSquare?.name, "to", squares[index].name);

        if (selectedSquare) {
            dispatch(
                moveFigure({
                    startIndex: selectedSquare.index,
                    targetIndex: index,
                }),
            );
        }

        setSelectedSquare(null);
        getAvailable(null);
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
                        selectedSquare={selectedSquare}
                        available={square.available}
                        onClick={onClick}
                        targetMove={targetMove}
                    />
                );
            })}
        </div>
    );
};
