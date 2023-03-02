import style from "./BoardManager.module.css";
import InputFenComponent from "./InputFenComponent/InputFenComponent";

const BoardManager: React.FC = () => {
    return (
        <header className={style.board_manager}>
            <InputFenComponent />
        </header>
    );
};

export default BoardManager;
