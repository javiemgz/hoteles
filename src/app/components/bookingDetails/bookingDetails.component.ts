import { Component, OnInit, Input } from '@angular/core';
import { Booking } from 'src/domain/Booking';

@Component({
  selector: 'app-bookingDetails',
  templateUrl: './bookingDetails.component.html',
  styleUrls: ['./bookingDetails.component.css']
})
export class BookingDetailsComponent implements OnInit {
  @Input() booking:Booking
  constructor() { }

  ngOnInit() {
  }

}
