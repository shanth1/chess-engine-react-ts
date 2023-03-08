import styles from "./styles.module.css";
import { IPieceProps } from "../types/interfaces";
import { getIconPath } from "../lib/iconPath";
import { PieceStyles } from "../types/enums";

export const Piece: React.FC<IPieceProps> = ({ pieceCode }) => {
    const iconPath = getIconPath(pieceCode, PieceStyles.PIXEL);

    return <img className={styles.piece} alt="" src={iconPath} />;
};
