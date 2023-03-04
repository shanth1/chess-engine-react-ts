import styles from "./styles.module.css";

interface IButtonProps {
    text: string;
    onClick: () => void;
}

export const Button = ({ text, onClick }: IButtonProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
};
