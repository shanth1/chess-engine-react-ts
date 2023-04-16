import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { PieceColors } from "shared/enums";
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
