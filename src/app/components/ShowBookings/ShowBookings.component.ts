import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/User.service';
import { Booking } from 'src/domain/Booking';

@Component({
  selector: 'app-ShowBookings',
  templateUrl: './ShowBookings.component.html',
  styleUrls: ['./ShowBookings.component.css']
})
export class ShowBookingsComponent implements OnInit {

  constructor(private userService: UserService) { }

  bookings:Booking[]

  async ngOnInit() {
    this.bookings = await this.userService.getBookings()
  }

  withoutBookings() {
    return this.bookings.length == 0
  }

}
