import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";

export const getPieceColor = (pieceCode: number) => pieceCode & colorBitMask;
