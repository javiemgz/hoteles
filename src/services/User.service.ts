import { Injectable } from '@angular/core';
import { User } from 'src/domain/User';
import { Booking } from 'src/domain/Booking';
import * as _ from 'lodash'

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() {
  this.user = new User()
 }

  user:User

  async getUserName(){
    return this.user.name
  }

  async saveBooking(newBooking: Booking) {
    this.user.addBooking(newBooking)
  }
  
  async getBookings(){
    return this.user.bookings
  }
  cancelBook(booking:Booking){
      _.remove(this.user.bookings, booking)
  }
}
