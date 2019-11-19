import { Type } from './Hotel'
import * as _ from 'lodash'
import * as moment from 'moment';


export class Booking {
    hotelId: number
    selectedRoom: Type
    selectedExtraServices: Type[] = []
    startDate 
    finishDate 


    bookTotalCost() {
        return (this.selectedServicesCost() + this.selectedRoom.cost) * this.amountOfDays()
    }

    amountOfDays(){
        return this.finishDate.diff(this.startDate,'days')
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

    isCancelable(){
        return moment({}).diff(this.startDate,'week')<0
    }
} 