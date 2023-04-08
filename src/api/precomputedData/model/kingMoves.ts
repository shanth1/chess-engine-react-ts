const precomputedKingMoves: Array<ReadonlyArray<number>> = [];

for (let rank: number = 7; rank >= 0; rank--) {
    for (let file: number = 0; file <= 7; file++) {
        const offsetNorth: number = rank > 6 ? 0 : -8;
        const offsetSouth: number = rank < 1 ? 0 : 8;
        const offsetWest: number = file < 1 ? 0 : -1;
        const offsetEast: number = file > 6 ? 0 : 1;

        const offsetNorthWest: number = offsetNorth * offsetWest ? -9 : 0;
        const offsetNorthEast: number = offsetNorth * offsetEast ? -7 : 0;
        const offsetSouthWest: number = offsetSouth * offsetWest ? 7 : 0;
        const offsetSouthEast: number = offsetSouth * offsetEast ? 9 : 0;

        const directionOffsets: ReadonlyArray<number> = [
            offsetNorth,
            offsetSouth,
            offsetWest,
            offsetEast,
            offsetNorthWest,
            offsetNorthEast,
            offsetSouthWest,
            offsetSouthEast,
        ];

        precomputedKingMoves.push(directionOffsets);
    }
}

export { precomputedKingMoves };
