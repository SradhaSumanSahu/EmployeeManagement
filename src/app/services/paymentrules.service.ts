import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentRule } from '../models/paymentrules.model';

@Injectable({
  providedIn: 'root'
})
export class Paymentruleservice {

  constructor(private myhttp:HttpClient) { }
  paymentruleurl:string='https://localhost:44329/api/PaymentRule';
  listpaymentrule:PaymentRule[]=[];

  paymentRuleData:PaymentRule=new PaymentRule(); //for post data //insert data

savePaymentrule()
  {
return this.myhttp.post(this.paymentruleurl,this.paymentRuleData);
  }
  updatePaymentrule()
  {
    return this.myhttp.put(`${this.paymentruleurl}/${this. paymentRuleData.id}`,this. paymentRuleData);
  }

  getPaymentrule():Observable<PaymentRule[]>
  {
    return this.myhttp.get<PaymentRule[]>(this.paymentruleurl);
  }

  deletePaymentrule(id:number)
  {
    return this.myhttp.delete(`${this.paymentruleurl}/${id}`);
  }

}
