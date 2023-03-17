import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    {
      imageSrc:
        'assets/slide1.png',
      imageAlt: 'Danish',
    },
    {
      imageSrc:
      'assets/slide1.png',
      imageAlt: 'Danish',
    },
   
  ]
 
}
