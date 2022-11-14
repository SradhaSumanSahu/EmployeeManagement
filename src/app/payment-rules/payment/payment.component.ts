import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/payment.model';
import { PaymentService } from '../../services/payment.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  title='cards';
  cards:Card[]=[];
  card:Card={
    id:'',
    cardholderName:'',
    cardNumber:'',
    expiryMonth:'',
    expiryYear:'',
    cvc:''

  }

  constructor(private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.getAllCards();
    
  }
  getAllCards()
  {
    this.paymentService.getAllCards().subscribe(
      response=>
      {
        this.cards=response;
        
      }
    );
  }
   onSubmit()
{
  this.paymentService.addCard(this.card)
  .subscribe(
    response=>
    {
      console.log(response);
    }
  )
  
  }

}
