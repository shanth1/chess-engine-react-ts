import { loafFen } from "entities/gameSlice";
import { Button } from "shared/Button";
import { useAppDispatch } from "shared/hooks";
import { LoadDataIcon } from "widgets/BoardManager/assets";
import { getBoardFromFen } from "./model/loadFen";

interface ILoadFenButtonProps {
    fen: string;
    setFen: React.Dispatch<React.SetStateAction<string>>;
}

export const LoadFenButton: React.FC<ILoadFenButtonProps> = ({
    fen,
    setFen,
}) => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        const board: IBoard = getBoardFromFen(fen);
        dispatch(loafFen({ board: board }));
        setFen("");
    };

    return <Button Icon={LoadDataIcon} onClick={onClick} />;
};
