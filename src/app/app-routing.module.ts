import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayHotelsListComponent } from './components/displayHotelsList/displayHotelsList.component';



const routes: Routes = [
  { path: '', component: DisplayHotelsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
