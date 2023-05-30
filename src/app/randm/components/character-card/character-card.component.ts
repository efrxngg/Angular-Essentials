import { Component, Input } from '@angular/core';
import { Character } from '../../services/dtos/character.dto';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent {
  @Input() character!: Character;
  constructor() {}

  getStyle(character: Character) {
    if (character.status === 'Alive') {
      return { 'background-color': 'blue', color: 'white' };
    } else {
      return { 'background-color': 'gray', color: 'black' };
    }
  }
}
