import "./App.css";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import { ColorBinaryCodes, PieceBinaryCodes } from "./models/_enums";

const boardPosition: Array<number> = [];

for (let index = 0; index < 64; index++) {
    boardPosition.push(PieceBinaryCodes.NONE);
}

boardPosition[21] = ColorBinaryCodes.BLACK | PieceBinaryCodes.QUEEN;

const App = () => {
    return (
        <div>
            <BoardComponent boardPosition={boardPosition} />
        </div>
    );
};

export default App;
