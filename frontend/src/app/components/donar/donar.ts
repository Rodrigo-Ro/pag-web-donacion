import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DonacionService } from '../../services/donacion';

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
  errorMessage = '';
  submitted = false;
  tiposDonacion = [
    'Ropa',
    'Alimentos',
    'Útiles Escolares',
    'Juguetes',
    'Otros'
  ];

  constructor(private fb: FormBuilder, private donacionService: DonacionService) {
    this.donationForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d{9}$/)
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
    this.successMessage = '';
    this.errorMessage = '';

    if (this.donationForm.invalid || this.tipoArray.length === 0) {
      this.donationForm.markAllAsTouched();
      return;
    }

    const formValue = this.donationForm.value;

    const payload = {
      nombre: formValue.nombre,
      email: formValue.email,
      telefono: formValue.telefono,
      tipos_donacion: this.tipoArray.value.join(', '),
      punto_entrega: formValue.puntoEntrega,
      descripcion: formValue.descripcion
    };

    this.donacionService.crearDonacion(payload).subscribe({
      next: () => {
        this.successMessage = '✔ La solicitud fue enviada con éxito';
        this.donationForm.reset();
        this.tipoArray.clear();
        this.submitted = false;
      },
      error: (err) => {
        console.error('Error al enviar donación:', err);
        this.errorMessage = 'Ocurrió un error al enviar tu solicitud. Intenta de nuevo.';
      }
    });
  }
}