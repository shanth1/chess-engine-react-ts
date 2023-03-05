import { useAppDispatch } from "app/hooks/hooks";
import { useState } from "react";
import { Button, Input } from "shared";
import { setFenPosition } from "widgets/ChessGame/model/gameSlice";

export const LoadFen: React.FC = () => {
    const dispatch = useAppDispatch();

    const [value, setText] = useState(
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    );

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    const onClick = () => {
        dispatch(setFenPosition({ fen: value }));
        setText("");
    };

    return (
        <div>
            <Input value={value} handlerChange={handlerChange} />
            <Button text="Load FEN" onClick={onClick} />
        </div>
    );
};
