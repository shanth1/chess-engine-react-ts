import styles from "./styles.module.css";

interface IInputProps {
    value: string;
    handlerChange: React.ChangeEventHandler<HTMLInputElement>;
}

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
