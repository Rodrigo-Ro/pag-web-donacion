import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-campanas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campanas.html',
  styleUrl: './campanas.css'
})
export class Campanas {

  campaigns = [
    {
      title:'Abrigando Huancayo',
      status:'Urgente',
      location:'Pariahuanca',
      progress:75
    },
    {
      title:'Alimentos para Comedores',
      status:'Activa',
      location:'Huancayo',
      progress:60
    },
    {
      title:'Apoyo a Orfanatos',
      status:'Activa',
      location:'El Tambo',
      progress:82
    }
  ];

}