import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employ } from '../../../server/src/types/employ';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(
    private http: HttpClient
  ) { }

  getEmploys(queryString?: string) {
    return this.http.get<Employ[]>(queryString ? `http://localhost:5000/employes?${queryString}` : 'http://localhost:5000/employes');
  }
}
