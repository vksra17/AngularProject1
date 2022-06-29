import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { 

 }
 postData(data:any){
  return this.api.post<any>("http://127.0.0.1:3000/api/adduser",data)
}
getData(data:any){
  return this.api.post<any>("http://localhost:3000/api/login",data)
}
}
