import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import {
    ColorCodes,
    OffsetsPawnBlack,
    OffsetsPawnWhite,
    PieceCodes,
} from "widgets/ChessGame/types/enums";

export const getPawnMoves = (
    piecePlacement: Array<PieceCodes>,
    selectedSquareIndex: number,
    activeColor: ColorCodes,
): Array<number> => {
    const pawnAttack = (
        offsetAttack: OffsetsPawnBlack | OffsetsPawnWhite,
    ): void => {
        if (!piecePlacement[selectedSquareIndex + offsetAttack]) return;
        const pieceColor =
            piecePlacement[selectedSquareIndex + offsetAttack] & colorBitMask;
        if (pieceColor === activeColor) return;
        legalMoves.push(selectedSquareIndex + offsetAttack);
    };

    const legalMoves: Array<number> = [];

    const file: number = Math.floor(selectedSquareIndex / 8);
    const rank: number = selectedSquareIndex % 8;

    const isBlack: boolean = activeColor === ColorCodes.BLACK ? true : false;

    const fileStart: number = isBlack ? 1 : 6;
    const fileFinish: number = isBlack ? 7 : 0;

    const rankRightSide: number = isBlack ? 0 : 7;
    const rankLeftSide: number = isBlack ? 7 : 0;

    const offsetForward: OffsetsPawnBlack.Forward | OffsetsPawnWhite.Forward =
        isBlack ? OffsetsPawnBlack.Forward : OffsetsPawnWhite.Forward;

    const offsetLeftAttack:
        | OffsetsPawnBlack.LeftAttack
        | OffsetsPawnWhite.LeftAttack = isBlack
        ? OffsetsPawnBlack.LeftAttack
        : OffsetsPawnWhite.LeftAttack;

    const offsetRightAttack:
        | OffsetsPawnBlack.RightAttack
        | OffsetsPawnWhite.RightAttack = isBlack
        ? OffsetsPawnBlack.RightAttack
        : OffsetsPawnWhite.RightAttack;

    if (file === fileFinish) return legalMoves;

    if (!piecePlacement[selectedSquareIndex + offsetForward]) {
        legalMoves.push(selectedSquareIndex + offsetForward);
        if (
            file === fileStart &&
            !piecePlacement[selectedSquareIndex + 2 * offsetForward]
        ) {
            legalMoves.push(selectedSquareIndex + 2 * offsetForward);
        }
    }

    if (rank === rankLeftSide) {
        pawnAttack(offsetRightAttack);
    } else if (rank === rankRightSide) {
        pawnAttack(offsetLeftAttack);
    } else {
        pawnAttack(offsetRightAttack);
        pawnAttack(offsetLeftAttack);
    }

    return legalMoves;
};
