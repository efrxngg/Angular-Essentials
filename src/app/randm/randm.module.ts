import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RandmComponent } from './randm.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterSearchComponent } from './components/character-search/character-search.component';
import { CharacterPaginationComponent } from './components/character-pagination/character-pagination.component';

const routes: Route[] = [
  {
    path: '',
    component: RandmComponent,
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
    CharacterSearchComponent,
    CharacterPaginationComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RandmComponent],
})
export class RandmModule {}
