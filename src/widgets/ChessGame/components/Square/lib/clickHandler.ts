import { AppDispatch } from "app";
import { getPieceColor } from "api/lib/gettingPieceInfo/PieceColor";
import { PieceColors } from "widgets/ChessGame/types/enums";
import { ISquare } from "widgets/ChessGame/types/interfaces";
import { makeMove } from "./moves";

export const getClickHandler = (
    dispatch: AppDispatch,
    { index, pieceCode, isLegalToMove }: ISquare,
    activeColor: number,
    isSelected: boolean,
    selectedIndex: number | null,
    setSelectedIndex: (selectedSquareIndex: number | null) => void,
) => {
    return function onClickHandler() {
        const pieceColor: PieceColors = getPieceColor(pieceCode);
        const isPlayerTurn: boolean = activeColor === pieceColor;

        if (!isPlayerTurn && !isLegalToMove) return;
        setSelectedIndex(isSelected || isLegalToMove ? null : index);

        if (!isLegalToMove || selectedIndex === null) return;
        makeMove(dispatch, selectedIndex, index, activeColor);
    };
};
