import { Colors } from "widgets/ChessGame/types/enums";

export interface ISquareProps {
    index: number;
    color: Colors;
    pieceCode: number;
    enPassant: string;
    selectedSquareIndex: number | null;
    isLegalToMove: boolean;
    setSelectedSquareIndex: (selectedSquareIndex: number | null) => void;
}
