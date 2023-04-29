import { PieceColors, PieceTypes } from "shared/enums";
import { getPieceCode, getPieceColor, getPieceType } from "shared/pieceInfo";
import { getCastlingRights } from "./castlingRights";
import { getPositionFromFen } from "./position";

export const getBoardFromFen = (fen: string): IBoard => {
    const positionFen = fen.split(" ")[0];
    const activeColorFen = fen.split(" ")[1];
    const castlingRightsFen = fen.split(" ")[2];
    const enPassantFen = fen.split(" ")[3];
    const halfMoveClockFen = fen.split(" ")[4];
    const fullMoveNumberFen = fen.split(" ")[5];

    const position = getPositionFromFen(positionFen);

    const board: IBoard = {
        move: null,
        moveType: null,
        isPromotion: null,
        isCheck: null,
        isCheckmate: null,
        isStalemate: null,
        position: position,
        activeColor:
            activeColorFen === "w" ? PieceColors.WHITE : PieceColors.BLACK,
        castlingRights: getCastlingRights(castlingRightsFen),
        enPassant: enPassantFen,
        halfMoveClock: Number(halfMoveClockFen),
        fullMoveNumber: Number(fullMoveNumberFen),
        whitePiecePositions: getPiecesPositions(position, PieceColors.WHITE),
        blackPiecePositions: getPiecesPositions(position, PieceColors.BLACK),
        capturedWhitePieces: getCapturedPieces(position, PieceColors.WHITE),
        capturedBlackPieces: getCapturedPieces(position, PieceColors.BLACK),
    };

    return board;
};

const getPiecesPositions = (
    position: Array<number>,
    color: PieceColors,
): Array<number> => {
    const piecesPositions: Array<number> = [];
    for (let index = 0; index < position.length; index++) {
        if (!position[index]) continue;
        if (getPieceColor(position[index]) !== color) continue;
        piecesPositions.push(index);
    }
    return piecesPositions;
};

const getCapturedPieces = (
    position: Array<number>,
    color: PieceColors,
): Array<number> => {
    let pawnCount = 0;
    let knightCount = 0;
    let bishopCount = 0;
    let rookCount = 0;
    let queenCount = 0;

    for (let index in position) {
        if (!position[index]) continue;
        if (getPieceColor(position[index]) !== color) continue;
        switch (getPieceType(position[index])) {
            case PieceTypes.PAWN:
                pawnCount += 1;
                break;
            case PieceTypes.KNIGHT:
                knightCount += 1;
                break;
            case PieceTypes.BISHOP:
                bishopCount += 1;
                break;
            case PieceTypes.ROOK:
                rookCount += 1;
                break;
            case PieceTypes.QUEEN:
                queenCount += 1;
                break;
            default:
                break;
        }
    }

    const capturedPieces: Array<number> = [];

    while (pawnCount !== 8) {
        capturedPieces.push(getPieceCode(PieceTypes.PAWN, color));
        pawnCount += 1;
    }
    while (knightCount !== 2) {
        capturedPieces.push(getPieceCode(PieceTypes.KNIGHT, color));
        knightCount += 1;
    }
    while (bishopCount !== 2) {
        capturedPieces.push(getPieceCode(PieceTypes.BISHOP, color));
        bishopCount += 1;
    }
    while (rookCount !== 2) {
        capturedPieces.push(getPieceCode(PieceTypes.ROOK, color));
        rookCount += 1;
    }
    if (queenCount === 0) {
        capturedPieces.push(getPieceCode(PieceTypes.QUEEN, color));
    }

    return capturedPieces;
};
