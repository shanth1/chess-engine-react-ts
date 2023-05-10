import { PieceColors } from "shared/enums";
import { useAppSelector } from "shared/hooks";
import styles from "./styles.module.css";

interface IStatusProps {
    color: number;
}

export const Status: React.FC<IStatusProps> = ({ color }) => {
    const status = useAppSelector((state) => state.engine.status);
    const activeColor = useAppSelector((state) => state.game.board.activeColor);

    const activeStyle = [styles.active].join(" ");
    const isWhite = color === PieceColors.WHITE;
    const borderColorStyle = isWhite ? styles.borderWhite : styles.borderBlack;
    const containerStyle = [styles.container, borderColorStyle].join(" ");
    const spinnerStyle = [styles.spinner, borderColorStyle].join(" ");
    return (
        <div className={styles.status}>
            {(activeColor !== color || status === "off") && (
                <div className={containerStyle}></div>
            )}
            {activeColor === color && status === "analysis" && (
                <div className={spinnerStyle}></div>
            )}
            {activeColor === color && <div className={activeStyle}></div>}
        </div>
    );
};
