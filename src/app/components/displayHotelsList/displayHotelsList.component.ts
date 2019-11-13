import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/services/hotels.service';
import { Hotel } from 'src/domain/Hotel';

@Component({
  selector: 'app-displayHotelsList',
  templateUrl: './displayHotelsList.component.html',
  styleUrls: ['./displayHotelsList.component.css']
})
export class DisplayHotelsListComponent implements OnInit {

  hotels:Hotel[]

  constructor(private hotelService:HotelsService) { }

  ngOnInit() {
    this.hotels=this.hotelService.getHotels()
  }
  asd(){
    return this.hotels[0]
  }

}
