import styles from "./PieceComponent.module.css";

interface IPiece {}

const PieceComponent: React.FC<IPiece> = (props) => {
    const icon = require("./../../assets/pixel/bK.png");
    return <img className={styles.piece} alt="" src={icon} />;
};
export default PieceComponent;
