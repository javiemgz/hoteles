import { Type } from './Hotel'
import * as _ from 'lodash'

export class Booking {
    hotelId: number
    selectedRoom: Type
    selectedExtraServices: Type[] = []

    bookTotalCost(amountOfDays: number) {
        return (this.selectedServicesCost() + this.selectedRoom.cost) * amountOfDays
    }

    selectedServicesCost() {
        return this.selectedExtraServices.reduce((total, service) => total + service.cost, 0)
    }
    addExtraOption(extraOption: Type) {
        this.selectedExtraServices.push(extraOption)
    }
    deleteExtraOption(extraOption: Type) {
        _.remove(this.selectedExtraServices, extraOption)
    }

} 