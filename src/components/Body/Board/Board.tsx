import style from "./Board.module.css";
import BoardComponent from "./BoardComponent/BoardComponent";

export const Board = () => {
    return (
        <div className={style.board_wrapper}>
            <div className={style.board}>
                <BoardComponent />
            </div>
        </div>
    );
};
