import { Move } from "./components/Move/Move";
import styles from "./styles.module.css";

interface IHistoryListProps {
    history: Array<IBoard>;
}

export const MoveList: React.FC<IHistoryListProps> = ({ history }) => {
    const historyList = [];

    for (let index = 1; index < history.length; index += 2) {
        historyList.push(<div className={styles.number}>1</div>);
        historyList.push(<Move board={history[index]} />);
        if (history[index + 1]) {
            historyList.push(<Move board={history[index + 1]} />);
        }
    }

    return (
        <div>
            {historyList.length === 0 ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    {"Move list is empty ):"}
                </div>
            ) : (
                <div className={styles.moveItems}>{historyList}</div>
            )}
        </div>
    );
};
