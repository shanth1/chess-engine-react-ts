import { Colors, PieceCodes } from "widgets/ChessGame/types/enums";

export interface ISquareProps {
    index: number;
    color: Colors;
    piece: PieceCodes;
    selected: boolean;
    onClick: (index: number) => void;
}
