import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm!: FormGroup;
  submitted: boolean=false;
 constructor(public formBuilder: FormBuilder, private api:ApiService) { }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name:["",[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      phonenumber: [''],
      DOB: [''],
      password:[''],
      confirmpassword:['']
    },{
      //  validators: this.MustMatch('Password','ConfirmPassword')
    })  
  }
  // MustMatch(controlName:string,matchingControlName:string){
  //   return(formGroup:FormGroup)=>{
  //     const control = formGroup.controls[controlName];
  //     const matchControl =formGroup.controls[matchingControlName]
  //     if(matchControl.errors&& !matchControl.errors['MustMatch']) 
  //     {return}
  //     if(control.value!==matchControl.value){
  //       matchControl.setErrors({MustMatch:true});
  //     }
  //     else{
  //       matchControl.setErrors(null);
  //     }
  //   }
  // }
  get getControl(){
    return this.userForm.controls;
  }
 post(){ 
  console.log(this.userForm.value)
   this.api.postData(this.userForm.value).subscribe({
    next:(res)=>{
      console.log(res)
    }
   })

 } 
clear(){
 this.userForm.reset('')
}
}
