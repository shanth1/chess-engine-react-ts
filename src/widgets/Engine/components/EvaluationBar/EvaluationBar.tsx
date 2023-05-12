import styles from "./styles.module.css";

interface IBarProps {
    staticEvaluation: number;
}

export const EvaluationBar: React.FC<IBarProps> = ({ staticEvaluation }) => {
    const evaluation: number = null || staticEvaluation;

    const getPercentEvaluation = (evaluation: number): number => {
        const border = 20;
        const percentCoefficient = 50 / border;
        const minEvaluation = -border;
        const maxEvaluation = border;

        let formattedEvaluation = evaluation;
        if (evaluation > maxEvaluation) {
            formattedEvaluation = maxEvaluation;
        } else if (evaluation < minEvaluation) {
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
