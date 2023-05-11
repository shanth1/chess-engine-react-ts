import { useAppSelector } from "shared/hooks";
import styles from "./styles.module.css";

interface IInfoProps {
    staticEvaluation: number;
    depthEvaluation: number | null;
    searchCount: number | null;
    analysisTime: null | null;
}

export const Info: React.FC<IInfoProps> = ({ staticEvaluation }) => {
    const { depthEvaluation, searchCount } = useAppSelector(
        (state) => state.engine,
    );

    return (
        <div className={styles.info}>
            <div>
                Depth evaluation: {depthEvaluation > 0 && "+"}
                {depthEvaluation}
            </div>
            <div>
                Static evaluation: {staticEvaluation > 0 && "+"}
                {staticEvaluation}
            </div>
            <div>Search count: {searchCount}</div>
            <div>Analysis time: 10s</div>
        </div>
    );
};
