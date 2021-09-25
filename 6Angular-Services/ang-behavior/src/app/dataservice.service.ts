import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  private user = new BehaviorSubject<string>('john');
   getMessage  = this.user.asObservable();
   
   
   storeMessage(newUser : any){
     this.user.next(newUser); 
   }

   checkNumberTypeOddEven(number : any){
    return number%2==0 ? 'EVEN' : 'ODD';1
   }
}
