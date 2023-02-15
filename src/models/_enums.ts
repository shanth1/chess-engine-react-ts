export enum Colors {
    BLACK = "black",
    WHITE = "white",
}

export enum ColorCodes {
    BLACK = 0b01000,
    WHITE = 0b10000,
}

export enum PieceCodes {
    NONE = 0,
    KING = 0b00001,
    QUEEN = 0b00010,
    ROOK = 0b00011,
    BISHOP = 0b00100,
    KNIGHT = 0b00101,
    PAWN = 0b00110,
}

export enum CastlingRightsCodes {
    NeitherSide = 0b0000,
    WhiteKingNearRookSide = 0b1000,
    WitheKingQueenSide = 0b0100,
    BlackKingNearRookSide = 0b0010,
    BlackKingQueenSide = 0b0001,
}

export enum ColorFileNames {
    BLACK = "b",
    WHITE = "w",
}

export enum PieceFileNames {
    "NONE",
    "K",
    "Q",
    "R",
    "B",
    "N",
    "P",
}

export enum FileCoordinates {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
    F = "f",
    G = "g",
    H = "h",
}

export enum PieceStyles {
    ALPHA = "alpha",
    FANTASY = "fantasy",
    KOSAL = "kosal",
    LETTER = "letter",
    PIXEL = "pixel",
    SHAPES = "shapes",
    SPATIAL = "spatial",
    WIKIPEDIA = "wikipedia",
}
