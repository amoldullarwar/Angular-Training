import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/component/dashboard/dashboard.component';
import { WildcardComponent } from '../wildcard/wildcard.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {
    path: '', // Default rout, this is first route which will be executed
    component: LoginComponent
  
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path: 'dashboard/:id',
    loadChildren: () => import('../dashboard/dashboard.module').then(m=>m.DashboardModule)
   },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/