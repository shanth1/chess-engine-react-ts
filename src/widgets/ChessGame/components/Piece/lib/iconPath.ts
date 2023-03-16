import { colorBitMask, pieceBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getConjunction } from "widgets/ChessGame/lib/booleanOperations";
import { ColorCodes, PieceCodes } from "widgets/ChessGame/types/enums";
import { ColorFileNames, PieceFileNames, PieceStyles } from "../types/enums";

export const getIconPath = (pieceCode: PieceCodes, iconStyle: PieceStyles) => {
    const pieceFileName: string =
        PieceFileNames[getConjunction(pieceCode, pieceBitMask)];
    const colorFileName: string =
        getConjunction(pieceCode, colorBitMask) === ColorCodes.WHITE
            ? ColorFileNames.WHITE
            : ColorFileNames.BLACK;

    const iconPath = require(`../assets/${iconStyle}/${colorFileName}${pieceFileName}.png`);
    return iconPath;
};
