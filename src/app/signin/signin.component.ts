import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginform!: FormGroup;
  message!: string;
  name!:String;
  constructor(private fb: FormBuilder, private api: ApiService, public router: Router) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }
  login() {
    this.api.getData(this.loginform.value).subscribe(

      {
        next: (res) => {
          // console.log(res);
            if (res.Message == "Login success") {
            const token = res.token
            this.name = res.name;
            localStorage.setItem("token", token)
            this.router.navigate(['/']);
            setTimeout(() => {
              alert("loggedIn")
            }, 2000);
          } else {
            this.message = res.Message
          }
        }
      
         })
}

  }
