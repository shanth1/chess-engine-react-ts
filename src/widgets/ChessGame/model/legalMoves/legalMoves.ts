import { getPseudoLegalMoves } from "../pseudoLegalMoves/pseudoLegalMoves";
import { checkPseudoLegalMove } from "./checkPseudoLegalMove";

export const getLegalMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    castlingRights: number,
    enPassant: string,
): Array<number> => {
    const legalMoves: Array<number> = [];

    const pseudoLegalMoves: Array<number> = getPseudoLegalMoves(
        piecePlacement,
        selectedIndex,
        castlingRights,
        enPassant,
    );

    for (let moveIndex = 0; moveIndex < pseudoLegalMoves.length; moveIndex++) {
        const pseudoLegalMove = pseudoLegalMoves[moveIndex];
        if (
            checkPseudoLegalMove(
                piecePlacement,
                pseudoLegalMove,
                legalMoves,
                selectedIndex,
                castlingRights,
                enPassant,
            )
        ) {
            legalMoves.push(pseudoLegalMove);
        }
    }

    return legalMoves;
};
