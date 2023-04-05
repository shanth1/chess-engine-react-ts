import { useAppDispatch } from "app";
import { Button } from "shared";
import { changeColorView } from "api/model";

export const FlipBoard = () => {
    const dispatch = useAppDispatch();

    const onClick = () => {
        dispatch(changeColorView());
    };
    return <Button text="Flip" onClick={onClick}></Button>;
};
