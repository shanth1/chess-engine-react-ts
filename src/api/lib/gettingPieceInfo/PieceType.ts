import { pieceBitMask } from "./bitMasks";

export const getPieceType = (pieceCode: number) => pieceCode & pieceBitMask;
