import { Board } from "features/Board";

interface IGameProps {
    game: TGame;
}

export const ChessGame: React.FC<IGameProps> = ({ game }) => {
    return <Board game={game} />;
};
