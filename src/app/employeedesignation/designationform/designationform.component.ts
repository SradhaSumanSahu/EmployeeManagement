import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDesignation } from 'src/app/models/designation.model';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-designationform',
  templateUrl: './designationform.component.html',
  styleUrls: ['./designationform.component.css']
})
export class DesignationformComponent implements OnInit {

  constructor(public designationService:DesignationService) { }

  ngOnInit(): void {

    
  }

  submit(form:NgForm)
  {
    if(this.designationService. designationdata.iD==0)
    this.insertpaymentrule(form);
    else
    this.updatepaymentrule(form);
    
  }
insertpaymentrule(myform:NgForm)
{
this.designationService.savedesignation().subscribe(d=>
  {
    this.resetForm(myform);
    this.refreshData();
    console.log('save success')
  });
}
updatepaymentrule(myform:NgForm)
{
  this.designationService.updatedesignation().subscribe(d=>
    {
      this.resetForm(myform);
      this.refreshData();
      console.log('update success')
    });

}
resetForm(myform:NgForm)
{
  myform.form.reset();
  this.designationService. designationdata=new EmployeeDesignation();

}
refreshData()

{
  this.designationService.getdesignation().subscribe(res=>
    {
      this.designationService. listdesignation=res;
    });
}
}