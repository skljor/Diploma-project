import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(
    private http: HttpClient
  ) { }

  getEducatons() {
    return this.http.get('http://localhost:5000/educations');
  }
}
