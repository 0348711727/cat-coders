import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

export const routes: Routes = [
  { pathMatch: 'full', redirectTo: '', path: '' },
  { path: '', component: HomeComponent },
];
