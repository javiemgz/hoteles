import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/User.service';
import { Booking } from 'src/domain/Booking';

@Component({
  selector: 'app-ShowBookings',
  templateUrl: './ShowBookings.component.html',
  styleUrls: ['./ShowBookings.component.css']
})
export class ShowBookingsComponent implements OnInit {

  constructor(private userService:UserService) { }

  bookings

  ngOnInit() { 
    this.bookings = this.userService.getBookings()
  }

}
