import { Component } from '@angular/core';
import { HeaderComponent } from './layouts/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';

/**
 * NOTE
 * selector -> what will be the html tag of this component
 * imports -> which child components we can use for this. It will be in Array form
 * templateUrl -> html link
 * styleUrl -> css link
 */

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    UserComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  users = DUMMY_USERS;
  
  /** 
   * NOTE
   * Above code is a property that's why you don't need the let OR const keyword
   * This is like a constructor actually in Typescript
   * 
   * However, Typescript allows you to write it like that
   * If we elaborate, it is like this actually:
   * 
   *  users: any; // Declare the property

      constructor() {
        this.users = DUMMY_USERS; // Assign it inside the constructor
      }
   * 
   */

}
