import styles from "./PieceComponent.module.css";

interface IPiece {
    icon: string;
}

const PieceComponent: React.FC<IPiece> = (props) => {
    return <img className={styles.piece} alt="" src={props.icon} />;
};
export default PieceComponent;
