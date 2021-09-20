import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-studuent-list',
  templateUrl: './studuent-list.component.html',
  styleUrls: ['./studuent-list.component.css','./../../../../../../assetsadmin/css/sb-admin-2.css']
})
export class StuduentListComponent implements OnInit {
list_students:any[]=[]
  constructor(private user:UserService) { }

  ngOnInit(): void {
  this.user.get_students().subscribe(
res=>{this.list_students=res;
this.list_students=this.list_students.filter((u)=>u.role=="student")
},
err=>console.log(err)
  )

}
deleteStudentById(student:Student)
{console.log(student)
  let index = this.list_students.indexOf(student);
  this.list_students.splice(index, 1);
  this.user.delete_student_by_id(student.id).subscribe(
res=>console.log(res),
err=>console.log(err)

  )
}
changeStatus(student:Student)
{
  let index=this.list_students.indexOf(student);
  if(student.accountState==true)
  {let newStudent=new Student(student.id,student.firstname,student.lastname,student.email,student.password,false)
this.user.updateStudent(newStudent).subscribe
(
  res=>{console.log(res)
  this.list_students[index]=newStudent
  },
  err=>console.log(err)
)
  }
  else {
    let newStudent=new Student(student.id,student.firstname,student.lastname,student.email,student.password,true);
this.user.updateStudent(newStudent).subscribe
(
  res=>{console.log(res);
    this.list_students[index]=newStudent

  },
  err=>console.log(err)
)
  }

}

}
