import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:Boolean | undefined;
  

  constructor(private user:UserService,private router:Router) { }

  ngOnInit(): void {
this.isLoggedIn=this.user.isLoggedIn();

  }
  logout()
  {localStorage.removeItem("my-token");
this.router.navigateByUrl('/login')
}

}
