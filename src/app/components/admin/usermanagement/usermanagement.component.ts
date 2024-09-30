import { Component } from '@angular/core';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrl: './usermanagement.component.css'
})
export class UsermanagementComponent {
  users = [
    { userId: 1, name: 'John Doe', email: 'john@example.com' },
    { userId: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];

  editUser(user: any) {
    // Logic to edit user
    console.log('Editing user', user);
  }

  deleteUser(user: any) {
    // Logic to delete user
    console.log('Deleting user', user);
  }

}
