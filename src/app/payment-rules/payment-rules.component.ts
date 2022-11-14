import { Component, OnInit } from '@angular/core';
import { PaymentRule } from '../models/paymentrules.model';
import { Paymentruleservice } from '../services/paymentrules.service';

@Component({
  selector: 'app-payment-rules',
  templateUrl: './payment-rules.component.html',
  styleUrls: ['./payment-rules.component.css']
})
export class PaymentRulesComponent implements OnInit {

  constructor(public paymentruleservice: Paymentruleservice) { }

  ngOnInit():void{ 
    this.paymentruleservice.getPaymentrule().subscribe(data=>
      {
        this.paymentruleservice.listpaymentrule=data;
      });
    
  }
  populatePaymentRule(selectpaymentrule:PaymentRule)
  {
this.paymentruleservice.paymentRuleData=selectpaymentrule;
console.log(selectpaymentrule);
  }
  deletePayment(id:number)
  {
if(confirm('Are you really want to delete this leave request?'))
{
  this.paymentruleservice. deletePaymentrule(id).subscribe(data=>
    {
      console.log('Record deleted..');
      this.paymentruleservice. getPaymentrule().subscribe(data=>
        {
          this.paymentruleservice.listpaymentrule=data;
        });
    },
    err=>{console.log('paymentrule not deleted')}
    );
}
  }
}
