import { checkPseudoLegalMove } from "./lib/checkPseudoLegalMove";
import { getPseudoLegalMoves } from "./model/pseudoLegalMoves/pseudoLegalMoves";

export const getLegalMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    castlingRights: number,
    enPassant: string,
): number[][] => {
    const legalMoves: number[][] = [];

    const pseudoLegalMoves: number[][] = getPseudoLegalMoves(
        piecePlacement,
        selectedIndex,
        castlingRights,
        enPassant,
    );

    for (let moveIndex = 0; moveIndex < pseudoLegalMoves.length; moveIndex++) {
        const pseudoLegalMove: number[] = pseudoLegalMoves[moveIndex];

        if (
            checkPseudoLegalMove(
                piecePlacement,
                pseudoLegalMove,
                legalMoves,
                castlingRights,
                enPassant,
            )
        ) {
            legalMoves.push(pseudoLegalMove);
        }
    }

    return legalMoves;
};
