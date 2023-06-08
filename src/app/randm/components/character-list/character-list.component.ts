import { Component, Input } from '@angular/core';
import { Character } from '../../services/dtos/character.dto';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent {
  @Input() characters!: Character[];
  selectedCharacter: Character | undefined;

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }
}
