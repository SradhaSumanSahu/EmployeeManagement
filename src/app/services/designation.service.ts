import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDesignation } from '../models/designation.model';


@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  

  constructor(private myhttp:HttpClient) { }
  designationurl:string="https://localhost:44329/api/Designations";
  listdesignation:EmployeeDesignation[]=[];
 
 
  designationdata:EmployeeDesignation=new EmployeeDesignation();
  

savedesignation()
  {
    return this.myhttp.post(this.designationurl,this.designationdata);
  }
  updatedesignation()
    {
      return this.myhttp.put(`${this.designationurl}/${this.designationdata.iD}`,this.designationdata);
    }
  
    getdesignation():Observable<EmployeeDesignation[]>
    {
      return this.myhttp.get<EmployeeDesignation[]>(this.designationurl);
    }
  
    deletedesignation(iD:number)
    {
      return this.myhttp.delete(`${this.designationurl}/${iD}`);
    }
  
  
  }