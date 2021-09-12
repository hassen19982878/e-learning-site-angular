import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
list_categories:any=[]
  constructor(private categoryservice:CategoryService) { }

  ngOnInit(): void {
    
    this.categoryservice.get_categories().subscribe(
      res => { this.list_categories=res; },
      err => { console.log(err); }
    )

  }

}
