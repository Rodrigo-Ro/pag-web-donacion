import { Routes } from '@angular/router';

import { InicioPagina } from './pages/iniciopagina/iniciopagina';
import { NosotrosPagina } from './pages/nosotrospagina/nosotrospagina';
import { ProblematicaPagina } from './pages/problematicapagina/problematicapagina';
import { CampPagina } from './pages/camppagina/camppagina';
import { TransPagina } from './pages/transpagina/transpagina';
import { TestimonioPagina } from './pages/testimoniopagina/testimoniopagina';
import { ContactoPagina } from './pages/contactopagina/contactopagina';
import { DonarPagina } from './pages/donarpagina/donarpagina';

export const routes: Routes = [
  { path: '', component: InicioPagina },
  { path: 'nosotros', component: NosotrosPagina },
  { path: 'problematica', component: ProblematicaPagina },
  { path: 'campanas', component: CampPagina },
  { path: 'transparencia', component: TransPagina },
  { path: 'testimonios', component: TestimonioPagina },
  { path: 'contacto', component: ContactoPagina },
  { path: 'donar', component: DonarPagina },
  { path: '**', redirectTo: '' }
];