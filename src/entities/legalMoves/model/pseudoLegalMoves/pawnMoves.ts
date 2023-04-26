import {
    OffsetsPawnBlack,
    OffsetsPawnWhite,
} from "entities/legalMoves/types/enums";
import { getFileName } from "shared/boardInfo";
import { getPieceColor } from "shared/pieceInfo";
import { PieceColors } from "shared/enums";

export const getPawnMoves = (
    position: Array<number>,
    enPassant: string,
    selectedIndex: number,
): number[][] => {
    const pawnAttack = (
        offsetAttack: OffsetsPawnBlack | OffsetsPawnWhite,
    ): void => {
        if (!position[selectedIndex + offsetAttack]) return;
        const pieceColor = getPieceColor(
            position[selectedIndex + offsetAttack],
        );
        if (pieceColor === activeColor) return;
        const targetIndex = selectedIndex + offsetAttack;
        legalMoves.push([selectedIndex, targetIndex]);
    };

    const activeColor = getPieceColor(position[selectedIndex]);
    const legalMoves: number[][] = [];

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

    if (!position[selectedIndex + offsetForward]) {
        const targetIndex = selectedIndex + offsetForward;
        legalMoves.push([selectedIndex, targetIndex]);
        if (
            file === fileStart &&
            !position[selectedIndex + 2 * offsetForward]
        ) {
            const targetIndex = selectedIndex + 2 * offsetForward;
            legalMoves.push([selectedIndex, targetIndex]);
        }
    }

    if (
        (Math.floor(selectedIndex / 8) === 3 &&
            getPieceColor(position[selectedIndex]) === PieceColors.WHITE) ||
        (Math.floor(selectedIndex / 8) === 4 &&
            getPieceColor(position[selectedIndex]) === PieceColors.BLACK)
    ) {
        if (enPassant !== "-") {
            const leftAttackFile = getFileName(
                selectedIndex + offsetLeftAttack,
            );
            const rightAttackFile = getFileName(
                selectedIndex + offsetRightAttack,
            );

            if (leftAttackFile === enPassant) {
                const targetIndex = selectedIndex + offsetLeftAttack;
                legalMoves.push([selectedIndex, targetIndex]);
            } else if (rightAttackFile === enPassant) {
                const targetIndex = selectedIndex + offsetRightAttack;
                legalMoves.push([selectedIndex, targetIndex]);
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
