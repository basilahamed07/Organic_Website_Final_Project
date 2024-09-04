import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {provideAnimations} from "@angular/platform-browser/animations"
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ MatSlideToggleModule,NzCarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  
}








