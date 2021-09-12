import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css','./../../../../../assetsadmin/css/sb-admin-2.css']
})
export class SidebarComponent implements OnInit {
constructor(private user:UserService)
{}
  isAdmin:Boolean=false;
  isInstructor:Boolean=false
  isStudent:Boolean=false

  ngOnInit(): void {
    this.isAdmin=this.user.isLoggedInAdmin();
    this.isStudent=this.user.isLoggedInStudent();
    this.isInstructor=this.user.isLoggedInInstructor()
  
  }

}
