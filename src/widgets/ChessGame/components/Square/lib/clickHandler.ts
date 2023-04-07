import { AppDispatch } from "app";
import { getPieceColor } from "api/lib/gettingPieceInfo/PieceColor";
import { PieceColors } from "widgets/ChessGame/types/enums";
import { ISquare } from "widgets/ChessGame/types/interfaces";
import { makeMove } from "api/model";

export const getClickHandler = (
    dispatch: AppDispatch,
    { index, pieceCode, isLegalToMove }: ISquare,
    piecePlacement: Array<number>,
    activeColor: number,
    isSelected: boolean,
    selectedIndex: number | null,
    setSelectedIndex: (selectedSquareIndex: number | null) => void,
): (() => void) => {
    return function onClickHandler(): void {
        const pieceColor: PieceColors = getPieceColor(pieceCode);
        const isPlayerTurn: boolean = activeColor === pieceColor;

        if (!isPlayerTurn && !isLegalToMove) return;
        setSelectedIndex(isSelected || isLegalToMove ? null : index);

        if (!isLegalToMove || selectedIndex === null) return;
        makeMove(dispatch, piecePlacement, selectedIndex, index, activeColor);
    };
};
