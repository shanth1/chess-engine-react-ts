const colorBitMask = 0b11000;
export const getPieceColor = (pieceCode: number) => pieceCode & colorBitMask;
