export const getPassedKingMove = (
    selectedIndex: number,
    targetIndex: number,
): number =>
    targetIndex - selectedIndex > 0 ? targetIndex - 1 : targetIndex + 1;
