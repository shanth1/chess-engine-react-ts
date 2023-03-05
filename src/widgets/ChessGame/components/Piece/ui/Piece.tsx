import { colorBitMask, pieceBitMask } from "../lib/bitMasks";
import styles from "./styles.module.css";
import { IPiece } from "../types/interfaces";
import { ColorFileNames, PieceFileNames, PieceStyles } from "../types/enums";
import { IPieceProps } from "../types/props";
import { ColorCodes } from "widgets/ChessGame/types/enums";

const iconStyle: PieceStyles = PieceStyles.PIXEL;

export const Piece: React.FC<IPiece> = ({ pieceCode }: IPieceProps) => {
    const pieceFileName: string = PieceFileNames[pieceCode & pieceBitMask];
    const colorFileName: string =
        (pieceCode & colorBitMask) === ColorCodes.WHITE
            ? ColorFileNames.WHITE
            : ColorFileNames.BLACK;
    const iconPath = require(`../assets/${iconStyle}/${colorFileName}${pieceFileName}.png`);

    return <img className={styles.piece} alt="" src={iconPath} />;
};
