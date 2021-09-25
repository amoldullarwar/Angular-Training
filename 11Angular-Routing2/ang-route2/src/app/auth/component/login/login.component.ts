import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data! : Observable<any>;
  loginForm!: FormGroup;
  submitted = false;
  query: any;

  constructor(private router : Router, private httpService : HttpService,private formBuilder: FormBuilder) { 
    this.loginForm= this.formBuilder.group(
      {
        userName: ['',Validators.required],
        password: ['',Validators.required],
      }
    )

  }

  ngOnInit(): void {
    this.data=this.httpService.getDataFromServer();
  }

  getData() {
    this.httpService.getDataFromServer().subscribe(response => {
      console.log('data from server : ',response);
      })
      this.data=this.httpService.getDataFromServer();
  }
  navigate(){
      this.router.navigate(['dashboard',5]);
      
  }

   // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log('firstname',this.loginForm.get('userName')?.value);

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value));
    this.router.navigate(['dashboard',this.loginForm.get('userName')]);
  }

}
