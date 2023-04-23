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
        ...castlingKingMove: Array<number>
    ): void {
        const piece = this.board.position[startIndex];
        this.board.position[startIndex] = PieceTypes.NONE;
        this.board.position[targetIndex] = piece;
        const isCastlingMove: boolean =
            this.getPieceType(piece) === PieceTypes.KING &&
            Math.abs(startIndex - targetIndex) === 2;

        if (!isCastlingMove) {
            this.history.push({
                move: [...castlingKingMove, startIndex, targetIndex],
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

    public unmakeMove() {
        const currentSlice = this.history.at(-1);
        const previousSlice = this.history.at(-2);
        if (!currentSlice || !previousSlice) return;
        const previousPosition: Array<number> = this.getPreviousPosition(
            currentSlice.move,
        );
        this.board = {
            position: previousPosition,
            activeColor: previousSlice.activeColor,
            castlingRights: previousSlice.castlingRights,
            enPassant: previousSlice.enPassant,
            halfMoveClock: previousSlice.halfMoveClock,
            fullMoveNumber: previousSlice.fullMoveNumber,
        };
        this.history.pop();
    }

    private getPreviousPosition(move: Array<number>): Array<number> {
        const previousPosition: Array<number> = [...this.board.position];
        const startIndex: number = move[0];
        const targetIndex: number = move[1];
        const piece = this.board.position[targetIndex];
        previousPosition[targetIndex] = PieceTypes.NONE;
        previousPosition[startIndex] = piece;
        if (move.length > 2) {
            const rookStartIndex: number = move[2];
            const rookTargetIndex: number = move[3];
            const rook = this.board.position[rookTargetIndex];
            previousPosition[rookTargetIndex] = PieceTypes.NONE;
            previousPosition[rookStartIndex] = rook;
        }
        return previousPosition;
    }
    private getPieceType(piece: number) {
        const pieceBitMask = 0b00111;
        return piece & pieceBitMask;
    }
}
