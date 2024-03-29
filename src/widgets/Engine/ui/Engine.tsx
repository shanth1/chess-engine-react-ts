import { updateBoard } from "entities/gameSlice";
import { makeMove } from "featuresComplex/makeMove";
import { useEffect, useState } from "react";
import { PieceColors, PieceTypes } from "shared/enums";
import { useAppDispatch, useAppSelector } from "shared/hooks";
import { getPieceColor, getPieceType } from "shared/pieceInfo";
import { EvaluationBar } from "../components/EvaluationBar/EvaluationBar";
import { Header } from "../components/Header/Header";
import { Info } from "../components/Info/Info";
import { Player } from "../components/Player/Player";
import { Settings } from "../components/Settings/Settings";
import { getEvaluation } from "../model/engineData/evaluation/evaluation";
import {
    startEngineAsync,
    turnOffEngine,
} from "../model/engineSlice/engineSlice";
import styles from "./styles.module.css";

const getMaterialEvaluation = (position: number[]): number => {
    let materialAdvantage = 0;
    const getPieceValue = (piece: number): number => {
        switch (getPieceType(piece)) {
            case PieceTypes.QUEEN:
                return 9;
            case PieceTypes.ROOK:
                return 5;
            case PieceTypes.BISHOP:
            case PieceTypes.KNIGHT:
                return 3;
            case PieceTypes.PAWN:
                return 1;
            default:
                return 0;
        }
    };

    for (let index = 0; index < position.length; index++) {
        if (!position[index]) continue;
        const pieceValue = getPieceValue(position[index]);
        materialAdvantage +=
            getPieceColor(position[index]) === PieceColors.WHITE
                ? pieceValue
                : -pieceValue;
    }
    return materialAdvantage;
};

export const Engine: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const board = useAppSelector((state) => state.game.board);
    const [depth, setDepth] = useState(2);
    const playerColor = useAppSelector((state) => state.player.playerColor);
    const playerView = useAppSelector((state) => state.player.colorView);
    const isWhiteView = playerView === PieceColors.WHITE;
    const status = useAppSelector((state) => state.engine.status);
    const bestMove = useAppSelector((state) => state.engine.bestMove);
    const staticEvaluation = getEvaluation(board.position);
    const materialEvaluation = getMaterialEvaluation(board.position);

    useEffect(() => {
        if (bestMove) {
            const boardAfterMove = makeMove(board, bestMove[0], bestMove[1]);
            dispatch(updateBoard({ board: boardAfterMove }));
            dispatch(turnOffEngine());
        }
        if (board.activeColor !== playerColor && status === "off") {
            dispatch(startEngineAsync({ board: board, depth: depth }));
        }
    });

    return (
        <div className={styles.engine}>
            <div className={styles.contentWrapper}>
                <Header level={depth + 1} />
                <Player
                    isUp={true}
                    color={isWhiteView ? PieceColors.BLACK : PieceColors.WHITE}
                    name={"Engine"}
                    materialEvaluation={materialEvaluation}
                    enemyCaptures={
                        isWhiteView
                            ? board.capturedBlackPieces.slice()
                            : board.capturedWhitePieces.slice()
                    }
                    playerCaptures={
                        isWhiteView
                            ? board.capturedWhitePieces.slice()
                            : board.capturedBlackPieces.slice()
                    }
                />
                <Info
                    staticEvaluation={staticEvaluation}
                    depthEvaluation={null}
                    searchCount={null}
                    analysisTime={null}
                />
                <Player
                    isUp={false}
                    color={isWhiteView ? PieceColors.WHITE : PieceColors.BLACK}
                    name={"Player"}
                    materialEvaluation={materialEvaluation}
                    enemyCaptures={
                        isWhiteView
                            ? board.capturedWhitePieces.slice()
                            : board.capturedBlackPieces.slice()
                    }
                    playerCaptures={
                        isWhiteView
                            ? board.capturedBlackPieces.slice()
                            : board.capturedWhitePieces.slice()
                    }
                />
                <Settings depth={depth} setDepth={setDepth} />
            </div>
            <EvaluationBar staticEvaluation={staticEvaluation} />
        </div>
    );
};
