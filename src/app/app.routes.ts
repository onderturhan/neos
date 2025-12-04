import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./features/blog/blog-detail/blog-detail').then(m => m.BlogDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

