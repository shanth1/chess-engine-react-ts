const directionOffsets: ReadonlyArray<number> = [-8, 8, -1, 1, -9, -7, 7, 9];
const precomputedSlidingMoves: Array<ReadonlyArray<number>> = [];

for (let rank: number = 7; rank >= 0; rank--) {
    for (let file: number = 0; file <= 7; file++) {
        const numNorth: number = 7 - rank;
        const numSouth: number = rank;
        const numWest: number = file;
        const numEast: number = 7 - file;

        const numNorthWest: number = Math.min(numNorth, numWest);
        const numNorthEast: number = Math.min(numNorth, numEast);
        const numSouthWest: number = Math.min(numSouth, numWest);
        const numSouthEast: number = Math.min(numSouth, numEast);

        const numSquaresToEdge: ReadonlyArray<number> = [
            numNorth,
            numSouth,
            numWest,
            numEast,
            numNorthWest,
            numNorthEast,
            numSouthWest,
            numSouthEast,
        ];

        precomputedSlidingMoves.push(numSquaresToEdge);
    }
}

export { precomputedSlidingMoves, directionOffsets };
