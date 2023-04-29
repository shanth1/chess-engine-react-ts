export const getPassedKingMove = ([
    startIndex,
    targetIndex,
]: Array<number>): Array<number> => {
    return targetIndex - startIndex > 0
        ? [startIndex, targetIndex - 1]
        : [startIndex, targetIndex + 1];
};
