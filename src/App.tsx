import "./App.css";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import { Board } from "./models/Board";
import { Bishop } from "./models/Pieces/Bishop";
import { Square } from "./models/Square";
import { Colors } from "./models/_enums";

const squares: Array<Square> = [];
let index: number = 0;
for (let rank: number = 7; rank >= 0; rank--) {
    for (let file: number = 0; file < 8; file++) {
        const color: Colors =
            (file + rank) % 2 !== 0 ? Colors.WHITE : Colors.BLACK;
        squares.push(new Square(index, color, file, rank, null));
        index += 1;
    }
}

squares[2].piece = new Bishop(Colors.WHITE);

const App = () => {
    return (
        <div>
            <BoardComponent board={new Board(squares)} />
        </div>
    );
};

export default App;
