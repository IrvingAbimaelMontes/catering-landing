import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  private fb = inject(FormBuilder);

  submitted = false;

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    tipoEvento: ['Boda', Validators.required],
    fecha: ['', Validators.required],
    invitados: [50, [Validators.required, Validators.min(10)]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]],
  });

  invalid(name: string) {
    const c = this.form.get(name);
    return !!c && this.submitted && c.invalid;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) return;

    const v = this.form.getRawValue();
    const text =
`Hola, me gustaría cotizar catering.
Nombre: ${v.nombre}
Email: ${v.email}
Teléfono: ${v.telefono || 'N/A'}
Evento: ${v.tipoEvento}
Fecha: ${v.fecha}
Invitados: ${v.invitados}
Mensaje: ${v.mensaje}`;

    const phone = '526646139377'; // <-- tu número sin "+"
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');

    this.form.reset({ tipoEvento: 'Boda', invitados: 50 });
    this.submitted = false;
  }
}
