import styles from "./styles.module.css";

interface IHeaderProps {
    level: number;
}

export const Header: React.FC<IHeaderProps> = ({ level }) => {
    return <div className={styles.header}>Engine {level} Level</div>;
};
