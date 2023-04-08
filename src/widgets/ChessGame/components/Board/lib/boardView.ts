import { PieceColors } from "api/pieceInfo";
import { squares } from "../model/squares";

export const getBoardView = (colorView: number) =>
    colorView === PieceColors.WHITE ? squares : squares.slice().reverse();
