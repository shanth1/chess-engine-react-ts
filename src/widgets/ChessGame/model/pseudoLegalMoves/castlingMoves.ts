import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { precomputedKingMoves } from "widgets/ChessGame/lib/precomputedData/kingMoves";
import { CastlingRights, PieceColors } from "widgets/ChessGame/types/enums";

export const getCastlingMoves = (
    piecePlacement: Array<number>,
    selectedSquareIndex: number,
    castlingRights: number,
): Array<number> => {
    const pseudoLegalMoves: Array<number> = [];

    const friendlyColor = getPieceColor(piecePlacement[selectedSquareIndex]);

    if (
        (selectedSquareIndex === 60 && friendlyColor === PieceColors.WHITE) ||
        (selectedSquareIndex === 4 && friendlyColor === PieceColors.BLACK)
    ) {
        direction: for (let direction = 2; direction <= 3; direction++) {
            const offset = precomputedKingMoves[selectedSquareIndex][direction];
            let targetSquareIndex = selectedSquareIndex + offset;
            while (
                !(targetSquareIndex % 8 === 0 || targetSquareIndex % 8 === 7)
            ) {
                if (piecePlacement[targetSquareIndex]) continue direction;
                targetSquareIndex += offset;
            }

            const castlingSide =
                (selectedSquareIndex + offset * 2) % 8 === 6 ? "king" : "queen";

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
            if (castling)
                pseudoLegalMoves.push(selectedSquareIndex + 2 * offset);
        }
    }
    return pseudoLegalMoves;
};
