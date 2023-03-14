import {
    ColorCodes,
    OffsetsPawnBlack,
    OffsetsPawnWhite,
} from "./../../types/enums";
import { getKnightMoves } from "./knightMoves";
import { getSlidingMoves } from "./slidingMoves";
import { pieceBitMask } from "./../../lib/bitMasks";
import { colorBitMask } from "widgets/ChessGame/lib/bitMasks";
import { getConjunction } from "widgets/ChessGame/lib/booleanOperations";
import { PieceCodes } from "widgets/ChessGame/types/enums";
import { Index } from "widgets/ChessGame/types/types";
import { getKingMoves } from "./kingMoves";

export const getLegalMoves = (
    piecePlacement: Array<PieceCodes>,
    selectedSquareIndex: Index | null,
): Array<Index> => {
    const legalMoves: Array<Index> = [];

    if (selectedSquareIndex === null) return legalMoves;
    if (!piecePlacement[selectedSquareIndex]) return legalMoves;

    const selectedPiece = getConjunction(
        piecePlacement[selectedSquareIndex],
        pieceBitMask,
    );
    const activeColor = getConjunction(
        piecePlacement[selectedSquareIndex],
        colorBitMask,
    );

    switch (selectedPiece) {
        case PieceCodes.QUEEN:
        case PieceCodes.ROOK:
        case PieceCodes.BISHOP:
            legalMoves.push(
                ...getSlidingMoves(
                    piecePlacement,
                    selectedSquareIndex,
                    selectedPiece,
                    activeColor,
                ),
            );
            break;
        case PieceCodes.KNIGHT:
            legalMoves.push(
                ...getKnightMoves(
                    piecePlacement,
                    selectedSquareIndex,
                    activeColor,
                ),
            );
            break;
        case PieceCodes.KING:
            legalMoves.push(
                ...getKingMoves(
                    piecePlacement,
                    selectedSquareIndex,
                    activeColor,
                ),
            );
            break;

        case PieceCodes.PAWN:
            const file: number = Math.floor(selectedSquareIndex / 8);
            const index: number = selectedSquareIndex % 8;

            if (activeColor === ColorCodes.BLACK) {
                if (file === 7) break;

                // ? double move
                if (
                    file === 1 &&
                    !piecePlacement[
                        selectedSquareIndex + OffsetsPawnBlack.Forward
                    ]
                )
                    legalMoves.push(
                        selectedSquareIndex + 2 * OffsetsPawnBlack.Forward,
                    );

                // ? standard move
                if (
                    !piecePlacement[
                        selectedSquareIndex + OffsetsPawnBlack.Forward
                    ]
                )
                    legalMoves.push(
                        selectedSquareIndex + OffsetsPawnBlack.Forward,
                    );

                // ?
                if (index > 0 && index < 7) {
                    if (
                        piecePlacement[
                            selectedSquareIndex + OffsetsPawnBlack.LeftAttack
                        ]
                    ) {
                        const pieceColor =
                            piecePlacement[
                                selectedSquareIndex +
                                    OffsetsPawnBlack.LeftAttack
                            ] & colorBitMask;
                        if (pieceColor === activeColor) break;
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
                                selectedSquareIndex +
                                    OffsetsPawnBlack.RightAttack
                            ] & colorBitMask;
                        if (pieceColor === activeColor) break;
                        legalMoves.push(
                            selectedSquareIndex + OffsetsPawnBlack.RightAttack,
                        );
                    }
                }
                if (index === 0) {
                    const pieceColor =
                        piecePlacement[
                            selectedSquareIndex + OffsetsPawnBlack.LeftAttack
                        ] & colorBitMask;
                    if (pieceColor === activeColor) break;
                    legalMoves.push(
                        selectedSquareIndex + OffsetsPawnBlack.LeftAttack,
                    );
                }
                if (index === 7) {
                    const pieceColor =
                        piecePlacement[
                            selectedSquareIndex + OffsetsPawnBlack.RightAttack
                        ] & colorBitMask;
                    if (pieceColor === activeColor) break;
                    legalMoves.push(
                        selectedSquareIndex + OffsetsPawnBlack.RightAttack,
                    );
                }
            } else if (activeColor === ColorCodes.WHITE) {
                if (file === 0) break;

                // ? double move
                if (
                    file === 6 &&
                    !piecePlacement[
                        selectedSquareIndex + OffsetsPawnWhite.Forward
                    ]
                )
                    legalMoves.push(
                        selectedSquareIndex + 2 * OffsetsPawnWhite.Forward,
                    );

                // ? standard move
                if (
                    !piecePlacement[
                        selectedSquareIndex + OffsetsPawnWhite.Forward
                    ]
                )
                    legalMoves.push(
                        selectedSquareIndex + OffsetsPawnWhite.Forward,
                    );

                // ?
                if (index > 0 && index < 7) {
                    if (
                        piecePlacement[
                            selectedSquareIndex + OffsetsPawnWhite.LeftAttack
                        ]
                    ) {
                        const pieceColor =
                            piecePlacement[
                                selectedSquareIndex +
                                    OffsetsPawnWhite.LeftAttack
                            ] & colorBitMask;
                        if (pieceColor === activeColor) break;
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
                                selectedSquareIndex +
                                    OffsetsPawnWhite.RightAttack
                            ] & colorBitMask;
                        if (pieceColor === activeColor) break;
                        legalMoves.push(
                            selectedSquareIndex + OffsetsPawnWhite.RightAttack,
                        );
                    }
                }
                if (index === 0) {
                    const pieceColor =
                        piecePlacement[
                            selectedSquareIndex + OffsetsPawnWhite.RightAttack
                        ] & colorBitMask;
                    if (pieceColor === activeColor) break;
                    legalMoves.push(
                        selectedSquareIndex + OffsetsPawnWhite.RightAttack,
                    );
                }
                if (index === 7) {
                    const pieceColor =
                        piecePlacement[
                            selectedSquareIndex + OffsetsPawnWhite.LeftAttack
                        ] & colorBitMask;
                    if (pieceColor === activeColor) break;
                    legalMoves.push(
                        selectedSquareIndex + OffsetsPawnWhite.LeftAttack,
                    );
                }
            }

            break;

        default:
            for (let index = 0; index < piecePlacement.length; index++) {
                const pieceCode = piecePlacement[index];
                if (pieceCode) {
                    const colorCode = getConjunction(pieceCode, colorBitMask);
                    if (activeColor === colorCode) continue;
                    legalMoves.push(index);
                } else {
                    legalMoves.push(index);
                }
            }

            break;
    }

    return legalMoves;
};
