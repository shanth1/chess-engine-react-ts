interface INumSquaresToEdge {
    numNorth: number;
    numSouth: number;
    numWest: number;
    numEast: number;
    numNorthWest: number;
    numNorthEast: number;
    numSouthWest: number;
    numSouthEast: number;
}

const precomputedSlidingMoves: Array<INumSquaresToEdge> = [];

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

        const numSquaresToEdge: INumSquaresToEdge = {
            numNorth: numNorth,
            numSouth: numSouth,
            numWest: numWest,
            numEast: numEast,
            numNorthWest: numNorthWest,
            numNorthEast: numNorthEast,
            numSouthWest: numSouthWest,
            numSouthEast: numSouthEast,
        };

        precomputedSlidingMoves.push(numSquaresToEdge);
    }
}

export { precomputedSlidingMoves };
