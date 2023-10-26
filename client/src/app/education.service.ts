import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../../../server/src/types/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(
    private http: HttpClient
  ) { }

  getEducatons() {
    return this.http.get<Education[]>('http://localhost:5000/educations');
  }
}
