import { CastlingRights, PieceTypes } from "shared/enums";
import { IBoard } from "./board";

interface IHistorySlice {
    move: Array<number>;
    activeColor: "white" | "black";
    castlingRights:
        | CastlingRights.BlackKingSide
        | CastlingRights.BlackQueenSide
        | CastlingRights.BothSides
        | CastlingRights.NeitherSide
        | CastlingRights.WhiteKingSide
        | CastlingRights.WitheQueenSide;
    enPassant: "-" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
    halfMoveClock: number;
    fullMoveNumber: number;
}

export class Game {
    board: IBoard;
    history: Array<IHistorySlice>;

    constructor(board: IBoard) {
        this.board = board;
        this.history = [];
        this.history.push({
            move: [],
            activeColor: this.board.activeColor,
            castlingRights: this.board.castlingRights,
            enPassant: this.board.enPassant,
            halfMoveClock: this.board.halfMoveClock,
            fullMoveNumber: this.board.fullMoveNumber,
        });
    }

    public makeMove(
        startIndex: number,
        targetIndex: number,
        ...castlingMove: Array<number>
    ): void {
        const piece = this.board.position[startIndex];
        this.board.position[startIndex] = PieceTypes.NONE;
        this.board.position[targetIndex] = piece;
        const isCastlingMove: boolean =
            this.getPieceType(piece) === PieceTypes.KING &&
            Math.abs(startIndex - targetIndex) === 2;

        if (!isCastlingMove) {
            this.history.push({
                move: castlingMove
                    ? [...castlingMove, startIndex, targetIndex]
                    : [startIndex, targetIndex],
                activeColor: this.board.activeColor,
                castlingRights: this.board.castlingRights,
                enPassant: this.board.enPassant,
                halfMoveClock: this.board.halfMoveClock,
                fullMoveNumber: this.board.fullMoveNumber,
            });
            return;
        }
        const isKingSide: boolean = targetIndex > startIndex;
        const rookStart = isKingSide ? startIndex + 3 : startIndex - 4;
        const rookTarget = isKingSide ? targetIndex - 1 : targetIndex + 1;
        this.makeMove(rookStart, rookTarget, startIndex, targetIndex);
    }

    private getPieceType(piece: number) {
        const pieceBitMask = 0b00111;
        return piece & pieceBitMask;
    }
}
