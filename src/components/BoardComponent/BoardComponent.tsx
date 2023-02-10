import { Board } from "../../models/Board";
import { Square } from "../../models/Square";
import SquareComponent from "../SquareComponent/SquareComponent";
import styles from "./BoardComponent.module.css";

export interface IBoardProps {
    board: Board;
}

const BoardComponent: React.FC<IBoardProps> = (props) => {
    const squares: Array<Square> = props.board.squares;

    const squaresElement = squares.map((square) => {
        return (
            <div key={square.index}>{<SquareComponent square={square} />}</div>
        );
    });

    return <div className={styles.board}>{squaresElement}</div>;
};
export default BoardComponent;
