import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  baseurl ="https://localhost:44329/api/Register";


  registerUser(){
   return  this.http.post(this.baseurl +"Register/CreateUser",null,{
    responseType: 'text',
   }
    );
  }




 
}
