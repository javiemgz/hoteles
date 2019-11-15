import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/services/hotels.service';
import { Hotel } from 'src/domain/Hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displayHotelsList',
  templateUrl: './displayHotelsList.component.html',
  styleUrls: ['./displayHotelsList.component.css']
})
export class DisplayHotelsListComponent implements OnInit {

  hotels:Hotel[]

  constructor(private hotelService:HotelsService,private router:Router) { }

  ngOnInit() {
    this.hotels = this.hotelService.getHotels()
  }
  
  redirectToBooking(id:number){
    this.router.navigate (['/reserva',id])
  }
}
