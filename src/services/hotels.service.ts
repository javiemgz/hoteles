import { Injectable } from '@angular/core';
import { HotelRepository } from 'src/domain/HotelRepository';
import { Booking } from 'src/domain/Booking';
import { user } from 'src/domain/User';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotelRepo = HotelRepository.getInstance()

  constructor() { }

  getHotels() {
    return this.hotelRepo.getHotels()
  }

  getHotelById(id: number) {
    return this.hotelRepo.getHotelById(id)
  }
  
  saveBooking(newBooking: Booking) {
    user.addBooking(newBooking)
  }

}
