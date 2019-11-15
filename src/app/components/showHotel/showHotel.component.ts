import { Component,Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/domain/Hotel';

@Component({
  selector: 'app-showHotel',
  templateUrl: './showHotel.component.html',
  styleUrls: ['./showHotel.component.css']
})
export class ShowHotelComponent implements OnInit{
  @Input() hotel:Hotel 
  @Output() doClick = new EventEmitter();
  stars: number[]
  
  
  constructor() { 
  }
  
  ngOnInit(): void {
    this.stars = Array(this.hotel.score)
  }
  onClick(){
    this.doClick.emit()
  }
}
