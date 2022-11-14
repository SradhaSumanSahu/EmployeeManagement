import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ResigterComponent } from './components/resigter/resigter.component';
import { AuthService } from './services/auth.service';
import { EmployeeFormComponent } from './employee-details/employee-form/employee-form.component';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { WorkingHoursComponent } from './working-hours/working-hours.component';
import { RequestLeaveComponent } from './request-leave/request-leave.component';
import { PaymentRulesComponent } from './payment-rules/payment-rules.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { PaymentComponent } from './payment-rules/payment/payment.component';
import { LeaveformComponent } from './request-leave/leaveform/leaveform.component';
import { PaymentformComponent } from './payment-rules/paymentform/paymentform.component';
import { WorkinghourformComponent } from './working-hours/workinghourform/workinghourform.component';
import { EmployeedesignationComponent } from './employeedesignation/employeedesignation.component';
import { DesignationformComponent } from './employeedesignation/designationform/designationform.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    ResigterComponent,
    EmployeeFormComponent,
    NavbarComponent,
    HomeComponent,
    WorkingHoursComponent,
    RequestLeaveComponent,
    PaymentRulesComponent,
    LoginComponent,
    SignupComponent,
    PaymentComponent,
    LeaveformComponent,
    PaymentformComponent,
    WorkinghourformComponent,
    EmployeedesignationComponent,
    DesignationformComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientTestingModule
  ],
  
  providers: [DatePipe,AuthService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
