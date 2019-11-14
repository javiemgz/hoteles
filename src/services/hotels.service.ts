import { Injectable } from '@angular/core';
import { HotelRepository } from 'src/domain/HotelRepository';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotelRepo = HotelRepository.getInstance()

  constructor() { }

  getHotels(){
    return this.hotelRepo.getHotels()
  }

}
