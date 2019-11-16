import { Component } from '@angular/core';
import { UserService } from 'src/services/User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService :UserService){}

  username:string = this.userService.getUserName()
  title = 'Parcial Gómez';
}
