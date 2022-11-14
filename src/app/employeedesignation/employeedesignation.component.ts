import { Component, OnInit } from '@angular/core';
import { EmployeeDesignation } from '../models/designation.model';
import { DesignationService } from '../services/designation.service';

@Component({
  selector: 'app-employeedesignation',
  templateUrl: './employeedesignation.component.html',
  styleUrls: ['./employeedesignation.component.css']
})
export class EmployeedesignationComponent implements OnInit {

  constructor(public designationService:DesignationService) { }

  ngOnInit():void{ 
    this.designationService.getdesignation().subscribe(data=>
      {
        this.designationService.listdesignation=data;
      });
    
  }
  populatedesignation(selectdesignation:EmployeeDesignation)
  {
this.designationService.designationdata=selectdesignation;
console.log(selectdesignation);
  }
  deletedesignation(iD:number)
  {
if(confirm('Are you really want to delete this leave request?'))
{
  this.designationService. deletedesignation(iD).subscribe(data=>
    {
      console.log('Record deleted..');
      this.designationService. getdesignation().subscribe(data=>
        {
          this.designationService.listdesignation=data;
        });
    },
    err=>{console.log('designation is not deleted')}
    );
}
  }
}