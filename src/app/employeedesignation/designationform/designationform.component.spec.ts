import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationformComponent } from './designationform.component';

describe('DesignationformComponent', () => {
  let component: DesignationformComponent;
  let fixture: ComponentFixture<DesignationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignationformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
