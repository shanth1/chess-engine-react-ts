import { Analysis } from "widgets/Analysis";
import { BoardManager } from "widgets/BoardManager";
import { ChessGame } from "widgets/ChessGame";
import { Header } from "widgets/Header";
import { History } from "widgets/History";
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
