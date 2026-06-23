import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.html',
  styleUrl: './testimonios.css'
})
export class Testimonios {

  testimonios = [
    {
      nombre:'María González',
      cargo:'Donante',
      texto:'Pude seguir mi donación y ver exactamente a quién ayudó.'
    },
    {
      nombre:'Carlos Rojas',
      cargo:'Beneficiario',
      texto:'Gracias a esta ayuda mi familia pudo afrontar el invierno.'
    },
    {
      nombre:'Comedor San José',
      cargo:'Organización Aliada',
      texto:'La plataforma facilita la llegada de apoyo a quienes más lo necesitan.'
    }
  ];

}