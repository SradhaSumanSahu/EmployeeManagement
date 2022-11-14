import { Component, OnInit } from '@angular/core';
import { workingHour } from '../models/WorkingHours.model';
import { WorkhourService } from '../services/workhour.service';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css']
})
export class WorkingHoursComponent implements OnInit {

  constructor(public workinghourService:WorkhourService) { }

  ngOnInit(): void {
    this.workinghourService.getWorkingHour().subscribe(data=>
      {
        this.workinghourService.listworkinghour=data;
      });
  }

  populateWorkingHour(selectWorkingHour:workingHour)
  {
this.workinghourService.workingHourData=selectWorkingHour;
console.log(selectWorkingHour);
  }
  delete(id:number)
  {
if(confirm('Are you really want to delete this leave request?'))
{
  this.workinghourService.deleteWorkingHour(id).subscribe(data=>
    {
      console.log('Record deleted..');
      this.workinghourService.getWorkingHour().subscribe(data=>
        {
          this.workinghourService.listworkinghour=data;
        });
    },
    err=>{console.log('record not deleted')}
    );
}
  }

}
