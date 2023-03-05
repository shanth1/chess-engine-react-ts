import { Analysis, BoardManager, ChessGame, Header, History } from "widgets";
import styles from "./style.module.css";

export const GamePage: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.body_wrapper}>
                <div className={styles.horizontal_split}>
                    <Analysis />
                    <ChessGame />
                    <History />
                </div>
                <BoardManager />
            </div>
        </div>
    );
};
