import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn:"root"
})
export class VotingService {

  subJect$ = new Subject<number>();
  constructor() { }


  get getData$() {
    return this.subJect$.asObservable();
  }

  updateSubject(value:number){
    this.subJect$.next(value);
  }
}
