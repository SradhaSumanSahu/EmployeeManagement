import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leave } from '../models/leave.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  [x: string]: any;

  constructor(private myhttp:HttpClient) { }
  leaveUrl:string="https://localhost:44329/api/Leave";
  listleave:Leave[]=[];//for getting data EmployeeList

  leaveData:Leave=new Leave();//for post data/insert data

saveLeave()
{
  return this.myhttp.post(this.leaveUrl,this.leaveData);
}
updateLeave()
  {
    return this.myhttp.put(`${this.leaveUrl}/${this.leaveData.employeeId}`,this.leaveData);
  }

  getLeaves():Observable<Leave[]>
  {
    return this.myhttp.get<Leave[]>(this.leaveUrl);
  }

  deleteLeave(employeeId:number)
  {
    return this.myhttp.delete(`${this.leaveUrl}/${employeeId}`);
  }


}
