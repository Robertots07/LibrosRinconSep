import { Routes } from '@angular/router';
import { HomeAcervosComponent } from './home-acervos/home-acervos.component';
import { SobrecoleccionComponent } from './sobrecoleccion/sobrecoleccion.component';
import { SeriesComponent } from './series/series.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { TitulosMonolinguesComponent } from './titulos-monolingues/titulos-monolingues.component';
import { TitulosBilinguesComponent } from './titulos-bilingues/titulos-bilingues.component';
import { ProduccionEstatalComponent } from './produccion-estatal/produccion-estatal.component';
import { CatalogoElectronicoComponent } from './catalogo-electronico/catalogo-electronico.component';


export const ACERVOS_ROUTES: Routes = [

    { path: 'HomeAc', component: HomeAcervosComponent },
    { path: 'SobreColeccion', component: SobrecoleccionComponent },
    { path: 'Series', component: SeriesComponent },
    { path: 'Categorias', component: CategoriasComponent }, 
    { path: 'TitulosMonolingues', component: TitulosMonolinguesComponent },
    { path: 'TitulosBilingues', component: TitulosBilinguesComponent },
    { path: 'ProduccionEstatal', component: ProduccionEstatalComponent },
    { path: 'CatalogoElectronico', component: CatalogoElectronicoComponent },
    { path: '**', component: HomeAcervosComponent }
  ];