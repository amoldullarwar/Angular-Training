import { Component } from '@angular/core';
import { DataserviceService } from './dataservice.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dataservice : DataserviceService,private userService : UserService){
    let idArray = [10,20,30,40,50];
    let userArray = [
      {id:1,name:'Amol'},
      {id:2,name:'Sachin'},
      {id:3,name:'Nitin'},
      {id:4},
      {name:'Gokul'}
    ];
    this.dataservice.storeMessage(idArray);

    // set json array to publish in observable object 
    this.userService.setUserDetails(userArray); 
  }
  title = 'ang-behavior';
}
