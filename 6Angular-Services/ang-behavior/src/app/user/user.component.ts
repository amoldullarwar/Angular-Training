import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit,OnDestroy {

  public userArray : any;
  releaseMemory : Subscription;
  numberType :any;


  constructor(private userService : UserService,private dataService : DataserviceService) {
     
    this.numberType = "10 is " + dataService.checkNumberTypeOddEven(10) + ' Number';
    
    // data  polling 
     this.releaseMemory = this.userService.getUserDetails.subscribe(data=>{
      if(data) {
        //Data Cycle
        console.log("Data Cycle ::::: ");
        this.userArray = data;
      }
    },err=>{
        //Error Cycle
        console.log("Error Cycle ::::: ");
    },
    () => {
      //Complete Cycle
      console.log("Complete Cycle ::::: ");
    }
    );
   }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if(this.releaseMemory) {
      this.releaseMemory.unsubscribe();
      console.log("Observable unsubcribled here");
    }
  }

}
