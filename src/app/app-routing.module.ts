import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {
    path: '',

    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', component: HomeComponent }
    ]
  }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
