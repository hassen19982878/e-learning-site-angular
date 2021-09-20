import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-my-lessons',
  templateUrl: './my-lessons.component.html',
  styleUrls: ['./my-lessons.component.css','./../../../../../assetsadmin/css/sb-admin-2.css']
})
export class MyLessonsComponent implements OnInit {

  cours:any={}
  lessons:any=[]
  lesson:any={}
  constructor(private route:ActivatedRoute,private  course:CourseService) { }

  ngOnInit(): void {
    let idCours=this.route.snapshot.params.id;
    this.course.getOneCourse(idCours).subscribe(
      res=>{this.cours=res
this.lessons=res.lessons
      } ,err=>console.log(err)
    )
  }
  get_lessons(id:any)
  {
  for(let i=0;i<this.lessons.length;i++)
  {if(this.lessons[i].id==id)
    this.lesson=this.lessons[i]
  }
  }
}
