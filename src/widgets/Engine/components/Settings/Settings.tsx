import styles from "./styles.module.css";

interface ISettingsProps {
    depth: number;
    setDepth: (level: number) => void;
}

export const Settings: React.FC<ISettingsProps> = ({ depth, setDepth }) => {
    return (
        <div className={styles.settings}>
            <div
                className={depth === 0 ? styles.active : styles.inactive}
                onClick={() => {
                    setDepth(0);
                }}
            >
                1
            </div>
            <div
                className={depth === 1 ? styles.active : styles.inactive}
                onClick={() => {
                    setDepth(1);
                }}
            >
                2
            </div>
            <div
                className={depth === 2 ? styles.active : styles.inactive}
                onClick={() => {
                    setDepth(2);
                }}
            >
                3
            </div>
            <div
                className={depth === 3 ? styles.active : styles.inactive}
                onClick={() => {
                    setDepth(3);
                }}
            >
                4
            </div>
        </div>
    );
};
