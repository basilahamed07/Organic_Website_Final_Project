import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef<HTMLElement>;
  @ViewChild('register') registerBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('login') loginBtn!: ElementRef<HTMLButtonElement>;

  constructor() {}

  ngAfterViewInit() {
    const container = this.container.nativeElement;
    const registerBtn = this.registerBtn.nativeElement;
    const loginBtn = this.loginBtn.nativeElement;

    registerBtn.addEventListener('click', () => {
      container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
      container.classList.remove("active");
    });
  }
}