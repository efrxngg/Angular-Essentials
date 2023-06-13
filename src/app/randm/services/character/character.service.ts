import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root, Character } from '../dtos/character.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/env.dev';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  getCharactersPage(uri: string) {
    return this.httpClient.get<Root>(`${environment.API_RANDM_CHARACTER}/?${uri}`);
  }

  getAllCharacters(): Observable<Root> {
    return this.httpClient.get<Root>(environment.API_RANDM_CHARACTER);
  }

  getAllCharacterByName(name: string): Observable<Root> {
    return this.httpClient.get<Root>(
      `${environment.API_RANDM_CHARACTER}/?name=${name}`
    );
  }

  getCharacterById(id: number): Observable<Character> {
    return this.httpClient.get<Character>(
      `${environment.API_RANDM_CHARACTER}/${id}`
    );
  }
}
