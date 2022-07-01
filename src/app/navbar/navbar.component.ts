import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private api : ApiService, private router:Router) { }

  ngOnInit(): void {
    
  }
 opendialog(){
  // if(localStorage.getItem("token")){
  //   this.api.gotohome(localStorage.getItem("token")).subscribe({
  //     next:(res)=>{
  //       if(!res){
  //         console.log("Error ")
  //       }
  //       else{
  //         console.log(res)
  //       }
  //     }})
  // }
  this.router.navigate(['/adminview'])
 }
}
