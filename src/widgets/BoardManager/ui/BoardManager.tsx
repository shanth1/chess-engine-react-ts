import { LoadFen } from "features";
import { FlipBoard } from "features/FlipBoard";
import styles from "./styles.module.css";

export const BoardManager: React.FC = () => {
    return (
        <div className={styles.board_manager}>
            <LoadFen />
            <FlipBoard />
        </div>
    );
};
