import { Colors } from "./_enums";

enum FileCoordinates {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
    F = "f",
    G = "g",
    H = "h",
}

const fileCoordinates: Array<FileCoordinates> = [
    FileCoordinates.A,
    FileCoordinates.B,
    FileCoordinates.C,
    FileCoordinates.D,
    FileCoordinates.E,
    FileCoordinates.F,
    FileCoordinates.G,
    FileCoordinates.H,
];

export class Square {
    readonly index: number;
    readonly color: Colors;
    readonly name: string;

    constructor(index: number, color: Colors, file: number, rank: number) {
        this.index = index;
        this.color = color;
        this.name = `${fileCoordinates[file]}${rank + 1}`;
    }
}
