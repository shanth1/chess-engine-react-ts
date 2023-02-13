import "./App.css";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import { ColorBinaryCodes, PieceBinaryCodes } from "./models/_enums";
import { setGameFromFen } from "./store/state";

const boardPosition: Array<number> = [];

for (let index = 0; index < 64; index++) {
    boardPosition.push(PieceBinaryCodes.NONE);
}

boardPosition[21] = ColorBinaryCodes.BLACK | PieceBinaryCodes.QUEEN;

setGameFromFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");

const App = () => {
    return (
        <div>
            <BoardComponent boardPosition={boardPosition} />
        </div>
    );
};

export default App;
