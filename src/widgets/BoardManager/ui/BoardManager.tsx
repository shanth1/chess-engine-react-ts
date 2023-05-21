import {
    ArrowMovesIcon,
    BlackAttackDisplayIcon,
    DefaultBoardFenIcon,
    EmptyBoardFenIcon,
    ExportDataIcon,
    FigureDisplayIcon,
    FlipBoardIcon,
    HelpMoveIcon,
    LoadDataIcon,
    OpeningBookIcon,
    ResignIcon,
    UnmakeMoveIcon,
    WhiteAttackDisplayIcon,
} from "../assets";
import { Button } from "../components/Button/Button";
import styles from "./styles.module.css";

export const BoardManager: React.FC = () => {
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
                <Button Icon={FigureDisplayIcon} />
                <Button Icon={WhiteAttackDisplayIcon} />
                <Button Icon={BlackAttackDisplayIcon} />
                <Button Icon={FlipBoardIcon} />
            </div>

            <div className={styles.fenInputWrapper}>
                <span>FEN:</span>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.fenControlWrapper}>
                <Button Icon={EmptyBoardFenIcon} />
                <Button Icon={DefaultBoardFenIcon} />
                <Button Icon={ExportDataIcon} />
                <Button Icon={LoadDataIcon} />
            </div>

            <div className={styles.pgnInputWrapper}>
                <span>PGN:</span>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.pgnControlWrapper}>
                <Button Icon={OpeningBookIcon} />
                <Button Icon={ExportDataIcon} />
                <Button Icon={LoadDataIcon} />
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
