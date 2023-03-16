import { pieceBitMask } from "widgets/ChessGame/lib/bitMasks";
import { PieceCodes } from "../../types/enums";

export const getPieceType = (pieceCode: PieceCodes) => pieceCode & pieceBitMask;
