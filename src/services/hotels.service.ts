import { Injectable } from '@angular/core';
import { GenerateHotelsList } from 'src/domain/GenerateHotelsList';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }

  getHotels(){
    return GenerateHotelsList.getHotels()
  }

}
