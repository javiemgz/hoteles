import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from 'src/services/hotels.service';
import { Hotel } from 'src/domain/Hotel';
import { Booking } from 'src/domain/Booking';
import { isUndefined } from 'util';
import { Type } from '../../../domain/Hotel'
import * as moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';


// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'MMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// }

@Component({
  selector: 'app-bookHotel',
  templateUrl: './bookHotel.component.html',
  styleUrls: ['./bookHotel.component.css'],
  // providers: [

  //   { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

  //   { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  // ],
})
export class BookHotelComponent implements OnInit {

  selectedHotel: Hotel
  booking = new Booking()
 // date = new FormControl(moment())
  fecha:Date=null

  constructor(private route: ActivatedRoute, private router: Router, private hotelService: HotelsService) { }

  ngOnInit() {
    const hotelId = this.route.snapshot.params.id
    this.booking.hotelId = hotelId
    this.selectedHotel = this.hotelService.getHotelById(hotelId)
  }

  canSaveBook() {
    return !isUndefined(this.booking.selectedRoom)
  }

  getCost() {
    return this.booking.bookTotalCost()
  }

  select(room: Type) {
    this.booking.selectedRoom = room
  }

  onSelectionChange(extraOption: Type, event:boolean) {
    event ? this.booking.addExtraOption(extraOption):this.booking.deleteExtraOption(extraOption)
  }

  saveBooking(){
    //this.hotelService.saveBooking(this.booking)
    debugger
  }
}
