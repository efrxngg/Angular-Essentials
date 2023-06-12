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
      .get<Root>(environment.API_RANDM_CHARACTER)
      .pipe(map((response: Root) => response.results));
  }

  getAllCharacterByName(name: string): Observable<Character[]> {
    return this.httpClient
      .get<Root>(`${environment.API_RANDM_CHARACTER}/?name=${name}`)
      .pipe(map((response: Root) => response.results));
  }

  getCharacterById(id: number): Observable<Character> {
    return this.httpClient.get<Character>(
      `${environment.API_RANDM_CHARACTER}/${id}`
    );
  }
}
