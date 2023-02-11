import styles from "./BoardComponent.module.css";

export interface IBoardProps {}

const BoardComponent: React.FC<IBoardProps> = (props) => {
    return <div className={styles.board}></div>;
};
export default BoardComponent;
