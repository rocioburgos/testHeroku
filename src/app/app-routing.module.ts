import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './componentes/login/login.component';
import {BienvenidoComponent} from './componentes/bienvenido/bienvenido.component';
import {ErrorComponent} from './componentes/error/error.component';

const routes: Routes = [
  {path:'', component:BienvenidoComponent}, 
  {path:'login', component:LoginComponent},
  {path:'**', component:ErrorComponent} //cualquier cosa que no coincida va a mandar a error
 /*{path: home, component:HomeComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 