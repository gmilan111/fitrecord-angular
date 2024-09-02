import { Routes } from '@angular/router';
import {RegisterLoginComponent} from "./component/register-login/register-login.component";
import {IndexComponent} from "./component/index/index.component";

export const routes: Routes = [
  {path: '', component: IndexComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterLoginComponent},
];
