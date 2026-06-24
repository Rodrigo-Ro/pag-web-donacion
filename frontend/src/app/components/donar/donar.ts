import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

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

  ngOnInit(): void {
    this.donationForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      tipo: new FormControl('', Validators.required),
      monto: new FormControl('', [Validators.required, Validators.min(1)]),
      telefono: new FormControl(''),
      email: new FormControl(''),
      descripcion: new FormControl('')
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.donationForm.invalid) {
      this.errorMessage = 'Por favor completa todos los campos correctamente.';
      this.successMessage = '';
      return;
    }

    this.successMessage = 'Donación registrada correctamente 🎉';
    this.errorMessage = '';
    this.donationForm.reset();
    this.submitted = false;
    this.tipoArray = [];
  }


  allowOnlyNumbers(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  onCheckboxChange(event: any): void {
    const value = event.target.value;

    if (event.target.checked) {
      this.tipoArray.push(value);
    } else {
      this.tipoArray = this.tipoArray.filter(t => t !== value);
    }

    this.donationForm.patchValue({
      tipo: this.tipoArray
    });
  }
}