import { Component } from '@angular/core';
import { Problematica } from '../../components/problematica/problematica';

@Component({
  selector: 'app-problematicapagina',
  standalone: true,
  imports: [Problematica],
  templateUrl: './problematicapagina.html',
  styleUrl: './problematicapagina.css'
})
export class ProblematicaPagina {}