import { Colors } from "./_enums"

export class Square {
    readonly id: number
    readonly color: Colors

    constructor(id: number, color: Colors){
        this.id = id
        this.color = color
    }
}