import { AppDispatch } from "app";
import { ISquare } from "features/Board/types/interfaces";
import { makeMove } from "entities/movement";
import { getPieceColor, PieceColors } from "shared";

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
