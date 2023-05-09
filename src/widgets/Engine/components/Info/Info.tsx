import styles from "./styles.module.css";

interface IInfoProps {
    staticEvaluation: number;
    depthEvaluation: number | null;
    searchCount: number | null;
    analysisTime: null | null;
}

export const Info: React.FC<IInfoProps> = ({ staticEvaluation }) => {
    return (
        <div className={styles.info}>
            <div>Depth evaluation: +</div>
            <div>Static evaluation: {staticEvaluation}</div>
            <div>Search count: 100000</div>
            <div>Analysis time: 10s</div>
        </div>
    );
};
