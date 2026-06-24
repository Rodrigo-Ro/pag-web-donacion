import { Component } from '@angular/core';
import { Testimonios } from '../../components/testimonios/testimonios';

@Component({
  selector: 'app-testimoniopagina',
  standalone: true,
  imports: [Testimonios],
  templateUrl: './testimoniopagina.html',
  styleUrl: './testimoniopagina.css'
})
export class TestimonioPagina {}