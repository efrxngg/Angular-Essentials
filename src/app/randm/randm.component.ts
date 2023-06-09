import { Component, OnInit } from '@angular/core';
import { Character } from './services/dtos/character.dto';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CharacterService } from './services/character/character.service';

@Component({
  selector: 'app-randm',
  templateUrl: './randm.component.html',
  styleUrls: ['./randm.component.css'],
})
export class RandmComponent implements OnInit {
  characters!: Observable<Character[]>;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters = this.characterService
      .getAllCharacters()
      .pipe(tap(console.log));
  }

  onSearch(searchTerm: string) {
    console.log('Search: ' + searchTerm);
  }
}
