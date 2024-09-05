import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Main/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent, MatSlideToggleModule,NzCarouselModule,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Organic_Website';
}
