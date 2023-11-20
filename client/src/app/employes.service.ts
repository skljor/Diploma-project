import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../../server/src/types/employee';
import { BACKEND_URL } from './backend-url';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(
    private http: HttpClient
  ) { }

  getEmployees() {
    return this.http.get<Employee[]>(BACKEND_URL + '/employees');
  }
}
