import { FlipBoard } from "features/FlipBoard";
import { LoadFen } from "features/LoadFen";
import styles from "./styles.module.css";

export const BoardManager: React.FC = () => {
    return (
        <div className={styles.boardManager}>
            <div className={styles.historyControlWrapper}></div>
            <div className={styles.engineControlWrapper}></div>
            <div className={styles.boardControlWrapper}>
                <FlipBoard />
            </div>

            <div className={styles.fenInputWrapper}>
                <input className={styles.input} type="text" />
            </div>
            <div className={styles.fenControlWrapper}></div>
        </div>
    );
};
