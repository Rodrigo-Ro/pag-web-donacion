import { Component } from '@angular/core';
import { Nosotros } from '../../components/nosotros/nosotros';

@Component({
  selector: 'app-nosotrospagina',
  standalone: true,
  imports: [Nosotros],
  templateUrl: './nosotrospagina.html',
  styleUrl: './nosotrospagina.css'
})
export class NosotrosPagina {}