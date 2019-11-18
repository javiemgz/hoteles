import { Booking } from './Booking'
import { Type } from './Hotel'
import * as moment from 'moment'

export class  User{
    name = "JaviG"
    bookings:Booking[] =[book]

    addBooking(newBook:Booking){
        this.bookings.push(newBook)
    }
}

 






const book = new Booking()
book.hotelId=1
book.selectedRoom=new Type("Doble", 3800)
book.startDate=moment("10-10-2018")
book.finishDate=moment("10-15-2018")