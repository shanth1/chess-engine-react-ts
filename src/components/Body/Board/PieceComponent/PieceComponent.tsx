import {
    ColorCodes,
    ColorFileNames,
    PieceFileNames,
    PieceStyles,
} from "../../../../models/_enums";
import styles from "./PieceComponent.module.css";

interface IPiece {
    pieceCode: number;
}

const colorBitMask = 0b11000;
const pieceBitMask = 0b00111;

const iconStyle: PieceStyles = PieceStyles.PIXEL;

const PieceComponent: React.FC<IPiece> = (props) => {
    const pieceFileName: string =
        PieceFileNames[props.pieceCode & pieceBitMask];
    const colorFileName: string =
        (props.pieceCode & colorBitMask) === ColorCodes.WHITE
            ? ColorFileNames.WHITE
            : ColorFileNames.BLACK;
    const iconPath = require(`./../../../..//assets/${iconStyle}/${colorFileName}${pieceFileName}.png`);

    return <img className={styles.piece} alt="" src={iconPath} />;
};
export default PieceComponent;
