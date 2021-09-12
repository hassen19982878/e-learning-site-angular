import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css','./../../../../../../assetsadmin/css/sb-admin-2.css']
})
export class CourseListComponent implements OnInit {
coursesList: any[] =[];
  constructor(private serv:CourseService) { }

  ngOnInit(): void {
    this.serv.get_courses().subscribe(
      res=>{this.coursesList=res
      console.log(this.coursesList)},
      err=>console.log(err)      
    )
  }
  deleteCourse(course:Course){
    let index = this.coursesList.indexOf(course);
    this.coursesList.splice(index, 1);
    
    this.serv.delete_course(course.id).subscribe(
      res=>{console.log(res);},
      err=>console.log(err)
    )
  }
  

}
