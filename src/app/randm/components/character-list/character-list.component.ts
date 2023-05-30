import { Component, OnInit } from '@angular/core';
import { Character } from '../../services/dtos/character.dto';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CharacterService } from '../../services/character/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters!: Observable<Character[]>;
  selectedCharacter: Character | undefined;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters = this.characterService
      .getAllCharacters()
      .pipe(tap(console.log));
  }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }
}
