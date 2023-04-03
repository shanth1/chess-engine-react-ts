import { AppDispatch } from "app";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { PieceColors } from "widgets/ChessGame/types/enums";
import { makeMove } from "./movement";

export const getClickHandler = (
    dispatch: AppDispatch,
    activeColor: PieceColors,
    pieceCode: number,
    isLegalToMove: boolean,
    isSelected: boolean,
    selectedSquareIndex: number | null,
    index: number,
    setSelectedSquareIndex: (selectedSquareIndex: number | null) => void,
) => {
    return function onClickHandler() {
        const pieceColor: PieceColors = getPieceColor(pieceCode);
        const isPlayerTurn: boolean = activeColor === pieceColor;

        if (!isPlayerTurn && !isLegalToMove) return;
        setSelectedSquareIndex(isSelected || isLegalToMove ? null : index);

        if (!isLegalToMove || selectedSquareIndex === null) return;
        makeMove(dispatch, selectedSquareIndex, index, activeColor);
    };
};
