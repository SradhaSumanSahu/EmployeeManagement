import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Leave } from 'src/app/models/leave.model';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-leaveform',
  templateUrl: './leaveform.component.html',
  styleUrls: ['./leaveform.component.css']
})
export class LeaveformComponent implements OnInit {

  constructor(public leaveservice:LeaveService) { }

  ngOnInit(): void {
  }
  submit(form:NgForm)
  {
    if(this.leaveservice.leaveData.employeeId==0)
    this.insertLeave(form);
    else
    this.updateleave(form);
    
  }
insertLeave(myform:NgForm)
{
this.leaveservice.saveLeave().subscribe(d=>
  {
    this.resetForm(myform);
    this.refreshData();
    console.log('save success')
  });
}
updateleave(myform:NgForm)
{
  this.leaveservice.updateLeave().subscribe(d=>
    {
      this.resetForm(myform);
      this.refreshData();
      console.log('update success')
    });

}
resetForm(myform:NgForm)
{
  myform.form.reset();
  this.leaveservice.leaveData=new Leave();

}
refreshData()

{
  this.leaveservice.getLeaves().subscribe(res=>
    {
      this.leaveservice.listleave=res;
    });
}
}
