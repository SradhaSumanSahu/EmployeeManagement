import { TestBed } from '@angular/core/testing';
import{Paymentruleservice} from './paymentrules.service';

//import { PaymentrulesService } from './paymentrules.service';

describe('PaymentrulesService', () => {
  let service: Paymentruleservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Paymentruleservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
