import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css','./../../../../../../assetsadmin/css/sb-admin-2.css']
})
export class CategoryListComponent implements OnInit {
  list_categories: any[] = [];
  constructor(private categoryservice: CategoryService) { }

  ngOnInit(): void {

    this.categoryservice.get_categories().subscribe(
      res => { this.list_categories=res; },
      err => { console.log(err); }
    )
  }

  deleteCategory(category:any)
  {
    let index = this.list_categories.indexOf(category);
    this.list_categories.splice(index, 1);

    this.categoryservice.delete_category(category.id).subscribe(
      res => { console.log(res)},
      err => { console.log(err); }
    )
  }

}
