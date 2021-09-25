import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent implements AfterViewInit {

  
  constructor() { }
  parentData = "Hey Hi this text is from parent component";

  //To access data into parent component
  @ViewChild(ChildComponent) child : any;
  
  ngAfterViewInit() {
    console.log(""+this.child.childValue);
  }
}
