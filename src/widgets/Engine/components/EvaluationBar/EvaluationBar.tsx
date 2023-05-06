import styles from "./styles.module.css";
export const EvaluationBar = () => {
    return (
        <div className={styles.evaluationBar}>
            <div className={styles.evaluationBlack}></div>
            <div className={styles.evaluationWhite}></div>
        </div>
    );
};
