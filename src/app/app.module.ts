import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenugobComponent } from './componentes/menugob/menugob.component';
import { FootergobComponent } from './componentes/footergob/footergob.component';
import { AcervosComponent } from './acervos/acervos.component';
import { HomeAcervosComponent } from './acervos/home-acervos/home-acervos.component';
import { SobrecoleccionComponent } from './acervos/sobrecoleccion/sobrecoleccion.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { SeriesComponent } from './acervos/series/series.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalfichaComponent } from './componentes/modalficha/modalficha.component';

import { TitulosMonolinguesComponent } from './acervos/titulos-monolingues/titulos-monolingues.component';
import { TitulosBilinguesComponent } from './acervos/titulos-bilingues/titulos-bilingues.component';
import { ProduccionEstatalComponent } from './acervos/produccion-estatal/produccion-estatal.component';
import { CatalogoElectronicoComponent } from './acervos/catalogo-electronico/catalogo-electronico.component';
import { CategoriasComponent } from './acervos/categorias/categorias.component';
import { MediatecaComponent } from './acervos/mediateca/mediateca.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { HomeprocesoComponent } from './proceso/homeproceso/homeproceso.component';
import { SobreprocesoComponent } from './proceso/sobreproceso/sobreproceso.component';
import { IngresomatComponent } from './proceso/ingresomat/ingresomat.component';
import { PreseleccionComponent } from './proceso/preseleccion/preseleccion.component';
import { SeleccionComponent } from './proceso/seleccion/seleccion.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { HomeAlumnosComponent } from './alumnos/home-alumnos/home-alumnos.component';
import { LibrosSugeridosComponent } from './alumnos/libros-sugeridos/libros-sugeridos.component';
import { HomeDocentesComponent } from './docentes/home-docentes/home-docentes.component';
import { BamComponent } from './docentes/bam/bam.component';
import { OrientacionComponent } from './docentes/orientacion/orientacion.component';
import { NumeraliaComponent } from './numeralia/numeralia.component';
import { HomeNumComponent } from './numeralia/home-num/home-num.component';
import { BibliotecasDistribuidasComponent } from './numeralia/bibliotecas-distribuidas/bibliotecas-distribuidas.component';
import { EjemplaresAdquiridosComponent } from './numeralia/ejemplares-adquiridos/ejemplares-adquiridos.component';
import { TitulosAnualesComponent } from './numeralia/titulos-anuales/titulos-anuales.component';
import { ArchivosComponent } from './archivos/archivos.component';
import { HomeArchivosComponent } from './archivos/home-archivos/home-archivos.component';
import { ConvocatoriasComponent } from './archivos/convocatorias/convocatorias.component';
import { CatHistoricoComponent } from './archivos/cat-historico/cat-historico.component';
import { SobreLibroComponent } from './archivos/sobre-libro/sobre-libro.component';
import { EstrategiasLecturaComponent } from './archivos/estrategias-lectura/estrategias-lectura.component';


import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MenugobComponent,
    FootergobComponent,
    AcervosComponent,
    HomeAcervosComponent,
    SobrecoleccionComponent,
    MenuComponent,
    SidebarComponent,
    SeriesComponent,
    ModalfichaComponent,
    TitulosMonolinguesComponent,
    TitulosBilinguesComponent,
    ProduccionEstatalComponent,
    CatalogoElectronicoComponent,
    CategoriasComponent,
    MediatecaComponent,
    ProcesoComponent,
    HomeprocesoComponent,
    SobreprocesoComponent,
    IngresomatComponent,
    PreseleccionComponent,
    SeleccionComponent,
    AlumnosComponent,
    DocentesComponent,
    HomeAlumnosComponent,
    LibrosSugeridosComponent,
    HomeDocentesComponent,
    BamComponent,
    OrientacionComponent,
    NumeraliaComponent,
    HomeNumComponent,
    BibliotecasDistribuidasComponent,
    EjemplaresAdquiridosComponent,
    TitulosAnualesComponent,
    ArchivosComponent,
    HomeArchivosComponent,
    ConvocatoriasComponent,
    CatHistoricoComponent,
    SobreLibroComponent,
    EstrategiasLecturaComponent,

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  entryComponents:[
    ModalfichaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
