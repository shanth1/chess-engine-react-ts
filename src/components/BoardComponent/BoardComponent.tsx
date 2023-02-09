import SquareComponent from "../SquareComponent/SquareComponent";
import styles from "./BoardComponent.module.css";

const squares: Array<any> = [];
let index: number = 0;
for (let rank: number = 0; rank < 8; rank++) {
    for (let file: number = 0; file < 8; file++) {
        const isWhite: boolean = (file + rank) % 2 === 0;
        squares.push(
            <SquareComponent
                position={[file, rank]}
                isWhite={isWhite}
                index={index}
            />,
        );
        index += 1;
    }
}

export interface IBoardComponent {}

const BoardComponent: React.FC<IBoardComponent> = (props) => {
    const board = squares.map((square, index) => {
        return <div key={index}>{square}</div>;
    });
    return <div className={styles.board}>{board}</div>;
};
export default BoardComponent;
