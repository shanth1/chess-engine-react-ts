import { CastlingRights, PieceColors, PieceTypes } from "shared/enums";
import { getPieceColor } from "shared/pieceInfo";
import { IBoard } from "./board";

interface IHistorySlice {
    move: Array<number>;
    activeColor: PieceColors;
    castlingRights:
        | CastlingRights.BlackKingSide
        | CastlingRights.BlackQueenSide
        | CastlingRights.BothSides
        | CastlingRights.NeitherSide
        | CastlingRights.WhiteKingSide
        | CastlingRights.WitheQueenSide;
    enPassant: string;
    halfMoveClock: number;
    fullMoveNumber: number;
    capturedPiece: number;
}

export class Game {
    private _board: IBoard;
    history: Array<IHistorySlice>;
    private _blackPieces: Array<number>;
    private _whitePieces: Array<number>;

    constructor(board: IBoard) {
        this._board = board;
        this.history = [];
        this.history.push({
            move: [],
            activeColor: this._board.activeColor,
            castlingRights: this._board.castlingRights,
            enPassant: this._board.enPassant,
            halfMoveClock: this._board.halfMoveClock,
            fullMoveNumber: this._board.fullMoveNumber,
            capturedPiece: PieceTypes.NONE,
        });
        this._whitePieces = [];
        this._blackPieces = [];
        for (let index = 0; index < board.position.length; index++) {
            if (!board.position[index]) continue;
            if (getPieceColor(board.position[index]) === PieceColors.WHITE) {
                this._whitePieces.push(index);
            } else {
                this._blackPieces.push(index);
            }
        }
    }

    public get board() {
        return this._board;
    }
    public get whitePieces() {
        return this._whitePieces;
    }
    public get blackPieces() {
        return this._blackPieces;
    }

    public set board(board: IBoard) {
        this._board = board;
        this._whitePieces = [];
        this._blackPieces = [];
        for (let index = 0; index < board.position.length; index++) {
            if (!board.position[index]) continue;
            if (getPieceColor(board.position[index]) === PieceColors.WHITE) {
                this._whitePieces.push(index);
            } else {
                this._blackPieces.push(index);
            }
        }
    }

    public makeMove(
        startIndex: number,
        targetIndex: number,
        ...castlingKingMove: Array<number>
    ): void {
        const piece = this._board.position[startIndex];
        const targetPiece = this._board.position[targetIndex];
        if (targetPiece) {
            if (getPieceColor(targetPiece) === PieceColors.WHITE) {
                const index = this._whitePieces.indexOf(targetIndex);
                if (index > 0) this._whitePieces.splice(index, 1);
            } else {
                const index = this._blackPieces.indexOf(targetIndex);
                if (index > 0) this._blackPieces.splice(index, 1);
            }
        }
        this._board.position[startIndex] = PieceTypes.NONE;
        this._board.position[targetIndex] = piece;

        const isCastlingMove: boolean =
            this.getPieceType(piece) === PieceTypes.KING &&
            Math.abs(startIndex - targetIndex) === 2;

        if (!isCastlingMove) {
            this.history.push({
                move: [...castlingKingMove, startIndex, targetIndex],
                activeColor: this._board.activeColor,
                castlingRights: this._board.castlingRights,
                enPassant: this._board.enPassant,
                halfMoveClock: this._board.halfMoveClock,
                fullMoveNumber: this._board.fullMoveNumber,
                capturedPiece: targetPiece,
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
        const previousPosition: Array<number> =
            this.getPreviousPosition(currentSlice);
        this._board = {
            position: previousPosition,
            activeColor: previousSlice.activeColor,
            castlingRights: previousSlice.castlingRights,
            enPassant: previousSlice.enPassant,
            halfMoveClock: previousSlice.halfMoveClock,
            fullMoveNumber: previousSlice.fullMoveNumber,
        };
        this.history.pop();
    }

    private getPreviousPosition(slice: IHistorySlice): Array<number> {
        const previousPosition: Array<number> = [...this._board.position];
        const startIndex: number = slice.move[0];
        const targetIndex: number = slice.move[1];
        const piece = this._board.position[targetIndex];
        previousPosition[targetIndex] = PieceTypes.NONE;
        previousPosition[startIndex] = piece;
        if (slice.capturedPiece) {
            previousPosition[targetIndex] = slice.capturedPiece;
        }
        if (slice.move.length > 2) {
            const rookStartIndex: number = slice.move[2];
            const rookTargetIndex: number = slice.move[3];
            const rook = this._board.position[rookTargetIndex];
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
