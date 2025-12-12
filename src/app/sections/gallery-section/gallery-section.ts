import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-section.html',
  styleUrl: './gallery-section.css',
})
export class GallerySection{
  
  images = [
    'assets/gallery/1.jpg',
    'assets/gallery/2.jpg',
    'assets/gallery/3.jpg',
    'assets/gallery/4.jpg',
    'assets/gallery/5.jpg',
    'assets/gallery/6.jpg',
  ];
}
