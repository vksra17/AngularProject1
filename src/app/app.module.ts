import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { SigninComponent } from './signin/signin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomDirective } from './Directives/custom.directive';
import { AdminComponent } from './admin/admin.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { TodoComponent } from './todo/todo.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CrudComponent } from './crud/crud.component';
import { AdminviewComponent } from './adminview/adminview.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SigninComponent,
    NavbarComponent,
    CustomDirective,
    AdminComponent,
    TodoComponent,
    CrudComponent,
    AdminviewComponent,

  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  HttpClientModule,
  MatIconModule,
  AngularFileUploaderModule,
  MatCardModule,
  MatButtonModule,
  DragDropModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(){

  }

}
