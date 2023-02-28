import styles from "./InputFenComponent.module.css";

const InputFenComponent: React.FC = () => {
    return (
        <div>
            <input
                className={styles.input}
                type="text"
                value="Input FEN position"
            />
            <button className={styles.button}>Load FEN</button>
        </div>
    );
};
export default InputFenComponent;
