import { Component, OnInit } from '@angular/core';
import { Character, Info, Root } from './services/dtos/character.dto';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CharacterService } from './services/character/character.service';

@Component({
  selector: 'app-randm',
  templateUrl: './randm.component.html',
  styleUrls: ['./randm.component.css'],
})
export class RandmComponent implements OnInit {
  characters!: Observable<Character[]>;
  info!: Info;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characters = this.characterService.getAllCharacters().pipe(
      tap((response: Root) => (this.info = response.info)),
      map((response: Root) => response.results)
    );
  }

  onSearch(searchTerm: string) {
    this.characters = this.characterService
      .getAllCharacterByName(searchTerm)
      .pipe(
        tap((response: Root) => (this.info = response.info)),
        map((response: Root) => response.results)
      );
  }

  onChangePage(page: string) {
    const match = page.match(/\?(.*)/);
    if (match) {
      this.characters = this.characterService.getCharactersPage(match[1]).pipe(
        tap((response: Root) => (this.info = response.info)),
        map((response: Root) => response.results)
      );
    }
  }
}
