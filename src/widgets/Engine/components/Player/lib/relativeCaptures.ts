import { getPieceType } from "shared/pieceInfo";

export const getRelativeCaptures = (
    playerCaptures: number[],
    enemyCaptures: number[],
): number[] => {
    const enemyCapturesCopy = enemyCaptures.slice();
    let relativeCaptures: number[] = [];
    playerCaptures.forEach((playerPiece) => {
        const index = enemyCapturesCopy
            .map((piece) => getPieceType(piece))
            .indexOf(getPieceType(playerPiece));

        if (index >= 0) {
            enemyCapturesCopy.splice(index, 1);
        } else {
            relativeCaptures.push(playerPiece);
        }
    });
    return relativeCaptures;
};
