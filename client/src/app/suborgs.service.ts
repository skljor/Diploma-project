import { Injectable } from '@angular/core';
import { SuborgsObserver, SuborgsSubject } from 'src/types/suborgs-observer';
import { HttpClient } from '@angular/common/http';
import { SubOrg } from '../../../server/src/types/sub-org';

@Injectable({
  providedIn: 'root'
})
export class SuborgsService implements SuborgsSubject {

  listeners: SuborgsObserver[] = [];
  private suborgs: SubOrg[] | undefined;

  constructor(
    private http: HttpClient
  ) {
    this.fetchData().subscribe((data) => {
      this.suborgs = data;
      this.notify(data);
    })
   }

  private fetchData() {
    return this.http.get<SubOrg[]>('http://localhost:5000/suborgs');
  } 

  public subscribe(observer: SuborgsObserver): void {
    this.listeners.push(observer);
    if(this.suborgs)observer.listenSuborgsUpdate(this.suborgs);
  }

  notify(suborgs: SubOrg[]): void {
    this.listeners.forEach((subscriber) => {
      subscriber.listenSuborgsUpdate(suborgs);
    })
  }
}
