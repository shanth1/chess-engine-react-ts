import { Colors, PieceCodes } from "widgets/ChessGame/types/enums";
import { ISquare } from "widgets/ChessGame/types/interfaces";

export interface ISquareProps {
    index: number;
    color: Colors;
    pieceCode: PieceCodes;
    selectedSquare: ISquare | null;
    isAvailable: boolean;
    selectStartSquare: (selectedSquareIndex: number) => void;
    selectTargetSquare: (selectedSquareIndex: number) => void;
    unselectSquare: () => void;
}
