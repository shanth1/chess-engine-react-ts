import { Button } from "shared/Button";
import { ReactComponent as DefaultBoardFenIcon } from "./DefaultBoardFen.svg";

interface IDefaultFenButtonProps {
    setFen: React.Dispatch<React.SetStateAction<string>>;
}

export const DefaultFenButton: React.FC<IDefaultFenButtonProps> = ({
    setFen,
}) => {
    const onClick = () => {
        setFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    };
    return <Button Icon={DefaultBoardFenIcon} onClick={onClick} />;
};
