import { Button } from "shared/Button";
import { ReactComponent as EmptyBoardFenIcon } from "./EmptyBoardFen.svg";

interface IEmptyFenButtonProps {
    setFen: React.Dispatch<React.SetStateAction<string>>;
}

export const EmptyFenButton: React.FC<IEmptyFenButtonProps> = ({ setFen }) => {
    const onClick = () => {
        setFen("8/8/8/8/8/8/8/8 w KQkq - 0 1");
    };
    return <Button Icon={EmptyBoardFenIcon} onClick={onClick} />;
};
