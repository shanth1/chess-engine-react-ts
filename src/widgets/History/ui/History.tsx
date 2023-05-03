import { useAppSelector } from "shared/hooks";
import { Header } from "../components/Header/Header";
import { MoveList } from "../components/MoveList/MoveList";
import { Navigation } from "../components/Navigation/Navigation";
import styles from "./styles.module.css";

export const History: React.FC = () => {
    const history = useAppSelector((state) => state.game.history);
    return (
        <div className={styles.history}>
            <Header />
            <MoveList history={history} />
            <Navigation />
        </div>
    );
};
