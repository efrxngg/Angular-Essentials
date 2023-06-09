import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-character-search',
  templateUrl: './character-search.component.html',
  styleUrls: ['./character-search.component.css'],
})
export class CharacterSearchComponent {
  search: string | undefined;
  @Output() searchEvent = new EventEmitter<string>();

  searchCharacter() {
    this.searchEvent.emit(this.search);
  }
}
