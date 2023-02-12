import "./App.css";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import { PieceCodes } from "./models/_enums";

const boardPosition: Array<PieceCodes> = [];

for (let index = 0; index < 64; index++) {
    boardPosition.push(PieceCodes.NONE);
}

boardPosition[8] = 1;

const App = () => {
    return (
        <div>
            <BoardComponent boardPosition={boardPosition} />
        </div>
    );
};

export default App;
