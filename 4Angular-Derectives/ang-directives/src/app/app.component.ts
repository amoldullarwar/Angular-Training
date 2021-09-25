import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-directives';
  isActive : boolean = true;
  isShowContents : boolean = false;
  pageContents : string = 'I love that this morning’s sunrise does not define itself by last night’s sunset.</br> Good morning have the best day </br> One small positive thought in the morning can change your whole day.<br> Good morning!'
  
  
  studentsArray = [{id:1,name:'Sachin'} ,{id:2,name:'Nitin', rollno:101} ,{id:2,name:'Vishal', rollno:102}]
  
  // Hide button function
  hideButton(){
    this.isActive = false;
  }


  showContents(){
      this.isShowContents = true;
  }
}
