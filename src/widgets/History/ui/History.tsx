import { previousMove } from "entities/gameSlice";
import { useAppDispatch } from "shared/hooks";
import styles from "./styles.module.css";

export const History: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();

    return (
        <div className={styles.history}>
            History
            <button
                onClick={() => {
                    dispatch(previousMove());
                }}
            >
                {"<<"}
            </button>
        </div>
    );
};
