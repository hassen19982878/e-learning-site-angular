import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Course } from 'src/app/models/course';
import { Enroll } from 'src/app/models/enroll';
import { Student } from 'src/app/models/student';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  constructor(private route:ActivatedRoute,
    private router:Router,
    private course:CourseService,
    private http:HttpClient,private user:UserService) { }
  
cours:any={}
lessons:any=[]
  ngOnInit(): void {
    let idCours=this.route.snapshot.params.id;
    console.log(idCours)
    this.course.getOneCourse(idCours).subscribe(
      res=>{this.cours=res
this.lessons=res.lessons
        console.log(res.lessons)
      } ,err=>console.log(err)

    )
    

  }

  enroll(){
    let idCours=this.route.snapshot.params.id
    if(this.user.isLoggedInStudent())
    {
  let student=new Student(this.user.getIdStudent(),undefined,undefined,undefined,undefined,undefined)
  let cours=new Course(idCours,undefined,undefined,undefined,undefined,undefined)
  
  let enroll=new Enroll(undefined,student,cours)
  this.http.post<any>("http://localhost:8080/enroll/add",enroll).subscribe(
    res=>{console.log(res);
    this.router.navigateByUrl('/my-courses')
  console.log('hhh')},
    err=>console.log(err)
  );
  
    }
    else {alert('you have to be logged in');
    this.router.navigateByUrl('/login')

  }

}}
