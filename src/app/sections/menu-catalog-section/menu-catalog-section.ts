import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Pack = { name: string; priceFrom: string; items: string[]; featured?: boolean };

@Component({
  selector: 'app-menu-catalog-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-catalog-section.html',
  styleUrl: './menu-catalog-section.css',
})
export class MenuCatalogSection{
  packs: Pack[] = [
    {
      name: 'Paquete Básico',
      priceFrom: '$190 MXN p/p',
      items: ['1 entrada', '1 plato fuerte', 'Agua fresca', 'Montaje sencillo'],
    },
    {
      name: 'Paquete Premium',
      priceFrom: '$290 MXN p/p',
      featured: true,
      items: ['Entrada + plato fuerte', 'Postre', '2 bebidas', 'Montaje elegante'],
    },
    {
      name: 'Corporativo',
      priceFrom: '$160 MXN p/p',
      items: ['Coffee break', 'Snacks', 'Café/Té', 'Servicio rápido'],
    },
  ];
}
