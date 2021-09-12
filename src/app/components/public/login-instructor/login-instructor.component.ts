import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-instructor',
  templateUrl: './login-instructor.component.html',
  styleUrls: ['./login-instructor.component.css','./../../../../assetsadmin/css/sb-admin-2.css']
})
export class LoginInstructorComponent implements OnInit {
  formLogin: FormGroup

  constructor(private fb: FormBuilder,private router:Router,private user:UserService) {
    let formControls =
    {
      email: new FormControl('',[
      Validators.required,
      Validators.email
      ]),
      password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
      ]),
      
    }
    this.formLogin = this.fb.group(formControls);

  }

  ngOnInit(): void {
    let isLoggedIn=this.user.isLoggedInInstructor()
if(isLoggedIn){
  console.log("hhh");
  this.router.navigateByUrl('/home')}
  else{console.log("rr")
}


  }
  login(){console.log(this.formLogin.value)
  let data=this.formLogin.value;
  let instructor=new Instructor(undefined,undefined,undefined,data.image,undefined,data.email,data.password,undefined)
  console.log(instructor)
  this.user.loginInstructor(instructor).subscribe(
    res=>{console.log(res)
      let token=res.token;
    localStorage.setItem("my-token",token);
    this.router.navigateByUrl('/home')
    },
    err=>console.log(err))
  }

  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }


}
