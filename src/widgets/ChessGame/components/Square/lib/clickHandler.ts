import { AppDispatch } from "app";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import { getFileName } from "widgets/ChessGame/lib/indexToNameConverter/fileNames";
import {
    changeActiveColor,
    deletePiece,
    moveFigure,
    promotesPawn,
    updateCastlingRights,
    updateEnPassant,
} from "widgets/ChessGame/model";
import { PieceColors, PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "../../Board/model/squares";
import { getTargetIndex } from "./targetIndex";

export const getClickHandler = (
    dispatch: AppDispatch,
    activeColor: PieceColors,
    pieceCode: number,
    isLegalToMove: boolean,
    isSelected: boolean,
    selectedSquareIndex: number | null,
    setSelectedSquareIndex: (selectedSquareIndex: number | null) => void,
    index: number,
) => {
    return function onClickHandler() {
        const pieceColor: PieceColors = getPieceColor(pieceCode);
        const isPlayerTurn: boolean = activeColor === pieceColor;

        if (!isPlayerTurn && !isLegalToMove) return;
        setSelectedSquareIndex(isSelected || isLegalToMove ? null : index);

        if (!isLegalToMove || selectedSquareIndex === null) return;
        const targetIndex = getTargetIndex(squares, index, activeColor);
        dispatch(
            moveFigure({
                startIndex: selectedSquareIndex,
                targetIndex: targetIndex,
            }),
        );
        if (
            getPieceType(squares[selectedSquareIndex].pieceCode) ===
                PieceTypes.PAWN &&
            Math.abs(selectedSquareIndex - index) % 8 !== 0 &&
            !squares[targetIndex].pieceCode
        ) {
            const captureIndex =
                getPieceColor(squares[selectedSquareIndex].pieceCode) ===
                PieceColors.WHITE
                    ? targetIndex + 8
                    : targetIndex - 8;
            dispatch(deletePiece({ index: captureIndex }));
        }
        if (
            getPieceType(squares[selectedSquareIndex].pieceCode) ===
                PieceTypes.PAWN &&
            Math.abs(selectedSquareIndex - index) === 16
        ) {
            const fileName = getFileName(index);
            dispatch(updateEnPassant({ enPassant: fileName }));
        } else {
            dispatch(updateEnPassant({ enPassant: "-" }));
        }
        if (
            getPieceType(squares[selectedSquareIndex].pieceCode) ===
                PieceTypes.KING &&
            Math.abs(selectedSquareIndex - targetIndex) >= 2 &&
            Math.abs(selectedSquareIndex - targetIndex) <= 4
        ) {
            const rookStartIndex =
                index % 8 >= 6
                    ? selectedSquareIndex + 3
                    : selectedSquareIndex - 4;
            const rookTargetIndex =
                index % 8 >= 6
                    ? selectedSquareIndex + 1
                    : selectedSquareIndex - 1;

            dispatch(
                moveFigure({
                    startIndex: rookStartIndex,
                    targetIndex: rookTargetIndex,
                }),
            );
        }
        if (
            (getPieceType(squares[selectedSquareIndex].pieceCode) ===
                PieceTypes.PAWN &&
                getPieceColor(squares[selectedSquareIndex].pieceCode) ===
                    PieceColors.WHITE &&
                Math.floor(targetIndex / 8) === 0) ||
            (getPieceType(squares[selectedSquareIndex].pieceCode) ===
                PieceTypes.PAWN &&
                getPieceColor(squares[selectedSquareIndex].pieceCode) ===
                    PieceColors.BLACK &&
                Math.floor(targetIndex / 8) === 7)
        ) {
            dispatch(promotesPawn({ index: targetIndex }));
        }
        dispatch(changeActiveColor());
        dispatch(
            updateCastlingRights({
                squareName: squares[selectedSquareIndex].name,
            }),
        );
    };
};
