import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Structures } from '../../../server/src/types/structures';


@Injectable({
  providedIn: 'root'
})
export class StructuresService {

  constructor(
    private http: HttpClient
  ) { }

  fetchData() {
    return this.http.get<Structures>('http://localhost:5000/structures');
  }
}
