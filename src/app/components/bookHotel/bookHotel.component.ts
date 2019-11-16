import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from 'src/services/hotels.service';
import { Hotel } from 'src/domain/Hotel';
import { Booking } from 'src/domain/Booking';
import { isUndefined } from 'util';
import { Type } from '../../../domain/Hotel'
import * as moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@Angular/material';
import { CompileStylesheetMetadata } from '@angular/compiler';
import { UserService } from 'src/services/User.service';


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
}

@Component({
  selector: 'app-bookHotel',
  templateUrl: './bookHotel.component.html',
  styleUrls: ['./bookHotel.component.css'],
  providers: [

    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class BookHotelComponent implements OnInit {

  selectedHotel: Hotel
  booking = new Booking()
  minDateFrom = moment({})

  constructor(private route: ActivatedRoute, private router: Router, private hotelService: HotelsService,private userService:UserService) { }

  ngOnInit() {
    const hotelId = this.route.snapshot.params.id
    this.booking.hotelId = hotelId
    this.selectedHotel = this.hotelService.getHotelById(hotelId)
  }
  
  minDateTo(){ 
    const date = moment(this.booking.startDate)
    return date.add(1,'days')
  }

  roomNotSelected() {
    return isUndefined(this.booking.selectedRoom) 
  }

  dateRageNotSelected(){
    return  isUndefined(this.booking.finishDate)
  }

  select(room: Type) {
    this.booking.selectedRoom = room
  }

  onSelectionChange(extraOption: Type, event: boolean) {
    event ? this.booking.addExtraOption(extraOption) : this.booking.deleteExtraOption(extraOption)
  }

  saveBooking() {
    this.userService.saveBooking(this.booking)
  }
}