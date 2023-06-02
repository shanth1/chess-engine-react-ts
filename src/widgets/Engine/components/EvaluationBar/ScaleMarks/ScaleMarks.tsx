import styles from "./styles.module.css";

interface IScaleMarksProps {
    color: "white" | "black";
}

const getPercentScaleMark = (scaleMark: number): number => {
    const border = 4;
    const percentCoefficient = 50 / border;
    const percentScaleMark =
        (border + Math.log2(scaleMark + 1)) * percentCoefficient;

    return percentScaleMark / 100;
};

export const ScaleMarks: React.FC<IScaleMarksProps> = ({ color }) => {
    let scaleMarkElements = [];

    const colorStyle = color === "white" ? styles.white : styles.black;
    for (let evaluation = 0; evaluation <= 25; evaluation++) {
        scaleMarkElements.push(
            <div
                style={{
                    top: `calc(${getPercentScaleMark(
                        evaluation,
                    )} * 64vh - 1px)`,
                }}
                className={[styles.scaleMark, colorStyle].join(" ")}
            ></div>,
        );
        scaleMarkElements.push(
            <div
                style={{
                    top: `calc(64vh - ${getPercentScaleMark(
                        evaluation,
                    )} * 64vh - 1px)`,
                }}
                className={[styles.scaleMark, colorStyle].join(" ")}
            ></div>,
        );
    }
    return <div>{scaleMarkElements}</div>;
};
