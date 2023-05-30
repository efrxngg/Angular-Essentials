import { Component, OnInit } from '@angular/core';
import { Character } from '../../services/dtos/character.dto';
import { CharacterService } from '../../services/character/character.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  character!: Observable<Character>;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    const characterId = Number(routerParams.get('id'));
    this.character = this.characterService
      .getCharacterById(characterId)
      .pipe(map((character) => character));
  }
}
