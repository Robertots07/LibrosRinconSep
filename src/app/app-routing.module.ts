import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcervosComponent } from './acervos/acervos.component';
import { ProcesoComponent } from './proceso/proceso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { DocentesComponent } from './docentes/docentes.component';

//Rutas para modulo Acervos
import { ACERVOS_ROUTES } from './acervos/acervo.routes';
import { PROCESO_ROUTES } from './proceso/proceso.routes';
import { ALUMNOS_ROUTES } from './alumnos/alumnos.routes';
import { DOCENTES_ROUTES } from './docentes/docentes.routes';


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
  { path: 'alumnos',
  component: AlumnosComponent,
  children: ALUMNOS_ROUTES
  },
  { path: 'docentes',
  component: DocentesComponent,
  children: DOCENTES_ROUTES
  },

{ path: '**', component: InicioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
