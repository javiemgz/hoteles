import { Component } from '@angular/core';
import { user } from 'src/domain/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user=user
  title = 'Parcial Gómez';
}
