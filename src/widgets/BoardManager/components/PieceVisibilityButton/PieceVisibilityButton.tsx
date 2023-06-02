import { changePieceVisibility } from "entities/playerSlice";
import { Button } from "shared/Button";
import { useAppDispatch } from "shared/hooks";
import { ReactComponent as FigureDisplay } from "./FigureDisplay.svg";

export const PieceVisibilityButton = () => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(changePieceVisibility());
    };

    return <Button Icon={FigureDisplay} onClick={onClick} />;
};
