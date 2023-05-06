import styles from "./styles.module.css";
export const Info = () => {
    return (
        <div className={styles.info}>
            <div>Depth evaluation: +20</div>
            <div>Static evaluation: +20</div>
            <div>Search count: 100000</div>
            <div>Analysis time: 10s</div>
        </div>
    );
};
