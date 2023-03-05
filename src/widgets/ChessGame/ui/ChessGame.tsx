import { Board } from "../components/Board";
import styles from "./styles.module.css";

export const ChessGame: React.FC = () => {
    return (
        <div className={styles.board}>
            <Board />
        </div>
    );
};
