import { getPieceColor, getPieceType } from "api/pieceInfo";
import { PieceColors } from "widgets/ChessGame/types/enums";
import { ColorFileNames, PieceFileNames, PieceStyles } from "../types/enums";

export const getIconPath = (pieceCode: number, iconStyle: PieceStyles) => {
    const pieceFileName: string = PieceFileNames[getPieceType(pieceCode)];
    const colorFileName: string =
        getPieceColor(pieceCode) === PieceColors.WHITE
            ? ColorFileNames.WHITE
            : ColorFileNames.BLACK;

    const iconPath = require(`../assets/${iconStyle}/${colorFileName}${pieceFileName}.png`);
    return iconPath;
};
