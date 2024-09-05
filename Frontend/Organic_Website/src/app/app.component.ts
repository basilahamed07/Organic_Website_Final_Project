import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { AppComponent } from './app.component';
// import { ProductFormComponent } from './product-form/product-form.component'; // Adjust the path as needed

import { LandingpageComponent } from '../components/layout/landingpage/landingpage.component';

// #testing content
// import { TestComponent } from '../components/test/test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, LandingpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Organic_Website';
}
