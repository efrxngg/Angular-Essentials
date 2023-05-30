import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandmComponent } from './randm.component';
import { Route, RouterModule } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

const routes: Route[] = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import(
        '../randm/components/character-details/character-details.module'
      ).then((m) => m.CharacterDetailsModule),
  },
];

@NgModule({
  declarations: [
    RandmComponent,
    CharacterListComponent,
    CharacterCardComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RandmModule {}
