import { Routes } from '@angular/router';
import { HomeArchivosComponent } from './home-archivos/home-archivos.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { CatHistoricoComponent } from './cat-historico/cat-historico.component';
import { SobreLibroComponent } from './sobre-libro/sobre-libro.component';
import { EstrategiasLecturaComponent, } from './estrategias-lectura/estrategias-lectura.component';


export const ARCHIVOS_ROUTES: Routes = [

    { path: 'HomeArchivos', component: HomeArchivosComponent },
    { path: 'Convocatorias', component: ConvocatoriasComponent },
    { path: 'CatHistorico', component: CatHistoricoComponent },
    { path: 'SobreLibro', component: SobreLibroComponent },
    { path: 'EstrategiasLectura', component: EstrategiasLecturaComponent },
    { path: '**', component: HomeArchivosComponent }
  ];