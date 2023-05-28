import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Route } from '@angular/router';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'randm',
    loadChildren: () =>
      import('./randm/randm.module').then((m) => m.RandmModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
