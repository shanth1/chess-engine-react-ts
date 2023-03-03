import { Analysis, Board, BoardManager, Header, History } from "widgets";
import styles from "./style.module.css";

export const GamePage: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.body_wrapper}>
                <div className={styles.horizontal_split}>
                    <Analysis />
                    <Board />
                    <History />
                </div>
                <BoardManager />
            </div>
        </div>
    );
};
