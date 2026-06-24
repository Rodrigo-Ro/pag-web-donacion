import { Component } from '@angular/core';

import { Hero } from '../../components/hero/hero';
import { Stats } from '../../components/stats/stats';
import { WhyDonate } from '../../components/why-donate/why-donate';
import { Problematica } from '../../components/problematica/problematica';
import { Campanas } from '../../components/campanas/campanas';
import { Testimonios } from '../../components/testimonios/testimonios';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-iniciopagina',
  standalone: true,
  imports: [
    Hero,
    Stats,
    WhyDonate,
    Problematica,
    Campanas,
    Testimonios,
    Cta
  ],
  templateUrl: './iniciopagina.html',
  styleUrl: './iniciopagina.css'
})
export class InicioPagina {}