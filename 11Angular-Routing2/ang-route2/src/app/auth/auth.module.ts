import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipes';


@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  declarations: [
    LoginComponent,
    SearchPipe
  ]
})
export class AuthModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/