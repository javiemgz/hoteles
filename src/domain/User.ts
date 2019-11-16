import { Booking } from './Booking'

export class  User{
    name = "JaviG"
    bookings:Booking[] =[]

    addBooking(newBook:Booking){
        this.bookings.push(newBook)
    }
}