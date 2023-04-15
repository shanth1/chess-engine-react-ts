import { PieceColors } from "shared";
import { squares } from "../model/squares";

export const getBoardView = (colorView: number) =>
    colorView === PieceColors.WHITE ? squares : squares.slice().reverse();
