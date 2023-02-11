import styles from "./PieceComponent.module.css";

interface IPiece {}

const PieceComponent: React.FC<IPiece> = (props) => {
    return <img className={styles.piece} alt="" src="" />;
};
export default PieceComponent;
