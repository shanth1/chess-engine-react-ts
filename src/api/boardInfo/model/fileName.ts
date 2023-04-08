import { FileNames } from "../types/enums";

const fileNames: Array<FileNames> = [
    FileNames.A,
    FileNames.B,
    FileNames.C,
    FileNames.D,
    FileNames.E,
    FileNames.F,
    FileNames.G,
    FileNames.H,
];

export const getFileName = (squareIndex: number): string => {
    const fileIndex = squareIndex % 8;
    return fileNames[fileIndex];
};
