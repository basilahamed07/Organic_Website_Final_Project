import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-registrationpage',
  standalone: true,
  imports: [],
  templateUrl: './registrationpage.component.html',
  styleUrl: './registrationpage.component.css'
})
export class RegistrationpageComponent {


  onSubmit(form: NgForm) {
  }
}
