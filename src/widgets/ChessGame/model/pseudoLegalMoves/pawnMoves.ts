import { getFileName } from "widgets/ChessGame/lib/indexToNameConverter/fileNames";
import { PieceColors } from "../../types/enums";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import {
    OffsetsPawnBlack,
    OffsetsPawnWhite,
} from "widgets/ChessGame/types/enums";

export const getPawnMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    enPassant: string,
): Array<number> => {
    const pawnAttack = (
        offsetAttack: OffsetsPawnBlack | OffsetsPawnWhite,
    ): void => {
        if (!piecePlacement[selectedIndex + offsetAttack]) return;
        const pieceColor = getPieceColor(
            piecePlacement[selectedIndex + offsetAttack],
        );
        if (pieceColor === activeColor) return;
        legalMoves.push(selectedIndex + offsetAttack);
    };

    const activeColor = getPieceColor(piecePlacement[selectedIndex]);
    const legalMoves: Array<number> = [];

    const file: number = Math.floor(selectedIndex / 8);
    const rank: number = selectedIndex % 8;

    const isBlack: boolean = activeColor === PieceColors.BLACK ? true : false;

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

    if (!piecePlacement[selectedIndex + offsetForward]) {
        legalMoves.push(selectedIndex + offsetForward);
        if (
            file === fileStart &&
            !piecePlacement[selectedIndex + 2 * offsetForward]
        ) {
            legalMoves.push(selectedIndex + 2 * offsetForward);
        }
    }

    if (
        (Math.floor(selectedIndex / 8) === 3 &&
            getPieceColor(piecePlacement[selectedIndex]) ===
                PieceColors.WHITE) ||
        (Math.floor(selectedIndex / 8) === 4 &&
            getPieceColor(piecePlacement[selectedIndex]) === PieceColors.BLACK)
    ) {
        if (enPassant !== "-") {
            const leftAttackFile = getFileName(
                selectedIndex + offsetLeftAttack,
            );
            const rightAttackFile = getFileName(
                selectedIndex + offsetRightAttack,
            );

            if (leftAttackFile === enPassant) {
                legalMoves.push(selectedIndex + offsetLeftAttack);
            } else if (rightAttackFile === enPassant) {
                legalMoves.push(selectedIndex + offsetRightAttack);
            }
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
