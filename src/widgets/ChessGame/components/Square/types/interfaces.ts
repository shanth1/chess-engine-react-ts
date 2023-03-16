import { Index } from "./../../../types/types";
import { Colors, PieceCodes } from "widgets/ChessGame/types/enums";

export interface ISquareProps {
    index: number;
    color: Colors;
    pieceCode: PieceCodes;
    selectedSquareIndex: Index | null;
    isLegalToMove: boolean;
    setSelectedSquareIndex: (selectedSquareIndex: Index | null) => void;
}
