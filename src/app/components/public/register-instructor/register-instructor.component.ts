import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Instructor } from 'src/app/models/instructor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-instructor',
  templateUrl: './register-instructor.component.html',
  styleUrls: ['./register-instructor.component.css','./../../../../assetsadmin/css/sb-admin-2.css']
})
export class RegisterInstructorComponent implements OnInit {
  formRegisterInstructor: FormGroup
  constructor(private fb: FormBuilder,private user:UserService,private router:Router) {
    let formControls =
    {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ]),
      email: new FormControl('',[
      Validators.required,
      Validators.email
      ]),
      image:new FormControl('',[
  Validators.required
      ]),
      
      description: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
        ]),

      password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
      ]),

      repassword: new FormControl('',
      Validators.required
      )
    }
    this.formRegisterInstructor = this.fb.group(formControls);

  }

  ngOnInit(): void {
  }
  registerInstructor(){console.log(this.formRegisterInstructor.value);
    console.log("hhh")
  
  let data=this.formRegisterInstructor.value;
  let instructor=new Instructor(undefined,data.firstname,data.lastname,data.image,data.description,data.email,data.password,undefined)
  console.log(instructor)
    this.user.registerInstructor(instructor).subscribe(
      res=>{console.log(res),
        this.router.navigateByUrl('/home')},
      err=>console.log(err)
    )
  
  }
  get firstname() {
    return this.formRegisterInstructor.get('firstname');
  }
  get lastname() {
    return this.formRegisterInstructor.get('lastname');
  }
  get email() {
    return this.formRegisterInstructor.get('email');
  }
  get image() {
    return this.formRegisterInstructor.get('image');
  }
  get password() {
    return this.formRegisterInstructor.get('password');
  }
  get repassword(){
    return this.formRegisterInstructor.get('repassword')
  }
  get description()
  {return this.formRegisterInstructor.get('description')}
}
