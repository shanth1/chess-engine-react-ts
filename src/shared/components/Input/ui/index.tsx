import { IInputProps } from "../types/props";
import styles from "./styles.module.css";

export const Input = ({ value, handlerChange }: IInputProps) => {
    return (
        <input
            className={styles.input}
            type="text"
            value={value}
            onChange={handlerChange}
        />
    );
};
