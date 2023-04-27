import { Analysis } from "widgets/Analysis";
import { BoardManager } from "widgets/BoardManager";
import { ChessGame } from "widgets/ChessGame";
import { Header } from "widgets/Header";
import { History } from "widgets/History";
import { board } from "../board";
import { Game } from "../Game";
import styles from "./style.module.css";

const game: TGame = new Game(board);

console.log(game);
export const GamePage: React.FC = () => {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.body_wrapper}>
                <div className={styles.horizontal_split}>
                    <Analysis game={game} />
                    <ChessGame game={game} />
                    <History />
                </div>
                <BoardManager />
            </div>
        </div>
    );
};
