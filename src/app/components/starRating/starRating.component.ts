import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starRating',
  templateUrl: './starRating.component.html',
  styleUrls: ['./starRating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input()score:number
  stars: number[]
  starsOutlined: number[]


  constructor() {
  }

  async ngOnInit() {
    if(this.score>5){this.score=5}
    this.stars = Array(this.score)
    this.starsOutlined = Array(5 - this.score)
  }
}
