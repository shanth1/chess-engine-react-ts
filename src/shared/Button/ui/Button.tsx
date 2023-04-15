import { IButtonProps } from "../types/props";
import styles from "./styles.module.css";

export const Button = ({ text, onClick }: IButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
};
