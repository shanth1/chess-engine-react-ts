import { loafFen } from "entities/gameSlice";
import { useState } from "react";
import { Button } from "shared/Button";
import { useAppDispatch } from "shared/hooks";
import { Input } from "shared/Input";
import { getBoardFromFen } from "../model/loadFen";

export const LoadFen: React.FC = () => {
    const dispatch = useAppDispatch();

    const [fen, setFen] = useState(
        "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
    );

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFen(event.target.value);
    };

    const onClick = () => {
        const board: IBoard = getBoardFromFen(fen);
        dispatch(loafFen({ board: board }));
        setFen("");
    };

    return (
        <div>
            <Input value={fen} handlerChange={handlerChange} />
            <Button text="Load FEN" onClick={onClick} />
        </div>
    );
};
