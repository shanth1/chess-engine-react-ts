import {
    ColorBinaryMask,
    ColorFileNames,
    PieceBinaryMask,
    PieceFileNames,
} from "../../models/_enums";
import styles from "./PieceComponent.module.css";

interface IPiece {
    pieceCode: number;
}

const PieceComponent: React.FC<IPiece> = (props) => {
    const pieceFileName: string =
        PieceFileNames[props.pieceCode & PieceBinaryMask];
    const colorFileName: string =
        ColorFileNames[(props.pieceCode & ColorBinaryMask) / 8 - 1];

    const icon = require(`./../../assets/pixel/${colorFileName}${pieceFileName}.png`);

    return <img className={styles.piece} alt="" src={icon} />;
};
export default PieceComponent;
