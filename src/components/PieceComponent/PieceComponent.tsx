import {
    ColorBinaryCodes,
    ColorFileNames,
    PieceFileNames,
} from "../../models/_enums";
import styles from "./PieceComponent.module.css";

interface IPiece {
    pieceCode: number;
}

const colorBinaryMask = 0b11000;
const pieceBinaryMask = 0b00111;

const iconStyle: string = "pixel";

const PieceComponent: React.FC<IPiece> = (props) => {
    const pieceFileName: string =
        PieceFileNames[props.pieceCode & pieceBinaryMask];
    const colorFileName: string =
        (props.pieceCode & colorBinaryMask) === ColorBinaryCodes.BLACK
            ? ColorFileNames.BLACK
            : ColorFileNames.WHITE;

    const iconPath = require(`./../../assets/${iconStyle}/${colorFileName}${pieceFileName}.png`);

    return <img className={styles.piece} alt="" src={iconPath} />;
};
export default PieceComponent;
