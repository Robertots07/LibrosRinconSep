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
import { CategoriasComponent } from './acervos/categorias/categorias.component';
import { TitulosMonolinguesComponent } from './acervos/titulos-monolingues/titulos-monolingues.component';
import { TitulosBilinguesComponent } from './acervos/titulos-bilingues/titulos-bilingues.component';
import { ProduccionEstatalComponent } from './acervos/produccion-estatal/produccion-estatal.component';
import { CatalogoElectronicoComponent } from './acervos/catalogo-electronico/catalogo-electronico.component';
import { MediatecaComponent } from './acervos/mediateca/mediateca.component';


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
    CategoriasComponent,
    TitulosMonolinguesComponent,
    TitulosBilinguesComponent,
    ProduccionEstatalComponent,
    CatalogoElectronicoComponent,
    MediatecaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
