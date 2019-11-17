import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/domain/Hotel';
import { HotelsService } from 'src/services/hotels.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-showHotel',
  templateUrl: './showHotel.component.html',
  styleUrls: ['./showHotel.component.css']
})
export class ShowHotelComponent implements OnInit {
  @Input() hotelId: number
  @Input() ShowBaseCost = true

  hotel: Hotel
  stars: number[]
  starsOutlined: number[]


  constructor(private hotelService: HotelsService) {
  }

  async ngOnInit() {
    this.hotel = await this.hotelService.getHotelById(this.hotelId)
    this.stars = Array(this.hotel.score)
    this.starsOutlined = Array(5 - this.hotel.score)
  }

}
