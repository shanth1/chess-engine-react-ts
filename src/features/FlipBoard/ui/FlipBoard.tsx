import { changeColorView } from "api/model/playerSlice/playerSlice";
import { useAppDispatch } from "app";
import { Button } from "shared";

export const FlipBoard = () => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(changeColorView());
    };
    return <Button text="Flip" onClick={onClick}></Button>;
};
