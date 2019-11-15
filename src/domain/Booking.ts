import { Type } from './Hotel'
import * as _ from 'lodash'
import * as moment from 'moment';


export class Booking {
    hotelId: number
    selectedRoom: Type
    selectedExtraServices: Type[] = []
    startDate:Date = new Date()
    finishDate:Date = new Date()


    bookTotalCost() {
        return (this.selectedServicesCost() + this.selectedRoom.cost) * this.amountOfDays()
    }

    amountOfDays(){
        const days = 0//this.finishDate.diff(this.startDate,'days')
        return days<=0 ? 1 : days
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