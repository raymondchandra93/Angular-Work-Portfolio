import { Component, signal, computed, Input, input } from '@angular/core';

// -- Just for 1 user --
/**
// Creating a constant for a randomIndex
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

export class UserComponent {
  // Getting a random user
  // -- Option A - using regular method, and zone.js for zoning change detection
  // selectedUser = DUMMY_USERS[randomIndex];
  
  // -- Option B - using signal (from Angular v16)
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  
  // -- Option A - using regular method, and zone.js for zoning change detection
  // Create a getter
  // We can call this just like a property that means you don't need ()
  //get imagePath() {
  //  return 'assets/users/' + this.selectedUser.avatar;
  //}
  
  // -- Option B - using compute in the signal
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  

  // Trigger when you click
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    
    // -- Option A - using regular method, and zone.js for zoning change detection
    // this.selectedUser = DUMMY_USERS[randomIndex];

    // -- Option B - using signal
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
*/

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  // Getting the input from the parent component - App
  /**
   * NOTE
   * Option A -> Using Input decorator
   * required -> true -> means that this property is required, otherwise IDE will throw an error
   */

  /**
  @Input({
    required: true
  }) avatar !: string;

  @Input({
    required: true
  }) name !: string;
  */

  /**
   * NOTE
   * Option B -> Using input signal
   * In here the input signal, it is READ ONLY
   * So you cannot change it using set method
   */
  avatar = input.required<string>();
  name = input.required<string>();

  // Use signal to change the imagePath
  imagePath = computed(() => 'assets/users/' + this.avatar())

  onSelectUser() {

  }
}