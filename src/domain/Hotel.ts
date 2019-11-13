import { isUndefined } from 'util'

export class Hotel {
    name: string
    score: number
    location: string
    roomsOptions: Type[]
    extraServices: Type[]
    selectedRoom: Type
    photoURL: string

    constructor(_name: string, _score: number, _location: string/*, _photoURL: string*/) {
        this.name = _name
        this.score = _score
        this.location = _location
    }

    calculateCost(days: number) {
        const costPerDay = this.selectedRoom.cost
        return costPerDay * days
    }

    foldSum(foldableItem: Type[]) {
        if (isUndefined(foldableItem)) { return 0 }
    }
}


export class Type {
    typeName: string
    cost: number
}
