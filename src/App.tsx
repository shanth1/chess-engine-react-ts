import "./App.css";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import InputFenComponent from "./components/InputFenComponent/InputFenComponent";

const App = () => {
    return (
        <div>
            <InputFenComponent />
            <BoardComponent />
        </div>
    );
};

export default App;
