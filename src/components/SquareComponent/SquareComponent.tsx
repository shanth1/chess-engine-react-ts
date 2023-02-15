import { Square } from "../../models/Square";
import { Colors, PieceCodes } from "../../models/_enums";
import styles from "./SquareComponent.module.css";

import PieceComponent from "../PieceComponent/PieceComponent";

export interface ISquareProps {
    square: Square;
}

const SquareComponent: React.FC<ISquareProps> = (props) => {
    const color: Colors = props.square.color;
    const piece: PieceCodes | undefined = props.square.piece;
    return (
        <div className={[styles.square, styles[color]].join(" ")}>
            {!!piece && <PieceComponent pieceCode={piece} />}
        </div>
    );
};
export default SquareComponent;
