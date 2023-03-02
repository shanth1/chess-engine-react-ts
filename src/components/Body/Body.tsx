import style from "./Body.module.css";
import Analysis from "./Analysis/Analysis";
import History from "./History/History";
import BoardManager from "./Board/BoardManager/BoardManager";
import { Board } from "./Board/Board";

const Body: React.FC = () => {
    return (
        <header className={style.body}>
            <div className={style.body_wrapper}>
                <Analysis />
                <Board />
                <History />
                <BoardManager />
            </div>
        </header>
    );
};

export default Body;
