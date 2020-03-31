import { Routes } from '@angular/router';
import { HomeAcervosComponent } from './home-acervos/home-acervos.component';
import { SobrecoleccionComponent } from './sobrecoleccion/sobrecoleccion.component';

export const ACERVOS_ROUTES: Routes = [

    { path: 'HomeAc', component: HomeAcervosComponent },
    { path: 'SobreColeccion', component: SobrecoleccionComponent },
    { path: '**', component: HomeAcervosComponent }
  ];