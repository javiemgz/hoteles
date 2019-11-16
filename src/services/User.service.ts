import { Injectable } from '@angular/core';
import { User } from 'src/domain/User';
import { Booking } from 'src/domain/Booking';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() {
  this.user = new User()
 }

  user:User
  getUserName(){
    return this.user.name
  }

  saveBooking(newBooking: Booking) {
    this.user.addBooking(newBooking)
  }
}
