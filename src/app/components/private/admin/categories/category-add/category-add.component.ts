import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css','./../../../../../../assetsadmin/css/sb-admin-2.css']
})
export class CategoryAddComponent implements OnInit {
  formAddCategory: FormGroup

  constructor(private fb: FormBuilder,private service:CategoryService,private router:Router) {
    let formControls =
    {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ])


    }
    this.formAddCategory = this.fb.group(formControls);

  }

  ngOnInit(): void {
  }
  verif(){console.log(this.formAddCategory.value)}
  get name() {
    return this.formAddCategory.get('name');
  }
  add_category() {
    console.log(this.formAddCategory.value);
    let data = this.formAddCategory.value;
    let category = new Category(undefined, data.name);
    this.service.add_category(category).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/categories-list');
      },
      err => { console.log(err); }
    )


      ;


  }
}

