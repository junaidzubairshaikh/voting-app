import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TruckLoadService {

  private url:string = '/message'
  constructor(private http: HttpClient) { }


  getAllMessage(){
    return this.http.get(this.url);
  }
}
