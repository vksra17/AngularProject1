import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) {

  }
  postData(data: any) {
    return this.api.post<any>("http://127.0.0.1:3000/api/adduser", data)
  }
  getData(data: any) {
    return this.api.post<any>("http://localhost:3000/api/login", data)
  }
  getAllInfo(){
    return this.api.get<any>("http://127.0.0.1:3000/api/getdata")
  }
  gotohome(token:any) {
    const header= new HttpHeaders({
      'Content-Type':"application/json",
      'token':`Bearer ${token}`
    })
    return this.api.post<any>("http://localhost:3000/api/first", {headers:header})
  }

}
