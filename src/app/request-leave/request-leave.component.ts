import { Component, OnInit } from '@angular/core';
import { Leave } from '../models/leave.model';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-request-leave',
  templateUrl: './request-leave.component.html',
  styleUrls: ['./request-leave.component.css']
})
export class RequestLeaveComponent implements OnInit {

  constructor(public leaveService:LeaveService) { }

  ngOnInit(): void {
    this.leaveService.getLeaves().subscribe(data=>
      {
        this.leaveService.listleave=data;
      });
  }

  populateLeave(selectleave:Leave)
  {
this.leaveService.leaveData=selectleave;
console.log(selectleave);
  }
  delete(employeeId:number)
  {
if(confirm('Are you really want to delete this leave request?'))
{
  this.leaveService.deleteLeave(employeeId).subscribe(data=>
    {
      console.log('Record deleted..');
      this.leaveService.getLeaves().subscribe(data=>
        {
          this.leaveService.listleave=data;
        });
    },
    err=>{console.log('record not deleted')}
    );
}
  }

}
