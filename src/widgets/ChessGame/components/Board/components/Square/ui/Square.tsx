import { getFileName } from "shared/boardInfo";
import { Piece } from "../../Piece/ui/Piece";
import { ISquareProps } from "../types/interfaces";
import { getSquareStyle } from "./lib/squareStyle";
import styles from "./styles.module.css";

export const Square: React.FC<ISquareProps> = ({
    square,
    resolveSquareClick,
}) => {
    const { index, renderIndex, color, piece, isFriendly } = square;
    const squareStyle: string = getSquareStyle(square);
    const fileName =
        Math.floor(renderIndex / 8) === 7 ? getFileName(index) : "";
    const fileIndex = renderIndex % 8;
    const rankCorrection = index === renderIndex ? 1 : 0;
    const rankName =
        fileIndex === 7 ? Math.floor((64 - index) / 8) + rankCorrection : "";

    return (
        <div className={squareStyle} onClick={() => resolveSquareClick(square)}>
            {fileName && (
                <div className={[styles.file, styles[color]].join(" ")}>
                    {fileName}
                </div>
            )}
            {rankName && (
                <div className={[styles.rank, styles[color]].join(" ")}>
                    {rankName}
                </div>
            )}
            {!!piece && <Piece piece={piece} isFriendly={isFriendly} />}
        </div>
    );
};
