import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  open = false;

  toggle() {
    this.open = !this.open;
  }

  goTo(id: string) {
    this.open = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
