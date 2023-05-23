import { Button } from "shared/Button";
import { LoadDataIcon } from "widgets/BoardManager/assets";
import styles from "./styles.module.css";

export const LoadPgnButton = () => {
    return (
        <div className={styles.button}>
            <Button Icon={LoadDataIcon} />;
        </div>
    );
};
