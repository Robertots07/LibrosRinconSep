import { Routes } from '@angular/router';
import { HomeNumComponent } from './home-num/home-num.component';
import { BibliotecasDistribuidasComponent } from './bibliotecas-distribuidas/bibliotecas-distribuidas.component';
import { EjemplaresAdquiridosComponent } from './ejemplares-adquiridos/ejemplares-adquiridos.component';
import { TitulosAnualesComponent } from './titulos-anuales/titulos-anuales.component';


export const NUMERALIA_ROUTES: Routes = [

    { path: 'HomeNum', component: HomeNumComponent },
    { path: 'BibliotecasDistribuidas', component: BibliotecasDistribuidasComponent },
    { path: 'EjemplaresAdquiridos', component: EjemplaresAdquiridosComponent },
    { path: 'TitulosAnuales', component: TitulosAnualesComponent },
    { path: '**', component: HomeNumComponent }
  ];