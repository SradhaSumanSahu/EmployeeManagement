import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResigterComponent } from './components/resigter/resigter.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-details/employee-form/employee-form.component';
import { HomeComponent } from './navbar/home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentRulesComponent } from './payment-rules/payment-rules.component';
import { PaymentComponent } from './payment-rules/payment/payment.component';
import { RequestLeaveComponent } from './request-leave/request-leave.component';
import { SignupComponent } from './login/signup/signup.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { EmployeedesignationComponent } from './employeedesignation/employeedesignation.component';

const routes: Routes = [
  {
    path: 'resigter',
    component:ResigterComponent
  },
  {
    path:'employee-details',
    component:EmployeeDetailsComponent
  },
  
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'payment',
    component:PaymentRulesComponent
  },
  {
    path:'requestleave',
    component:RequestLeaveComponent
  },
  {
    path:'workinghour',
    component:WorkingHoursComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'payments',
    component:PaymentComponent
  },
  {
    path:'employeedesignation',
    component:EmployeedesignationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
