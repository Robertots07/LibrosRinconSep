import { Routes } from '@angular/router';
import { HomeAlumnosComponent } from './home-alumnos/home-alumnos.component';
import { LibrosSugeridosComponent } from './libros-sugeridos/libros-sugeridos.component';


export const ALUMNOS_ROUTES: Routes = [

    { path: 'HomeAlumnos', component: HomeAlumnosComponent },
    { path: 'LibrosSugeridos', component: LibrosSugeridosComponent },
    { path: '**', component: HomeAlumnosComponent }
  ];