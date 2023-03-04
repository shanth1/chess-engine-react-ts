import {
    ColorCodes,
    ColorFileNames,
    PieceFileNames,
    PieceStyles,
} from "widgets/ChessGame/types/enums";
import { colorBitMask, pieceBitMask } from "../lib/bitMasks";
import styles from "./styles.module.css";
import { IPiece } from "../types/interfaces";

const iconStyle: PieceStyles = PieceStyles.PIXEL;

export const Piece: React.FC<IPiece> = (props) => {
    const pieceFileName: string =
        PieceFileNames[props.pieceCode & pieceBitMask];
    const colorFileName: string =
        (props.pieceCode & colorBitMask) === ColorCodes.WHITE
            ? ColorFileNames.WHITE
            : ColorFileNames.BLACK;
    const iconPath = require(`../assets/${iconStyle}/${colorFileName}${pieceFileName}.png`);

    return <img className={styles.piece} alt="" src={iconPath} />;
};
