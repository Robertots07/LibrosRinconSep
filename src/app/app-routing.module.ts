import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcervosComponent } from './acervos/acervos.component';

//Rutas para modulo Acervos
import { ACERVOS_ROUTES } from './acervos/acervo.routes';


const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'acervos',
     component: AcervosComponent,
     children: ACERVOS_ROUTES
  },
  { path: '**', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
