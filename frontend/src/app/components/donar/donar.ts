import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DonacionService } from '../../services/donacion';

@Component({
  selector: 'app-donar',
  standalone: true,
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
    'Ropa',
    'Alimentos',
    'Útiles Escolares',
    'Juguetes',
    'Otros'
  ];

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
  }
}