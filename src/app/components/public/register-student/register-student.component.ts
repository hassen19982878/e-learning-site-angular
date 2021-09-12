import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css','./../../../../assetsadmin/css/sb-admin-2.css']
})
export class RegisterStudentComponent implements OnInit {

  formRegister: FormGroup
  constructor(private fb: FormBuilder,private user:UserService) {
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
      password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
      ]),
      repassword: new FormControl('',
      Validators.required
      )
    }
    this.formRegister = this.fb.group(formControls);

  }

  ngOnInit(): void {
  }
  registerStudent(){
    console.log(this.formRegister.value)
    let data=this.formRegister.value;
    let student=new Student(undefined,data.firstname,data.lastname,data.email,data.password,undefined)
    this.user.registerStudent(student).subscribe(
res=>console.log(res),
err=>console.log(err)

    )
  
  
  }
  get firstname() {
    return this.formRegister.get('firstname');
  }
  get lastname() {
    return this.formRegister.get('lastname');
  }
  get email() {
    return this.formRegister.get('email');
  }
  get password() {
    return this.formRegister.get('password');
  }
  get repassword(){
    return this.formRegister.get('repassword')
  }
}
