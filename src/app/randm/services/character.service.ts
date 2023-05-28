import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Root, Result } from '../interfaces/apiresponse.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  constructor(private httpClient: HttpClient) {}

  getAllCharacters(): Observable<Result[]> {
    return this.httpClient
      .get<Root>('https://rickandmortyapi.com/api/character')
      .pipe(map((response: Root) => response.results));
  }
}
