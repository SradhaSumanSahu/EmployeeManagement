import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
import {ToastrService} from 'ngx-toastr';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(public empService:EmployeeService, public toast: ToastrService) { }


  ngOnInit() {
    this.empService.getDesignations().subscribe(data=>{
      this.empService.listDesignation=data;
    })
  }
  submit(form:NgForm)
  {
    if (this.empService.employeeData.id==0)
    this.insertEmployee(form);
    else
    this.updateEmployee(form);
  }

  insertEmployee(myform:NgForm)
  {
    this.empService.saveEmployee().subscribe(d=>
      {
        this.resetForm(myform);
        this.refreshData();
        this.toast.success('Success' ,'Record Saved');
        
      });
  }
  updateEmployee(myform:NgForm)
  {
    this.empService.updateEmployee().subscribe(d=>
      {
        this.resetForm(myform);
        this.refreshData();
        this.toast.warning('Success' ,'Record Updated');
        
      });
  
  }
  resetForm(myform:NgForm)
  {
    myform.form.reset();
    this.empService.employeeData=new Employee();
  }

  refreshData()
  {
    this.empService.getEmployees().subscribe(res=>
      {
        this.empService.listEmployee=res;
      });
  }
}
