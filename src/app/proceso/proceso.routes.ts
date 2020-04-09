import { Routes } from '@angular/router';
import { HomeprocesoComponent } from './homeproceso/homeproceso.component';
import { SobreprocesoComponent } from './sobreproceso/sobreproceso.component';
import { IngresomatComponent } from './ingresomat/ingresomat.component';
import { PreseleccionComponent } from './preseleccion/preseleccion.component';
import { SeleccionComponent } from './seleccion/seleccion.component';


export const PROCESO_ROUTES: Routes = [

    { path: 'Homeproceso', component: HomeprocesoComponent },
    { path: 'Sobreproceso',component: SobreprocesoComponent },
    { path: 'Ingresomat', component: IngresomatComponent },
    { path: 'Preseleccion', component: PreseleccionComponent },
    { path: 'Seleccion', component: SeleccionComponent },
    { path: '**', component: HomeprocesoComponent }
  ];