export enum Colors {
    BLACK = "black",
    WHITE = "white",
}

export enum PieceTypes {
    NONE = 0,
    KING = 0b00001,
    QUEEN = 0b00010,
    ROOK = 0b00011,
    BISHOP = 0b00100,
    KNIGHT = 0b00101,
    PAWN = 0b00110,
}

export enum PieceColors {
    BLACK = 0b01000,
    WHITE = 0b10000,
}

export enum CastlingRights {
    NeitherSide = 0b0000,
    WhiteKingSide = 0b1000,
    WitheQueenSide = 0b0100,
    BlackKingSide = 0b0010,
    BlackQueenSide = 0b0001,
}

export enum OffsetsPawnBlack {
    LeftAttack = 9,
    Forward = 8,
    RightAttack = 7,
}

export enum OffsetsPawnWhite {
    LeftAttack = -9,
    Forward = -8,
    RightAttack = -7,
}

export enum FileNames {
    A = "a",
    B = "b",
    C = "c",
    D = "d",
    E = "e",
    F = "f",
    G = "g",
    H = "h",
}
