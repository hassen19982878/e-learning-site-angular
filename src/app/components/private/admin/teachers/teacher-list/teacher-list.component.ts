import { Component, OnInit } from '@angular/core';
import { Instructor } from 'src/app/models/instructor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css','./../../../../../../assetsadmin/css/sb-admin-2.css']
})
export class TeacherListComponent implements OnInit {
  list_instructors:any[]=[]

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.user.get_instructors().subscribe(
      res=>{this.list_instructors=res;
      },
      err=>console.log(err)
        )
  }
  deleteInstructorById(instructor:Instructor)
{console.log(Instructor)
  let index = this.list_instructors.indexOf(instructor);
  this.list_instructors.splice(index, 1);
  this.user.delete_instructor_by_id(instructor.id).subscribe(
res=>console.log(res),
err=>console.log(err)

  )
}
changeStatus(instructor:Instructor)
{
  let index=this.list_instructors.indexOf(instructor);
  if(instructor.accountState==true)
  {let newInstructor=new Instructor(instructor.id,instructor.firstname,instructor.lastname,instructor.imageUrl,instructor.description,instructor.email,instructor.password,false)
this.user.updateInstructor(newInstructor).subscribe
(
  res=>{console.log(res)
  this.list_instructors[index]=newInstructor
  },
  err=>console.log(err)
)
  }
  else {
    let newInstructor=new Instructor(instructor.id,instructor.firstname,instructor.lastname,instructor.imageUrl,instructor.description,instructor.email,instructor.password,true);
this.user.updateInstructor(newInstructor).subscribe
(
  res=>{console.log(res);
    this.list_instructors[index]=newInstructor

  },
  err=>console.log(err)
)
  }

}

}
