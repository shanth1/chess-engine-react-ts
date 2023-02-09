import styles from "./SquareComponent.module.css";

export interface ISquareComponent {
    isWhite: boolean;
    position: Array<number>;
    index: number;
}

const SquareComponent: React.FC<ISquareComponent> = (props) => {
    const whiteClass: string = props.isWhite ? styles.white : styles.black;
    return (
        <div className={[styles.square, whiteClass].join(" ")}>
            {props.position.join()} {props.index}
        </div>
    );
};
export default SquareComponent;
