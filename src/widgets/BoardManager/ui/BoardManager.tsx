import { useState } from "react";
import { Input } from "shared/Input";
import {
    ArrowMovesIcon,
    BlackAttackDisplayIcon,
    ExportDataIcon,
    HelpMoveIcon,
    OpeningBookIcon,
    ResignIcon,
    UnmakeMoveIcon,
    WhiteAttackDisplayIcon,
} from "../assets";
import { Button } from "../../../shared/Button/ui/Button";
import styles from "./styles.module.css";
import { FlipBoardButton } from "../components/FlipBoardButton/FlipBoardButton";
import { LoadFenButton } from "../components/LoadFenButton/LoadFenButton";
import { LoadPgnButton } from "../components/LoadPgnButton/LoadPgnButton";
import { EmptyFenButton } from "../components/EmptyFenButton/EmptyFenButton";
import { DefaultFenButton } from "../components/DefaultFenButton/DefaultFenButton";
import { PieceVisibilityButton } from "../components/PieceVisibilityButton/PieceVisibilityButton";

export const BoardManager: React.FC = () => {
    const [fen, setFen] = useState(
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    );
    const onFenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFen(event.target.value);
    };

    const [pgn, setPgn] = useState("");
    const onPgnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPgn(event.target.value);
    };

    return (
        <div className={styles.boardManager}>
            <div className={styles.engineControlWrapper}>
                <Button Icon={ArrowMovesIcon} />
                <Button Icon={HelpMoveIcon} />
            </div>
            <div className={styles.historyControlWrapper}>
                <Button Icon={UnmakeMoveIcon} />
                <Button Icon={ResignIcon} />
            </div>

            <div className={styles.boardControlWrapper}>
                <PieceVisibilityButton />
                <Button Icon={WhiteAttackDisplayIcon} />
                <Button Icon={BlackAttackDisplayIcon} />
                <FlipBoardButton />
            </div>

            <div className={styles.fenInputWrapper}>
                <span>FEN</span>
                <Input value={fen} handlerChange={onFenChange} />
            </div>
            <div className={styles.fenControlWrapper}>
                <EmptyFenButton setFen={setFen} />
                <DefaultFenButton setFen={setFen} />
                <Button Icon={ExportDataIcon} />
                <LoadFenButton fen={fen} setFen={setFen} />
            </div>

            <div className={styles.pgnInputWrapper}>
                <span>PGN:</span>
                <Input value={pgn} handlerChange={onPgnChange} />
            </div>
            <div className={styles.pgnControlWrapper}>
                <Button Icon={OpeningBookIcon} />
                <Button Icon={ExportDataIcon} />
                <LoadPgnButton />
            </div>

            <div className={styles.clock}>
                <div className={[styles.timer, styles.white].join(" ")}>
                    4:12
                </div>
                <div className={[styles.timer, styles.black].join(" ")}>
                    3:23
                </div>
            </div>
        </div>
    );
};
