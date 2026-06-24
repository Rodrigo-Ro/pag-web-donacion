<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DonacionService } from '../../services/donacion';
=======
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
>>>>>>> Stashed changes

@Component({
  selector: 'app-donar',
  standalone: true,
<<<<<<< Updated upstream
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './donar.html',
  styleUrls: ['./donar.css']
})
export class Donar implements OnInit {

  donationForm!: FormGroup;

  successMessage: string = '';
  errorMessage: string = '';
  submitted: boolean = false;

  tiposDonacion: string[] = [
=======
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './donar.html',
  styleUrl: './donar.css'
})
export class Donar {

  donationForm: FormGroup;
  successMessage = '';
  submitted = false;

  tiposDonacion = [
>>>>>>> Stashed changes
    'Ropa',
    'Alimentos',
    'Útiles Escolares',
    'Juguetes',
    'Otros'
  ];

<<<<<<< Updated upstream
  tipoArray: string[] = [];

  constructor(private donacionService: DonacionService) {}

  ngOnInit(): void {
    this.donationForm = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
      puntoEntrega: new FormControl('', Validators.required),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(10)])
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.donationForm.invalid || this.tipoArray.length === 0) {
      this.errorMessage = 'Por favor completa todos los campos correctamente.';
      this.successMessage = '';
      return;
    }

    const formValue = this.donationForm.value;

    const payload = {
      nombre: formValue.nombre,
      email: formValue.email,
      telefono: formValue.telefono,
      tipos_donacion: this.tipoArray.join(', '),
      punto_entrega: formValue.puntoEntrega,
      descripcion: formValue.descripcion
    };

    this.donacionService.crearDonacion(payload).subscribe({
      next: () => {
        this.successMessage = 'Donación registrada correctamente 🎉';
        this.errorMessage = '';
        this.donationForm.reset();
        this.submitted = false;
        this.tipoArray = [];
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Hubo un error al registrar tu donación. Intenta de nuevo.';
        this.successMessage = '';
      }
    });
  }

  allowOnlyNumbers(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
    this.donationForm.patchValue({ telefono: input.value });
  }

  onCheckboxChange(event: any): void {
    const value = event.target.value;

    if (event.target.checked) {
      this.tipoArray.push(value);
    } else {
      this.tipoArray = this.tipoArray.filter(t => t !== value);
    }
=======
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
>>>>>>> Stashed changes
  }
}