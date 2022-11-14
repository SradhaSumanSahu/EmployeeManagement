import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { workingHour } from '../models/WorkingHours.model';


@Injectable({
  providedIn: 'root'
})
export class WorkhourService {
  [x:string]:any;

  constructor(private myhttp:HttpClient) { }
  workingHourUrl:string='https://localhost:44329/api/WorkingHours';
  listworkinghour:workingHour[]=[];

  workingHourData:workingHour=new workingHour(); //for post data //insert data

saveWorkingHour()
  {
return this.myhttp.post(this.workingHourUrl,this.workingHourData);
  }
  updateWorkingHour()
  {
    return this.myhttp.put(`${this.workingHourUrl}/${this. workingHourData.id}`,this. workingHourData);
  }

  getWorkingHour():Observable<workingHour[]>
  {
    return this.myhttp.get<workingHour[]>(this.workingHourUrl);
  }

  deleteWorkingHour(id:number)
  {
    return this.myhttp.delete(`${this.workingHourUrl}/${id}`);
  }

}
