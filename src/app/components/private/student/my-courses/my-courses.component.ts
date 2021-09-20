import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Enroll } from 'src/app/models/enroll';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css','./../../../../../assetsadmin/css/sb-admin-2.css']
})
export class MyCoursesComponent implements OnInit {
enrolls:any[]=[]
  constructor(private user:UserService,private http:HttpClient) { }

  ngOnInit(): void {
let idStudent=this.user.getIdStudent();
console.log(idStudent)
this.http.get<any>("http://localhost:8080/enroll/all").subscribe(
res=>{ this.enrolls=res;
  console.log(this.enrolls)
  this.enrolls=this.enrolls.filter((u)=>u.student.id==idStudent)
  console.log(this.enrolls)
},
err=>console.log(err)
)
  }

}
