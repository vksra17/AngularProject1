import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginform!:FormGroup;

  constructor(private fb:FormBuilder,private api:ApiService,public router:Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  login(){
    this.api.getData(this.loginform.value).subscribe(
      
    {next:(res)=>{
        console.log(res)
        this.router.navigate(['/'])
        setTimeout(() => {
          alert("loggedIn")
        }, 2000);
    }})
  }

}
