import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character/character.service';
import { Character } from './services/dtos/character.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-randm',
  templateUrl: './randm.component.html',
  styleUrls: ['./randm.component.css'],
})
export class RandmComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  characters!: Observable<Character[]>;

  ngOnInit(): void {
    this.characters = this.characterService.getAllCharacters();
  }
}
