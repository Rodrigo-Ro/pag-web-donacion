import { Component } from '@angular/core';
import { Campanas } from '../../components/campanas/campanas';

@Component({
  selector: 'app-camppagina',
  standalone: true,
  imports: [Campanas],
  templateUrl: './camppagina.html',
  styleUrl: './camppagina.css'
})
export class CampPagina {}