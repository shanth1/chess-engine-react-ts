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
import styles from "./styles.module.css";

export const BoardManager: React.FC = () => {
    return (
        <div className={styles.boardManager}>
            <div className={styles.engineControlWrapper}>
                <div className={styles.button}>
                    <ArrowMovesIcon />
                </div>
                <div className={styles.button}>
                    <HelpMoveIcon />
                </div>
            </div>
            <div className={styles.historyControlWrapper}>
                <div className={styles.button}>
                    <UnmakeMoveIcon />
                </div>
                <div className={styles.button}>
                    <ResignIcon />
                </div>
            </div>

            <div className={styles.boardControlWrapper}>
                <div className={styles.button}>
                    <FigureDisplayIcon />
                </div>
                <div className={styles.button}>
                    <WhiteAttackDisplayIcon />
                </div>
                <div className={styles.button}>
                    <BlackAttackDisplayIcon />
                </div>
                <div className={styles.button}>
                    <FlipBoardIcon />
                </div>
            </div>

            <div className={styles.fenInputWrapper}>
                <span>FEN:</span>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.fenControlWrapper}>
                <div className={styles.button}>
                    <EmptyBoardFenIcon />
                </div>
                <div className={styles.button}>
                    <DefaultBoardFenIcon />
                </div>
                <div className={styles.button}>
                    <ExportDataIcon />
                </div>
                <div className={styles.button}>
                    <LoadDataIcon />
                </div>
            </div>

            <div className={styles.pgnInputWrapper}>
                <span>PGN:</span>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.pgnControlWrapper}>
                <div className={styles.button}>
                    <OpeningBookIcon />
                </div>
                <div className={styles.button}>
                    <ExportDataIcon />
                </div>
                <div
                    style={{ borderRadius: "0 0 3vh 0" }}
                    className={styles.button}
                >
                    <LoadDataIcon />
                </div>
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
