import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  list_categories:any[] = [];
list_courses:any[]=[];
allCourses:any[]=[];
  constructor(private categoryservice:CategoryService,private courserv:CourseService) { }
  ngOnInit(): void {
    this.categoryservice.get_categories().subscribe(
      res => { this.list_categories=res; 
      },
      err => { console.log(err); }

    )
    this.courserv.get_courses().subscribe(
      res=>{console.log(res);
        this.list_courses=res
      this.allCourses=res},
      err=>console.log(err)

    )}
    filterByCategory(id:Number | undefined){
console.log(id);
id == 0? this.list_courses=this.allCourses : this.list_courses=this.allCourses.filter((c)=>c.category.id == id)

    }
  
  }

