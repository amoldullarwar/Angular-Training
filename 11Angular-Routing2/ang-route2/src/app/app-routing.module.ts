import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes: Routes = [
  {
    path : "", // Default rout, this is first route which will be executed
    loadChildren: () => import('./auth/auth.module').then(m=>m.AuthModule)
  } /*,
  {
    path: '**',  // wildcard route
    component: WildcardComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
