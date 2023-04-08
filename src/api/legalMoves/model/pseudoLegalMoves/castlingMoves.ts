import { CastlingRights } from "api/boardInfo";
import {
    getPieceColor,
    getPieceType,
    PieceColors,
    PieceTypes,
} from "api/pieceInfo";
import { precomputedKingMoves } from "api/precomputedData";

export const getCastlingMoves = (
    piecePlacement: Array<number>,
    selectedIndex: number,
    castlingRights: number,
): Array<number> => {
    const pseudoLegalMoves: Array<number> = [];

    const friendlyColor = getPieceColor(piecePlacement[selectedIndex]);

    if (
        (selectedIndex === 60 && friendlyColor === PieceColors.WHITE) ||
        (selectedIndex === 4 && friendlyColor === PieceColors.BLACK)
    ) {
        direction: for (let direction = 2; direction <= 3; direction++) {
            const offset = precomputedKingMoves[selectedIndex][direction];
            let targetSquareIndex = selectedIndex + offset;
            while (
                !(targetSquareIndex % 8 === 0 || targetSquareIndex % 8 === 7)
            ) {
                if (piecePlacement[targetSquareIndex]) continue direction;
                targetSquareIndex += offset;
            }

            if (
                getPieceType(piecePlacement[targetSquareIndex]) !==
                PieceTypes.ROOK
            )
                continue;

            const castlingSide =
                (selectedIndex + offset * 2) % 8 === 6 ? "king" : "queen";

            let castling = false;
            if (
                friendlyColor === PieceColors.WHITE &&
                castlingSide === "king"
            ) {
                if (castlingRights & CastlingRights.WhiteKingSide)
                    castling = true;
            } else if (
                friendlyColor === PieceColors.WHITE &&
                castlingSide === "queen"
            ) {
                if (castlingRights & CastlingRights.WitheQueenSide)
                    castling = true;
            } else if (
                friendlyColor === PieceColors.BLACK &&
                castlingSide === "queen"
            ) {
                if (castlingRights & CastlingRights.BlackQueenSide)
                    castling = true;
            } else if (
                friendlyColor === PieceColors.BLACK &&
                castlingSide === "king"
            ) {
                if (castlingRights & CastlingRights.BlackKingSide)
                    castling = true;
            }
            if (castling) pseudoLegalMoves.push(selectedIndex + 2 * offset);
        }
    }
    return pseudoLegalMoves;
};
