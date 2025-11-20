import { Component } from '@angular/core';
import { UserStatus } from '../../models/user-status';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  // Об'єкт користувача
  user: User = {
    id: 1,
    name: 'John Doe',
    status: UserStatus.Active,
    address: {
      city: 'Kyiv',
      street: 'Shevchenka 12'
    },
    hobbies: ['Reading', 'Gaming', 'Travel']
  };

  // Метод для підрахунку хобі
  getHobbiesCount(): number {
    return this.user.hobbies.length;
  }

}
