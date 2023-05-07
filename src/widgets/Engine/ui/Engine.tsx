import { updateBoard } from "entities/gameSlice";
import { makeMove } from "featuresComplex/makeMove";
import { useState } from "react";
import { PieceColors } from "shared/enums";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { EvaluationBar } from "../components/EvaluationBar/EvaluationBar";
import { Header } from "../components/Header/Header";
import { Info } from "../components/Info/Info";
import { Player } from "../components/Player/Player";
import { Settings } from "../components/Settrings/Settings";
import { getEngineData } from "../model/engineData";
import styles from "./styles.module.css";

export const Engine: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const board = useAppSelector((state) => state.game.board);
    const [depth, setDepth] = useState(2);
    const playerColor = useAppSelector((state) => state.player.playerColor);
    const playerView = useAppSelector((state) => state.player.colorView);
    const isWhiteView = playerView === PieceColors.WHITE;

    const startEngine = (depth: number) => {
        const { bestMove } = getEngineData(board, depth);
        if (!bestMove) return;
        const boardAfterMove = makeMove(board, bestMove[0], bestMove[1]);
        dispatch(updateBoard({ board: boardAfterMove }));
    };

    if (board.activeColor !== playerColor) {
        setTimeout(() => {
            startEngine(depth);
        });
    }

    return (
        <div className={styles.engine}>
            <div className={styles.contentWrapper}>
                <Header level={depth + 1} />
                <Player
                    isUp={true}
                    color={isWhiteView ? PieceColors.BLACK : PieceColors.WHITE}
                    name={"Engine"}
                    enemyCaptureList={
                        isWhiteView
                            ? board.capturedBlackPieces.slice()
                            : board.capturedWhitePieces.slice()
                    }
                    playerCaptureList={
                        isWhiteView
                            ? board.capturedWhitePieces.slice()
                            : board.capturedBlackPieces.slice()
                    }
                />
                <Info />
                <Player
                    isUp={false}
                    color={isWhiteView ? PieceColors.WHITE : PieceColors.BLACK}
                    name={"Player"}
                    enemyCaptureList={
                        isWhiteView
                            ? board.capturedWhitePieces.slice()
                            : board.capturedBlackPieces.slice()
                    }
                    playerCaptureList={
                        isWhiteView
                            ? board.capturedBlackPieces.slice()
                            : board.capturedWhitePieces.slice()
                    }
                />
                <Settings depth={depth} setDepth={setDepth} />
            </div>
            <EvaluationBar />
        </div>
    );
};
