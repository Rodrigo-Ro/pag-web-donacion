import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Stats } from './components/stats/stats';
import { WhyDonate } from './components/why-donate/why-donate';
import { Problematica } from './components/problematica/problematica';
import { Campanas } from './components/campanas/campanas';
import { Transparencia } from './components/transparencia/transparencia';
import { Testimonios } from './components/testimonios/testimonios';
import { Contacto } from './components/contacto/contacto';
import { Cta } from './components/cta/cta';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Stats,
    WhyDonate,
    Problematica,
    Campanas,
    Transparencia,
    Testimonios,
    Contacto,
    Cta
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}