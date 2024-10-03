import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser } from '../../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: IUser | null = null; // Store current user data
  private userSubject: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(this.currentUser);

  constructor() { }

  // Method to update user preferences
  updateUser(user: IUser): Observable<IUser> {
    this.currentUser = user;
    this.userSubject.next(this.currentUser);
    // Simulate saving to backend
    return of(this.currentUser); // Replace with actual API call to update user
  }

  // Method to change user preferences directly
  changeUserPreferences(theme: 'light' | 'dark', language: string): void {
    if (this.currentUser) {
      this.currentUser.preferences = { theme, language };
      this.userSubject.next(this.currentUser);
      // Optionally save to the backend
      this.updateUser(this.currentUser).subscribe();
    }
  }
}
