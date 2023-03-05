import { useAppSelector } from "app/model";
import { Square } from "../../Square";
import { squares } from "../lib/squares";
import styles from "./styles.module.css";

export const Board: React.FC = () => {
    const piecePlacement: Array<number> = useAppSelector(
        (state) => state.game.piecePlacement,
    );

    return (
        <div className={styles.board}>
            {squares.map((square, index) => {
                square.piece = piecePlacement[index];
                return (
                    <div key={square.index}>{<Square square={square} />}</div>
                );
            })}
        </div>
    );
};
