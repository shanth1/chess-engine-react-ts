import styles from "./styles.module.css";

interface IBarProps {
    staticEvaluation: number;
}

export const EvaluationBar: React.FC<IBarProps> = ({ staticEvaluation }) => {
    const evaluation: number = null || staticEvaluation;

    const getPercentEvaluation = (evaluation: number): number => {
        const colorCoefficient = evaluation >= 0 ? 1 : -1;
        const logEvaluation =
            colorCoefficient * Math.log2(Math.abs(evaluation) + 1);

        const border = 5;
        const percentCoefficient = 50 / border;
        const minEvaluation = -border;
        const maxEvaluation = border;

        let formattedEvaluation = logEvaluation;
        if (logEvaluation > maxEvaluation) {
            formattedEvaluation = maxEvaluation;
        } else if (logEvaluation < minEvaluation) {
            formattedEvaluation = minEvaluation;
        }

        const percentEvaluation =
            (border + formattedEvaluation) * percentCoefficient;
        return percentEvaluation;
    };

    const percentEvaluation = getPercentEvaluation(evaluation);

    return (
        <div className={styles.evaluationBar}>
            <div
                style={{ height: `${100 - percentEvaluation}%` }}
                className={styles.evaluationBlack}
            ></div>
            <div
                style={{ height: `${percentEvaluation}%` }}
                className={styles.evaluationWhite}
            ></div>
        </div>
    );
};
