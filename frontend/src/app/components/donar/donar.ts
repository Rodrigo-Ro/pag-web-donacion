import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-donar',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './donar.html',
  styleUrl: './donar.css'
})
export class Donar {

  donationForm: FormGroup;
  successMessage = '';
  submitted = false;

  tiposDonacion = [
    'Ropa',
    'Alimentos',
    'Útiles Escolares',
    'Juguetes',
    'Otros'
  ];

  constructor(private fb: FormBuilder) {

    this.donationForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],

      email: ['', [Validators.required, Validators.email]],

      telefono: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{9}$/) // exactamente 9 números
        ]
      ],

      tipo: this.fb.array([], Validators.required),

      puntoEntrega: ['', Validators.required],

      descripcion: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get tipoArray() {
    return this.donationForm.get('tipo') as FormArray;
  }

  // Solo números (limpia cualquier otro carácter)
  allowOnlyNumbers(event: any) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }

  onCheckboxChange(event: any) {
    const value = event.target.value;
    const checked = event.target.checked;

    if (checked) {
      this.tipoArray.push(this.fb.control(value));
    } else {
      const index = this.tipoArray.controls.findIndex(x => x.value === value);
      this.tipoArray.removeAt(index);
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.donationForm.invalid || this.tipoArray.length === 0) {
      this.successMessage = '';
      this.donationForm.markAllAsTouched();
      return;
    }

    this.successMessage = '✔ La solicitud fue enviada con éxito';
    console.log(this.donationForm.value);

    this.donationForm.reset();
    this.tipoArray.clear();
    this.submitted = false;
  }
}