import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { CastlingRights, PieceColors, PieceTypes } from "shared/enums";
import { precomputedKingMoves } from "../../lib/precomputedData/kingMoves";

export const getCastlingMoves = (
    position: Array<number>,
    castlingRights: number,
    selectedIndex: number,
): number[][] => {
    const pseudoLegalMoves: number[][] = [];

    const friendlyColor = getPieceColor(position[selectedIndex]);

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
                if (position[targetSquareIndex]) continue direction;
                targetSquareIndex += offset;
            }

            if (getPieceType(position[targetSquareIndex]) !== PieceTypes.ROOK)
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

            if (castling) {
                const targetIndex = selectedIndex + 2 * offset;
                pseudoLegalMoves.push([selectedIndex, targetIndex]);
                console.log(selectedIndex, targetIndex);
            }
        }
    }
    return pseudoLegalMoves;
};
