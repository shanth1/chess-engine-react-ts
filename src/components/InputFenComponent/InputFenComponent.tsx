import styles from "./InputFenComponent.module.css";
import { setFenPosition } from "../../redux/slices/gameSlice/gameSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";

const InputFenComponent: React.FC = () => {
    const [text, setText] = useState(
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    );
    const dispatch = useAppDispatch();

    return (
        <div>
            <input
                className={styles.input}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className={styles.button}
                onClick={() => {
                    dispatch(setFenPosition({ fen: text }));
                    setText("");
                }}
            >
                Load FEN
            </button>
        </div>
    );
};
export default InputFenComponent;
