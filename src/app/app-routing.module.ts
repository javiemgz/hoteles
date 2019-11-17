import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayHotelsListComponent } from './components/displayHotelsList/displayHotelsList.component';
import { BookHotelComponent } from './components/bookHotel/bookHotel.component';
import { ShowBookingsComponent } from './components/ShowBookings/ShowBookings.component';



const routes: Routes = [
  {path: '', component: DisplayHotelsListComponent},
  {path:'reserva/:id', component: BookHotelComponent },
  {path:'reservas/usuario', component: ShowBookingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
