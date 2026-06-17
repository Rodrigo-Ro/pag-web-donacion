import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  contactForm: FormGroup;
  successMessage = '';
  submitted = false;

  asuntos = [
    'Información general',
    'Donaciones',
    'Voluntariado',
    'Problemas técnicos',
    'Otros'
  ];

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      asunto: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  allowOnlyNumbers(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      this.successMessage = '';
      this.contactForm.markAllAsTouched();
      return;
    }

    this.successMessage = '✔ Mensaje enviado con éxito';
    console.log(this.contactForm.value);

    this.contactForm.reset();
    this.submitted = false;
  }
}