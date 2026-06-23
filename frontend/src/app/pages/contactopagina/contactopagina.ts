import { Component } from '@angular/core';
import { Contacto } from '../../components/contacto/contacto';

@Component({
  selector: 'app-contactopagina',
  standalone: true,
  imports: [Contacto],
  templateUrl: './contactopagina.html',
  styleUrl: './contactopagina.css'
})
export class ContactoPagina {}