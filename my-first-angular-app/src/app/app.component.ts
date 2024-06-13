import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  // selector is the main identification of the component 
  // we use this component with the selector name in index.html file
  selector: 'app-root',
  standalone: true,

  // importing cusom created HeaderComponent class
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],

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

  // lets create a variable that holds an id of user
  selectedUserId = "u1"


  // now create a method that 
  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  // this function is used in app.component.html file when we select the user
  // looks like this in html file  (selectUser)="onselectedUser($event)"
  // "$event" is used to access the data that is emitted by an event
  onselectedUser(id: string){
    // console.log("the selected user id is " + id)

    // lets use that selectedUserId variable here
    this.selectedUserId = id    // this "id" is from the parameter on "onselectedUser(id: string)"
  }
}


