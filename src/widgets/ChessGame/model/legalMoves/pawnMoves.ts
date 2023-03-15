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
    const legalMoves: Array<number> = [];

    const file: number = Math.floor(selectedSquareIndex / 8);
    const rank: number = selectedSquareIndex % 8;

    if (activeColor === ColorCodes.BLACK) {
        if (file === 7) return legalMoves;

        // ? double move
        if (
            file === 1 &&
            !piecePlacement[selectedSquareIndex + OffsetsPawnBlack.Forward]
        )
            legalMoves.push(selectedSquareIndex + 2 * OffsetsPawnBlack.Forward);

        // ? standard move
        if (!piecePlacement[selectedSquareIndex + OffsetsPawnBlack.Forward])
            legalMoves.push(selectedSquareIndex + OffsetsPawnBlack.Forward);

        // ?
        if (rank > 0 && rank < 7) {
            if (
                piecePlacement[
                    selectedSquareIndex + OffsetsPawnBlack.LeftAttack
                ]
            ) {
                const pieceColor =
                    piecePlacement[
                        selectedSquareIndex + OffsetsPawnBlack.LeftAttack
                    ] & colorBitMask;
                if (pieceColor === activeColor) return legalMoves;
                legalMoves.push(
                    selectedSquareIndex + OffsetsPawnBlack.LeftAttack,
                );
            }
            if (
                piecePlacement[
                    selectedSquareIndex + OffsetsPawnBlack.RightAttack
                ]
            ) {
                const pieceColor =
                    piecePlacement[
                        selectedSquareIndex + OffsetsPawnBlack.RightAttack
                    ] & colorBitMask;
                if (pieceColor === activeColor) return legalMoves;
                legalMoves.push(
                    selectedSquareIndex + OffsetsPawnBlack.RightAttack,
                );
            }
        }
        if (rank === 0) {
            if (
                piecePlacement[
                    selectedSquareIndex + OffsetsPawnBlack.LeftAttack
                ]
            ) {
                const pieceColor =
                    piecePlacement[
                        selectedSquareIndex + OffsetsPawnBlack.LeftAttack
                    ] & colorBitMask;
                if (pieceColor === activeColor) return legalMoves;
                legalMoves.push(
                    selectedSquareIndex + OffsetsPawnBlack.LeftAttack,
                );
            }
        }
        if (rank === 7) {
            if (
                piecePlacement[
                    selectedSquareIndex + OffsetsPawnBlack.RightAttack
                ]
            ) {
                const pieceColor =
                    piecePlacement[
                        selectedSquareIndex + OffsetsPawnBlack.RightAttack
                    ] & colorBitMask;
                if (pieceColor === activeColor) return legalMoves;
                legalMoves.push(
                    selectedSquareIndex + OffsetsPawnBlack.RightAttack,
                );
            }
        }
    } else if (activeColor === ColorCodes.WHITE) {
        if (file === 0) return legalMoves;

        // ? double move
        if (
            file === 6 &&
            !piecePlacement[selectedSquareIndex + OffsetsPawnWhite.Forward]
        )
            legalMoves.push(selectedSquareIndex + 2 * OffsetsPawnWhite.Forward);

        // ? standard move
        if (!piecePlacement[selectedSquareIndex + OffsetsPawnWhite.Forward])
            legalMoves.push(selectedSquareIndex + OffsetsPawnWhite.Forward);

        // ?
        if (rank > 0 && rank < 7) {
            if (
                piecePlacement[
                    selectedSquareIndex + OffsetsPawnWhite.LeftAttack
                ]
            ) {
                const pieceColor =
                    piecePlacement[
                        selectedSquareIndex + OffsetsPawnWhite.LeftAttack
                    ] & colorBitMask;
                if (pieceColor === activeColor) return legalMoves;
                legalMoves.push(
                    selectedSquareIndex + OffsetsPawnWhite.LeftAttack,
                );
            }
            if (
                piecePlacement[
                    selectedSquareIndex + OffsetsPawnWhite.RightAttack
                ]
            ) {
                const pieceColor =
                    piecePlacement[
                        selectedSquareIndex + OffsetsPawnWhite.RightAttack
                    ] & colorBitMask;
                if (pieceColor === activeColor) return legalMoves;
                legalMoves.push(
                    selectedSquareIndex + OffsetsPawnWhite.RightAttack,
                );
            }
        }
        if (rank === 0) {
            if (
                piecePlacement[
                    selectedSquareIndex + OffsetsPawnWhite.RightAttack
                ]
            ) {
                const pieceColor =
                    piecePlacement[
                        selectedSquareIndex + OffsetsPawnWhite.RightAttack
                    ] & colorBitMask;
                if (pieceColor === activeColor) return legalMoves;
                legalMoves.push(
                    selectedSquareIndex + OffsetsPawnWhite.RightAttack,
                );
            }
        }
        if (rank === 7) {
            if (
                piecePlacement[
                    selectedSquareIndex + OffsetsPawnWhite.LeftAttack
                ]
            ) {
                const pieceColor =
                    piecePlacement[
                        selectedSquareIndex + OffsetsPawnWhite.LeftAttack
                    ] & colorBitMask;
                if (pieceColor === activeColor) return legalMoves;
                legalMoves.push(
                    selectedSquareIndex + OffsetsPawnWhite.LeftAttack,
                );
            }
        }
    }

    return legalMoves;
};
