import { Component } from '@angular/core';
import { Donar } from '../../components/donar/donar';

@Component({
  selector: 'app-donarpagina',
  standalone: true,
  imports: [Donar],
  templateUrl: './donarpagina.html',
  styleUrl: './donarpagina.css'
})
export class DonarPagina {}