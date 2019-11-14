import { isUndefined } from 'util'

export class Hotel {
    constructor(public id: number,public name: string, public score: number, 
        public location: string,public photoURL: string, 
        public roomsAvailables:Type[], public extraServicesAvailables: Type[]){}

    baseCost() {
        return this.roomsAvailables.reduce((min, room) => room.cost < min ? room.cost : min, this.roomsAvailables[0].cost)
    }
}


export class Type {
    constructor(public typeName: string, public cost: number){}
}
