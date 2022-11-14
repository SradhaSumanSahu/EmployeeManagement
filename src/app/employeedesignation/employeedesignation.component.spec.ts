import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedesignationComponent } from './employeedesignation.component';

describe('EmployeedesignationComponent', () => {
  let component: EmployeedesignationComponent;
  let fixture: ComponentFixture<EmployeedesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedesignationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeedesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
