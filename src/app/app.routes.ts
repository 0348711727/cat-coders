import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

export const routes: Routes = [
  { pathMatch: 'full', redirectTo: '', path: '' },
  { path: '', component: HomeComponent },
  { path: 'about', loadComponent: () => import('./core/home/home.component').then((x) => x.HomeComponent) },
  { path: 'services', loadComponent: () => import('./core/home/home.component').then((x) => x.HomeComponent) },
  { path: '**', loadComponent: () => import('./core/not-found-404/not-found-404.component').then((x) => x.NotFound404Component) }
];
