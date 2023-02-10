import { Colors } from "./_enums"

const fileCoordinates: Array<string> = ["a", "b", "c", "d", "e", "f", "g", "h", ]

export class Square {
    readonly index: number
    readonly color: Colors
    readonly name: string

    constructor(index: number, color: Colors, file: number, rank: number){
        this.index = index
        this.color = color
        this.name = `${fileCoordinates[file]}${rank+1}`
    }
}