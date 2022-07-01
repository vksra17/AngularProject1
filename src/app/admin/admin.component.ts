import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
myForm!:FormGroup;
  constructor(private fb : FormBuilder,private api:ApiService ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      // name: ['', [Validators.required, Validators.minLength(3)]],
      file: ['', [Validators.required]],
      fileSource: ['', [Validators.required]]
    })
  }
  get f(){
    return this.myForm.controls;
  }

  onFileChange(event:any) {
  
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }
  // submit(){
  //   const formData = new FormData();
  //   formData.append('file', this.myForm.get('fileSource')?.value);
  //   console.log(formData)
  //   this.api.postFile(formData)
  //     .subscribe(res => {
  //       console.log(res);
  //       alert('Uploaded Successfully.');
  //     })
  // }
}
