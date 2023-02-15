import "./App.css";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import { gameState, setGameFromFen } from "./store/state";

setGameFromFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");

const App = () => {
    return (
        <div>
            <BoardComponent piecePlacement={gameState.piecePlacement} />
        </div>
    );
};

export default App;
