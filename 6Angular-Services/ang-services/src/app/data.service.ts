import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public saveData : any;

  add(a : any, b : any) {
    return a+b;
  }
}
