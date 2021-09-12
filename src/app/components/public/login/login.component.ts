import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./../../../../assetsadmin/css/sb-admin-2.css']
})
export class LoginComponent implements OnInit {
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
    let isLoggedIn=this.user.isLoggedIn()
if(isLoggedIn){
  console.log("hhh");
  this.router.navigateByUrl('/home')}
  else{console.log("rr")
}


  }
  login(){
  let data=this.formLogin.value;
  let student=new Student(undefined,undefined,undefined,data.email,data.password,undefined)
  console.log(student)
  this.user.loginStudent(student).subscribe(
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
