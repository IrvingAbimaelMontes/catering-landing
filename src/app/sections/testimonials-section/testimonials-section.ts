import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Testimonial = { name: string; role: string; text: string };

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css',
})
export class TestimonialsSection{
  testimonials: Testimonial[] = [
    { name: 'María G.', role: 'Boda (120 invitados)', text: 'Todo llegó puntual, presentación hermosa y la comida excelente.' },
    { name: 'Carlos R.', role: 'Corporativo', text: 'Muy organizados, el coffee break fue rápido y bien servido.' },
    { name: 'Andrea L.', role: 'Cumpleaños', text: 'Los platillos y postres fueron el hit. Súper recomendado.' },
  ];
}
