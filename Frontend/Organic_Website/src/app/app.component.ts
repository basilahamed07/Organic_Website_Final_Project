import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Main/home/home.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent, MatSlideToggleModule,NzCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Organic_Website';
}
