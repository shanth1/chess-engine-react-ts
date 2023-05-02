import styles from "./styles.module.css";
import { IPieceProps } from "../types/interfaces";
import { getIconPath } from "../lib/iconPath";
import { PieceStyles } from "../types/enums";

export const Piece: React.FC<IPieceProps> = ({ piece, isFriendly }) => {
    const iconPath = getIconPath(piece, PieceStyles.PIXEL);

    return (
        <img
            className={[styles.piece, isFriendly ? styles.isFriendly : ""].join(
                " ",
            )}
            alt=""
            src={iconPath}
        />
    );
};
