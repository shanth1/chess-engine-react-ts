import { Square } from "../../models/Square";
import { Colors } from "../../models/_enums";
import styles from "./SquareComponent.module.css";

export interface ISquareProps {
    square: Square;
}

const SquareComponent: React.FC<ISquareProps> = (props) => {
    const color: Colors = props.square.color;
    return (
        <div className={[styles.square, styles[color]].join(" ")}>
            {props.square.name}
        </div>
    );
};
export default SquareComponent;
