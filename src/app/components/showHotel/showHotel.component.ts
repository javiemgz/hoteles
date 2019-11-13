import { Component,Input, OnInit } from '@angular/core';
import { Hotel } from 'src/domain/Hotel';

@Component({
  selector: 'app-showHotel',
  templateUrl: './showHotel.component.html',
  styleUrls: ['./showHotel.component.css']
})
export class ShowHotelComponent implements OnInit{
  @Input() hotel:Hotel 
  stars: number[]
  
  
  constructor() { 
  }
  
  ngOnInit(): void {
    this.stars = Array(this.hotel.score)
  }
}
