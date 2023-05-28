import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandmComponent } from './randm.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: RandmComponent,
  },
];

@NgModule({
  declarations: [RandmComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RandmModule {}
