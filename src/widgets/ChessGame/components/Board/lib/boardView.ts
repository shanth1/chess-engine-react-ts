import { PieceColors } from "shared/enums";
import { squares } from "../model/squares";

export const getBoardView = (colorView: number) =>
    colorView === PieceColors.WHITE ? squares : squares.slice().reverse();
