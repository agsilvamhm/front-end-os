import { Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';

export const routes: Routes = [
  { path: '',        component: HomeComponent},
  { path:'tecnicos', component: TecnicoReadComponent}
];
