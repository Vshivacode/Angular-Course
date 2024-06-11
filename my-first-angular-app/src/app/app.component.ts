import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  // selector is the main identification of the component 
  // we use this component with the selector name in index.html file
  selector: 'app-root',
  standalone: true,

  // importing cusom created HeaderComponent class
  imports: [RouterOutlet, HeaderComponent, UserComponent],

  // templateUrl is used to link the html file
  templateUrl: './app.component.html',

  // styleUrl is used to link the css file 
  styleUrl: './app.component.css'
})

export class AppComponent {
  // declaring the dummy-users.ts file to a variable 
  // and we use this "users" variable in app.component.html file
  // see in app.html file like this <app-user [avatar]="users[0].avatar"/>
  users = DUMMY_USERS
}
