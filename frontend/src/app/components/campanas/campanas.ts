import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-campanas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './campanas.html',
  styleUrl: './campanas.css'
})
export class Campanas {

campaigns = [
  {
    title: 'Abrigando Huancayo',
    status: 'Urgente',
    location: 'Pariahuanca',
    progress: 75,
    image: '/images/campanas/abrigo.jpg'
  },
  {
    title: 'Alimentos para Comedores',
    status: 'Activa',
    location: 'Huancayo',
    progress: 60,
    image: '/images/campanas/alimentos.jpg'
  },
  {
    title: 'Apoyo a Orfanatos',
    status: 'Activa',
    location: 'El Tambo',
    progress: 82,
    image: '/images/campanas/orfanato.jpg'
  }
];

}