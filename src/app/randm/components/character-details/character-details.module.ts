import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: CharacterDetailsComponent,
  },
];

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CharacterDetailsModule {}
