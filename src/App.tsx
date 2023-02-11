import "./App.css";
import BoardComponent from "./components/BoardComponent/BoardComponent";

const App = () => {
    return (
        <div>
            <BoardComponent boardPosition={new Array(64)} />
        </div>
    );
};

export default App;
