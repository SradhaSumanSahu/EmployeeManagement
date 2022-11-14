import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  BaseServerUrl="https://localhost:44329/api/Users";

signUp(userObj:any)
{
  return this.http.post<any>
  (`${this.BaseServerUrl}register`,userObj)
}
login(loginObj:any){
  return this.http.post<any>
  ('${this.BaseServerUrl}authenticate',loginObj);

}

  
  }

