import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  constructor(private user:UserService) { }
list_instructors:any[]=[]
  ngOnInit(): void {
    this.user.get_instructors().subscribe(
      res=>this.list_instructors=res,
      err=>console.log(err)
    )
  }

}
