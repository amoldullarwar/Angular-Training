import { Component } from '@angular/core';
import { DataService } from './data.service';
import { DatatransserviceService } from './datatransservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataservice : DataService, private datatransservice : DatatransserviceService){
      // Initialization of variable from DataService
      this.dataservice.saveData = "This text is from Service";
      
      // execution of add from dataservice 
      let result = this.dataservice.add(10,20);

      this.datatransservice.sharedData = "This is text for datatransservice....";

      console.log("addition result : " + result);
  }

  //Multiple constructor implementations are not allowed.
  /* 
  constructor(private datatransservice : DatatransserviceService) {

  } */


  title = 'ang-services';
}
