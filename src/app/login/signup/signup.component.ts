import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm:FormGroup;
  constructor( private fb: FormBuilder,private auth:AuthService) { }

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],

    })
  }
  onSignup(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value)
      this.auth.signUp(this.signupForm.value).subscribe(
        {
          next:(res)=>{
            alert(res.message)
          }
          ,error:(err)=>{
            alert(err.error.message)
          }
        }
      )
      
      }
      else{
      
      this.validateAllFormFileds(this.signupForm);
      alert("Your form is invalid")
      }
  }
  private validateAllFormFileds(formGroup:FormGroup)
{
  Object.keys(formGroup.controls).forEach(field=>
    {
      const control=formGroup.get(field);
      if(control instanceof FormControl)
      {
        control.markAsDirty({onlySelf:true});
      }
else if(control instanceof FormGroup){
  this.validateAllFormFileds(control)
}
    
      
    })
}
}
