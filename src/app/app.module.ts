import { OverlayContainer } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ShowHotelComponent } from './components/showHotel/showHotel.component';
import { DisplayHotelsListComponent } from './components/displayHotelsList/displayHotelsList.component';
import { BookHotelComponent } from './components/bookHotel/bookHotel.component';
import { MatDatepickerModule } from '@Angular/material';
import { FormsModule } from '@angular/forms';
import { ShowBookingsComponent } from './components/ShowBookings/ShowBookings.component';
import { StarRatingComponent } from './components/starRating/starRating.component';

@NgModule({
   declarations: [
      AppComponent,
      ShowHotelComponent,
      DisplayHotelsListComponent,
      BookHotelComponent,
      ShowBookingsComponent,
      StarRatingComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MaterialModule,
      BrowserAnimationsModule,
      FormsModule,
   ],
   providers: [
      MatDatepickerModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
