import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { workingHour } from 'src/app/models/WorkingHours.model';
import { WorkhourService } from 'src/app/services/workhour.service';

@Component({
  selector: 'app-workinghourform',
  templateUrl: './workinghourform.component.html',
  styleUrls: ['./workinghourform.component.css']
})
export class WorkinghourformComponent implements OnInit {

  constructor(public workhourservice:WorkhourService) { }
  

  ngOnInit(): void {
  }
  submit(form:NgForm)
  {
    if(this.workhourservice.workingHourData.id==0)
    this.insertWorkingHour(form);
    else
    this.updateWorkingHour(form);
    
  }
  insertWorkingHour(myform:NgForm)
{
this.workhourservice.saveWorkingHour().subscribe(d=>
  {
    this.resetForm(myform);
    this.refreshData();
    console.log('save success')
  });
}
updateWorkingHour(myform:NgForm)
{
  this.workhourservice.updateWorkingHour().subscribe(d=>
    {
      this.resetForm(myform);
      this.refreshData();
      console.log('update success')
    });

}
resetForm(myform:NgForm)
{
  myform.form.reset();
  this.workhourservice.workingHourData=new workingHour();

}
refreshData()

{
  this.workhourservice.getWorkingHour().subscribe(res=>
    {
      this.workhourservice.listworkinghour=res;
    });
}
}
