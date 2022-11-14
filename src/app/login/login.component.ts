import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  constructor( private fb: FormBuilder, private auth:AuthService) { 

  }


  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }
onLogin()
  {
if(this.loginForm.valid){

console.log(this.loginForm.value)
this.auth.login(this.loginForm.value)
.subscribe({
  next:(res)=>{
    alert(res.message)
  },
  error:(err)=>{
    alert(err?.error.message)
  }
})
}
else{

this.validateAllFormFileds(this.loginForm);
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
