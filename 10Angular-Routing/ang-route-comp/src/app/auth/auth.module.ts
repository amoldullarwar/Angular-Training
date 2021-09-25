import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { MatInputModule } from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,   // here we have to import modules
    MatButtonModule    
],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/