import { changeColorView } from "api/playerSlice";
import { useAppDispatch } from "app";
import { Button } from "shared/Button";

export const FlipBoard = () => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(changeColorView());
    };
    return <Button text="Flip" onClick={onClick}></Button>;
};
