import { Injectable } from '@angular/core';
import { SuborgsObserver, SuborgsSubject } from 'src/types/suborgs-observer';
import { HttpClient } from '@angular/common/http';
import { Organizations } from '../../../server/src/types/organizations';

@Injectable({
  providedIn: 'root'
})
export class SuborgsService implements SuborgsSubject {

  listeners: SuborgsObserver[] = [];
  private suborgs: Organizations | undefined;

  constructor(
    private http: HttpClient
  ) {
    this.fetchData().subscribe((data) => {
      this.suborgs = data;
      this.notify(data);
    })
   }

  private fetchData(queryString?: string) {
    return this.http.get<Organizations>(queryString ? `http://localhost:5000/suborgs?${queryString}` :'http://localhost:5000/suborgs');
  } 

  public subscribe(observer: SuborgsObserver): void {
    this.listeners.push(observer);
    if(this.suborgs)observer.listernSuborgsUpdate(this.suborgs);
  }

  notify(suborgs: Organizations): void {
    this.listeners.forEach((subscriber) => {
      subscriber.listernSuborgsUpdate(suborgs);
    })
  }
}
