import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Structures } from '../../../server/src/types/structures';
import { StructuresObserver, StructuresSubject } from 'src/types/structures-observer';
import { BACKEND_URL } from './backend-url';

@Injectable({
  providedIn: 'root'
})
export class StructuresService implements StructuresSubject{

  listeners: StructuresObserver[] = [];
  private structures: Structures | undefined;

  constructor(
    private http: HttpClient
  ) {
    this.fetchData().subscribe((data) => {
      this.structures = data
      this.notify(data);
    });
   }

  private fetchData(queryString?: string) {
    return this.http.get<Structures>(queryString ? BACKEND_URL + `/structures?${queryString}` : BACKEND_URL + '/structures');
  }

  public subscribe(observer: StructuresObserver): void {
    this.listeners.push(observer);
    if(this.structures)observer.listenStructuresUpdate(this.structures);
  }

  notify(structures: Structures): void {
    this.listeners.forEach((observer) => observer.listenStructuresUpdate(structures));
  }
}
