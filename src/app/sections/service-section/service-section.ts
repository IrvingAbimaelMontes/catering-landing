import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type ServiceItem = { title: string; desc: string; icon: string };

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-section.html',
  styleUrl: './service-section.css',
})
export class ServiceSection {
  services: ServiceItem[] = [
    { icon: '🥗', title: 'Menús personalizados', desc: 'Opciones por presupuesto, tema y tipo de evento.' },
    { icon: '🍰', title: 'Mesas de postres', desc: 'Presentación elegante y variedad de sabores.' },
    { icon: '☕', title: 'Coffee break', desc: 'Ideal para reuniones y eventos corporativos.' },
    { icon: '🍽️', title: 'Servicio completo', desc: 'Montaje, atención y limpieza (según paquete).' },
    { icon: '🎉', title: 'Eventos sociales', desc: 'Bodas, cumpleaños, XV años y más.' },
    { icon: '🏢', title: 'Eventos corporativos', desc: 'Soluciones para empresas con tiempos precisos.' },
  ];
}
