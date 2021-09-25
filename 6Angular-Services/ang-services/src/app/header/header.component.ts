import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DatatransserviceService } from '../datatransservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  text1 : any ;
  constructor(private dataservice2 : DataService,private datatrans2 : DatatransserviceService) { 
    console.log("service value saveData is : " + this.dataservice2.saveData);
    console.log("service value sharedData is  : " + this.datatrans2.sharedData);
    this.text1 = this.datatrans2.sharedData;
  }

  ngOnInit(): void {
  }

}
