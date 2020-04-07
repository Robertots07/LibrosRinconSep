import { Routes } from '@angular/router';
import { HomeProcesoComponent } from './home-proceso/home-proceso.component';



export const PROCESO_ROUTES: Routes = [

    { path: 'HomeProceso', component: HomeProcesoComponent },
    { path: '**', component: HomeAcervosComponent }
  ];