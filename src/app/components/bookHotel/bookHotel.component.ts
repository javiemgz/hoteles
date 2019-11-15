import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from 'src/services/hotels.service';
import { Hotel } from 'src/domain/Hotel';
import { Booking } from 'src/domain/Booking';
import { isUndefined } from 'util';
import { Type } from '../../../domain/Hotel'
@Component({
  selector: 'app-bookHotel',
  templateUrl: './bookHotel.component.html',
  styleUrls: ['./bookHotel.component.css']
})
export class BookHotelComponent implements OnInit {

  selectedHotel: Hotel
  bookig = new Booking()

  constructor(private route: ActivatedRoute, private router: Router, private hotelService: HotelsService) { }

  ngOnInit() {
    const hotelId = this.route.snapshot.params.id
    this.bookig.hotelId = hotelId
    this.selectedHotel = this.hotelService.getHotelById(hotelId)
  }
  hasSelectedRoom() {
    return !isUndefined(this.bookig.selectedRoom)
  }
  getCost() {
    return this.bookig.bookTotalCost(1)
  }

  select(room: Type) {
    this.bookig.selectedRoom = room
  }

  onSelectionChange(extraOption: Type, event:boolean) {
    event ? this.bookig.addExtraOption(extraOption):this.bookig.deleteExtraOption(extraOption)
  }
}
