import { Booking } from './Booking'

class  User{

    name = "Pipo Fuentes"
    bookings:Booking[]
    addBooking(newBook:Booking){
        this.bookings.push(newBook)
    }
}
export const user = new User()