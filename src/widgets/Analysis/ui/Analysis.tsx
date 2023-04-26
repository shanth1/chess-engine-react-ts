import { getLegalMoves } from "entities/legalMoves";
import { makeMove } from "entities/movement";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { PieceColors } from "shared/enums";

interface IAnalysisProps {
    game: TGame;
}
export const Analysis: React.FC<IAnalysisProps> = ({ game }) => {
    const dispatch: AppDispatch = useAppDispatch();
    game.board = {
        position: useAppSelector((state) => state.fen.piecePlacement),
        castlingRights: useAppSelector((state) => state.fen.castlingRights),
        enPassant: useAppSelector((state) => state.fen.enPassant),
        halfMoveClock: 0,
        fullMoveNumber: 0,
        activeColor: useAppSelector((state) => state.fen.activeColor),
    };

    const playerColor = useAppSelector((state) => state.player.playerColor);
    const legalMoves: number[][] = [];
    if (game.board.activeColor !== playerColor) {
        if (game.board.activeColor === PieceColors.WHITE) {
            game.whitePieces.forEach((pieceIndex) => {
                const legalMovesForPiece: number[][] = getLegalMoves(
                    game.board,
                    pieceIndex,
                );
                legalMoves.push(...legalMovesForPiece);
            });
        } else {
            game.blackPieces.forEach((pieceIndex) => {
                const legalMovesForPiece: number[][] = getLegalMoves(
                    game.board,
                    pieceIndex,
                );
                legalMoves.push(...legalMovesForPiece);
            });
        }

        if (legalMoves.length !== 0) {
            const randomMove =
                legalMoves[Math.floor(Math.random() * legalMoves.length)];
            const selectedIndex: number = randomMove[0];
            const targetIndex: number = randomMove[1];
            makeMove(dispatch, game.board.position, selectedIndex, targetIndex);
        }
    }

    return <div className={styles.analysis}>Analysis</div>;
};
