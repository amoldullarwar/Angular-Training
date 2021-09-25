import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private user = new BehaviorSubject<string>('john');
  getUserDetails  = this.user.asObservable();
   
   setUserDetails(userDetails : any){
     this.user.next(userDetails); 
   }

}
