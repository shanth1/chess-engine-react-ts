import { pieceBitMask } from "widgets/ChessGame/lib/bitMasks";

export const getPieceType = (pieceCode: number) => pieceCode & pieceBitMask;
