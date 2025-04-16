import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// Creating a constant for a randomIndex
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  // Getting a random user
  selectedUser = DUMMY_USERS[randomIndex];

  // Create a getter
  // We can call this just like a property that means you don't need ()
  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  // Trigger when you click
  onSelectUser() {
    alert("clicked!");
  }
}
