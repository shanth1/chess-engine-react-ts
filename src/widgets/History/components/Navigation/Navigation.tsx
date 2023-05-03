import { getFirstPosition, getPreviousMove } from "entities/gameSlice";
import { useAppDispatch } from "shared/hooks";
import styles from "./styles.module.css";

export const Navigation = () => {
    const dispatch: AppDispatch = useAppDispatch();
    return (
        <div className={styles.navigation}>
            <div onClick={() => dispatch(getFirstPosition())}>❮❮</div>
            <div onClick={() => dispatch(getPreviousMove())}>❮</div>
            <div className={styles.inactive}>❯</div>
            <div className={styles.inactive}>❯❯</div>
        </div>
    );
};
