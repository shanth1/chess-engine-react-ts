const pieceBitMask = 0b00111;
export const getPieceType = (pieceCode: number) => pieceCode & pieceBitMask;
