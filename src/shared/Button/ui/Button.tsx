import { IButtonProps } from "../types/props";
import styles from "./styles.module.css";

export const Button: React.FC<IButtonProps> = ({ Icon, onClick }) => {
    return (
        <div
            className={styles.button}
            onClick={() => {
                onClick ? onClick() : alert("Functionality not implemented");
            }}
        >
            {<Icon />}
        </div>
    );
};
