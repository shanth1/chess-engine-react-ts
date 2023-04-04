import { checkCastlingType } from "../moveTypes/castlingType";
import { getPseudoLegalMoves } from "../pseudoLegalMoves/pseudoLegalMoves";
import { checkPseudoLegalMove } from "./checkPseudoLegalMove";
import { getPassedKingMove } from "./passedKingMove";

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
        const targetIndex = pseudoLegalMoves[moveIndex];
        const selectedPiece = piecePlacement[selectedIndex];
        const isCastlingMove = checkCastlingType(
            selectedPiece,
            targetIndex,
            selectedIndex,
        );

        if (isCastlingMove) {
            const passedKingMove = getPassedKingMove(
                targetIndex,
                selectedIndex,
            );
            if (!legalMoves.includes(passedKingMove)) break;
        }
        if (
            checkPseudoLegalMove(
                piecePlacement,
                targetIndex,
                selectedIndex,
                castlingRights,
                enPassant,
            )
        ) {
            legalMoves.push(targetIndex);
        }
    }

    return legalMoves;
};
