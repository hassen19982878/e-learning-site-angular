import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }
  categories=[{id:1,name:'all'},
    {id:2,name:'Web'},
{id:3,name:'Graphic'},
{id:4,name:'Marketing'}]

courses=[{id:1,name:"course Html css",id_category:2},
{id:1,name:"course angular",id_category:2},]

  ngOnInit(): void {
  }

}
