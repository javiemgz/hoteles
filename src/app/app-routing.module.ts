import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayHotelsListComponent } from './components/displayHotelsList/displayHotelsList.component';
import { BookHotelComponent } from './components/bookHotel/bookHotel.component';



const routes: Routes = [
  {path: '', component: DisplayHotelsListComponent},
  {path:'reserva/:id', component: BookHotelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
