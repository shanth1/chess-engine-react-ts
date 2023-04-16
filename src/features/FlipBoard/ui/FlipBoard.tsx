import { changeColorView } from "api/playerSlice";
import { Button } from "shared/Button";
import { useAppDispatch } from "shared/hooks";

export const FlipBoard = () => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(changeColorView());
    };
    return <Button text="Flip" onClick={onClick}></Button>;
};
