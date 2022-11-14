import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl='https://localhost:44329/api/Payment';

  constructor(private http: HttpClient) { }

  //Get all cards
  getAllCards():Observable<Card[]>
  {
    return this.http.get<Card[]>(this.baseUrl);
  }
//addCard
  addCard(card:Card):Observable<Card>{
    card.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Card>(this.baseUrl,card);
  }
}

