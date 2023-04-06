import { colorBitMask } from "./bitMasks";

export const getPieceColor = (pieceCode: number) => pieceCode & colorBitMask;
