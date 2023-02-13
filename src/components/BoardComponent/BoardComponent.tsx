import { Square } from "../../models/Square";
import { Colors, PieceBinaryCodes } from "../../models/_enums";
import SquareComponent from "../SquareComponent/SquareComponent";
import styles from "./BoardComponent.module.css";

export interface IBoardProps {
    boardPosition: Array<number>;
}

const squares: Array<Square> = [];
let index: number = 0;
for (let rank: number = 7; rank >= 0; rank--) {
    for (let file: number = 0; file < 8; file++) {
        const color: Colors =
            (file + rank) % 2 !== 0 ? Colors.WHITE : Colors.BLACK;
        squares.push(
            new Square(index, color, file, rank, PieceBinaryCodes.NONE),
        );
        index += 1;
    }
}

const BoardComponent: React.FC<IBoardProps> = (props) => {
    return (
        <div className={styles.board}>
            {squares.map((square, index) => {
                square.piece = props.boardPosition[index];
                return (
                    <div key={square.index}>
                        {<SquareComponent square={square} />}
                    </div>
                );
            })}
        </div>
    );
};
export default BoardComponent;
