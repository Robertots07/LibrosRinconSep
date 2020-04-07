import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcervosComponent } from './acervos/acervos.component';
import { ProcesoComponent } from './proceso/proceso.component';

//Rutas para modulo Acervos
import { ACERVOS_ROUTES } from './acervos/acervo.routes';

//Rutas para modulo Proceso
import { PROCESO_ROUTES } from './proceso/proceso.routes';


const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'acervos',
     component: AcervosComponent,
     children: ACERVOS_ROUTES
  },
  { path: 'proceso',
  component: ProcesoComponent,
  children: PROCESO_ROUTES
},
{ path: '**', component: InicioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
