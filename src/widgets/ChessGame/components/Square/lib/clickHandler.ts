import { AppDispatch } from "app";
import { getPieceColor } from "widgets/ChessGame/lib/gettingPieceInfo/PieceColor";
import { getPieceType } from "widgets/ChessGame/lib/gettingPieceInfo/PieceType";
import {
    changeActiveColor,
    moveFigure,
    promotesPawn,
    updateCastlingRights,
} from "widgets/ChessGame/model";
import { PieceColors, PieceTypes } from "widgets/ChessGame/types/enums";
import { squares } from "../../Board/model/squares";
import { isPawnPromote } from "../model/checkPawnPromote";
import { enPassantCapture } from "../model/enPassantCapture";
import { moveRook } from "../model/moveRook";
import { pawnDoubleMove } from "../model/pawnDoubleMove";
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

        const selectedPiece = squares[selectedSquareIndex].pieceCode;

        switch (getPieceType(selectedPiece)) {
            case PieceTypes.PAWN:
                console.log("pawn");
                break;
            case PieceTypes.KING:
                console.log("king");
                break;
            case PieceTypes.ROOK:
                console.log("rook");
                break;
            case PieceTypes.BISHOP:
            case PieceTypes.KNIGHT:
            case PieceTypes.QUEEN:
                console.log("other");
                break;
            default:
                alert("wrong piece");
        }

        dispatch(
            moveFigure({
                startIndex: selectedSquareIndex,
                targetIndex: targetIndex,
            }),
        );

        enPassantCapture(dispatch, selectedSquareIndex, targetIndex);
        pawnDoubleMove(dispatch, selectedSquareIndex, targetIndex);
        moveRook(dispatch, selectedSquareIndex, targetIndex);

        if (isPawnPromote(selectedSquareIndex, targetIndex)) {
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
