import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { TodoComponent } from './todo/todo.component';
import { AdminviewComponent } from './adminview/adminview.component';
// import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path:"signin",component:SigninComponent},
  {path:"register", component:RegisterComponent},
  {path:"admin", component:AdminComponent},
  {path:"todo", component:TodoComponent},
  {path:'adminview',component:AdminviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],      
  exports: [RouterModule]
})
export class AppRoutingModule { }
