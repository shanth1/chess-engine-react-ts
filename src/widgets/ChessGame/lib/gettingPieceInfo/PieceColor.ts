import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { PieceCodes } from "../../types/enums";

export const getPieceColor = (pieceCode: PieceCodes) =>
    pieceCode & colorBitMask;
