import { PieceColors } from "widgets/ChessGame/types/enums";
import { squares } from "../model/squares";

export const getBoardView = (colorView: number) =>
    colorView === PieceColors.WHITE ? squares : squares.slice().reverse();
