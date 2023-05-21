import { changeColorView } from "entities/playerSlice";
import { Button } from "shared/Button";
import { useAppDispatch } from "shared/hooks";
import { ReactComponent as FlipBoardIcon } from "./FlipBoard.svg";

export const FlipBoardButton = () => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(changeColorView());
    };

    return <Button Icon={FlipBoardIcon} onClick={onClick} />;
};
