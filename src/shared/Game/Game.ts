import { PieceTypes } from "shared/enums";
import { IBoard } from "./board";

export class Game {
    board: IBoard;

    constructor(board: IBoard) {
        this.board = board;
    }

    public makeMove(startIndex: number, targetIndex: number): void {
        const piece = this.board.position[startIndex];
        this.board.position[startIndex] = PieceTypes.NONE;
        this.board.position[targetIndex] = piece;
        const isCastlingMove: boolean =
            this.getPieceType(piece) === PieceTypes.KING &&
            Math.abs(startIndex - targetIndex) === 2;
        if (!isCastlingMove) return;
        const isKingSide: boolean = targetIndex > startIndex;
        const rookStart = isKingSide ? startIndex + 3 : startIndex - 4;
        const rookTarget = isKingSide ? targetIndex - 1 : targetIndex + 1;
        this.makeMove(rookStart, rookTarget);
    }

    private getPieceType(piece: number) {
        const pieceBitMask = 0b00111;
        return piece & pieceBitMask;
    }
}
