import { Injectable } from '@angular/core';
import { HotelRepository } from 'src/domain/HotelRepository';
import { Booking } from 'src/domain/Booking';
import { User } from 'src/domain/User';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  user = new User()
  private hotelRepo = HotelRepository.getInstance()

  constructor() { } 

  async getHotels() {
    return this.hotelRepo.getHotels()
  }

  async getHotelById(id: number) {
    return this.hotelRepo.getHotelById(id)
  }
}
