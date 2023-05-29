import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root, Character } from '../dtos/character.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/env.dev';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.httpClient
      .get<Root>(environment.API_URL_RANDM)
      .pipe(map((response: Root) => response.results));
  }
}
