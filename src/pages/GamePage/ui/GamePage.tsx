import { Engine } from "widgets/Engine";
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
                    <Engine />
                    <ChessGame />
                    <History />
                </div>
                <BoardManager />
            </div>
        </div>
    );
};
