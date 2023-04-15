import { FlipBoard } from "features/FlipBoard";
import { LoadFen } from "features/LoadFen";
import styles from "./styles.module.css";

export const BoardManager: React.FC = () => {
    return (
        <div className={styles.board_manager}>
            <LoadFen />
            <FlipBoard />
        </div>
    );
};
