import { PieceColors } from "types/Piece";
import { squares } from "../model/squares";

export const getBoardView = (colorView: number) =>
    colorView === PieceColors.WHITE ? squares : squares.slice().reverse();
