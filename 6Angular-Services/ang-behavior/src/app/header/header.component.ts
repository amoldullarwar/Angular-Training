import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService : DataserviceService) { 

    this.dataService.getMessage.subscribe(data=>{
      console.log("Behaviour subject value : " + data);
      // Asynchronus function .. callbacks
    })
  }

  ngOnInit(): void {
  }

}
