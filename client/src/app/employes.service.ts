import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../../server/src/types/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  constructor(
    private http: HttpClient
  ) { }

  getEmployees() {
    return this.http.get<Employee[]>('http://localhost:5000/employees');
  }
}
