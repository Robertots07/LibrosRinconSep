import { Routes } from '@angular/router';
import { HomeDocentesComponent } from './home-docentes/home-docentes.component';
import { BamComponent } from './bam/bam.component';
import { OrientacionComponent } from './orientacion/orientacion.component';

export const DOCENTES_ROUTES: Routes = [

    { path: 'HomeDocentes', component: HomeDocentesComponent },
    { path: 'Bam', component: BamComponent },
    { path: 'Orientacion', component: OrientacionComponent },
    { path: '**', component: HomeDocentesComponent }
  ];