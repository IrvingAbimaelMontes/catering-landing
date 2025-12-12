import { Component } from '@angular/core';

import { Navbar } from '../../layout/navbar/navbar';
import { Footer} from '../../layout/footer/footer';

import { HeroSection } from '../../sections/hero-section/hero-section';
import { ServiceSection } from '../../sections/service-section/service-section';
import { MenuCatalogSection } from '../../sections/menu-catalog-section/menu-catalog-section';
import { GallerySection} from '../../sections/gallery-section/gallery-section';
import { TestimonialsSection} from '../../sections/testimonials-section/testimonials-section';
import { ContactSection} from '../../sections/contact-section/contact-section';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    Navbar,
    Footer,
    HeroSection,
    ServiceSection,
    MenuCatalogSection,
    GallerySection,
    TestimonialsSection,
    ContactSection,
  ],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
