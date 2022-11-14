import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ModuleWithComponentFactories } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { WorkinghourformComponent } from './workinghourform.component';

describe('WorkinghourformComponent', () => {
  let component: WorkinghourformComponent;
  let fixture: ComponentFixture<WorkinghourformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkinghourformComponent ],
      imports:[HttpClientTestingModule,FormsModule],
      providers:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkinghourformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
