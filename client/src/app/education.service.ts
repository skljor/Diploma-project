import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../../../server/src/types/education';
import { BACKEND_URL } from './backend-url';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(
    private http: HttpClient
  ) { }

  getEducatons() {
    return this.http.get<Education[]>(BACKEND_URL + '/educations');
  }
}
