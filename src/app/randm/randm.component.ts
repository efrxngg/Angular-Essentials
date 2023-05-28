import { Component, OnInit } from '@angular/core';
import { CharacterService } from './services/character.service';
import { Result } from './interfaces/apiresponse.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-randm',
  templateUrl: './randm.component.html',
  styleUrls: ['./randm.component.css'],
})
export class RandmComponent implements OnInit {
  constructor(private characterService: CharacterService) {}

  characters!: Observable<Result[]>;

  ngOnInit(): void {
    this.characters = this.characterService.getAllCharacters();
  }
}
