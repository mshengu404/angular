import { Component, Input } from '@angular/core';

/**
 * The object passed to the @Component decorator is called the component's metadata. 
 * This includes the selector, template, and other properties described throughout this guide.
 */
@Component({
  selector: 'app-profile-photo',
  standalone: true,
  imports: [],
  templateUrl: './profile-photo.component.html',
  styleUrl: './profile-photo.component.css'
})
export class ProfilePhotoComponent {
  @Input({ required: true }) url!: string;
}
