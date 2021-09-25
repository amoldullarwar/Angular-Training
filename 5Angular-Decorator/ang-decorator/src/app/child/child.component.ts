import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() childData : any;
  
  childValue ="This text is from child component";

  constructor() { }
  
}
