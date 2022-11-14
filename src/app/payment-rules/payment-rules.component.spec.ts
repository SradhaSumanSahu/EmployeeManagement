import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentRulesComponent } from './payment-rules.component';

describe('PaymentRulesComponent', () => {
  let component: PaymentRulesComponent;
  let fixture: ComponentFixture<PaymentRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentRulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
