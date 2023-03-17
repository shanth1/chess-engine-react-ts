import { Colors } from "widgets/ChessGame/types/enums";

export interface ISquareProps {
    index: number;
    color: Colors;
    pieceCode: number;
    selectedSquareIndex: number | null;
    isLegalToMove: boolean;
    setSelectedSquareIndex: (selectedSquareIndex: number | null) => void;
}
