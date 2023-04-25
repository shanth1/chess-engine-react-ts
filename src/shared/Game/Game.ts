import { CastlingRights, PieceColors, PieceTypes } from "shared/enums";
import { getPieceColor } from "shared/pieceInfo";
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
    capturedPiece: number;
}

export class Game {
    board: IBoard;
    history: Array<IHistorySlice>;
    blackPieces: Array<number>;
    whitePieces: Array<number>;

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
            capturedPiece: PieceTypes.NONE,
        });
        this.whitePieces = [];
        this.blackPieces = [];
        for (let index = 0; index < board.position.length; index++) {
            if (!board.position[index]) continue;
            if (getPieceColor(board.position[index]) === PieceColors.WHITE) {
                this.whitePieces.push(index);
            } else {
                this.blackPieces.push(index);
            }
        }
    }

    public makeMove(
        startIndex: number,
        targetIndex: number,
        ...castlingKingMove: Array<number>
    ): void {
        const piece = this.board.position[startIndex];
        const targetPiece = this.board.position[targetIndex];
        if (targetPiece) {
            if (getPieceColor(targetPiece) === PieceColors.WHITE) {
                const index = this.whitePieces.indexOf(targetIndex);
                if (index > 0) this.whitePieces.splice(index, 1);
            } else {
                const index = this.blackPieces.indexOf(targetIndex);
                if (index > 0) this.blackPieces.splice(index, 1);
            }
        }
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

    private getPreviousPosition(slice: IHistorySlice): Array<number> {
        const previousPosition: Array<number> = [...this.board.position];
        const startIndex: number = slice.move[0];
        const targetIndex: number = slice.move[1];
        const piece = this.board.position[targetIndex];
        previousPosition[targetIndex] = PieceTypes.NONE;
        previousPosition[startIndex] = piece;
        if (slice.capturedPiece) {
            previousPosition[targetIndex] = slice.capturedPiece;
        }
        if (slice.move.length > 2) {
            const rookStartIndex: number = slice.move[2];
            const rookTargetIndex: number = slice.move[3];
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
