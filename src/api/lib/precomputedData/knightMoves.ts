const precomputedKnightMoves: Array<ReadonlyArray<number>> = [];

for (let rank: number = 7; rank >= 0; rank--) {
    for (let file: number = 0; file <= 7; file++) {
        const hourOneOffset: number = rank > 5 || file > 6 ? 0 : -15;
        const hourTwoOffset: number = rank > 6 || file > 5 ? 0 : -6;
        const hourFourOffset: number = rank < 1 || file > 5 ? 0 : 10;
        const hourFiveOffset: number = rank < 2 || file > 6 ? 0 : 17;

        const hourSevenOffset: number = rank < 2 || file < 1 ? 0 : 15;
        const hourEightOffset: number = rank < 1 || file < 2 ? 0 : 6;
        const hourTenOffset: number = rank > 6 || file < 2 ? 0 : -10;
        const hourElevenOffset: number = rank > 5 || file < 1 ? 0 : -17;

        const directionOffsets: ReadonlyArray<number> = [
            hourOneOffset,
            hourTwoOffset,
            hourFourOffset,
            hourFiveOffset,
            hourSevenOffset,
            hourEightOffset,
            hourTenOffset,
            hourElevenOffset,
        ];

        precomputedKnightMoves.push(directionOffsets);
    }
}

export { precomputedKnightMoves };
