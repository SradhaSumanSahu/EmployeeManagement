import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentRule } from 'src/app/models/paymentrules.model';
import { Paymentruleservice } from 'src/app/services/paymentrules.service';


@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {

  constructor(public paymentruleservice: Paymentruleservice) { }

  ngOnInit(): void {
  }

  submit(form:NgForm)
  {
    if(this.paymentruleservice.paymentRuleData.id==0)
    this.insertpaymentrule(form);
    else
    this.updatepaymentrule(form);
    
  }
insertpaymentrule(myform:NgForm)
{
this.paymentruleservice.savePaymentrule().subscribe(d=>
  {
    this.resetForm(myform);
    this.refreshData();
    console.log('save success')
  });
}
updatepaymentrule(myform:NgForm)
{
  this.paymentruleservice.updatePaymentrule().subscribe(d=>
    {
      this.resetForm(myform);
      this.refreshData();
      console.log('update success')
    });

}
resetForm(myform:NgForm)
{
  myform.form.reset();
  this.paymentruleservice.paymentRuleData=new PaymentRule();

}
refreshData()

{
  this.paymentruleservice.getPaymentrule().subscribe(res=>
    {
      this.paymentruleservice.  listpaymentrule=res;
    });
}
}