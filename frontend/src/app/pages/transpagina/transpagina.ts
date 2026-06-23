import { Component } from '@angular/core';
import { Transparencia } from '../../components/transparencia/transparencia';

@Component({
  selector: 'app-transpagina',
  standalone: true,
  imports: [Transparencia],
  templateUrl: './transpagina.html',
  styleUrl: './transpagina.css'
})
export class TransPagina {}